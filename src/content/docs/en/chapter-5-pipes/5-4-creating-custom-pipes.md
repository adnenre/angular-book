---
title: Creating Custom Pipes
sidebar:
  order: 4
  label: 5.4 Creating Custom Pipes
---

### 5.4 Creating Custom Pipes

Custom pipes implement `PipeTransform`. In Angular 21, **pipes are standalone by default** but you can still mark them explicitly.

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "exclaim", // standalone by default in Angular 21
})
export class ExclaimPipe implements PipeTransform {
  transform(value: string, symbol: string = "!"): string {
    return value + symbol;
  }
}
```

Usage:

```html
<p>{{ 'Hello' | exclaim:'!!!' }}</p>
```

> **Note:** Custom pipes let you encapsulate reusable logic. Angular 21’s defaults simplify using pipes without extra boilerplate.
