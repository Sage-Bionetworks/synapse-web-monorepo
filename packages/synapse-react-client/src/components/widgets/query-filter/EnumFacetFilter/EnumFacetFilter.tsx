import React, { Suspense, useMemo } from 'react'
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
import { isFacetColumnValuesRequest, SynapseConstants } from '../../../../utils'
import { cloneDeep, partition, pick, sortBy } from 'lodash-es'
import { useQueryVisualizationContext } from '../../../QueryVisualizationWrapper'
import {
  getCorrespondingColumnForFacet,
  getCorrespondingSelectedFacet,
} from '../../../../utils/functions/queryUtils'
import EnumFacetFilterUI, { RenderedFacetValue } from './EnumFacetFilterUI'
import { getAllIsSelected, valueToLabel } from './EnumFacetFilterUtils'
import { useSuspenseQuery } from '@tanstack/react-query'
import { EnumFacetFilterSkeleton } from './EnumFacetFilterSkeleton'

export type EnumFacetFilterProps = {
  facet: FacetColumnResultValues
  containerAs?: 'Collapsible' | 'Dropdown'
  dropdownType?: 'Icon' | 'SelectBox'
  hideCollapsible?: boolean
}

function _EnumFacetFilter(props: EnumFacetFilterProps) {
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
    queryMetadataQueryOptions,
    resetDebounceTimer,
  } = useQueryContext()

  const { data: queryMetadata } = useSuspenseQuery(queryMetadataQueryOptions)
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

  const columnModel = queryMetadata.columnModels
    ? getCorrespondingColumnForFacet(facet, queryMetadata.columnModels)
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
    const renderedFacetValues = facet.facetValues.map(
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
    )
    //Abby V's suggestion, always show the VALUE_NOT_SET facet value on the bottom of this sorted list
    const partitions = partition(
      renderedFacetValues,
      facet => facet.value === SynapseConstants.VALUE_NOT_SET,
    )
    const valueNotSetFacetArray = partitions[0]
    const restOfFacetValuesArray = partitions[1]
    return [
      ...sortBy(restOfFacetValuesArray, fv => fv.displayText.toLowerCase()),
      ...valueNotSetFacetArray,
    ]
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
      filterIsActive={!allIsSelected}
      facetValues={displayedFacetValues}
      containerAs={containerAs}
      dropdownType={dropdownType}
      hideCollapsible={hideCollapsible}
      onHoverOverValue={() => {
        // SWC-6698: delay the query execution (via the debounce) when an item is hovered over
        resetDebounceTimer()
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
      canMultiSelect={true}
    />
  )
}

export function EnumFacetFilter(props: EnumFacetFilterProps) {
  const { containerAs = 'Collapsible', dropdownType = 'Icon' } = props
  return (
    <Suspense
      fallback={
        <EnumFacetFilterSkeleton
          containerAs={containerAs}
          dropdownType={dropdownType}
        />
      }
    >
      <_EnumFacetFilter {...props} />
    </Suspense>
  )
}
