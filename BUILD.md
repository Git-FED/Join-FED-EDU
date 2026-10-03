# Build and Validation

This is a static site and has no required build step. Open `index.html` directly for a local preview.

Optional validation commands when Node.js tooling is available:

```bash
npx markdownlint-cli2 "**/*.md"
npx html-validate "*.html"
```

The GitHub Actions workflows run these checks when their dependencies are available.
