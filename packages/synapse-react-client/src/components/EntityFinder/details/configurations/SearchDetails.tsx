import { convertToConcreteEntityType } from '../../../../utils/functions/EntityTypeUtils'
import { useSearchInfinite } from '../../../../synapse-queries/search/useSearch'
import { Hit, SearchQuery } from '@sage-bionetworks/synapse-types'
import { EntityHeaderFromHit } from '../../EntityFinderHeader'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'

import { DetailsView } from '../view/DetailsView'
import NoSearchResults from '../../../../assets/icons/NoSearchResults'
import SearchImage from '../../../../assets/icons/SearchImage'

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

export function SearchDetails({
  searchQuery,
  ...sharedProps
}: SearchDetailsProps) {
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
            <NoSearchResults className="SearchPlaceholderImage" />
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
            <SearchImage className="SearchPlaceholderImage" />
            <p>Enter a term or Synapse ID to start searching</p>
          </>
        }
        {...sharedProps}
        enableSelectAll={false} // Disable select all for search
      />
    )
  }
}
