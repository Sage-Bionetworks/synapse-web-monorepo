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

type TimepointData = {
  timepoints: dayjs.Dayjs[]
  hoverOverIndex: number
}

const getTimepointData = (
  start: dayjs.Dayjs,
  rowData: Row[],
  schema: ObservationCardSchema,
  hoverEventRowId?: number, //if supplied, will return the index of this row
): TimepointData => {
  let hoverOverIndex = -1
  const timepoints = rowData.map((row, index) => {
    const time = parseInt(row.values[schema.time]!)
    const timeUnit = row.values[schema.timeUnits]
    if (row.rowId == hoverEventRowId) {
      hoverOverIndex = index
    }
    return start.add(time, timeUnit as ManipulateType)
  })
  return {
    timepoints,
    hoverOverIndex,
  }
}

export const getMaxDate = (timepoints: dayjs.Dayjs[]) => {
  return timepoints.reduce(
    (maxDateItem: dayjs.Dayjs, currentDateItem: dayjs.Dayjs) => {
      if (!maxDateItem || currentDateItem.isAfter(maxDateItem)) {
        return currentDateItem
      }
      return maxDateItem
    },
  )
}

const getTimelineData = (timepointData: TimepointData, rowData: Row[]) => {
  const data = timepointData.timepoints.map((timepoint, index) => {
    const utcFormattedTimepoint = timepoint.format()
    const isHoveredOver = index == timepointData.hoverOverIndex
    const rowId = rowData[index].rowId
    return {
      x: [utcFormattedTimepoint, utcFormattedTimepoint, utcFormattedTimepoint],
      y: [0, 0.5, 1],
      mode: 'lines',
      line: {
        color: isHoveredOver ? 'black' : 'gray',
        width: 2,
      },
      // Add event into in the customdata
      customdata: [rowId, rowId, rowId],
      // but tell Plotly that we do not want it to show a hover tooltip (we're going to handle this)
      hoverinfo: 'none',
    }
  })
  return data
}

const getLayout = (
  start: dayjs.Dayjs,
  end: dayjs.Dayjs,
  color: string,
  annotateTime?: number,
  annotateTimeUnits?: ManipulateType,
): Partial<Layout> => {
  const annotations: Partial<Plotly.Annotations>[] = [
    {
      x: start.add(1, 'day').format(),
      y: -1,
      text: '                             ', // hacky annotation in the middle of the plot so it does not shift when showing other annotations
      showarrow: false,
      textangle: '270',
      height: 15,
    },
  ]
  if (annotateTime && annotateTimeUnits) {
    const x = start.add(annotateTime, annotateTimeUnits)
    annotations.push({
      x: x.format(),
      y: -1,
      text: `${annotateTime} ${pluralize(annotateTimeUnits, annotateTime)}`,
      showarrow: false,
      textangle: '270',
      height: 15,
    })
  }
  return {
    hovermode: 'closest',
    dragmode: false, //disallow interaction
    showlegend: false,
    xaxis: {
      showgrid: false,
      showticklabels: false,
      showline: false,
      zeroline: false,
    },

    yaxis: {
      range: [-1, 1],
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
        x0: start.subtract(end.diff(start) / 10).format(), // add 10% to the left side of the graph
        x1: end.add(end.diff(start) / 3).format(), // add 33% to right side of the graph
        y0: 0.25,
        y1: 0.75,
        fillcolor: color,
        opacity: 0.8,
        line: {
          width: 0,
        },
      },
    ],
    margin: {
      l: 0,
      r: 0,
      t: 60,
      b: 60,
    },
    // autosize: false,
  }
}

type TimelinePhaseProps = {
  name: string
  color: string
  rowData: Row[]
  schema: ObservationCardSchema
  widthPx: number
}

const TimelinePhase = ({
  color,
  rowData,
  schema,
  widthPx,
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
  const timepointData = getTimepointData(
    start,
    rowData,
    schema,
    hoverEventRowId,
  )

  const end = getMaxDate(timepointData.timepoints)
  return (
    <div ref={componentRef}>
      <Plot
        style={{ width: widthPx, height: '220px' }}
        data={getTimelineData(timepointData, rowData)}
        layout={getLayout(start, end, color, annotateTime, annotateTimeUnits)}
        config={{ displayModeBar: false }}
        useResizeHandler={true}
        onClick={eventData => {
          setClickEvent(eventData)
          setHoverEvent(undefined)
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
