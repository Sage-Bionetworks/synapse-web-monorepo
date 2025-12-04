import path from 'path'
import generate from 'markdown-it-testgen'
import markdownItSynapse, { init_markdown_it } from '../src'
import MarkdownIt from 'markdown-it'

// TODO: these are parsed incorrectly:
//
// ~~~foo~~~
// ~~~foo~ bar~~

const md = new MarkdownIt()
md.use(markdownItSynapse)
init_markdown_it(md)

describe('markdown-it-synapse', () => {
  generate(path.join(__dirname, 'fixtures/synapse.txt'), md)
})
