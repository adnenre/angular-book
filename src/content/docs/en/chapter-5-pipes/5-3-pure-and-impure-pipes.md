---
title: Pure and Impure Pipes
sidebar:
  order: 3
  label: 5.3 Pure and Impure Pipes
---

In Angular:

- **Pure pipes** run **only when the input reference changes**
- **Impure pipes** run **on every change detection cycle**

This behavior stands in Angular 21, though the zoneless/signal change detection makes pure pipes more predictable.

Example of a pure pipe:

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "double", pure: true })
export class DoublePipe implements PipeTransform {
  transform(value: number): number {
    return value * 2;
  }
}
```

> **Note:** Pure pipes help performance by avoiding unnecessary recalculations. Angular 21’s signal‑based reactivity makes pipe updates more efficient and deterministic.
