'use strict'

var path = require('path')
var generate = require('markdown-it-testgen')

/*eslint-env mocha*/

describe('markdown-it-synapse-table', function () {
  var md = require('markdown-it')().use(require('../'))

  generate(path.join(__dirname, 'fixtures/synapsetable.txt'), md)
})
