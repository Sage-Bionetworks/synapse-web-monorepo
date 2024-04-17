# markdown-it-synapse

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Sage-Bionetworks/synapse-web-monorepo/build-test.yml?branch=main)
[![NPM version](https://img.shields.io/npm/v/markdown-it-synapse.svg?style=flat)](https://www.npmjs.org/package/markdown-it-synapse)

> Synapse tag plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

**v1.+ requires `markdown-it` v4.+, see changelog.**

`${image?fileName=joy%2Epng&align=None}` => `<span id="widget-0my-unique-div-id" class="widgetContainer" widgetparams="image?fileName=joy%2Epng&amp;align=None" />`

## Install

node.js, browser:

```bash
npm install markdown-it-synapse --save
bower install markdown-it-synapse --save
```

## Use

```js
import markdownit from 'markdown-it'
import markdownitSynapse from 'markdown-it-synapse'

const md = new markdownit()
md.use(markdownitSynapse)

md.render('${image?fileName=joy%2Epng&align=None}', 'my-unique-div-id') // => '<span id="widget-0my-unique-div-id" class="widgetContainer" widgetparams="image?fileName=joy%2Epng&amp;align=None" />'
```

The widgetparams can be used to determine what kind of html widget should be rendered in the output container.

_Differences in browser._ If you load script directly into the page using the IIFE bundle, without
package system, module will add itself globally as `window.markdownitSynapse`.

## License

[MIT](https://github.com/Sage-Bionetworks/synapse-web-monorepo/blob/main/packages/markdown-it-synapse/LICENSE)
