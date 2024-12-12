import {
  ColumnType,
  ColumnTypeEnum,
  EntityHeader,
  Evaluation,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import * as SynapseConstants from '../SynapseConstants'

const getStoredEntityHeaders = (): EntityHeader[] => {
  try {
    const lookUpEntityHeaders: EntityHeader[] = JSON.parse(
      sessionStorage.getItem(SynapseConstants.ENTITY_HEADER_STORAGE_KEY) || '',
    )
    return lookUpEntityHeaders
  } catch (e) {
    return []
  }
}

const getStoredUserProfiles = (): UserProfile[] => {
  try {
    const lookUpUserIds: UserProfile[] = JSON.parse(
      sessionStorage.getItem(SynapseConstants.USER_PROFILE_STORAGE_KEY) || '',
    )
    return lookUpUserIds
  } catch (e) {
    return []
  }
}

const getStoredEvaluation = (): Evaluation[] => {
  try {
    const lookUpEvaluations: UserProfile[] = JSON.parse(
      sessionStorage.getItem(SynapseConstants.EVALUATIONS_STORAGE_KEY) || '',
    )
    return lookUpEvaluations
  } catch (e) {
    return []
  }
}

const getDisplayValueForEntityColumn = (value: string): string => {
  const entity = getStoredEntityHeaders().find(item => item.id === value)
  return entity?.name ?? value
}

const getDisplayValueEvaluationIdColumn = (facetValue: string): string => {
  const evaluation = getStoredEvaluation().find(item => item.id === facetValue)
  return evaluation?.name || facetValue
}

const getDisplayValueUserIdColumn = (facetValue: string): string => {
  const userProfile = getStoredUserProfiles().find(
    item => item.ownerId === facetValue,
  )
  return userProfile?.userName || facetValue
}

export const getDisplayValue = (value: string, columnType: ColumnType) => {
  if (value === SynapseConstants.VALUE_NOT_SET) {
    return SynapseConstants.FRIENDLY_VALUE_NOT_SET
  }

  switch (columnType) {
    case ColumnTypeEnum.ENTITYID:
    case ColumnTypeEnum.ENTITYID_LIST:
      return getDisplayValueForEntityColumn(value)
    case ColumnTypeEnum.USERID:
    case ColumnTypeEnum.USERID_LIST:
      return getDisplayValueUserIdColumn(value)
    case ColumnTypeEnum.EVALUATIONID:
      return getDisplayValueEvaluationIdColumn(value)
    default:
      return value
  }
}
