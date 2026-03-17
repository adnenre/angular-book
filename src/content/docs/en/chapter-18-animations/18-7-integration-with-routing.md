---
title: Integration with Routing
sidebar:
  order: 7
  label: 18.7 Integration with Routing
---

Animations can run during route navigation.

TypeScript

```ts
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  animations: [trigger("routeAnimation", [transition("* <=> *", [style({ opacity: 0 }), animate("300ms ease-in", style({ opacity: 1 }))])])],
})
export class AppComponent {}
```

HTML

```html
<div [@routeAnimation]="true">
  <router-outlet></router-outlet>
</div>
```
