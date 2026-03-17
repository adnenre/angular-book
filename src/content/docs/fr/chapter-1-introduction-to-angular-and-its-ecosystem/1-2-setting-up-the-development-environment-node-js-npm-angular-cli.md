---
title: Configuration de l'environnement de développement (Node.js, npm, Angular CLI)
sidebar:
  order: 2
  label: 1.2 Configuration de l'environnement de développement (Node.js, npm, Angular CLI)
---

Pour développer des applications Angular, vous avez besoin de **Node.js** (qui inclut **npm**) et de l'**Angular CLI**.

1. **Installer Node.js et npm**

   Téléchargez depuis [nodejs.org](https://nodejs.org) (version LTS recommandée). Vérifiez l'installation :

```bash
node --version
npm --version
```

2. **Installer Angular CLI globalement**

```shell
npm install -g @angular/cli
```

Après installation, vérifiez :

```shell
ng version
```

> Sur certains systèmes, vous devrez peut-être utiliser sudo sous Linux/macOS ou exécuter la commande dans un terminal avec les droits d'administrateur sous Windows.
