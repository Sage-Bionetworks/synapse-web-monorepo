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

export interface ModelSnapshot {
  columnNames: string[]
  columnOrder: number[]
  rows: string[]
}
