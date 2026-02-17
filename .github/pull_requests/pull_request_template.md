## Description

<!-- What changes were made and why? -->

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Refactor
- [ ] Documentation update
- [ ] UI/UX change
- [ ] Dark mode migration

## Branch Naming Convention

- `feature/<description>` - New features
- `fix/<description>` - Bug fixes
- `refactor/<description>` - Code improvements
- `darkmode/<description>` - Dark mode migration work
- `docs/<description>` - Documentation updates

Example: `feature/add-pricing-page` or `darkmode/migrate-homepage`

## Checklist (must complete before merge)

- [ ] Code builds successfully: `npm run build` exits with code 0
- [ ] No lint errors: `npm run lint` passes
- [ ] No TypeScript errors: `npx tsc --noEmit` passes
- [ ] All pages render without console errors
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Dark mode styling applied consistently
- [ ] Images and assets optimized
- [ ] SEO metadata verified
- [ ] Tested in browser (Chrome, Firefox, Safari)

## Verification Commands

```bash
# Install dependencies
npm ci

# Run linter
npm run lint

# Type check
npx tsc --noEmit

# Build for production
npm run build

# Run diagnostics on changed files
# (use lsp_diagnostics in IDE or editor)
```

## Deployment

- [ ] Netlify build hook configured (if applicable)
- [ ] Build preview tested
- [ ] Production deployment verified
- [ ] DNS/Cloudflare settings updated (if applicable)

## Screenshots (if UI changes)

<!-- Add screenshots of changes -->

## Related Issues

- Closes #
- Related to #

## Notes for Reviewers

<!-- Any special instructions for reviewers -->
