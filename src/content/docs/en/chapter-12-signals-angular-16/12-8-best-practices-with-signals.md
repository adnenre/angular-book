---
title: Best Practices with Signals
sidebar:
  order: 8
  label: 12.8 Best Practices with Signals
---

Best practices:

- use `computed` for derived values
- avoid unnecessary effects
- keep signals simple
- prefer signals for local state

Example:

```ts
import { signal, computed } from "@angular/core";

const price = signal(100);
const quantity = signal(2);

const total = computed(() => price() * quantity());
```
