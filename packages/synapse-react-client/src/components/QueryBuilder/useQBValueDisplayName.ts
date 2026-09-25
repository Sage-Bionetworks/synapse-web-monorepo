import {
  ColumnModel,
  ColumnTypeEnum,
  EntityHeader,
  Evaluation,
  FacetColumnResult,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'
import { useCallback, useMemo } from 'react'
import useGetInfoFromIds from '../../utils/hooks/useGetInfoFromIds'
import { VALUE_NOT_SET } from '../../utils/SynapseConstants'
import {
  isFacetColumnResultValues,
  labelForFacetValue,
} from './queryBuilderMetadata'

/**
 * Resolves the user-facing label for a value stored on a QB condition. Columns
 * whose values are Synapse IDs resolve to the object's name; every other
 * column falls back to {@link labelForFacetValue}.
 */
export type QBValueDisplayNameFn = (
  columnName: string | null,
  value: string,
) => string

type LookupType = 'ENTITY_HEADER' | 'USER_PROFILE' | 'EVALUATION_QUEUE'

function lookupTypeForColumnType(
  columnType: ColumnModel['columnType'] | undefined,
): LookupType | null {
  switch (columnType) {
    case ColumnTypeEnum.ENTITYID:
    case ColumnTypeEnum.ENTITYID_LIST:
      return 'ENTITY_HEADER'
    case ColumnTypeEnum.USERID:
    case ColumnTypeEnum.USERID_LIST:
      return 'USER_PROFILE'
    case ColumnTypeEnum.EVALUATIONID:
      return 'EVALUATION_QUEUE'
    default:
      return null
  }
}

/**
 * Builds the labeling function used for every value the QB displays — pill
 * choices and the plain-English summary alike.
 *
 * IDs are looked up in batch for the whole panel rather than per condition, so
 * a value keeps its name whether or not a condition is currently selecting it.
 */
export function useQBValueDisplayName(
  columnModels: ColumnModel[],
  facetResults: readonly FacetColumnResult[],
): QBValueDisplayNameFn {
  const lookupTypeByColumnName = useMemo(() => {
    const map = new Map<string, LookupType>()
    for (const columnModel of columnModels) {
      const lookupType = lookupTypeForColumnType(columnModel.columnType)
      if (lookupType != null) {
        map.set(columnModel.name, lookupType)
      }
    }
    return map
  }, [columnModels])

  // Only faceted columns enumerate their values in the UI, so the facet
  // results are the complete set of IDs that need names.
  const idsByLookupType = useMemo(() => {
    const ids: Record<LookupType, string[]> = {
      ENTITY_HEADER: [],
      USER_PROFILE: [],
      EVALUATION_QUEUE: [],
    }
    for (const facet of facetResults) {
      if (!isFacetColumnResultValues(facet)) continue
      const lookupType = lookupTypeByColumnName.get(facet.columnName)
      if (lookupType == null) continue
      for (const facetValue of facet.facetValues) {
        if (facetValue.value !== VALUE_NOT_SET) {
          ids[lookupType].push(facetValue.value)
        }
      }
    }
    return ids
  }, [facetResults, lookupTypeByColumnName])

  const entityHeaders = useGetInfoFromIds<EntityHeader>({
    ids: idsByLookupType.ENTITY_HEADER,
    type: 'ENTITY_HEADER',
  })
  const userGroupHeaders = useGetInfoFromIds<UserGroupHeader>({
    ids: idsByLookupType.USER_PROFILE,
    type: 'USER_PROFILE',
  })
  const evaluations = useGetInfoFromIds<Evaluation>({
    ids: idsByLookupType.EVALUATION_QUEUE,
    type: 'EVALUATION_QUEUE',
  })

  const labelsByLookupType: Record<LookupType, Map<string, string>> = useMemo(
    () => ({
      ENTITY_HEADER: new Map(entityHeaders.map(h => [h.id, h.name])),
      USER_PROFILE: new Map(userGroupHeaders.map(h => [h.ownerId, h.userName])),
      EVALUATION_QUEUE: new Map(
        evaluations
          .filter(e => e.id != null && e.name != null)
          .map(e => [e.id!, e.name!]),
      ),
    }),
    [entityHeaders, userGroupHeaders, evaluations],
  )

  return useCallback(
    (columnName, value) => {
      const lookupType =
        columnName == null ? null : lookupTypeByColumnName.get(columnName)
      if (lookupType == null) return labelForFacetValue(value)
      // Lookups resolve asynchronously — until they land (or when an ID no
      // longer resolves) the raw value is the best label available.
      return (
        labelsByLookupType[lookupType].get(value) ?? labelForFacetValue(value)
      )
    },
    [lookupTypeByColumnName, labelsByLookupType],
  )
}

/** Labeler used when no ID resolution is available (e.g. outside the panel). */
export const rawQBValueDisplayName: QBValueDisplayNameFn = (
  _columnName,
  value,
) => labelForFacetValue(value)
