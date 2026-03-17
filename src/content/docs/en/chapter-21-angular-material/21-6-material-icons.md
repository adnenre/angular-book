---
title: Material Icons
sidebar:
  order: 6
  label: 21.6 Material Icons
---

Material Icons provide a large icon library.

Step 1 — Add Material Icons to index.html

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
```

Step 2 — Import icon module

TypeScript

```ts
import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-icon-demo",
  standalone: true,
  imports: [MatIconModule],
  templateUrl: "./icon-demo.component.html",
})
export class IconDemoComponent {}
```

HTML

```html
<mat-icon>home</mat-icon>

<mat-icon color="primary"> favorite </mat-icon>
```

Explanation

Material Icons integrate seamlessly with Angular Material components.
