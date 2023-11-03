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
  if (timepoints.length == 0) {
    return dayjs().add(1, 'days')
  }
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
  // If this phase has no data, return an empty data line
  if (timepointData.timepoints.length == 0) {
    return [
      {
        x: [dayjs().format()],
        y: [0.5],
        mode: 'lines',
        line: {
          color: 'blue',
          width: 2,
        },
        customdata: [],
        hoverinfo: 'none',
      },
    ]
  }

  // first combine all of the Rows that share the same timepoint
  const combinedData: Record<string, Row[]> = timepointData.timepoints.reduce(
    (result, currentTimepoint, index) => {
      const resultRecord = result as Record<string, Row[]>
      if (!resultRecord[currentTimepoint.format()]) {
        resultRecord[currentTimepoint.format()] = []
      }
      resultRecord[currentTimepoint.format()].push(rowData[index])
      return result
    },
    {},
  )

  const data = timepointData.timepoints.map((timepoint, index) => {
    const utcFormattedTimepoint = timepoint.format()
    const isHoveredOver = index == timepointData.hoverOverIndex
    const rows = combinedData[utcFormattedTimepoint]
    const rowIds = rows.map(row => {
      return row.rowId
    })
    return {
      x: [utcFormattedTimepoint, utcFormattedTimepoint, utcFormattedTimepoint],
      y: [0, 0.5, 1],
      mode: 'lines',
      line: {
        color: isHoveredOver ? 'black' : 'gray',
        width: 2,
      },
      // Add event into in the customdata
      customdata: [rowIds, rowIds, rowIds],
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
  annotateEventCount?: number,
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
  if (annotateTime && annotateTimeUnits && annotateEventCount) {
    const eventCountText =
      annotateEventCount > 1 ? `(${annotateEventCount})` : ''
    const x = start.add(annotateTime, annotateTimeUnits)
    annotations.push({
      x: x.format(),
      y: -1,
      text: `${annotateTime} ${pluralize(
        annotateTimeUnits,
        annotateTime,
      )} ${eventCountText}`,
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
  const rowIds = clickEvent?.points[0].customdata as unknown as (
    | number
    | undefined
  )[]
  const selectedRows = rowData?.filter(row => {
    return rowIds?.includes(row.rowId)
  })
  const hoverEventRowIds = hoverEvent?.points[0].customdata as unknown as (
    | number
    | undefined
  )[]
  const hoverRows = rowData?.filter(row => {
    return hoverEventRowIds?.includes(row.rowId)
  })
  const annotateTime =
    hoverRows && hoverRows.length > 0
      ? parseInt(hoverRows[0].values[schema.time]!)
      : undefined
  const annotateTimeUnits =
    hoverRows && hoverRows.length > 0
      ? (hoverRows[0].values[schema.timeUnits] as ManipulateType)
      : undefined
  const timepointData = getTimepointData(
    start,
    rowData,
    schema,
    hoverEventRowIds?.length > 0 ? hoverEventRowIds[0] : undefined,
  )

  const end = getMaxDate(timepointData.timepoints)
  return (
    <div ref={componentRef} style={{ width: widthPx }}>
      <Plot
        style={{ width: widthPx, height: '220px' }}
        data={getTimelineData(timepointData, rowData)}
        layout={getLayout(
          start,
          end,
          color,
          annotateTime,
          annotateTimeUnits,
          hoverRows.length,
        )}
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
      {selectedRows && (
        <Dialog
          onClose={() => setClickEvent(undefined)}
          open={!!selectedRows && selectedRows.length > 0}
        >
          {selectedRows.map(row => {
            return (
              <ObservationCard
                key={row.rowId}
                data={row.values}
                schema={schema}
                includePortalCardClass={false}
              />
            )
          })}
        </Dialog>
      )}
    </div>
  )
}

export default TimelinePhase
