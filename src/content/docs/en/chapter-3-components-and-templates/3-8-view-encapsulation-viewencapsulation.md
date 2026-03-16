---
title: View Encapsulation (ViewEncapsulation)
sidebar:
  order: 8
  label: 3.8 View Encapsulation (ViewEncapsulation)
---

View encapsulation determines how the CSS styles defined in a component are applied and whether they can leak to the rest of the application. Angular offers three strategies via the `ViewEncapsulation` enum:

- **`Emulated`** (default): styles are applied only to the component using automatically generated attributes. Component styles do not affect others, and global styles can penetrate the component.
- **`ShadowDom`**: uses the browser's native Shadow DOM. Styles are completely isolated, and global styles do not affect the component (except through CSS custom properties).
- **`None`**: no encapsulation. Component styles are added globally and can affect the entire application.

### Example with `Emulated` (default)

```js
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-emulated",
  standalone: true,
  template: `<p>Style encapsulated (emulated)</p>`,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedComponent {}
```

The browser will see something like `<p _ngcontent-abc>Style encapsulated</p>` and the style will be `p[_ngcontent-abc] { color: red; }`.

### Example with `ShadowDom`

```js
@Component({
  selector: "app-shadow",
  standalone: true,
  template: `<p>Style inside Shadow DOM</p>`,
  styles: [
    `
      p {
        color: green;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowComponent {}
```

The component will be attached to a `#shadow-root` and the styles will only affect this component.

### Example with `None`

```js
@Component({
  selector: "app-none",
  standalone: true,
  template: `<p>Global style</p>`,
  styles: [
    `
      p {
        color: blue;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NoneComponent {}
```

The style `p { color: blue; }` will be added to the page's `<head>` and affect all `<p>` elements.

> **Note**: `ShadowDom` encapsulation may not be compatible with older browsers. `Emulated` is a good compromise for most cases.
