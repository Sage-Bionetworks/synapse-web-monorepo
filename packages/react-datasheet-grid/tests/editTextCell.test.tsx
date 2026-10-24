import { test, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { act, render, waitFor, fireEvent } from '@testing-library/react'
import { StrictMode } from 'react'
import {
  Column,
  createTextColumn,
  DataSheetGridRef,
  keyColumn,
  textColumn,
} from '../src'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DataWrapper } from './helpers/DataWrapper'

vi.mock('react-resize-detector', () => ({
  useResizeDetector: () => ({ width: 100, height: 100 }),
}))

vi.mock('@tanstack/react-virtual', () => {
  const buildItems = (count: number, estimate: (index: number) => number) =>
    Array.from({ length: count }, (_, index) => ({
      index,
      key: index,
      size: estimate(index),
      start: estimate(index) * index,
    }))

  const useVirtualizer = ({
    count,
    estimateSize,
  }: {
    count: number
    estimateSize: (index: number) => number
  }) => {
    const items = buildItems(count, estimateSize)
    const total = items.reduce((sum, item) => sum + item.size, 0)
    return {
      getVirtualItems: () => items,
      getTotalSize: () => total,
      measure: () => undefined,
    }
  }

  const defaultRangeExtractor = (range: { start: number; end: number }) => {
    const extracted: number[] = []
    for (let i = range.start; i <= range.end; i += 1) {
      extracted.push(i)
    }
    return extracted
  }

  return { useVirtualizer, defaultRangeExtractor }
})

const columns: Column[] = [
  keyColumn('firstName', textColumn),
  keyColumn('lastName', textColumn),
]

const lazyColumns: Column[] = [
  keyColumn('firstName', createTextColumn({ continuousUpdates: false })),
  keyColumn('lastName', createTextColumn({ continuousUpdates: false })),
]

const waitForActiveInput = async () => {
  await waitFor(() => {
    expect(document.activeElement).toHaveClass('dsg-input')
  })

  return document.activeElement as HTMLInputElement
}

const replaceCellText = async (text: string) => {
  if (!text.length) {
    return
  }

  // First character triggers edit mode via keyboard event on document
  await userEvent.keyboard(text[0])

  // Wait for input to be focused
  const input = await waitForActiveInput()

  // Use fireEvent.change to reliably set the input value
  fireEvent.change(input, { target: { value: text } })
}

const typeInActiveEditor = async (text: string) => {
  if (!text.length) {
    return
  }

  const input = await waitForActiveInput()

  // Get current value and selection, then append/insert text
  const currentValue = input.value
  const selectionStart = input.selectionStart ?? currentValue.length
  const selectionEnd = input.selectionEnd ?? currentValue.length
  const newValue =
    currentValue.slice(0, selectionStart) +
    text +
    currentValue.slice(selectionEnd)

  fireEvent.change(input, { target: { value: newValue } })
}

const setActiveCellAndWait = async (
  ref: { current: DataSheetGridRef },
  cell: { col: number; row: number },
) => {
  act(() => ref.current.setActiveCell(cell))
  await waitFor(() => {
    expect(ref.current.activeCell?.col).toBe(cell.col)
    expect(ref.current.activeCell?.row).toBe(cell.row)
  })
}

const setSelectionAndWait = async (
  ref: { current: DataSheetGridRef },
  selection: {
    min: { col: number; row: number }
    max: { col: number; row: number }
  },
) => {
  act(() => ref.current.setSelection(selection))
  await waitFor(() => {
    expect(ref.current.selection?.min.row).toBe(selection.min.row)
    expect(ref.current.selection?.max.row).toBe(selection.max.row)
  })
}

test('Type to replace', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const data = {
    current: [
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ],
  }

  render(<DataWrapper dataRef={data} dsgRef={ref} columns={columns} />)

  await setActiveCellAndWait(ref, { col: 0, row: 0 })

  await replaceCellText('Kimbal')

  await waitFor(() => {
    expect(data.current).toEqual([
      { firstName: 'Kimbal', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ])
  })

  await userEvent.keyboard('[Enter]')
  expect(ref.current.activeCell).toEqual({
    col: 0,
    colId: 'firstName',
    row: 1,
  })
})

