# GitHub Pages Deployment

1. Open repository **Settings → Pages**.
2. Set the source to **GitHub Actions**.
3. Ensure the default branch is `main`.
4. Push a commit or run the `Deploy to GitHub Pages` workflow manually.
5. The workflow uses `actions/upload-pages-artifact@v3` and `actions/deploy-pages@v4`.
6. Confirm the published URL in the workflow environment output.

The workflow publishes the repository root, including `index.html`, Markdown documentation, assets, and support pages.
