---
title: Tree (Tree View)
sidebar:
  order: 8
  label: 20.8 Tree (Tree View)
---

Tree components display hierarchical data structures.

TypeScript

```ts
import { Component } from "@angular/core";
import { CdkTreeModule } from "@angular/cdk/tree";

@Component({
  selector: "app-tree",
  standalone: true,
  imports: [CdkTreeModule],
  templateUrl: "./tree.component.html",
})
export class TreeComponent {
  nodes = [{ name: "Parent", children: ["Child 1", "Child 2"] }];
}
```

HTML

```html
<ul>
  <li *ngFor="let node of nodes">
    {{ node.name }}
    <ul>
      <li *ngFor="let child of node.children">{{ child }}</li>
    </ul>
  </li>
</ul>
```
