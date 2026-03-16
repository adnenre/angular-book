---
title: Filtering Operators (debounceTime, distinctUntilChanged)
sidebar:
  order: 8
  label: 8.8 Filtering Operators (debounceTime, distinctUntilChanged)
---

Filtering operators control which values pass through the stream, often used for performance optimization and preventing unnecessary processing.

## `debounceTime`

Waits for a specified time span of silence (no new values) and then emits the latest value. Great for search inputs to avoid firing requests on every keystroke.

```ts
import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

const input = document.getElementById("search");
const input$ = fromEvent(input, "input").pipe(
  map((event) => (event.target as HTMLInputElement).value),
  debounceTime(300), // wait 300ms after last keystroke
);

input$.subscribe((value) => console.log("Search for:", value));
```

## `distinctUntilChanged`

Suppresses duplicate consecutive values. Only emits if the current value is different from the previous one. Can also use a custom comparator.

```ts
import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

of(1, 1, 2, 2, 2, 1, 1, 3).pipe(distinctUntilChanged()).subscribe(console.log); // 1,2,1,3
```

In Angular, you often combine it with `debounceTime` for search inputs to avoid identical queries:

```ts
searchInput.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((query) => this.search(query));
```

## `throttleTime`

Emits the first value, then ignores subsequent values for a specified duration. Useful for rate‑limiting events like scroll or resize.

```ts
import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";

fromEvent(window, "scroll")
  .pipe(throttleTime(1000))
  .subscribe(() => console.log("Scrolled (at most once per second)"));
```

## `sampleTime`

Emits the most recent value from the source within periodic time intervals.

```ts
import { fromEvent } from "rxjs";
import { sampleTime, map } from "rxjs/operators";

fromEvent(document, "mousemove")
  .pipe(
    sampleTime(1000),
    map((event) => ({ x: event.clientX, y: event.clientY })),
  )
  .subscribe((position) => console.log("Mouse position each second:", position));
```

## `auditTime`

Similar to `debounceTime` but uses a different timing strategy: it starts a timer on the first value, and emits the latest value when the timer ends. Good for things like saving drafts.

```ts
import { fromEvent } from "rxjs";
import { auditTime } from "rxjs/operators";

fromEvent(input, "input")
  .pipe(auditTime(2000))
  .subscribe(() => console.log("Save draft"));
```

## `skip` / `take`

`skip(n)` ignores the first n emissions; `take(n)` takes only the first n.

```ts
import { interval } from "rxjs";
import { skip, take } from "rxjs/operators";

interval(1000)
  .pipe(
    skip(2), // skip 0,1
    take(3), // take 2,3,4
  )
  .subscribe(console.log);
```

## Summary

| Operator               | Behavior                                       |
| ---------------------- | ---------------------------------------------- |
| `debounceTime`         | Emits after a quiet period                     |
| `distinctUntilChanged` | Emits only when value changed from previous    |
| `throttleTime`         | Emits first, then ignores for a duration       |
| `sampleTime`           | Emits latest value periodically                |
| `auditTime`            | Emits latest after a duration from first value |

Choose the right operator to optimize your streams and reduce unnecessary emissions.
