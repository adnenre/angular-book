---
title: Testing Pipes, Directives, and Guards
sidebar:
  order: 6
  label: 13.6 Testing Pipes, Directives, and Guards
---

Angular units like pipes, directives, and guards can be tested independently.

## Pipe Example

```ts
import { UpperCasePipe } from "@angular/common";

describe("UpperCasePipe", () => {
  it("should transform text to uppercase", () => {
    const pipe = new UpperCasePipe();

    expect(pipe.transform("angular")).toBe("ANGULAR");
  });
});
```
