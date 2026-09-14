import { afterEach, describe, expect, test } from 'vitest'
import {
  Bounds,
  getVisibleCellBounds,
  isCellOriginVisible,
} from './cellVisibility'

// JSDOM lays nothing out, so every rect the code under test reads is stubbed.
const withRect = <T extends HTMLElement>(
  element: T,
  rect: Partial<DOMRect>,
): T => {
  element.getBoundingClientRect = () =>
    ({
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      ...rect,
    }) as DOMRect
  return element
}

const appendCell = (
  parent: HTMLElement,
  className: string,
  rect: Partial<DOMRect>,
) => {
  const cell = document.createElement('div')
  cell.className = `dsg-cell ${className}`
  parent.append(withRect(cell, rect))
  return cell
}

type GridOptions = {
  headerBottom?: number
  gutterRight?: number
  pinnedLeftRight?: number
  pinnedRightLeft?: number
}

const createGrid = ({
  headerBottom,
  gutterRight,
  pinnedLeftRight,
  pinnedRightLeft,
}: GridOptions = {}) => {
  const container = document.createElement('div')
  container.className = 'dsg-container'
  // A wider/taller rect than the client size, as a container with scrollbars
  // has.
  withRect(container, { top: 100, left: 200, right: 760, bottom: 560 })
  Object.defineProperty(container, 'clientWidth', { value: 500 })
  Object.defineProperty(container, 'clientHeight', { value: 400 })

  if (headerBottom !== undefined) {
    const headerRow = document.createElement('div')
    headerRow.className = 'dsg-row dsg-row-header'
    container.append(withRect(headerRow, { top: 100, bottom: headerBottom }))

    if (gutterRight !== undefined) {
      appendCell(headerRow, 'dsg-cell-header dsg-cell-gutter', {
        left: 200,
        right: gutterRight,
      })
    }
    if (pinnedLeftRight !== undefined) {
      appendCell(headerRow, 'dsg-cell-header dsg-cell-sticky-left', {
        left: gutterRight ?? 200,
        right: pinnedLeftRight,
      })
    }
    if (pinnedRightLeft !== undefined) {
      appendCell(headerRow, 'dsg-cell-header dsg-cell-sticky-right', {
        left: pinnedRightLeft,
        right: 700,
      })
    }
  }

  document.body.append(container)
  return container
}

afterEach(() => {
  document.body.innerHTML = ''
})

describe('getVisibleCellBounds', () => {
  test('is the scrollable area when the grid has no header row', () => {
    // clientWidth/clientHeight, not the container's rect: a scrollbar takes up
    // room inside the container but paints over the cells behind it.
    expect(getVisibleCellBounds(createGrid(), null)).toEqual<Bounds>({
      top: 100,
      left: 200,
      right: 700,
      bottom: 500,
    })
  })

  test('excludes the sticky header row and the pinned columns', () => {
    const container = createGrid({
      headerBottom: 140,
      gutterRight: 240,
      pinnedLeftRight: 340,
      pinnedRightLeft: 650,
    })

    expect(getVisibleCellBounds(container, null)).toEqual<Bounds>({
      top: 140,
      left: 340,
      right: 650,
      bottom: 500,
    })
  })

  test('excludes the gutter when it is the only sticky column', () => {
    const container = createGrid({ headerBottom: 140, gutterRight: 240 })

    expect(getVisibleCellBounds(container, null)).toMatchObject({ left: 240 })
  })

  test('does not exclude the pinned columns for a cell that is itself pinned', () => {
    const container = createGrid({
      headerBottom: 140,
      gutterRight: 240,
      pinnedLeftRight: 340,
    })
    const pinnedCell = appendCell(container, 'dsg-cell-sticky-left', {})

    // A pinned cell scrolls with the columns pinned alongside it, so it can
    // never end up hidden behind them — only behind the header row.
    expect(getVisibleCellBounds(container, pinnedCell)).toMatchObject({
      top: 140,
      left: 200,
    })
  })

  test('does not exclude a right-pinned column for a cell that is itself right-pinned', () => {
    const container = createGrid({ headerBottom: 140, pinnedRightLeft: 650 })
    const pinnedCell = appendCell(container, 'dsg-cell-sticky-right', {})

    expect(getVisibleCellBounds(container, pinnedCell)).toMatchObject({
      right: 700,
    })
  })
})

describe('isCellOriginVisible', () => {
  const bounds: Bounds = { top: 140, left: 340, right: 650, bottom: 500 }

  test('is true for a cell inside the visible region', () => {
    expect(isCellOriginVisible({ top: 200, left: 400 }, bounds)).toBe(true)
  })

  test('is true for a cell whose content overflows the region it starts in', () => {
    // The popup is allowed to expand past the grid's right and bottom edges,
    // so only where it is anchored matters.
    expect(isCellOriginVisible({ top: 499, left: 649 }, bounds)).toBe(true)
  })

  test('is true within a sub-pixel of an edge', () => {
    expect(isCellOriginVisible({ top: 139.5, left: 339.5 }, bounds)).toBe(true)
  })

  test('is false for a cell scrolled behind the header row', () => {
    expect(isCellOriginVisible({ top: 120, left: 400 }, bounds)).toBe(false)
  })

  test('is false for a cell scrolled behind the pinned columns', () => {
    expect(isCellOriginVisible({ top: 200, left: 300 }, bounds)).toBe(false)
  })

  test('is false for a cell scrolled past the bottom or right edge', () => {
    expect(isCellOriginVisible({ top: 520, left: 400 }, bounds)).toBe(false)
    expect(isCellOriginVisible({ top: 200, left: 680 }, bounds)).toBe(false)
  })
})
