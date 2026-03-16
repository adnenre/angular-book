---
title: Providers useClass, useValue, useFactory, useExisting
sidebar:
  order: 2
  label: 6.2 Providers useClass, useValue, useFactory, useExisting
---

### 6.2 Providers: useClass, useValue, useFactory, useExisting

Angular providers can specify how a dependency is created:

```typescript
// useClass
{ provide: LoggerService, useClass: LoggerService }

// useValue
{ provide: APP_CONFIG, useValue: { apiUrl: '/api' } }

// useFactory
{ provide: LoggerService, useFactory: () => new LoggerService() }

// useExisting
{ provide: ILogger, useExisting: LoggerService }
```

> **Note:** Angular 21 maintains these provider patterns. Signals do not change the provider configuration syntax.
