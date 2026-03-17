---
title: Keyframe Animations
sidebar:
  order: 5
  label: 18.5 Keyframe Animations
---

Keyframes define intermediate steps during an animation.

TypeScript

```ts
import { Component } from "@angular/core";
import { trigger, transition, animate, keyframes, style } from "@angular/animations";

@Component({
  selector: "app-keyframe",
  standalone: true,
  templateUrl: "./keyframe.component.html",
  animations: [
    trigger("bounce", [
      transition(":enter", [
        animate(
          "600ms ease-out",
          keyframes([
            style({ transform: "translateY(-100px)", offset: 0 }),
            style({ transform: "translateY(20px)", offset: 0.5 }),
            style({ transform: "translateY(0)", offset: 1 }),
          ]),
        ),
      ]),
    ]),
  ],
})
export class KeyframeComponent {}
```

HTML

```html
<div @bounce class="box">Bouncing Element</div>
```
