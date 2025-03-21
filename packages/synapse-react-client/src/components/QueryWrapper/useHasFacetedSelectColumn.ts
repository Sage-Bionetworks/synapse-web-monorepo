import { useQuery } from '@tanstack/react-query'
import { hasFacetedSelectColumn as hasFacetedSelectColumnUtil } from '../../utils/functions/queryUtils'
import { QueryContextType } from '../QueryContext/index'

export default function useHasFacetedSelectColumn(
  queryMetadataQueryOptions: QueryContextType['queryMetadataQueryOptions'],
): boolean {
  const { data: queryMetadata, isLoading } = useQuery(queryMetadataQueryOptions)

  if (!queryMetadata) {
    // if loading, return true - the facet UI will be shown in a loading state
    return isLoading
  }

  return hasFacetedSelectColumnUtil(
    queryMetadata.facets,
    queryMetadata.selectColumns,
  )
}
