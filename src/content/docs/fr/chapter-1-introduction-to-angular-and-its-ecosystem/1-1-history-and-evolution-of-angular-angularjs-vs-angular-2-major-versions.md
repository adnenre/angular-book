---
title: Histoire et évolution d'Angular (AngularJS vs Angular 2+, versions majeures)
sidebar:
  order: 1
  label: 1.1 Histoire et évolution d'Angular (AngularJS vs Angular 2+, versions majeures)
---

## Introduction

Angular est un framework permettant de développer des **applications web monopage (SPA)** avec **HTML, CSS et TypeScript**.

Depuis sa première version en 2010, Angular a connu plusieurs évolutions majeures.

On peut distinguer trois grandes phases :

1. AngularJS
2. Angular moderne
3. Angular réactif avec Signals

# AngularJS (1.x)

AngularJS est la première génération du framework.

## Fonctionnalités principales

- Architecture MVC
- Liaison bidirectionnelle des données
- Injection de dépendances
- Directives HTML
- Controllers et Scopes
- Utilisation de JavaScript

Exemple :

```ts
var app = angular.module("app", []);

app.controller("MainController", function ($scope) {
  $scope.message = "Bonjour AngularJS";
});
```

# Angular 2

Angular 2 est une **réécriture complète** du framework.

## Nouveautés principales

- Architecture basée sur les composants
- Adoption de TypeScript
- Utilisation de RxJS
- Lazy Loading
- Injection de dépendances avancée

# Angular 4 à 13

Principales améliorations :

- amélioration des performances
- compilation plus rapide
- moteur Ivy
- optimisations du build
- amélioration du CLI

# Angular 14

Innovation majeure :

Standalone Components

```ts
@Component({
  selector: "app-user",
  standalone: true,
  template: `<p>Composant utilisateur</p>`,
})
export class UserComponent {}
```

# Angular 16

Introduction des **Signals**, un nouveau modèle réactif.

Avantages :

- performance améliorée
- réactivité simplifiée
- meilleure gestion du state

# Angular 17

Nouveau système de contrôle dans les templates :

- `@if`
- `@for`
- `@switch`

Introduction des **Deferrable Views**.

# Angular 18 à 20

Améliorations :

- SSR
- Hydration
- architecture sans Zone.js
- performances

# Angular 21

Principales évolutions :

- support Vitest
- intégration IA
- Angular sans Zone.js
- améliorations de performance

Versions mineures :

| Version | Date                  |
| ------- | --------------------- |
| v21.1   | Semaine du 12-01-2026 |
| v21.2   | Semaine du 23-02-2026 |

# Angular 22

Prochaine version majeure.

Date prévue :

| Version | Date                  |
| ------- | --------------------- |
| v22.0   | Semaine du 18-05-2026 |

Objectifs :

- amélioration de l’écosystème Signals
- performances accrues
- amélioration SSR et Hydration
- architecture standalone par défaut

# Conclusion

Angular est aujourd’hui un framework **très robuste** pour les applications web complexes.

Son évolution a permis :

- une meilleure performance
- une architecture scalable
- une expérience développeur moderne
