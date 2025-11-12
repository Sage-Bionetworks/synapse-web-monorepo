import { isFacetColumnValuesRequest, SynapseConstants } from '@/utils'
import {
  getCorrespondingColumnForFacet,
  getCorrespondingSelectedFacet,
} from '@/utils/functions/queryUtils'
import useGetInfoFromIds from '@/utils/hooks/useGetInfoFromIds'
import {
  ColumnTypeEnum,
  Direction,
  EntityHeader,
  Evaluation,
  FacetColumnRequest,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  FacetColumnValuesRequest,
  QueryBundleRequest,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'
import { cloneDeep, partition, pick, sortBy } from 'lodash-es'
import { Suspense, useMemo } from 'react'
import { useQueryContext } from '../../../QueryContext'
import { useQueryVisualizationContext } from '../../../QueryVisualizationWrapper'
import { useSuspenseGetQueryMetadata } from '../../../QueryWrapper/useGetQueryMetadata'
import { EnumFacetFilterSkeleton } from './EnumFacetFilterSkeleton'
import EnumFacetFilterUI, { RenderedFacetValue } from './EnumFacetFilterUI'
import { getAllIsSelected, valueToLabel } from './EnumFacetFilterUtils'

export type EnumFacetFilterProps = {
  facet: FacetColumnResultValues
  containerAs?: 'Collapsible' | 'Dropdown'
  dropdownType?: 'Icon' | 'SelectBox'
  hideCollapsible?: boolean
  sortConfig?: FacetValueSortConfig
  defaultShowAllValues?: boolean
}

export type FacetValueSortConfig = {
  columnName: string
  direction: Direction
}

function EnumFacetFilterInternal(props: EnumFacetFilterProps) {
  const {
    facet,
    containerAs = 'Collapsible',
    dropdownType = 'Icon',
    hideCollapsible = false,
    sortConfig,
    defaultShowAllValues = false,
  } = props
  const {
    nextQueryRequest,
    addValueToSelectedFacet,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    resetDebounceTimer,
  } = useQueryContext()

  const { data: queryMetadata } = useSuspenseGetQueryMetadata()
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

  const isNumberColumnType = useMemo(() => {
    switch (columnModel?.columnType) {
      case ColumnTypeEnum.DOUBLE:
      case ColumnTypeEnum.DATE:
      case ColumnTypeEnum.INTEGER:
        return true
      default:
        return false
    }
  }, [columnModel])

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

    // Apply client-side sorting if no server-side sort is specified
    let sortedValues: RenderedFacetValue[] = restOfFacetValuesArray
    if (columnModel == undefined || columnModel.facetSortConfig == undefined) {
      if (isNumberColumnType) {
        sortedValues = sortBy(restOfFacetValuesArray, fv => Number(fv.value))
      } else {
        sortedValues = sortBy(restOfFacetValuesArray, fv =>
          fv.displayText.toLowerCase(),
        )
      }
    }

    //PORTALS-3252: provide way to sort in descending order on the client-side
    const sortDescending = sortConfig && sortConfig.direction == Direction.DESC
    return [
      ...(sortDescending ? sortedValues.reverse() : sortedValues),
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
      defaultShowAllValues={defaultShowAllValues}
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
      <EnumFacetFilterInternal {...props} />
    </Suspense>
  )
}
