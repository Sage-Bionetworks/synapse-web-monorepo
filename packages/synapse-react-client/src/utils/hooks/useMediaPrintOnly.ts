import { useEffect } from 'react'

/**
 * Adds a temporary style sheet to the document that hides all elements except those with the `visibleOnPrintClassName`.
 *
 * Also provides a `hiddenOnPrintClassName` that can be used to hide elements within the `visibleOnPrintClassName` elements.
 *
 * The style sheet is removed when the component unmounts.
 */
export function useMediaPrintOnly() {
  const visibleOnPrintClassName = 'printable'
  const hiddenOnPrintClassName = 'noPrint'

  useEffect(() => {
    const temporaryPrintStyle = document.createElement('style')
    temporaryPrintStyle.innerHTML = `@media print {
    * {
        visibility: hidden;
    }

    .${visibleOnPrintClassName} {
        visibility: visible;
        position: absolute;
        top: 0;
        left: 0;
    }

    .${visibleOnPrintClassName} * {
        visibility: visible;
    }
    
    .${visibleOnPrintClassName} .${hiddenOnPrintClassName} {
        display: none;
        visibility: hidden;
    }
    
    .${visibleOnPrintClassName} .${hiddenOnPrintClassName} * {
        display: none;
        visibility: hidden;
    }
}`

    document.head.append(temporaryPrintStyle)
    return () => {
      temporaryPrintStyle.remove()
    }
  }, [])

  return { visibleOnPrintClassName, hiddenOnPrintClassName }
}
