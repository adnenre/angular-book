---
title: Focus Management
sidebar:
  order: 4
  label: 19.4 Focus Management
---

Focus should move logically when UI changes.

TypeScript

```ts
import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-focus",
  standalone: true,
  templateUrl: "./focus.component.html",
})
export class FocusComponent {
  @ViewChild("inputRef") input!: ElementRef<HTMLInputElement>;

  focusInput() {
    this.input.nativeElement.focus();
  }
}
```

HTML

```html
<input #inputRef type="text" />

<button (click)="focusInput()">Focus Input</button>
```
