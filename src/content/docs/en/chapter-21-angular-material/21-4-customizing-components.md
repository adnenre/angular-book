---
title: Customizing Components
sidebar:
  order: 4
  label: 21.4 Customizing Components
---

Material components can be customized with CSS and theming.

Example: Custom button style.

TypeScript

```ts
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-custom-button",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./custom-button.component.html",
  styleUrls: ["./custom-button.component.css"],
})
export class CustomButtonComponent {}
```

HTML

```html
<button mat-raised-button class="custom-button">Custom Styled Button</button>
```

CSS

```css
.custom-button {
  background-color: purple;
  color: white;
}
```

Explanation

Material components are fully customizable using CSS or SCSS themes.
