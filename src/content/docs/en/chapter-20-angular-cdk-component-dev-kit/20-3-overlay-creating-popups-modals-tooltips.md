---
title: Overlay (Creating Popups, Modals, Tooltips)
sidebar:
  order: 3
  label: 20.3 Overlay (Creating Popups, Modals, Tooltips)
---

The Overlay module allows creating floating UI elements such as:

- Modals
- Dropdown menus
- Tooltips
- Context menus

TypeScript

```ts
import { Component } from "@angular/core";
import { OverlayModule } from "@angular/cdk/overlay";

@Component({
  selector: "app-overlay-example",
  standalone: true,
  imports: [OverlayModule],
  templateUrl: "./overlay.component.html",
})
export class OverlayExampleComponent {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
```

HTML

```html
<button (click)="toggle()">Toggle Popup</button>

<div *ngIf="isOpen" class="popup">This is a popup overlay</div>
```

**Explanation**

> Overlay allows components to appear above other content.
