import { useCallback, useState, useEffect } from 'react'

/**
 * React hook that can be used to access the current state of window.location.search.
 * Only use this when you cannot use an equivalent hook provided by a routing library (e.g. react-router)
 */

export const useNativeSearchParams = (
  param: string,
): [string | null, (newValue: string | null) => void] => {
  const getValue = useCallback(
    () => new URLSearchParams(window.location.search).get(param),
    [param],
  )

  const [value, setValue] = useState(getValue)
  useEffect(() => {
    const onChange = () => {
      setValue(getValue())
    }
    window.addEventListener('popstate', onChange)
    window.addEventListener('pushstate', onChange)
    window.addEventListener('replacestate', onChange)
    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener('pushstate', onChange)
      window.removeEventListener('replacestate', onChange)
    }
  }, [])

  const setSearchParam = (newValue: string | null) => {
    const searchParams = new URLSearchParams(window.location.search)
    if (newValue) {
      searchParams.set(param, newValue)
    } else {
      searchParams.delete(param)
    }
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`
    window.history.pushState({}, '', newUrl)
    setValue(newValue)
    window.dispatchEvent(new Event('pushstate'))
  }

  return [value, setSearchParam]
}
