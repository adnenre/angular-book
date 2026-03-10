---
title: Scope of Declarations
sidebar:
  order: 8
  label: 2.8 Scope of Declarations
---

Elements declared in a module (`declarations`) are visible only:

- In the templates of other elements declared in the **same** module.
- In the templates of modules that import this module **and** that export those elements.

Conversely, a component declared in module A cannot be used directly in the template of a component in module B unless:

- Module A exports that component, **and**
- Module B imports module A.

This encapsulation avoids naming collisions and clarifies dependencies.

**Example:**

```js
// module A
@NgModule({
  declarations: [CompA],
  exports: [CompA],
})
export class ModuleA {}

// module B
@NgModule({
  declarations: [CompB],
  imports: [ModuleA], // now CompA is usable in CompB's template
})
export class ModuleB {}
```

If `CompA` were not exported, `ModuleB` could not use it, even by importing `ModuleA`.

> **Note**: In a standalone‑component architecture, this notion of scope is replaced by direct imports of components in templates (`imports` array of `@Component`), making visibility more explicit.
