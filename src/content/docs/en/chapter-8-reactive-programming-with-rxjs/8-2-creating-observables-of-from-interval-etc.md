---
title: Creating Observables (of, from, interval, etc.)
sidebar:
  order: 2
  label: 8.2 Creating Observables (of, from, interval, etc.)
---

RxJS provides many creation functions to generate Observables from various sources. Here are the most commonly used ones.

## `of`

Creates an Observable that emits the arguments you provide, then completes.

```ts
import { of } from "rxjs";

const numbers$ = of(10, 20, 30);
numbers$.subscribe((value) => console.log(value));
// Output: 10, 20, 30 (then complete)
```

## `from`

Converts an array, promise, or iterable into an Observable.

```ts
import { from } from "rxjs";

// From an array
const array$ = from([1, 2, 3]);
array$.subscribe(console.log); // 1,2,3

// From a promise
const promise$ = from(fetch("https://api.example.com/data"));
promise$.subscribe((response) => console.log(response));
```

## `interval`

Emits sequential numbers every specified time interval.

```ts
import { interval } from "rxjs";

const counter$ = interval(1000); // emits 0,1,2,... every second
const subscription = counter$.subscribe((value) => console.log(value));
// Remember to unsubscribe when done (e.g., after 5 seconds)
setTimeout(() => subscription.unsubscribe(), 5000);
```

## `timer`

`timer` can act like `setTimeout` or `setInterval`. With one argument, it delays then emits 0 and completes. With two arguments, it delays then emits periodically.

```ts
import { timer } from "rxjs";

// Emit after 2 seconds then complete
timer(2000).subscribe(() => console.log("2 seconds passed"));

// Emit after 1 second, then every 500ms
timer(1000, 500).subscribe((value) => console.log(value)); // 0,1,2,...
```

## `fromEvent`

Creates an Observable from DOM events (great in Angular for listening to native element events).

```ts
import { fromEvent } from "rxjs";

const button = document.getElementById("myButton");
const clicks$ = fromEvent(button, "click");
clicks$.subscribe((event) => console.log("Button clicked!", event));
```

## `ajax`

RxJS has its own AJAX implementation for making HTTP requests.

```ts
import { ajax } from "rxjs/ajax";

const api$ = ajax.getJSON("https://api.example.com/users");
api$.subscribe((data) => console.log(data));
```

## `defer`

Creates an Observable that is created anew each subscription. Useful for wrapping promises or other factories.

```ts
import { defer } from "rxjs";

const observable$ = defer(() => {
  return Math.random() > 0.5 ? of("Heads") : of("Tails");
});

observable$.subscribe((result) => console.log(result)); // Random each subscription
```

> These creation functions are the building blocks for turning any data source into an Observable stream.
