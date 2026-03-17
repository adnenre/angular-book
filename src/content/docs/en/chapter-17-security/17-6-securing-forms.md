---
title: Securing Forms
sidebar:
  order: 6
  label: 17.6 Securing Forms
---

Forms must validate user input to prevent attacks.

HTML Example

```html
<input type="email" required pattern="^[^@]+@[^@]+\.[^@]+$" />
```

TypeScript Example

```ts
import { FormControl, Validators } from "@angular/forms";

email = new FormControl("", [Validators.required, Validators.email]);
```

**Explanation**

> Validation prevents invalid or malicious input.
