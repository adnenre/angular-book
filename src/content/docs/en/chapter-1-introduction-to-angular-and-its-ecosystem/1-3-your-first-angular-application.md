---
title: Your First Angular Application
sidebar:
  order: 3
  label: 1.3 Your First Angular Application
---

Use the Angular CLI to create and serve a new project:

1. **Create a new workspace and initial application**

   ```js
   ng new my-first-app
   ```

The CLI will prompt you for options (choose defaults or enable SSR/SSG if desired).  
 Once created, navigate into the folder:

```shell
cd my-first-app
```

2. **Serve the application**

   ```shell
   ng serve
   ```

Open `http://localhost:4200` in your browser. The default app is already running.

3. **Modify the app component** – open `src/app/app.component.ts` and change the template:

   ```js
   import { Component } from "@angular/core";

   @Component({
     selector: "app-root",
     standalone: true,
     template: `
       <h1>Hello, Angular!</h1>
       <p>My first app works!</p>
     `,
   })
   export class AppComponent {}
   ```

> The browser will automatically reload with your changes.
