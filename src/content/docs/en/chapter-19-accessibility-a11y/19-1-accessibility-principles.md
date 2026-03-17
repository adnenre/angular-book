---
title: Accessibility Principles
sidebar:
  order: 1
  label: 19.1 Accessibility Principles
---

Accessibility ensures applications can be used by people with disabilities.

Main principles (WCAG):

- Perceivable
- Operable
- Understandable
- Robust

Example accessible button

TypeScript

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-button",
  standalone: true,
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  action() {
    console.log("Action triggered");
  }
}
```

HTML

```html
<button (click)="action()" aria-label="Submit form">Submit</button>
```
