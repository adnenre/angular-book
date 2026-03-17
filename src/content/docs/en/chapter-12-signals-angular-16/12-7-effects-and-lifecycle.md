---
title: Effects and Lifecycle
sidebar:
  order: 7
  label: 12.7 Effects and Lifecycle
---

Effects allow executing code whenever a signal changes.

```ts
import { signal, effect } from "@angular/core";

const counter = signal(0);

effect(() => {
  console.log("Counter value:", counter());
});
```
