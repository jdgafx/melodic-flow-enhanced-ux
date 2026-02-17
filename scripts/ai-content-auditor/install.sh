#!/bin/bash

# AI Content Auditor - Installation Script
# This script installs the AI Content Auditor plugin for OpenCode

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLUGIN_NAME="ai-content-auditor"
OPENCODE_PLUGINS_DIR="${HOME}/.config/opencode/plugins"

echo "🔧 AI Content Auditor Installation"
echo "═══════════════════════════════════════"
echo

# Check if opencode config exists
if [ ! -d "${HOME}/.config/opencode" ]; then
    echo "❌ OpenCode config directory not found!"
    echo "   Please install OpenCode first."
    exit 1
fi

# Create plugins directory if needed
mkdir -p "${OPENCODE_PLUGINS_DIR}"

# Check if already installed
if [ -d "${OPENCODE_PLUGINS_DIR}/${PLUGIN_NAME}" ]; then
    echo "⚠️  Plugin already installed at ${OPENCODE_PLUGINS_DIR}/${PLUGIN_NAME}"
    read -p "   Do you want to reinstall? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "   Installation cancelled."
        exit 0
    fi
    rm -rf "${OPENCODE_PLUGINS_DIR}/${PLUGIN_NAME}"
fi

# Copy plugin files
echo "📦 Copying plugin files..."
cp -r "${SCRIPT_DIR}" "${OPENCODE_PLUGINS_DIR}/${PLUGIN_NAME}"

# Make CLI executable
chmod +x "${OPENCODE_PLUGINS_DIR}/${PLUGIN_NAME}/ai-auditor.js"

# Create symlink for global access (optional)
read -p "   Create global 'ai-auditor' command? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    sudo ln -sf "${OPENCODE_PLUGINS_DIR}/${PLUGIN_NAME}/ai-auditor.js" /usr/local/bin/ai-auditor
    echo "   ✅ Global command 'ai-auditor' created"
fi

echo
echo "✅ Installation complete!"
echo
echo "Usage:"
echo "   ai-auditor https://example.com"
echo "   ai-auditor --batch urls.txt"
echo
echo "Or use in OpenCode:"
echo "   const { auditPage } = require('ai-content-auditor');"
echo
