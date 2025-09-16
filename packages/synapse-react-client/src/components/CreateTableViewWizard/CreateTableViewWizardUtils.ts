import { entityTypeToFriendlyName } from '@/utils/functions/EntityTypeUtils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  ColumnModel,
  Entity,
  EntityView,
  MaterializedView,
  SubmissionView,
  Table,
  VirtualTable,
} from '@sage-bionetworks/synapse-types'

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
      return `Create the ${entityTypeToFriendlyName(entityType!)}`
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
      if (entityType === EntityType.table) {
        return 'CHOOSE_TABLE_TYPE'
      }
      // If this is a view, go back to scope selection
      if (entityType === EntityType.entityview) {
        return 'ENTITY_VIEW_SCOPE'
      }
      if (entityType === EntityType.submissionview) {
        return 'SUBMISSION_VIEW_SCOPE'
      }
      break
    case 'TABLE_NAME':
      if (
        entityType === EntityType.table ||
        entityType === EntityType.entityview ||
        entityType === EntityType.submissionview
      ) {
        return 'TABLE_COLUMNS'
      } else if (
        entityType === EntityType.materializedview ||
        entityType === EntityType.virtualtable
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
  return step === 'TABLE_NAME'
}

export function getStepAfterTypeSelection(
  entityType: EntityType,
): CreateTableViewWizardStep {
  if (entityType === EntityType.table) {
    return 'TABLE_COLUMNS'
  }
  if (entityType === EntityType.entityview) {
    return 'ENTITY_VIEW_SCOPE'
  }
  if (entityType === EntityType.submissionview) {
    return 'SUBMISSION_VIEW_SCOPE'
  }
  if (
    entityType === EntityType.materializedview ||
    entityType === EntityType.virtualtable
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
  const hasColumnIdsTypes: EntityType[] = [
    EntityType.table,
    EntityType.entityview,
    EntityType.submissionview,
    EntityType.dataset,
    EntityType.datasetcollection,
  ]
  if (hasColumnIdsTypes.includes(entityType)) {
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
  const hasScopeIdsTypes: EntityType[] = [
    EntityType.entityview,
    EntityType.submissionview,
  ]
  if (hasScopeIdsTypes.includes(entityType) && scopeIds.length > 0) {
    ;(entityToCreate as EntityView | SubmissionView)['scopeIds'] = scopeIds
  }
}

export function maybeSetViewTypeMask(
  entityToCreate: Entity,
  entityType: EntityType,
  viewTypeMask: number,
) {
  if (entityType === EntityType.entityview) {
    ;(entityToCreate as EntityView)['viewTypeMask'] = viewTypeMask
  }
}

export function maybeSetDefiningSQL(
  entityToCreate: Entity,
  entityType: EntityType,
  sql: string,
) {
  const hasDefiningSQLTypes: EntityType[] = [
    EntityType.materializedview,
    EntityType.virtualtable,
  ]
  if (hasDefiningSQLTypes.includes(entityType)) {
    ;(entityToCreate as MaterializedView | VirtualTable)['definingSQL'] = sql
  }
}
