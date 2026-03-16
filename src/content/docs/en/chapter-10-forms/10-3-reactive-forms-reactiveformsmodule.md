---
title: Reactive Forms (ReactiveFormsModule)
sidebar:
  order: 3
  label: 10.3 Reactive Forms (ReactiveFormsModule)
---

Reactive Forms use an explicit model defined in TypeScript.

They require importing `ReactiveFormsModule`.

```ts
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [ReactiveFormsModule],
})
export class AppModule {}
```

```ts
import { FormControl } from "@angular/forms";

name = new FormControl("");
```
