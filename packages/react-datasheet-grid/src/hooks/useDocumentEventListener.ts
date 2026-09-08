import { useEffect } from 'react'

export const useDocumentEventListener = (
  type: string,
  listener: (...args: any[]) => void | Promise<void>,
) => {
  useEffect(() => {
    // Some listeners (copy, paste) are async because they await the clipboard
    // API; addEventListener expects a void return, so the promise is dropped.
    const handler = (...args: any[]) => {
      void listener(...args)
    }

    document.addEventListener(type, handler)

    return () => {
      document.removeEventListener(type, handler)
    }
  }, [listener, type])
}
