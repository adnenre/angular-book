---
title: Testing Interactions (Click, Input)
sidebar:
  order: 4
  label: 13.4 Testing Interactions (Click, Input)
---

Tests can simulate user interactions like clicking buttons or entering text.

## Test Example

```ts
it("should increment counter on click", () => {
  const button = fixture.nativeElement.querySelector("button");

  button.click();

  fixture.detectChanges();

  expect(component.count).toBe(1);
});
```

## Testing Input

```ts
it("should update input value", () => {
  const input = fixture.nativeElement.querySelector("input");

  input.value = "Angular";

  input.dispatchEvent(new Event("input"));

  fixture.detectChanges();

  expect(input.value).toBe("Angular");
});
```
