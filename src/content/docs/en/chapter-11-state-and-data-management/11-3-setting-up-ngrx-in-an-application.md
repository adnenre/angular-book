---
title: Setting Up NgRx in an Application
sidebar:
  order: 3
  label: 11.3 Setting Up NgRx in an Application
---

Installation:

```shell
npm install @ngrx/store @ngrx/effects
```

Store configuration:

```ts
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";

@NgModule({
  imports: [StoreModule.forRoot({ counter: counterReducer })],
})
export class AppModule {}
```
