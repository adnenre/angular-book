---
title: Migrating to Standalone Components (Angular 14+)
sidebar:
  order: 3
  label: 22.3 Migrating to Standalone Components (Angular 14+)
---

Standalone components were introduced in Angular 14 and became the default in v17.  
This guide explains how to migrate an existing NgModule‑based application to standalone components using Angular 21.

## Why Migrate?

- **Simpler architecture** – no need for NgModules to declare and import components.
- **Better lazy loading** – components can be loaded directly with `loadComponent`.
- **Easier testing** – no need to mock entire modules.
- **Future‑proof** – future Angular versions may reduce NgModule usage further.

## Automatic Migration

The Angular CLI provides a migration schematic that converts most of your code automatically:

```bash
ng generate @angular/core:standalone
```

This schematic:

- Converts components, directives, and pipes to standalone: true.

- Adds necessary imports to their imports array.

- Replaces bootstrapModule with bootstrapApplication in main.ts.

- Converts lazy routes to use loadComponent where possible.

Manual Steps After Automatic Migration
After running the schematic, review and adjust:

Bootstrap – your `main.ts` should now use bootstrapApplication:

```ts
// main.ts (after migration)
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // other providers (e.g., provideHttpClient(), provideAnimations())
  ],
});
```

Routing – update lazy routes to use loadComponent:

```ts
// app.routes.ts
export const routes: Routes = [
  {
    path: "admin",
    loadComponent: () => import("./admin/admin.component").then((c) => c.AdminComponent),
  },
];
```

**Shared modules**
replace NgModule imports with their standalone equivalents.
For example, if you had a SharedModule exporting CommonModule, FormsModule, and a custom directive, you now import those directly into your standalone component:

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

@Component({
selector: 'app-example',
standalone: true,
imports: [CommonModule, FormsModule, HighlightDirective],
template: ...
})
export class ExampleComponent { }
```

**Testing**
update test setup to import standalone components directly:

```ts
import { TestBed } from "@angular/core/testing";
import { ExampleComponent } from "./example.component";

describe("ExampleComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleComponent], // instead of declarations
    }).compileComponents();
  });
});
```

Handling Module‑Only Providers
Some features (like RouterModule.forRoot()) are replaced by provider functions.
In Angular 21, use:

provideRouter(routes)`instead of`RouterModule.forRoot(routes)`.

`provideHttpClient()` instead of `HttpClientModule`.

`provideAnimations()` instead of `BrowserAnimationsModule`.

These functions are tree‑shakeable and work seamlessly with bootstrapApplication or route providers.

> Migrating to standalone components streamlines your codebase and aligns with Angular’s future direction.
> Always run the automatic migration first, then manually verify and update tests, lazy routes, and provider configurations.