test('Type to replace from selection', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const data = {
    current: [
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ],
  }

  render(<DataWrapper dataRef={data} dsgRef={ref} columns={columns} />)

  await setSelectionAndWait(ref, {
    min: { col: 0, row: 0 },
    max: { col: 1, row: 1 },
  })

  await replaceCellText('Kimbal')
  await waitFor(() => {
    expect(data.current).toEqual([
      { firstName: 'Kimbal', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ])
  })
  expect(ref.current.selection).toEqual({
    min: { col: 0, colId: 'firstName', row: 0 },
    max: { col: 0, colId: 'firstName', row: 0 },
  })

  await userEvent.keyboard('[Enter]')
  expect(ref.current.activeCell).toEqual({
    col: 0,
    colId: 'firstName',
    row: 1,
  })
})

test('Enter to edit', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const data = {
    current: [
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ],
  }

  render(<DataWrapper dataRef={data} dsgRef={ref} columns={columns} />)

  await setActiveCellAndWait(ref, { col: 0, row: 1 })

  await userEvent.keyboard('[Enter]')
  await userEvent.keyboard('[ArrowRight]')
  await typeInActiveEditor('rey')
  await waitFor(() => {
    expect(data.current).toEqual([
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeffrey', lastName: 'Bezos' },
    ])
  })
  await userEvent.keyboard('[Enter]')
  expect(ref.current.activeCell).toEqual({
    col: 0,
    colId: 'firstName',
    row: 1,
  })
})

test('Non-ascii character to edit', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const data = {
    current: [
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ],
  }

  render(<DataWrapper dataRef={data} dsgRef={ref} columns={columns} />)

  await setActiveCellAndWait(ref, { col: 0, row: 1 })

  await replaceCellText('ş')
  await waitFor(() => {
    expect(data.current).toEqual([
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'ş', lastName: 'Bezos' },
    ])
  })
})

test('Lazy cell validate with Enter', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const data = {
    current: [
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ],
  }

  render(<DataWrapper dataRef={data} dsgRef={ref} columns={lazyColumns} />)

  await setActiveCellAndWait(ref, { col: 0, row: 0 })

  await replaceCellText('Kimbal')
  expect(data.current).toEqual([
    { firstName: 'Elon', lastName: 'Musk' },
    { firstName: 'Jeff', lastName: 'Bezos' },
  ])
  await userEvent.keyboard('[Enter]')
  expect(data.current).toEqual([
    { firstName: 'Kimbal', lastName: 'Musk' },
    { firstName: 'Jeff', lastName: 'Bezos' },
  ])
  expect(ref.current.activeCell).toEqual({
    col: 0,
    colId: 'firstName',
    row: 1,
  })
})

test('Lazy cell validate with Arrow', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const data = {
    current: [
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ],
  }

  render(<DataWrapper dataRef={data} dsgRef={ref} columns={lazyColumns} />)

  await setActiveCellAndWait(ref, { col: 0, row: 1 })

  await userEvent.keyboard('[Enter]')
  await userEvent.keyboard('[ArrowRight]')
  await typeInActiveEditor('rey')
  await waitFor(() => {
    expect(data.current).toEqual([
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ])
  })
  await userEvent.keyboard('[ArrowUp]')
  await waitFor(() => {
    expect(data.current).toEqual([
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeffrey', lastName: 'Bezos' },
    ])
  })
  expect(ref.current.activeCell).toEqual({
    col: 0,
    colId: 'firstName',
    row: 0,
  })
})

