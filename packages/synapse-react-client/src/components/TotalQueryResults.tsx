import React, { Suspense } from 'react'
import { SkeletonInlineBlock } from './Skeleton'
import { FacetColumnRequest } from '@sage-bionetworks/synapse-types'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import { useQueryContext } from './QueryContext'
import IconSvg from './IconSvg/IconSvg'
import SelectionCriteriaPills from './widgets/facet-nav/SelectionCriteriaPills'
import pluralize from 'pluralize'
import { useSuspenseQuery } from '@tanstack/react-query'
import { SynapseErrorBoundary } from './error'

export type TotalQueryResultsProps = {
  style?: React.CSSProperties
  frontText: string
  endText?: string
  applyChanges?: (newFacets: FacetColumnRequest[]) => void
  hideIfUnfiltered?: boolean
}

function TotalQueryResults(props: TotalQueryResultsProps) {
  const { style, frontText, endText = '', hideIfUnfiltered = false } = props
  const { resetQuery, hasResettableFilters, queryMetadataQueryOptions } =
    useQueryContext()
  const { data: queryMetadata } = useSuspenseQuery(queryMetadataQueryOptions)
  const { unitDescription } = useQueryVisualizationContext()

  const total = queryMetadata?.queryCount

  const showClearAll = hasResettableFilters

  return (
    <div
      className={`TotalQueryResults ${
        hasResettableFilters ? 'hasFilters' : ''
      }`}
      style={style}
    >
      {(hasResettableFilters || !hideIfUnfiltered) && (
        <div className="TotalQueryResults__topbar">
          <span className="SRC-boldText">
            {frontText} {total?.toLocaleString()}{' '}
            {pluralize(unitDescription, total)} {endText}
          </span>
          {showClearAll && (
            <a
              onClick={resetQuery}
              className="TotalQueryResults__topbar__clearall"
            >
              <IconSvg icon="deleteSweep" />
              Clear all filters
            </a>
          )}
        </div>
      )}
      <div className="TotalQueryResults__selections">
        <SelectionCriteriaPills />
      </div>
    </div>
  )
}

export default function TotalQueryResultsWithSuspense(
  props: TotalQueryResultsProps,
) {
  return (
    <SynapseErrorBoundary>
      <Suspense fallback={<SkeletonInlineBlock width={100} />}>
        <TotalQueryResults {...props} />
      </Suspense>
    </SynapseErrorBoundary>
  )
}
