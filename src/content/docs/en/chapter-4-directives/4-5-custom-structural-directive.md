---
title: Custom Structural Directive
sidebar:
  order: 5
  label: 4.5 Custom Structural Directive
---

Structural directives are built using the `<ng-template>` concept. To create a custom structural directive, you inject `TemplateRef` and `ViewContainerRef` and apply logic to create or clear embedded views.

### Example: a custom \*appTimes directive

This directive repeats the content a specified number of times.

```js
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
selector: '[appTimes]',
standalone: true
})
export class TimesDirective {
constructor(
private templateRef: TemplateRef<any>,
private viewContainer: ViewContainerRef
) {}

@Input() set appTimes(count: number) {
this.viewContainer.clear();
for (let i = 0; i < count; i++) {
this.viewContainer.createEmbeddedView(this.templateRef, {
$implicit: i,
index: i
});
}
}
}
```

````

**Usage in template:**

```js
import { Component } from "@angular/core";
import { TimesDirective } from "./times.directive";

@Component({
  selector: "app-structural-demo",
  standalone: true,
  imports: [TimesDirective],
  template: ` <div *appTimes="5; let i; let idx = index">Item {{ i }} (index: {{ idx }})</div> `,
})
export class StructuralDemoComponent {}
````

### Explanation

- `TemplateRef` holds the template content (what's inside the element with the directive).
- `ViewContainerRef` is a container where we can attach the template multiple times.
- `createEmbeddedView` creates an embedded view from the template, optionally passing a context object.
- The context object defines variables that can be used in the template: `$implicit` is the default value for `let var`, and additional variables like `index` can be bound with `let idx = index`.

### The asterisk syntax

The `*appTimes="5; let i; let idx = index"` is desugared to:

```html
<ng-template [appTimes]="5" let-i let-idx="index">
  <div>Item {{ i }} (index: {{ idx }})</div>
</ng-template>
```

> Note: The context object's $implicit property is used when the template uses let var without a right‑hand side.

```

```
