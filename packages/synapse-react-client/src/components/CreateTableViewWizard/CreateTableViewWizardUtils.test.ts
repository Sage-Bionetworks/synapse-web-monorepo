import {
  getModalTitle,
  getPreviousStep,
  getStepAfterTypeSelection,
  isLastStep,
  maybeSetColumnIds,
  maybeSetDefiningSQL,
  maybeSetScopeIds,
  maybeSetViewTypeMask,
} from './CreateTableViewWizardUtils'
import {
  ColumnModel,
  Dataset,
  DATASET_COLLECTION_CONCRETE_TYPE_VALUE,
  DATASET_CONCRETE_TYPE_VALUE,
  DatasetCollection,
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
  EntityType,
  EntityView,
  MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
  MaterializedView,
  SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
  SubmissionView,
  Table,
  TABLE_ENTITY_CONCRETE_TYPE_VALUE,
  TableEntity,
  VIRTUAL_TABLE_CONCRETE_TYPE_VALUE,
  VirtualTable,
} from '@sage-bionetworks/synapse-types'

function getTableStub(entityType: EntityType): Table {
  switch (entityType) {
    case EntityType.TABLE:
      return {
        columnIds: [],
        isSearchEnabled: false,
        name: 'test',
        concreteType: TABLE_ENTITY_CONCRETE_TYPE_VALUE,
      } as TableEntity
    case EntityType.ENTITY_VIEW:
      return {
        columnIds: [],
        scopeIds: [],
        viewTypeMask: 1,
        isSearchEnabled: false,
        name: 'test',
        concreteType: ENTITY_VIEW_CONCRETE_TYPE_VALUE,
      } as EntityView

    case EntityType.SUBMISSION_VIEW:
      return {
        columnIds: [],
        scopeIds: [],
        isSearchEnabled: false,
        name: 'test',
        concreteType: SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
      } as SubmissionView
    case EntityType.DATASET:
      return {
        columnIds: [],
        items: [],
        isSearchEnabled: false,
        name: 'test',
        concreteType: DATASET_CONCRETE_TYPE_VALUE,
      } as Dataset
    case EntityType.DATASET_COLLECTION:
      return {
        columnIds: [],
        items: [],
        isSearchEnabled: false,
        name: 'test',
        concreteType: DATASET_COLLECTION_CONCRETE_TYPE_VALUE,
      } as DatasetCollection
    case EntityType.MATERIALIZED_VIEW:
      return {
        columnIds: [],
        isSearchEnabled: false,
        name: 'test',
        definingSQL: 'SELECT * FROM syn123',
        concreteType: MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
      } as MaterializedView
    case EntityType.VIRTUAL_TABLE:
      return {
        columnIds: [],
        isSearchEnabled: false,
        name: 'test',
        definingSQL: 'SELECT * FROM syn123',
        concreteType: VIRTUAL_TABLE_CONCRETE_TYPE_VALUE,
      } as VirtualTable
    default:
      throw new Error('Test helper not implemented')
  }
}

