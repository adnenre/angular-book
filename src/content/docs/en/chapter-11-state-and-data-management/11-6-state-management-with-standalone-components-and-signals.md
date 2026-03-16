---
title: State Management with Standalone Components and Signals
sidebar:
  order: 6
  label: 11.6 State Management with Standalone Components and Signals
---

Angular now allows state management using Signals.

```ts
import { signal } from "@angular/core";

export class CounterStore {
  counter = signal(0);

  increment() {
    this.counter.update((value) => value + 1);
  }
}
```
