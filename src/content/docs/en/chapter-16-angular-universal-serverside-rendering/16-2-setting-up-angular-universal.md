---
title: Setting Up Angular Universal
sidebar:
  order: 2
  label: 16.2 Setting Up Angular Universal
---

Angular Universal enables Server-Side Rendering for Angular applications.

Install Angular Universal using Angular CLI.

```bash
ng add @angular/ssr
```

This command:

- configures server rendering
- adds server entry files
- updates build configuration

TypeScript Example (Server bootstrap)

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { provideServerRendering } from "@angular/platform-server";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [provideServerRendering()],
});
```

_Explanation_

> The `provideServerRendering()` function enables Angular to render components on the server.
