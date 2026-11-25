import { useEffect, useRef } from 'react'

/**
 * Returns a function that opens the browser's print dialog with `document.title` set to `title`, which browsers use
 * as the default name of a saved PDF. The previous title is restored after printing, or when the component unmounts
 * if the browser never fires `afterprint`.
 */
export function usePrintWithTitle() {
  const titleBeforePrint = useRef<string | undefined>(undefined)

  useEffect(() => {
    function restoreTitle() {
      if (titleBeforePrint.current !== undefined) {
        document.title = titleBeforePrint.current
        titleBeforePrint.current = undefined
      }
    }
    window.addEventListener('afterprint', restoreTitle)
    return () => {
      window.removeEventListener('afterprint', restoreTitle)
      restoreTitle()
    }
  }, [])

  return function printWithTitle(title: string) {
    // Printing again before `afterprint` must not save the print title as the one to restore.
    titleBeforePrint.current ??= document.title
    document.title = title
    window.print()
  }
}
