import { MarkdownSynapseProps } from 'synapse-react-client'
import { transformStringIntoMarkdownProps } from '../../injectPropsIntoConfig'
import { useDetailsPageContext } from '../DetailsPageContext'

export function useColumnDataMarkdownProps(
  columnName: string,
  injectMarkdown: boolean,
): MarkdownSynapseProps[] | null {
  const { value } = useDetailsPageContext(columnName)

  if (!value) {
    return null
  }

  return value
    .split(',')
    .map(s => s.trim())
    .map(s => transformStringIntoMarkdownProps(s, injectMarkdown))
}
