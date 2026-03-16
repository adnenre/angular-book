---
title: Preloading Strategies (PreloadAllModules, Custom)
sidebar:
  order: 7
  label: 9.7 Preloading Strategies (PreloadAllModules, Custom)
---

Preloading loads lazy-loaded modules in the background after the application has started.

Angular provides two built-in strategies:

- NoPreloading (default)
- PreloadAllModules

Example using PreloadAllModules:

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Custom preloading strategy:

```typescript
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data["preload"]) {
      return load();
    }
    return of(null);
  }
}
```
