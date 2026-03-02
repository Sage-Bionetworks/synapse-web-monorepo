import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { isEqual } from 'lodash-es'
import { parseEntityIdFromSqlStatement } from './SqlFunctions'

/**
 * Compresses a string using the browser's CompressionStream API and returns base64.
 * @param str - The string to compress
 * @returns Base64-encoded compressed string
 */
async function compressString(str: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(str)

  const compressionStream = new CompressionStream('gzip')
  const writer = compressionStream.writable.getWriter()
  writer.write(data)
  writer.close()

  const compressedArrayBuffer = await new Response(
    compressionStream.readable,
  ).arrayBuffer()

  // Convert to base64
  const bytes = new Uint8Array(compressedArrayBuffer)
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

/**
 * Decompresses a base64-encoded gzip string using the browser's DecompressionStream API.
 * @param base64Str - The base64-encoded compressed string
 * @returns The decompressed string
 */
async function decompressString(base64Str: string): Promise<string> {
  // Convert from base64 to Uint8Array
  const binary = atob(base64Str)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }

  const decompressionStream = new DecompressionStream('gzip')
  const writer = decompressionStream.writable.getWriter()
  writer.write(bytes)
  writer.close()

  const decompressedArrayBuffer = await new Response(
    decompressionStream.readable,
  ).arrayBuffer()

  const decoder = new TextDecoder()
  return decoder.decode(decompressedArrayBuffer)
}

//id consists of a component class/function name and it's index
function getComponentSearchHashId(
  componentName: string,
  componentIndex: number,
): string {
  return `${componentName}${componentIndex}`
}

/**
 * Computes the difference between the current query and the initial query.
 * Returns only the fields that differ from the initial query.
 * @param currentQuery - The current query state
 * @param initQuery - The initial query state
 * @returns A partial Query object containing only the differences, or null if queries are equal
 */
function computeQueryDiff(
  currentQuery: Query,
  initQuery: Query,
): Partial<Query> | null {
  if (isEqual(currentQuery, initQuery)) {
    return null
  }

  // Create a diff object with only the fields that differ from initQuery
  const diff: Partial<Query> = {}

  // Check each field and include it only if it differs from initQuery
  if (currentQuery.sql !== initQuery.sql) {
    diff.sql = currentQuery.sql
  }
  if (!isEqual(currentQuery.selectedFacets, initQuery.selectedFacets)) {
    diff.selectedFacets = currentQuery.selectedFacets
  }
  if (currentQuery.includeEntityEtag !== initQuery.includeEntityEtag) {
    diff.includeEntityEtag = currentQuery.includeEntityEtag
  }
  if (currentQuery.offset !== initQuery.offset) {
    diff.offset = currentQuery.offset
  }
  if (currentQuery.limit !== initQuery.limit) {
    diff.limit = currentQuery.limit
  }
  if (!isEqual(currentQuery.sort, initQuery.sort)) {
    diff.sort = currentQuery.sort
  }
  if (!isEqual(currentQuery.additionalFilters, initQuery.additionalFilters)) {
    diff.additionalFilters = currentQuery.additionalFilters
  }

  return Object.keys(diff).length > 0 ? diff : null
}

/**
 * Applies a query diff to the initial query to reconstruct the current query.
 * @param initQuery - The initial query state
 * @param diff - The partial query containing only the differences
 * @returns The reconstructed query
 */
function applyQueryDiff(initQuery: Query, diff: Partial<Query>): Query {
  return {
    ...initQuery,
    ...diff,
  }
}

/**
 * Updates the url with the components' new search params. Stores only the
 * differences between currentQuery and initQuery, compressed with gzip and base64-encoded.
 * If the queries are equal, the search param will be removed.
 * @param componentName
 * @param componentIndex
 * @param currentQuery - The current query state, or null to remove the param
 * @param initQuery - The initial query state to compute diff against
 */
export async function updateUrlWithNewSearchParam(
  componentName: string,
  componentIndex: number | undefined,
  currentQuery: Query | null,
  initQuery: Query | null,
): Promise<void> {
  const componentSearchHashId =
    componentIndex !== undefined
      ? getComponentSearchHashId(componentName, componentIndex)
      : componentName

  const currentSearch = new URLSearchParams(window.location.search)

  if (currentQuery && initQuery) {
    const diff = computeQueryDiff(currentQuery, initQuery)
    if (diff) {
      // Compress the diff and encode as base64
      const jsonString = JSON.stringify(diff)
      const compressed = await compressString(jsonString)
      currentSearch.set(componentSearchHashId, compressed)
    } else {
      // Queries are equal, remove the param
      currentSearch.delete(componentSearchHashId)
    }
  } else {
    // No current query or no init query, remove the param
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

/**
 * Retrieves a query request from the URL by applying the stored diff to the initial query.
 * @param componentName
 * @param componentIndex
 * @param initQuery - The initial query to apply the diff to
 * @returns A partial QueryBundleRequest with the reconstructed query, or undefined if no diff is stored
 */
export async function getQueryRequestFromLink(
  componentName: string,
  componentIndex: number,
  initQuery: Query,
): Promise<Partial<QueryBundleRequest> | undefined> {
  const paramKey = getComponentSearchHashId(componentName, componentIndex)
  const searchParamValue = new URLSearchParams(window.location.search).get(
    paramKey,
  )

  let queryRequest: Partial<QueryBundleRequest> | undefined = undefined
  if (searchParamValue) {
    try {
      // Decompress and parse the diff from the URL
      const jsonString = await decompressString(searchParamValue)
      const diff = JSON.parse(jsonString) as Partial<Query>
      // Apply the diff to the init query to reconstruct the current query
      const query = applyQueryDiff(initQuery, diff)
      if (query.sql) {
        queryRequest = {
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          entityId: parseEntityIdFromSqlStatement(query.sql),
          query,
        }
      }
    } catch (error) {
      console.error('Failed to parse query diff from URL:', error)
    }
  }
  return queryRequest
}
