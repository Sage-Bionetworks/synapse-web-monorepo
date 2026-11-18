import { describe, test, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
  Column,
  DataSheetGrid,
  DataSheetGridRef,
  keyColumn,
  textColumn,
} from '../src'

vi.mock('react-resize-detector', () => ({
  useResizeDetector: () => ({ width: 100, height: 100 }),
}))

// Renders every row, so the active cell can be edited
vi.mock('@tanstack/react-virtual', () => {
  const useVirtualizer = ({
    count,
    estimateSize,
  }: {
    count: number
    estimateSize: (index: number) => number
  }) => {
    const items = Array.from({ length: count }, (_, index) => ({
      index,
      key: index,
      size: estimateSize(index),
      start: estimateSize(index) * index,
    }))
    return {
      getVirtualItems: () => items,
      getTotalSize: () => items.reduce((sum, item) => sum + item.size, 0),
      measure: () => undefined,
    }
  }

  const defaultRangeExtractor = (range: { start: number; end: number }) =>
    Array.from(
      { length: range.end - range.start + 1 },
      (_, i) => range.start + i,
    )

  return { useVirtualizer, defaultRangeExtractor }
})

const columns: Column[] = [
  keyColumn('firstName', textColumn),
  keyColumn('lastName', textColumn),
]

const value = [
  { firstName: 'Elon', lastName: 'Musk' },
  { firstName: 'Jeff', lastName: 'Bezos' },
]

function renderGrid() {
  const ref = { current: null as unknown as DataSheetGridRef }
  const onUndo = vi.fn()
  const onRedo = vi.fn()
  render(
    <>
      <DataSheetGrid
        value={value}
        columns={columns}
        ref={ref}
        onUndo={onUndo}
        onRedo={onRedo}
      />
      <label>
        Outside the grid
        <input />
      </label>
    </>,
  )
  return { ref, onUndo, onRedo }
}

function activateCell(ref: { current: DataSheetGridRef }) {
  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))
}

/** Presses Ctrl+Z on the focused element; returns false when the grid prevented the default */
function pressCtrlZ() {
  return fireEvent.keyDown(document.activeElement ?? document.body, {
    key: 'z',
    ctrlKey: true,
  })
}

describe('Undo and redo shortcuts', () => {
  test('call onUndo for Ctrl+Z and Cmd+Z while a cell is active', async () => {
    const { ref, onUndo, onRedo } = renderGrid()
    activateCell(ref)

    await userEvent.keyboard('{Control>}z{/Control}')
    await userEvent.keyboard('{Meta>}z{/Meta}')

    expect(onUndo).toHaveBeenCalledTimes(2)
    expect(onRedo).not.toHaveBeenCalled()
    expect(pressCtrlZ()).toBe(false)
  })

  test('call onRedo for Ctrl+Y, Ctrl+Shift+Z and Cmd+Shift+Z while a cell is active', async () => {
    const { ref, onUndo, onRedo } = renderGrid()
    activateCell(ref)

    await userEvent.keyboard('{Control>}y{/Control}')
    await userEvent.keyboard('{Control>}{Shift>}Z{/Shift}{/Control}')
    await userEvent.keyboard('{Meta>}{Shift>}Z{/Shift}{/Meta}')

    expect(onRedo).toHaveBeenCalledTimes(3)
    expect(onUndo).not.toHaveBeenCalled()
  })

  test('do nothing while no cell is active', async () => {
    const { onUndo, onRedo } = renderGrid()

    await userEvent.keyboard('{Control>}z{/Control}')
    await userEvent.keyboard('{Control>}y{/Control}')

    expect(onUndo).not.toHaveBeenCalled()
    expect(onRedo).not.toHaveBeenCalled()
    expect(pressCtrlZ()).toBe(true)
  })

  test("leave undo to the cell's editor while the cell is being edited", async () => {
    const { ref, onUndo } = renderGrid()
    activateCell(ref)

    await userEvent.keyboard('[Enter]')
    // The text editor is portaled outside the grid's DOM, and focusing it keeps the grid active
    await waitFor(() => expect(document.activeElement).toHaveClass('dsg-input'))
    expect(ref.current.activeCell).not.toBeNull()

    expect(pressCtrlZ()).toBe(true)
    expect(onUndo).not.toHaveBeenCalled()
  })

  test('stop once focus moves outside the grid', () => {
    const { ref, onUndo } = renderGrid()
    activateCell(ref)
    const outsideField = screen.getByRole('textbox', {
      name: 'Outside the grid',
    })

    act(() => outsideField.focus())

    expect(ref.current.activeCell).toBeNull()
    expect(pressCtrlZ()).toBe(true)
    expect(onUndo).not.toHaveBeenCalled()
  })
})
