---
title: Async Pipe for Observables and Promises
sidebar:
  order: 5
  label: 5.5 Async Pipe for Observables and Promises
---

The `async` pipe **automatically subscribes** to Observables or Promises in templates and returns the latest value.

```html
<p>{{ observableData$ | async }}</p>
<p>{{ promiseData | async }}</p>
```

In Angular 21, with zoneless apps and signal‑based change detection, the `async` pipe works predictably and efficiently without requiring `zone.js`.

> **Note:** The async pipe simplifies async data handling in templates and avoids memory leaks by handling unsubscription automatically.
