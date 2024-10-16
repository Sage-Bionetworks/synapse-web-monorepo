import { useLocation } from 'react-router-dom'

const ignoreSearchParamsSet: Set<string> = new Set([
  'utm_source',
  'utm_campaign',
  'utm_medium',
  'utm_term',
  'utm_content',
])

export function useGetPortalComponentSearchParams() {
  const { search } = useLocation()
  // If url has search params transform into key-value dictionary that can be passed into
  // the component which is rendered
  const searchParamsProps: Record<string, string> = {}
  if (search) {
    const searchParams = new URLSearchParams(search)
    searchParams.forEach((value, key) => {
      if (!ignoreSearchParamsSet.has(key)) {
        searchParamsProps[key] = value
      }
    })
  }
  return searchParamsProps
}
