import { useLocation } from 'react-router-dom'

export type RedirectToURLProps = {
  toURL: string
  search?: string
}

/**
 * Allows us to use react-router's Redirect as a portal component without losing the query params.
 * @param props
 * @returns
 */
export default function RedirectToURL(props: RedirectToURLProps) {
  const { search: currentSearch } = useLocation()

  const { toURL, search } = props
  const isSearchMatch =
    search == undefined ? true : `?${search}` == currentSearch

  if (isSearchMatch) {
    window.location.replace(toURL)
  }
}
