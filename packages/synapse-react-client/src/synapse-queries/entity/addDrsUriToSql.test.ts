// addDrsUriToSql.test.ts
import { describe, it, expect } from 'vitest'
import { addDrsUriToSql } from './useExportToCavatica'
import { SelectColumn } from '@sage-bionetworks/synapse-types'

// --- Minimal local stubs for typing the inputs in tests ---
enum ColumnType {
  STRING = 'STRING',
}
const c = (name: string): SelectColumn => ({
  name,
  columnType: ColumnType.STRING,
})

describe('addDrsUriToSql', () => {
  const fileId = 'id'
  const fileVer = 'currentVersion'
  const fileName = 'name'

  it('builds SQL selecting drs_uri, name, and quoted columns; filters out "name"; case-insensitive FROM', () => {
    const originalSql = 'SELECT foo, "name" FROM syn123'
    const selectColumns: SelectColumn[] = [
      c('age'),
      c('name'), // should be filtered out
      c('last seen'), // preserved (quoted)
    ]

    const sql = addDrsUriToSql(
      originalSql,
      selectColumns,
      fileId,
      fileName,
      fileVer,
      false,
    )

    expect(sql).toBe(
      `SELECT CONCAT('drs://repo-prod.prod.sagebase.org/syn', ${fileId}, '.', ${fileVer}) AS drs_uri, ${fileName} as name, "age","last seen" FROM syn123`,
    )
  })

  it('aliases spaces out of select column names when removeSpacesFromSelectColumns is true', () => {
    const originalSql = 'SELECT * FROM syn999'
    const selectColumns: SelectColumn[] = [c('age'), c('last seen')]

    const sql = addDrsUriToSql(
      originalSql,
      selectColumns,
      fileId,
      fileName,
      fileVer,
      true,
    )

    expect(sql).toBe(
      `SELECT CONCAT('drs://repo-prod.prod.sagebase.org/syn', ${fileId}, '.', ${fileVer}) AS drs_uri, ${fileName} as name, "age","last seen" as "lastseen" FROM syn999`,
    )
  })
})
