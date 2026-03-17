---
title: Container vs. Presentational Components Pattern
sidebar:
  order: 9
  label: 23.9 Container vs. Presentational Components Pattern
---

The container/presentational pattern (also known as smart/dumb components) separates logic from presentation, improving reusability and testability.  
This section explains the pattern with Angular 21 standalone components and signals.

## Concept

- **Container Components (Smart)**:
  - Handle data fetching, state management, and business logic.
  - Pass data down to presentational components via inputs.
  - Listen to events from presentational components via outputs.
  - Usually have little to no HTML markup of their own.

- **Presentational Components (Dumb)**:
  - Receive data via `input()` and emit events via `output()`.
  - Focus solely on rendering UI.
  - Contain no business logic or direct dependencies on services.
  - Highly reusable and easy to test.

## Example: User Profile Feature

### Presentational Component: `UserProfileView`

This component only displays user information and emits an edit event.

```ts
// user-profile-view.component.ts
import { Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface User {
  name: string;
  email: string;
}

@Component({
  selector: "app-user-profile-view",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="profile">
      <h3>{{ user().name }}</h3>
      <p>{{ user().email }}</p>
      <button (click)="edit.emit()">Edit</button>
    </div>
  `,
  styles: [
    `
      .profile {
        border: 1px solid #ccc;
        padding: 1rem;
      }
    `,
  ],
})
export class UserProfileViewComponent {
  user = input.required<User>();
  edit = output<void>();
}
```

### Container Component: `UserProfileContainer`

This component fetches the user data (using a service) and provides the edit logic.

```ts
// user-profile-container.component.ts
import { Component, inject } from "@angular/core";
import { UserService } from "./user.service";
import { UserProfileViewComponent, User } from "./user-profile-view.component";
import { AsyncPipe } from "@angular/common";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-user-profile-container",
  standalone: true,
  imports: [UserProfileViewComponent, AsyncPipe],
  template: `
    @if (user(); as user) {
      <app-user-profile-view [user]="user" (edit)="onEdit()" />
    } @else {
      <p>Loading...</p>
    }
  `,
})
export class UserProfileContainerComponent {
  private userService = inject(UserService);
  // Suppose userService.user$ is an Observable<User>
  user = toSignal(this.userService.user$);

  onEdit() {
    // Navigate to edit page or open a modal
    console.log("Edit clicked");
  }
}
```

## Benefits

- **Separation of concerns**: UI logic is isolated from data logic.
- **Reusability**: Presentational components can be used in different containers (e.g., admin view, public profile).
- **Testability**: Presentational components are easy to unit test – just pass inputs and verify outputs. Containers can be tested with mocked services.
- **Maintainability**: Changes to layout or styling rarely affect business logic.

## Advanced: Using Signals for State in Container

If the container uses signals (from a store or service), it can pass them directly to presentational components.
Since signals are functions, presentational components receive the current value.

**Container with signal:**

```ts
export class UserProfileContainerComponent {
  user = this.userService.user; // signal<User | null>

  onEdit() { ... }
}
```

**Template:**

```html
@if (user(); as u) {
<app-user-profile-view [user]="u" (edit)="onEdit()" />
}
```

Note that [user]="u" passes the value, not the signal itself.
If you wanted to pass the signal (e.g., for two‑way binding scenarios), you could use the model() function, but typically one‑way data flow is sufficient.

> The container/presentational pattern is a timeless design principle that works exceptionally well with Angular’s standalone components and signals.
> It leads to cleaner, more maintainable code and should be a standard practice in your Angular 21 projects.
