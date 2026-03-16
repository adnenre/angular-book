---
title: Parameterizing and Chaining Pipes
sidebar:
  order: 2
  label: 5.2 Parameterizing and Chaining Pipes
---

### 5.2 Parameterizing and Chaining Pipes

You can **pass parameters** to pipes and **chain multiple pipes** in Angular templates.

```html
<p>{{ birthday | date:'shortDate' }}</p>
<p>{{ name | uppercase | slice:0:5 }}</p>
```

Explanation:

- `date:'shortDate'` → formats the date in short form
- `uppercase | slice:0:5` → converts to uppercase then slices first 5 characters

> **Note:** Parameterizing and chaining pipes make transformations concise and readable in templates. With Angular 21 and its signal‑based change detection, pipes react efficiently to actual data changes.
