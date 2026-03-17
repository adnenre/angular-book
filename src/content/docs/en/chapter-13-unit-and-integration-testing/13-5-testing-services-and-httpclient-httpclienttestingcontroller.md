---
title: Testing Services and HttpClient (HttpClientTestingController)
sidebar:
  order: 5
  label: 13.5 Testing Services and HttpClient (HttpClientTestingController)
---

Angular provides tools to test HTTP requests.

## Service Example

```ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get("/api/users");
  }
}
```

## Test

```ts
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("UserService", () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.inject(HttpTestingController);
  });
});
```
