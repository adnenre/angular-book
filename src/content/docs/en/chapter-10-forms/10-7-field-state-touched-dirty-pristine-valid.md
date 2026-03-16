---
title: Field State (touched, dirty, pristine, valid)
sidebar:
  order: 7
  label: 10.7 Field State (touched, dirty, pristine, valid)
---

Angular tracks the state of form fields.

Common field states:

- touched – field has been visited
- dirty – value has changed
- pristine – value has not changed
- valid – field passes validation
- invalid – field fails validation

```ts
<input name="username" ngModel #username="ngModel">

<div *ngIf="username.touched && username.invalid">
  Invalid username
</div>
```
