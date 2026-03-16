---
title: Creating Custom Directives
sidebar:
  order: 4
  label: 4.4 Creating Custom Directives
---

You can create custom directives to encapsulate behavior and reuse it across templates. Directives are created with the `@Directive` decorator.

### Basic attribute directive

Here's a simple directive that changes the background color of an element on hover.

```typescript
import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
  standalone: true,
})
export class HighlightDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "yellow");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "transparent");
  }
}
```

**Usage in a template:**

```typescript
import { Component } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";

@Component({
  selector: "app-directive-demo",
  standalone: true,
  imports: [HighlightDirective],
  template: ` <p appHighlight>Hover me to highlight</p> `,
})
export class DirectiveDemoComponent {}
```

### Directive with @Input

You can pass parameters to a directive using `@Input`.

```typescript
import { Directive, ElementRef, Renderer2, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
  standalone: true,
})
export class HighlightDirective {
  @Input() highlightColor = "yellow";
  @Input() defaultColor = "transparent";

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", this.highlightColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", this.defaultColor);
  }
}
```

**Usage with parameters:**

```html
<p appHighlight highlightColor="orange" defaultColor="lightgray">Hover me</p>
```

> Note: Standalone directives can be imported directly into standalone components or modules.
