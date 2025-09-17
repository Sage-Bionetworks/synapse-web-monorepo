import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  ColumnModel,
  Dataset,
  DATASET_COLLECTION_CONCRETE_TYPE_VALUE,
  DATASET_CONCRETE_TYPE_VALUE,
  DatasetCollection,
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
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

function getTableStub(entityType: EntityType): Table {
  switch (entityType) {
    case EntityType.table:
      return {
        columnIds: [],
        isSearchEnabled: false,
        name: 'test',
        concreteType: TABLE_ENTITY_CONCRETE_TYPE_VALUE,
      } as TableEntity
    case EntityType.entityview:
      return {
        columnIds: [],
        scopeIds: [],
        viewTypeMask: 1,
        isSearchEnabled: false,
        name: 'test',
        concreteType: ENTITY_VIEW_CONCRETE_TYPE_VALUE,
      } as EntityView

    case EntityType.submissionview:
      return {
        columnIds: [],
        scopeIds: [],
        isSearchEnabled: false,
        name: 'test',
        concreteType: SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
      } as SubmissionView
    case EntityType.dataset:
      return {
        columnIds: [],
        items: [],
        isSearchEnabled: false,
        name: 'test',
        concreteType: DATASET_CONCRETE_TYPE_VALUE,
      } as Dataset
    case EntityType.datasetcollection:
      return {
        columnIds: [],
        items: [],
        isSearchEnabled: false,
        name: 'test',
        concreteType: DATASET_COLLECTION_CONCRETE_TYPE_VALUE,
      } as DatasetCollection
    case EntityType.materializedview:
      return {
        columnIds: [],
        isSearchEnabled: false,
        name: 'test',
        definingSQL: 'SELECT * FROM syn123',
        concreteType: MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
      } as MaterializedView
    case EntityType.virtualtable:
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
    expect(getModalTitle('ENTITY_VIEW_SCOPE', EntityType.entityview)).toBe(
      'Define View Scope',
    )
    expect(
      getModalTitle('SUBMISSION_VIEW_SCOPE', EntityType.submissionview),
    ).toBe('Define Submission View Scope')
    expect(getModalTitle('TABLE_SQL')).toBe('Create a SQL-Defined View')
    expect(getModalTitle('TABLE_COLUMNS', EntityType.table)).toBe(
      'Add Columns to Table',
    )
    expect(getModalTitle('TABLE_COLUMNS', EntityType.entityview)).toBe(
      'Add Columns to View',
    )
    expect(getModalTitle('TABLE_NAME', EntityType.table)).toBe(
      'Create the Table',
    )
    expect(getModalTitle('TABLE_NAME', EntityType.entityview)).toBe(
      'Create the View',
    )
  })

  test('getPreviousStep', () => {
    expect(getPreviousStep('CHOOSE_VIEW_TYPE')).toBe('CHOOSE_TABLE_TYPE')
    expect(getPreviousStep('ENTITY_VIEW_SCOPE')).toBe('CHOOSE_VIEW_TYPE')
    expect(getPreviousStep('SUBMISSION_VIEW_SCOPE')).toBe('CHOOSE_VIEW_TYPE')
    expect(getPreviousStep('TABLE_SQL')).toBe('CHOOSE_VIEW_TYPE')
    expect(getPreviousStep('TABLE_COLUMNS', EntityType.table)).toBe(
      'CHOOSE_TABLE_TYPE',
    )
    expect(getPreviousStep('TABLE_COLUMNS', EntityType.entityview)).toBe(
      'ENTITY_VIEW_SCOPE',
    )
    expect(getPreviousStep('TABLE_COLUMNS', EntityType.submissionview)).toBe(
      'SUBMISSION_VIEW_SCOPE',
    )
    expect(getPreviousStep('TABLE_NAME', EntityType.table)).toBe(
      'TABLE_COLUMNS',
    )
    expect(getPreviousStep('TABLE_NAME', EntityType.entityview)).toBe(
      'TABLE_COLUMNS',
    )
    expect(getPreviousStep('TABLE_NAME', EntityType.submissionview)).toBe(
      'TABLE_COLUMNS',
    )

    expect(getPreviousStep('TABLE_NAME', EntityType.materializedview)).toBe(
      'TABLE_SQL',
    )
    expect(getPreviousStep('TABLE_NAME', EntityType.virtualtable)).toBe(
      'TABLE_SQL',
    )
  })
  test('isLastStep', () => {
    expect(isLastStep('CHOOSE_TABLE_TYPE')).toBe(false)
    expect(isLastStep('CHOOSE_VIEW_TYPE')).toBe(false)
    expect(isLastStep('ENTITY_VIEW_SCOPE')).toBe(false)
    expect(isLastStep('SUBMISSION_VIEW_SCOPE')).toBe(false)
    expect(isLastStep('TABLE_COLUMNS')).toBe(false)
    expect(isLastStep('TABLE_SQL')).toBe(false)
    expect(isLastStep('TABLE_NAME')).toBe(true)
  })
  test('getStepAfterTypeSelection', () => {
    expect(getStepAfterTypeSelection(EntityType.table)).toBe('TABLE_COLUMNS')
    expect(getStepAfterTypeSelection(EntityType.entityview)).toBe(
      'ENTITY_VIEW_SCOPE',
    )
    expect(getStepAfterTypeSelection(EntityType.submissionview)).toBe(
      'SUBMISSION_VIEW_SCOPE',
    )
    expect(getStepAfterTypeSelection(EntityType.materializedview)).toBe(
      'TABLE_SQL',
    )
    expect(getStepAfterTypeSelection(EntityType.virtualtable)).toBe('TABLE_SQL')
  })

  describe('maybeSetColumnIds', () => {
    test.each<EntityType>([
      EntityType.table,
      EntityType.entityview,
      EntityType.submissionview,
      EntityType.dataset,
      EntityType.datasetcollection,
    ])('adds columnIds for types that support them - %s', entityType => {
      const entityToModify = getTableStub(entityType)
      const createdColumnModels: ColumnModel[] = [
        { id: '123', name: 'foo', columnType: 'STRING' },
      ]
      maybeSetColumnIds(entityToModify, entityType, createdColumnModels)
      expect(entityToModify.columnIds).toEqual(['123'])
    })

    test.each<EntityType>([
      EntityType.table,
      EntityType.entityview,
      EntityType.submissionview,
      EntityType.dataset,
      EntityType.datasetcollection,
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
      EntityType.materializedview,
      EntityType.virtualtable,
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
    test.each<EntityType>([EntityType.entityview, EntityType.submissionview])(
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
      EntityType.table,
      EntityType.dataset,
      EntityType.datasetcollection,
      EntityType.materializedview,
      EntityType.virtualtable,
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
      const entityType: EntityType = EntityType.entityview
      const entityToModify = getTableStub(entityType) as EntityView

      const viewTypeMask: number = 5
      maybeSetViewTypeMask(entityToModify, entityType, viewTypeMask)
      expect(entityToModify.viewTypeMask).toEqual(viewTypeMask)
    })

    test.each<EntityType>([
      EntityType.table,
      EntityType.submissionview,
      EntityType.dataset,
      EntityType.datasetcollection,
      EntityType.materializedview,
      EntityType.virtualtable,
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
      EntityType.materializedview,
      EntityType.virtualtable,
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
      EntityType.table,
      EntityType.entityview,
      EntityType.submissionview,
      EntityType.dataset,
      EntityType.datasetcollection,
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
