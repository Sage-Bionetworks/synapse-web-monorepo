import React from 'react'
import { DetailsPageContextConsumer } from './DetailsPage/DetailsPageContext'
import { HeadlineWithLinkDerivedFromEntityId } from './DetailsPage/HeadlineWithLink'
import { transformStringIntoMarkdownProps } from './injectPropsIntoConfig'
import { MarkdownSynapse } from 'synapse-react-client'

type MarkdownSynapseFromColumnDataProps = {
  columnName: string
  showEntityTitle?: boolean
}

export function MarkdownSynapseFromColumnData(
  props: MarkdownSynapseFromColumnDataProps,
) {
  const { columnName, showEntityTitle } = props
  return (
    <DetailsPageContextConsumer columnName={columnName}>
      {({ value }) => {
        if (!value) {
          return null
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
