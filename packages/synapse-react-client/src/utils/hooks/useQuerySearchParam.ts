import { useLocation } from 'react-router'

/**
 * If defined, get the query search parameter value for the given parameter name
 * @param queryParamName
 * @returns
 */
export function useQuerySearchParam(
  queryParamName: string,
): string | undefined {
  const search = new URLSearchParams(useLocation().search)
  const value = search.get(queryParamName)
  return value ?? undefined
}
