---
title: Using HttpClient (HttpClient Module)
sidebar:
  order: 2
  label: 7.2 Using HttpClient (HttpClient Module)
---

### 7.2 Using HttpClient (HttpClient Module)

Angular’s `HttpClient` provides HTTP methods like GET, POST.

```typescript
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("/api/data");
  }
}
```

Usage:

```typescript
this.apiService.getData().subscribe((data) => console.log(data));
```

> **Note:** In Angular 21, HttpClient works seamlessly with signals and standalone services.
