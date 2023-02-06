import React from 'react'
import UserCardListRotate from '../../../containers/UserCardListRotate'
import { FacetColumnValuesRequest } from '../../../utils/synapseTypes'
import ExpandableContent from '../ExpandableContent'
import { UserCardListGroupsProps } from './UserCardListGroups'

export default function UserCardListGroupsMobile(
  props: UserCardListGroupsProps,
) {
  const { columnName, facetValues, ...rest } = props
  return (
    <div>
      {facetValues?.map((el, curIndex) => {
        const facetValue = facetValues[curIndex]
        const selectedFacet: FacetColumnValuesRequest = {
          columnName,
          facetValues: [facetValue],
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        }
        const content = (
          <UserCardListRotate {...rest} selectedFacets={[selectedFacet]} />
        )
        const title = <> {facetValue} </>
        return (
          <ExpandableContent
            key={`UserCardListGroup-Mobile-${curIndex}`}
            title={title}
            content={content}
          />
        )
      })}
    </div>
  )
}
