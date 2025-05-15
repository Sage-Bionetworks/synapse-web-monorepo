import {
  experimentalModelsSql,
  modelADStrainsSelectedFacet,
} from '@/config/resources'
import { Navigate } from 'react-router'

export function Component() {
  // PORTALS-2028 (part 2): redirect /MODEL-ADstrains to /Explore/Experimental%20Models with query request
  return (
    <Navigate
      to={{
        pathname: '/Explore/Experimental Models',
        search: `QueryWrapper0={"sql":"${encodeURI(
          experimentalModelsSql,
        )}","limit":25,"offset":0,"selectedFacets":[{"concreteType":"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest","columnName":"${
          modelADStrainsSelectedFacet.columnName
        }","facetValues":["${modelADStrainsSelectedFacet.facetValue}"]}]}`,
      }}
      replace={true}
    />
  )
}

export default Component
