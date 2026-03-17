---
title: Using Shared Libraries (Workspace, Projects)
sidebar:
  order: 3
  label: 23.3 Using Shared Libraries (Workspace, Projects)
---

Large Angular applications often share code across multiple projects.  
Angular Workspace (monorepo) allows you to create one or more libraries alongside your main application.  
This section explains how to create, build, and use shared libraries in Angular 21.

## Setting Up an Angular Workspace with a Library

Generate a new workspace with a library:

```bash
ng new my-workspace --no-create-application
cd my-workspace
ng generate library my-lib

```

This creates a `projects` folder with `my-lib` containing its own source, tests, and a `public-api.ts` file.

```bash
my-workspace/
├── projects/
│   ├── my-lib/
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   ├── public-api.ts
│   │   │   └── test.ts
│   │   ├── ng-package.json
│   │   └── package.json
├── angular.json
└── package.json

```

You can also generate an application within the same workspace:

```bash
ng generate application my-app
```

Now you have `projects/my-app` and `projects/my-lib`.

### Building the Library

Build the library using the CLI:

```bash
ng build my-lib
```

The output goes into the dist folder. For development, you can use watch mode:

```bash
ng build my-lib --watch
```

Using the Library in the Application
In the application, import the library module or standalone entities.

If your library exports an NgModule:

```ts
// projects/my-app/src/app/app.module.ts (if still using modules)
import { MyLibModule } from 'my-lib';

@NgModule({
imports: [MyLibModule]
})
```

If your library exports standalone components (recommended in Angular 21):

```ts
// projects/my-lib/src/public-api.ts
export * from "./lib/my-component/my-component.component";
```

Then in the app component:

```ts
// projects/my-app/src/app/app.component.ts
import { Component } from '@angular/core';
import { MyComponent } from 'my-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyComponent],
  template: <lib-my-component></lib-my-component>
})
export class AppComponent {}
```

Path Mapping for Local Development
The CLI automatically adds a path mapping in the root tsconfig.json so you can import the library by its name:

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "my-lib": ["./dist/my-lib"]
    }
  }
}
```

This points to the built output. For a smoother development experience (without rebuilding after each change), you can use "my-lib": ["projects/my-lib/src/public-api.ts"] to reference source directly, but be aware of potential duplicate Angular instances. The recommended approach is to build with watch.

### Publishing the Library

To publish to npm, first build the library, then publish the dist folder:

```bash
ng build my-lib
cd dist/my-lib
npm publish
```

Make sure the library’s package.json (inside projects/my-lib) has correct metadata (name, version, peerDependencies).
