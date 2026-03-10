---
title: Evolution Standalone Components (Angular 14+) and Module Reduction
sidebar:
  order: 9
  label: 2.9 Evolution Standalone Components (Angular 14+) and Module Reduction
---

# Fichier : 2.9-standalone-components-evolution.md

## 2.9 Evolution: Standalone Components (Angular 14+) and Module Reduction (English)

Angular 14 introduced **standalone components**, which allow creating components, directives, and pipes without having to declare them in an NgModule. This evolution simplifies architecture and reduces verbosity.

### Characteristics

- A standalone component declares its dependencies directly in its decorator via the `imports` property.
- It can be used without a parent module by importing it where needed.
- Application bootstrap is done with `bootstrapApplication` instead of `bootstrapModule`.

**Example of a standalone component:**

```js
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-standalone",
  standalone: true,
  imports: [CommonModule, FormsModule], // direct dependencies
  template: `
    <input [(ngModel)]="name" placeholder="Name" />
    <p>Hello {{ name }}!</p>
  `,
})
export class StandaloneComponent {
  name = "";
}
```

**Bootstrapping an application with standalone components:**

```js
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent);
```

### Impact on Modules

- NgModules become optional. They can still be used to organize complex features, but they are no longer mandatory.
- Shared modules can be replaced by sets of standalone components exported individually.
- Lazy loading can be done directly on a component with `loadComponent`.

**Lazy loading a standalone component:**

```js
const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent)
  }
];
```

> **Note**: Standalone components represent the future of Angular; new projects are encouraged to use them. However, NgModules remain fully supported for compatibility with existing applications.
