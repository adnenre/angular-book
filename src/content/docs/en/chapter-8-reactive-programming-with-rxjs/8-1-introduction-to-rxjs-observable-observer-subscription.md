---
title: Introduction to RxJS (Observable, Observer, Subscription)
sidebar:
  order: 1
  label: 8.1 Introduction to RxJS (Observable, Observer, Subscription)
---

RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. It is widely used in Angular for handling events, HTTP requests, and state management.

## Observable

An **Observable** represents a stream of values over time. It can emit multiple values (like a click stream) or a single value (like an HTTP response). Observables are lazy – they don’t start emitting until something subscribes to them.

### Key characteristics:

- Can emit zero, one, or multiple values.
- Can complete successfully or error out.
- Are cancellable by unsubscribing.

## Observer

An **Observer** is an object that defines how to react to the values emitted by an Observable. It has three optional methods:

- `next`: called when a new value is emitted.
- `error`: called when an error occurs.
- `complete`: called when the Observable finishes successfully (no more values).

## Subscription

A **Subscription** represents the execution of an Observable. It has a `unsubscribe()` method to stop receiving values and free resources.

## Basic Example

Here's how you create an Observable, define an Observer, and subscribe:

```ts
import { Observable } from "rxjs";

// Create an Observable that emits 1, 2, 3 and then completes
const observable = new Observable<number>((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

// Define an Observer
const observer = {
  next: (value: number) => console.log("Received:", value),
  error: (err: any) => console.error("Error:", err),
  complete: () => console.log("Done!"),
};

// Subscribe
const subscription = observable.subscribe(observer);

// Later, if needed, unsubscribe (though here it's already completed)
subscription.unsubscribe();
```

In Angular, you'll rarely create Observables manually; instead you'll use built-in creation functions (like `httpClient.get()` which returns an Observable) and operators to transform the data.

## Why RxJS in Angular?

Angular heavily uses RxJS for:

- Reactive forms (`valueChanges`)
- HTTP client
- Route parameters (`ActivatedRoute`)
- Event emitters (`@Output()`)
- State management (NgRx, Akita, etc.)

> Understanding Observables, Observers, and Subscriptions is the foundation for mastering RxJS in Angular.
