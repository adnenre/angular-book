---
title: Introduction to NgRx (Store, Actions, Reducers, Selectors, Effects)
sidebar:
  order: 2
  label: 11.2 Introduction to NgRx (Store, Actions, Reducers, Selectors, Effects)
---

NgRx is a state management library based on the Redux pattern.

Main concepts:

- Store – the global application state
- Actions – events describing state changes
- Reducers – functions that update the state
- Selectors – read data from the store
- Effects – handle side effects such as API calls

Example action:

```ts
import { createAction } from "@ngrx/store";

export const increment = createAction("[Counter] Increment");
```

Example reducer:

```ts
import { createReducer, on } from "@ngrx/store";
import { increment } from "./counter.actions";

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
);
```
