---
title: Guards (CanActivate, CanActivateChild, CanDeactivate, Resolve, CanLoad)
sidebar:
  order: 5
  label: 9.5 Guards (CanActivate, CanActivateChild, CanDeactivate, Resolve, CanLoad)
---

Route guards control navigation and determine whether a user can access a route.

Common guard types:

- CanActivate – determines if a route can be activated
- CanActivateChild – protects child routes
- CanDeactivate – prevents leaving a component
- Resolve – loads data before route activation
- CanLoad – prevents lazy modules from loading

```ts
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    const isLoggedIn = true;
    return isLoggedIn;
  }
}
```

Applying the guard to a route:

```ts
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard]
}
```
