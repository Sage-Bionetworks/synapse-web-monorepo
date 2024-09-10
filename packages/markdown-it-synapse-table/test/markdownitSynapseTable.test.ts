import path from 'path'
import generate from 'markdown-it-testgen'
import MarkdownIt from 'markdown-it'
import markdownItSynapseTable from '../src/index'

describe('markdown-it-synapse-table', function () {
  const md = new MarkdownIt()
  md.use(markdownItSynapseTable)

  generate(path.join(__dirname, 'fixtures/synapsetable.txt'), md)
})
