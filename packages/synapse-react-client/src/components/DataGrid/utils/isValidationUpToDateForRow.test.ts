import { GridModel, gridSchema } from '@/components/DataGrid/DataGridTypes'
import { isValidationUpToDateForRow } from '@/components/DataGrid/utils/isValidationUpToDateForRow'
import { Model, s } from 'json-joy/lib/json-crdt'
import { beforeEach } from 'vitest'

describe('isValidationUpToDateForRow', () => {
  let model: GridModel = Model.create(gridSchema)
  beforeEach(() => {
    model = Model.create(gridSchema)
  })

  it('returns true when validation is newer than data', () => {
    model.api.arr(['rows']).push(
      s.obj({
        data: s.vec(s.con('foo')),
      }),
    )
    model.api.obj(['rows', '0']).set({
      metadata: s.obj({
        rowValidation: s.con({ isValid: true, allValidationMessages: [] }),
      }),
    })

    expect(isValidationUpToDateForRow(model, 0)).toBe(true)
  })
  it('returns false when data is newer than validation', () => {
    model.api.arr(['rows']).push(
      s.obj({
        data: s.vec(s.con('foo')),
      }),
    )
    model.api.obj(['rows', '0']).set({
      metadata: s.obj({
        rowValidation: s.con({ isValid: true, allValidationMessages: [] }),
      }),
    })

    // simulate updating the data, but validation has not updated yet
    model.api.vec(['rows', '0', 'data']).set([[0, s.con('bar')]])

    expect(isValidationUpToDateForRow(model, 0)).toBe(false)
  })

  it('handles case where there is no validation info', () => {
    model.api.arr(['rows']).push(
      s.obj({
        data: s.vec(s.con('foo')),
      }),
    )

    expect(isValidationUpToDateForRow(model, 0)).toBe(false)
  })

  it('handles case where there is no data vector', () => {
    model.api.arr(['rows']).push(s.obj({}))

    expect(isValidationUpToDateForRow(model, 0)).toBe(false)
  })
})
