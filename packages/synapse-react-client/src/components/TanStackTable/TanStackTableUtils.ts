import { Column } from '@tanstack/react-table'
import { CSSProperties } from 'react'

/**
 * Column IDs are arbitrary strings (e.g. Synapse column names may contain spaces or periods), but a custom property
 * name referenced in `var()` must be a valid CSS identifier. Characters outside [A-Za-z0-9-] are hex-encoded between
 * underscores, so the encoding is valid and distinct IDs never map to the same name.
 */
function toCssIdentifierSafeString(id: string) {
  return id.replace(
    /[^A-Za-z0-9-]/g,
    char => `_${char.charCodeAt(0).toString(16)}_`,
  )
}

export function getColumnSizeCssVariable(columnId: string) {
  return `--col-${toCssIdentifierSafeString(columnId)}-size`
}

export function getHeaderSizeCssVariable(headerId: string) {
  return `--header-${toCssIdentifierSafeString(headerId)}-size`
}

// Styles for column pinning, retrieved from TanStack docs examples with very minor modifications
// See https://tanstack.com/table/v8/docs/framework/react/examples/column-pinning-sticky
export function getCommonPinningStyles(column: Column<any>): CSSProperties {
  const isPinned = column.getIsPinned()
  const isLastLeftPinnedColumn =
    isPinned === 'left' && column.getIsLastColumn('left')
  const isFirstRightPinnedColumn =
    isPinned === 'right' && column.getIsFirstColumn('right')

  if (!isPinned) return {}
  return {
    background: 'inherit',
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px gray inset'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px gray inset'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    opacity: 0.95,
    position: 'sticky',
    width: column.getSize(),
    zIndex: 1,
  }
}