test('Lazy cell validate with Tab', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const data = {
    current: [
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ],
  }

  render(<DataWrapper dataRef={data} dsgRef={ref} columns={lazyColumns} />)

  await setActiveCellAndWait(ref, { col: 0, row: 0 })

  await replaceCellText('Kimbal')
  expect(data.current).toEqual([
    { firstName: 'Elon', lastName: 'Musk' },
    { firstName: 'Jeff', lastName: 'Bezos' },
  ])
  await userEvent.tab()
  expect(data.current).toEqual([
    { firstName: 'Kimbal', lastName: 'Musk' },
    { firstName: 'Jeff', lastName: 'Bezos' },
  ])
  expect(ref.current.activeCell).toEqual({
    col: 1,
    colId: 'lastName',
    row: 0,
  })
})

test('Lazy cell cancel with Escape', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const data = {
    current: [
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ],
  }

  render(<DataWrapper dataRef={data} dsgRef={ref} columns={lazyColumns} />)

  await setActiveCellAndWait(ref, { col: 0, row: 0 })

  await replaceCellText('Kimbal')
  await userEvent.keyboard('[Escape]')
  expect(data.current).toEqual([
    { firstName: 'Elon', lastName: 'Musk' },
    { firstName: 'Jeff', lastName: 'Bezos' },
  ])
})

test('Edit cell auto add row', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const data = {
    current: [
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeff', lastName: 'Bezos' },
    ],
  }

  render(
    <DataWrapper dataRef={data} dsgRef={ref} columns={columns} autoAddRow />,
  )

  await setActiveCellAndWait(ref, { col: 0, row: 1 })

  await userEvent.keyboard('[Enter]')
  await userEvent.keyboard('[ArrowRight]')
  await typeInActiveEditor('rey')
  await waitFor(() => {
    expect(data.current).toEqual([
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeffrey', lastName: 'Bezos' },
    ])
  })

  await userEvent.keyboard('[Enter]')
  await waitFor(() => {
    expect(data.current).toEqual([
      { firstName: 'Elon', lastName: 'Musk' },
      { firstName: 'Jeffrey', lastName: 'Bezos' },
      {},
    ])
  })
})

// Display formatting that does not round-trip through parseUserInput, like a locale-grouped number:
// committing the displayed text would turn 1234 into the string '1,234'.
const groupedNumberColumns: Column[] = [
  keyColumn(
    'count',
    createTextColumn<number | string | null>({
      continuousUpdates: false,
      formatBlurredInput: value =>
        typeof value === 'number' ? value.toLocaleString('en-US') : '',
      formatInputOnFocus: value => String(value ?? ''),
      parseUserInput: value => {
        const parsed = Number(value)
        return Number.isNaN(parsed) ? value : parsed
      },
    }),
  ),
]

test('Lazy cell does not write its displayed value back on mount in StrictMode', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const initial = [{ count: 1234 }, { count: 5 }]
  const data = { current: initial }

  render(
    <StrictMode>
      <DataWrapper dataRef={data} dsgRef={ref} columns={groupedNumberColumns} />
    </StrictMode>,
  )

  await waitFor(() => {
    expect(document.querySelectorAll('.dsg-input')).toHaveLength(2)
  })
  expect(data.current).toBe(initial)
})

test('Lazy cell focused and blurred without typing keeps its value in StrictMode', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const initial = [{ count: 1234 }, { count: 5 }]
  const data = { current: initial }

  render(
    <StrictMode>
      <DataWrapper dataRef={data} dsgRef={ref} columns={groupedNumberColumns} />
    </StrictMode>,
  )

  await setActiveCellAndWait(ref, { col: 0, row: 0 })
  await userEvent.keyboard('[Enter]')
  await waitForActiveInput()
  await userEvent.keyboard('[Enter]')

  expect(data.current).toBe(initial)
})

test('Lazy cell still commits a typed edit in StrictMode', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  const data = { current: [{ count: 1234 }, { count: 5 }] }

  render(
    <StrictMode>
      <DataWrapper dataRef={data} dsgRef={ref} columns={groupedNumberColumns} />
    </StrictMode>,
  )

  await setActiveCellAndWait(ref, { col: 0, row: 0 })
  await replaceCellText('42')
  await userEvent.keyboard('[Enter]')

  expect(data.current).toEqual([{ count: 42 }, { count: 5 }])
})
