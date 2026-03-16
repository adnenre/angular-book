---
title: Routing with Standalone Components
sidebar:
  order: 10
  label: 9.10 Routing with Standalone Components
---

Angular supports routing with standalone components without using NgModules.

Define routes:

```typescript
import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];
```

Bootstrap the application with router providers:

```typescript
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
```
