---
title: Declaring a Module (@NgModule)
sidebar:
  order: 2
  label: 2.2 Declaring a Module (@NgModule)
---

A module is declared using the `@NgModule` decorator applied to a TypeScript class. This decorator takes a metadata object that describes the module.

Main properties of `@NgModule`:

- **`declarations`**: list of components, directives, and pipes that belong to this module.
- **`imports`**: list of other modules that this module needs (e.g., `BrowserModule`, `CommonModule`, `FormsModule`).
- **`exports`**: list of elements declared in this module that should be visible to modules that import it.
- **`providers`**: list of services (injectables) available in the injector of this module.
- **`bootstrap`**: defines the root component to launch for the root module (used only by `AppModule`).

**Example of a traditional root module:**

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

**Example of a feature module:**

```js
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./user-profile.component";
import { UserService } from "./user.service";

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule],
  providers: [UserService],
  exports: [UserProfileComponent],
})
export class UserModule {}
```

> **Note**: In modern applications using standalone components, you can omit `declarations` and `bootstrap` because the root component is configured directly in `main.ts` with `bootstrapApplication`.
