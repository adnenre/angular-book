---
title: Router Configuration (RouterModule, Routes)
sidebar:
  order: 1
  label: 9.1 Router Configuration (RouterModule, Routes)
---

Angular routing enables navigation between views in a single-page application without reloading the page.

Routes are defined using the `Routes` array and registered using `RouterModule`.

```ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```
