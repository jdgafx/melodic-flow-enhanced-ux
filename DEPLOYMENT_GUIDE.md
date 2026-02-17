# DNS & Deployment Guide

## Current Deployment Status

**Production URL:** https://convertiq.com

## Deployment Platforms

### Netlify (Primary)

1. **Connect Repository**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select GitHub → choose convertiq repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 20

3. **Environment Variables** (in Netlify dashboard)
   - Add any required env vars from `.env.example`

4. **Build Hook** (for CI/CD)
   - Settings → Deploys → Build hooks
   - Create hook: `https://api.netlify.com/build_hooks/<HOOK_ID>`
   - Store in GitHub Secrets: `NETLIFY_BUILD_HOOK`

### Cloudflare (Alternative)

If using Cloudflare Pages instead:

1. **Connect to Cloudflare**
   - Go to https://dash.cloudflare.com
   - Pages → Connect GitHub repo

2. **Build Settings**
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `out`

3. **Custom Domain**
   - Add custom domain in Cloudflare Pages
   - Update DNS at your registrar

## DNS Configuration

### If Using Netlify

Netlify automatically manages DNS when you add a custom domain:

1. In Netlify: Site settings → Domain management → Add custom domain
2. Follow Netlify's DNS instructions (typically just point nameservers)

### If Using Cloudflare

1. **Add Site to Cloudflare**
   - Add site in Cloudflare dashboard
   - Update nameservers at your domain registrar

2. **DNS Records**
   ```
   Type    Name            Value                    Proxy
   A       @               <CLOUDFLARE_IP>         Proxied
   CNAME   www            your-site.pages.dev      Proxied
   ```

3. **SSL/TLS**
   - Full (strict) mode recommended
   - Cloudflare will auto-generate certificates

## Triggering Deploys

### Manual Netlify Deploy

```bash
# Using build hook
curl -X POST https://api.netlify.com/build_hooks/<YOUR_HOOK_ID>

# Or via GitHub
git push origin main
```

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2
        with:
          publish-dir: './out'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
          enable-pull-request-comment: false
          enable-commit-comment: true
          overwrites-pull-request-comment: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Secrets Management

| Secret | Where to Store | Purpose |
|--------|---------------|---------|
| `NETLIFY_AUTH_TOKEN` | GitHub Secrets | CI/CD deployment |
| `NETLIFY_SITE_ID` | GitHub Secrets | Netlify site ID |
| `NETLIFY_BUILD_HOOK` | GitHub Secrets | Trigger builds |
| `CLOUDFLARE_API_TOKEN` | GitHub Secrets | Cloudflare deploy |

## Verification Commands

Run these locally before deploying:

```bash
# Install deps
npm ci

# Lint
npm run lint

# Type check
npx tsc --noEmit

# Build
npm run build

# Preview locally (if supported)
npm run start
```
