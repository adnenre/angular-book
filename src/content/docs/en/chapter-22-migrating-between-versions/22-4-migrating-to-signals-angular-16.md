---
title: Migrating to Signals (Angular 16+)
sidebar:
  order: 4
  label: 22.4 Migrating to Signals (Angular 16+)
---

Signals were introduced in Angular 16 as a new reactive primitive and have been refined up to v21. They provide a simpler, more predictable way to manage state and change detection.

This section explains how to migrate an existing RxJS‑based state to signals.

## Why Signals?

- **Fine‑grained reactivity** – only the parts of the template that depend on a signal are updated.
- **No Zone.js dependency** – signals can work with zoneless change detection (experimental in v21).
- **Simpler mental model** – signals are synchronous and always have a current value.
- **Better integration with Angular** – new features like `input()`, `output()`, and `model()` are built on signals.

## Step‑by‑Step Migration

### 1. Replace `@Input()` with `input()`

Angular 17.3+ introduced the `input` function as a signal‑based alternative to `@Input`.

**Before (RxJS / decorator):**

```ts
@Input() set count(value: number) {
  this.count$.next(value);
}
count$ = new BehaviorSubject<number>(0);
```

**After (signal):**

```ts
count = input<number>(0); // readonly signal

// Use in template or component
effect(() => {
  console.log("Count changed:", this.count());
});
```

### 2. Replace `@Output()` with `output()`

The `output` function creates an `OutputEmitterRef` that works with signals.

```ts
// Before
@Output() valueChange = new EventEmitter<number>();

// After
valueChange = output<number>();
```

### 3. Convert RxJS Subjects to Signals

If you have a service that exposes observables, consider using signals instead.

**Before (service with RxJS):**

```ts
@Injectable({ providedIn: "root" })
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: User) {
    this.userSubject.next(user);
  }
}
```

**After (signal‑based service):**

```ts
import { signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class UserService {
  private userSignal = signal<User | null>(null);
  user = this.userSignal.asReadonly(); // expose readonly signal

  setUser(user: User) {
    this.userSignal.set(user);
  }
}
```

### 4. Bridge RxJS with Signals

If you need to keep some RxJS streams (e.g., for debouncing), use `toSignal` and `toObservable`.

```ts
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({...})
export class ExampleComponent {
  // RxJS → Signal
  counter = toSignal(interval(1000), { initialValue: 0 });

  // Signal → RxJS
  counter$ = toObservable(this.counter);
}
```

### 5. Update Component Templates to Use Signals

In Angular 17+, you can directly bind signals in templates.  
Angular automatically tracks signal dependencies.

```html
<p>Current count: {{ count() }}</p>
<button (click)="increment()">+</button>
```

### 6. Use Computed and Effect

`computed` creates a derived signal that updates automatically when its dependencies change.  
`effect` runs side effects whenever its signal dependencies change (use sparingly).

```ts
import { computed, effect, signal } from "@angular/core";

export class ShoppingCart {
  items = signal<string[]>([]);
  itemCount = computed(() => this.items().length);

  constructor() {
    effect(() => {
      console.log(`Cart has ${this.itemCount()} items`);
    });
  }
}
```

## Automatic Migration Tools

Angular provides a migration schematic to convert some `@Input()` and `@Output()` to signals:

```bash
ng generate @angular/core:signals

```

This migration:

- Converts simple @Input() to input().

- Converts @Output() to output().

- Updates template usages accordingly.

Complex cases (like setter inputs, transformation logic) may need manual adjustment.

Conclusion
Migrating to signals makes your code more reactive and performant.
Start with simple inputs and outputs, then move service state and component logic step by step.
Use toSignal and toObservable to interoperate with existing RxJS code.
