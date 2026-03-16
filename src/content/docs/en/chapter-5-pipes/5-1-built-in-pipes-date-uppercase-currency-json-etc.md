---
title: Built-in Pipes (date, uppercase, currency, json, etc.)
sidebar:
  order: 1
  label: 5.1 Built-in Pipes (date, uppercase, currency, json, etc.)
---

Angular **pipes** are used to transform data in templates. They can be built-in, chained, parameterized, pure, impure, or custom.

> ⚠️ Since Angular 17, pipes can also be **standalone**, imported directly into standalone components.

### 5.1 Common built-in pipes include:

- `date` → formats dates
- `uppercase` / `lowercase` → changes text case
- `currency` → formats currency values
- `json` → stringifies objects
- `percent` → formats percentages

Example:

```html
<p>{{ today | date:'fullDate' }}</p>
<p>{{ name | uppercase }}</p>
<p>{{ price | currency:'USD' }}</p>
<p>{{ data | json }}</p>
```

### 5.2 Parameterizing and Chaining Pipes

You can **pass parameters** to pipes and **chain multiple pipes**.

```html
<p>{{ birthday | date:'shortDate' }}</p>
<p>{{ name | uppercase | slice:0:5 }}</p>
```

Explanation:

- `date:'shortDate'` → formats the date in short format
- `uppercase | slice:0:5` → converts to uppercase, then takes the first 5 characters

---

### 5.3 Pure and Impure Pipes

- **Pure pipes**: called only when the input **changes by reference**
- **Impure pipes**: called on **every change detection cycle**

Example of a pure pipe (default behavior):

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "double", pure: true })
export class DoublePipe implements PipeTransform {
  transform(value: number): number {
    return value * 2;
  }
}
```

### 5.4 Creating Custom Pipes

Custom pipes implement `PipeTransform`.

Example:

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "exclaim",
  standalone: true,
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

### 5.5 Async Pipe for Observables and Promises

The `async` pipe **subscribes to Observables or Promises** and returns the latest value.

```html
<p>{{ observableData$ | async }}</p>
<p>{{ promiseData | async }}</p>
```

It automatically **handles unsubscription** for Observables.

### 5.6 Evolution: Standalone Pipes

Angular 17+ allows **standalone pipes**, which can be **imported directly into standalone components** without modules.

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split("").reverse().join("");
  }
}
```

### Usage in a standalone component:

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

> **Note:** Pipes are a powerful way to transform data in templates. With Angular 17+, standalone pipes allow **modular, reusable transformation logic** that works without NgModules.
