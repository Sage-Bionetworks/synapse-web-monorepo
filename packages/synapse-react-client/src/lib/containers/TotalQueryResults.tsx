import React from 'react'
import { SkeletonInlineBlock } from '../assets/skeletons/SkeletonInlineBlock'
import { FacetColumnRequest } from '../utils/synapseTypes'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
  useQueryContext,
} from './QueryContext'
import IconSvg from './IconSvg'
import SelectionCriteriaPills from './widgets/facet-nav/SelectionCriteriaPills'

export type TotalQueryResultsProps = {
  style?: React.CSSProperties
  frontText: string
  endText?: string
  applyChanges?: (newFacets: FacetColumnRequest[]) => void
  hideIfUnfiltered?: boolean
}

function TotalQueryResults(props: TotalQueryResultsProps) {
  const { style, frontText, endText = '', hideIfUnfiltered = false } = props
  const { data, isLoadingNewBundle, resetQuery, error, hasResettableFilters } =
    useQueryContext()

  const { topLevelControlsState, unitDescription } =
    useQueryVisualizationContext()

  const total = data?.queryCount

  const showFacetFilter = topLevelControlsState?.showFacetFilter

  const showClearAll = hasResettableFilters
  if (error) {
    return <></>
  }
  return (
    <div
      className={`TotalQueryResults ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      } ${hasResettableFilters ? 'hasFilters' : ''}`}
      style={style}
    >
      {isLoadingNewBundle ? (
        <SkeletonInlineBlock width={100} />
      ) : (
        <>
          {(hasResettableFilters || !hideIfUnfiltered) && (
            <div className="TotalQueryResults__topbar">
              <span className="SRC-boldText">
                {frontText} {total?.toLocaleString()} {unitDescription}{' '}
                {endText}
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
        </>
      )}
    </div>
  )
}

export default TotalQueryResults
