---
title: Mocks and Spies (spyOn)
sidebar:
  order: 8
  label: 13.8 Mocks and Spies (spyOn)
---

Spies monitor function calls during tests.

## Example

```ts
it("should call service method", () => {
  const service = jasmine.createSpyObj("DataService", ["getData"]);

  service.getData.and.returnValue("test");

  expect(service.getData()).toBe("test");
});
```
