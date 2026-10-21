import { GridModel } from '@/components/DataGrid/DataGridTypes'
import { applyModelChange } from '@/components/DataGrid/utils/applyModelChange'
import createTestModel from '@/components/DataGrid/utils/createTestModel'
import modelRowsToGrid from '@/components/DataGrid/utils/modelRowsToGrid'
import { ValidationResults } from '@sage-bionetworks/synapse-types'
import { s } from 'json-joy/lib/json-crdt-patch/index'

const NULL_STRING_MESSAGE = 'expected type: String, found: Null'
const OPTIONAL_FIELD_C2_ERROR = `#/c2: ${NULL_STRING_MESSAGE}`

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
    const model = createTestModel(2, 3)
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
    const model = createTestModel(1, 2)

    const [row] = getGridRows(model)

    expect(row.__validationResults).toBeUndefined()
    expect(row.__cellValidationResults).toBeUndefined()
    expect(row.__validationStatus).toBe('pending')
  })

  describe('when a column has been removed', () => {
    it('omits the removed column and its validation errors, keeping errors for displayed columns', () => {
      const model = createTestModel(1, 3)
      setRowValidation(model, 0, false, [
        '#/c1: must be a number',
        OPTIONAL_FIELD_C2_ERROR,
        '#: extraneous key [c2] is not permitted',
      ])
      setColumnOrder(model, [0, 1])

      const [row] = getGridRows(model)

      expect(row).not.toHaveProperty('c2')
      expect(row.__cellValidationResults).toEqual(
        new Map([['c1', ['must be a number']]]),
      )
      expect(row.__validationStatus).toBe('invalid')
      // The hub's raw results are left untouched
      expect(row.__validationResults?.allValidationMessages).toHaveLength(3)
    })

    it('omits errors for a removed column whose name contains a colon', () => {
      const model = createTestModel(1, 2)
      model.api.vec(['columnNames']).set([[1, s.con('time:utc')]])
      setRowValidation(model, 0, false, [`#/time:utc: ${NULL_STRING_MESSAGE}`])
      setColumnOrder(model, [0])

      const [row] = getGridRows(model)

      expect(row.__cellValidationResults).toEqual(new Map())
      expect(row.__validationStatus).toBe('valid')
    })

    it('omits removed column errors from a row that is pending revalidation', () => {
      const model = createTestModel(1, 3)
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
      const model = createTestModel(1, 3)
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
