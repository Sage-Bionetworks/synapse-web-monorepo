import path from 'path'
import generate from 'markdown-it-testgen'
import markdownItSynapse, { init_markdown_it, preprocessMarkdown } from '../src'
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

describe('input that used to cause catastrophic regex backtracking', () => {
  // A regression blocks for several seconds or more, so a generous budget still catches it
  const TIME_BUDGET_MS = 1000

  function elapsedMs(run: () => void) {
    const start = performance.now()
    run()
    return performance.now() - start
  }

  it('renders a link destination with a long run of spaces quickly', () => {
    // The trailing line separator makes the URL check fail only after the spaces
    const destination = `a.bc${' '.repeat(30)}\u2028`
    expect(elapsedMs(() => md.render(`[link](<${destination}>)`))).toBeLessThan(
      TIME_BUDGET_MS,
    )
  })

  it('preprocesses a long code fence info string quickly', () => {
    const line = '```' + 's'.repeat(4000) + '!'
    expect(elapsedMs(() => preprocessMarkdown(line))).toBeLessThan(
      TIME_BUDGET_MS,
    )
  })
})
