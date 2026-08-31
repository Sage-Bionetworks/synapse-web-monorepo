import { test, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, act } from '@testing-library/react'
import {
  DataSheetGrid,
  Column,
  textColumn,
  keyColumn,
  DataSheetGridRef,
  checkboxColumn,
} from '../src'

vi.mock('react-resize-detector', () => ({
  useResizeDetector: () => ({ width: 100, height: 100 }),
}))

const data = [
  { active: false, firstName: 'Elon', lastName: 'Musk' },
  { active: true, firstName: 'Jeff', lastName: 'Bezos' },
  { active: false, firstName: 'Richard', lastName: 'Branson' },
]
const columns: Column[] = [
  keyColumn('active', checkboxColumn),
  keyColumn('firstName', textColumn),
  keyColumn('lastName', textColumn),
]

test('Up from cell', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() => ref.current.setActiveCell({ col: 1, row: 1 }))

  await userEvent.keyboard('[ArrowUp]')
  expect(ref.current.activeCell).toEqual({
    col: 1,
    colId: 'firstName',
    row: 0,
  })
})

test('Up from top row', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() => ref.current.setActiveCell({ col: 1, row: 0 }))

  await userEvent.keyboard('[ArrowUp]')
  expect(ref.current.activeCell).toEqual({
    col: 1,
    colId: 'firstName',
    row: 0,
  })
})

test('Up from selection', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() =>
    ref.current.setSelection({
      min: {
        col: 1,
        row: 1,
      },
      max: {
        col: 2,
        row: 2,
      },
    }),
  )

  await userEvent.keyboard('[ArrowUp]')
  expect(ref.current.selection).toEqual({
    max: {
      col: 1,
      colId: 'firstName',
      row: 0,
    },
    min: {
      col: 1,
      colId: 'firstName',
      row: 0,
    },
  })
})

test('Cmd + Up', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() => ref.current.setActiveCell({ col: 1, row: 2 }))

  await userEvent.keyboard('[MetaLeft>][ArrowUp][/MetaLeft]')
  expect(ref.current.activeCell).toEqual({
    col: 1,
    colId: 'firstName',
    row: 0,
  })
})

test('Ctrl + Up', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() => ref.current.setActiveCell({ col: 1, row: 2 }))

  await userEvent.keyboard('[ControlLeft>][ArrowUp][/ControlLeft]')
  expect(ref.current.activeCell).toEqual({
    col: 1,
    colId: 'firstName',
    row: 0,
  })
})

test('Shift + Up', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() => ref.current.setActiveCell({ col: 1, row: 2 }))

  await userEvent.keyboard('[ShiftLeft>][ArrowUp][/ShiftLeft]')
  expect(ref.current.selection).toEqual({
    min: {
      col: 1,
      colId: 'firstName',
      row: 1,
    },
    max: {
      col: 1,
      colId: 'firstName',
      row: 2,
    },
  })
})

test('Shift + Up from selection', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() =>
    ref.current.setSelection({
      min: { col: 1, row: 2 },
      max: { col: 1, row: 1 },
    }),
  )

  await userEvent.keyboard('[ShiftLeft>][ArrowUp][/ShiftLeft]')
  expect(ref.current.selection).toEqual({
    min: {
      col: 1,
      colId: 'firstName',
      row: 0,
    },
    max: {
      col: 1,
      colId: 'firstName',
      row: 2,
    },
  })
})

test('Shift + Up from selection already at the top', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() =>
    ref.current.setSelection({
      min: { col: 1, row: 2 },
      max: { col: 1, row: 0 },
    }),
  )

  await userEvent.keyboard('[ShiftLeft>][ArrowUp][/ShiftLeft]')
  expect(ref.current.selection).toEqual({
    min: {
      col: 1,
      colId: 'firstName',
      row: 0,
    },
    max: {
      col: 1,
      colId: 'firstName',
      row: 2,
    },
  })
})
