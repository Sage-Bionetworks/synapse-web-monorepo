# Contributing to Synapse-React-Client

## Code Contributions

### Setup

You may use any IDE you like. If you use [Visual Studio Code](https://code.visualstudio.com/), you can load the [workspace file](../../synapse-web-monorepo.code-workspace), which preconfigures and recommends some extensions, such as:

- The [eslint](https://github.com/Microsoft/vscode-eslint) extension, which is a js linter and rough style guide.
- The [prettier](https://github.com/prettier/prettier) extension, which is a more opinionated js linter. You will need to ensure you have vscode configured to format on saving by modifying ,.vscode/setting.json to include the line `"editor.formatOnSave": true`. See [here](https://code.visualstudio.com/updates/v1_6#_format-on-save) for more details.

### Git Workflow

1. Fork this repository
2. Create your feature branch, if applicable name it after the specific JIRA issue being fixed.
3. Create a pull request against `main` from your forked branch.
4. To keep commits organized consider `squashing` closely related commits (optional). When it makes sense format your commit in the following way: `(<JIRA>): <subject><BLANK LINE><body or link to the JIRA if applicable (optional)>`.
5. Ensure someone else reviews the pull request. Once approved, the PR can be merged.

### Development Guide

#### Prefer react hooks to class components

Hooks have a number of advantages, they can be read about in depth [here](https://reactjs.org/docs/hooks-faq.html). Additionally, any stateful piece of code that can be reused should be made an effect hook. These should be created in this folder `src/utils/hooks`.

#### Bundled distribution

We create an ESM/CJS bundle using [Vite's library mode](https://vitejs.dev/guide/build#library-mode). Note - not all components are exported as part of the UMD bundle - only those in [SWC.index.ts](src/SWC/index.ts).

#### Submitting a new component

1. Create a component in `src/components`, if it's a complex component consider creating a folder with the subcomponents
   that comprise it.
2. To work on a component, create a corresponding Story file so it can be seen in Storybook.
3. To export that component through ESM/CJS bundles, it should be imported/exported in `src/index.ts`

#### CSS

Styles are broken down across multiple Sass partials.

```
    abstracts
    |
    |-_functions
    |
    |-_mixins
    |
    |-_variables
    |
    base
    |
    |-_base  -- mainly element selectors and their pseudo-classes
    |
    |-_core  -- legacy styles and will be refactored and removed *DO NOT ADD TO IT*
    |
    |-_fonts -- @font-face declarations
    |
    |-_helpers -- helper classes that apply consistent styles to any element [1]
    |
    components -- each component's stylesheet is a file in components directory
    |
    |-_all -- component stylesheets will be imported into _all
    |
    |-_some-component -- components use a BEM methdology [2].
```

[1]: For example, we can create a responsive, top margin helper class in _helpers.scss:

<pre>
    .h-margin-top {
        margin-top: 16px;
        @media (min-width: 720px) {   
            margin-top: 24px;
        } 
    }
</pre>

[2]: For component styles we use [BEM naming methodology](http://getbem.com/naming/) with one  
exception: **Top level blocks are PascalCase.**

##### Summary

- Components are blocks: match the top-level tag’s class name with the name of your component (e.g. UserProfile.jsx, className="UserProfile")
- Element names refer to the component: every class name within a component should start with the name of the component and two underscores (e.g. className="UserProfile\_\_icon")
- Modifiers are added to blocks, elements: add conditional styles by appending a modifier class that refers to the element being modified (e.g. className="UserProfile--disabled", className="UserProfile\_\_icon--round)

([courtesy of this article](https://medium.com/@seanmcp/how-and-when-to-use-bem-in-react-edabad2b805a))
