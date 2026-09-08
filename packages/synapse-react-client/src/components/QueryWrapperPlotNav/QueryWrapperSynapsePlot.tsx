import { useId, useMemo, useState } from 'react'
import { InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { AxisType } from 'plotly.js-basic-dist'
import { SynapsePlot } from '../Plot'
import { QueryContextType, useQueryContext } from '../QueryContext'
import {
  QueryWrapperPlotNavCustomPlotParams,
  SynapsePlotWidgetParams,
} from '../Plot/SynapsePlot'
import {
  FacetColumnRequest,
  QueryFilter,
  Row,
} from '@sage-bionetworks/synapse-types'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import PlotPanelHeader from '../Plot/PlotPanelHeader'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import StyledFormControl from '../styled/StyledFormControl'
export type QueryWrapperSynapsePlotProps = Pick<
  QueryWrapperPlotNavCustomPlotParams,
  'onCustomPlotClick'
> &
  Omit<SynapsePlotWidgetParams, 'selectedFacets' | 'additionalFilters'>
type QueryWrapperSynapsePlotInternalProps = {
  onHide: () => void
}
export type QueryWrapperSynapsePlotRowClickEvent = {
  row: Row
  queryContext?: QueryContextType
}

/**
 * This component wraps a SynapsePlot.  It passes in the current query context, and has a custom
 * "title" style so that it looks like it belongs in the QueryWrapperPlotNav plots.
 * @param props
 * @returns
 */
export default function QueryWrapperSynapsePlot(
  props: QueryWrapperSynapsePlotProps & QueryWrapperSynapsePlotInternalProps,
) {
  const queryContext = useQueryContext()
  const { currentQueryRequest } = queryContext
  const { title, footnote, onCustomPlotClick, onHide } = props
  const { showPlots } = useQueryVisualizationContext()

  const [showModal, setShowModal] = useState(false)
  const [currentXAxisType, setCurrentXAxisType] = useState<
    AxisType | undefined
  >(props.xaxistype)

  // Only offer log/linear toggle when the default axis type was explicitly set to 'log'
  const defaultXAxisTypeIsLog = props.xaxistype === 'log'

  const xAxisTypeInputLabelId = useId()

  const widgetParamsMapped: SynapsePlotWidgetParams = useMemo(() => {
    return {
      ...props,
      xaxistype: currentXAxisType,
      title: undefined, // we are handling the plot title here in this component
      showlegend: false,
      displayModebar: false,
    }
  }, [props, currentXAxisType])

  const customPlotParams: QueryWrapperPlotNavCustomPlotParams = useMemo(() => {
    const { selectedFacets, additionalFilters } = currentQueryRequest.query
    return {
      selectedFacets: selectedFacets as FacetColumnRequest[],
      additionalFilters: additionalFilters as QueryFilter[],
      onCustomPlotClick,
      queryContext,
    }
  }, [currentQueryRequest.query, onCustomPlotClick, queryContext])

  const plotContent = (
    <>
      <SynapsePlot
        synapsePlotWidgetParams={widgetParamsMapped}
        customPlotParams={customPlotParams}
      />
      {footnote && (
        <Typography
          variant="body1Italic"
          sx={{ display: 'block', mt: 1, px: 1 }}
        >
          {footnote}
        </Typography>
      )}
    </>
  )

  const modalContent = (
    <Stack sx={{ gap: 2 }}>
      {defaultXAxisTypeIsLog && (
        <StyledFormControl fullWidth>
          <InputLabel id={xAxisTypeInputLabelId}>X Axis Scale</InputLabel>
          <Select
            labelId={xAxisTypeInputLabelId}
            label="X Axis Scale"
            value={currentXAxisType ?? 'log'}
            onChange={e => setCurrentXAxisType(e.target.value as AxisType)}
          >
            <MenuItem value="log">Log</MenuItem>
            <MenuItem value="linear">Linear</MenuItem>
          </Select>
        </StyledFormControl>
      )}
      {plotContent}
    </Stack>
  )

  return (
    <div role="figure" className="SynapsePlot">
      <ConfirmationDialog
        open={showModal}
        onCancel={() => setShowModal(false)}
        title={title ?? ''}
        content={modalContent}
        hasCancelButton={false}
        confirmButtonProps={{ children: 'Close' }}
        onConfirm={() => setShowModal(false)}
        maxWidth="md"
      />
      {showPlots && (
        <>
          {title && (
            <PlotPanelHeader
              title={title}
              onHide={onHide}
              setShowModal={setShowModal}
            />
          )}
          {plotContent}
        </>
      )}
    </div>
  )
}
