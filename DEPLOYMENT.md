# Deployment

## GitHub Pages

Enable Pages with **GitHub Actions** as the source. The workflow in `.github/workflows/deploy-pages.yml` publishes the repository root.

## Cloudflare Workers

For static assets, review [deploy/CLOUDFLARE.md](deploy/CLOUDFLARE.md), configure the required Cloudflare secrets, and run the Workers workflow only after reviewing the deployment target.
