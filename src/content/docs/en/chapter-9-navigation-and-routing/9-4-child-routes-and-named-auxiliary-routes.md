---
title: Child Routes and Named (Auxiliary) Routes
sidebar:
  order: 4
  label: 9.4 Child Routes and Named (Auxiliary) Routes
---

Child routes allow nesting routes inside a parent route. This is useful for layouts where a parent component contains a router outlet that loads different child components.

```ts
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { StatsComponent } from "./stats.component";
import { ReportsComponent } from "./reports.component";

export const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "stats", component: StatsComponent },
      { path: "reports", component: ReportsComponent },
    ],
  },
];
```

The parent template must contain a router outlet.

```html
<h2>Dashboard</h2>
<router-outlet></router-outlet>
```

Named (auxiliary) routes allow rendering multiple routed components simultaneously.

```html
<router-outlet></router-outlet> <router-outlet name="sidebar"></router-outlet>
```

```

```
