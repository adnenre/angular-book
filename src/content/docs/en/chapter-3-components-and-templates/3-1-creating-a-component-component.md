---
title: Creating a Component (@Component)
sidebar:
  order: 1
  label: 3.1 Creating a Component (@Component)
---

An Angular component controls a part of the screen (a "view") through a TypeScript class associated with an HTML template. The `@Component` decorator defines the component's metadata.

### Basic structure

- **`selector`**: HTML tag name used to insert the component in a template.
- **`template` or `templateUrl`**: defines the view (inline HTML or separate file).
- **`styles` or `styleUrls`**: CSS styles specific to the component.
- **`standalone`** (since Angular 14): indicates whether the component is standalone (`true`) or needs to be declared in a module (`false` by default).

### Simple example (standalone)

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-hello",
  standalone: true,
  template: `<h1>Hello {{ name }}!</h1>`,
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class HelloComponent {
  name = "Angular";
}
```

### Usage in another component

If the component is standalone, import it directly in the `imports` array of the parent component:

```js
import { Component } from "@angular/core";
import { HelloComponent } from "./hello.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HelloComponent],
  template: `<app-hello></app-hello>`,
})
export class AppComponent {}
```

> **Note**: If you use the module approach, the component must be declared in an NgModule. With standalone components, organization is simpler and more modular.
