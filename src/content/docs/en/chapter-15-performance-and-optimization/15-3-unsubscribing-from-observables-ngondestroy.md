---
title: Unsubscribing from Observables (ngOnDestroy)
sidebar:
  order: 3
  label: 15.3 Unsubscribing from Observables (ngOnDestroy)
---

Always unsubscribe to prevent memory leaks.

TypeScript example:

````ts
import { Component, OnDestroy, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
selector: 'app-interval-example',
standalone: true,
templateUrl: './interval-example.component.html'
})
export class IntervalExampleComponent implements OnDestroy {
sub: Subscription;

constructor() {
this.sub = interval(1000).subscribe(val => console.log(val));
}

ngOnDestroy() {
this.sub.unsubscribe();
}
}
``

HTML:

```html

<p>Check console for interval logs</p>
``
````
