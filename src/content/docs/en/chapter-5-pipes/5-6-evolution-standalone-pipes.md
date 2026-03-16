---
title: Evolution Standalone Pipes
sidebar:
  order: 6
  label: 5.6 Evolution Standalone Pipes
---

Angular 21 treats pipes as **standalone by default**, making them easy to import into standalone components without NgModules.

Example pipe:

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse", // standalone by default in Angular 21
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return [...value].reverse().join("");
  }
}
```

Usage in a standalone component:

```typescript
import { Component } from "@angular/core";
import { ReversePipe } from "./reverse.pipe";

@Component({
  selector: "app-demo",
  standalone: true,
  imports: [ReversePipe],
  template: `<p>{{ "Angular" | reverse }}</p>`,
})
export class DemoComponent {}
```

> **Note:** In Angular 21, pipes work seamlessly with standalone components and signal‑based change detection. The default standalone model reduces boilerplate and improves modularity.
