---
title: Forms in Standalone Components
sidebar:
  order: 11
  label: 10.11 Forms in Standalone Components
---

Angular standalone components can use forms without NgModules.

```ts
import { Component } from "@angular/core";
import { ReactiveFormsModule, FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule],
  template: ` <input [formControl]="email" /> `,
})
export class LoginComponent {
  email = new FormControl("");
}
```
