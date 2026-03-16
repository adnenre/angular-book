---
title: Injector Hierarchy (Module, Component)
sidebar:
  order: 4
  label: 6.4 Injector Hierarchy (Module, Component)
---

### 6.4 Injector Hierarchy (module, component)

Angular has a **hierarchical injector system**:

- Root injector → app-wide services
- Module injector → module-scoped services
- Component injector → component & children

```typescript
@Component({
  selector: "app-child",
  standalone: true,
  providers: [ChildService],
  template: `Child component`,
})
export class ChildComponent {
  constructor(private service: ChildService) {}
}
```

> **Note:** Angular 21 retains hierarchical injectors. Signals do not change the hierarchy.
