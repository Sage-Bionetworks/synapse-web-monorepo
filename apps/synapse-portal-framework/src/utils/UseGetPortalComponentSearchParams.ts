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
  let searchParamsProps: Record<string, string> | undefined = undefined
  if (search) {
    searchParamsProps = {}
    // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams -- needs polyfill for ie11
    const searchParams = new URLSearchParams(search)
    searchParams.forEach((value, key) => {
      if (!ignoreSearchParamsSet.has(key)) {
        searchParamsProps![key] = value
      }
    })
  }
  return searchParamsProps
}

type PortalSearchParamsProps = {
  children: (
    searchParams: Record<string, string> | undefined,
  ) => React.ReactNode
  keyFilter?: string[]
}
export function PortalSearchParams(props: PortalSearchParamsProps) {
  const searchParams = useGetPortalComponentSearchParams()

  if (props.keyFilter) {
    const filteredSearchParams: Record<string, string> = {}
    if (searchParams) {
      props.keyFilter.forEach(key => {
        if (searchParams[key]) {
          filteredSearchParams[key] = searchParams[key]
        }
      })
    }
    return props.children(filteredSearchParams)
  }

  return props.children(searchParams)
}
