"use strict";

// TODO: these are parsed incorrectly:
//
// ~~~foo~~~
// ~~~foo~ bar~~

var path = require("path");
var generate = require("markdown-it-testgen");
var synapseMarkdownIt = require("../dist/");
var md = require("markdown-it")().use(synapseMarkdownIt);
synapseMarkdownIt.init_markdown_it(md);

describe("markdown-it-synapse", function () {
  // eslint-disable-next-line mocha/no-setup-in-describe
  generate(path.join(__dirname, "fixtures/synapse.txt"), md);
});
