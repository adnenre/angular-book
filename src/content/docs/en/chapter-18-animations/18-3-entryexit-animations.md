---
title: Entry/Exit Animations
sidebar:
  order: 3
  label: 18.3 Entry/Exit Animations
---

### 18.3 Entry/Exit Animations

Entry and exit animations run when elements are added or removed from the DOM.

Angular uses:

:enter  
:leave

Example

TypeScript

```ts
import { Component, signal } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-list",
  standalone: true,
  templateUrl: "./list.component.html",
  animations: [
    trigger("listAnimation", [
      transition(":enter", [
        style({ transform: "translateY(-20px)", opacity: 0 }),
        animate("300ms ease-out", style({ transform: "translateY(0)", opacity: 1 })),
      ]),
      transition(":leave", [animate("200ms ease-in", style({ opacity: 0 }))]),
    ]),
  ],
})
export class ListComponent {
  visible = signal(true);
}
```

HTML

```html
<button (click)="visible.set(!visible())">Toggle List</button>

<ul *ngIf="visible()" @listAnimation>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

Explanation

`:enter` triggers when element appears.
`:leave` triggers when element is removed.

```

```
