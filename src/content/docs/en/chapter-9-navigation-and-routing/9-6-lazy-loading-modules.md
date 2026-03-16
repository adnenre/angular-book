---
title: Lazy Loading Modules
sidebar:
  order: 6
  label: 9.6 Lazy Loading Modules
---

Lazy loading allows Angular to load feature modules only when the user navigates to them. This improves application performance.

```typescript
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "products",
    loadChildren: () => import("./products/products.module").then((m) => m.ProductsModule),
  },
];
```

Example feature routing module:

```typescript
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";

const routes: Routes = [{ path: "", component: ProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
```
