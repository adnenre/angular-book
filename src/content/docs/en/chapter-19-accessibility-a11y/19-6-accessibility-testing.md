---
title: Accessibility Testing
sidebar:
  order: 6
  label: 19.6 Accessibility Testing
---

Accessibility testing ensures compliance with WCAG standards.

Popular tools:

- Lighthouse
- axe DevTools
- Angular ESLint accessibility rules

Example Lighthouse command

```bash
npm install -g lighthouse

lighthouse http://localhost:4200
```

Example accessible form

TypeScript

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-form",
  standalone: true,
  templateUrl: "./form.component.html",
})
export class FormComponent {
  submit() {
    console.log("Form submitted");
  }
}
```

HTML

```html
<label for="email">Email</label>
<input id="email" type="email" required />

<button (click)="submit()">Submit</button>
```
