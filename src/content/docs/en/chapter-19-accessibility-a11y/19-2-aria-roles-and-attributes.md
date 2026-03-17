---
title: ARIA Roles and Attributes
sidebar:
  order: 2
  label: 19.2 ARIA Roles and Attributes
---

ARIA improves accessibility for assistive technologies.

TypeScript

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-alert",
  standalone: true,
  templateUrl: "./alert.component.html",
})
export class AlertComponent {
  message = "Login successful";
}
```

HTML

```html
<div role="alert">{{ message }}</div>
```
