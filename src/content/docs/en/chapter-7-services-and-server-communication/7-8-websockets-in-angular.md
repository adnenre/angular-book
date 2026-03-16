---
title: WebSockets in Angular
sidebar:
  order: 8
  label: 7.8 WebSockets in Angular
---

Use WebSocketSubject from RxJS for real-time updates.

```typescript
import { WebSocketSubject } from "rxjs/webSocket";

const socket$ = new WebSocketSubject("ws://localhost:8080");

socket$.subscribe(
  (msg) => console.log(msg),
  (err) => console.error(err),
  () => console.log("Complete"),
);
```

> **Note:** WebSockets integrate seamlessly in Angular 21 standalone components with signal-based templates.
