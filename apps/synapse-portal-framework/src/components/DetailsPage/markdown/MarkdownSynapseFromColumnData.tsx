import React from 'react'
import { MarkdownSynapse, NoContentAvailable } from 'synapse-react-client'
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
}

export function MarkdownSynapseFromColumnData(
  props: MarkdownSynapseFromColumnDataProps,
) {
  const {
    columnName,
    showEntityTitle,
    showNoContentAvailable = false,
    injectMarkdown = false,
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
        <MarkdownSynapse {...splitComponentProps} />
      </React.Fragment>
    )
  })
}
