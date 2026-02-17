#!/usr/bin/env bash
# Helper script to copy convertiq.com into this directory and apply melodic-flow UI assets
set -euo pipefail

DRY_RUN=false
while [[ "$#" -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN=true; shift ;;
    *) shift ;;
  esac
done

SRC="/home/chris/dev/CUSTOMER_PROJECTS/convertiq.com"
DEST_DIR="$(pwd)"
DOWNLOADS="/home/chris/Downloads/melodic-flow---enhanced-ux"

echo "Source: $SRC"
echo "Destination: $DEST_DIR"
echo "Melodic assets: $DOWNLOADS"

if [ "$DRY_RUN" = true ]; then
  echo "DRY RUN — no files will be copied"
  echo "Would copy:"
  echo "  - $SRC/src -> $DEST_DIR/src"
  echo "  - $DOWNLOADS/tailwind.config.ts -> $DEST_DIR/tailwind.config.ts"
  echo "  - $DOWNLOADS/components -> $DEST_DIR/src/components"
  echo "  - $DOWNLOADS/branding -> $DEST_DIR/public/branding"
  echo "  - create redacted netlify.toml placeholder"
  exit 0
fi

mkdir -p "$DEST_DIR/src"
rsync -a --exclude 'node_modules' --exclude '.git' "$SRC/" "$DEST_DIR/"
cp -a "$DOWNLOADS/tailwind.config.ts" "$DEST_DIR/" || true
mkdir -p "$DEST_DIR/src/components"
cp -a "$DOWNLOADS/components/"* "$DEST_DIR/src/components/" || true
mkdir -p "$DEST_DIR/public/branding"
cp -a "$DOWNLOADS/branding/"* "$DEST_DIR/public/branding/" || true

cat > "$DEST_DIR/netlify.toml" <<'EOF'
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/"
  to = "/index.html"
  status = 200

# Build hook placeholder: https://api.netlify.com/build_hooks/<REDACTED>
EOF

echo "Files copied. Next steps: npm install, build, and test locally. I will not commit or push changes unless you ask."
