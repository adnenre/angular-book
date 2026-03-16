---
title: Other State Libraries (Akita, NGXS)
sidebar:
  order: 4
  label: 11.4 Other State Libraries (Akita, NGXS)
---

Other state management libraries exist for Angular.

Akita:

- entity-based architecture
- simple and performant

NGXS:

- inspired by Redux
- simpler API than NgRx

Example using NGXS:

```ts
import { State, Action, StateContext } from "@ngxs/store";

export class Increment {
  static readonly type = "[Counter] Increment";
}

@State<number>({
  name: "counter",
  defaults: 0,
})
export class CounterState {
  @Action(Increment)
  increment(ctx: StateContext<number>) {
    const state = ctx.getState();
    ctx.setState(state + 1);
  }
}
```
