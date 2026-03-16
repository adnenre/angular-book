---
title: Change Detection Strategy (ChangeDetectionStrategy)
sidebar:
  order: 10
  label: 3.10 Change Detection Strategy (ChangeDetectionStrategy)
---

Change detection is the mechanism by which Angular checks if the component's state has changed and updates the view accordingly. By default, Angular checks **all** components on every asynchronous event (click, XHR, timer). This can cause performance issues in complex applications.

The `ChangeDetectionStrategy.OnPush` strategy optimizes this process: the component is only checked when:

- A reference of an `@Input()` property changes (immutability).
- An event occurs inside the component or one of its children.
- An observable bound with the `async` pipe emits a new value.
- You manually trigger `ChangeDetectorRef.markForCheck()`.

### Example with OnPush

```js
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push-demo',
  standalone: true,
  template: `<p>{{ data.value }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushDemoComponent {
  @Input() data: { value: string };
}
```

If the parent modifies an internal property of `data` without changing the object's reference, the OnPush component will not be updated. You must create a new object reference to trigger change detection.

### Using OnPush with observables

```js
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-on-push-observable',
  standalone: true,
  imports: [AsyncPipe],
  template: `<p>{{ counter$ | async }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushObservableComponent {
  counter$: Observable<number> = interval(1000).pipe(map(i => i + 1));
}
```

The `async` pipe automatically marks the component for check when a new value is emitted.

> **Note**: OnPush is recommended for presentational components that rely on immutable inputs. It can significantly improve performance.
