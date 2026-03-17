---
title: Keyboard Navigation
sidebar:
  order: 3
  label: 19.3 Keyboard Navigation
---

Keyboard users should be able to interact with UI.

TypeScript

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-keyboard",
  standalone: true,
  templateUrl: "./keyboard.component.html",
})
export class KeyboardComponent {
  submit() {
    console.log("Submitted");
  }
}
```

HTML

```html
<button (click)="submit()" (keydown.enter)="submit()">Submit</button>
```
