---
title: Using the CDK with Material
sidebar:
  order: 5
  label: 21.5 Using the CDK with Material
---

### 21.5 Using the CDK with Material

Angular Material is built on top of Angular CDK.

Developers can combine Material UI with CDK utilities.

Example: Drag and drop with Material list.

TypeScript

```ts
import { Component } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-drag-list",
  standalone: true,
  imports: [DragDropModule, MatListModule],
  templateUrl: "./drag-list.component.html",
})
export class DragListComponent {
  items = ["Item 1", "Item 2", "Item 3"];
}
```

HTML

```html
<div cdkDropList>
  <mat-list-item *ngFor="let item of items" cdkDrag> {{ item }} </mat-list-item>
</div>
```
