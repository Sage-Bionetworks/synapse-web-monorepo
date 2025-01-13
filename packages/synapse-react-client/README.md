[![npm version](https://badge.fury.io/js/synapse-react-client.svg)](https://badge.fury.io/js/synapse-react-client)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Synapse React Client

This project helps you integrate your app with the Synapse API backend.

[See the available Components](https://sage-bionetworks.github.io/synapse-web-monorepo/)

[Getting started](https://help.synapse.org/docs/Getting-Started.2055471150.html) with Synapse.

[Synapse.org](https://www.synapse.org/) is a client written for the Synapse platform.

Interested in contributing to this project? See [contributing](./CONTRIBUTING.md).

## Installation

Run the following command:

`npm install synapse-react-client`

## Usage

See [`index.ts`](./src/index.tsx) for a comprehensive list of components that can be used.

To function properly, all components must be wrapped in a [SynapseContextProvider](src/utils/context/SynapseContext.tsx). To make authenticated requests, you must provide the user's access token as a property to the context provider, among other values. You may maintain this in state, or provide it however you like.

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

We are primarily using [MUI](https://mui.com/material-ui/customization/theming/) for styling and per-app theming. We provide a default theme in [DefaultTheme.ts](./src/theme/DefaultTheme.ts) which can be overridden with your own theme properties.

## SCSS

Synapse React Client also uses [Dart Sass](https://sass-lang.com/dart-sass).
The core css lives in [`src/style`](src/style) and `src/template_style`.

For a list of variables you can override, see [`src/style/abstracts/_variables.scss`](src/style/abstracts/_variables.scss).

Override the variables by importing the SCSS in your project like so:

```scss
@use 'synapse-react-client/dist/style/main.scss' with ($primary-action-color:
      $-my-primary-color, $secondary-action-color: $-my-secondary-color, // ...any other overrides continue);
@use 'synapse-react-client/dist/template_style/Index.scss';
```

In this example, make sure that your `node_modules` folder is in your Dart Sass load path.

## Project Contents

###

```
├── ./src
│   ├── ./assets    Assets such as svgs/pngs needed for logos or buttons
│   ├── ./components  Contains all React components
│   ├── ./style   Contains scss stylesheets
│   ├── ./synapse-client   Functions used to call the Synapse REST API
│   ├── ./synapse-queries   react-query hooks used to interact with the Synapse REST API
│   ├── ./template-style   Contains scss stylesheets
│   ├── ./theme   Utilities and exports for MUI theming
│   └── ./utils   Contains utilities
├── ./mocks Mock data used for testing and stories
├── ./test Tests for all components and utilities
└── ./stories Storybook stories for components
```

## Adding a new component and Publishing a new version of SRC

To expose a component from the library you must export it from [index.ts](src/index.ts). Ideally, your component will get its own subfolder within `src/components/`, which will contain an `index.ts` file that exports the public API of the component (typically the component and its props type). In `src/components/index.ts`, you can then export the contents of the new subfolder.

To expose a component for use in synapse.org, you must export it from [umd.index.ts](src/umd.index.ts). Note that certain dependencies are not included in the UMD bundle. See the config used to build the bundle, `vite.config.umd.ts`, for more details.

## Available Scripts

Before doing anything else run:

### `pnpm install`

In the project directory, you can run:

### `pnpm start`

Runs Storybook, which allows you to inspect and interact with components.

### `pnpm test`

Launches the test runner in the interactive watch mode.

Links to Resources on Testing:

- Jest: https://jestjs.io/
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro

### `pnpm build`

Bundles the library for production to the `dist` folder.

### `pnpm build:js`

Bundles the library for production to the `dist` folder using [Vite's library mode](https://vitejs.dev/guide/build#library-mode). This command creates CJS and ESM bundles with all dependencies removed, and also outputs a single TypeScript declaration file.

> Note - this script is run automatically as part of the build command.

### `pnpm build:umd`

This project can be built as a umd bundle. It produces four files

- `synapse-react-client.production.min.cjs`
- `synapse-react-client.production.min.css`.
- `synapse-react-client.development.cjs`
- `synapse-react-client.development.css`.

> Note - this script is run automatically as part of the build command.

## Testing Synapse React Client (SRC) in Synapse Web Client (SWC)

This guide explains how to test changes made in the Synapse React Client (SRC) on the Synapse Web Client (SWC) using **Chrome DevTools**.

1. Make Your Changes in SRC

Edit the code in the `synapse-react-client` package as needed.

2. Build the UMD Files

Run the following command to build the UMD files for SRC:

```bash
pnpm build:umd
```

3. Go to https://www.synapse.org in Chrome and open the **Developer Tools**.

4. Locate the synapse-react-client.production.min.js file in the Network tab and right click on the file and select **Override Content**.

5. Go to the **Sources** tab in Developer Tools and go to the **Overrides** section. Make sure **Enabled Local Overrides** is checked.

6. Right-click cdn-www.synapse.org/generated or synapse-react-client.production.min.js and select **Open Folder** or **Open Containing Folder** respectively

7. In your file explore, navigate to packages/synapse-react-client/dist/umd/ and find the updated synapse-react-client.production.min.js file. Drag and drop this file to the generated folder to replace the old synapse-react-client.production.min.js file.

8. Refresh https://www.synapse.org and the site should now be using your override file.

9. Repeat steps above for any SRC changes you want to see in https://www.synapse.org.
