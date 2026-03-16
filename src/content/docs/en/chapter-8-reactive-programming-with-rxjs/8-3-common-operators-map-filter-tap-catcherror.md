---
title: Common Operators (map, filter, tap, catchError)
sidebar:
  order: 3
  label: 8.3 Common Operators (map, filter, tap, catchError)
---

Operators are pure functions that enable powerful manipulation of Observable streams. They can be used with the `pipe` method. Here are the most frequently used ones.

## `map`

Projects each value emitted by the source to a new value (similar to `Array.map`).

```ts
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3).pipe(
map(x => x \* 10)
).subscribe(console.log); // 10, 20, 30
```

## `filter`

Emits only those values that pass a predicate.

```ts
import { from } from "rxjs";
import { filter } from "rxjs/operators";

from([1, 2, 3, 4, 5])
  .pipe(filter((x) => x % 2 === 0))
  .subscribe(console.log); // 2, 4
```

## `tap`

Used for side effects (e.g., logging, debugging) without transforming the value. It passes the value through unchanged.

```ts
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

interval(1000).pipe(
tap(value => console.log('Before map:', value)),
map(value => value \* 2),
tap(value => console.log('After map:', value))
).subscribe();
```

## `catchError`

Catches errors on the source Observable and returns a new Observable or throws a different error.

```ts
import { throwError, of } from "rxjs";
import { catchError } from "rxjs/operators";

throwError(() => new Error("Something went wrong"))
  .pipe(
    catchError((err) => {
      console.error("Caught error:", err.message);
      return of("Fallback value");
    }),
  )
  .subscribe(console.log); // 'Fallback value'
```

## Practical Angular Example

Suppose you have an HTTP request that might fail and you want to show a fallback:

```ts
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";

this.http
  .get("/api/data")
  .pipe(
    map((response) => response.data),
    catchError((error) => {
      console.error("Failed to load data", error);
      return of([]); // fallback empty array
    }),
  )
  .subscribe((data) => (this.data = data));
```

> These operators form the core of everyday RxJS transformations.
