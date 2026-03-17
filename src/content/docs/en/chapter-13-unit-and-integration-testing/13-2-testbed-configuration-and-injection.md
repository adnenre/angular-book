---
title: Test Bed Configuration and Injection
sidebar:
  order: 2
  label: 13.2 Test Bed Configuration and Injection
---

`TestBed` is Angular's main testing utility.

It creates a testing module similar to Angular modules.

## Example

```ts
import { TestBed } from "@angular/core/testing";
import { MyService } from "./my.service";

describe("MyService", () => {
  let service: MyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyService],
    });

    service = TestBed.inject(MyService);
  });

  it("should create service", () => {
    expect(service).toBeTruthy();
  });
});
```

## Explanation

`TestBed.configureTestingModule()` configures the test environment.

`TestBed.inject()` retrieves service instances.
