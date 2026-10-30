import {
  ColumnModel,
  ColumnTypeEnum,
  Row,
  SelectColumn,
  Table,
} from '@sage-bionetworks/synapse-types'
import {
  getDownloadListFileColumns,
  getDownloadListItems,
} from './downloadListFiles'

const nameColumn: ColumnModel = {
  id: '1',
  name: 'name',
  columnType: ColumnTypeEnum.STRING,
}
const idColumn: ColumnModel = {
  id: '2',
  name: 'id',
  columnType: ColumnTypeEnum.ENTITYID,
}
const fileColumn: ColumnModel = {
  id: '3',
  name: 'fileId',
  columnType: ColumnTypeEnum.ENTITYID,
}
const versionColumn: ColumnModel = {
  id: '4',
  name: 'fileVersion',
  columnType: ColumnTypeEnum.INTEGER,
}

function table(concreteType: Table['concreteType']): Table {
  return { id: 'syn123', name: 'table', concreteType } as Table
}
const entityView = table('org.sagebionetworks.repo.model.table.EntityView')
const dataset = table('org.sagebionetworks.repo.model.table.Dataset')
const virtualTable = table('org.sagebionetworks.repo.model.table.VirtualTable')

function itemsFor(
  rows: Row[],
  options: {
    table: Table
    columnModels: ColumnModel[]
    selectColumns?: SelectColumn[]
    fileIdColumnName?: string
    fileVersionColumnName?: string
  },
) {
  const { columnModels, selectColumns = columnModels } = options
  return getDownloadListItems(
    rows,
    selectColumns,
    getDownloadListFileColumns(
      options.table,
      columnModels,
      options.fileIdColumnName,
      options.fileVersionColumnName,
    ),
  )
}

describe('getDownloadListFileColumns', () => {
  it("uses the table's file column, unless fileIdColumnName names another", () => {
    const columnModels = [nameColumn, idColumn, fileColumn]
    expect(
      getDownloadListFileColumns(entityView, columnModels, undefined, undefined)
        .fileColumn,
    ).toEqual(idColumn)
    expect(
      getDownloadListFileColumns(entityView, columnModels, 'fileId', undefined)
        .fileColumn,
    ).toEqual(fileColumn)
  })

  it('names a version column only when fileVersionColumnName is set, with or without fileIdColumnName', () => {
    const columnModels = [idColumn, fileColumn, versionColumn]
    expect(
      getDownloadListFileColumns(
        virtualTable,
        columnModels,
        'fileId',
        undefined,
      ).fileVersionColumn,
    ).toBeUndefined()
    expect(
      getDownloadListFileColumns(
        virtualTable,
        columnModels,
        undefined,
        'fileVersion',
      ).fileVersionColumn,
    ).toEqual(versionColumn)
  })

  it.each([
    { table: entityView, rowsAreEntities: true },
    { table: dataset, rowsAreEntities: true },
    { table: virtualTable, rowsAreEntities: false },
    {
      table: table('org.sagebionetworks.repo.model.table.TableEntity'),
      rowsAreEntities: false,
    },
    { table: undefined, rowsAreEntities: false },
  ])(
    'treats rows of a $table.concreteType as entities: $rowsAreEntities',
    ({ table, rowsAreEntities }) => {
      expect(
        getDownloadListFileColumns(table, [idColumn], undefined, undefined)
          .rowsAreEntities,
      ).toBe(rowsAreEntities)
    },
  )
})

describe('getDownloadListItems', () => {
  it('adds file view rows at their row versions', () => {
    expect(
      itemsFor(
        [
          { rowId: 1, versionNumber: 4, values: ['a.txt', 'syn1'] },
          { rowId: 2, versionNumber: 7, values: ['b.txt', 'syn2'] },
        ],
        { table: entityView, columnModels: [nameColumn, idColumn] },
      ),
    ).toEqual([
      { fileEntityId: 'syn1', versionNumber: 4 },
      { fileEntityId: 'syn2', versionNumber: 7 },
    ])
  })

  it.each([entityView, dataset])(
    'uses the row ID and version of a $concreteType row when the query selects no file column',
    entity => {
      expect(
        itemsFor([{ rowId: 9, versionNumber: 2, values: ['c.txt'] }], {
          table: entity,
          columnModels: [nameColumn, idColumn],
          selectColumns: [nameColumn],
        }),
      ).toEqual([{ fileEntityId: 'syn9', versionNumber: 2 }])
    },
  )

  it("adds the current version of a table's rows without a version column, ignoring their row versions", () => {
    const items = itemsFor(
      [
        { rowId: 1, versionNumber: 3, values: ['a.txt', 'syn1'] },
        { rowId: 2, versionNumber: 5, values: ['dataset', 'syn5'] },
      ],
      { table: virtualTable, columnModels: [nameColumn, idColumn] },
    )
    expect(items.map(item => item.fileEntityId)).toEqual(['syn1', 'syn5'])
    for (const item of items) {
      expect(item).not.toHaveProperty('versionNumber', expect.anything())
    }
  })

  it('reads the named file and version columns, and adds the current version when the version is empty', () => {
    expect(
      itemsFor(
        [
          { values: ['syn100', 'syn1', '3'] },
          { values: ['syn101', 'syn2', null] },
        ],
        {
          table: virtualTable,
          columnModels: [idColumn, fileColumn, versionColumn],
          fileIdColumnName: 'fileId',
          fileVersionColumnName: 'fileVersion',
        },
      ),
    ).toEqual([
      { fileEntityId: 'syn1', versionNumber: 3 },
      { fileEntityId: 'syn2', versionNumber: undefined },
    ])
  })

  it('skips rows without a file', () => {
    expect(
      itemsFor([{ values: ['a.txt', null] }, { values: ['b.txt', 'syn2'] }], {
        table: virtualTable,
        columnModels: [nameColumn, idColumn],
      }),
    ).toEqual([{ fileEntityId: 'syn2' }])
    expect(
      itemsFor([{ rowId: 9, values: ['c.txt'] }], {
        table: virtualTable,
        columnModels: [nameColumn],
      }),
    ).toEqual([])
  })

  it('lists a file selected in several rows once, and each of its versions separately', () => {
    expect(
      itemsFor(
        [
          { values: ['syn1', '1'] },
          { values: ['syn1', '1'] },
          { values: ['syn1', '2'] },
        ],
        {
          table: virtualTable,
          columnModels: [fileColumn, versionColumn],
          fileIdColumnName: 'fileId',
          fileVersionColumnName: 'fileVersion',
        },
      ),
    ).toEqual([
      { fileEntityId: 'syn1', versionNumber: 1 },
      { fileEntityId: 'syn1', versionNumber: 2 },
    ])
  })
})
