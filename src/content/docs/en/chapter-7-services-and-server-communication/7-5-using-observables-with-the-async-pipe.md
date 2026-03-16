---
title: Using Observables with the async Pipe
sidebar:
  order: 5
  label: 7.5 Using Observables with the async Pipe
---

`async` pipe automatically subscribes to observables in templates.

```html
<p>{{ apiService.getData() | async }}</p>
``html > **Note:** In Angular 21, async pipe works with signal-based change detection for predictable updates.
```
