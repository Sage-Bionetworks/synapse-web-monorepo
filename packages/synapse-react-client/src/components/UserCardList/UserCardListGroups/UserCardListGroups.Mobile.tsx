import UserCardListRotate from '../UserCardListRotate'
import { FacetColumnValuesRequest } from '@sage-bionetworks/synapse-types'
import ExpandableContent from '../../home_page/ExpandableContent'
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
