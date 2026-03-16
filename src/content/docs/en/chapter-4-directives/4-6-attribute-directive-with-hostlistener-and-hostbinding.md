---
title: Attribute Directive with @HostListener and @HostBinding
sidebar:
  order: 6
  label: 4.6 Attribute Directive with @HostListener and @HostBinding
---

`@HostListener` and `@HostBinding` are two decorators that make it easier to write attribute directives by directly interacting with the host element.

### @HostListener

Listens to events on the host element and calls the decorated method when the event fires.

### @HostBinding

Binds a property of the host element to a directive property. The property value updates the host element's property (like `class`, `style`, or an attribute).

### Example: a directive that toggles a class on click

```js
import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appToggle]",
  standalone: true,
})
export class ToggleDirective {
  @HostBinding("class.active") isActive = false;

  @HostListener("click") onClick() {
    this.isActive = !this.isActive;
  }
}
```

````

**Usage:**

```html
<div appToggle>Click me to toggle 'active' class</div>
````

When the div is clicked, the `active` class is added or removed.

Example: directive that sets multiple styles on hover

```js
import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appHoverEffects]",
  standalone: true,
})
export class HoverEffectsDirective {
  @HostBinding("style.backgroundColor") bgColor = "transparent";
  @HostBinding("style.color") color = "black";
  @HostBinding("style.fontWeight") fontWeight = "normal";

  @HostListener("mouseenter") onMouseEnter() {
    this.bgColor = "lightblue";
    this.color = "darkblue";
    this.fontWeight = "bold";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.bgColor = "transparent";
    this.color = "black";
    this.fontWeight = "normal";
  }
}
```

### Combining with @Input

You can also use @Input to make the directive configurable.

```js
@Directive({
  selector: "[appHighlight]",
  standalone: true,
})
export class HighlightDirective {
  @Input() highlightColor = "yellow";
  @HostBinding("style.backgroundColor") bgColor = "transparent";

  @HostListener("mouseenter") onMouseEnter() {
    this.bgColor = this.highlightColor;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.bgColor = "transparent";
  }
}
```

Usage:

```html
<p appHighlight highlightColor="orange">Hover</p>
```

> Note: @HostBinding and @HostListener work with both directives and components. They provide a clean, declarative way to interact with the host.

```

```
