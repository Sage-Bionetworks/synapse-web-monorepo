import React from 'react'
import {
  FacetColumnResultValues,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { SkeletonInlineBlock } from '../Skeleton/SkeletonInlineBlock'
import { EnumFacetFilter } from '../widgets/query-filter/EnumFacetFilter/EnumFacetFilter'
import { IconSvgButton } from '../IconSvgButton'

export type PlotPanelHeaderProps = {
  data?: QueryResultBundle
  isLoadingNewBundle?: boolean
  title: string
  facetToPlot?: FacetColumnResultValues
  onHide: () => void
  setShowModal?: (show: boolean) => void
}

export default function PlotPanelHeader(props: PlotPanelHeaderProps) {
  const { data, isLoadingNewBundle, title, facetToPlot, onHide, setShowModal } =
    props
  return (
    <div className="FacetNavPanel__title">
      {!data && isLoadingNewBundle ? (
        <SkeletonInlineBlock width={100} />
      ) : (
        <span className="FacetNavPanel__title__name">{title}</span>
      )}
      <div role="toolbar" className="FacetNavPanel__title__tools">
        {facetToPlot && (
          <EnumFacetFilter facet={facetToPlot} containerAs="Dropdown" />
        )}
        {setShowModal && (
          <IconSvgButton
            tooltipText="Expand to large graph"
            placement="bottom"
            onClick={() => setShowModal(true)}
            size="small"
            icon="openInFull"
          />
        )}
        <IconSvgButton
          tooltipText="Hide graph under Show More"
          placement="bottom"
          onClick={() => onHide()}
          size="small"
          icon="close"
        />
      </div>
    </div>
  )
}
