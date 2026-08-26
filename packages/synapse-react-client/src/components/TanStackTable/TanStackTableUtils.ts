import { Column } from '@tanstack/react-table'
import { CSSProperties } from 'react'

export function getColumnSizeCssVariable(columnId: string) {
  return `--col-${columnId}-size`
}

export function getHeaderSizeCssVariable(headerId: string) {
  return `--header-${headerId}-size`
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
