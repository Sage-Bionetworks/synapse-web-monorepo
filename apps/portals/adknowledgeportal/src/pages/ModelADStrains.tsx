import {
  experimentalModelsSql,
  modelADStrainsSelectedFacet,
} from '@/config/resources'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { generateCompressedQueryURL } from 'synapse-react-client/utils/functions/deepLinkingUtils'
import { Query } from '@sage-bionetworks/synapse-types'

export function Component() {
  // PORTALS-2028 (part 2): redirect /MODEL-ADstrains to /Explore/Experimental%20Models with query request
  const [searchParam, setSearchParam] = useState<string>('')

  useEffect(() => {
    const currentQuery: Query = {
      sql: experimentalModelsSql,
      limit: 25,
      offset: 0,
      selectedFacets: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: modelADStrainsSelectedFacet.columnName,
          facetValues: [modelADStrainsSelectedFacet.facetValue],
        },
      ],
    }

    const initQuery: Query = {
      sql: experimentalModelsSql,
    }

    generateCompressedQueryURL('', 'qw', 0, currentQuery, initQuery).then(
      url => {
        // Extract the search param from the generated URL
        const searchString = url.split('?')[1] || ''
        setSearchParam(searchString)
      },
    )
  }, [])

  if (!searchParam) {
    return null // Wait for the search param to be generated
  }

  return (
    <Navigate
      to={{
        pathname: '/Explore/Experimental Models',
        search: searchParam,
      }}
      replace={true}
    />
  )
}

export default Component
