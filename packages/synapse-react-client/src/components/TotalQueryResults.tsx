import React from 'react'
import { SkeletonInlineBlock } from './Skeleton/SkeletonInlineBlock'
import { FacetColumnRequest } from '@sage-bionetworks/synapse-types'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import { useQueryContext } from './QueryContext/QueryContext'
import IconSvg from './IconSvg/IconSvg'
import SelectionCriteriaPills from './widgets/facet-nav/SelectionCriteriaPills'
import pluralize from 'pluralize'
import { useAtomValue } from 'jotai'
import {
  isLoadingNewBundleAtom,
  tableQueryDataAtom,
} from './QueryWrapper/QueryWrapper'

export type TotalQueryResultsProps = {
  style?: React.CSSProperties
  frontText: string
  endText?: string
  applyChanges?: (newFacets: FacetColumnRequest[]) => void
  hideIfUnfiltered?: boolean
}

function TotalQueryResults(props: TotalQueryResultsProps) {
  const { style, frontText, endText = '', hideIfUnfiltered = false } = props
  const { resetQuery, error, hasResettableFilters } = useQueryContext()
  const data = useAtomValue(tableQueryDataAtom)
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)
  const { unitDescription } = useQueryVisualizationContext()

  const total = data?.queryCount

  const showClearAll = hasResettableFilters
  if (error) {
    return <></>
  }
  return (
    <div
      className={`TotalQueryResults ${
        hasResettableFilters ? 'hasFilters' : ''
      }`}
      style={style}
    >
      {isLoadingNewBundle ? (
        <SkeletonInlineBlock width={100} />
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default TotalQueryResults
