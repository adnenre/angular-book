---
title: Combination Operators (combineLatest, forkJoin, withLatestFrom)
sidebar:
  order: 5
  label: 8.5 Combination Operators (combineLatest, forkJoin, withLatestFrom)
---

These operators allow you to combine multiple Observables into one, each serving a different purpose.

## `combineLatest`

Takes multiple Observables and emits an array of the latest values from each, **whenever any source emits**. It waits for each Observable to emit at least once.

```ts
import { combineLatest, timer } from "rxjs";

const first$ = timer(0, 1000); // emits 0,1,2... every sec
const second$ = timer(500, 1500); // emits 0,1... every 1.5 sec starting at 500ms

combineLatest([first$, second$]).subscribe(([a, b]) => {
  console.log(`first: ${a}, second: ${b}`);
});
```

Useful for combining multiple independent streams that need to be combined whenever any changes (e.g., form fields and calculated values).

## `forkJoin`

Waits for all Observables to **complete**, then emits the last emitted value from each as an array. Similar to `Promise.all`.

```ts
import { forkJoin, of, timer } from "rxjs";
import { map } from "rxjs/operators";

const req1$ = of("User data"); // completes immediately
const req2$ = timer(2000).pipe(map(() => "Posts data")); // completes after 2s

forkJoin([req1$, req2$]).subscribe(([user, posts]) => {
  console.log("All data:", user, posts);
});
```

Perfect for parallel HTTP requests where you need all results before proceeding.

## `withLatestFrom`

Combines the source Observable with another Observable, but only emits when the source emits, and takes the latest value from the other Observable at that moment.

```ts
import { fromEvent, interval } from "rxjs";
import { withLatestFrom } from "rxjs/operators";

const clicks$ = fromEvent(document, "click");
const interval$ = interval(1000);

clicks$.pipe(withLatestFrom(interval$)).subscribe(([clickEvent, intervalValue]) => {
  console.log(`Click at second ${intervalValue}`);
});
```

Useful when you want to combine a primary stream with the latest state of another stream (e.g., clicks with current counter value).

## Comparison

| Operator       | When it emits                            | Use case                                 |
| -------------- | ---------------------------------------- | ---------------------------------------- |
| combineLatest  | Any source emits, after all have emitted | Real‑time form state                     |
| forkJoin       | After all sources complete               | Parallel requests, need all results      |
| withLatestFrom | Only when source emits                   | Enhance source emissions with other data |

Choose based on whether you need to wait for completion (`forkJoin`) or combine latest values reactively.

```

```
