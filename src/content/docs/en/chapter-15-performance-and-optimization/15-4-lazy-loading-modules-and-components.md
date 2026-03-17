---
title: Lazy Loading Modules and Components
sidebar:
  order: 4
  label: 15.4 Lazy Loading Modules and Components
---

Lazy loading improves initial load performance.

Router example:

```ts
import { Routes } from '@angular/router';

export const routes: Routes = [
{
path: 'dashboard',
loadComponent: () =>
import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
}
];
``

Explanation:

- `loadComponent` dynamically imports component
- Reduces initial bundle size
```
