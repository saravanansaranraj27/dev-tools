# Dev Tools

> A privacy-first developer utility toolkit built with Angular, featuring essential tools for daily development workflows.

[![Angular](https://img.shields.io/badge/Angular-20.1-dd0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](#license)

### 🌐 [Live Demo](https://saravanansaranraj27.github.io/dev-tools)

Dev Tools is a modern Angular application designed to streamline common development tasks. Built with Angular standalone components and SCSS styling, this toolkit provides developers with practical utilities in a clean, responsive interface. It runs entirely client-side, with no backend required, and is optimized for deployment on GitHub Pages.

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

| Area                | Capabilities                                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| JSON Formatter      | Prettify, minify, and validate JSON with configurable indentation and validation feedback                       |
| Base64 Tool         | Encode and decode Base64 with UTF-8 and emoji support, plus automatic content-type detection                    |
| Cheat Sheets        | Quick-reference guides for Java, Spring Boot, Python, FastAPI, Git, CSS, JavaScript, TypeScript, Regex, and SQL |
| Search              | Search cheat-sheet commands by command name, syntax, or description with `Ctrl + K` / `⌘ + K` shortcut support  |
| Clipboard           | Copy formatted output, Base64 results, and cheat-sheet commands directly to the clipboard                       |
| Modern Architecture | Built with Angular standalone components, signals, computed state, and lazy-loaded routes                       |
| Responsive Design   | Clean, mobile-friendly interface with responsive layouts across the application                                 |
| Dark / Light Mode   | Theme switching with persistent user preference                                                                 |
| Privacy First       | Developer utilities run entirely in the browser without sending tool data to a backend                          |
| Loading Experience  | Route-aware skeleton loading screens and smooth page transitions                                                |
| Navigation          | Shared navigation bar with active route states, responsive menu behavior, and theme controls                    |
| GitHub Pages Ready  | Configured for deployment to GitHub Pages                                                                       |

The application currently provides four main routes: Home, Cheat Sheets, JSON Formatter, and Base64 Tool. These routes are configured as lazy-loaded standalone components.

## Quick start

### Requirements

- Node.js 18 or newer
- npm
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

The project dependencies currently use Angular 20.1.x, TypeScript 5.8.x, RxJS 7.8.x, and the Angular CLI/build tooling.

### Run locally

```sh
cd dev-tools
npm start
```

Or use Angular CLI directly:

```sh
ng serve
```

Open http://localhost:4200 in your browser.

To check your Angular version:

```sh
ng version
```

## Using the app

1. Navigate to the home page to access the available developer tools.
2. Select the tool you need from the navigation menu.
3. Use the **Cheat Sheets** section to browse development references for multiple programming languages and technologies.
4. Use the search field to find cheat-sheet commands by name, syntax, or description.
5. Use `Ctrl + K` on Windows/Linux or `⌘ + K` on macOS to focus the cheat-sheet search field.
6. Use the **JSON Formatter** to prettify, minify, or validate JSON.
7. Use the **Base64 Tool** to encode or decode Base64 data.
8. Copy generated output or cheat-sheet commands directly using the available copy buttons.
9. Switch between light and dark themes using the theme control.
10. All tool operations are performed client-side in the browser.

The JSON formatter supports **Prettify**, **Minify**, and **Validate** modes.

The Base64 utility supports **Encode** and **Decode** modes and detects content such as ASCII text, JSON, HTML/XML, URL queries, Unicode, emoji, and binary/data.

The cheat sheet currently includes topics covering Java, Spring Boot, Python, FastAPI, Git, CSS, JavaScript, TypeScript, Regex, and SQL.

## Project structure

```text
dev-tools/
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── data/
│   │   │   └── cheat-sheet.data.ts
│   │   │
│   │   ├── features/
│   │   │   ├── base64/
│   │   │   │   ├── base64-page.component.html
│   │   │   │   ├── base64-page.component.scss
│   │   │   │   └── base64-page.component.ts
│   │   │   │
│   │   │   ├── cheat-sheet/
│   │   │   │   ├── category-card.component.ts
│   │   │   │   ├── cheat-sheet-page.component.html
│   │   │   │   ├── cheat-sheet-page.component.scss
│   │   │   │   ├── cheat-sheet-page.component.ts
│   │   │   │   ├── copy-button.component.ts
│   │   │   │   └── search-bar.component.ts
│   │   │   │
│   │   │   ├── formatter/
│   │   │   │   ├── code-editor.component.ts
│   │   │   │   ├── format-controls.component.ts
│   │   │   │   ├── formatter-page.component.html
│   │   │   │   ├── formatter-page.component.scss
│   │   │   │   ├── formatter-page.component.ts
│   │   │   │   └── validation-status.component.ts
│   │   │   │
│   │   │   └── home/
│   │   │       ├── home-page.component.html
│   │   │       ├── home-page.component.scss
│   │   │       └── home-page.component.ts
│   │   │
│   │   ├── shared/
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.scss
│   │   │   │   └── navbar.component.ts
│   │   │   ├── pipes/
│   │   │   │   └── capitalize.pipe.ts
│   │   │   └── theme.service.ts
│   │   │
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
│
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

The application uses `src` as its source root, SCSS for component styling, and Angular's application builder.

## Technology

- [Angular 20](https://angular.dev/)
- [TypeScript 5.8](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- Angular Standalone Components
- Angular Signals
- Angular Router
- RxJS
- Angular CLI
- Karma / Jasmine for testing
- `angular-cli-ghpages` for GitHub Pages deployment

The project is configured with strict TypeScript and Angular compiler options, including strict templates and strict injection parameters.

## Development commands

```sh
npm start         # Start the development server
npm run build     # Create a production build
npm run watch     # Build continuously using the development configuration
npm test          # Run unit tests
```

Angular CLI commands can also be used directly:

```sh
ng serve
ng build
ng test
```

The available npm scripts are defined in `package.json`.

## Deployment

### Deploy to GitHub Pages

The project includes `angular-cli-ghpages` as a development dependency and has an Angular deployment target configured for GitHub Pages.

If the GitHub Pages package has not already been added, install it with:

```sh
ng add angular-cli-ghpages
```

Then deploy your application:

```sh
ng deploy --base-href=/dev-tools/
```

The `/dev-tools/` base href matches the repository's GitHub Pages path.

### Manual deployment

To create a production build for manual deployment:

```sh
ng build --configuration production
```

The generated production files will be placed in the Angular build output directory and can be deployed to a static hosting service.

## Contributing

Bug reports, improvements, and pull requests are welcome. Please keep changes focused and verify them with the available build and test commands before submitting a contribution.

## License

This project is licensed under the MIT License.
