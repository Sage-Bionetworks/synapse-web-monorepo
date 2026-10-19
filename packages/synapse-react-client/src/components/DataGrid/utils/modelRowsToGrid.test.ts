import { GridModel, gridSchema } from '@/components/DataGrid/DataGridTypes'
import { applyModelChange } from '@/components/DataGrid/utils/applyModelChange'
import modelRowsToGrid from '@/components/DataGrid/utils/modelRowsToGrid'
import { ValidationResults } from '@sage-bionetworks/synapse-types'
import { s } from 'json-joy/lib/json-crdt-patch/index'
import { Model } from 'json-joy/lib/json-crdt/index'

const NULL_STRING_MESSAGE = 'expected type: String, found: Null'
const OPTIONAL_FIELD_C2_ERROR = `#/c2: ${NULL_STRING_MESSAGE}`

/** Creates a model with columns `c0..cN` displayed in identity order, and cell values `r{row}c{col}`. */
function createModel(nRows: number, nCols: number): GridModel {
  const model = Model.create(gridSchema)
  const columnIndices = Array.from({ length: nCols }, (_, index) => index)

  // `set` (rather than `push`) overwrites the empty name slot the schema initializes the vector with
  model.api
    .vec(['columnNames'])
    .set(columnIndices.map(index => [index, s.con(`c${index}`)]))
  model.api.arr(['columnOrder']).ins(
    0,
    columnIndices.map(index => s.con(index)),
  )
  for (let rowIndex = 0; rowIndex < nRows; rowIndex++) {
    model.api.arr(['rows']).push(
      s.obj({
        data: s.vec(
          ...columnIndices.map(index => s.con(`r${rowIndex}c${index}`)),
        ),
      }),
    )
  }
  return model
}

function setRowValidation(
  model: GridModel,
  rowIndex: number,
  isValid: boolean,
  allValidationMessages: string[],
) {
  model.api.obj(['rows', String(rowIndex)]).set({
    metadata: s.obj({
      rowValidation: s.con({
        isValid,
        allValidationMessages,
      } as ValidationResults),
    }),
  })
}

function setColumnOrder(model: GridModel, newColumnOrder: number[]) {
  applyModelChange(model, { type: 'REORDER_COLUMNS', newColumnOrder }, {})
}

function getGridRows(model: GridModel) {
  return modelRowsToGrid(model, model.api.getSnapshot())
}

