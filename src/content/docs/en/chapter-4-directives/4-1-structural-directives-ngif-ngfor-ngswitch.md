---
title: Structural Directives (*ngIf, *ngFor, *ngSwitch)
sidebar:
  order: 1
  label: 4.1 Structural Directives (*ngIf, *ngFor, *ngSwitch)
---

Structural directives **shape or reshape the DOM structure** by adding, removing, or manipulating elements.

They are usually prefixed with an asterisk `*`, which is **syntactic sugar** for a more explicit `<ng-template>` representation.

> ⚠️ Since **Angular 17**, a modern **control flow syntax** (`@if`, `@for`, `@switch`) has been introduced as a cleaner alternative to `*ngIf`, `*ngFor`, and `*ngSwitch`.

---

### `*ngIf`

Conditionally includes a template based on a **truthy or falsy value**.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-if-demo",
  standalone: true,
  template: `
    <button (click)="toggle()">Toggle</button>
    <div *ngIf="visible">This is visible</div>
  `,
})
export class IfDemoComponent {
  visible = true;

  toggle() {
    this.visible = !this.visible;
  }
}
```

Angular 17+ alternative:

```html
<button (click)="toggle()">Toggle</button>

@if (visible) {
<div>This is visible</div>
}
```

---

### `*ngFor`

Repeats a template for each item in an iterable (like an array).

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-for-demo",
  standalone: true,
  template: `
    <ul>
      <li *ngFor="let item of items; index as i">{{ i }}: {{ item }}</li>
    </ul>
  `,
})
export class ForDemoComponent {
  items = ["Apple", "Banana", "Cherry"];
}
```

Angular 17+ alternative:

```js
<ul>
  @for (item of items; track item){" "}
  {
    <li>
      {{ $index }}: {{ item }}
    </li>
  }
</ul>
```

---

### `*ngSwitch`

Switches between multiple views based on a condition.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-switch-demo",
  standalone: true,
  template: `
    <div [ngSwitch]="color">
      <p *ngSwitchCase="'red'">Red color</p>
      <p *ngSwitchCase="'blue'">Blue color</p>
      <p *ngSwitchCase="'green'">Green color</p>
      <p *ngSwitchDefault>Unknown color</p>
    </div>
  `,
})
export class SwitchDemoComponent {
  color = "blue";
}
```

### Angular 17+ alternative:

```typescript
@switch (color) {
  @case ("red") {
    <p>Red color</p>
  }

  @case ("blue") {
    <p>Blue color</p>
  }

  @case ("green") {
    <p>Green color</p>
  }

  @default {
    <p>Unknown color</p>
  }
}
```

### Structural directive limitation

Structural directives can only be applied **once per element**.

Invalid example:

```html
<div *ngIf="visible" *ngFor="let item of items"></div>
```

Use `<ng-container>` to group elements without adding extra DOM nodes.

```html
<ng-container *ngIf="visible">
  <div *ngFor="let item of items">{{ item }}</div>
</ng-container>
```

> **Note:** Structural directives modify the **structure of the DOM**, not just attributes. Because of this, Angular allows **only one structural directive per host element**. When multiple structural behaviors are required, use `<ng-container>` or nested templates to keep the DOM clean without adding unnecessary elements.
