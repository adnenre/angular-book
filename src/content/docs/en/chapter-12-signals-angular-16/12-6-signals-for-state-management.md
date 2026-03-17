---
title: Signals for State Management
sidebar:
  order: 6
  label: 12.6 Signals for State Management
---

Signals can replace some RxJS usage for managing application state.

```ts
import { signal } from "@angular/core";

export const todos = signal<string[]>([]);

export function addTodo(todo: string) {
  todos.update((list) => [...list, todo]);
}
```
