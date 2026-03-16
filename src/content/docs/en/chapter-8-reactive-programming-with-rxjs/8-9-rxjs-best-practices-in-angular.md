---
title: RxJS Best Practices in Angular
sidebar:
  order: 9
  label: 8.9 RxJS Best Practices in Angular
---

Writing maintainable and performant Angular applications with RxJS requires following certain best practices. Here are the most important ones.

## 1. Use the `async` Pipe Whenever Possible

Avoid manual subscriptions in components. The `async` pipe handles subscription and unsubscription automatically.

**Good:**

```html
<div>{{ data$ | async }}</div>
```

**Bad:**

```ts
data: any;
ngOnInit() { this.service.getData().subscribe(d => this.data = d); }
ngOnDestroy() { this.sub?.unsubscribe(); }
```

## 2. Unsubscribe Properly

If you must subscribe manually (e.g., in a service), use one of these patterns:

- `takeUntil` with a destroy subject
- `take(1)` for single‑emission Observables (like HTTP requests, though Angular HTTP completes automatically)
- `first()` etc.

## 3. Avoid Nesting Subscriptions

Nesting subscriptions leads to messy code and memory leaks. Use higher‑order mapping operators (`switchMap`, `mergeMap`, etc.) instead.

**Bad:**

```ts
this.route.params.subscribe((params) => {
  this.service.getData(params.id).subscribe((data) => {
    // handle data
  });
});
```

**Good:**

```ts
this.route.params.pipe(
switchMap(params => this.service.getData(params.id))
).subscribe(data => // handle data);
```

## 4. Keep Streams Pure with `pipe` and Operators

Always use operators inside `pipe` to transform data. Avoid having logic inside `subscribe` that could be done with operators.

## 5. Use `catchError` to Handle Errors Gracefully

Always handle errors in your streams to prevent the entire stream from breaking.

```ts
this.http.get("/api/data").pipe(
  catchError((err) => {
    console.error("Error:", err);
    return of([]); // fallback
  }),
);
```

## 6. Leverage Subjects for Multicasting

When multiple parts of your app need to listen to the same data source, use a `BehaviorSubject` or `ReplaySubject` and expose it as an observable with `.asObservable()`.

```ts
private userSubject = new BehaviorSubject<User | null>(null);
user$ = this.userSubject.asObservable();

updateUser(user: User) {
this.userSubject.next(user);
}
```

## 7. Prefer Declarative Approach over Imperative

Define Observables as properties that combine other Observables, rather than creating subscriptions in methods.

**Declarative:**

```ts
filteredTodos$ = combineLatest([this.todos$, this.filter$]).pipe(map(([todos, filter]) => todos.filter((t) => t.text.includes(filter))));
```

**Imperative (avoid):**

```ts
filteredTodos: Todo[];
ngOnInit() {
    this.todos$.subscribe(todos => {
         this.filter$.subscribe(filter => {
       this.filteredTodos = todos.filter(t => t.text.includes(filter));
      });
    });
}
```

## 8. Use Appropriate Schedulers for Tests

When writing tests, use `TestScheduler` to test asynchronous streams in a deterministic way (marble testing).

## 9. Name Observables with a Trailing `$`

This convention makes it clear that a variable is an Observable.

```ts
users$: Observable<User[]>;
```

## 10. Clean Up Global Observables in Services

If a service holds an Observable that never completes (like a `Subject`), ensure it is cleaned up when the service is destroyed (e.g., by using Angular's `@Injectable({providedIn: 'root'})` which is a singleton and not destroyed; but if you have a non‑root service, you can implement `OnDestroy`).

## 11. Use `shareReplay` for Caching

When you have an expensive Observable that should be shared across subscribers (e.g., HTTP request result), use `shareReplay` to cache the last emitted value.

```ts
data$ = this.http.get("/api/data").pipe(shareReplay(1));
```

## 12. Avoid Memory Leaks in Infinite Observables

Always unsubscribe from infinite Observables like `interval`, `fromEvent`, or Subjects that never complete.

> Following these practices will lead to cleaner, more maintainable, and bug‑free Angular applications. RxJS is powerful, but with great power comes great responsibility – always think about the lifecycle of your subscriptions.
