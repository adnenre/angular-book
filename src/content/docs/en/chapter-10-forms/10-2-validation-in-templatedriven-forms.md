---
title: Validation in Template‑Driven Forms
sidebar:
  order: 2
  label: 10.2 Validation in Template‑Driven Forms
---

Angular provides built-in validation directives for Template-Driven Forms.

Examples include `required`, `minlength`, `maxlength`, and `pattern`.

```html
<form #form="ngForm">
  <input name="email" ngModel required email #email="ngModel" />

  <div *ngIf="email.invalid && email.touched">Invalid email address</div>
</form>
```
