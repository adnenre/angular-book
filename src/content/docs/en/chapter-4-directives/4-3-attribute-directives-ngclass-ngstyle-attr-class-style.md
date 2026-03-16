---
title: Attribute Directives (ngClass, ngStyle, [attr.], [class.], [style.])
sidebar:
  order: 3
  label: 4.3 Attribute Directives (ngClass, ngStyle, [attr.], [class.], [style.])
---

---

````markdown
# Fichier : 4.3-attribute-directives.md

## 4.3 Attribute Directives (ngClass, ngStyle, [attr.], [class.], [style.]) (English)

Attribute directives change the appearance or behavior of an element, component, or another directive. They are applied as element attributes.

### ngClass

Dynamically adds or removes CSS classes.

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-ngclass-demo",
  standalone: true,
  template: `
    <div [ngClass]="{ active: isActive, highlight: isHighlighted }">Content with dynamic classes</div>
    <button (click)="toggleActive()">Toggle Active</button>
  `,
  styles: [
    `
      .active {
        font-weight: bold;
      }
      .highlight {
        background-color: yellow;
      }
    `,
  ],
})
export class NgClassDemoComponent {
  isActive = false;
  isHighlighted = true;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
```
````

````

Alternative: `[ngClass]="['class1', 'class2']"` or `[ngClass]="'class1 class2'"`.

### ngStyle

Dynamically sets inline styles.

```js
@Component({
  selector: "app-ngstyle-demo",
  standalone: true,
  template: `
    <div
      [ngStyle]="{
        color: textColor,
        'font-size.px': fontSize,
        'font-weight': isBold ? 'bold' : 'normal',
      }"
    >
      Styled text
    </div>
  `,
})
export class NgStyleDemoComponent {
  textColor = "blue";
  fontSize = 20;
  isBold = true;
}
````

### Attribute binding `[attr.attrName]`

Binds to an HTML attribute that may not have a corresponding DOM property.

```js
@Component({
  selector: "app-attr-binding",
  standalone: true,
  template: `
    <button [attr.aria-label]="label">Click</button>
    <input [attr.disabled]="isDisabled ? 'disabled' : null" />
  `,
})
export class AttrBindingComponent {
  label = "Close";
  isDisabled = true;
}
```

### Class binding `[class.className]`

Adds or removes a specific class based on a boolean expression.

```js
@Component({
  selector: "app-class-binding",
  standalone: true,
  template: ` <div [class.active]="isActive" [class.visible]="isVisible">Conditional classes</div> `,
})
export class ClassBindingComponent {
  isActive = true;
  isVisible = false;
}
```

### Style binding `[style.styleProperty]`

Sets a specific style property.

```js
@Component({
  selector: "app-style-binding",
  standalone: true,
  template: ` <div [style.color]="color" [style.font-size.px]="size">Inline style binding</div> `,
})
export class StyleBindingComponent {
  color = "red";
  size = 18;
}
```

> **Note**: Prefer class/style bindings over `ngClass`/`ngStyle` for single properties for better performance and readability.
