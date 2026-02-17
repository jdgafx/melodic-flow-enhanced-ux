Migration helper for converting convertiq.com into the alternate darkmode repo

This repository is intentionally a guarded copy for experimenting with the melodic-flow dark-mode theme.

How to use (dry-run first):

1. Inspect the script: scripts/clone_and_apply_theme.sh
2. Run a dry run (no commits or pushes):
   bash scripts/clone_and_apply_theme.sh --dry-run

What the script does (non-destructive):
- clones or copies the working convertiq.com source into this directory
- copies Tailwind / theme files from ~/Downloads/melodic-flow---enhanced-ux
- creates a netlify.toml placeholder with redacted build-hook placeholder
- does NOT run npm install, build, or push to remote unless you ask

Security:
- The script references keys in /home/chris/dev/keys_and_mcps.md but never writes tokens into the repo.

When you approve, I can run the script to perform the copy locally. I will not commit or push any changes without explicit instruction.
