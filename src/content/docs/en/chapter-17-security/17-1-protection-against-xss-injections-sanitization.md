---
title: Protection Against XSS Injections (Sanitization)
sidebar:
  order: 1
  label: 17.1 Protection Against XSS Injections (Sanitization)
---

Angular automatically sanitizes unsafe values.

Example

```html
<div [innerHTML]="htmlContent"></div>
```

TypeScript

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-content",
  standalone: true,
  templateUrl: "./content.component.html",
})
export class ContentComponent {
  htmlContent = '<script>alert("XSS")</script>';
}
```

**Explanation**

> Angular removes unsafe script tags before rendering.
