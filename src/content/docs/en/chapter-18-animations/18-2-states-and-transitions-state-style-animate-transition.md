---
title: States and Transitions (state, style, animate, transition)
sidebar:
  order: 2
  label: 18.2 States and Transitions (state, style, animate, transition)
---

Angular animations often depend on component state.  
States represent visual configurations and transitions define how Angular moves between them.

Example: Expand / Collapse Panel

TypeScript

```ts
import { Component, signal } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-panel",
  standalone: true,
  templateUrl: "./panel.component.html",
  animations: [
    trigger("expandCollapse", [
      state(
        "closed",
        style({
          height: "0px",
          opacity: 0,
        }),
      ),
      state(
        "open",
        style({
          height: "200px",
          opacity: 1,
        }),
      ),
      transition("closed <=> open", [animate("300ms ease-in-out")]),
    ]),
  ],
})
export class PanelComponent {
  state = signal<"open" | "closed">("closed");

  toggle() {
    this.state.update((s) => (s === "open" ? "closed" : "open"));
  }
}
```

HTML

```html
<button (click)="toggle()">Toggle Panel</button>

<div class="panel" [@expandCollapse]="state()">Panel Content</div>
```

Explanation

- `state()` defines styles for each state
- `transition()` defines animation when state changes
- `animate()` controls timing and easing
