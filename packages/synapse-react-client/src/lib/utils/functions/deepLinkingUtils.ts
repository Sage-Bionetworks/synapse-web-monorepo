import { QueryBundleRequest } from '../synapseTypes/Table/QueryBundleRequest'
import { Query } from '../synapseTypes'
import { SynapseConstants } from '..'
import { parseEntityIdFromSqlStatement } from './sqlFunctions'

//id consists of a component class/function name and it's index
function getComponentSearchHashId(
  componentName: string,
  componentIndex: number,
): string {
  return `${componentName}${componentIndex}`
}

//returns updated search string with the component's info
function patchSearchString(
  componentSearchHashId: string,
  stringifiedQuery: string,
): string | undefined {
  const searchString = window.location.search

  const searchFragment = `${componentSearchHashId}=${stringifiedQuery}`
  if (!searchString) {
    return searchFragment
  }

  if (!searchString.includes(`${componentSearchHashId}=`)) {
    //substr(1) because we don't want '?' character
    return `${searchString.substr(1)}&${searchFragment}`
  }
  const searchHashes = window.location.search
    .slice(searchString.indexOf('?') + 1)
    .split('&')

  const searchHashesUpdated = searchHashes
    .map(item => {
      const split = item.split('=')
      if (split[0] === componentSearchHashId) {
        return `${searchFragment}`
      } else return item
    })
    .join('&')
  return searchHashesUpdated
}

//gets a value for the search param for the component from the url
export function getSearchParamValueFromUrl(
  componentName: string,
  componentIndex: number,
): string | undefined {
  if (!window.location.search) {
    return undefined
  }
  const componentSearchHashId = getComponentSearchHashId(
    componentName,
    componentIndex,
  )
  const hashes = window.location.search
    .slice(window.location.search.indexOf('?') + 1)
    .split('&')
  const getSearchParamValue = hashes
    .filter(item => {
      const hash = item.split('=')
      return hash[0] === componentSearchHashId
    })
    .map(item => item.split('=')[1])[0]
  return getSearchParamValue
    ? decodeURIComponent(getSearchParamValue)
    : undefined
}

//updates the url with the components new search params
export function updateUrlWithNewSearchParam(
  componentName: string,
  componentIndex: number | undefined,
  stringifiedQuery: string,
) {
  const componentSearchHashId =
    componentIndex !== undefined
      ? getComponentSearchHashId(componentName, componentIndex)
      : componentName
  const searchString = patchSearchString(
    componentSearchHashId,
    stringifiedQuery,
  )
  const location = window.location
  const newURL = `${location.protocol}//${location.hostname}${
    location.port ? ':' + location.port : ''
  }${location.pathname}?${searchString}`

  window.history.replaceState('object or string', 'Title', newURL)
}

export function getQueryRequestFromLink(
  componentName: string,
  componentIndex: number,
): QueryBundleRequest | undefined {
  const searchParamValue = getSearchParamValueFromUrl(
    componentName,
    componentIndex,
  )

  let initQueryRequest: QueryBundleRequest | undefined = undefined
  if (searchParamValue) {
    const query = JSON.parse(searchParamValue) as Query
    if (query.sql) {
      initQueryRequest = {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        partMask:
          SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
          SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
          SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
          SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
          SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
        entityId: parseEntityIdFromSqlStatement(query.sql),
        query,
      }
    }
  }
  return initQueryRequest
}
