---
title: Providers and Services at the Module Level
sidebar:
  order: 4
  label: 2.4 Providers and Services at the Module Level
---

The `providers` property of the `@NgModule` decorator registers services (or any injectable) in the module's injector. These services are then available to all components, directives, and pipes declared in (or imported by) this module.

- **Scope**: Services provided at the module level are shared by all component instances of that module. They live as long as the module itself.
- **Hierarchical injection**: If a service is provided in multiple modules, the injector walks up the hierarchy until it finds an instance. The root module (`AppModule`) has a root injector.
- **Lazy loading**: Lazy-loaded modules create their own child injector; services provided in those modules are accessible only to their components.

**Example:**

```js
import { NgModule } from "@angular/core";
import { UserService } from "./user.service";
import { UserListComponent } from "./user-list.component";
import { UserDetailComponent } from "./user-detail.component";

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  providers: [UserService], // a singleton shared between the two components
})
export class UserModule {}
```

> **Note**: Since Angular 6, it is recommended to use `providedIn: 'root'` in the `@Injectable` decorator of services to make them available everywhere without listing them in `providers`. Module-level providers are still useful for limiting a service's scope to a feature module.
