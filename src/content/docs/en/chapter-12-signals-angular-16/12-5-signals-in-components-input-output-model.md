---
title: Signals in Components (input, output, model)
sidebar:
  order: 5
  label: 12.5 Signals in Components (input, output, model)
---

Angular allows using Signals for component inputs and outputs.

```ts
import { Component, input } from "@angular/core";

@Component({
  selector: "app-user",
  template: `<p>{{ name() }}</p>`,
})
export class UserComponent {
  name = input<string>();
}
```
