---
title: PWA with Angular (Service Worker, Manifest)
sidebar:
  order: 5
  label: 24.5 PWA with Angular (Service Worker, Manifest)
---

Angular provides the `@angular/pwa` package to easily turn an application into a Progressive Web App.

### Adding PWA support

1. **Run the command:**

```bash
   ng add @angular/pwa

```

This command:

- Adds the `@angular/service-worker` package.
- Creates a configuration file `ngsw-config.json`.
- Creates `src/manifest.webmanifest` (icons, theme, etc.).
- Modifies `angular.json` to include the service worker in production.
- Adds a link to the manifest in `index.html`.

### Configuring the manifest (`src/manifest.webmanifest`)

```json
{
  "name": "My Awesome PWA",
  "short_name": "PWA",
  "theme_color": "#1976d2",
  "background_color": "#fafafa",
  "display": "standalone",
  "scope": "/",
  "start_url": "/",
  "icons": [
    {
      "src": "assets/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    }
    // ... other sizes
  ]
}
```

**Explanation:**

- **The manifest defines how the app appears on the home screen.**
- **Icons should be placed in `src/assets/icons` (the `ng add` script generates default icons).**

### Configuring the Service Worker (`ngsw-config.json`)

```json
{
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": ["/favicon.ico", "/index.html", "/manifest.webmanifest", "/*.css", "/*.js"]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": ["/assets/**"]
      }
    }
  ],
  "dataGroups": [
    {
      "name": "api",
      "urls": ["/api/**"],
      "cacheConfig": {
        "strategy": "freshness",
        "maxSize": 20,
        "maxAge": "1h",
        "timeout": "5s"
      }
    }
  ]
}
```

**Explanation:**

- **`assetGroups` defines how to cache static resources.**
- **`installMode: prefetch` downloads everything on installation; `lazy` downloads on demand.**
- **`dataGroups` configures caching for API calls (`freshness` or `performance` strategy).**

### Enabling the service worker

In `angular.json`, the production configuration should have:

```json
"configurations": {
  "production": {
    "serviceWorker": true,
    "ngswConfigPath": "ngsw-config.json"
    // ...
  }
}
```

### Testing locally

To test the PWA locally, use an HTTP server that supports HTTPS (or `http-server` with `-S`). The service worker only works over HTTPS or on `localhost`.

```bash
ng build --prod
npx http-server dist/my-app -p 8080
```

**Explanation:**

> - **The service worker enables offline mode, push notifications, and home screen installation.**

- **Fine-tuning via `ngsw-config.json` allows control over resource and data caching.**
- **Auditing with Lighthouse can validate PWA best practices.**

---
