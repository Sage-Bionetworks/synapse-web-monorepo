import { useEffect } from 'react'

/**
 * Adds a temporary style sheet to the document so that printing shows only the elements with the
 * `visibleOnPrintClassName`.
 *
 * Also provides a `hiddenOnPrintClassName` that can be used to hide elements within the `visibleOnPrintClassName` elements.
 *
 * Everything else is removed from the printed layout rather than made invisible, and the ancestors of the printable
 * elements are made to flow, so long content paginates instead of being clipped or followed by blank pages.
 *
 * The style sheet is removed when the component unmounts.
 */
export function useMediaPrintOnly() {
  const visibleOnPrintClassName = 'printable'
  const hiddenOnPrintClassName = 'noPrint'

  useEffect(() => {
    const temporaryPrintStyle = document.createElement('style')
    temporaryPrintStyle.innerHTML = `@media print {
    body *:not(:has(.${visibleOnPrintClassName}), .${visibleOnPrintClassName}, .${visibleOnPrintClassName} *) {
        display: none !important;
    }

    body *:has(.${visibleOnPrintClassName}) {
        position: static !important;
        overflow: visible !important;
        height: auto !important;
        max-height: none !important;
        transform: none !important;
    }

    .${visibleOnPrintClassName} .${hiddenOnPrintClassName} {
        display: none !important;
    }
}`

    document.head.append(temporaryPrintStyle)
    return () => {
      temporaryPrintStyle.remove()
    }
  }, [])

  return { visibleOnPrintClassName, hiddenOnPrintClassName }
}
