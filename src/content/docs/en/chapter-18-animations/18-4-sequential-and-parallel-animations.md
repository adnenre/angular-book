---
title: Sequential and Parallel Animations
sidebar:
  order: 4
  label: 18.4 Sequential and Parallel Animations
---

Angular allows animations to run:

Sequentially (one after another)  
Parallel (simultaneously)

Functions used:

- sequence()
- group()

TypeScript

```ts
import { Component } from "@angular/core";
import { trigger, transition, style, animate, sequence, group } from "@angular/animations";

@Component({
  selector: "app-sequence",
  standalone: true,
  templateUrl: "./sequence.component.html",
  animations: [
    trigger("complexAnimation", [
      transition(":enter", [
        sequence([
          style({ opacity: 0 }),
          animate("300ms", style({ opacity: 1 })),
          group([animate("400ms", style({ transform: "scale(1.2)" })), animate("400ms", style({ backgroundColor: "lightblue" }))]),
        ]),
      ]),
    ]),
  ],
})
export class SequenceComponent {}
```

HTML

```html
<div @complexAnimation class="box">Animated Box</div>
```

**Explanation**

- `sequence()` executes steps one after another
- `group()` runs animations simultaneously
