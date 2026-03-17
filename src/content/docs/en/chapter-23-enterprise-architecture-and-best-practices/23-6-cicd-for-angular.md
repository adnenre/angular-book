---
title: CI/CD for Angular
sidebar:
  order: 6
  label: 23.6 CI/CD for Angular
---

Continuous Integration and Continuous Delivery (CI/CD) automate the building, testing, and deployment of your Angular 21 application.  
This section outlines a typical pipeline using GitHub Actions, but the principles apply to any CI/CD platform.

## Typical CI/CD Stages for Angular

1. **Install dependencies** – using the lock file for reproducibility.
2. **Lint and format** – ensure code style consistency.
3. **Run unit tests** – execute tests in a headless browser.
4. **Build the application** – create production bundles.
5. **Run e2e tests** (optional) – test critical user flows.
6. **Deploy** – upload the built artifacts to a hosting service.

## Example: GitHub Actions Workflow

Create `.github/workflows/ci.yml`:

```yaml
name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Test (unit)
        run: npm run test:ci # assumes script runs tests in headless mode with coverage

      - name: Build
        run: npm run build -- --configuration production

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/

  deploy:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v3
        with:
          publish-dir: dist/my-app
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

In package.json, add a script for CI tests:

```json
"scripts": {
  "test:ci": "ng test --no-watch --no-progress --browsers=ChromeHeadless"
}
```

This runs tests once with a headless browser, suitable for CI.

### Caching Dependencies

Use dependency caching to speed up builds. In GitHub Actions, actions/setup-node with `cache: 'npm' `automatically caches node_modules.

### Environment‑Specific Configuration

Use environment files as described in section 23.2. In CI, you can create environment files dynamically using secrets:

```yaml

- name: Create environment file
  run: |
  echo "export const environment = { production: true, apiUrl: '${{ secrets.API_URL }}' };" > src/environments/environment.prod.ts
```

### Deploying to Different Platforms

**Firebase Hosting**

```bash
npm install -g firebase-tools
firebase deploy --only hosting --token $FIREBASE_TOKEN
```

**AWS S3** / **CloudFront**

Use the AWS CLI to sync the dist folder to an S3 bucket.

**Vercel** / **Netlify**

Both have GitHub integrations that automatically deploy on push.

### Testing in CI

Unit tests – run ng test with a headless browser.

End‑to‑end tests – if using Cypress or Playwright, run them in CI. For Playwright:

```bash
npx playwright install
npm run e2e
```

### Performance Budgets

Include performance budgets in your CI to catch bundle size regressions. In angular.json:

```json
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "500kb",
    "maximumError": "1mb"
  }
]
```

If budgets are exceeded, the build will fail.

> A well‑configured CI/CD pipeline ensures that every change is tested and deployed reliably.
> Adapt the examples to your hosting provider and team workflows.
