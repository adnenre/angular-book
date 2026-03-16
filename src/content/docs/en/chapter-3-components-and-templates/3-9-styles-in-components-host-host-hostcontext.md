---
title: Styles in Components (host, :host, :host‑context)
sidebar:
  order: 9
  label: 3.9 Styles in Components (host, :host, :host‑context)
---

Angular provides special CSS selectors to target the component's host element or react to the surrounding context.

### :host

The `:host` pseudo‑selector targets the element that hosts the component. It allows you to apply styles to the host element itself.

**Example:**

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  template: `<div class="content">Card content</div>`,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 4px;
      }
    `,
  ],
})
export class CardComponent {}
```

The `<app-card>` element will receive these styles.

### :host with conditions (class, attribute)

You can condition styles based on a class or attribute present on the host.

```js
styles: [
  `
  :host(.important) {
    border-color: red;
    font-weight: bold;
  }
`,
];
```

If the host element has the class `important`, these styles apply.

### :host-context

`:host-context` allows you to style the host based on a selector applied to an ancestor (it climbs up the tree until it finds a match). Useful for theming based on a class on `<body>` or a parent element.

**Example:**

```js
styles: [
  `
  :host-context(.dark-theme) {
    background-color: black;
    color: white;
  }
`,
];
```

If the `<app-card>` element is a descendant of an element with the class `dark-theme`, these styles apply.

### The `host` property in `@Component`

In addition to CSS selectors, you can dynamically bind classes or attributes to the host via the `host` property of the decorator. It accepts an object whose keys are events or properties.

```js
@Component({
  selector: "app-highlight",
  standalone: true,
  template: `Hover me`,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
  host: {
    role: "button",
    "[class.active]": "isActive",
    "(mouseenter)": "onMouseEnter()",
    "(mouseleave)": "onMouseLeave()",
  },
})
export class HighlightComponent {
  isActive = false;

  onMouseEnter() {
    this.isActive = true;
  }

  onMouseLeave() {
    this.isActive = false;
  }
}
```

Here, the host receives the `role="button"` attribute, the `active` class is bound to `isActive`, and event listeners are attached.

> **Note**: The `host` property is a declarative way to add behaviors to the host element, without needing `@HostBinding` or `@HostListener` (though those are also valid inside the class).
