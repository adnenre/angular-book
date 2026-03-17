---
title: Global State Management with Services and NgRx
sidebar:
  order: 8
  label: 23.8 Global State Management with Services and NgRx
---

Managing global state is a key concern in large Angular applications.  
This section compares two approaches: **simple services with signals** and **NgRx (Redux pattern)**, with examples for Angular 21.

## 1. Service‑Based State with Signals

For many applications, a set of singleton services using signals is sufficient and much simpler than a full state management library.

### Example: Authentication Service

```ts
// auth.service.ts
import { Injectable, signal } from "@angular/core";

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  private userSignal = signal<User | null>(null);
  user = this.userSignal.asReadonly(); // expose readonly signal

  login(credentials: { email: string; password: string }) {
    // Call API, then set user
    this.userSignal.set({ id: 1, name: "John", email: credentials.email });
  }

  logout() {
    this.userSignal.set(null);
  }
}
```

### Using the Service in a Component

```ts
import { Component, computed } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-profile",
  standalone: true,
  template: `
    @if (user(); as u) {
      <p>Welcome, {{ u.name }}!</p>
      <button (click)="logout()">Logout</button>
    } @else {
      <p>Please log in.</p>
      <button (click)="login()">Login</button>
    }
  `,
})
export class ProfileComponent {
  user = this.authService.user;
  isLoggedIn = computed(() => this.user() !== null);

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({ email: "test@example.com", password: "secret" });
  }

  logout() {
    this.authService.logout();
  }
}
```

### When to Use Service + Signals

- Application state is not overly complex.
- No need for time‑travel debugging or extensive action logging.
- Team prefers a simpler, less boilerplate approach.

## 2. NgRx with Signals

NgRx is a state management library based on Redux patterns. Starting from NgRx v17, it supports **signals** as a first‑class citizen via `@ngrx/signals`.

### Installation

```bash
ng add @ngrx/store@latest
ng add @ngrx/effects@latest
ng add @ngrx/store-devtools@latest
ng add @ngrx/signals@latest   # for signal store

```

## Signal Store (Simpler NgRx)

The `@ngrx/signals` package provides a lightweight, signal‑based store with minimal boilerplate.

### Defining a Signal Store

```ts
// auth.store.ts
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";

type AuthState = {
  user: User | null;
  loading: boolean;
};

const initialState: AuthState = {
  user: null,
  loading: false,
};

export const AuthStore = signalStore(
  { providedIn: "root" },
  withState(initialState),
  withMethods((store, authService = inject(AuthService)) => ({
    async login(credentials: { email: string; password: string }) {
      patchState(store, { loading: true });
      try {
        const user = await authService.login(credentials); // assume returns Promise<User>
        patchState(store, { user, loading: false });
      } catch (error) {
        patchState(store, { loading: false });
        // handle error
      }
    },
    logout() {
      patchState(store, { user: null });
    },
  })),
);
```

### Using the Signal Store in a Component

```ts
import { Component, inject } from "@angular/core";
import { AuthStore } from "./auth.store";

@Component({
  selector: "app-profile",
  standalone: true,
  template: `
    @if (authStore.user(); as user) {
      <p>Welcome, {{ user.name }}!</p>
      <button (click)="authStore.logout()">Logout</button>
    } @else {
      <p>Please log in.</p>
      @if (authStore.loading()) {
        <p>Loading...</p>
      } @else {
        <button (click)="login()">Login</button>
      }
    }
  `,
  providers: [AuthStore], // optional; if not providedIn root, provide at component level
})
export class ProfileComponent {
  readonly authStore = inject(AuthStore);

  login() {
    this.authStore.login({ email: "test@example.com", password: "secret" });
  }
}
```

## Traditional NgRx Store (with Actions, Reducers, Effects)

For very large applications with complex state interactions, the classic NgRx store offers robust tooling.

### Defining State, Actions, Reducer

```ts
// auth.actions.ts
import { createActionGroup, props } from "@ngrx/store";

export const AuthActions = createActionGroup({
  source: "Auth",
  events: {
    Login: props<{ email: string; password: string }>(),
    "Login Success": props<{ user: User }>(),
    "Login Failure": props<{ error: string }>(),
    Logout: props<any>(),
  },
});

// auth.reducer.ts
import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "./auth.actions";

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(AuthActions.logout, (state) => ({ ...state, user: null })),
);
```

### Effects for Side Effects

```ts
// auth.effects.ts
import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "./auth.service";
import { AuthActions } from "./auth.actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error: error.message }))),
        ),
      ),
    ),
  );
}
```

### Using the Store in a Component

```ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { selectUser, selectLoading } from './auth.selectors';

@Component({...})
export class ProfileComponent {
  user$ = this.store.select(selectUser);
  loading$ = this.store.select(selectLoading);

  constructor(private store: Store) {}

  login() {
    this.store.dispatch(AuthActions.login({ email: 'test@example.com', password: 'secret' }));
  }
}
```

To integrate with signals, you can use `toSignal`:

```ts
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';

@Component({...})
export class ProfileComponent {
  private store = inject(Store);
  user = toSignal(this.store.select(selectUser), { initialValue: null });
}
```

## Comparison

| Feature        | Service + Signals    | NgRx Signal Store            | NgRx (Classic)      |
| -------------- | -------------------- | ---------------------------- | ------------------- |
| Boilerplate    | Minimal              | Low                          | High                |
| Learning Curve | Low                  | Medium                       | Steep               |
| DevTools       | No                   | Limited (via store devtools) | Full Redux DevTools |
| Side Effects   | Manual (in service)  | Within methods               | Effects (RxJS)      |
| Best for       | Small to medium apps | Medium apps                  | Large, complex apps |

> Choose the approach that fits your team and application complexity.  
> For many Angular 21 apps, a service with signals is sufficient. As complexity grows, NgRx signal store provides a structured yet lightweight alternative.  
> Classic NgRx remains powerful for applications requiring robust tooling and strict state management patterns.
