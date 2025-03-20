import { FacetColumnRequest } from '@sage-bionetworks/synapse-types'
import pluralize from 'pluralize'
import { CSSProperties, Suspense } from 'react'
import { SynapseErrorBoundary } from './error'
import IconSvg from './IconSvg/IconSvg'
import { useQueryContext } from './QueryContext'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import { useSuspenseGetQueryMetadata } from './QueryWrapper/useGetQueryMetadata'
import { SkeletonInlineBlock } from './Skeleton'
import SelectionCriteriaPills from './widgets/facet-nav/SelectionCriteriaPills'

export type TotalQueryResultsProps = {
  style?: CSSProperties
  frontText: string
  endText?: string
  applyChanges?: (newFacets: FacetColumnRequest[]) => void
  hideIfUnfiltered?: boolean
}

function TotalQueryResults(props: TotalQueryResultsProps) {
  const { style, frontText, endText = '', hideIfUnfiltered = false } = props
  const { resetQuery, hasResettableFilters } = useQueryContext()
  const { data: queryMetadata } = useSuspenseGetQueryMetadata()
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
