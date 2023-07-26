import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { parseEntityIdFromSqlStatement } from './SqlFunctions'

//id consists of a component class/function name and it's index
function getComponentSearchHashId(
  componentName: string,
  componentIndex: number,
): string {
  return `${componentName}${componentIndex}`
}

/**
 * Updates the url with the components' new search params. If stringifiedQuery
 * is null, the related search param will be removed.
 * @param componentName
 * @param componentIndex
 * @param stringifiedQuery
 */
export function updateUrlWithNewSearchParam(
  componentName: string,
  componentIndex: number | undefined,
  stringifiedQuery: string | null,
) {
  const componentSearchHashId =
    componentIndex !== undefined
      ? getComponentSearchHashId(componentName, componentIndex)
      : componentName

  const currentSearch = new URLSearchParams(window.location.search)

  if (stringifiedQuery) {
    currentSearch.set(componentSearchHashId, stringifiedQuery)
  } else {
    currentSearch.delete(componentSearchHashId)
  }

  const searchString = currentSearch.toString()
  window.history.replaceState(
    null,
    '',
    window.location.pathname +
      (Array.from(currentSearch).length > 0
        ? `?${searchString.toString()}`
        : ''),
  )
}

export function getQueryRequestFromLink(
  componentName: string,
  componentIndex: number,
): Partial<QueryBundleRequest> | undefined {
  const paramKey = getComponentSearchHashId(componentName, componentIndex)
  const searchParamValue = new URLSearchParams(window.location.search).get(
    paramKey,
  )

  let initQueryRequest: Partial<QueryBundleRequest> | undefined = undefined
  if (searchParamValue) {
    const query = JSON.parse(searchParamValue) as Query
    if (query.sql) {
      initQueryRequest = {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: parseEntityIdFromSqlStatement(query.sql),
        query,
      }
    }
  }
  return initQueryRequest
}
