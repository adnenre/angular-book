---
title: Drag and Drop
sidebar:
  order: 6
  label: 20.6 Drag and Drop
---

Angular CDK provides drag-and-drop functionality.

Install module:

```ts
import { DragDropModule } from "@angular/cdk/drag-drop";
```

TypeScript

```ts
import { Component } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-drag",
  standalone: true,
  imports: [DragDropModule],
  templateUrl: "./drag.component.html",
})
export class DragComponent {
  items = ["Item 1", "Item 2", "Item 3"];
}
```

HTML

```html
<div cdkDropList>
  <div *ngFor="let item of items" cdkDrag>{{ item }}</div>
</div>
```
