---
title: A11yModule (Focus Management, LiveAnnouncer, etc.)
sidebar:
  order: 2
  label: 20.2 A11yModule (Focus Management, LiveAnnouncer, etc.)
---

The A11yModule provides tools for improving accessibility.

Important utilities:

- FocusMonitor
- LiveAnnouncer
- FocusTrap
- AriaDescriber

Example using LiveAnnouncer.

TypeScript

```ts
import { Component } from "@angular/core";
import { A11yModule, LiveAnnouncer } from "@angular/cdk/a11y";

@Component({
  selector: "app-announcer",
  standalone: true,
  imports: [A11yModule],
  templateUrl: "./announcer.component.html",
})
export class AnnouncerComponent {
  constructor(private announcer: LiveAnnouncer) {}

  announceMessage() {
    this.announcer.announce("Item added to cart");
  }
}
```

HTML

```html
<button (click)="announceMessage()">Add Item</button>
```

**Explanation**

> Screen readers will announce the message when the button is clicked.
