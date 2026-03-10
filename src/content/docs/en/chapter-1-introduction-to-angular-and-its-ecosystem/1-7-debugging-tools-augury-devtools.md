---
title: Debugging Tools (Augury, DevTools)
sidebar:
  order: 7
  label: 1.7 Debugging Tools (Augury, DevTools)
---

# 1.7 Debugging Tools (Augury, DevTools)

Angular provides several tools to debug and profile applications:

- **Augury** – a Chrome DevTools extension for visualising component trees, state, and dependency injection. It helps inspect component hierarchies and their properties.

- **Angular DevTools** – the official debugging and profiling tool integrated into Chrome and Firefox DevTools. Features:
  - Component tree explorer
  - Profiler to record change detection cycles
  - Router tree view
  - Injector hierarchy inspection

To use Angular DevTools, install the extension from the Chrome Web Store (or Firefox Add‑ons). Once installed, open your Angular app in the browser, open DevTools (F12), and find the "Angular" tab.

> Additionally, you can use standard browser DevTools for network, console, and performance analysis. Angular also logs useful information in development mode (e.g., change detection warnings).
