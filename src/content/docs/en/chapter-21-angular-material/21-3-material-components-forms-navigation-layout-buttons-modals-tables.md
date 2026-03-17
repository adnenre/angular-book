---
title: Material Components (Forms, Navigation, Layout, Buttons, Modals, Tables)
sidebar:
  order: 3
  label: 21.3 Material Components (Forms, Navigation, Layout, Buttons, Modals, Tables)
---

### 21.3 Material Components (Forms, Navigation, Layout, Buttons, Modals, Tables)

Angular Material provides many UI components.

Example using multiple components.

TypeScript

```ts
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
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
<mat-form-field appearance="outline">
  <mat-label>Email</mat-label>
  <input matInput type="email" />
</mat-form-field>

<button mat-raised-button color="primary" (click)="submit()">Submit</button>
```

Explanation

Material components simplify UI creation while maintaining accessibility and design standards.
