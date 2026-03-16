---
title: FormControl, FormGroup, FormArray
sidebar:
  order: 4
  label: 10.4 FormControl, FormGroup, FormArray
---

Reactive forms are composed of three main building blocks.

- FormControl – represents a single form field
- FormGroup – groups multiple controls
- FormArray – manages a dynamic list of controls

```ts
import { FormGroup, FormControl } from "@angular/forms";

profileForm = new FormGroup({
  name: new FormControl(""),
  email: new FormControl(""),
});
```