describe('modelRowsToGrid', () => {
  it('maps displayed column values and validation state onto each row', () => {
    const model = createModel(2, 3)
    setRowValidation(model, 0, true, [])
    setRowValidation(model, 1, false, ['#/c1: must be a number'])

    const [validRow, invalidRow] = getGridRows(model)

    expect(validRow).toMatchObject({ c0: 'r0c0', c1: 'r0c1', c2: 'r0c2' })
    expect(validRow.__validationStatus).toBe('valid')
    expect(validRow.__cellValidationResults).toEqual(new Map())
    expect(invalidRow.__validationStatus).toBe('invalid')
    expect(invalidRow.__cellValidationResults).toEqual(
      new Map([['c1', ['must be a number']]]),
    )
  })

  it('leaves validation state unset when a row has not been validated', () => {
    const model = createModel(1, 2)

    const [row] = getGridRows(model)

    expect(row.__validationResults).toBeUndefined()
    expect(row.__cellValidationResults).toBeUndefined()
    expect(row.__validationStatus).toBe('pending')
  })

  describe('when a column has been removed', () => {
    it('omits the removed column and its validation errors, keeping errors for displayed columns', () => {
      const model = createModel(1, 3)
      setRowValidation(model, 0, false, [
        '#/c1: must be a number',
        OPTIONAL_FIELD_C2_ERROR,
      ])
      setColumnOrder(model, [0, 1])

      const [row] = getGridRows(model)

      expect(row).not.toHaveProperty('c2')
      expect(row.__cellValidationResults).toEqual(
        new Map([['c1', ['must be a number']]]),
      )
      expect(row.__validationStatus).toBe('invalid')
    })

    it('omits errors on the array items of a removed column', () => {
      const model = createModel(1, 3)
      setRowValidation(model, 0, false, [`#/c2/0: ${NULL_STRING_MESSAGE}`])
      setColumnOrder(model, [0, 1])

      const [row] = getGridRows(model)

      expect(row.__cellValidationResults).toEqual(new Map())
      expect(row.__validationStatus).toBe('valid')
    })

    it('shows a row as valid when all of its errors belong to removed columns', () => {
      const model = createModel(1, 4)
      setRowValidation(model, 0, false, [
        OPTIONAL_FIELD_C2_ERROR,
        `#/c3: ${NULL_STRING_MESSAGE}`,
      ])
      setColumnOrder(model, [0, 1])

      const [row] = getGridRows(model)

      expect(row.__cellValidationResults).toEqual(new Map())
      expect(row.__validationStatus).toBe('valid')
      // The hub's raw results are left untouched
      expect(row.__validationResults?.isValid).toBe(false)
    })

    it('keeps the row invalid when it also has errors that are not attributed to any column', () => {
      const model = createModel(2, 3)
      setRowValidation(model, 0, false, [
        '#: only 1 subschema matches out of 2',
        OPTIONAL_FIELD_C2_ERROR,
      ])
      setRowValidation(model, 1, false, [
        'unparseable message',
        OPTIONAL_FIELD_C2_ERROR,
      ])
      setColumnOrder(model, [0, 1])

      const [rowWithRowLevelError, rowWithUnparseableError] = getGridRows(model)

      expect(rowWithRowLevelError.__cellValidationResults).toEqual(
        new Map([['_row', ['only 1 subschema matches out of 2']]]),
      )
      expect(rowWithRowLevelError.__validationStatus).toBe('invalid')
      expect(rowWithUnparseableError.__cellValidationResults).toEqual(new Map())
      expect(rowWithUnparseableError.__validationStatus).toBe('invalid')
    })

    it('keeps errors for properties that are not columns in the grid', () => {
      const model = createModel(1, 3)
      setRowValidation(model, 0, false, [
        '#: required key [notAColumn] not found',
        OPTIONAL_FIELD_C2_ERROR,
      ])
      setColumnOrder(model, [0, 1])

      const [row] = getGridRows(model)

      expect(row.__cellValidationResults).toEqual(
        new Map([['notAColumn', ['required key [notAColumn] not found']]]),
      )
      expect(row.__validationStatus).toBe('invalid')
    })

    it('keeps row-level errors when a removed column is named like the row-level key', () => {
      const model = createModel(1, 2)
      model.api.vec(['columnNames']).set([[1, s.con('_row')]])
      setRowValidation(model, 0, false, [
        '#: only 1 subschema matches out of 2',
        `#/_row: ${NULL_STRING_MESSAGE}`,
      ])
      setColumnOrder(model, [0])

      const [row] = getGridRows(model)

      expect(row.__cellValidationResults).toEqual(
        new Map([['_row', ['only 1 subschema matches out of 2']]]),
      )
      expect(row.__validationStatus).toBe('invalid')
    })

    it('omits errors for a removed column whose name is escaped in the error pointer', () => {
      const model = createModel(1, 2)
      model.api.vec(['columnNames']).set([[1, s.con('a/b')]])
      setRowValidation(model, 0, false, [`#/a~1b: ${NULL_STRING_MESSAGE}`])
      setColumnOrder(model, [0])

      const [row] = getGridRows(model)

      expect(row.__cellValidationResults).toEqual(new Map())
      expect(row.__validationStatus).toBe('valid')
    })

    it('omits removed column errors from a row that is pending revalidation', () => {
      const model = createModel(1, 3)
      setRowValidation(model, 0, false, [
        '#/c1: must be a number',
        OPTIONAL_FIELD_C2_ERROR,
      ])
      setColumnOrder(model, [0, 1])
      model.api.vec(['rows', '0', 'data']).set([[1, s.con('edited')]])

      const [row] = getGridRows(model)

      expect(row.__cellValidationResults).toEqual(
        new Map([['c1', ['must be a number']]]),
      )
      expect(row.__validationStatus).toBe('pending')
    })

    it('restores the errors once the column is restored', () => {
      const model = createModel(1, 3)
      setRowValidation(model, 0, false, [OPTIONAL_FIELD_C2_ERROR])
      setColumnOrder(model, [0, 1])
      expect(getGridRows(model)[0].__validationStatus).toBe('valid')

      setColumnOrder(model, [0, 1, 2])

      const [row] = getGridRows(model)
      expect(row.c2).toBe('r0c2')
      expect(row.__cellValidationResults).toEqual(
        new Map([['c2', [NULL_STRING_MESSAGE]]]),
      )
      expect(row.__validationStatus).toBe('invalid')
    })
  })
})
