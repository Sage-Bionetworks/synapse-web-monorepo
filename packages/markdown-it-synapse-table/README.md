# markdown-it-synapse-table

[![Build Status](https://img.shields.io/travis/jay-hodgson/markdown-it-synapse-table/master.svg?style=flat)](https://travis-ci.org/jay-hodgson/markdown-it-synapse-table)
[![NPM version](https://img.shields.io/npm/v/markdown-it-synapse-table.svg?style=flat)](https://www.npmjs.org/package/markdown-it-synapse-table)
[![Coverage Status](https://img.shields.io/coveralls/jay-hodgson/markdown-it-synapse-table/master.svg?style=flat)](https://coveralls.io/r/jay-hodgson/markdown-it-synapse-table?branch=master)

> Synapse markdown table plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser that supports Synapse md table syntax. Table headers are optional, and it supports a syntax to specify table css class names.

**v1.+ requires `markdown-it` v5.+, see changelog.**

```
Header 1 | Header 2 | Header 3
--- | --- | ---
Row 1 Content Cell 1  |  Row 1 Content Cell 2  |  Row 1 Content Cell 3
Row 2 Content Cell 1  |  Row 2 Content Cell 2  |  Row 2 Content Cell 3
```

=>

```
<table>
	<thead>
		<tr>
			<th>Header 1</th>
			<th>Header 2</th>
			<th>Header 3</th>
		</tr>
	</thead>
<tbody>
	<tr>
		<td>Row 1 Content Cell 1</td>
		<td>Row 1 Content Cell 2</td>
		<td>Row 1 Content Cell 3</td>
	</tr>
	<tr>
		<td>Row 2 Content Cell 1</td>
		<td>Row 2 Content Cell 2</td>
		<td>Row 2 Content Cell 3</td>
	</tr>
</tbody>
</table>
```

---

```
{| class="border text-align-center"
Row 1 Content Cell 1 | Row 1 Content Cell 2  | Row 1 Content Cell 3
Row 2 Content Cell 1 | Row 2 Content Cell 2  | Row 2 Content Cell 3
|}
```

=>

```
<table class=" border text-align-center">
	<tbody>
		<tr>
			<td>Row 1 Content Cell 1</td>
			<td>Row 1 Content Cell 2</td>
			<td>Row 1 Content Cell 3</td>
			</tr>
		<tr>
			<td>Row 2 Content Cell 1</td>
			<td>Row 2 Content Cell 2</td>
			<td>Row 2 Content Cell 3</td>
		</tr>
	</tbody>
</table>
```

## Install

node.js, browser:

```bash
npm install markdown-it-synapse-table --save
bower install markdown-it-synapse-table --save
```

## Use

```js
var md = require('markdown-it')().use(require('markdown-it-synapse-table'))

md.render('table markdown')
```

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitSynapseTable`.

## License

[MIT](https://github.com/jay-hodgson/markdown-it-synapse-table/blob/master/LICENSE)
