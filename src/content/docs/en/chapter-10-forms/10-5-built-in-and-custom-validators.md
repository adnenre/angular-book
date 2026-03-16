---
title: Built-in and Custom Validators
sidebar:
  order: 5
  label: 10.5 Built-in and Custom Validators
---

Angular provides built-in validators and also allows custom validators.

Built-in validators include:

- required
- minlength
- maxlength
- email
- pattern

Example:

```ts
import { FormControl, Validators } from "@angular/forms";

email = new FormControl("", [Validators.required, Validators.email]);
```

Custom validator example:

```ts
import { AbstractControl, ValidationErrors } from "@angular/forms";

export function forbiddenName(control: AbstractControl): ValidationErrors | null {
  return control.value === "admin" ? { forbiddenName: true } : null;
}
```
