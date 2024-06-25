import injectPropsIntoConfig from './injectPropsIntoConfig'
import { MarkdownSynapseProps } from 'synapse-react-client'
import { describe, expect, it } from 'vitest'

describe('injectPropsIntoConfig works', () => {
  it('works with markdown and injecting the ownerid', () => {
    const val = 'syn123'
    const markdownProps: MarkdownSynapseProps = {}
    const injectedProps = injectPropsIntoConfig(
      val,
      { name: 'Markdown', props: {} },
      markdownProps,
    )
    expect(injectedProps.ownerId).toEqual(val)
  })
  it('works with markdown and injecting the markdown directly', () => {
    const val = '# some excellent markdown'
    const markdownProps: MarkdownSynapseProps = {}
    const injectedProps = injectPropsIntoConfig(
      val,
      { name: 'Markdown', props: {}, injectMarkdown: true },
      markdownProps,
    )
    expect(injectedProps.markdown).toEqual(val)
  })
})
