---
title: Asynchronous Tests (fakeAsync, tick, async, waitForAsync)
sidebar:
  order: 7
  label: 13.7 Asynchronous Tests (fakeAsync, tick, async, waitForAsync)
---

Angular supports asynchronous testing.

## fakeAsync Example

```ts
import { fakeAsync, tick } from "@angular/core/testing";

it("should wait for async task", fakeAsync(() => {
  let done = false;

  setTimeout(() => {
    done = true;
  }, 1000);

  tick(1000);

  expect(done).toBeTrue();
}));
```
