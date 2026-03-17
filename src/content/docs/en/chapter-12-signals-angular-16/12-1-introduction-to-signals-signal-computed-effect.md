---
title: Introduction to Signals (signal, computed, effect)
sidebar:
  order: 1
  label: 12.1 Introduction to Signals (signal, computed, effect)
---

Signals are a new reactive API introduced in Angular.

Main functions:

- signal() – creates a reactive value
- computed() – creates a derived value
- effect() – runs reactive side effects

```ts
import { signal, computed, effect } from "@angular/core";

const count = signal(0);

const doubleCount = computed(() => count() * 2);

effect(() => {
  console.log("Count changed:", count());
});
```
