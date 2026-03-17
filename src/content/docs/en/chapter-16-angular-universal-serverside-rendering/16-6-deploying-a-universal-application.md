---
title: Deploying a Universal Application
sidebar:
  order: 6
  label: 16.6 Deploying a Universal Application
---

A Universal app runs a Node.js server that renders Angular pages.

Build the application

```shell
ng build
ng run project-name:server
```

Start the server

```shell
node dist/project-name/server/main.js
```

**Explanation**

Common deployment platforms:

- Node.js servers
- Docker containers
- Cloud providers (AWS, Vercel, Firebase Hosting)

> SSR servers render HTML before sending it to the client.
