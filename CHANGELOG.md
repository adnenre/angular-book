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

## [Version 1.8.0] - 2026-03-16

### Added

- **Chapter 9: Navigation and Routing**
- 9.1 Router Configuration (RouterModule, Routes)
- 9.2 Route Links (routerLink, routerLinkActive)
- 9.3 Route Parameters (params, queryParams, fragment)
- 9.4 Child Routes and Named (Auxiliary) Routes
- 9.5 Guards (CanActivate, CanActivateChild, CanDeactivate, Resolve, CanLoad)
- 9.6 Lazy Loading Modules
- 9.7 Preloading Strategies (PreloadAllModules, Custom)
- 9.8 Handling 404 Errors and Redirects
- 9.9 Router Events
- 9.10 Routing with Standalone Components

## [Version 1.9.0] - 2026-03-16

### Added

- **Chapter 10: Forms**
  - 10.1 Template‑Driven Forms (FormsModule)
  - 10.2 Validation in Template‑Driven Forms
  - 10.3 Reactive Forms (ReactiveFormsModule)
  - 10.4 FormControl, FormGroup, FormArray
  - 10.5 Built-in and Custom Validators
  - 10.6 Asynchronous Validators
  - 10.7 Field State (touched, dirty, pristine, valid)
  - 10.8 Updating Values (setValue, patchValue, reset)
  - 10.9 Dynamic Forms with FormArray
  - 10.10 Error Handling and Displaying Messages
  - 10.11 Forms in Standalone Components

## [Version 1.10.0] - 2026-03-16

### Added

- **Chapter 11: State and Data Management**
  - 11.1 Simple State Management with Services and BehaviorSubject
  - 11.2 Introduction to NgRx (Store, Actions, Reducers, Selectors, Effects)
  - 11.3 Setting Up NgRx in an Application
  - 11.4 Other State Libraries (Akita, NGXS)
  - 11.5 Comparison of Approaches
  - 11.6 State Management with Standalone Components and Signals

## [Version 1.11.0] - 2026-03-16

### Added

- **Chapitre 12 : Signals (Angular 16+)**
  - 12.1 Introduction aux Signals (signal, computed, effect)
  - 12.2 Signals dans les templates (liaison automatique)
  - 12.3 Signals vs Observables
  - 12.4 Interopérabilité Signals / RxJS (toObservable, toSignal)
  - 12.5 Signals dans les composants (input, output, model)
  - 12.6 Signals pour la gestion d’état
  - 12.7 Effets et cycle de vie
  - 12.8 Bonnes pratiques avec Signals
- **Chapitre 13 : Tests unitaires et d’intégration**
  - 13.1 Configuration de Jasmine et Karma / Jest
  - 13.2 TestBed : configuration et injection
  - 13.3 Tester un composant (TestBed, ComponentFixture, debugElement)
  - 13.4 Tester les interactions (Click, Input)
  - 13.5 Tester les services et HttpClient (HttpClientTestingController)
  - 13.6 Tester les pipes, directives et guards
  - 13.7 Tests asynchrones (fakeAsync, tick, async, waitForAsync)
  - 13.8 Mocks et espions (spyOn)
  - 13.9 Tests End-to-End avec Cypress / Playwright
- **Chapitre 14 : Internationalisation (i18n)**
  - 14.1 Principes de l’internationalisation dans Angular
  - 14.2 Marquer le texte avec i18n
  - 14.3 Traduction avec le compilateur i18n (XIFF, XMB)
  - 14.4 Gestion des pluriels et des sélections
  - 14.5 Chargement des traductions (avec ou sans AOT)
  - 14.6 Internationalisation des dates, nombres et devises (i18n Pipes)
  - 14.7 Construire une application multilingue
- **Chapitre 15 : Performance et optimisation**
  - 15.1 Stratégie de détection de changement (OnPush)
  - 15.2 Utilisation des pipes purs
  - 15.3 Se désabonner des Observables (ngOnDestroy)
  - 15.4 Lazy Loading des modules et composants
  - 15.5 Préchargement des modules
  - 15.6 Optimisation du bundle (Tree-Shaking, compression)
  - 15.7 Analyse de la taille du bundle (source-map-explorer, webpack-bundle-analyzer)
  - 15.8 Virtual Scrolling (CDK Scrolling)
  - 15.9 Amélioration du temps de chargement initial (SSR, pré-rendu)
  - 15.10 Web Workers dans Angular
- **Chapitre 16 : Angular Universal (Server-Side Rendering)**
  - 16.1 Pourquoi le SSR ?
  - 16.2 Mise en place d’Angular Universal
  - 16.3 Comprendre le transfert d’état (TransferState)
  - 16.4 Gestion des dépendances spécifiques au navigateur
  - 16.5 Pré-rendu (Static Rendering)
  - 16.6 Déploiement d’une application Universal -**Chapitre 17 : Sécurité**
  - 17.1 Protection contre les injections XSS (Sanitization)
  - 17.2 Trusted Types
  - 17.3 Gestion des URLs et routage sécurisé
  - 17.4 Authentification et gestion des tokens (JWT, HttpInterceptor)
  - 17.5 Protection CSRF avec Angular
  - 17.6 Sécurisation des formulaires
  - 17.7 Bonnes pratiques de sécurité
- **Chapitre 18 : Animations**
  - 18.1 Introduction aux animations Angular (BrowserAnimationsModule)
  - 18.2 États et transitions (state, style, animate, transition)
  - 18.3 Animations d’entrée/sortie
  - 18.4 Animations séquentielles et parallèles
  - 18.5 Animations avec keyframes
  - 18.6 Callbacks d’animation
  - 18.7 Intégration avec le routage
- **Chapitre 19 : Accessibilité (a11y)**
  - 19.1 Principes d’accessibilité
  - 19.2 Rôles et attributs ARIA
  - 19.3 Navigation au clavier
  - 19.4 Gestion du focus
  - 19.5 Composants accessibles avec Angular CDK
  - 19.6 Tests d’accessibilité
