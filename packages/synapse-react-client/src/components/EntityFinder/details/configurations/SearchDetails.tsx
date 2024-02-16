import React from 'react'
import { convertToConcreteEntityType } from '../../../../utils/functions/EntityTypeUtils'
import { useSearchInfinite } from '../../../../synapse-queries/search/useSearch'
import { Hit, SearchQuery } from '@sage-bionetworks/synapse-types'
import { EntityHeaderFromHit } from '../../EntityFinderHeader'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsView } from '../view/DetailsView'

type SearchDetailsProps = EntityDetailsListSharedProps & {
  searchQuery: SearchQuery
}

function toEntityHeader(hit: Hit): EntityHeaderFromHit {
  return {
    name: hit.name,
    id: hit.id,
    type: convertToConcreteEntityType(hit.node_type),
    createdOn: hit.created_on.toString(),
    modifiedOn: hit.modified_on.toString(),
    createdBy: hit.created_by,
    modifiedBy: hit.modified_by,
  }
}

export const SearchDetails: React.FunctionComponent<SearchDetailsProps> = ({
  searchQuery,
  ...sharedProps
}) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useSearchInfinite(searchQuery, {
      enabled: !!searchQuery.queryTerm,
      throwOnError: true,
    })

  if (searchQuery.queryTerm) {
    return (
      <DetailsView
        entities={
          data?.pages.flatMap(page => page.hits).map(toEntityHeader) ?? []
        }
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        noResultsPlaceholder={
          <>
            <img
              className="SearchPlaceholderImage"
              alt="No results found"
              src="https://s3.amazonaws.com/static.synapse.org/images/search-sad.svg"
            />
            <p>
              No results for &ldquo;{searchQuery.queryTerm.join(' ')}&rdquo;
            </p>
          </>
        }
        {...sharedProps}
        enableSelectAll={false} // Disable select all for search
      />
    )
  } else {
    return (
      <DetailsView
        entities={[]}
        isLoading={false}
        hasNextPage={false}
        noResultsPlaceholder={
          <>
            <img
              className="SearchPlaceholderImage"
              alt="Begin searching"
              src="https://s3.amazonaws.com/static.synapse.org/images/search-happy.svg"
            />
            <p>Enter a term or Synapse ID to start searching</p>
          </>
        }
        {...sharedProps}
        enableSelectAll={false} // Disable select all for search
      />
    )
  }
}
