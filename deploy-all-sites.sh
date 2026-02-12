#!/bin/bash

# Melodic Flow Bulk Deployment Script
# Deploys multiple sites with identical content but different branding

set -e

# Configuration
NETLIFY_TOKEN="nfp_gLSgPpQvRHDPSNKjAf5kEyLHRN6kTn1958c9"
SITES_CONFIG="sites-config.json"
BUILD_DIR="dist"
LOG_FILE="deploy-status.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Logging function
log() {
    local level=$1
    shift
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO") echo -e "${GREEN}[INFO]${NC} $timestamp - $message" ;;
        "WARN") echo -e "${YELLOW}[WARN]${NC} $timestamp - $message" ;;
        "ERROR") echo -e "${RED}[ERROR]${NC} $timestamp - $message" ;;
        *) echo -e "${BLUE}[LOG]${NC} $timestamp - $message" ;;
    esac
}

# Error handling
error_exit() {
    log "ERROR" "$1"
    exit 1
}

# Check if required tools exist
check_dependencies() {
    command -v jq >/dev/null 2>&1 || error_exit "jq is required but not installed"
    command -v curl >/dev/null 2>&1 || error_exit "curl is required but not installed"
}

# Read sites configuration
read_sites_config() {
    if [[ ! -f "$SITES_CONFIG" ]]; then
        error_exit "Sites configuration file $SITES_CONFIG not found"
    fi
    
    jq -r '.' "$SITES_CONFIG" 2>/dev/null || error_exit "Invalid JSON in $SITES_CONFIG"
}

