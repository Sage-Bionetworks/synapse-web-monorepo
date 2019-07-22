'use strict';

// TODO: these are parsed incorrectly:
//
// ~~~foo~~~
// ~~~foo~ bar~~



var path     = require('path');
var generate = require('markdown-it-testgen');

/*eslint-env mocha*/

describe('markdown-it-synapse', function () {
  var synapseMarkdownIt = require('../');
  var md = require('markdown-it')()
              .use(synapseMarkdownIt);
  synapseMarkdownIt.init_markdown_it(md);
  generate(path.join(__dirname, 'fixtures/synapse.txt'), md);
});
