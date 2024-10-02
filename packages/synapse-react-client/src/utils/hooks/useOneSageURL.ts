import { useSynapseContext } from '../context'
import { useMemo } from 'react'
import {
  ONE_SAGE_APPID_QUERY_PARAM_KEY,
  ONE_SAGE_PRODUCTION_URL,
} from '../SynapseConstants'

/**
 * Create a URL to OneSage that includes the current app's ID using SynapseContext
 * @param path the path to the OneSage page
 * @param search an optional set of URLSearchParams to append to the URL
 * @param hash an optional hash to append to the URL
 */
export function useOneSageURL(
  path: string = '',
  search?: URLSearchParams,
  hash?: string,
) {
  const { appId } = useSynapseContext()

  return useMemo(() => {
    const url = new URL(path, ONE_SAGE_PRODUCTION_URL)
    if (appId) {
      url.searchParams.append(ONE_SAGE_APPID_QUERY_PARAM_KEY, appId)
    }
    if (search) {
      search.forEach((value, key) => {
        url.searchParams.append(key, value)
      })
    }
    if (hash) {
      url.hash = hash
    }
    return url
  }, [appId, hash, path, search])
}
