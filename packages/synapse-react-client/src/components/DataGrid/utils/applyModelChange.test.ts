import { act } from '@testing-library/react'
import { Model } from 'json-joy/lib/json-crdt'
import { s } from 'json-joy/lib/json-crdt-patch'
import { applyModelChange } from './applyModelChange'

const gridRowSchema = s.obj({
  data: s.vec(s.con('')),
  metadata: s.obj({
    synapseRow: s.obj({
      rowId: s.con(0),
      versionNumber: s.con(0),
      etag: s.con(''),
    }),
    rowValidation: s.con(undefined),
  }),
})

const schema = s.obj({
  doc_version: s.con('0.1.0'),
  columnNames: s.vec(s.con('')),
  columnOrder: s.arr([s.con(0)]),
  rows: s.arr([gridRowSchema]),
})

function createModel() {
  const model = Model.create(schema)

  // Set up columns
  const columnNamesVec = model.api.vec(['columnNames'])
  columnNamesVec?.set([
    [0, s.con('col1')],
    [1, s.con('col2')],
  ])

  // Remove the initial row created by the schema so tests start with empty grid
  const rowsArr = model.api.arr(['rows'])
  if (rowsArr && rowsArr.length() > 0) {
    rowsArr.del(0, rowsArr.length())
  }

  return model
}

describe('applyModelChange', () => {
  it('Creates a new row in the model', () => {
    const model = createModel()
    const change = {
      type: 'CREATE' as const,
      rowIndex: 0,
      rowData: { col1: 'value1', col2: 'value2' },
    }

    act(() => {
      applyModelChange(model, change)
    })

    const snapshot = model.api.getSnapshot()
    expect(snapshot.rows).toHaveLength(1)
    expect(snapshot.rows[0].data).toEqual(['value1', 'value2'])
  })

  it('Updates an existing row in the model', () => {
    const model = createModel()

    act(() => {
      applyModelChange(model, {
        type: 'CREATE' as const,
        rowIndex: 0,
        rowData: { col1: 'original1', col2: 'original2' },
      })
    })

    act(() => {
      applyModelChange(model, {
        type: 'UPDATE' as const,
        rowIndex: 0,
        updatedData: { col1: 'updated1' },
      })
    })

    const snapshot = model.api.getSnapshot()
    expect(snapshot.rows[0].data).toEqual(['updated1', 'original2'])
  })

  it('Deletes a row from the model', () => {
    const model = createModel()

    act(() => {
      applyModelChange(model, {
        type: 'CREATE' as const,
        rowIndex: 0,
        rowData: { col1: 'value1', col2: 'value2' },
      })
    })

    act(() => {
      applyModelChange(model, {
        type: 'DELETE' as const,
        rowIndex: 0,
      })
    })

    const snapshot = model.api.getSnapshot()
    expect(snapshot.rows).toHaveLength(0)
  })
})
