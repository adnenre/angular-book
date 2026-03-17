---
title: Environment Management (environment.ts)
sidebar:
  order: 2
  label: 23.2 Environment Management (environment.ts)
---

Angular projects use environment files to manage configuration values that differ between development, staging, and production.  
This section covers the modern approach to environment management in Angular 21, including the use of `angular.json` and tree‑shakeable providers.

## Traditional Environment Files

By default, the Angular CLI creates two environment files:

```bash
src/environments/
├── environment.ts (development)
└── environment.prod.ts (production)
```

You can define variables like API endpoints, feature flags, etc.

```ts
// environment.ts
export const environment = {
  production: false,
  apiUrl: "http://localhost:3000/api",
};
```

```ts
// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: "https://api.example.com",
};
```

## File Replacement in angular.json

The CLI replaces `environment.ts` with the correct environment file during build based on the configuration.

```json
// angular.json
"projects": {
  "my-app": {
    "architect": {
      "build": {
        "configurations": {
          "production": {
            "fileReplacements": [
              {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.prod.ts"
              }
            ]
          }
        }
      }
    }
  }
}
```

Using Environment Variables
Inject the environment into services or components:

```ts
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
    private apiUrl = environment.apiUrl;

    getData() {
      return fetch(${this.apiUrl}/data);
    }
}
```

Modern Alternatives (Angular 15+)
For better tree‑shaking and type safety, consider using Injection Tokens instead of importing environment files directly.

1. Create an Injection Token

```ts
// app.config.ts
import { InjectionToken } from "@angular/core";

export interface AppConfig {
  apiUrl: string;
  production: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>("APP_CONFIG");
```

2. Provide the Configuration
   In main.ts (for standalone bootstrap) or in the AppModule, provide the configuration:

```ts
// main.ts
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { APP_CONFIG } from "./app/app.config";
import { environment } from "./environments/environment";

bootstrapApplication(AppComponent, {
  providers: [{ provide: APP_CONFIG, useValue: environment }],
});
```

3. Inject Where Needed

```ts
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {}

getData() {
    return fetch(${this.config.apiUrl}/data);
  }
}
```

This approach makes your code more testable (you can provide a mock config) and avoids direct import coupling.

Environment Variables for Build‑Time Configuration
If you need to pass environment variables at build time (e.g., from CI), you can use the fileReplacements mechanism with generated files, or use a tool like dotenv with custom builders.
For Angular 17+, you can also use application builders that support environment variables via the define option (in angular.json):

```json
"build": {
  "builder": "@angular-devkit/build-angular:application",
  "options": {
    "define": {
      "API_URL": "https://api.example.com"
    }
  }
}
```

Then in your code, use declare const API_URL: string; to access it. This is a more modern, tree‑shakeable method.

Best Practices
Keep secrets out of environment files (they are bundled with the app). Use a backend API or a proxy.

Use different environment files for different stages: environment.staging.ts, environment.qa.ts.

Use TypeScript interfaces to type‑check environment objects.

Consider using isDevMode() from @angular/core to check if the app runs in development mode (useful for logging or debugging tools).

```ts
import { isDevMode } from "@angular/core";

if (isDevMode()) {
  console.log("Extra logging enabled");
}
```

> Environment management in Angular is straightforward with file replacements.
> For better architecture, use dependency injection with InjectionToken to inject configuration.
> In Angular 21, you can also leverage build‑time defines for advanced scenarios.
