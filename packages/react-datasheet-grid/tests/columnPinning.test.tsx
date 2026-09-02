import { test, expect, vi } from 'vitest'
import { render, act, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DataSheetGrid,
  Column,
  textColumn,
  keyColumn,
  DataSheetGridRef,
} from '../src'

vi.mock('react-resize-detector', () => ({
  useResizeDetector: () => ({ width: 800, height: 600 }),
}))

const columns: Column[] = [
  keyColumn('firstName', textColumn),
  keyColumn('lastName', textColumn),
  keyColumn('email', textColumn),
]

const data = [
  { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
  { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
  { firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com' },
]

class MockDataTransfer {
  data: Record<string, string> = {}

  setData(format: string, data: string) {
    this.data[format] = data
  }

  getData(format: string) {
    return this.data[format] || ''
  }
}

const copy = () => {
  const clipboardData = new MockDataTransfer()
  fireEvent.copy(document, { clipboardData: clipboardData })
  return clipboardData.data
}

test('pinFirstColumn renders without errors', () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  expect(() => {
    render(
      <DataSheetGrid
        value={data}
        columns={columns}
        pinFirstColumn={true}
        ref={ref}
      />,
    )
  }).not.toThrow()

  // Verify grid is initialized
  expect(ref.current).not.toBeNull()
})

test('pinFirstColumn=false does not apply sticky-left class', () => {
  render(
    <DataSheetGrid value={data} columns={columns} pinFirstColumn={false} />,
  )

  // Should not have any sticky-left cells
  const stickyLeftCells = document.querySelectorAll('.dsg-cell-sticky-left')
  expect(stickyLeftCells.length).toBe(0)
})

test('Can select cells in pinned column', () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Select a cell in the first data column (col 0)
  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))

  // Should be selected
  expect(ref.current.activeCell).toEqual({
    col: 0,
    colId: 'firstName',
    row: 0,
  })
})

test('Can select range spanning pinned and non-pinned columns', () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Select range from first column to third column
  act(() =>
    ref.current.setSelection({
      min: { col: 0, row: 0 },
      max: { col: 2, row: 0 },
    }),
  )

  // Should have selection spanning all three columns
  expect(ref.current.selection).toEqual({
    min: { col: 0, colId: 'firstName', row: 0 },
    max: { col: 2, colId: 'email', row: 0 },
  })
})

test('Arrow keys navigate across pinned column boundary', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Start at first column (pinned)
  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))
  expect(ref.current.activeCell?.col).toBe(0)

  // Press right arrow to move to second column
  await userEvent.keyboard('{ArrowRight}')
  expect(ref.current.activeCell?.col).toBe(1)

  // Press left arrow to go back to pinned column
  await userEvent.keyboard('{ArrowLeft}')
  expect(ref.current.activeCell?.col).toBe(0)
})

test('Select all includes pinned column', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Set active cell first
  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))

  // Select all with Cmd+A
  await userEvent.keyboard('[MetaLeft>]a[/MetaLeft]')

  // Should select entire grid including pinned column
  expect(ref.current.selection).toEqual({
    min: { col: 0, colId: 'firstName', row: 0 },
    max: { col: 2, colId: 'email', row: 2 },
  })
})

test('Copy includes pinned column data', () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Select first row including pinned column
  act(() =>
    ref.current.setSelection({
      min: { col: 0, row: 0 },
      max: { col: 2, row: 0 },
    }),
  )

  // Copy the data
  const clipboardData = copy()

  // Should include data from all three columns including the pinned one
  expect(clipboardData['text/plain']).toBe('John\tDoe\tjohn@example.com')
})

test('Tab key navigates from pinned to non-pinned column', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Start at pinned column
  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))
  expect(ref.current.activeCell?.col).toBe(0)

  // Press Tab to move to next column
  await userEvent.keyboard('{Tab}')
  expect(ref.current.activeCell?.col).toBe(1)
})

test('Can navigate vertically in pinned column', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Start at pinned column, first row
  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))
  expect(ref.current.activeCell?.row).toBe(0)

  // Press down arrow to move to next row
  await userEvent.keyboard('{ArrowDown}')
  expect(ref.current.activeCell?.col).toBe(0)
  expect(ref.current.activeCell?.row).toBe(1)

  // Press up arrow to go back
  await userEvent.keyboard('{ArrowUp}')
  expect(ref.current.activeCell?.row).toBe(0)
})

test('Selection on sticky column renders with sticky class', () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Select a cell in the pinned column
  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))

  // Check that the sticky active cell class is applied
  const stickyActiveCell = document.querySelector('.dsg-active-cell-sticky')
  expect(stickyActiveCell).not.toBeNull()
})

test('Selection on non-sticky column does not render sticky class', () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Select a cell in non-pinned column
  act(() => ref.current.setActiveCell({ col: 1, row: 0 }))

  // Check that regular (non-sticky) active cell is rendered
  const activeCell = document.querySelector('.dsg-active-cell')
  expect(activeCell).not.toBeNull()

  // Should not have the sticky class
  const stickyActiveCell = document.querySelector('.dsg-active-cell-sticky')
  expect(stickyActiveCell).toBeNull()
})

test('Selection rect for sticky columns has sticky class when all selected columns are sticky', () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Select a range within the pinned column only (multiple rows in col 0)
  act(() =>
    ref.current.setSelection({
      min: { col: 0, row: 0 },
      max: { col: 0, row: 1 },
    }),
  )

  // Should have sticky selection rect since all selected columns are sticky
  const stickySelectionRect = document.querySelector(
    '.dsg-selection-rect-sticky',
  )
  expect(stickySelectionRect).not.toBeNull()
})

test('Selection rect spanning sticky and non-sticky columns does not have sticky class', () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Select a range spanning pinned and non-pinned columns
  act(() =>
    ref.current.setSelection({
      min: { col: 0, row: 0 },
      max: { col: 1, row: 0 },
    }),
  )

  // Should not have sticky selection rect since selection spans non-sticky columns
  const stickySelectionRect = document.querySelector(
    '.dsg-selection-rect-sticky',
  )
  expect(stickySelectionRect).toBeNull()
})

test('Column marker has sticky class when selection is on sticky column', () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Select a cell in the pinned column
  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))

  // Check that the sticky column marker class is applied
  const stickyColMarker = document.querySelector(
    '.dsg-selection-col-marker-container-sticky',
  )
  expect(stickyColMarker).not.toBeNull()
})

test('Column marker does not have sticky class when selection is on non-sticky column', () => {
  const ref = { current: null as unknown as DataSheetGridRef }

  render(
    <DataSheetGrid
      value={data}
      columns={columns}
      pinFirstColumn={true}
      ref={ref}
    />,
  )

  // Select a cell in non-pinned column
  act(() => ref.current.setActiveCell({ col: 1, row: 0 }))

  // Should not have sticky column marker class
  const stickyColMarker = document.querySelector(
    '.dsg-selection-col-marker-container-sticky',
  )
  expect(stickyColMarker).toBeNull()
})
