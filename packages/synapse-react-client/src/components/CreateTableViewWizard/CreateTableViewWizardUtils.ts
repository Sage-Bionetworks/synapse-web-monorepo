import {
  ColumnModel,
  Entity,
  EntityType,
  EntityView,
  MaterializedView,
  SubmissionView,
  Table,
  VirtualTable,
} from '@sage-bionetworks/synapse-types'
import { entityTypeToFriendlyName } from '../../utils/functions/EntityTypeUtils'

export type CreateTableViewWizardStep =
  | 'CHOOSE_TABLE_TYPE'
  | 'CHOOSE_VIEW_TYPE'
  | 'ENTITY_VIEW_SCOPE'
  | 'SUBMISSION_VIEW_SCOPE'
  | 'TABLE_COLUMNS'
  | 'TABLE_SQL'
  | 'TABLE_NAME'

export function getModalTitle(
  step: CreateTableViewWizardStep,
  entityType?: EntityType,
): string {
  switch (step) {
    case 'CHOOSE_TABLE_TYPE':
      return 'Create Table or View'
    case 'CHOOSE_VIEW_TYPE':
      return 'Create View'
    case 'ENTITY_VIEW_SCOPE':
    case 'SUBMISSION_VIEW_SCOPE':
      return `Define ${entityTypeToFriendlyName(entityType!)} Scope`
    case 'TABLE_SQL':
      return 'Create a SQL-Defined View'

    case 'TABLE_COLUMNS':
      return `Add Columns to ${entityTypeToFriendlyName(entityType!)}`

    case 'TABLE_NAME':
      return `Describe the ${entityTypeToFriendlyName(entityType!)}`
  }
}

export function getPreviousStep(
  currentStep: CreateTableViewWizardStep,
  entityType?: EntityType,
): CreateTableViewWizardStep {
  switch (currentStep) {
    case 'CHOOSE_TABLE_TYPE':
      // This should never happen
      break
    case 'CHOOSE_VIEW_TYPE':
      return 'CHOOSE_TABLE_TYPE'
    case 'ENTITY_VIEW_SCOPE':
    case 'SUBMISSION_VIEW_SCOPE':
    case 'TABLE_SQL':
      return 'CHOOSE_VIEW_TYPE'
    case 'TABLE_COLUMNS':
      // If this is a table, then go back to the table type selection
      if (entityType === EntityType.TABLE) {
        return 'CHOOSE_TABLE_TYPE'
      }
      // If this is a view, go back to scope selection
      if (entityType === EntityType.ENTITY_VIEW) {
        return 'ENTITY_VIEW_SCOPE'
      }
      if (entityType === EntityType.SUBMISSION_VIEW) {
        return 'SUBMISSION_VIEW_SCOPE'
      }
      break
    case 'TABLE_NAME':
      if (
        entityType === EntityType.TABLE ||
        entityType === EntityType.ENTITY_VIEW ||
        entityType === EntityType.SUBMISSION_VIEW
      ) {
        return 'TABLE_COLUMNS'
      } else if (
        entityType === EntityType.MATERIALIZED_VIEW ||
        entityType === EntityType.VIRTUAL_TABLE
      ) {
        // TODO: Currently, this block is unreachable
        // TABLE_SQL is the last step, but after PLFM-8209 is complete, TABLE_SQL can come before TABLE_NAME, where this will make more sense
        // Other than removing this comment, no change will be needed here
        return 'TABLE_SQL'
      }
      break
  }
  console.warn(`Unknown previous step at ${currentStep} for type ${entityType}`)
  return 'CHOOSE_TABLE_TYPE'
}

export function isLastStep(step: CreateTableViewWizardStep) {
  // TODO: after PLFM-8209 is complete, TABLE_SQL can come before TABLE_NAME
  // TABLE_SQL should then be removed from this fn
  return step === 'TABLE_NAME' || step === 'TABLE_SQL'
}

export function getStepAfterTypeSelection(
  entityType: EntityType,
): CreateTableViewWizardStep {
  if (entityType === EntityType.TABLE) {
    return 'TABLE_COLUMNS'
  }
  if (entityType === EntityType.ENTITY_VIEW) {
    return 'ENTITY_VIEW_SCOPE'
  }
  if (entityType === EntityType.SUBMISSION_VIEW) {
    return 'SUBMISSION_VIEW_SCOPE'
  }
  if (
    entityType === EntityType.MATERIALIZED_VIEW ||
    entityType === EntityType.VIRTUAL_TABLE
  ) {
    return 'TABLE_SQL'
  }

  // Should never happen
  return 'CHOOSE_TABLE_TYPE'
}

export function maybeSetColumnIds(
  entityToCreate: Entity,
  entityType: EntityType,
  createdColumnModels: ColumnModel[],
) {
  if (
    [
      EntityType.TABLE,
      EntityType.ENTITY_VIEW,
      EntityType.SUBMISSION_VIEW,
      EntityType.DATASET,
      EntityType.DATASET_COLLECTION,
    ].includes(entityType)
  ) {
    if (createdColumnModels.length > 0) {
      ;(entityToCreate as Table)['columnIds'] = createdColumnModels.map(
        cm => cm.id,
      )
    }
  }
}

export function maybeSetScopeIds(
  entityToCreate: Entity,
  entityType: EntityType,
  scopeIds: string[],
) {
  if (
    [EntityType.ENTITY_VIEW, EntityType.SUBMISSION_VIEW].includes(entityType) &&
    scopeIds.length > 0
  ) {
    ;(entityToCreate as EntityView | SubmissionView)['scopeIds'] = scopeIds
  }
}

export function maybeSetViewTypeMask(
  entityToCreate: Entity,
  entityType: EntityType,
  viewTypeMask: number,
) {
  if (entityType === EntityType.ENTITY_VIEW) {
    ;(entityToCreate as EntityView)['viewTypeMask'] = viewTypeMask
  }
}

export function maybeSetDefiningSQL(
  entityToCreate: Entity,
  entityType: EntityType,
  sql: string,
) {
  if (
    [EntityType.MATERIALIZED_VIEW, EntityType.VIRTUAL_TABLE].includes(
      entityType,
    )
  ) {
    ;(entityToCreate as MaterializedView | VirtualTable)['definingSQL'] = sql
  }
}
