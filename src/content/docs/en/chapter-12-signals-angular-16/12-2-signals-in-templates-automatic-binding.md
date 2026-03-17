---
title: Signals in Templates (Automatic Binding)
sidebar:
  order: 2
  label: 12.2 Signals in Templates (Automatic Binding)
---

Signals can be used directly inside Angular templates.

```ts
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update((v) => v + 1);
  }
}
```

```ts
<p>{{ count() }}</p>

<button (click)="increment()">
  Increment
</button>
```
