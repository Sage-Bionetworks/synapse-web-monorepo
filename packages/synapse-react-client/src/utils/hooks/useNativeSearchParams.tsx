import { useCallback, useState, useEffect } from 'react'

export const useNativeSearchParams = (param: string) => {
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
  return value
}
