import { useState } from 'react'
import UserCardListRotate from '../UserCardListRotate'
import { FacetColumnValuesRequest } from '@sage-bionetworks/synapse-types'
import { UserCardListGroupsProps } from './UserCardListGroups'

export default function UserCardListGroupsDesktop(
  props: UserCardListGroupsProps,
) {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState<number>(0)
  const { columnName, facetValues, ...rest } = props
  const selectedFacet: FacetColumnValuesRequest = {
    columnName,
    facetValues: [facetValues[selectedGroupIndex]],
    concreteType:
      'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
  }
  return (
    <div className="control-container">
      <div className="button-container">
        {facetValues?.map((el, curIndex) => {
          return (
            <button
              className={selectedGroupIndex === curIndex ? 'isSelected' : ''}
              onClick={() => setSelectedGroupIndex(curIndex)}
              key={el}
            >
              {el}
            </button>
          )
        })}
        {/* 
              This button keeps the border line in the button container running from top to bottom,
              it doesn't have any functionality.
            */}
        <button className="gap-fill" />
      </div>
      <div className="content-container">
        <UserCardListRotate
          key={`UserCardListGroup-${selectedGroupIndex}`}
          {...rest}
          selectedFacets={[selectedFacet]}
        />
      </div>
    </div>
  )
}
