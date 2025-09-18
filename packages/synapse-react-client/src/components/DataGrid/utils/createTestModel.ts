import { GridModel, gridSchema } from '@/components/DataGrid/DataGridTypes'
import { s } from 'json-joy/lib/json-crdt-patch/index'
import { Model } from 'json-joy/lib/json-crdt/index'

export default function createTestModel(
  nRows: number,
  nCols: number,
): GridModel {
  const model = Model.create(gridSchema)

  for (let i = 0; i < nCols; i++) {
    model.api.arr(['columnOrder']).push(s.con(i))
    model.api.vec(['columnNames']).push(s.con(`c${i}`))
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
