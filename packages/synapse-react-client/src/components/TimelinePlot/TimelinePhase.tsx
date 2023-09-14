import React, { useRef, useState } from 'react'
import Plotly, { Layout } from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import dayjs, { ManipulateType } from 'dayjs'
import { Dialog } from '@mui/material'
import {
  ObservationCard,
  ObservationCardSchema,
} from '../row_renderers/ObservationCard'
import { Row } from '@sage-bionetworks/synapse-types'
import pluralize from 'pluralize'
const Plot = createPlotlyComponent(Plotly)

const getTimelineData = (
  start: dayjs.Dayjs,
  rowData: Row[],
  schema: ObservationCardSchema,
  hoverEventRowId?: number, //if supplied, will highlight the hovered event
) => {
  const data = rowData.map(row => {
    const time = parseInt(row.values[schema.time]!)
    const timeUnit = row.values[schema.timeUnits]
    const timepoint = start.add(time, timeUnit as ManipulateType)
    const utcFormattedTimepoint = timepoint.format()
    const isHoveredOver = row.rowId == hoverEventRowId
    return {
      x: [utcFormattedTimepoint, utcFormattedTimepoint, utcFormattedTimepoint],
      y: [0, 0.5, 1],
      mode: 'lines',
      line: {
        color: isHoveredOver ? 'black' : 'gray',
        width: 2,
      },
      // Add event into in the customdata
      customdata: [row.rowId, row.rowId, row.rowId],
      // but tell Plotly that we do not want it to show a hover tooltip (we're going to handle this)
      hoverinfo: 'none',
    }
  })
  return data
}

const getLayout = (
  start: dayjs.Dayjs,
  timeMax: number,
  timeUnits: string,
  color: string,
  annotateTime?: number,
  annotateTimeUnits?: ManipulateType,
): Partial<Layout> => {
  const end = start.add(timeMax, timeUnits as ManipulateType)
  const annotations: Partial<Plotly.Annotations>[] = [
    {
      x: start.format(),
      y: -0.1,
      text: '          ',
      showarrow: false,
    },
    {
      x: end.format(),
      y: -0.1,
      text: '          ',
      showarrow: false,
    },
  ]
  if (annotateTime && annotateTimeUnits) {
    const x = start.add(annotateTime, annotateTimeUnits)
    annotations.push({
      x: x.format(),
      y: -0.1,
      text: `${annotateTime} ${pluralize(annotateTimeUnits, annotateTime)}`,
      showarrow: false,
    })
  }
  return {
    hovermode: 'closest',
    showlegend: false,
    xaxis: {
      showgrid: false,
      showticklabels: false,
      showline: false,
      zeroline: false,
      title: `${timeMax} ${timeUnits}`,
    },
    yaxis: {
      showgrid: false,
      zeroline: false,
      showline: false,
      showticklabels: false,
    },
    annotations: annotations,
    // Each phase has a shape
    shapes: [
      {
        type: 'rect',
        x0: start.format(),
        x1: end.format(),
        y0: 0.25,
        y1: 0.75,
        fillcolor: color,
        opacity: 0.8,
        line: {
          width: 0,
        },
      },
    ],
  }
}

type TimelinePhaseProps = {
  name: string
  color: string
  timeMax: number // how long is this phase?
  timeUnits: string // in what time units is the timeMax measured? (days? weeks?)
  rowData: Row[]
  schema: ObservationCardSchema
}
const TimelinePhase = ({
  color,
  timeMax,
  timeUnits,
  rowData,
  schema,
}: TimelinePhaseProps) => {
  const [clickEvent, setClickEvent] = useState<Plotly.PlotMouseEvent>()
  const [hoverEvent, setHoverEvent] = useState<Plotly.PlotHoverEvent>()
  const start = dayjs()

  // hide the hover UI if we detect that the user moves the mouse outside of this component boundary
  const componentRef = useRef<HTMLDivElement>(null)
  const rowId = clickEvent?.points[0].customdata as number
  const selectedRow = rowData.filter(row => {
    return row.rowId === rowId
  })[0]
  const hoverEventRowId = hoverEvent?.points[0].customdata as number
  const hoverRow = rowData.filter(row => {
    return row.rowId === hoverEventRowId
  })[0]
  const annotateTime = hoverRow
    ? parseInt(hoverRow.values[schema.time]!)
    : undefined
  const annotateTimeUnits = hoverRow
    ? (hoverRow.values[schema.timeUnits] as ManipulateType)
    : undefined

  return (
    <div ref={componentRef}>
      <Plot
        data={getTimelineData(start, rowData, schema, hoverEventRowId)}
        layout={getLayout(
          start,
          timeMax,
          timeUnits,
          color,
          annotateTime,
          annotateTimeUnits,
        )}
        config={{ displayModeBar: false }}
        style={{ maxHeight: '300px' }}
        useResizeHandler={true}
        onClick={eventData => {
          setClickEvent(eventData)
        }}
        onHover={eventData => {
          setHoverEvent(eventData)
        }}
        onUnhover={() => {
          setHoverEvent(undefined)
        }}
      />
      {selectedRow && (
        <Dialog onClose={() => setClickEvent(undefined)} open={!!selectedRow}>
          <ObservationCard
            data={selectedRow.values}
            schema={schema}
            includePortalCardClass={false}
          />
        </Dialog>
      )}
    </div>
  )
}

export default TimelinePhase
