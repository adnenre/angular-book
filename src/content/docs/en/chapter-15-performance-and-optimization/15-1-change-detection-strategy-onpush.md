---
title: Change Detection Strategy (OnPush)
sidebar:
  order: 1
  label: 15.1 Change Detection Strategy (OnPush)
---

Angular's `OnPush` strategy improves performance by reducing unnecessary change detection cycles.

TypeScript example:

````ts
import { Component, ChangeDetectionStrategy, Input, signal } from '@angular/core';

@Component({
selector: 'app-onpush-child',
standalone: true,
changeDetection: ChangeDetectionStrategy.OnPush,
templateUrl: './onpush-child.component.html'
})
export class OnPushChildComponent {
@Input() data = signal('Initial value');
}
``

HTML:

```html

<p>{{ data() }}</p>
``

Explanation:

- `OnPush` only updates component when input reference changes
- Works best with immutable data or signals
````
