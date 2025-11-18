import { useMemo } from 'react'
import { useSynapseContext } from '../../stores/SynapseContext/SynapseContext'
import { BackendDestinationEnum, getEndpoint } from '../functions/index'
import {
  ONE_SAGE_APPID_QUERY_PARAM_KEY,
  ONE_SAGE_DEV_URL,
  ONE_SAGE_PRODUCTION_URL,
  ONE_SAGE_STAGING_URL,
  SYNAPSE_BACKEND_DEV_URL,
  SYNAPSE_BACKEND_PRODUCTION_URL,
  SYNAPSE_BACKEND_STAGING_URL,
} from '../SynapseConstants'

export function getOneSageBaseUrl(
  currentHostname: string,
  currentBackendEndpoint: string,
) {
  // If we're on synapse.org, then go to the accounts site that matches the current backend stack.
  //backend endpoint may contain a trailing slash, so let's remove it if present:
  const currentBackendEndpointWithoutSlash = currentBackendEndpoint.replace(
    /\/$/,
    '',
  )
  if (
    currentHostname === 'synapse.org' ||
    currentHostname.endsWith('.synapse.org')
  ) {
    if (currentBackendEndpointWithoutSlash === SYNAPSE_BACKEND_PRODUCTION_URL) {
      return ONE_SAGE_PRODUCTION_URL
    }
    if (currentBackendEndpointWithoutSlash === SYNAPSE_BACKEND_STAGING_URL) {
      return ONE_SAGE_STAGING_URL
    }
    if (currentBackendEndpointWithoutSlash === SYNAPSE_BACKEND_DEV_URL) {
      return ONE_SAGE_DEV_URL
    }
  }

  if (currentHostname === 'localhost' || currentHostname === '127.0.0.1') {
    return `http://${currentHostname}:3000`
  }

  console.warn(
    `No accounts URL found for host: ${currentHostname} with backend endpoint: ${currentBackendEndpointWithoutSlash}`,
  )
  return ONE_SAGE_PRODUCTION_URL
}

export function getOneSageUrl(
  currentHostname: string,
  currentBackendEndpoint: string,
  appId?: string,
  path: string = '',
  search?: URLSearchParams,
  hash?: string,
) {
  const targetURL = getOneSageBaseUrl(currentHostname, currentBackendEndpoint)

  const url = new URL(path, targetURL)
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
}

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
): URL {
  const { appId } = useSynapseContext()

  const currentBackendEndpoint = getEndpoint(
    BackendDestinationEnum.REPO_ENDPOINT,
  )

  return useMemo(
    () =>
      getOneSageUrl(
        window.location.hostname.toLowerCase(),
        currentBackendEndpoint,
        appId,
        path,
        search,
        hash,
      ),
    [currentBackendEndpoint, appId, path, search, hash],
  )
}
