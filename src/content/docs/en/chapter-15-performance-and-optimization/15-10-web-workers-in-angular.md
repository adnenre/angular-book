---
title: Web Workers in Angular
sidebar:
  order: 10
  label: 15.10 Web Workers in Angular
---

Web Workers offload heavy computation from main thread.

Generate worker:

```shell
ng generate web-worker compute
```

Example in TypeScript:

```ts
// compute.worker.ts
addEventListener('message', ({ data }) => {
      const result = data \* 2;
      postMessage(result);
});
``

```

Usage in component:

```ts
const worker = new Worker(new URL("./compute.worker", import.meta.url));
worker.postMessage(10);
worker.onmessage = ({ data }) => console.log(data);
```