describe('CreateTableWizardUtils tests', () => {
  test('getModalTitle', () => {
    expect(getModalTitle('CHOOSE_TABLE_TYPE')).toBe('Create Table or View')
    expect(getModalTitle('CHOOSE_VIEW_TYPE')).toBe('Create View')
    expect(getModalTitle('ENTITY_VIEW_SCOPE', EntityType.ENTITY_VIEW)).toBe(
      'Define View Scope',
    )
    expect(
      getModalTitle('SUBMISSION_VIEW_SCOPE', EntityType.SUBMISSION_VIEW),
    ).toBe('Define Submission View Scope')
    expect(getModalTitle('TABLE_SQL')).toBe('Create a SQL-Defined View')
    expect(getModalTitle('TABLE_COLUMNS', EntityType.TABLE)).toBe(
      'Add Columns to Table',
    )
    expect(getModalTitle('TABLE_COLUMNS', EntityType.ENTITY_VIEW)).toBe(
      'Add Columns to View',
    )
    expect(getModalTitle('TABLE_NAME', EntityType.TABLE)).toBe(
      'Describe the Table',
    )
    expect(getModalTitle('TABLE_NAME', EntityType.ENTITY_VIEW)).toBe(
      'Describe the View',
    )
  })

  test('getPreviousStep', () => {
    expect(getPreviousStep('CHOOSE_VIEW_TYPE')).toBe('CHOOSE_TABLE_TYPE')
    expect(getPreviousStep('ENTITY_VIEW_SCOPE')).toBe('CHOOSE_VIEW_TYPE')
    expect(getPreviousStep('SUBMISSION_VIEW_SCOPE')).toBe('CHOOSE_VIEW_TYPE')
    expect(getPreviousStep('TABLE_SQL')).toBe('CHOOSE_VIEW_TYPE')
    expect(getPreviousStep('TABLE_COLUMNS', EntityType.TABLE)).toBe(
      'CHOOSE_TABLE_TYPE',
    )
    expect(getPreviousStep('TABLE_COLUMNS', EntityType.ENTITY_VIEW)).toBe(
      'ENTITY_VIEW_SCOPE',
    )
    expect(getPreviousStep('TABLE_COLUMNS', EntityType.SUBMISSION_VIEW)).toBe(
      'SUBMISSION_VIEW_SCOPE',
    )
    expect(getPreviousStep('TABLE_NAME', EntityType.TABLE)).toBe(
      'TABLE_COLUMNS',
    )
    expect(getPreviousStep('TABLE_NAME', EntityType.ENTITY_VIEW)).toBe(
      'TABLE_COLUMNS',
    )
    expect(getPreviousStep('TABLE_NAME', EntityType.SUBMISSION_VIEW)).toBe(
      'TABLE_COLUMNS',
    )

    expect(getPreviousStep('TABLE_NAME', EntityType.MATERIALIZED_VIEW)).toBe(
      'TABLE_SQL',
    )
    expect(getPreviousStep('TABLE_NAME', EntityType.VIRTUAL_TABLE)).toBe(
      'TABLE_SQL',
    )
  })
  test('isLastStep', () => {
    expect(isLastStep('CHOOSE_TABLE_TYPE')).toBe(false)
    expect(isLastStep('CHOOSE_VIEW_TYPE')).toBe(false)
    expect(isLastStep('ENTITY_VIEW_SCOPE')).toBe(false)
    expect(isLastStep('SUBMISSION_VIEW_SCOPE')).toBe(false)
    expect(isLastStep('TABLE_COLUMNS')).toBe(false)
    // TABLE_SQL can be moved to a separate step after PLFM-8209 is done
    expect(isLastStep('TABLE_SQL')).toBe(true)
    expect(isLastStep('TABLE_NAME')).toBe(true)
  })
  test('getStepAfterTypeSelection', () => {
    expect(getStepAfterTypeSelection(EntityType.TABLE)).toBe('TABLE_COLUMNS')
    expect(getStepAfterTypeSelection(EntityType.ENTITY_VIEW)).toBe(
      'ENTITY_VIEW_SCOPE',
    )
    expect(getStepAfterTypeSelection(EntityType.SUBMISSION_VIEW)).toBe(
      'SUBMISSION_VIEW_SCOPE',
    )
    expect(getStepAfterTypeSelection(EntityType.MATERIALIZED_VIEW)).toBe(
      'TABLE_SQL',
    )
    expect(getStepAfterTypeSelection(EntityType.VIRTUAL_TABLE)).toBe(
      'TABLE_SQL',
    )
  })

  describe('maybeSetColumnIds', () => {
    test.each<EntityType>([
      EntityType.TABLE,
      EntityType.ENTITY_VIEW,
      EntityType.SUBMISSION_VIEW,
      EntityType.DATASET,
      EntityType.DATASET_COLLECTION,
    ])('adds columnIds for types that support them - %s', entityType => {
      const entityToModify = getTableStub(entityType)
      const createdColumnModels: ColumnModel[] = [
        { id: '123', name: 'foo', columnType: 'STRING' },
      ]
      maybeSetColumnIds(entityToModify, entityType, createdColumnModels)
      expect(entityToModify.columnIds).toEqual(['123'])
    })

    test.each<EntityType>([
      EntityType.TABLE,
      EntityType.ENTITY_VIEW,
      EntityType.SUBMISSION_VIEW,
      EntityType.DATASET,
      EntityType.DATASET_COLLECTION,
    ])(
      'does not add columnIds if there are no createdColumnModels - %s',
      entityType => {
        const entityToModify = getTableStub(entityType)
        const createdColumnModels: ColumnModel[] = []
        maybeSetColumnIds(entityToModify, entityType, createdColumnModels)
        expect(entityToModify.columnIds).toEqual([])
      },
    )

    test.each<EntityType>([
      EntityType.MATERIALIZED_VIEW,
      EntityType.VIRTUAL_TABLE,
    ])(
      'does not add columnIds for types that do not support manually defining them - %s',
      entityType => {
        const entityToModify = getTableStub(entityType)
        const createdColumnModels: ColumnModel[] = [
          { id: '123', name: 'foo', columnType: 'STRING' },
        ]
        maybeSetColumnIds(entityToModify, entityType, createdColumnModels)
        expect(entityToModify.columnIds).not.toEqual(createdColumnModels)
      },
    )
  })
  describe('maybeSetScopeIds', () => {
    test.each<EntityType>([EntityType.ENTITY_VIEW, EntityType.SUBMISSION_VIEW])(
      'adds scopeIds for types that support them - %s',
      entityType => {
        const entityToModify = getTableStub(entityType)
        const createdScope: string[] = ['123']
        maybeSetScopeIds(entityToModify, entityType, createdScope)
        expect('scopeIds' in entityToModify).toBe(true)
        expect('scopeIds' in entityToModify && entityToModify.scopeIds).toEqual(
          ['123'],
        )
      },
    )

    test.each<EntityType>([
      EntityType.TABLE,
      EntityType.DATASET,
      EntityType.DATASET_COLLECTION,
      EntityType.MATERIALIZED_VIEW,
      EntityType.VIRTUAL_TABLE,
    ])(
      'does not add scopeIds for types that do not support manually defining them - %s',
      entityType => {
        const entityToModify = getTableStub(entityType)
        const createdScope: string[] = ['123']
        maybeSetScopeIds(entityToModify, entityType, createdScope)
        expect('scopeIds' in entityToModify).toBe(false)
      },
    )
  })
  describe('maybeSetViewTypeMask', () => {
    test('adds viewTypeMask for EntityView', () => {
      const entityType: EntityType = EntityType.ENTITY_VIEW
      const entityToModify = getTableStub(entityType) as EntityView

      const viewTypeMask: number = 5
      maybeSetViewTypeMask(entityToModify, entityType, viewTypeMask)
      expect(entityToModify.viewTypeMask).toEqual(viewTypeMask)
    })

    test.each<EntityType>([
      EntityType.TABLE,
      EntityType.SUBMISSION_VIEW,
      EntityType.DATASET,
      EntityType.DATASET_COLLECTION,
      EntityType.MATERIALIZED_VIEW,
      EntityType.VIRTUAL_TABLE,
    ])(
      'does not add viewTypeMask for types that do not support manually defining them - %s',
      entityType => {
        const entityToModify = getTableStub(entityType)
        const viewTypeMask: number = 5
        maybeSetViewTypeMask(entityToModify, entityType, viewTypeMask)
        expect('viewTypeMask' in entityToModify).toBe(false)
      },
    )
  })
  describe('maybeSetDefiningSQL', () => {
    test.each<EntityType>([
      EntityType.MATERIALIZED_VIEW,
      EntityType.VIRTUAL_TABLE,
    ])('adds definingSQL for types that support them - %s', entityType => {
      const entityToModify = getTableStub(entityType)
      const createdSql: string = "SELECT * FROM syn456 LEFT JOIN syn789 ON 'id'"
      maybeSetDefiningSQL(entityToModify, entityType, createdSql)
      expect('definingSQL' in entityToModify).toBe(true)
      expect(
        'definingSQL' in entityToModify && entityToModify.definingSQL,
      ).toEqual(createdSql)
    })

    test.each<EntityType>([
      EntityType.TABLE,
      EntityType.ENTITY_VIEW,
      EntityType.SUBMISSION_VIEW,
      EntityType.DATASET,
      EntityType.DATASET_COLLECTION,
    ])(
      'does not add scopeIds for types that do not support manually defining them - %s',
      entityType => {
        const entityToModify = getTableStub(entityType)
        const createdSql: string =
          "SELECT * FROM syn456 LEFT JOIN syn789 ON 'id'"
        maybeSetDefiningSQL(entityToModify, entityType, createdSql)
        expect('definingSQL' in entityToModify).toBe(false)
      },
    )
  })
})
