# markdown-it-synapse

[![Build Status](https://img.shields.io/travis/jay-hodgson/markdown-it-synapse/master.svg?style=flat)](https://travis-ci.org/jay-hodgson/markdown-it-synapse)
[![NPM version](https://img.shields.io/npm/v/markdown-it-synapse.svg?style=flat)](https://www.npmjs.org/package/markdown-it-synapse)
[![Coverage Status](https://img.shields.io/coveralls/jay-hodgson/markdown-it-synapse/master.svg?style=flat)](https://coveralls.io/r/jay-hodgson/markdown-it-synapse?branch=master)

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
var md = require('markdown-it')().use(require('markdown-it-synapse'))

md.render('${image?fileName=joy%2Epng&align=None}', 'my-unique-div-id') // => '<span id="widget-0my-unique-div-id" class="widgetContainer" widgetparams="image?fileName=joy%2Epng&amp;align=None" />'
```

The widgetparams can be used to determine what kind of html widget should be rendered in the output container.

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitSynapse`.

## License

[MIT](https://github.com/Sage-Bionetworks/synapse-web-monorepo/blob/main/packages/markdown-it-synapse/LICENSE)
