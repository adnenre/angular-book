---
title: Asynchronous Validators
sidebar:
  order: 6
  label: 10.6 Asynchronous Validators
---

### 10.6 Asynchronous Validators

Asynchronous validators are used when validation depends on external data such as a server request.

```ts
import { AbstractControl } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

function usernameExists(control: AbstractControl): Observable<any> {
  return of(control.value).pipe(map((value) => (value === "existingUser" ? { userExists: true } : null)));
}
```
