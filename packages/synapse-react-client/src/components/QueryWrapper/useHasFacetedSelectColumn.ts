import { hasFacetedSelectColumn as hasFacetedSelectColumnUtil } from '../../utils/functions/queryUtils'
import { useGetQueryMetadata } from './useGetQueryMetadata'

export default function useHasFacetedSelectColumn(): boolean {
  const { data: queryMetadata, isLoading } = useGetQueryMetadata()

  if (!queryMetadata) {
    // if loading, return true - the facet UI will be shown in a loading state
    return isLoading
  }

  return hasFacetedSelectColumnUtil(
    queryMetadata.facets,
    queryMetadata.selectColumns,
  )
}
