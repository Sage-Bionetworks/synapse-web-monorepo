import { MarkdownSynapseProps } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { useDetailsPageContext } from '../DetailsPageContext'
import { transformStringIntoMarkdownProps } from 'synapse-react-client/components/Markdown/MarkdownUtils'

export function useColumnDataMarkdownProps(
  columnName: string,
  isRawMarkdown: boolean,
): MarkdownSynapseProps[] | null {
  const { value } = useDetailsPageContext(columnName)

  if (!value) {
    return null
  }

  // TODO: Can we make this safer by checking if the columnType is a LIST?
  // The column data may be a list of Markdown props to render, so split on commas
  let splitValue: string[]
  if (!isRawMarkdown) {
    splitValue = value.split(',')
  } else {
    // Do not split if the value is raw markdown
    splitValue = [value]
  }

  return splitValue
    .map(s => s.trim())
    .map(s => transformStringIntoMarkdownProps(s, isRawMarkdown))
}
