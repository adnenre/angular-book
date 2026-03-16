---
title: Subjects (Subject, BehaviorSubject, ReplaySubject, AsyncSubject)
sidebar:
  order: 6
  label: 8.6 Subjects (Subject, BehaviorSubject, ReplaySubject, AsyncSubject)
---

A **Subject** is a special type of Observable that can multicast to multiple Observers. It is also an Observer – you can call `next()`, `error()`, `complete()` on it. Subjects are commonly used for event buses, state management, and sharing data between unrelated parts of an application.

## `Subject`

No initial value, does not replay anything. Subscribers only receive values emitted after they subscribe.

```ts
import { Subject } from "rxjs";

const subject = new Subject<number>();

subject.subscribe((v) => console.log("A:", v));
subject.next(1); // A:1
subject.next(2); // A:2

subject.subscribe((v) => console.log("B:", v)); // B subscribes after 1,2
subject.next(3); // A:3, B:3
```

## `BehaviorSubject`

Requires an initial value and replays the **latest** value to new subscribers. Always has a current value.

```ts
import { BehaviorSubject } from "rxjs";

const behavior = new BehaviorSubject<number>(0); // initial 0

behavior.subscribe((v) => console.log("A:", v)); // A:0
behavior.next(1); // A:1
behavior.next(2); // A:2

behavior.subscribe((v) => console.log("B:", v)); // B:2 (latest)
behavior.next(3); // A:3, B:3

console.log("Current value:", behavior.value); // 3
```

Ideal for shared state that needs a starting value (e.g., current user, application settings).

## `ReplaySubject`

Can replay multiple previous values to new subscribers. You specify the buffer size (number of values) and/or a time window.

```ts
import { ReplaySubject } from "rxjs";

const replay = new ReplaySubject<number>(2); // replay last 2 values

replay.next(1);
replay.next(2);
replay.next(3);

replay.subscribe((v) => console.log("C:", v)); // C:2, C:3 (last two)
replay.next(4); // C:4
```

Useful when new subscribers need some history (e.g., last few messages).

## `AsyncSubject`

Emits its **last value** only when it **completes**. All subscribers receive that last value after completion.

```ts
import { AsyncSubject } from "rxjs";

const asyncSub = new AsyncSubject<number>();

asyncSub.subscribe((v) => console.log("A:", v));
asyncSub.next(1);
asyncSub.next(2);
asyncSub.subscribe((v) => console.log("B:", v)); // still waiting
asyncSub.next(3);
asyncSub.complete(); // now both A and B get 3
```

Rarely used, but can be handy for operations that produce a single final result (like loading some data once and caching it).

## Summary

| Subject Type    | Initial Value | Replays to new subs?                  | Use case                        |
| --------------- | ------------- | ------------------------------------- | ------------------------------- |
| Subject         | No            | No                                    | Event bus, multicast events     |
| BehaviorSubject | Yes           | Latest value only                     | State management, current value |
| ReplaySubject   | No            | Configurable number / time window     | Replay history                  |
| AsyncSubject    | No            | Only the final value after completion | One‑off async computations      |

> Subjects bridge the gap between imperative and reactive programming.
