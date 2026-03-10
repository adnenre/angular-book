---
title: Lazy-Loaded Modules
sidebar:
  order: 7
  label: 2.7 Lazy-Loaded Modules
---

Lazy loading means that a module is loaded only when the user navigates to a specific route. This reduces the initial bundle size and improves performance.

- To implement lazy loading, use the `loadChildren` method in the route configuration.
- The lazy-loaded module has its own router (via `RouterModule.forChild(routes)`) and can define its own child routes.
- The module is not imported in `AppModule`; it is referenced only by the router.

**Example of route configuration (in `AppRoutingModule`):**

```js
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

**Example of a lazy module (`UsersModule`):**

```js
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from "./users-routing.module";
import { UserListComponent } from "./user-list.component";

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
```

```js
// users-routing.module.ts
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
```

> **Note**: With standalone components, lazy loading can be done directly at the component level, without an intermediate module, using `loadComponent` in routes.
