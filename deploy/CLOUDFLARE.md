# Cloudflare Workers Deployment

## Every repo needs

| Item | Value for this repository |
| --- | --- |
| Repository | `fed-edu-org-onboarding` |
| Production branch | `main` |
| Worker project | `fed-edu-org-onboarding` |
| Deploy command | `npx wrangler deploy --assets=.` |
| Files | Static HTML, CSS, JavaScript, Markdown, and assets |
| Build command | Blank for plain HTML |
| Variables/secrets | `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` in GitHub Actions |
| Bindings | None required for static assets |

## Plain HTML project

- Root directory: `/`
- Production branch: `main`
- Build command: leave blank
- Deploy command: `npx wrangler deploy --assets=.`
- If the site lives in `public/`, use `npx wrangler deploy --assets=public`.

## Worker-code project

Use `npm ci && npm run build` as the build command, followed by `npx wrangler deploy`. A minimal Worker configuration is:

```jsonc
{
  "name": "your-worker-name",
  "main": "src/index.js",
  "compatibility_date": "2026-09-25"
}
```

## Framework output directories

| Framework | Typical output |
| --- | --- |
| Vite | `dist` |
| React | `build` or `dist` |
| Astro | `dist` |
| Hugo | `public` |
| Plain HTML at root | `.` |
| Plain HTML in a folder | `public` |

Do not add a Hugo build command unless a Hugo configuration exists.

## Before-deploy checklist

1. Confirm the production branch and target Worker name.
2. Review `wrangler.jsonc` and the asset directory.
3. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository secrets.
4. Run local link and HTML checks.
5. Review the deployment URL and confirm that onboarding links, support links, and age-gated pages behave correctly.

For a multi-platform-publishing repository whose contents are already built, the deploy command is only `npx wrangler deploy --assets=.`.
