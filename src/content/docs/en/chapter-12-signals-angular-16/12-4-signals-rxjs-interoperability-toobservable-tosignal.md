---
title: Signals / RxJS Interoperability (toObservable, toSignal)
sidebar:
  order: 4
  label: 12.4 Signals / RxJS Interoperability (toObservable, toSignal)
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
