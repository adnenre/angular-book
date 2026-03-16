# Changelog

All notable changes to this Angular book are documented in this file. Each chapter represents a minor feature release, adding comprehensive coverage of Angular concepts.

---

## [Version 1.0.0] - 2026-03-10

### Added

- **Chapter 1: introduction to Angular and it's Ecosystem**
  - 1.1 History and Evolution of Angular (AngularJS vs Angular 2+, Major Versions)
  - 1.2 Setting Up the Development Environment (Node.js, npm, Angular CLI)
  - 1.3 Your First Angular Application
  - 1.4 Architecture of an Angular Application (Modules, Components, Templates, Metadata)
  - 1.5 Angular CLI In Depth
  - 1.6 Understanding the angular.json File
  - 1.7 Debugging Tools (Augury, DevTools)

## [Version 1.1.0] - 2026-03-10

### Added

- **Chapter 2: Angular Modules (NgModules)**
  - 2.1 Role of Modules
  - 2.2 Declaring a Module (@NgModule)
  - 2.3 Imports and Exports
  - 2.4 Providers and Services at the Module Level
  - 2.5 Feature Modules and Root Module
  - 2.6 Shared Modules and Core Modules
  - 2.7 Lazy-Loaded Modules
  - 2.8 Scope of Declarations
  - 2.9 Evolution: Standalone Components (Angular 14+) and Module Reduction

## [Version 1.2.0] - 2026-03-16

### Added

- **Chapter 3: Components and Templates**
  - 3.1 Creating a Component (@Component)
  - 3.2 Component Lifecycle (Hooks: ngOnInit, ngOnChanges, etc.)
  - 3.3 Templates: Interpolation and Property Bindings
  - 3.4 Event Bindings
  - 3.5 Two-Way Binding (ngModel)
  - 3.6 Template Variables (#var)
  - 3.7 @Input and @Output (Parent‑Child Communication)
  - 3.8 View Encapsulation (ViewEncapsulation)
  - 3.9 Styles in Components (host, :host, :host‑context)
  - 3.10 Change Detection Strategy (ChangeDetectionStrategy)
  - 3.11 Dynamic Components (ComponentFactoryResolver, ViewContainerRef)

## [Version 1.3.0] - 2026-03-16

### Added

- Chapter 4: Directives
  - 4.1 Structural Directives (*ngIf, *ngFor, \*ngSwitch)
  - 4.2 Understanding the Syntactic Sugar of Structural Directives
  - 4.3 Attribute Directives (ngClass, ngStyle, [attr.], [class.], [style.])
  - 4.4 Creating Custom Directives
  - 4.5 Custom Structural Directive
  - 4.6 Attribute Directive with @HostListener and @HostBinding
  - 4.7 Directive with exportAs

## [Version 1.4.0] - 2026-03-16

### Added

- **Chapter 5: Pipes**
  - 5.1 Built-in Pipes (date, uppercase, currency, json, etc.)
  - 5.2 Parameterizing and Chaining Pipes
  - 5.3 Pure and Impure Pipes
  - 5.4 Creating Custom Pipes
  - 5.5 Async Pipe for Observables and Promises
  - 5.6 Evolution: Standalone Pipes

## [Version 1.5.0] - 2026-03-16

### Added

- **Chapter 6: Dependency Injection**
  - 6.1 Principles of Dependency Injection
  - 6.2 Providers: useClass, useValue, useFactory, useExisting
  - 6.3 @Injectable and providedIn (Service Scope)
  - 6.4 Injector Hierarchy (Module, Component)
  - 6.5 Injection with @Inject and Injection Tokens
  - 6.6 Optional Dependencies (@Optional)
  - 6.7 Injection with @Self, @SkipSelf, @Host
  - 6.8 Multi‑providers (multi: true)
  - 6.9 Dependency Injection in Standalone Components

## [Version 1.6.0] - 2026-03-16

### Added

- **Chapter 7: Services and Server Communication**
  - 7.1 Creating a Simple Service
  - 7.2 Using HttpClient (HttpClient Module)
  - 7.3 HTTP Interceptors (Intercepting Requests/Responses)
  - 7.4 HTTP Error Handling
  - 7.5 Using Observables with the async Pipe
  - 7.6 Parallel and Sequential Requests (forkJoin, switchMap, etc.)
  - 7.7 Data Caching
  - 7.8 WebSockets in Angular

## [Version 1.7.0] - 2026-03-16

### Added

- **Chapter 8: Reactive Programming with RxJS**
  - 8.1 Introduction to RxJS (Observable, Observer, Subscription)
  - 8.2 Creating Observables (of, from, interval, etc.)
  - 8.3 Common Operators (map, filter, tap, catchError)
  - 8.4 Transformation Operators (switchMap, mergeMap, concatMap, exhaustMap)
  - 8.5 Combination Operators (combineLatest, forkJoin, withLatestFrom)
  - 8.6 Subjects (Subject, BehaviorSubject, ReplaySubject, AsyncSubject)
  - 8.7 Managing Subscriptions (unsubscribe, async pipe, takeUntil)
  - 8.8 Filtering Operators (debounceTime, distinctUntilChanged)
  - 8.9 RxJS Best Practices in Angular
