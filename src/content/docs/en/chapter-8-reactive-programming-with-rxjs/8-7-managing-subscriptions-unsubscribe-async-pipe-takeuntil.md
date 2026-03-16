---
title: Managing Subscriptions (unsubscribe, async pipe, takeUntil)
sidebar:
  order: 7
  label: 8.7 Managing Subscriptions (unsubscribe, async pipe, takeUntil)
---

Memory leaks are a common pitfall in Angular when using Observables. Subscriptions that are not cleaned up can cause performance degradation and unexpected behavior. Here's how to manage them properly.

## Manual `unsubscribe()`

Store the Subscription and call `unsubscribe()` in `ngOnDestroy`.

```ts
import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-counter",
  template: "<div>{{count}}</div>",
})
export class CounterComponent implements OnInit, OnDestroy {
  count = 0;
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = interval(1000).subscribe((value) => {
      this.count = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```

## The `async` Pipe

The `async` pipe subscribes automatically and unsubscribes when the component is destroyed. It's the preferred way to handle Observables in templates.

```ts
import { Component } from "@angular/core";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-counter",
  template: "<div>{{counter$ | async}}</div>",
})
export class CounterComponent {
  counter$ = interval(1000).pipe(map((value) => value));
}
```

## `takeUntil` Pattern

A robust pattern for unsubscribing from multiple Observables using a single notifier.

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({...})
export class CounterComponent implements OnInit, OnDestroy {
private destroy$ = new Subject<void>();

ngOnInit() {
interval(1000).pipe(
takeUntil(this.destroy$)
).subscribe(value => console.log(value));

    // Another observable
    interval(2000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(value => console.log('Another:', value));

}

ngOnDestroy() {
this.destroy$.next();
    this.destroy$.complete();
}
}
```

The `destroy$` Subject emits in `ngOnDestroy`, causing all `takeUntil` observables to complete and clean up.

## Other Automatic Cleanup Operators

- `take(n)`: automatically completes after n emissions.
- `first()` / `take(1)`: takes the first value then completes.
- `takeWhile(predicate)`: takes values while condition holds.

Example:

```ts
import { interval } from "rxjs";
import { take } from "rxjs/operators";

interval(1000).pipe(take(5)).subscribe(console.log); // emits 0,1,2,3,4 then completes
```

## Summary

| Method             | Best for                                                 |
| ------------------ | -------------------------------------------------------- |
| Manual unsubscribe | When you need fine control or have a single subscription |
| `async` pipe       | Template bindings – simplest, most reliable              |
| `takeUntil`        | Multiple subscriptions in a component                    |
| `take` / `first`   | Finite streams where auto‑completion makes sense         |

> Always clean up subscriptions to prevent memory leaks in long‑lived applications.
