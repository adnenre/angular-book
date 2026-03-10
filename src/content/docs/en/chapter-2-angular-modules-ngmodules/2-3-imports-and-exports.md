---
title: Imports and Exports
sidebar:
  order: 3
  label: 2.3 Imports and Exports
---

The `imports` and `exports` properties of the `@NgModule` decorator manage dependencies between modules.

### `imports`

- Allows importing other modules that the current module needs.
- Components, directives, and pipes exported by the imported modules become usable in the templates of the current module.
- Typical example: importing `CommonModule` to get structural directives (`*ngIf`, `*ngFor`).

```js
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatureComponent } from "./feature.component";

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule], // provides *ngIf, *ngFor, etc.
})
export class FeatureModule {}
```

### `exports`

- Makes certain elements declared in the module (components, directives, pipes) public so that other modules that import this module can use them.
- Without `exports`, elements remain private to the module.
- You can also re-export imported modules (e.g., re-export `CommonModule` so that its directives are available without an extra import).

```js
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedComponent } from "./shared.component";

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule],
  exports: [SharedComponent, CommonModule], // export both the component and CommonModule
})
export class SharedModule {}
```

> **Note**: Exporting an imported module (like `CommonModule`) avoids having to import it again in client modules.
