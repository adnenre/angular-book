---
title: Component Lifecycle (Hooks ngOnInit, ngOnChanges, etc.)
sidebar:
  order: 2
  label: 3.2 Component Lifecycle (Hooks ngOnInit, ngOnChanges, etc.)
---

Angular provides lifecycle hooks (methods) that allow you to intervene at specific moments in a component's life. The most common are:

- **`ngOnChanges`**: called before `ngOnInit` and whenever any data-bound `@Input` property changes. Receives a `SimpleChanges` object with previous and current values.
- **`ngOnInit`**: executed once, after the first `ngOnChanges`. Ideal for component initialization (API calls, subscriptions).
- **`ngDoCheck`**: called during every change detection run. Use with caution for custom checks.
- **`ngAfterContentInit`**: after content projection (`ng-content`) is initialized.
- **`ngAfterContentChecked`**: after every check of projected content.
- \*\*ngAfterViewInit`: after the component's view (and child views) are initialized.
- **`ngAfterViewChecked`**: after every check of the component's view.
- **`ngOnDestroy`**: just before the component is destroyed. Perfect for cleaning up subscriptions and detaching event listeners.

**Example illustrating several hooks:**

```js
import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  template: `<p>{{ value }}</p>`
})
export class DemoComponent implements OnChanges, OnInit, OnDestroy {
  @Input() value: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // clean up subscriptions here
  }
}
```

> **Note**: The execution order is important: `ngOnChanges` → `ngOnInit` → ... → `ngOnDestroy`. Implement only the hooks you need to avoid unnecessary complexity.
