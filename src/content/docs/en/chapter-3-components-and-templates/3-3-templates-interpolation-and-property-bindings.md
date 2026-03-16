---
title: Templates Interpolation and Property Bindings
sidebar:
  order: 3
  label: 3.3 Templates Interpolation and Property Bindings
---

Angular templates combine HTML with data-binding syntax. Two fundamental forms:

### Interpolation `{{ }}`

Displays the value of a TypeScript expression in the template.

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-interpolation",
  standalone: true,
  template: `
    <h1>Hello {{ firstName }} {{ lastName }}!</h1>
    <p>Total: {{ 10 + 20 }}</p>
    <p>Name in uppercase: {{ lastName.toUpperCase() }}</p>
  `,
})
export class InterpolationComponent {
  firstName = "John";
  lastName = "Doe";
}
```

### Property binding `[property]="expression"`

Binds a property of a DOM element or a directive to an expression. The target is evaluated and assigned.

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-property-binding",
  standalone: true,
  template: `
    <input [value]="userName" (input)="userName = $any($event.target).value" />
    <button [disabled]="isDisabled">Click me</button>
    <img [src]="imageUrl" [alt]="imageAlt" />
  `,
})
export class PropertyBindingComponent {
  userName = "Initial";
  isDisabled = true;
  imageUrl = "https://example.com/logo.png";
  imageAlt = "Logo";
}
```

> **Note**: Property binding is one-way (component to view). For two-way binding, use `[(ngModel)]` or combine `[value]` and `(input)`.
