// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeGalaxy from "starlight-theme-galaxy";
import vercel from "@astrojs/vercel";
// https://astro.build/config
export default defineConfig({
  site: "https://adnenre.github.io/angular-book",
  base: ".",

  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: { en: "Angular Book", fr: "Angular Livre" },
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/adnenre/angular-book/" }],
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
      },
      sidebar: [
        {
          label: "1 - Introduction to Angular and Its Ecosystem",
          translations: {
            fr: "1 - Introduction à Angular et à son écosystème",
          },
          items: [
            {
              label: "1.1 History and Evolution of Angular (AngularJS vs Angular 2+, Major Versions)",
              translations: {
                fr: "1.1 Histoire et évolution d’Angular (AngularJS vs Angular 2+, versions majeures)",
              },
              slug: "chapter-1-introduction-to-angular-and-its-ecosystem/1-1-history-and-evolution-of-angular-angularjs-vs-angular-2-major-versions",
            },
            {
              label: "1.2 Setting Up the Development Environment (Node.js, npm, Angular CLI)",
              translations: {
                fr: "1.2 Mise en place de l’environnement de développement (Node.js, npm, Angular CLI)",
              },
              slug: "chapter-1-introduction-to-angular-and-its-ecosystem/1-2-setting-up-the-development-environment-node-js-npm-angular-cli",
            },
            {
              label: "1.3 Your First Angular Application",
              translations: {
                fr: "1.3 Votre première application Angular",
              },
              slug: "chapter-1-introduction-to-angular-and-its-ecosystem/1-3-your-first-angular-application",
            },
            {
              label: "1.4 Architecture of an Angular Application (Modules, Components, Templates, Metadata)",
              translations: {
                fr: "1.4 Architecture d’une application Angular (Modules, Composants, Templates, Métadonnées)",
              },
              slug: "chapter-1-introduction-to-angular-and-its-ecosystem/1-4-architecture-of-an-angular-application-modules-components-templates-metadata",
            },
            {
              label: "1.5 Angular CLI In Depth",
              translations: {
                fr: "1.5 Angular CLI en profondeur",
              },
              slug: "chapter-1-introduction-to-angular-and-its-ecosystem/1-5-angular-cli-in-depth",
            },
            {
              label: "1.6 Understanding the angular.json File",
              translations: {
                fr: "1.6 Comprendre le fichier angular.json",
              },
              slug: "chapter-1-introduction-to-angular-and-its-ecosystem/1-6-understanding-the-angularjson-file",
            },
            {
              label: "1.7 Debugging Tools (Augury, DevTools)",
              translations: {
                fr: "1.7 Outils de débogage (Augury, DevTools)",
              },
              slug: "chapter-1-introduction-to-angular-and-its-ecosystem/1-7-debugging-tools-augury-devtools",
            },
          ],
        },
        {
          label: "2 - Angular Modules (NgModules)",
          translations: {
            fr: "2 - Modules Angular (NgModules)",
          },
          items: [
            {
              label: "2.1 Role of Modules",
              translations: {
                fr: "2.1 Rôle des modules",
              },
              slug: "chapter-2-angular-modules-ngmodules/2-1-role-of-modules",
            },
            {
              label: "2.2 Declaring a Module (@NgModule)",
              translations: {
                fr: "2.2 Déclaration d’un module (@NgModule)",
              },
              slug: "chapter-2-angular-modules-ngmodules/2-2-declaring-a-module-ngmodule",
            },
            {
              label: "2.3 Imports and Exports",
              translations: {
                fr: "2.3 Imports et exports",
              },
              slug: "chapter-2-angular-modules-ngmodules/2-3-imports-and-exports",
            },
            {
              label: "2.4 Providers and Services at the Module Level",
              translations: {
                fr: "2.4 Providers et services au niveau du module",
              },
              slug: "chapter-2-angular-modules-ngmodules/2-4-providers-and-services-at-the-module-level",
            },
            {
              label: "2.5 Feature Modules and Root Module",
              translations: {
                fr: "2.5 Modules de fonctionnalités et module racine",
              },
              slug: "chapter-2-angular-modules-ngmodules/2-5-feature-modules-and-root-module",
            },
            {
              label: "2.6 Shared Modules and Core Modules",
              translations: {
                fr: "2.6 Modules partagés et modules Core",
              },
              slug: "chapter-2-angular-modules-ngmodules/2-6-shared-modules-and-core-modules",
            },
            {
              label: "2.7 Lazy-Loaded Modules",
              translations: {
                fr: "2.7 Modules chargés paresseusement (Lazy-Loaded Modules)",
              },
              slug: "chapter-2-angular-modules-ngmodules/2-7-lazy-loaded-modules",
            },
            {
              label: "2.8 Scope of Declarations",
              translations: {
                fr: "2.8 Portée des déclarations",
              },
              slug: "chapter-2-angular-modules-ngmodules/2-8-scope-of-declarations",
            },
            {
              label: "2.9 Evolution: Standalone Components (Angular 14+) and Module Reduction",
              translations: {
                fr: "2.9 Évolution : composants autonomes (Angular 14+) et réduction des modules",
              },
              slug: "chapter-2-angular-modules-ngmodules/2-9-evolution-standalone-components-angular-14-and-module-reduction",
            },
          ],
        },
        {
          label: "3 - Components and Templates",
          translations: {
            fr: "3 - Composants et templates",
          },
          items: [
            {
              label: "3.1 Creating a Component (@Component)",
              translations: {
                fr: "3.1 Création d’un composant (@Component)",
              },
              slug: "chapter-3-components-and-templates/3-1-creating-a-component-component",
            },
            {
              label: "3.2 Component Lifecycle (Hooks: ngOnInit, ngOnChanges, etc.)",
              translations: {
                fr: "3.2 Cycle de vie des composants (Hooks : ngOnInit, ngOnChanges, etc.)",
              },
              slug: "chapter-3-components-and-templates/3-2-component-lifecycle-hooks-ngoninit-ngonchanges-etc",
            },
            {
              label: "3.3 Templates: Interpolation and Property Bindings",
              translations: {
                fr: "3.3 Templates : interpolation et liaisons de propriétés",
              },
              slug: "chapter-3-components-and-templates/3-3-templates-interpolation-and-property-bindings",
            },
            {
              label: "3.4 Event Bindings",
              translations: {
                fr: "3.4 Liaisons d’événements",
              },
              slug: "chapter-3-components-and-templates/3-4-event-bindings",
            },
            {
              label: "3.5 Two-Way Binding (ngModel)",
              translations: {
                fr: "3.5 Liaison bidirectionnelle (ngModel)",
              },
              slug: "chapter-3-components-and-templates/3-5-two-way-binding-ngmodel",
            },
            {
              label: "3.6 Template Variables (#var)",
              translations: {
                fr: "3.6 Variables de template (#var)",
              },
              slug: "chapter-3-components-and-templates/3-6-template-variables-var",
            },
            {
              label: "3.7 @Input and @Output (Parent‑Child Communication)",
              translations: {
                fr: "3.7 @Input et @Output (communication parent-enfant)",
              },
              slug: "chapter-3-components-and-templates/3-7-input-and-output-parentchild-communication",
            },
            {
              label: "3.8 View Encapsulation (ViewEncapsulation)",
              translations: {
                fr: "3.8 Encapsulation de vue (ViewEncapsulation)",
              },
              slug: "chapter-3-components-and-templates/3-8-view-encapsulation-viewencapsulation",
            },
            {
              label: "3.9 Styles in Components (host, :host, :host‑context)",
              translations: {
                fr: "3.9 Styles dans les composants (host, :host, :host-context)",
              },
              slug: "chapter-3-components-and-templates/3-9-styles-in-components-host-host-hostcontext",
            },
            {
              label: "3.10 Change Detection Strategy (ChangeDetectionStrategy)",
              translations: {
                fr: "3.10 Stratégie de détection de changement (ChangeDetectionStrategy)",
              },
              slug: "chapter-3-components-and-templates/3-10-change-detection-strategy-changedetectionstrategy",
            },
            {
              label: "3.11 Dynamic Components (ComponentFactoryResolver, ViewContainerRef)",
              translations: {
                fr: "3.11 Composants dynamiques (ComponentFactoryResolver, ViewContainerRef)",
              },
              slug: "chapter-3-components-and-templates/3-11-dynamic-components-componentfactoryresolver-viewcontainerref",
            },
          ],
        },
        {
          label: "4 - Directives",
          translations: {
            fr: "4 - Directives",
          },
          items: [
            {
              label: "4.1 Structural Directives (*ngIf, *ngFor, *ngSwitch)",
              translations: {
                fr: "4.1 Directives structurelles (*ngIf, *ngFor, *ngSwitch)",
              },
              slug: "chapter-4-directives/4-1-structural-directives-ngif-ngfor-ngswitch",
            },
            {
              label: "4.2 Understanding the Syntactic Sugar of Structural Directives",
              translations: {
                fr: "4.2 Comprendre le sucre syntaxique des directives structurelles",
              },
              slug: "chapter-4-directives/4-2-understanding-the-syntactic-sugar-of-structural-directives",
            },
            {
              label: "4.3 Attribute Directives (ngClass, ngStyle, [attr.], [class.], [style.])",
              translations: {
                fr: "4.3 Directives d’attribut (ngClass, ngStyle, [attr.], [class.], [style.])",
              },
              slug: "chapter-4-directives/4-3-attribute-directives-ngclass-ngstyle-attr-class-style",
            },
            {
              label: "4.4 Creating Custom Directives",
              translations: {
                fr: "4.4 Création de directives personnalisées",
              },
              slug: "chapter-4-directives/4-4-creating-custom-directives",
            },
            {
              label: "4.5 Custom Structural Directive",
              translations: {
                fr: "4.5 Directive structurelle personnalisée",
              },
              slug: "chapter-4-directives/4-5-custom-structural-directive",
            },
            {
              label: "4.6 Attribute Directive with @HostListener and @HostBinding",
              translations: {
                fr: "4.6 Directive d’attribut avec @HostListener et @HostBinding",
              },
              slug: "chapter-4-directives/4-6-attribute-directive-with-hostlistener-and-hostbinding",
            },
            {
              label: "4.7 Directive with exportAs",
              translations: {
                fr: "4.7 Directive avec exportAs",
              },
              slug: "chapter-4-directives/4-7-directive-with-exportas",
            },
          ],
        },
        {
          label: "5 - Pipes",
          translations: {
            fr: "5 - Pipes",
          },
          items: [
            {
              label: "5.1 Built-in Pipes (date, uppercase, currency, json, etc.)",
              translations: {
                fr: "5.1 Pipes intégrés (date, uppercase, currency, json, etc.)",
              },
              slug: "chapter-5-pipes/5-1-built-in-pipes-date-uppercase-currency-json-etc",
            },
            {
              label: "5.2 Parameterizing and Chaining Pipes",
              translations: {
                fr: "5.2 Paramétrage et chaînage des pipes",
              },
              slug: "chapter-5-pipes/5-2-parameterizing-and-chaining-pipes",
            },
            {
              label: "5.3 Pure and Impure Pipes",
              translations: {
                fr: "5.3 Pipes purs et impurs",
              },
              slug: "chapter-5-pipes/5-3-pure-and-impure-pipes",
            },
            {
              label: "5.4 Creating Custom Pipes",
              translations: {
                fr: "5.4 Création de pipes personnalisés",
              },
              slug: "chapter-5-pipes/5-4-creating-custom-pipes",
            },
            {
              label: "5.5 Async Pipe for Observables and Promises",
              translations: {
                fr: "5.5 Async Pipe pour Observables et Promises",
              },
              slug: "chapter-5-pipes/5-5-async-pipe-for-observables-and-promises",
            },
            {
              label: "5.6 Evolution: Standalone Pipes",
              translations: {
                fr: "5.6 Évolution : pipes autonomes (Standalone Pipes)",
              },
              slug: "chapter-5-pipes/5-6-evolution-standalone-pipes",
            },
          ],
        },
        {
          label: "6 - Dependency Injection",
          translations: {
            fr: "6 - Injection de dépendances",
          },
          items: [
            {
              label: "6.1 Principles of Dependency Injection",
              translations: {
                fr: "6.1 Principes de l’injection de dépendances",
              },
              slug: "chapter-6-dependency-injection/6-1-principles-of-dependency-injection",
            },
            {
              label: "6.2 Providers: useClass, useValue, useFactory, useExisting",
              translations: {
                fr: "6.2 Providers : useClass, useValue, useFactory, useExisting",
              },
              slug: "chapter-6-dependency-injection/6-2-providers-useclass-usevalue-usefactory-useexisting",
            },
            {
              label: "6.3 @Injectable and providedIn (Service Scope)",
              translations: {
                fr: "6.3 @Injectable et providedIn (portée du service)",
              },
              slug: "chapter-6-dependency-injection/6-3-injectable-and-providedin-service-scope",
            },
            {
              label: "6.4 Injector Hierarchy (Module, Component)",
              translations: {
                fr: "6.4 Hiérarchie des injecteurs (module, composant)",
              },
              slug: "chapter-6-dependency-injection/6-4-injector-hierarchy-module-component",
            },
            {
              label: "6.5 Injection with @Inject and Injection Tokens",
              translations: {
                fr: "6.5 Injection avec @Inject et tokens d’injection",
              },
              slug: "chapter-6-dependency-injection/6-5-injection-with-inject-and-injection-tokens",
            },
            {
              label: "6.6 Optional Dependencies (@Optional)",
              translations: {
                fr: "6.6 Dépendances optionnelles (@Optional)",
              },
              slug: "chapter-6-dependency-injection/6-6-optional-dependencies-optional",
            },
            {
              label: "6.7 Injection with @Self, @SkipSelf, @Host",
              translations: {
                fr: "6.7 Injection avec @Self, @SkipSelf, @Host",
              },
              slug: "chapter-6-dependency-injection/6-7-injection-with-self-skipself-host",
            },
            {
              label: "6.8 Multi‑providers (multi: true)",
              translations: {
                fr: "6.8 Multi-providers (multi: true)",
              },
              slug: "chapter-6-dependency-injection/6-8-multiproviders-multi-true",
            },
            {
              label: "6.9 Dependency Injection in Standalone Components",
              translations: {
                fr: "6.9 Injection de dépendances dans les composants autonomes",
              },
              slug: "chapter-6-dependency-injection/6-9-dependency-injection-in-standalone-components",
            },
          ],
        },
        {
          label: "7 - Services and Server Communication",
          translations: {
            fr: "7 - Services et communication avec le serveur",
          },
          items: [
            {
              label: "7.1 Creating a Simple Service",
              translations: {
                fr: "7.1 Création d’un service simple",
              },
              slug: "chapter-7-services-and-server-communication/7-1-creating-a-simple-service",
            },
            {
              label: "7.2 Using HttpClient (HttpClient Module)",
              translations: {
                fr: "7.2 Utilisation de HttpClient (module HttpClient)",
              },
              slug: "chapter-7-services-and-server-communication/7-2-using-httpclient-httpclient-module",
            },
            {
              label: "7.3 HTTP Interceptors (Intercepting Requests/Responses)",
              translations: {
                fr: "7.3 Intercepteurs HTTP (interception des requêtes/réponses)",
              },
              slug: "chapter-7-services-and-server-communication/7-3-http-interceptors-intercepting-requestsresponses",
            },
            {
              label: "7.4 HTTP Error Handling",
              translations: {
                fr: "7.4 Gestion des erreurs HTTP",
              },
              slug: "chapter-7-services-and-server-communication/7-4-http-error-handling",
            },
            {
              label: "7.5 Using Observables with the async Pipe",
              translations: {
                fr: "7.5 Utilisation des Observables avec l’async pipe",
              },
              slug: "chapter-7-services-and-server-communication/7-5-using-observables-with-the-async-pipe",
            },
            {
              label: "7.6 Parallel and Sequential Requests (forkJoin, switchMap, etc.)",
              translations: {
                fr: "7.6 Requêtes parallèles et séquentielles (forkJoin, switchMap, etc.)",
              },
              slug: "chapter-7-services-and-server-communication/7-6-parallel-and-sequential-requests-forkjoin-switchmap-etc",
            },
            {
              label: "7.7 Data Caching",
              translations: {
                fr: "7.7 Mise en cache des données",
              },
              slug: "chapter-7-services-and-server-communication/7-7-data-caching",
            },
            {
              label: "7.8 WebSockets in Angular",
              translations: {
                fr: "7.8 WebSockets avec Angular",
              },
              slug: "chapter-7-services-and-server-communication/7-8-websockets-in-angular",
            },
          ],
        },
        {
          label: "8 - Reactive Programming with RxJS",
          translations: {
            fr: "8 - Programmation réactive avec RxJS",
          },
          items: [
            {
              label: "8.1 Introduction to RxJS (Observable, Observer, Subscription)",
              translations: {
                fr: "8.1 Introduction à RxJS (Observable, Observer, Subscription)",
              },
              slug: "chapter-8-reactive-programming-with-rxjs/8-1-introduction-to-rxjs-observable-observer-subscription",
            },
            {
              label: "8.2 Creating Observables (of, from, interval, etc.)",
              translations: {
                fr: "8.2 Création d’Observables (of, from, interval, etc.)",
              },
              slug: "chapter-8-reactive-programming-with-rxjs/8-2-creating-observables-of-from-interval-etc",
            },
            {
              label: "8.3 Common Operators (map, filter, tap, catchError)",
              translations: {
                fr: "8.3 Opérateurs courants (map, filter, tap, catchError)",
              },
              slug: "chapter-8-reactive-programming-with-rxjs/8-3-common-operators-map-filter-tap-catcherror",
            },
            {
              label: "8.4 Transformation Operators (switchMap, mergeMap, concatMap, exhaustMap)",
              translations: {
                fr: "8.4 Opérateurs de transformation (switchMap, mergeMap, concatMap, exhaustMap)",
              },
              slug: "chapter-8-reactive-programming-with-rxjs/8-4-transformation-operators-switchmap-mergemap-concatmap-exhaustmap",
            },
            {
              label: "8.5 Combination Operators (combineLatest, forkJoin, withLatestFrom)",
              translations: {
                fr: "8.5 Opérateurs de combinaison (combineLatest, forkJoin, withLatestFrom)",
              },
              slug: "chapter-8-reactive-programming-with-rxjs/8-5-combination-operators-combinelatest-forkjoin-withlatestfrom",
            },
            {
              label: "8.6 Subjects (Subject, BehaviorSubject, ReplaySubject, AsyncSubject)",
              translations: {
                fr: "8.6 Subjects (Subject, BehaviorSubject, ReplaySubject, AsyncSubject)",
              },
              slug: "chapter-8-reactive-programming-with-rxjs/8-6-subjects-subject-behaviorsubject-replaysubject-asyncsubject",
            },
            {
              label: "8.7 Managing Subscriptions (unsubscribe, async pipe, takeUntil)",
              translations: {
                fr: "8.7 Gestion des abonnements (unsubscribe, async pipe, takeUntil)",
              },
              slug: "chapter-8-reactive-programming-with-rxjs/8-7-managing-subscriptions-unsubscribe-async-pipe-takeuntil",
            },
            {
              label: "8.8 Filtering Operators (debounceTime, distinctUntilChanged)",
              translations: {
                fr: "8.8 Opérateurs de filtrage (debounceTime, distinctUntilChanged)",
              },
              slug: "chapter-8-reactive-programming-with-rxjs/8-8-filtering-operators-debouncetime-distinctuntilchanged",
            },
            {
              label: "8.9 RxJS Best Practices in Angular",
              translations: {
                fr: "8.9 Bonnes pratiques RxJS dans Angular",
              },
              slug: "chapter-8-reactive-programming-with-rxjs/8-9-rxjs-best-practices-in-angular",
            },
          ],
        },
        {
          label: "9 - Navigation and Routing",
          translations: {
            fr: "9 - Navigation et routage",
          },
          items: [
            {
              label: "9.1 Router Configuration (RouterModule, Routes)",
              translations: {
                fr: "9.1 Configuration du routeur (RouterModule, Routes)",
              },
              slug: "chapter-9-navigation-and-routing/9-1-router-configuration-routermodule-routes",
            },
            {
              label: "9.2 Route Links (routerLink, routerLinkActive)",
              translations: {
                fr: "9.2 Liens de navigation (routerLink, routerLinkActive)",
              },
              slug: "chapter-9-navigation-and-routing/9-2-route-links-routerlink-routerlinkactive",
            },
            {
              label: "9.3 Route Parameters (params, queryParams, fragment)",
              translations: {
                fr: "9.3 Paramètres de route (params, queryParams, fragment)",
              },
              slug: "chapter-9-navigation-and-routing/9-3-route-parameters-params-queryparams-fragment",
            },
            {
              label: "9.4 Child Routes and Named (Auxiliary) Routes",
              translations: {
                fr: "9.4 Routes enfants et routes nommées (auxiliaires)",
              },
              slug: "chapter-9-navigation-and-routing/9-4-child-routes-and-named-auxiliary-routes",
            },
            {
              label: "9.5 Guards (CanActivate, CanActivateChild, CanDeactivate, Resolve, CanLoad)",
              translations: {
                fr: "9.5 Guards (CanActivate, CanActivateChild, CanDeactivate, Resolve, CanLoad)",
              },
              slug: "chapter-9-navigation-and-routing/9-5-guards-canactivate-canactivatechild-candeactivate-resolve-canload",
            },
            {
              label: "9.6 Lazy Loading Modules",
              translations: {
                fr: "9.6 Chargement paresseux des modules",
              },
              slug: "chapter-9-navigation-and-routing/9-6-lazy-loading-modules",
            },
            {
              label: "9.7 Preloading Strategies (PreloadAllModules, Custom)",
              translations: {
                fr: "9.7 Stratégies de préchargement (PreloadAllModules, personnalisé)",
              },
              slug: "chapter-9-navigation-and-routing/9-7-preloading-strategies-preloadallmodules-custom",
            },
            {
              label: "9.8 Handling 404 Errors and Redirects",
              translations: {
                fr: "9.8 Gestion des erreurs 404 et redirections",
              },
              slug: "chapter-9-navigation-and-routing/9-8-handling-404-errors-and-redirects",
            },
            {
              label: "9.9 Router Events",
              translations: {
                fr: "9.9 Événements du routeur",
              },
              slug: "chapter-9-navigation-and-routing/9-9-router-events",
            },
            {
              label: "9.10 Routing with Standalone Components",
              translations: {
                fr: "9.10 Routage avec des composants autonomes",
              },
              slug: "chapter-9-navigation-and-routing/9-10-routing-with-standalone-components",
            },
          ],
        },
        {
          label: "10 - Forms",
          translations: {
            fr: "10 - Formulaires",
          },
          items: [
            {
              label: "10.1 Template‑Driven Forms (FormsModule)",
              translations: {
                fr: "10.1 Formulaires pilotés par le template (FormsModule)",
              },
              slug: "chapter-10-forms/10-1-templatedriven-forms-formsmodule",
            },
            {
              label: "10.2 Validation in Template‑Driven Forms",
              translations: {
                fr: "10.2 Validation dans les formulaires Template-Driven",
              },
              slug: "chapter-10-forms/10-2-validation-in-templatedriven-forms",
            },
            {
              label: "10.3 Reactive Forms (ReactiveFormsModule)",
              translations: {
                fr: "10.3 Formulaires réactifs (ReactiveFormsModule)",
              },
              slug: "chapter-10-forms/10-3-reactive-forms-reactiveformsmodule",
            },
            {
              label: "10.4 FormControl, FormGroup, FormArray",
              translations: {
                fr: "10.4 FormControl, FormGroup, FormArray",
              },
              slug: "chapter-10-forms/10-4-formcontrol-formgroup-formarray",
            },
            {
              label: "10.5 Built-in and Custom Validators",
              translations: {
                fr: "10.5 Validateurs intégrés et personnalisés",
              },
              slug: "chapter-10-forms/10-5-built-in-and-custom-validators",
            },
            {
              label: "10.6 Asynchronous Validators",
              translations: {
                fr: "10.6 Validateurs asynchrones",
              },
              slug: "chapter-10-forms/10-6-asynchronous-validators",
            },
            {
              label: "10.7 Field State (touched, dirty, pristine, valid)",
              translations: {
                fr: "10.7 État des champs (touched, dirty, pristine, valid)",
              },
              slug: "chapter-10-forms/10-7-field-state-touched-dirty-pristine-valid",
            },
            {
              label: "10.8 Updating Values (setValue, patchValue, reset)",
              translations: {
                fr: "10.8 Mise à jour des valeurs (setValue, patchValue, reset)",
              },
              slug: "chapter-10-forms/10-8-updating-values-setvalue-patchvalue-reset",
            },
            {
              label: "10.9 Dynamic Forms with FormArray",
              translations: {
                fr: "10.9 Formulaires dynamiques avec FormArray",
              },
              slug: "chapter-10-forms/10-9-dynamic-forms-with-formarray",
            },
            {
              label: "10.10 Error Handling and Displaying Messages",
              translations: {
                fr: "10.10 Gestion des erreurs et affichage des messages",
              },
              slug: "chapter-10-forms/10-10-error-handling-and-displaying-messages",
            },
            {
              label: "10.11 Forms in Standalone Components",
              translations: {
                fr: "10.11 Formulaires dans les composants autonomes",
              },
              slug: "chapter-10-forms/10-11-forms-in-standalone-components",
            },
          ],
        },
        {
          label: "11 - State and Data Management",
          translations: {
            fr: "11 - Gestion de l’état et des données",
          },
          items: [
            {
              label: "11.1 Simple State Management with Services and BehaviorSubject",
              translations: {
                fr: "11.1 Gestion simple de l’état avec Services et BehaviorSubject",
              },
              slug: "chapter-11-state-and-data-management/11-1-simple-state-management-with-services-and-behaviorsubject",
            },
            {
              label: "11.2 Introduction to NgRx (Store, Actions, Reducers, Selectors, Effects)",
              translations: {
                fr: "11.2 Introduction à NgRx (Store, Actions, Reducers, Selectors, Effects)",
              },
              slug: "chapter-11-state-and-data-management/11-2-introduction-to-ngrx-store-actions-reducers-selectors-effects",
            },
            {
              label: "11.3 Setting Up NgRx in an Application",
              translations: {
                fr: "11.3 Mise en place de NgRx dans une application",
              },
              slug: "chapter-11-state-and-data-management/11-3-setting-up-ngrx-in-an-application",
            },
            {
              label: "11.4 Other State Libraries (Akita, NGXS)",
              translations: {
                fr: "11.4 Autres bibliothèques de gestion d’état (Akita, NGXS)",
              },
              slug: "chapter-11-state-and-data-management/11-4-other-state-libraries-akita-ngxs",
            },
            {
              label: "11.5 Comparison of Approaches",
              translations: {
                fr: "11.5 Comparaison des approches",
              },
              slug: "chapter-11-state-and-data-management/11-5-comparison-of-approaches",
            },
            {
              label: "11.6 State Management with Standalone Components and Signals",
              translations: {
                fr: "11.6 Gestion d’état avec composants autonomes et Signals",
              },
              slug: "chapter-11-state-and-data-management/11-6-state-management-with-standalone-components-and-signals",
            },
          ],
        },
        {
          label: "12 - Signals (Angular 16+)",
          translations: {
            fr: "12 - Signals (Angular 16+)",
          },
          items: [
            {
              label: "12.1 Introduction to Signals (signal, computed, effect)",
              translations: {
                fr: "12.1 Introduction aux Signals (signal, computed, effect)",
              },
              slug: "chapter-12-signals-angular-16/12-1-introduction-to-signals-signal-computed-effect",
            },
            {
              label: "12.2 Signals in Templates (Automatic Binding)",
              translations: {
                fr: "12.2 Signals dans les templates (liaison automatique)",
              },
              slug: "chapter-12-signals-angular-16/12-2-signals-in-templates-automatic-binding",
            },
            {
              label: "12.3 Signals vs. Observables",
              translations: {
                fr: "12.3 Signals vs Observables",
              },
              slug: "chapter-12-signals-angular-16/12-3-signals-vs-observables",
            },
            {
              label: "12.4 Signals / RxJS Interoperability (toObservable, toSignal)",
              translations: {
                fr: "12.4 Interopérabilité Signals / RxJS (toObservable, toSignal)",
              },
              slug: "chapter-12-signals-angular-16/12-4-signals-rxjs-interoperability-toobservable-tosignal",
            },
            {
              label: "12.5 Signals in Components (input, output, model)",
              translations: {
                fr: "12.5 Signals dans les composants (input, output, model)",
              },
              slug: "chapter-12-signals-angular-16/12-5-signals-in-components-input-output-model",
            },
            {
              label: "12.6 Signals for State Management",
              translations: {
                fr: "12.6 Signals pour la gestion d’état",
              },
              slug: "chapter-12-signals-angular-16/12-6-signals-for-state-management",
            },
            {
              label: "12.7 Effects and Lifecycle",
              translations: {
                fr: "12.7 Effets et cycle de vie",
              },
              slug: "chapter-12-signals-angular-16/12-7-effects-and-lifecycle",
            },
            {
              label: "12.8 Best Practices with Signals",
              translations: {
                fr: "12.8 Bonnes pratiques avec Signals",
              },
              slug: "chapter-12-signals-angular-16/12-8-best-practices-with-signals",
            },
          ],
        },
        {
          label: "13 - Unit and Integration Testing",
          translations: {
            fr: "13 - Tests unitaires et d’intégration",
          },
          items: [
            {
              label: "13.1 Setting Up Jasmine and Karma / Jest",
              translations: {
                fr: "13.1 Configuration de Jasmine et Karma / Jest",
              },
              slug: "chapter-13-unit-and-integration-testing/13-1-setting-up-jasmine-and-karma-jest",
            },
            {
              label: "13.2 TestBed: Configuration and Injection",
              translations: {
                fr: "13.2 TestBed : configuration et injection",
              },
              slug: "chapter-13-unit-and-integration-testing/13-2-testbed-configuration-and-injection",
            },
            {
              label: "13.3 Testing a Component (TestBed, ComponentFixture, debugElement)",
              translations: {
                fr: "13.3 Tester un composant (TestBed, ComponentFixture, debugElement)",
              },
              slug: "chapter-13-unit-and-integration-testing/13-3-testing-a-component-testbed-componentfixture-debugelement",
            },
            {
              label: "13.4 Testing Interactions (Click, Input)",
              translations: {
                fr: "13.4 Tester les interactions (Click, Input)",
              },
              slug: "chapter-13-unit-and-integration-testing/13-4-testing-interactions-click-input",
            },
            {
              label: "13.5 Testing Services and HttpClient (HttpClientTestingController)",
              translations: {
                fr: "13.5 Tester les services et HttpClient (HttpClientTestingController)",
              },
              slug: "chapter-13-unit-and-integration-testing/13-5-testing-services-and-httpclient-httpclienttestingcontroller",
            },
            {
              label: "13.6 Testing Pipes, Directives, and Guards",
              translations: {
                fr: "13.6 Tester les pipes, directives et guards",
              },
              slug: "chapter-13-unit-and-integration-testing/13-6-testing-pipes-directives-and-guards",
            },
            {
              label: "13.7 Asynchronous Tests (fakeAsync, tick, async, waitForAsync)",
              translations: {
                fr: "13.7 Tests asynchrones (fakeAsync, tick, async, waitForAsync)",
              },
              slug: "chapter-13-unit-and-integration-testing/13-7-asynchronous-tests-fakeasync-tick-async-waitforasync",
            },
            {
              label: "13.8 Mocks and Spies (spyOn)",
              translations: {
                fr: "13.8 Mocks et espions (spyOn)",
              },
              slug: "chapter-13-unit-and-integration-testing/13-8-mocks-and-spies-spyon",
            },
            {
              label: "13.9 End-to-End Testing with Cypress / Playwright",
              translations: {
                fr: "13.9 Tests End-to-End avec Cypress / Playwright",
              },
              slug: "chapter-13-unit-and-integration-testing/13-9-end-to-end-testing-with-cypress-playwright",
            },
          ],
        },
        {
          label: "14 - Internationalization (i18n)",
          translations: {
            fr: "14 - Internationalisation (i18n)",
          },
          items: [
            {
              label: "14.1 Principles of Internationalization in Angular",
              translations: {
                fr: "14.1 Principes de l’internationalisation dans Angular",
              },
              slug: "chapter-14-internationalization-i18n/14-1-principles-of-internationalization-in-angular",
            },
            {
              label: "14.2 Marking Text with i18n",
              translations: {
                fr: "14.2 Marquer le texte avec i18n",
              },
              slug: "chapter-14-internationalization-i18n/14-2-marking-text-with-i18n",
            },
            {
              label: "14.3 Translating with the i18n Compiler (XIFF, XMB)",
              translations: {
                fr: "14.3 Traduction avec le compilateur i18n (XIFF, XMB)",
              },
              slug: "chapter-14-internationalization-i18n/14-3-translating-with-the-i18n-compiler-xiff-xmb",
            },
            {
              label: "14.4 Handling Plurals and Selections",
              translations: {
                fr: "14.4 Gestion des pluriels et des sélections",
              },
              slug: "chapter-14-internationalization-i18n/14-4-handling-plurals-and-selections",
            },
            {
              label: "14.5 Loading Translations (with or without AOT)",
              translations: {
                fr: "14.5 Chargement des traductions (avec ou sans AOT)",
              },
              slug: "chapter-14-internationalization-i18n/14-5-loading-translations-with-or-without-aot",
            },
            {
              label: "14.6 Internationalizing Dates, Numbers, Currencies (i18n Pipes)",
              translations: {
                fr: "14.6 Internationalisation des dates, nombres et devises (i18n Pipes)",
              },
              slug: "chapter-14-internationalization-i18n/14-6-internationalizing-dates-numbers-currencies-i18n-pipes",
            },
            {
              label: "14.7 Building a Multilingual Application",
              translations: {
                fr: "14.7 Construire une application multilingue",
              },
              slug: "chapter-14-internationalization-i18n/14-7-building-a-multilingual-application",
            },
          ],
        },
        {
          label: "15 - Performance and Optimization",
          translations: {
            fr: "15 - Performance et optimisation",
          },
          items: [
            {
              label: "15.1 Change Detection Strategy (OnPush)",
              translations: {
                fr: "15.1 Stratégie de détection de changement (OnPush)",
              },
              slug: "chapter-15-performance-and-optimization/15-1-change-detection-strategy-onpush",
            },
            {
              label: "15.2 Using Pure Pipes",
              translations: {
                fr: "15.2 Utilisation des pipes purs",
              },
              slug: "chapter-15-performance-and-optimization/15-2-using-pure-pipes",
            },
            {
              label: "15.3 Unsubscribing from Observables (ngOnDestroy)",
              translations: {
                fr: "15.3 Se désabonner des Observables (ngOnDestroy)",
              },
              slug: "chapter-15-performance-and-optimization/15-3-unsubscribing-from-observables-ngondestroy",
            },
            {
              label: "15.4 Lazy Loading Modules and Components",
              translations: {
                fr: "15.4 Lazy Loading des modules et composants",
              },
              slug: "chapter-15-performance-and-optimization/15-4-lazy-loading-modules-and-components",
            },
            {
              label: "15.5 Module Preloading",
              translations: {
                fr: "15.5 Préchargement des modules",
              },
              slug: "chapter-15-performance-and-optimization/15-5-module-preloading",
            },
            {
              label: "15.6 Bundle Optimization (Tree‑Shaking, Compression)",
              translations: {
                fr: "15.6 Optimisation du bundle (Tree-Shaking, compression)",
              },
              slug: "chapter-15-performance-and-optimization/15-6-bundle-optimization-treeshaking-compression",
            },
            {
              label: "15.7 Bundle Size Analysis (source‑map‑explorer, webpack‑bundle‑analyzer)",
              translations: {
                fr: "15.7 Analyse de la taille du bundle (source-map-explorer, webpack-bundle-analyzer)",
              },
              slug: "chapter-15-performance-and-optimization/15-7-bundle-size-analysis-sourcemapexplorer-webpackbundleanalyzer",
            },
            {
              label: "15.8 Virtual Scrolling (CDK Scrolling)",
              translations: {
                fr: "15.8 Virtual Scrolling (CDK Scrolling)",
              },
              slug: "chapter-15-performance-and-optimization/15-8-virtual-scrolling-cdk-scrolling",
            },
            {
              label: "15.9 Improving Initial Load Time (Server‑Side Rendering, Pre‑rendering)",
              translations: {
                fr: "15.9 Amélioration du temps de chargement initial (SSR, pré-rendu)",
              },
              slug: "chapter-15-performance-and-optimization/15-9-improving-initial-load-time-serverside-rendering-prerendering",
            },
            {
              label: "15.10 Web Workers in Angular",
              translations: {
                fr: "15.10 Web Workers dans Angular",
              },
              slug: "chapter-15-performance-and-optimization/15-10-web-workers-in-angular",
            },
          ],
        },
        {
          label: "16 - Angular Universal (Server‑Side Rendering)",
          translations: {
            fr: "16 - Angular Universal (Server-Side Rendering)",
          },
          items: [
            {
              label: "16.1 Why SSR?",
              translations: {
                fr: "16.1 Pourquoi le SSR ?",
              },
              slug: "chapter-16-angular-universal-serverside-rendering/16-1-why-ssr",
            },
            {
              label: "16.2 Setting Up Angular Universal",
              translations: {
                fr: "16.2 Mise en place d’Angular Universal",
              },
              slug: "chapter-16-angular-universal-serverside-rendering/16-2-setting-up-angular-universal",
            },
            {
              label: "16.3 Understanding State Transfer (TransferState)",
              translations: {
                fr: "16.3 Comprendre le transfert d’état (TransferState)",
              },
              slug: "chapter-16-angular-universal-serverside-rendering/16-3-understanding-state-transfer-transferstate",
            },
            {
              label: "16.4 Handling Browser‑Specific Dependencies",
              translations: {
                fr: "16.4 Gestion des dépendances spécifiques au navigateur",
              },
              slug: "chapter-16-angular-universal-serverside-rendering/16-4-handling-browserspecific-dependencies",
            },
            {
              label: "16.5 Pre‑rendering (Static Rendering)",
              translations: {
                fr: "16.5 Pré-rendu (Static Rendering)",
              },
              slug: "chapter-16-angular-universal-serverside-rendering/16-5-prerendering-static-rendering",
            },
            {
              label: "16.6 Deploying a Universal Application",
              translations: {
                fr: "16.6 Déploiement d’une application Universal",
              },
              slug: "chapter-16-angular-universal-serverside-rendering/16-6-deploying-a-universal-application",
            },
          ],
        },
        {
          label: "17 - Security",
          translations: {
            fr: "17 - Sécurité",
          },
          items: [
            {
              label: "17.1 Protection Against XSS Injections (Sanitization)",
              translations: {
                fr: "17.1 Protection contre les injections XSS (Sanitization)",
              },
              slug: "chapter-17-security/17-1-protection-against-xss-injections-sanitization",
            },
            {
              label: "17.2 Trusted Types",
              translations: {
                fr: "17.2 Trusted Types",
              },
              slug: "chapter-17-security/17-2-trusted-types",
            },
            {
              label: "17.3 Handling URLs and Secure Routing",
              translations: {
                fr: "17.3 Gestion des URLs et routage sécurisé",
              },
              slug: "chapter-17-security/17-3-handling-urls-and-secure-routing",
            },
            {
              label: "17.4 Authentication and Token Management (JWT, HttpInterceptor)",
              translations: {
                fr: "17.4 Authentification et gestion des tokens (JWT, HttpInterceptor)",
              },
              slug: "chapter-17-security/17-4-authentication-and-token-management-jwt-httpinterceptor",
            },
            {
              label: "17.5 CSRF Protection with Angular",
              translations: {
                fr: "17.5 Protection CSRF avec Angular",
              },
              slug: "chapter-17-security/17-5-csrf-protection-with-angular",
            },
            {
              label: "17.6 Securing Forms",
              translations: {
                fr: "17.6 Sécurisation des formulaires",
              },
              slug: "chapter-17-security/17-6-securing-forms",
            },
            {
              label: "17.7 Security Best Practices",
              translations: {
                fr: "17.7 Bonnes pratiques de sécurité",
              },
              slug: "chapter-17-security/17-7-security-best-practices",
            },
          ],
        },
        {
          label: "18 - Animations",
          translations: {
            fr: "18 - Animations",
          },
          items: [
            {
              label: "18.1 Introduction to Angular Animations (BrowserAnimationsModule)",
              translations: {
                fr: "18.1 Introduction aux animations Angular (BrowserAnimationsModule)",
              },
              slug: "chapter-18-animations/18-1-introduction-to-angular-animations-browseranimationsmodule",
            },
            {
              label: "18.2 States and Transitions (state, style, animate, transition)",
              translations: {
                fr: "18.2 États et transitions (state, style, animate, transition)",
              },
              slug: "chapter-18-animations/18-2-states-and-transitions-state-style-animate-transition",
            },
            {
              label: "18.3 Entry/Exit Animations",
              translations: {
                fr: "18.3 Animations d’entrée/sortie",
              },
              slug: "chapter-18-animations/18-3-entryexit-animations",
            },
            {
              label: "18.4 Sequential and Parallel Animations",
              translations: {
                fr: "18.4 Animations séquentielles et parallèles",
              },
              slug: "chapter-18-animations/18-4-sequential-and-parallel-animations",
            },
            {
              label: "18.5 Keyframe Animations",
              translations: {
                fr: "18.5 Animations avec keyframes",
              },
              slug: "chapter-18-animations/18-5-keyframe-animations",
            },
            {
              label: "18.6 Animation Callbacks",
              translations: {
                fr: "18.6 Callbacks d’animation",
              },
              slug: "chapter-18-animations/18-6-animation-callbacks",
            },
            {
              label: "18.7 Integration with Routing",
              translations: {
                fr: "18.7 Intégration avec le routage",
              },
              slug: "chapter-18-animations/18-7-integration-with-routing",
            },
          ],
        },
        {
          label: "19 - Accessibility (a11y)",
          translations: {
            fr: "19 - Accessibilité (a11y)",
          },
          items: [
            {
              label: "19.1 Accessibility Principles",
              translations: {
                fr: "19.1 Principes d’accessibilité",
              },
              slug: "chapter-19-accessibility-a11y/19-1-accessibility-principles",
            },
            {
              label: "19.2 ARIA Roles and Attributes",
              translations: {
                fr: "19.2 Rôles et attributs ARIA",
              },
              slug: "chapter-19-accessibility-a11y/19-2-aria-roles-and-attributes",
            },
            {
              label: "19.3 Keyboard Navigation",
              translations: {
                fr: "19.3 Navigation au clavier",
              },
              slug: "chapter-19-accessibility-a11y/19-3-keyboard-navigation",
            },
            {
              label: "19.4 Focus Management",
              translations: {
                fr: "19.4 Gestion du focus",
              },
              slug: "chapter-19-accessibility-a11y/19-4-focus-management",
            },
            {
              label: "19.5 Accessible Components with Angular CDK",
              translations: {
                fr: "19.5 Composants accessibles avec Angular CDK",
              },
              slug: "chapter-19-accessibility-a11y/19-5-accessible-components-with-angular-cdk",
            },
            {
              label: "19.6 Accessibility Testing",
              translations: {
                fr: "19.6 Tests d’accessibilité",
              },
              slug: "chapter-19-accessibility-a11y/19-6-accessibility-testing",
            },
          ],
        },
        {
          label: "20 - Angular CDK (Component Dev Kit)",
          translations: {
            fr: "20 - Angular CDK (Component Dev Kit)",
          },
          items: [
            {
              label: "20.1 Overview of the CDK",
              translations: {
                fr: "20.1 Présentation du CDK",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-1-overview-of-the-cdk",
            },
            {
              label: "20.2 A11yModule (Focus Management, LiveAnnouncer, etc.)",
              translations: {
                fr: "20.2 A11yModule (gestion du focus, LiveAnnouncer, etc.)",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-2-a11ymodule-focus-management-liveannouncer-etc",
            },
            {
              label: "20.3 Overlay (Creating Popups, Modals, Tooltips)",
              translations: {
                fr: "20.3 Overlay (création de popups, modales, tooltips)",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-3-overlay-creating-popups-modals-tooltips",
            },
            {
              label: "20.4 Portal (Dynamic Content Rendering)",
              translations: {
                fr: "20.4 Portal (rendu dynamique de contenu)",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-4-portal-dynamic-content-rendering",
            },
            {
              label: "20.5 Scrolling (Virtual Scrolling)",
              translations: {
                fr: "20.5 Scrolling (Virtual Scrolling)",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-5-scrolling-virtual-scrolling",
            },
            {
              label: "20.6 Drag and Drop",
              translations: {
                fr: "20.6 Drag and Drop",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-6-drag-and-drop",
            },
            {
              label: "20.7 Table (Data Table Management)",
              translations: {
                fr: "20.7 Table (gestion des tables de données)",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-7-table-data-table-management",
            },
            {
              label: "20.8 Tree (Tree View)",
              translations: {
                fr: "20.8 Tree (vue arborescente)",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-8-tree-tree-view",
            },
            {
              label: "20.9 Clipboard (Clipboard Management)",
              translations: {
                fr: "20.9 Clipboard (gestion du presse-papiers)",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-9-clipboard-clipboard-management",
            },
            {
              label: "20.10 Stepper (Step‑by‑Step Guide)",
              translations: {
                fr: "20.10 Stepper (guide étape par étape)",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-10-stepper-stepbystep-guide",
            },
            {
              label: "20.11 Other Features",
              translations: {
                fr: "20.11 Autres fonctionnalités",
              },
              slug: "chapter-20-angular-cdk-component-dev-kit/20-11-other-features",
            },
          ],
        },
        {
          label: "21 - Angular Material",
          translations: {
            fr: "21 - Angular Material",
          },
          items: [
            {
              label: "21.1 Installation and Configuration",
              translations: {
                fr: "21.1 Installation et configuration",
              },
              slug: "chapter-21-angular-material/21-1-installation-and-configuration",
            },
            {
              label: "21.2 Theming and Typography",
              translations: {
                fr: "21.2 Thèmes et typographie",
              },
              slug: "chapter-21-angular-material/21-2-theming-and-typography",
            },
            {
              label: "21.3 Material Components (Forms, Navigation, Layout, Buttons, Modals, Tables)",
              translations: {
                fr: "21.3 Composants Material (Formulaires, Navigation, Layout, Boutons, Modales, Tables)",
              },
              slug: "chapter-21-angular-material/21-3-material-components-forms-navigation-layout-buttons-modals-tables",
            },
            {
              label: "21.4 Customizing Components",
              translations: {
                fr: "21.4 Personnalisation des composants",
              },
              slug: "chapter-21-angular-material/21-4-customizing-components",
            },
            {
              label: "21.5 Using the CDK with Material",
              translations: {
                fr: "21.5 Utilisation du CDK avec Material",
              },
              slug: "chapter-21-angular-material/21-5-using-the-cdk-with-material",
            },
            {
              label: "21.6 Material Icons",
              translations: {
                fr: "21.6 Icônes Material",
              },
              slug: "chapter-21-angular-material/21-6-material-icons",
            },
          ],
        },
        {
          label: "22 - Migrating Between Versions",
          translations: {
            fr: "22 - Migration entre versions",
          },
          items: [
            {
              label: "22.1 Understanding Angular Versioning (SemVer, Updating)",
              translations: {
                fr: "22.1 Comprendre la gestion des versions Angular (SemVer, mises à jour)",
              },
              slug: "chapter-22-migrating-between-versions/22-1-understanding-angular-versioning-semver-updating",
            },
            {
              label: "22.2 Using the Angular Update Guide",
              translations: {
                fr: "22.2 Utilisation du Angular Update Guide",
              },
              slug: "chapter-22-migrating-between-versions/22-2-using-the-angular-update-guide",
            },
            {
              label: "22.3 Migrating to Standalone Components (Angular 14+)",
              translations: {
                fr: "22.3 Migration vers les composants autonomes (Angular 14+)",
              },
              slug: "chapter-22-migrating-between-versions/22-3-migrating-to-standalone-components-angular-14",
            },
            {
              label: "22.4 Migrating to Signals (Angular 16+)",
              translations: {
                fr: "22.4 Migration vers les Signals (Angular 16+)",
              },
              slug: "chapter-22-migrating-between-versions/22-4-migrating-to-signals-angular-16",
            },
            {
              label: "22.5 Handling Breaking Changes",
              translations: {
                fr: "22.5 Gestion des breaking changes",
              },
              slug: "chapter-22-migrating-between-versions/22-5-handling-breaking-changes",
            },
            {
              label: "22.6 Automated Migration Tools (ng update)",
              translations: {
                fr: "22.6 Outils de migration automatisés (ng update)",
              },
              slug: "chapter-22-migrating-between-versions/22-6-automated-migration-tools-ng-update",
            },
          ],
        },
        {
          label: "23 - Enterprise Architecture and Best Practices",
          translations: {
            fr: "23 - Architecture d’entreprise et bonnes pratiques",
          },
          items: [
            {
              label: "23.1 Structuring an Angular Project (By Feature, By Type)",
              translations: {
                fr: "23.1 Structurer un projet Angular (par fonctionnalité, par type)",
              },
              slug: "chapter-23-enterprise-architecture-and-best-practices/23-1-structuring-an-angular-project-by-feature-by-type",
            },
            {
              label: "23.2 Environment Management (environment.ts)",
              translations: {
                fr: "23.2 Gestion des environnements (environment.ts)",
              },
              slug: "chapter-23-enterprise-architecture-and-best-practices/23-2-environment-management-environmentts",
            },
            {
              label: "23.3 Using Shared Libraries (Workspace, Projects)",
              translations: {
                fr: "23.3 Utilisation de bibliothèques partagées (Workspace, Projects)",
              },
              slug: "chapter-23-enterprise-architecture-and-best-practices/23-3-using-shared-libraries-workspace-projects",
            },
            {
              label: "23.4 Dependency Management",
              translations: {
                fr: "23.4 Gestion des dépendances",
              },
              slug: "chapter-23-enterprise-architecture-and-best-practices/23-4-dependency-management",
            },
            {
              label: "23.5 Code Documentation (Compodoc)",
              translations: {
                fr: "23.5 Documentation du code (Compodoc)",
              },
              slug: "chapter-23-enterprise-architecture-and-best-practices/23-5-code-documentation-compodoc",
            },
            {
              label: "23.6 CI/CD for Angular",
              translations: {
                fr: "23.6 CI/CD pour Angular",
              },
              slug: "chapter-23-enterprise-architecture-and-best-practices/23-6-cicd-for-angular",
            },
            {
              label: "23.7 Code Analysis (ESLint, Prettier)",
              translations: {
                fr: "23.7 Analyse du code (ESLint, Prettier)",
              },
              slug: "chapter-23-enterprise-architecture-and-best-practices/23-7-code-analysis-eslint-prettier",
            },
            {
              label: "23.8 Global State Management with Services and NgRx",
              translations: {
                fr: "23.8 Gestion globale de l’état avec Services et NgRx",
              },
              slug: "chapter-23-enterprise-architecture-and-best-practices/23-8-global-state-management-with-services-and-ngrx",
            },
            {
              label: "23.9 Container vs. Presentational Components Pattern",
              translations: {
                fr: "23.9 Pattern Container vs Presentational Components",
              },
              slug: "chapter-23-enterprise-architecture-and-best-practices/23-9-container-vs-presentational-components-pattern",
            },
          ],
        },
        {
          label: "24 - Advanced Tools and Ecosystem",
          translations: {
            fr: "24 - Outils avancés et écosystème",
          },
          items: [
            {
              label: "24.1 Advanced Angular CLI (Schematics, Builders)",
              translations: {
                fr: "24.1 Angular CLI avancé (Schematics, Builders)",
              },
              slug: "chapter-24-advanced-tools-and-ecosystem/24-1-advanced-angular-cli-schematics-builders",
            },
            {
              label: "24.2 Creating Custom Schematics",
              translations: {
                fr: "24.2 Création de Schematics personnalisés",
              },
              slug: "chapter-24-advanced-tools-and-ecosystem/24-2-creating-custom-schematics",
            },
            {
              label: "24.3 Creating Angular Libraries (ng generate library)",
              translations: {
                fr: "24.3 Création de bibliothèques Angular (ng generate library)",
              },
              slug: "chapter-24-advanced-tools-and-ecosystem/24-3-creating-angular-libraries-ng-generate-library",
            },
            {
              label: "24.4 Integration with Other Frameworks (React, Vue) via Micro‑Frontends",
              translations: {
                fr: "24.4 Intégration avec d’autres frameworks (React, Vue) via Micro-Frontends",
              },
              slug: "chapter-24-advanced-tools-and-ecosystem/24-4-integration-with-other-frameworks-react-vue-via-microfrontends",
            },
            {
              label: "24.5 PWA with Angular (Service Worker, Manifest)",
              translations: {
                fr: "24.5 PWA avec Angular (Service Worker, Manifest)",
              },
              slug: "chapter-24-advanced-tools-and-ecosystem/24-5-pwa-with-angular-service-worker-manifest",
            },
          ],
        },
      ],
    }),
  ],

  adapter: vercel(),
});
