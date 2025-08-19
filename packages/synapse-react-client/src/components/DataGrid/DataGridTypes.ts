import { Model } from 'json-joy/lib/json-crdt'
import { s } from 'json-joy/lib/json-crdt-patch'

const gridRowSchema = s.obj({
  data: s.vec(s.con('')),
  metadata: s.obj({
    synapseRow: s.obj({
      rowId: s.con(0),
      versionNumber: s.con(0),
      etag: s.con(''),
    }),
    validationResult: s.obj({
      isValid: s.con(true),
      validationErrorMessage: s.con(''),
      allValidationMessages: s.vec(s.con('')),
      validationException: s.obj({
        keyword: s.con(''),
        pointerToViolation: s.con(''),
        message: s.con(''),
        schemaLocation: s.con(''),
        causingExceptions: s.vec(s.con('')),
      }),
    }),
  }),
})

const _gridSchema = s.obj({
  doc_version: s.con('0.1.0'),
  columnNames: s.vec(s.con('')),
  columnOrder: s.arr([s.con(0)]),
  rows: s.arr([gridRowSchema]),
})

export interface JsonJoyMessage {
  sequenceNumber: number
  methodName: string
  payload?: string
}

export type QueryInputType = 'empty' | 'sql' | 'sessionId' | 'unknown'
export interface QueryInput {
  type: QueryInputType
  input: string
}

export type GridModel = ReturnType<typeof Model.create<typeof _gridSchema>>
export type GridModelSnapshot = ReturnType<GridModel['api']['getSnapshot']>

export interface Operation {
  type: 'UPDATE' | 'DELETE' | 'CREATE'
  fromRowIndex: number
  toRowIndex: number
}

export type DataGridRow = {
  [key: string]: string | number | boolean | null | undefined
}
