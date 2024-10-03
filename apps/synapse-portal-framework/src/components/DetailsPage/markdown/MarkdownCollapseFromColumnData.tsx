import React from 'react'
import {
  MarkdownCollapse,
  MarkdownCollapseProps,
  NoContentAvailable,
} from 'synapse-react-client'
import { HeadlineWithLinkDerivedFromEntityId } from '../HeadlineWithLink'
import { useColumnDataMarkdownProps } from './useColumnDataMarkdownProps'

type MarkdownSynapseFromColumnDataProps = {
  columnName: string
  showEntityTitle?: boolean
  /** If true, show a "No content available" message when no markdown can be found.
   * @default false
   */
  showNoContentAvailable?: boolean
  injectMarkdown?: boolean
  MarkdownCollapseProps?: MarkdownCollapseProps
}

export function MarkdownCollapseFromColumnData(
  props: MarkdownSynapseFromColumnDataProps,
) {
  const {
    columnName,
    showEntityTitle,
    showNoContentAvailable = false,
    injectMarkdown = false,
    MarkdownCollapseProps,
  } = props

  const propsArray = useColumnDataMarkdownProps(columnName, injectMarkdown)

  if (!propsArray) {
    return showNoContentAvailable ? <NoContentAvailable /> : null
  }

  return propsArray.map(splitComponentProps => {
    return (
      <React.Fragment key={JSON.stringify(splitComponentProps)}>
        {showEntityTitle && (
          <>
            <HeadlineWithLinkDerivedFromEntityId
              id={splitComponentProps.ownerId!}
              title={'Methods'}
            />
            <hr />
          </>
        )}
        <MarkdownCollapse {...splitComponentProps} {...MarkdownCollapseProps} />
      </React.Fragment>
    )
  })
}
