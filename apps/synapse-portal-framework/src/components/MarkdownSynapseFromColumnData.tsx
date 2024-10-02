import React from 'react'
import { MarkdownSynapse, NoContentAvailable } from 'synapse-react-client'
import { DetailsPageContextConsumer } from './DetailsPage/DetailsPageContext'
import { HeadlineWithLinkDerivedFromEntityId } from './DetailsPage/HeadlineWithLink'
import { transformStringIntoMarkdownProps } from './injectPropsIntoConfig'

type MarkdownSynapseFromColumnDataProps = {
  columnName: string
  showEntityTitle?: boolean
  /** If true, show a "No content available" message when no markdown can be found.
   * @default false
   */
  showNoContentAvailable?: boolean
}

export function MarkdownSynapseFromColumnData(
  props: MarkdownSynapseFromColumnDataProps,
) {
  const { columnName, showEntityTitle, showNoContentAvailable = false } = props
  return (
    <DetailsPageContextConsumer columnName={columnName}>
      {({ value }) => {
        if (!value) {
          return showNoContentAvailable ? <NoContentAvailable /> : null
        }

        const propsArray = value
          .split(',')
          .map(s => s.trim())
          .map(s => transformStringIntoMarkdownProps(s))

        return propsArray.map(props => {
          return (
            <React.Fragment key={JSON.stringify(props)}>
              {showEntityTitle && (
                <>
                  <HeadlineWithLinkDerivedFromEntityId
                    id={props.ownerId!}
                    title={'Methods'}
                  />
                  <hr />
                </>
              )}
              <MarkdownSynapse {...props} />
            </React.Fragment>
          )
        })
      }}
    </DetailsPageContextConsumer>
  )
}
