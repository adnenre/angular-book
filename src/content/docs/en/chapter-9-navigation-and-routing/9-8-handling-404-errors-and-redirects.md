---
title: Handling 404 Errors and Redirects
sidebar:
  order: 8
  label: 9.8 Handling 404 Errors and Redirects
---

Angular allows redirecting routes and handling unknown paths.

Redirect example:

```typescript
const routes = [{ path: "", redirectTo: "/home", pathMatch: "full" }];
```

404 handling using a wildcard route:

```typescript
const routes = [
  { path: "home", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent },
];
```

The wildcard route must always be placed last in the routing configuration.
