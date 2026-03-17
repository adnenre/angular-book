---
title: Understanding State Transfer (TransferState)
sidebar:
  order: 3
  label: 16.3 Understanding State Transfer (TransferState)
---

When SSR loads data from an API, the browser might repeat the request after hydration.

`TransferState` allows sharing data between the server and client.

TypeScript Example

```ts
import { Injectable } from "@angular/core";
import { TransferState, makeStateKey } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";

const USERS_KEY = makeStateKey("users");

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(
    private http: HttpClient,
    private state: TransferState,
  ) {}

  getUsers() {
    if (this.state.hasKey(USERS_KEY)) {
      return this.state.get(USERS_KEY, []);
    }

    this.http.get("/api/users").subscribe((data) => {
      this.state.set(USERS_KEY, data);
    });
  }
}
```

**Explanation**

> This prevents duplicate HTTP calls during client hydration.
