import { Fragment } from 'react'
import MarkdownCollapse, {
  MarkdownCollapseProps,
} from 'synapse-react-client/components/Markdown/MarkdownCollapse'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { useColumnDataMarkdownProps } from './useColumnDataMarkdownProps'
import NoContentAvailable from 'synapse-react-client/components/SynapseTable/NoContentAvailable'
import CollapsibleSectionDerivedFromEntityId from '@/components/CollapsibleSectionDerivedFromEntityId'

type MarkdownSynapseFromColumnDataProps = {
  /**
   * The column name that contains the table data to render
   */
  columnName: string
  /**
   * If true, displays a headline labeled with the resolved entity's name
   */
  showEntityTitle?: boolean
  /**
   * If showEntityTitle is true, also prepend this string before the entity title in the headline
   */
  entityTitlePrepend?: string
  /** If true, show a "No content available" message when no markdown can be found.
   * @default false
   */
  showNoContentAvailable?: boolean
  /** If true, treat the content as raw markdown
   * @default false
   */
  isRawMarkdown?: boolean
  /** If provided, will render a MarkdownCollapse instead */
  MarkdownCollapseProps?: MarkdownCollapseProps
}

/**
 * On a portal DetailsPage, renders markdown retrieved from the details page row
 * using the specified columnName.
 *
 * Based on the column data, this component is capable of rendering
 * - The root wiki of an entity ID (e.g. syn1234)
 * - An arbitrary wiki owned by an entity ID (e.g. syn1234/wiki/9876)
 * - Any comma-separated list combination of the above
 *     (e.g. syn1234,syn5678,syn1234/wiki/9876)
 * - Table data as raw markdown, if the `isRawMarkdown` prop is true.
 *
 * @param props
 * @constructor
 */
export function MarkdownSynapseFromColumnData(
  props: MarkdownSynapseFromColumnDataProps,
) {
  const {
    columnName,
    showEntityTitle,
    showNoContentAvailable = false,
    isRawMarkdown = false,
    MarkdownCollapseProps,
  } = props

  const propsArray = useColumnDataMarkdownProps(columnName, isRawMarkdown)

  if (!propsArray) {
    return showNoContentAvailable ? <NoContentAvailable /> : null
  }

  return propsArray.map(splitComponentProps => {
    const markdownContent =
      MarkdownCollapseProps == null ? (
        <MarkdownSynapse {...splitComponentProps} />
      ) : (
        <MarkdownCollapse {...splitComponentProps} {...MarkdownCollapseProps} />
      )

    return (
      <Fragment key={JSON.stringify(splitComponentProps)}>
        {showEntityTitle ? (
          <CollapsibleSectionDerivedFromEntityId
            id={splitComponentProps.ownerId!}
          >
            {markdownContent}
          </CollapsibleSectionDerivedFromEntityId>
        ) : (
          markdownContent
        )}
      </Fragment>
    )
  })
}
