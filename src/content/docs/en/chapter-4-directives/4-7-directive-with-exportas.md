---
title: Directive with exportAs
sidebar:
  order: 7
  label: 4.7 Directive with exportAs
---

The `exportAs` property of the `@Directive` decorator allows you to export the directive instance to a template variable, giving you access to its public API from the template.

### Basic example

```js
import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appCounter]",
  exportAs: "appCounter",
  standalone: true,
})
export class CounterDirective {
  count = 0;

  @HostListener("click") onClick() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }
}
```

**Usage in template:**

```js
import { Component } from "@angular/core";
import { CounterDirective } from "./counter.directive";

@Component({
  selector: "app-export-demo",
  standalone: true,
  imports: [CounterDirective],
  template: `
    <div appCounter #counter="appCounter">Click me (count: {{ counter.count }})</div>
    <button (click)="counter.reset()">Reset</button>
  `,
})
export class ExportDemoComponent {}
```

Here, `#counter="appCounter"` creates a template variable `counter` that references the directive instance. We can then access its `count` property and call its `reset()` method.

### Why use exportAs?

- It exposes the directive's API to the template.
- Useful for directives that encapsulate behavior like forms, drag‑and‑drop, or any reusable logic that needs to be accessed from the template.
- It works similarly to how `ngForm` exports the `ngForm` directive instance to a variable like `#myForm="ngForm"`.

### Multiple exportAs names

You can provide multiple names by separating them with commas:

```typescript
@Directive({
  selector: '[appCombo]',
  exportAs: 'appCombo, combo'
})
```

Then you can use either `#var="appCombo"` or `#var="combo"`.

> Note: exportAs is also available for components, though it's less common.
