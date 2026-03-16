---
title: Updating Values (setValue, patchValue, reset)
sidebar:
  order: 8
  label: 10.8 Updating Values (setValue, patchValue, reset)
---

### 10.8 Updating Values (setValue, patchValue, reset)

Reactive forms provide methods for updating values.

```ts
this.profileForm.setValue({
  name: "John",
  email: "john@example.com",
});
```

Partial updates with `patchValue`:

```ts
this.profileForm.patchValue({
  name: "Jane",
});
```

Reset form:

```ts
this.profileForm.reset();
```
