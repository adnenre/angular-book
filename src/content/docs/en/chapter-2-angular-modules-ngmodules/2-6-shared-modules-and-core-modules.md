---
title: Shared Modules and Core Modules
sidebar:
  order: 6
  label: 2.6 Shared Modules and Core Modules
---

# Fichier : 2.6-shared-modules-and-core-modules.md

## 2.6 Shared Modules and Core Modules (English)

Two common organizational patterns with NgModules: **SharedModule** and **CoreModule**.

### SharedModule

- Contains reusable components, directives, and pipes used in multiple feature modules.
- It does **not** include services (or if it does, they should be singleton‑scoped; generally avoid).
- It imports and exports common Angular modules (`CommonModule`, `FormsModule`) so that client modules don't have to import them.
- It is imported into every feature module that needs its elements.

**Example:**

```js
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HighlightDirective } from "./highlight.directive";
import { EllipsisPipe } from "./ellipsis.pipe";

@NgModule({
  declarations: [HighlightDirective, EllipsisPipe],
  imports: [CommonModule],
  exports: [HighlightDirective, EllipsisPipe, CommonModule],
})
export class SharedModule {}
```

### CoreModule

- Groups services and components that should be instantiated only once in the application (e.g., authentication service, header, footer).
- It is imported only by the `AppModule`.
- To prevent multiple imports, a guard is often added in the constructor of `CoreModule` that checks if it is imported elsewhere.

**Example with guard:**

```js
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header.component';

@NgModule({
declarations: [HeaderComponent],
exports: [HeaderComponent],
providers: [AuthService]
})
export class CoreModule {
constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
if (parentModule) {
throw new Error('CoreModule is already loaded. Import it only in AppModule.');
}
}
}
```

> **Note**: With standalone components and `providedIn: 'root'` services, these patterns become less necessary, but they remain valid for module‑based applications.
