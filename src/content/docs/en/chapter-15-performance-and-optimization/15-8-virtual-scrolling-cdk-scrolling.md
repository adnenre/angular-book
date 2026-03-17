---
title: Virtual Scrolling (CDK Scrolling)
sidebar:
  order: 8
  label: 15.8 Virtual Scrolling (CDK Scrolling)
---

Virtual scrolling renders only visible items.

TypeScript:

```ts
import { Component } from '@angular/core';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';

@Component({
selector: 'app-virtual-scroll',
standalone: true,
imports: [ScrollingModule],
templateUrl: './virtual-scroll.component.html'
})
export class VirtualScrollComponent {
items = Array.from({ length: 10000 }).map((\_, i) => `Item #${i}`);
}
```

HTML:

```html
<cdk-virtual-scroll-viewport itemSize="50" style="height:200px">
  <div *cdkVirtualFor="let item of items">{{ item }}</div>
</cdk-virtual-scroll-viewport>
```
