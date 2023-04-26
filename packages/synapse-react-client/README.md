[![Build Status](https://travis-ci.com/Sage-Bionetworks/Synapse-React-Client.svg?branch=main)](https://travis-ci.com/Sage-Bionetworks/Synapse-React-Client)
[![npm version](https://badge.fury.io/js/synapse-react-client.svg)](https://badge.fury.io/js/synapse-react-client)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Synapse React Client

This project helps you integrate your app with the Synapse API backend.

[See the available Components](https://sage-bionetworks.github.io/synapse-web-monorepo/)

[Getting started](https://help.synapse.org/docs/Getting-Started.2055471150.html) with Synapse.

[Synapse.org](https://www.synapse.org/) is a client written for the Synapse platform.

Interested in contributing to this project? See [contributing](./CONTRIBUTING.md).

## Installation

We provide multiple ways to add Synapse React Client to your project

### NPM

Run the following command:<br>
`npm install synapse-react-client`

Or add to your dependencies in package.json:<br>
`"synapse-react-client": "latest"`

If using Typescript then you'll need to create a file called "synapse-react-client.d.ts" file with the following content: <br>

```jsx
 declare module "synapse-react-client"
```

### Installation without npm or yarn

To see an example index.html page with all the necessary imports view [here](./src/demo/SingleFileBuild/index.html)

You can use a cdn containing the javascript and css required for the client here (the client is exposed as SRC to the browser)-

```html
<script
  crossorigin
  src="https://unpkg.com/synapse-react-client@1.10.10/umd/synapse-react-client.production.min.js"
/>
<link
  rel="stylesheet"
  src="https://unpkg.com/synapse-react-client@1.10.10/umd/synapse-react-client.production.min.css"
/>
```

Note there are a number of CDNs required to finish this functionality-

**react**

```html
<script
  crossorigin
  src="https://unpkg.com/react@16/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
></script>
<script src="https://unpkg.com/prop-types@15.6/prop-types.min.js"></script>
```

**react router dom**

```html
<script src="https://unpkg.com/react-router/umd/react-router.min.js"></script>
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
```

**katex**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css"
  integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y"
  crossorigin="anonymous"
/>

<script
  defer
  src="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.js"
  integrity="sha384-K3vbOmF2BtaVai+Qk37uypf7VrgBubhQreNQe9aGsz9lB63dIFiQVlJbr92dw2Lx"
  crossorigin="anonymous"
></script>
```

**react-plotly**

```html
<script crossorigin src="https://cdn.plot.ly/plotly-1.31.2.min.js"></script>
<script
  crossorigin
  src="https://unpkg.com/react-plotly.js@1.1.1/dist/create-plotly-component.js"
></script>
```

**react-measure**

```html
<script src="https://unpkg.com/react-measure@2.2.2/dist/index.umd.js"></script>
```

**react-tooltip**

```html
<script
  crossorigin
  src="https://unpkg.com/react-tooltip@3.9.2/standalone/react-tooltip.min.js"
></script>
```

**markdown**

```html
<script src="https://cdn.jsdelivr.net/npm/markdown-it@8.4.2/dist/markdown-it.min.js"></script>
<script src="https://unpkg.com/markdown-it-synapse@1.1.10/dist/markdown-it-synapse.min.js"></script>
<script src="https://unpkg.com/markdown-it-center-text@1.0.4/dist/markdown-it-center-text.min.js"></script>
<script src="https://unpkg.com/markdown-it-synapse-heading@1.0.1/dist/markdown-it-synapse-heading.min.js"></script>
<script src="https://unpkg.com/markdown-it-synapse-table@1.0.6/dist/markdown-it-synapse-table.min.js"></script>
<script src="https://unpkg.com/markdown-it-strikethrough-alt@1.0.0/dist/markdown-it-strikethrough-alt.min.js"></script>
<script src="https://unpkg.com/markdown-it-emphasis-alt@1.0.8/dist/markdown-it-emphasis-alt.min.js"></script>
<script src="https://unpkg.com/markdown-it-synapse-math@3.0.4/dist/markdown-it-math.min.js"></script>
<script src="https://unpkg.com/markdown-it-sup-alt@1.0.2/dist/markdown-it-sup.min.js"></script>
<script src="https://unpkg.com/markdown-it-sub-alt@1.0.0/dist/markdown-it-sub.min.js"></script>
<script src="https://unpkg.com/markdown-it-inline-comments@1.0.1/dist/markdown-it-inline-comments.min.js"></script>
<script src="https://unpkg.com/markdown-it-br@1.0.0/dist/markdown-it-br.min.js"></script>
```

## Usage

See [`index.ts`](./src/index.tsx) for a comprehensive list of components that can be used.

To function properly, all components must be wrapped in a [SynapseContextProvider](./src/lib/utils/SynapseContext.tsx). To make authenticated requests, you must provide the user's access token as a property to the context provider, among other values. You may maintain this in state, or provide it however you like.

The context provider also maintains a shared cache (via `react-query`). It is recommended to place the provider at the highest possible point in your component tree, and to use the same provider across components if possible.

Example:

```tsx
const myToken = "example-token" // this value may also be undefined, if a user is not signed in
const useUtcTime = true
const inExperimentalMode = false

<SynapseContextProvider synapseContext={{ accessToken: myToken, isInExperimentalMode: inExperimentalMode, utcTime: useUtcTime }} >
  <EntityFinder {...entityFinderProps} />
</SynapseContextProvider>

```

## Setting Endpoints

### Configuring endpoint destinations for repo and portal

Specifying the following in the window object will override request endpoints:

```js
window.SRC.OVERRIDE_ENDPOINT_CONFIG = {
  PORTAL: '<endpoint>',
  REPO: '<endpoint>',
}
```

Note - this will apply to all calls being made.

## Theming

## Style

Synapse React Client uses [Dart Sass](https://sass-lang.com/dart-sass).
The core css lives in [`src/lib/style`](src/lib/style) and `src/lib/template_style`.

- `src/lib/style` contains all scss that doesn't use any external variables.
- `src/lib/template_style` contains any scss files that require external variables.

## Overrides

For a list of variables you can override, see [`src/lib/style/abstracts/_variables.scss`](src/lib/style/abstracts/_variables.scss).

Override the variables by importing the SCSS in your project like so:

```scss
@use 'node_modules/synapse-react-client/dist/style/main.scss' with ($primary-action-color:
      $-my-primary-color, $secondary-action-color: $-my-secondary-color, // ...any other overrides continue);
@use 'node_modules/synapse-react-client/dist/template_style/Index.scss';
```

In this example, make sure that the `node_modules` folder is in your load path.

## Examples

See [Examples](Examples.md)

## Project Contents

###

```
└── ./src
   ├── ./__tests__ Folder of tests that contains the same structure as the lib folder
   ├── ./demo
   │   ├── ./containers      Demo of the Client in use with es6/jsx, imported with npm.
   │   ├── ./SingleFileBuild Demo of the Client with pure javascript, imported as a CDN
   ├── ./lib
   │   ├── ./assets      Contains all the svgs/pngs needed for logos or buttons
   │   ├── ./containers  Contains all the distributed React components
   │   ├── ./style       Contains all the prepackaged css
   │   ├── ./template_style       Contains scss to be imported and overriden
   │   ├── ./utils       Contains all utilities
   │       ├── SynapseClient.js       Contains the collection of helper functions to use the Synapse API
   │       ├── SynapseClient.test.js  Integration tests for SynapseClient helper functions.
   │       ├── HTTPError.js           Error class that will be thrown on failure.
   │   ├── ./mocks  Contains JSON data (soon to be deprecated) for demonstrating views powered with only JSON. In future versions,
                    the folder will only contain data that is to be mocked for __tests__.
   ├── /umd
      ├── synapse-react-client.production.min.js: The umd bundle of the client's javascript.
      ├── synapse-react-client.production.min.css: The umd bundle of the client's styling.
```

### Configuration Files

| File                   | Description                                                                                                                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ./types.d.ts           | In general this would be used as a library with type declarations for other client developers using Typescript. Currently, it contains only definitions for global CDNs used in the project. |
| ./tsconfig.eslint.json | Typescript configuration for IDEs, especially VSCode.                                                                                                                                        |
| ./tsconfig.json        | Typescript configuration for the emitted build                                                                                                                                               |
| ./esbuild.config.mjs   | ESBuild configuration to create the UMD package                                                                                                                                              |

## Project Development

This project's core dependencies are [Typescript](https://www.typescriptlang.org/docs/home.html), and [esbuild](https://esbuild.github.io/).

Motivation for dependencies-

- Typescript is a superset of Javascript that provides static typing. This catches many bugs at compile time and makes the client much more self-documenting.

- esbuild allows the client to be built as a UMD bundle **without** having to eject the application from react's built in webpack configuation. The primary motivation for bundling the package as a UMD build is using the package in synapse.org.

## Release Cycle

The `develop` branch points to the development version of Synapse React Client. Feature branches should be created from and pulled into `develop`.

The `main` branch contains the current release version of Synapse React Client.

To release a new version on NPM, bump the version number in `package.json` in develop, and merge the changes from `develop` to `master`. We have GitHub actions configured to automatically build and publish the new version.

All proposed changes (to be merged into `develop` or `master`) must be via a Pull Request with a code review

### Hotfixes

If an issue in master is detected a hotfix branch is created from master
Once the hotfix is complete it is merged to both develop and master

## Adding a new component and Publishing a new version of SRC

To expose a component from the library you must export it from [index.ts](src/lib/index.ts).

To expose a component for use in synapse.org, you must export it from [umd.index.ts](src/lib/umd.index.ts). See [Project Development](#project-development) for more information on the UMD build and synapse.org.

To release the react-client, bump the [package version](https://next.yarnpkg.com/cli/version), merge into main,
and run `pnpm publish`. Note - you must have access to the synapse-react-client [npm package](https://www.npmjs.com/package/synapse-react-client) to be able to run the command. Publising the package will also release a new version of the UMD build, it can be pulled down using unpkg.com, the URL is available [here](https://unpkg.com/browse/synapse-react-client@latest/dist/umd/synapse-react-client.production.min.js)

## Available Scripts

Before doing anything else run:

### `pnpm install`

In the project directory, you can run:

### `pnpm start`

Runs the Synapse React Client Styleguidist browser. In your browser, navigate to [http://127.0.0.1:6060](http://127.0.0.1:6060) to view it.

It will automatically open localhost, but you need to use 127.0.0.1 for CORS preflight OPTIONS request to work properly.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive watch mode.

### `pnpm test:coverage`

Launches the test runner in the non-interactive mode to run all tests and calculate test coverage.<br>

The client has its configuration file for tests in `src/setupTests.js`.

- Any predefined functionality must be defined there and CDN dependencies must be imported as npm modules.

Links to Resources on Testing:

- Jest: https://jestjs.io/
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro

### `pnpm deploy`

Build and deploy our style guide documentation to "upstream"<br>
Available at https://sage-bionetworks.github.io/Synapse-React-Client/

### `pnpm start-docs`

Starts a style guide dev server, available at http://localhost:6060/

### Common issues with failed tests -

#### React state isn't being updated.

Wrap your code that updates the component inside [https://testing-library.com/docs/preact-testing-library/api#act](act)

#### Debugging the tests

There are open issues in the microsoft vscode repository that block the ability to run debug mode on our tests.

1. Update launch.json with the json snippet below.
2. The command will fail because of the way vscode treats quotations inside launch.json, re-run the failed command by replacing the text `node_modules/(?!(lodash-es|jest\*)/)` with `"node_modules\/(?!(lodash-es|jest\*)/\)"` and append the command `set -H+` to the front e.g.
   `set -H+ && command with modified text "node_modules\/(?!(lodash-es|jest\*)/\)"`

```json
{
  "name": "Debug CRA Tests",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
  "args": [
    "test",
    "--runInBand",
    "--no-cache",
    "--env=jsdom",
    "--transformIgnorePatterns",
    // https://github.com/microsoft/vscode/issues/81944
    "node_modules/(?!(lodash-es|jest*)/)",
    "--setupFilesAfterEnv",
    "./src/setupTests.js",
    "--resetMocks=false"
  ],
  "cwd": "${workspaceRoot}",
  "protocol": "inspector",
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen"
}
```

### `pnpm build`

Builds the app for production to the `build` folder.<br>

### `pnpm build:esbuild`

This project can be built as a umd bundle. It produces three files

- `synapse-react-client.production.min.js`
- `synapse-react-client.development.js`
- `synapse-react-client.production.min.styles.css`.
  Note - this script is run automatically as part of the build command.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

- [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
- [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
- [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
- [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (stage 2 proposal).
- [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend to use experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

- [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
- [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
- [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

## Syntax Highlighting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the [relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most popular editors are covered.

## Displaying Lint Output in the Editor

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first.

> **A note for Atom `linter-eslint` users**

> If you are using the Atom `linter-eslint` plugin, make sure that **Use global ESLint installation** option is checked:

> <img src="http://i.imgur.com/yVNNHJM.png" width="300">

VS Code ESLint plugin automatically detects the ESLint configuration file.

## Debugging in the Editor

**This feature is currently only supported by [Visual Studio Code](https://code.visualstudio.com) editor.**

Visual Studio Code supports live-editing and debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.

You would need to have the latest version of [VS Code](https://code.visualstudio.com) and VS Code [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) installed.

Then add the block below to your `launch.json` file and put it inside the `.vscode` folder in your app’s root directory.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "userDataDir": "${workspaceRoot}/.vscode/chrome",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

Start your app by running `npm start`, and start debugging in VS Code by pressing `F5` or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code—all from your editor.

# jsconfig.json

For improved vscode intellisense support you can optionally add a jsconfig.json to the root (it should lie at the level of `dist/ node_modules/ public/`) of the project directory. It tells vscode more about the projects settings such as where to look for relative imports (specified with the baseUrl) and the js version being used. View the full docs [here](https://code.visualstudio.com/docs/languages/jsconfig).

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "jsx": "react",
    "module": "es6"
  }
}
```
