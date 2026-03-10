---
title: Understanding the angular.json File
sidebar:
  order: 6
  label: 1.6 Understanding the angular.json File
---

# 1.6 Understanding the angular.json File

The `angular.json` file at the root of the workspace contains configuration for all projects in the workspace. Key sections:

- **`projects`** – defines each project (applications, libraries) with settings like:
  - `root`, `sourceRoot`
  - `architect` – build, serve, test, etc. targets with specific options.
- **`defaultProject`** – the project to use when not specified.
- **`cli`** – CLI preferences (e.g., package manager, schematics defaults).

Example snippet (simplified):

```json
{
  "version": 1,
  "projects": {
    "my-app": {
      "projectType": "application",
      "root": "",
      "sourceRoot": "src",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json"
          },
          "configurations": {
            "production": { ... }
          }
        },
        "serve": { ... },
        "test": { ... }
      }
    }
  },
  "cli": {
    "packageManager": "npm"
  }
}
```

> You can modify these settings to change build options, asset paths, development server ports, etc.
