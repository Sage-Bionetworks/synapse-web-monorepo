import { GRID_ROW_REACT_KEY_PROPERTY } from '@/components/DataGrid/utils/DataGridUtils'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { Model } from 'json-joy/lib/json-crdt'
import { s } from 'json-joy/lib/json-crdt-patch'
import { applyModelChange, ModelChange } from './applyModelChange'
import { gridSchema, ReplicaSelectionModel } from '../DataGridTypes'
import { getDefaultValueForProperty } from './applyModelChange'

function createModel() {
  const model = Model.create(gridSchema)

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
  let model = createModel()
  let change: ModelChange = {
    type: 'CREATE' as const,
    rowIndex: 0,
    rowData: { col1: 'value1', col2: 'value2' },
  }
  let schemaPropertyInfo: SchemaPropertiesMap = {}

  beforeEach(() => {
    model = createModel()
    change = {
      type: 'CREATE' as const,
      rowIndex: 0,
      rowData: { col1: 'value1', col2: 'value2' },
    }
    schemaPropertyInfo = {}
  })

  it('Creates a new row in the model', () => {
    model = createModel()
    change = {
      type: 'CREATE' as const,
      rowIndex: 0,
      rowData: { col1: 'value1', col2: 'value2' },
    }

    applyModelChange(model, change, schemaPropertyInfo)

    const snapshot = model.api.getSnapshot()
    expect(snapshot.rows).toHaveLength(1)
    expect(snapshot.rows[0].data).toEqual(['value1', 'value2'])
  })

  it('Updates an existing row in the model', () => {
    const model = createModel()

    applyModelChange(
      model,
      {
        type: 'CREATE' as const,
        rowIndex: 0,
        rowData: { col1: 'original1', col2: 'original2' },
      },
      schemaPropertyInfo,
    )

    applyModelChange(
      model,
      {
        type: 'UPDATE' as const,
        rowIndex: 0,
        updatedData: { col1: 'updated1' },
      },
      schemaPropertyInfo,
    )

    const snapshot = model.api.getSnapshot()
    expect(snapshot.rows[0].data).toEqual(['updated1', 'original2'])
  })

  it('Deletes a row from the model', () => {
    const model = createModel()

    applyModelChange(
      model,
      {
        type: 'CREATE' as const,
        rowIndex: 0,
        rowData: { col1: 'value1', col2: 'value2' },
      },
      schemaPropertyInfo,
    )

    applyModelChange(
      model,
      {
        type: 'DELETE' as const,
        rowIndex: 0,
      },
      schemaPropertyInfo,
    )

    const snapshot = model.api.getSnapshot()
    expect(snapshot.rows).toHaveLength(0)
  })

  it('CREATE fills missing columns with null when property is required', () => {
    const model = createModel()
    change = {
      type: 'CREATE',
      rowIndex: 0,
      rowData: { col1: 'only-col1' },
    }
    schemaPropertyInfo = {
      col1: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      col2: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
    }

    applyModelChange(model, change, schemaPropertyInfo)

    const snapshot = model.api.getSnapshot()
    expect(snapshot.rows).toHaveLength(1)
    // col2 should be null since not provided
    expect(snapshot.rows[0].data).toEqual(['only-col1', null])
  })

  it('CREATE fills missing columns with undefined when property is not required', () => {
    const model = createModel()
    change = {
      type: 'CREATE',
      rowIndex: 0,
      rowData: { col1: 'only-col1' },
    }
    schemaPropertyInfo = {
      col1: {
        type: { type: 'string', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
      col2: {
        type: { type: 'string', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }

    applyModelChange(model, change, schemaPropertyInfo)

    const snapshot = model.api.getSnapshot()
    expect(snapshot.rows).toHaveLength(1)
    // col2 should be null since not provided
    expect(snapshot.rows[0].data).toEqual(['only-col1', undefined])
  })

  it('UPDATE skips internal keys (starting with underscore) and unknown columns', () => {
    const model = createModel()

    applyModelChange(
      model,
      {
        type: 'CREATE',
        rowIndex: 0,
        rowData: { col1: 'a', col2: 'b' },
      },
      schemaPropertyInfo,
    )

    applyModelChange(
      model,
      {
        type: 'UPDATE',
        rowIndex: 0,
        updatedData: {
          [GRID_ROW_REACT_KEY_PROPERTY]: 'ignored',
          col2: 'updated2',
          col3: 'no-op',
        },
      },
      schemaPropertyInfo,
    )

    const snapshot = model.api.getSnapshot()
    // col1 unchanged, col2 updated
    expect(snapshot.rows[0].data).toEqual(['a', 'updated2'])
  })

  it('DELETE with count removes multiple rows', () => {
    const model = createModel()

    applyModelChange(
      model,
      {
        type: 'CREATE',
        rowIndex: 0,
        rowData: { col1: 'r0c1', col2: 'r0c2' },
      },
      schemaPropertyInfo,
    )
    applyModelChange(
      model,
      {
        type: 'CREATE',
        rowIndex: 1,
        rowData: { col1: 'r1c1', col2: 'r1c2' },
      },
      schemaPropertyInfo,
    )
    applyModelChange(
      model,
      {
        type: 'CREATE',
        rowIndex: 2,
        rowData: { col1: 'r2c1', col2: 'r2c2' },
      },
      schemaPropertyInfo,
    )

    applyModelChange(
      model,
      { type: 'DELETE', rowIndex: 0, count: 2 },
      schemaPropertyInfo,
    )

    const snapshot = model.api.getSnapshot()
    expect(snapshot.rows).toHaveLength(1)
    expect(snapshot.rows[0].data).toEqual(['r2c1', 'r2c2'])
  })

  it('SET_SELECTION sets replica selection and creates object if needed', () => {
    const model = createModel()

    const selection: ReplicaSelectionModel = {
      rowSelection: [{ rep: 1, seq: 1 }],
      rowSelectAll: false,
      columnSelectAll: false,
    }

    applyModelChange(
      model,
      {
        type: 'SET_SELECTION',
        replicaId: 'replica-A',
        selection,
      },
      schemaPropertyInfo,
    )

    const snapshot = model.api.getSnapshot()
    expect(snapshot.selection['replica-A']).toEqual(selection)
  })

  it('SET_SELECTION for multiple replicas coexists', () => {
    const model = createModel()

    const selA: ReplicaSelectionModel = {
      columnSelection: [{ rep: 1, seq: 10 }],
      rowSelectAll: true,
    }
    const selB: ReplicaSelectionModel = {
      rowSelection: [
        { rep: 2, seq: 20 },
        { rep: 2, seq: 21 },
      ],
      columnSelectAll: true,
    }

    applyModelChange(
      model,
      {
        type: 'SET_SELECTION',
        replicaId: 'A',
        selection: selA,
      },
      schemaPropertyInfo,
    )
    applyModelChange(
      model,
      {
        type: 'SET_SELECTION',
        replicaId: 'B',
        selection: selB,
      },
      schemaPropertyInfo,
    )

    const snapshot = model.api.getSnapshot()
    expect(snapshot.selection['A']).toEqual(selA)
    expect(snapshot.selection['B']).toEqual(selB)
  })
})

describe('getDefaultValueForProperty', () => {
  it('returns the value if the property exists in the row', () => {
    const row = { col1: 'value1', col2: null, col3: undefined }
    const schemaPropertyInfo: SchemaPropertiesMap = {
      col1: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      col2: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
    }

    expect(getDefaultValueForProperty(row, 'col1', schemaPropertyInfo)).toEqual(
      'value1',
    )
    expect(getDefaultValueForProperty(row, 'col2', schemaPropertyInfo)).toEqual(
      null,
    )
    expect(getDefaultValueForProperty(row, 'col3', schemaPropertyInfo)).toEqual(
      undefined,
    )
  })
  it('returns the expected value for missing values based on the schema', () => {
    const row = {} // all values missing
    const schemaPropertyInfo: SchemaPropertiesMap = {
      col1: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      col2: {
        type: { type: 'string', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }

    // required properties should be null
    expect(getDefaultValueForProperty(row, 'col1', schemaPropertyInfo)).toEqual(
      null,
    )
    // optional properties should be undefined
    expect(getDefaultValueForProperty(row, 'col2', schemaPropertyInfo)).toEqual(
      undefined,
    )
    // properties not in schema should be undefined
    expect(getDefaultValueForProperty(row, 'col3', schemaPropertyInfo)).toEqual(
      undefined,
    )
  })
})
