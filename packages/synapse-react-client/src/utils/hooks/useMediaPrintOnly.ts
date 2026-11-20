import { useEffect } from 'react'

/**
 * Adds a temporary style sheet to the document so that, while an element with the `visibleOnPrintClassName` is
 * mounted, printing shows only those elements.
 *
 * Also provides a `hiddenOnPrintClassName` that can be used to hide elements within the `visibleOnPrintClassName` elements.
 *
 * Other elements take no space in the printed layout, and the ancestors of the printable elements flow, so long content
 * paginates.
 *
 * The style sheet is removed when the component unmounts.
 */
export function useMediaPrintOnly() {
  const visibleOnPrintClassName = 'printable'
  const hiddenOnPrintClassName = 'noPrint'

  useEffect(() => {
    const temporaryPrintStyle = document.createElement('style')
    temporaryPrintStyle.innerHTML = `@media print {
    body:has(.${visibleOnPrintClassName}) *:not(:has(.${visibleOnPrintClassName}), .${visibleOnPrintClassName}, .${visibleOnPrintClassName} *) {
        display: none !important;
    }

    body *:has(.${visibleOnPrintClassName}) {
        position: static !important;
        overflow: visible !important;
        height: auto !important;
        max-height: none !important;
        transform: none !important;
    }

    /* A viewport-height minimum is a whole page in print, so any content above it would push a blank page. */
    body *:has(.${visibleOnPrintClassName}), .${visibleOnPrintClassName} {
        min-height: 0 !important;
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
