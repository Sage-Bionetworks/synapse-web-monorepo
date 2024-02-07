import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import IconSvg from '../IconSvg'
import {
  FacetColumnResultValues,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { SkeletonInlineBlock } from '../Skeleton/SkeletonInlineBlock'
import { EnumFacetFilter } from '../widgets/query-filter/EnumFacetFilter/EnumFacetFilter'

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
          <Tooltip title={'Expand to large graph'}>
            <IconButton onClick={() => setShowModal(true)} size={'small'}>
              <IconSvg icon={'openInFull'} wrap={false} fontSize={'inherit'} />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title={'Hide graph under Show More'}>
          <IconButton onClick={() => onHide()} size={'small'}>
            <IconSvg icon={'close'} wrap={false} fontSize={'inherit'} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}
