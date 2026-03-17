---
title: Accessible Components with Angular CDK
sidebar:
  order: 5
  label: 19.5 Accessible Components with Angular CDK
---

Angular CDK provides accessibility utilities.

Install CDK

```shell
npm install @angular/cdk

```

TypeScript

```ts
import { Component } from "@angular/core";
import { LiveAnnouncer } from "@angular/cdk/a11y";

@Component({
  selector: "app-announcer",
  standalone: true,
  templateUrl: "./announcer.component.html",
})
export class AnnouncerComponent {
  constructor(private announcer: LiveAnnouncer) {}

  notify() {
    this.announcer.announce("Item added");
  }
}
```

HTML

```html
<button (click)="notify()">Add Item</button>
```
