import { MarkdownSynapseProps } from 'synapse-react-client'

export function transformStringIntoMarkdownProps(
  value: string,
  isRawMarkdown?: boolean,
) {
  const newProps: MarkdownSynapseProps = {}
  if (isRawMarkdown) {
    newProps.markdown = value
  } else {
    if (value.includes('/wiki/')) {
      // value looks like syn20681023/wiki/594680
      const split = value.split('/')
      const ownerId = split[0]
      const wikiId = split[2]
      newProps.ownerId = ownerId
      newProps.wikiId = wikiId
    } else if (value) {
      // else assume it's an ownerId
      newProps.ownerId = value
    }
  }
  return newProps
}
