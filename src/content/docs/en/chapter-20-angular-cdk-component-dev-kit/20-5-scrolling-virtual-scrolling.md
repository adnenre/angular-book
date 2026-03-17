---
title: Scrolling (Virtual Scrolling)
sidebar:
  order: 5
  label: 20.5 Scrolling (Virtual Scrolling)
---

Virtual scrolling renders only visible items instead of rendering the entire list.

This improves performance when dealing with large datasets.

TypeScript

```ts
import { Component } from "@angular/core";
import { ScrollingModule } from "@angular/cdk/scrolling";

@Component({
  selector: "app-virtual-list",
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: "./virtual-list.component.html",
})
export class VirtualListComponent {
  items = Array.from({ length: 10000 }).map((_, i) => `Item ${i}`);
}
```

HTML

```html
<cdk-virtual-scroll-viewport itemSize="50" style="height:300px">
  <div *cdkVirtualFor="let item of items">{{ item }}</div>
</cdk-virtual-scroll-viewport>
```

**Explanation**

> Only visible list items are rendered, improving performance dramatically.
