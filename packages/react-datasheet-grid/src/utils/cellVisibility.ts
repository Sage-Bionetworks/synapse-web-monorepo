export type Bounds = {
  top: number
  left: number
  right: number
  bottom: number
}

const STICKY_LEFT_CELLS = '.dsg-cell-sticky-left, .dsg-cell-gutter'
const STICKY_RIGHT_CELLS = '.dsg-cell-sticky-right'

// Sub-pixel rounding between rects measured off different elements should not
// read as a cell being hidden.
const TOLERANCE = 1

/**
 * The region of a grid in which cells are actually visible: the scrollable area
 * minus the sticky header row and pinned columns, which paint over any cell
 * scrolled behind them.
 *
 * @param container the grid's scrollable container
 * @param cell the cell whose visibility is being tested — a cell that is itself
 *   pinned cannot be hidden behind the pinned columns it belongs to
 */
export function getVisibleCellBounds(
  container: HTMLElement,
  cell: Element | null,
): Bounds {
  const { top, left } = container.getBoundingClientRect()
  // clientWidth/clientHeight rather than the rect's own size: scrollbars sit
  // inside the container's box but paint over the cells behind them.
  const bounds = {
    top,
    left,
    right: left + container.clientWidth,
    bottom: top + container.clientHeight,
  }

  // Pinned columns are measured on the header row rather than on the cell's own
  // row: every row pins the same columns, and the header row is always there.
  const headerRow = container.querySelector('.dsg-row-header')

  if (!headerRow) {
    return bounds
  }

  bounds.top = Math.max(bounds.top, headerRow.getBoundingClientRect().bottom)

  if (!cell?.matches(STICKY_LEFT_CELLS)) {
    Array.from(headerRow.querySelectorAll(STICKY_LEFT_CELLS)).forEach(
      pinned => {
        bounds.left = Math.max(
          bounds.left,
          pinned.getBoundingClientRect().right,
        )
      },
    )
  }

  if (!cell?.matches(STICKY_RIGHT_CELLS)) {
    Array.from(headerRow.querySelectorAll(STICKY_RIGHT_CELLS)).forEach(
      pinned => {
        bounds.right = Math.min(
          bounds.right,
          pinned.getBoundingClientRect().left,
        )
      },
    )
  }

  return bounds
}

/**
 * Whether the top-left corner of a cell — the point an expanded popup is
 * anchored to and grows right and down from — is inside the visible region.
 */
export function isCellOriginVisible(
  cellRect: { top: number; left: number },
  bounds: Bounds,
): boolean {
  return (
    cellRect.top >= bounds.top - TOLERANCE &&
    cellRect.top <= bounds.bottom + TOLERANCE &&
    cellRect.left >= bounds.left - TOLERANCE &&
    cellRect.left <= bounds.right + TOLERANCE
  )
}
