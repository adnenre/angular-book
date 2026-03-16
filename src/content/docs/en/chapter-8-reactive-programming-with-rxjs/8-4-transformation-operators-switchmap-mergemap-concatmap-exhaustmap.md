---
title: Transformation Operators (switchMap, mergeMap, concatMap, exhaustMap)
sidebar:
  order: 4
  label: 8.4 Transformation Operators (switchMap, mergeMap, concatMap, exhaustMap)
---

These operators are known as "higher‑order mapping operators". They map each value to an inner Observable, then flatten the result. They are essential for handling scenarios like dependent HTTP requests, form autocomplete, and more.

## `mergeMap` (alias: `flatMap`)

Projects each source value to an inner Observable and merges all inner Observables concurrently. The order of emitted values is not preserved.

```ts
import { of } from "rxjs";
import { mergeMap, delay } from "rxjs/operators";

of("A", "B")
  .pipe(mergeMap((value) => of(value + " result").pipe(delay(1000))))
  .subscribe(console.log);
// Both emit after 1 second concurrently, order may be A then B or B then A
```

Use `mergeMap` when order doesn't matter and you want all inner subscriptions to run simultaneously (e.g., multiple independent HTTP requests).

## `concatMap`

Projects to inner Observables and concatenates them: it waits for each inner Observable to complete before moving to the next. Preserves order.

```ts
import { of } from "rxjs";
import { concatMap, delay } from "rxjs/operators";

of("A", "B")
  .pipe(concatMap((value) => of(value + " result").pipe(delay(1000))))
  .subscribe(console.log);
// After 1 sec: "A result", after another sec: "B result"
```

Use `concatMap` when order is important and you need to wait for each inner operation to finish (e.g., saving items sequentially).

## `switchMap`

Projects to inner Observables, but if a new source value arrives, it cancels (unsubscribes from) the previous inner Observable and switches to the new one.

```ts
import { fromEvent } from "rxjs";
import { switchMap } from "rxjs/operators";

const clicks$ = fromEvent(document, "click");
const result$ = clicks$.pipe(
  switchMap(() => interval(1000)), // on each click, start a new interval, cancelling previous
);
result$.subscribe(console.log); // Only the most recent click's interval runs
```

Perfect for search‑as‑you‑type: cancel previous HTTP request when user types new letter.

## `exhaustMap`

Projects to inner Observables, but ignores new source values while the current inner Observable is still ongoing.

```ts
import { fromEvent } from "rxjs";
import { exhaustMap, interval, take } from "rxjs/operators";

const clicks$ = fromEvent(document, "click");
const result$ = clicks$.pipe(
  exhaustMap(() => interval(1000).pipe(take(3))), // ignore clicks during the 3 seconds
);
result$.subscribe(console.log);
```

Useful for login buttons: prevent double submissions while request is pending.

## Summary Table

| Operator   | Behavior                                                            |
| ---------- | ------------------------------------------------------------------- |
| mergeMap   | Runs all inner Observables concurrently, emits as they come         |
| concatMap  | Waits for each inner Observable to complete before starting next    |
| switchMap  | Cancels previous inner Observable when new source value arrives     |
| exhaustMap | Ignores new source values while current inner Observable is running |

> Choose wisely based on your concurrency needs.
