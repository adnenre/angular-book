---
title: Error Handling and Displaying Messages
sidebar:
  order: 10
  label: 10.10 Error Handling and Displaying Messages
---

### 10.10 Error Handling and Displaying Messages

Displaying validation errors improves user experience.

```ts
<input
  formControlName="email">

<div *ngIf="form.controls.email.errors?.required">
  Email is required
</div>

<div *ngIf="form.controls.email.errors?.email">
  Invalid email format
</div>
```
