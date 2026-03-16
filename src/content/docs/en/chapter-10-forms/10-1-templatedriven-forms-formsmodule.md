---
title: Template‑Driven Forms (FormsModule)
sidebar:
  order: 1
  label: 10.1 Template‑Driven Forms (FormsModule)
---

Template-Driven Forms rely mainly on Angular templates to manage form logic.  
They use directives such as `ngModel` and require importing `FormsModule`.

```ts
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [FormsModule],
})
export class AppModule {}
```

```html
<form #userForm="ngForm">
  <input name="username" ngModel placeholder="Username" />

  <button type="submit">Submit</button>
</form>
```
