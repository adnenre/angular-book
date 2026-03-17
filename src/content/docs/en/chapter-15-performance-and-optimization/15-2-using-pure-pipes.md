---
title: Using Pure Pipes
sidebar:
  order: 2
  label: 15.2 Using Pure Pipes
---

Pure pipes only re-run when input values change.

HTML example:

```html
<p>{{ amount | currency }}</p>
`` Explanation: - Use pure pipes for performance optimization - Avoid unnecessary recalculations
```
