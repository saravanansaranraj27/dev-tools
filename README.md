# Dev Tools

> A comprehensive developer utility toolkit built with Angular, featuring essential tools for daily development workflows.

[![Angular](https://img.shields.io/badge/Angular-19-dd0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](#license)

### 🌐 [Live Demo](https://saravanansaranraj27.github.io/dev-tools)

Dev Tools is a modern Angular application designed to streamline common development tasks. Built with the latest Angular 19 standalone components and SCSS styling, this toolkit provides developers with essential utilities in a clean, responsive interface. The application is optimized for deployment on GitHub Pages and runs entirely client-side without requiring a backend.

## Contents

- [Features](#features)
- [Quick start](#quick-start)
- [Using the app](#using-the-app)
- [Project structure](#project-structure)
- [Technology](#technology)
- [Development commands](#development-commands)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

| Area                | Capabilities                                                   |
| ------------------- | -------------------------------------------------------------- |
| Developer Utilities | Collection of essential tools for daily development workflows  |
| Modern Architecture | Built with Angular 19 standalone components and SCSS styling   |
| Responsive Design   | Clean, mobile-friendly interface that works across all devices |
| Client-Side Only    | No backend required; runs entirely in the browser              |
| GitHub Pages Ready  | Optimized for easy deployment to GitHub Pages                  |

## Quick start

### Requirements

- Node.js 18 or newer
- npm or yarn
- Angular CLI

### Create project

```sh
ng new dev-tools --style=scss --standalone --ssr=false --skip-tests
```

### Clone and install (if using this repository)

```sh
git clone https://github.com/saravanansaranraj27/dev-tools.git
cd dev-tools
npm install
```

### Run locally

```sh
cd dev-tools
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

To check your Angular version:

```sh
ng version
```

## Using the app

1. Navigate to the home page to access available developer tools
2. Select the tool you need from the navigation menu
3. Use the intuitive interface to perform your development tasks
4. All operations are performed client-side with no data persistence

## Project structure

```text
dev-tools/
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── data/
│   │   │   └── cheat-sheet.data.ts        # Cheat sheet reference content
│   │   ├── features/
│   │   │   ├── base64/                    # Base64 encode/decode tool
│   │   │   ├── cheat-sheet/                # Cheat sheet browser and search
│   │   │   ├── formatter/                  # JSON prettify/minify/validate tool
│   │   │   └── home/                       # Landing page
│   │   ├── shared/
│   │   │   ├── navbar/                     # Shared navigation bar component
│   │   │   ├── pipes/                      # Shared Angular pipes
│   │   │   └── theme.service.ts            # Light/dark theme persistence
│   │   ├── app.component.ts                # Root application component
│   │   ├── app.config.ts                   # App-wide providers configuration
│   │   └── app.routes.ts                   # Route definitions
│   ├── environments/                       # Environment-specific configurations
│   ├── index.html
│   ├── main.ts
│   └── styles.scss                         # Global SCSS styling and theming
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Technology

- [Angular 19](https://angular.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- Standalone Components
- Angular CLI

## Development commands

```sh
ng serve          # Start the development server
ng build          # Create a production build
ng test           # Run unit tests (if enabled)
ng lint           # Run ESLint/TSLint
```

## Deployment

### Deploy to GitHub Pages

First, add Angular CLI GitHub Pages support:

```sh
ng add angular-cli-ghpages
```

Then deploy your application:

```sh
ng deploy --base-href=/dev-tools/
```

This will build your application and deploy it to GitHub Pages with the correct base href for proper routing.

### Manual deployment

To create a production build for manual deployment:

```sh
ng build --configuration production
```

The built files will be located in the `dist/` directory and can be deployed to any static hosting service.

## Contributing

Bug reports, improvements, and pull requests are welcome. Please keep changes focused and verify them with the available build and lint commands.

## License

This project is licensed under the MIT License.
