import { useLocation } from 'react-router-dom'

export type RedirectToURLProps = {
  toURL: string
  search?: string
}

/**
 * Allows us to redirect to an arbitrary URL.  If search is provided, then it will only redirect if the
 * search parameter matches this string.
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
