---
title: Feature Modules and Root Module
sidebar:
  order: 5
  label: 2.5 Feature Modules and Root Module
---

### Root Module (`AppModule`)

- It is the main module of the application, passed to the `platformBrowserDynamic().bootstrapModule()` function.
- It typically imports `BrowserModule` (instead of `CommonModule`) because it runs in a browser.
- It declares the root component (`AppComponent`) and puts it in `bootstrap`.
- It can provide global services (but `providedIn: 'root'` is more common today).

```js
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Feature Modules

- They group coherent functionality (e.g., `UserModule`, `ProductModule`).
- They import `CommonModule` (or other needed modules) and may export their public components.
- They can be loaded eagerly (imported directly in `AppModule`) or lazily (via the router).
- They help structure the application, facilitate reuse, and improve maintainability.

**Example of a feature module:**

```js
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list.component";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [], // nothing to export if components are internal to the module
})
export class UserModule {}
```

> **Note**: In a standalone application, the concept of a root module disappears in favor of `bootstrapApplication`, and feature modules can be replaced by logical groupings of standalone components.
