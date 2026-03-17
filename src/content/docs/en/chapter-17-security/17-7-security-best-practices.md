---
title: Security Best Practices
sidebar:
  order: 7
  label: 17.7 Security Best Practices
---

This section demonstrates a **complete practical example** showing how Angular security best practices are applied in a real workflow.

The example will include:

1. Generating a component
2. Validating user input
3. Using Angular sanitization
4. Avoiding direct DOM manipulation
5. Using HTTPS with HttpClient
6. Secure token storage
7. Route protection with guards
8. Keeping dependencies updated

All examples follow **Angular v17+ standalone component architecture**.

Example Scenario  
We will create a **Secure Login Page**.

### Step 1 — Generate the Component

Use Angular CLI to create a standalone login component.

```shell
ng generate component auth/login --standalone
```

Angular generates:

```shell
src/app/auth/login/login.component.ts
src/app/auth/login/login.component.html
```

### Step 2 — Secure Form with Input Validation

TypeScript

```ts
import { Component } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  submit() {
    if (this.loginForm.valid) {
      console.log("Secure form data:", this.loginForm.value);
    }
  }
}
```

HTML

```html
<form [formGroup]="loginForm" (ngSubmit)="submit()">
  <label>Email</label>
  <input type="email" formControlName="email" />

  <div *ngIf="loginForm.controls.email.invalid && loginForm.controls.email.touched">Invalid email</div>

  <label>Password</label>
  <input type="password" formControlName="password" />

  <div *ngIf="loginForm.controls.password.invalid && loginForm.controls.password.touched">Password must be at least 6 characters</div>

  <button type="submit">Login</button>
</form>
```

**Explanation**

- Validators prevent malicious or invalid input
- Form validation blocks submission until data is safe

### Step 3 — Angular Built-in Sanitization

Angular automatically sanitizes dangerous HTML.

TypeScript

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-content",
  standalone: true,
  templateUrl: "./content.component.html",
})
export class ContentComponent {
  htmlContent = '<img src=x onerror=alert("XSS Attack")>';
}
```

HTML

```html
<div [innerHTML]="htmlContent"></div>
```

**Explanation**

Angular automatically removes unsafe script execution.

### Step 4 — Avoid Direct DOM Manipulation

Bad practice

```ts
document.getElementById("title")!.innerHTML = "Unsafe update";
```

Good practice using Angular binding

TypeScript

```ts
title = "Secure Angular App";
```

HTML

```html
<h1>{{ title }}</h1>
```

Explanation

Angular handles DOM updates safely through data binding.

### Step 5 — Secure API Communication (HTTPS)

Angular HttpClient example.

TypeScript

```ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post("https://api.myapp.com/login", data);
  }
}
```

Explanation

- Always use HTTPS endpoints
- Prevents man-in-the-middle attacks

### Step 6 — Secure Token Storage with Interceptor

Create an HTTP interceptor.

Generate interceptor

```shell
ng generate interceptor auth
```

TypeScript

```ts
import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("token");

  if (token) {
    req = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`),
    });
  }

  return next(req);
};
```

Explanation

Interceptor automatically attaches authentication tokens.

### Step 7 — Protect Routes with Guards

Generate guard

```shell
ng generate guard auth/auth
```

TypeScript

```ts
import { CanActivateFn } from "@angular/router";

export const authGuard: CanActivateFn = () => {
  const token = localStorage.getItem("token");
  return !!token;
};
```

Router configuration

```ts
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { authGuard } from "./auth/auth.guard";

export const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [authGuard],
  },
];
```

Explanation

Users without authentication tokens cannot access protected routes.

### Step 8 — Keep Dependencies Updated

Check outdated dependencies.

```shell
npm outdated
```

Update Angular safely.

```shell
ng update @angular/core @angular/cli
```

Explanation

Security patches are frequently released, so keeping dependencies updated is critical.

Summary

Security practices applied in this example:

- Strong form validation
- Angular sanitization protection
- Safe DOM updates
- HTTPS API communication
- Token authentication
- Route protection
- Regular dependency updates

> Following these practices ensures Angular applications remain secure against common attacks.
