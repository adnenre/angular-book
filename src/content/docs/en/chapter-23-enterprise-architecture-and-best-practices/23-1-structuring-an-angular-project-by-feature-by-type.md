---
title: Structuring an Angular Project (By Feature, By Type)
sidebar:
  order: 1
  label: 23.1 Structuring an Angular Project (By Feature, By Type)
---

A well‑structured Angular project improves maintainability, scalability, and team collaboration.  
This section compares two common approaches – **by feature** and **by type** – and recommends a hybrid strategy using standalone components (Angular 21).

## By Type (Technical) Structure

Organise files by their technical role (components, services, pipes, etc.).

```shell
src/
├── app/
│ ├── components/
│ │ ├── header/
│ │ └── footer/
│ ├── services/
│ │ ├── user.service.ts
│ │ └── auth.service.ts
│ ├── pipes/
│ │ └── truncate.pipe.ts
│ ├── directives/
│ │ └── highlight.directive.ts
│ └── app.component.ts
```

**Pros**:

- Simple and familiar for small projects.
- Easy to locate a file if you know its type.

**Cons**:

- As the app grows, related files become scattered.
- Difficult to navigate by domain.

## By Feature (Domain) Structure

Organise files by business feature or module. Each feature contains its own components, services, and other artefacts.

```shell
src/
├── app/
│ ├── features/
│ │ ├── dashboard/
│ │ │ ├── dashboard.component.ts
│ │ │ ├── dashboard.service.ts
│ │ │ └── dashboard.routes.ts
│ │ ├── admin/
│ │ │ ├── admin.component.ts
│ │ │ ├── admin.service.ts
│ │ │ └── admin.routes.ts
│ │ └── shared/
│ │ ├── components/
│ │ ├── directives/
│ │ └── pipes/
│ ├── core/
│ │ ├── services/
│ │ │ └── auth.service.ts
│ │ └── interceptors/
│ │ └── auth.interceptor.ts
│ └── app.component.ts

```

**Pros**:

- Feature isolation: teams can work on separate features independently.
- Easier lazy loading.
- Clear ownership.

**Cons**:

- May lead to duplication if shared code is not extracted properly.
- Requires discipline to maintain boundaries.

## Recommended Hybrid Approach with Standalone Components (Angular 21)

With standalone components, you no longer need feature modules. Each component declares its own dependencies.  
A recommended structure for Angular 21+ projects:

```shell
src/
├── app/
│ ├── features/
│ │ ├── dashboard/ # Feature folder
│ │ │ ├── dashboard.component.ts
│ │ │ ├── dashboard.service.ts
│ │ │ ├── dashboard.routes.ts # Routes for this feature
│ │ │ └── widgets/ # Sub‑components specific to dashboard
│ │ │ ├── stats-widget.component.ts
│ │ │ └── chart-widget.component.ts
│ │ └── admin/ # Another feature
│ │ ├── admin.component.ts
│ │ ├── admin.service.ts
│ │ └── admin.routes.ts
│ ├── shared/ # Reusable, feature‑agnostic code
│ │ ├── components/
│ │ │ ├── button/
│ │ │ └── modal/
│ │ ├── directives/
│ │ ├── pipes/
│ │ └── models/ # TypeScript interfaces/types
│ ├── core/ # Singleton services, app‑wide setup
│ │ ├── services/
│ │ │ ├── auth.service.ts
│ │ │ └── logger.service.ts
│ │ ├── interceptors/
│ │ │ └── auth.interceptor.ts
│ │ └── guards/
│ │ └── auth.guard.ts
│ ├── app.component.ts # Root component
│ └── app.routes.ts # Top‑level routes
└── assets/ # Images, i18n files, etc.
```

### Key Points

- **Features** – each feature is a folder containing all its artefacts. Since components are standalone, there is no `@NgModule`; dependencies are imported directly in each component.
- **Shared** – place truly reusable components, directives, pipes, and models here. Avoid importing feature‑specific code into shared.
- **Core** – holds singleton services, HTTP interceptors, and guards that are used application‑wide. These are typically provided in `root`.

## Example: A Standalone Feature Component

```ts
// features/dashboard/dashboard.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { StatsWidgetComponent } from "./widgets/stats-widget.component";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule, RouterModule, StatsWidgetComponent],
  template: `
    <h2>Dashboard</h2>
    <app-stats-widget></app-stats-widget>
    <a routerLink="./details">View Details</a>
  `,
})
export class DashboardComponent {
  constructor(private dashboardService: DashboardService) {}
}
```

## Lazy Loading a Feature

Define routes in a separate file and import them via `loadChildren` (or `loadComponent` for single components).

```ts
// features/dashboard/dashboard.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [ ... ] // optional child routes
  }
];
```

Then load the feature in `app.routes.ts`:

```ts
// app.routes.ts
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import("./features/dashboard/dashboard.routes").then((r) => r.DASHBOARD_ROUTES),
  },
];
```

## Conclusion

A feature‑based structure with standalone components scales well and aligns with Angular’s current best practices.  
Always keep the **shared** and **core** folders clean and avoid circular dependencies. Use ESLint rules to enforce boundaries.
