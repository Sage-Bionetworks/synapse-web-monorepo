import React, { useMemo } from 'react'
import useGetInfoFromIds from '../../../../utils/hooks/useGetInfoFromIds'
import {
  ColumnTypeEnum,
  EntityHeader,
  Evaluation,
  FacetColumnRequest,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  FacetColumnValuesRequest,
  QueryBundleRequest,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'
import { useQueryContext } from '../../../QueryContext'
import { isFacetColumnValuesRequest } from '../../../../utils/types/IsType'
import { cloneDeep, pick, sortBy } from 'lodash-es'
import { useQueryVisualizationContext } from '../../../QueryVisualizationWrapper'
import { useAtomValue } from 'jotai'
import { tableQueryDataAtom } from '../../../QueryWrapper/QueryWrapper'
import {
  getCorrespondingColumnForFacet,
  getCorrespondingSelectedFacet,
} from '../../../../utils/functions/queryUtils'
import EnumFacetFilterUI, { RenderedFacetValue } from './EnumFacetFilterUI'
import { getAllIsSelected, valueToLabel } from './EnumFacetFilterUtils'

export type EnumFacetFilterProps = {
  facet: FacetColumnResultValues
  containerAs?: 'Collapsible' | 'Dropdown'
  dropdownType?: 'Icon' | 'SelectBox'
  hideCollapsible?: boolean
}

export function EnumFacetFilter(props: EnumFacetFilterProps) {
  const {
    facet,
    containerAs = 'Collapsible',
    dropdownType = 'Icon',
    hideCollapsible = false,
  } = props
  const {
    nextQueryRequest,
    addValueToSelectedFacet,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    executeQueryRequest,
  } = useQueryContext()

  const data = useAtomValue(tableQueryDataAtom)
  const { getColumnDisplayName } = useQueryVisualizationContext()

  const currentSelectedFacet: FacetColumnValuesRequest | undefined =
    useMemo(() => {
      const facetColumnRequest = getCorrespondingSelectedFacet(
        facet,
        cloneDeep(nextQueryRequest.query.selectedFacets) as
          | FacetColumnRequest[]
          | undefined,
      )

      if (
        facetColumnRequest &&
        !isFacetColumnValuesRequest(facetColumnRequest)
      ) {
        console.error(
          `The facet rendered in EnumFacetFilter is not a FacetColumnValuesRequest`,
          facet,
        )
        return undefined
      }
      return facetColumnRequest
    }, [facet, nextQueryRequest.query.selectedFacets])

  // Must compare the known facet values to the "uncommitted" current query
  const allIsSelected = getAllIsSelected(
    cloneDeep(nextQueryRequest) as QueryBundleRequest,
    facet,
  )

  const columnModel = data?.columnModels
    ? getCorrespondingColumnForFacet(facet, data.columnModels)
    : undefined

  const userIds =
    columnModel?.columnType === ColumnTypeEnum.USERID ||
    columnModel?.columnType === ColumnTypeEnum.USERID_LIST
      ? facet.facetValues.map(facet => facet.value)
      : []
  const userGroupHeaders = useGetInfoFromIds<UserGroupHeader>({
    ids: userIds,
    type: 'USER_PROFILE',
  })

  const entityIds =
    columnModel?.columnType === ColumnTypeEnum.ENTITYID ||
    columnModel?.columnType === ColumnTypeEnum.ENTITYID_LIST
      ? facet.facetValues.map(facet => facet.value)
      : []
  const entityHeaders = useGetInfoFromIds<EntityHeader>({
    ids: entityIds,
    type: 'ENTITY_HEADER',
  })

  const evaluationIds =
    columnModel?.columnType === ColumnTypeEnum.EVALUATIONID
      ? facet.facetValues.map(facet => facet.value)
      : []
  const evaluations = useGetInfoFromIds<Evaluation>({
    ids: evaluationIds,
    type: 'EVALUATION_QUEUE',
  })

  const displayedFacetValues: RenderedFacetValue[] = useMemo(() => {
    return sortBy(
      facet.facetValues.map(
        (facetValue: FacetColumnResultValueCount): RenderedFacetValue => {
          return {
            ...facetValue,
            // Selected status should be based on the 'nextQuery', not the result data
            // This ensures the checkboxes respond instantly to user interaction, like while waiting for multiple changes to debounce
            isSelected:
              currentSelectedFacet?.facetValues.includes(facetValue.value) ??
              false,
            displayText: valueToLabel(
              facetValue,
              userGroupHeaders,
              entityHeaders,
              evaluations,
            ),
          }
        },
      ),
      fv => -1 * fv.count,
    )
  }, [
    currentSelectedFacet?.facetValues,
    entityHeaders,
    evaluations,
    facet.facetValues,
    userGroupHeaders,
  ])

  if (!columnModel) {
    return <></>
  }

  return (
    <EnumFacetFilterUI
      facetTitle={getColumnDisplayName(facet.columnName, facet.jsonPath)}
      allIsSelected={allIsSelected}
      facetValues={displayedFacetValues}
      containerAs={containerAs}
      dropdownType={dropdownType}
      hideCollapsible={hideCollapsible}
      onHoverOverValue={() => {
        // SWC-6698: delay the query execution (via the debounce) when an item is hovered over
        executeQueryRequest(
          request => {
            return cloneDeep(request)
          },
          { debounce: true },
        )
      }}
      onAddValueToSelection={value => {
        addValueToSelectedFacet(
          pick(facet, ['columnName', 'jsonPath']),
          value,
          { debounce: true },
        )
      }}
      onRemoveValueFromSelection={value => {
        removeValueFromSelectedFacet(
          pick(facet, ['columnName', 'jsonPath']),
          value,
          { debounce: true },
        )
      }}
      onRemoveAllFacetSelections={() =>
        removeSelectedFacet(pick(facet, ['columnName', 'jsonPath']))
      }
    />
  )
}
