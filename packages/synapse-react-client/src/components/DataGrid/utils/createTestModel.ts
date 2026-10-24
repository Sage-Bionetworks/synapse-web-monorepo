import { GridModel, gridSchema } from '@/components/DataGrid/DataGridTypes'
import { s } from 'json-joy/lib/json-crdt-patch/index'
import { Model } from 'json-joy/lib/json-crdt/index'

/** Creates a model with columns `c0..cN` displayed in identity order, and cell values `r{row}c{col}`. */
export default function createTestModel(
  nRows: number,
  nCols: number,
  sid?: number,
): GridModel {
  const model = Model.create(gridSchema, sid)

  for (let i = 0; i < nCols; i++) {
    model.api.arr(['columnOrder']).push(s.con(i))
    // `set` (rather than `push`) fills the empty name slot the schema initializes the vector with
    model.api.vec(['columnNames']).set([[i, s.con(`c${i}`)]])
  }

  for (let i = 0; i < nRows; i++) {
    const data = []
    for (let j = 0; j < nCols; j++) {
      data.push(s.con(`r${i}c${j}`))
    }
    model.api.arr(['rows']).push(
      s.obj({
        data: s.vec(...data),
      }),
    )
  }

  return model
}