# Deploy individual site
deploy_site() {
    local site_name="$1"
    local site_config="$2"
    
    log "INFO" "Starting deployment for site: $site_name"
    
    # Extract site configuration
    local site_info=$(echo "$site_config" | jq -r --arg site="$site_name" '.sites[] | select(.name == $site_name)')
    
    if [[ -z "$site_info" ]]; then
        error_exit "Site $site_name not found in configuration"
    fi
    
    local domain=$(echo "$site_info" | jq -r '.domain')
    local title=$(echo "$site_info" | jq -r '.title')
    local logo_path=$(echo "$site_info" | jq -r '.branding.logo')
    local primary_color=$(echo "$site_info" | jq -r '.branding.primaryColor')
    local secondary_color=$(echo "$site_info" | jq -r '.branding.secondaryColor')
    local theme=$(echo "$site_info" | jq -r '.branding.theme')
    local site_name_display=$(echo "$site_info" | jq -r '.branding.siteName')
    
    log "INFO" "Domain: $domain"
    log "INFO" "Title: $title"
    log "INFO" "Theme: $theme"
    log "INFO" "Site Name: $site_name_display"
    
    # Check if logo exists
    if [[ ! -f "$logo_path" ]]; then
        log "WARN" "Logo not found at $logo_path, using default"
        logo_path=""
    fi
    
    # Build project if needed
    if [[ ! -d "$BUILD_DIR" ]]; then
        log "INFO" "Building project..."
        npm run build || error_exit "Build failed"
    fi
    
    # Create site-specific branding
    local temp_branding_dir="temp-branding-$site_name"
    mkdir -p "$temp_branding_dir"
    
    # Copy base files
    cp branding/site1/* "$temp_branding_dir/" 2>/dev/null || true
    
    # Apply custom branding
    if [[ -n "$logo_path" && -f "$logo_path" ]]; then
        cp "$logo_path" "$temp_branding_dir/logo.svg" 2>/dev/null || true
    fi
    
    # Create custom CSS with branding colors
    cat > "$temp_branding_dir/custom.css" << EOF
:root {
    --primary-color: ${primary_color};
    --secondary-color: ${secondary_color};
    --logo-path: url('./logo.svg');
    }
EOF
    
    # Update index.html with site-specific branding
    sed "s/Melodic Flow Enhanced UX/g" "$BUILD_DIR/index.html" > temp_index.html
    sed "s/melodic-flow-enhanced-ux/$domain/g" "$BUILD_DIR/index.html" >> temp_index.html
    
    # Add custom CSS link
    echo '<link rel="stylesheet" href="./custom.css">' >> temp_index.html
    
    # Copy modified files to build directory
    cp temp_index.html "$BUILD_DIR/"
    cp "$temp_branding_dir/custom.css" "$BUILD_DIR/"
    if [[ -f "$temp_branding_dir/logo.svg" ]]; then
        cp "$temp_branding_dir/logo.svg" "$BUILD_DIR/"
    fi
    
    log "INFO" "Custom branding applied for $site_name"
    
    # Create Netlify site
    local site_id=$(curl -s -H "Authorization: Bearer $NETLIFY_TOKEN" \
        -H "Content-Type: application/json" \
        -d "{\"name\":\"$site_name\",\"custom_domain\":\"$domain\"}" \
        "https://api.netlify.com/api/v1/sites" | jq -r '.id')
    
    if [[ -z "$site_id" ]]; then
        error_exit "Failed to create Netlify site for $site_name"
    fi
    
    log "INFO" "Created Netlify site: $site_name (ID: $site_id)"
    
    # Deploy site
    local deploy_result=$(curl -s -X POST \
        -H "Authorization: Bearer $NETLIFY_TOKEN" \
        -H "Content-Type: application/zip" \
        --data-binary @"$BUILD_DIR.zip" \
        "https://api.netlify.com/api/v1/sites/$site_id/deploys" | jq -r '.state')
    
    if [[ "$deploy_result" == "uploaded" ]]; then
        log "INFO" "Site $site_name deployed successfully"
        echo "{\"$site_name\":\"$site_id\",\"status\":\"deployed\",\"deployed_at\":\"$(date -Iseconds)\"}" >> "$LOG_FILE"
    else
        log "ERROR" "Deployment failed for $site_name"
        echo "{\"$site_name\":\"$site_id\",\"status\":\"failed\",\"error\":\"$deploy_result\"}" >> "$LOG_FILE"
    fi
    
    # Cleanup
    rm -rf "$temp_branding_dir"
}

# Deploy all sites with auto-deploy enabled by default
deploy_all_sites() {
    log "INFO" "Starting bulk deployment of all sites"
    
    read_sites_config
    
    # Deploy each site
    echo "$SITES_CONFIG" | jq -r '.sites[] | .name' | while IFS= read -r site_name; do
        deploy_site "$site_name" "$SITES_CONFIG"
    done
    
    log "INFO" "Bulk deployment completed"
}

# Parse command line arguments
main() {
    log "INFO" "Melodic Flow Bulk Deployment Script Started"
    
    check_dependencies
    
    # Default to auto-deploy all sites
    local auto_deploy="true"
    
    # Parse command line arguments
    case "${1:-all}" in
        "all")
            auto_deploy="true"
            deploy_all_sites
            ;;
        *)
            if [[ -n "$1" ]]; then
                auto_deploy="false"
                deploy_site "$1" "$SITES_CONFIG"
            else
                echo "Usage: $0 [site_name|all]"
                echo "Available sites:"
                read_sites_config | jq -r '.sites[] | .name' | sed 's/^/  - /'
                exit 1
            ;;
    esac
    fi
    
    # Execute with parsed arguments
    if [[ "$auto_deploy" == "true" ]]; then
        deploy_all_sites
    fi
}

# Main execution
main() {
    log "INFO" "Melodic Flow Bulk Deployment Script Started"
    
    check_dependencies
    
    # Parse command line arguments
    case "${1:-all}" in
        "all")
            deploy_all_sites
            ;;
        *)
            if [[ -n "$1" ]]; then
                deploy_site "$1" "$SITES_CONFIG"
            else
                echo "Usage: $0 [site_name|all]"
                echo "Available sites:"
                read_sites_config | jq -r '.sites[] | .name' | sed 's/^/  - /'
                exit 1
            ;;
    esac
}

# Execute main function with all arguments
main "$@"