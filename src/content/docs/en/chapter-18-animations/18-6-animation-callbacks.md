---
title: Animation Callbacks
sidebar:
  order: 6
  label: 18.6 Animation Callbacks
---

Angular provides animation lifecycle events:

- start
- done

TypeScript

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-callback",
  standalone: true,
  templateUrl: "./callback.component.html",
})
export class CallbackComponent {
  onAnimationStart() {
    console.log("Animation started");
  }

  onAnimationDone() {
    console.log("Animation finished");
  }
}
```

HTML

```html
<div @fadeAnimation (@fadeAnimation.start)="onAnimationStart()" (@fadeAnimation.done)="onAnimationDone()">Animated Element</div>
```
