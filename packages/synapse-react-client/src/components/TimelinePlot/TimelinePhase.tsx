import React, { useMemo, useRef, useState } from 'react'
import Plotly, { Layout, PlotData } from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import dayjs, { ManipulateType } from 'dayjs'
import { Dialog } from '@mui/material'
import {
  ObservationCard,
  ObservationCardSchema,
} from '../row_renderers/ObservationCard'
import { Row } from '@sage-bionetworks/synapse-types'

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
    const time = parseFloat(row.values[schema.observationTime]!)
    const timeUnit = row.values[schema.observationTimeUnits]
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
  if (
    timepointData.timepoints == undefined ||
    timepointData.timepoints.length == 0
  ) {
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
        width: isHoveredOver ? 2 : 1,
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
  timelineData: Plotly.Data[],
  rowData: Row[],
  schema: ObservationCardSchema,
): Partial<Layout> => {
  const xTickVals = timelineData.map(value => {
    // return the utcFormattedTimepoint
    return (value as PlotData).x[0]
  })
  const xTickText = timelineData.map(value => {
    const rowIds = (value as PlotData).customdata[0] as number[] | undefined
    if (rowIds && rowIds.length > 0) {
      const count = rowIds.length
      const rows = rowData?.filter(row => {
        return rowIds[0] == row.rowId
      })
      if (rows && rows.length > 0) {
        const row = rows[0]
        const time = parseFloat(row.values[schema.observationTime]!)
        const timeUnits = row.values[
          schema.observationTimeUnits
        ] as ManipulateType
        const countString = count > 1 ? `(${count})` : ''
        return `${time} ${timeUnits} ${countString}`
      }
    }
    return ''
  })

  return {
    hovermode: 'closest',
    dragmode: false, //disallow interaction
    showlegend: false,
    xaxis: {
      showgrid: false,
      showticklabels: true,
      showline: false,
      zeroline: false,
      tickvals: xTickVals,
      ticktext: xTickText,
      tickangle: -45,
    },

    yaxis: {
      range: [0, 1.25],
      showgrid: false,
      zeroline: false,
      showline: false,
      showticklabels: false,
    },
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
  const [plotKey, setPlotKey] = useState(1)
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

  const timepointData = useMemo(() => {
    return getTimepointData(
      start,
      rowData,
      schema,
      hoverEventRowIds?.length > 0 ? hoverEventRowIds[0] : undefined,
    )
  }, [hoverEventRowIds, rowData, schema, start])

  const end = getMaxDate(timepointData.timepoints)

  const timelineData = useMemo(() => {
    return getTimelineData(timepointData, rowData)
  }, [timepointData, rowData])

  return (
    <div ref={componentRef} style={{ width: widthPx }}>
      <Plot
        key={`Plot-${color}-${plotKey}`}
        style={{ width: widthPx, height: '220px' }}
        data={timelineData}
        layout={getLayout(start, end, color, timelineData, rowData, schema)}
        config={{ displayModeBar: false }}
        useResizeHandler={true}
        onClick={eventData => {
          setClickEvent(eventData)
          setHoverEvent(undefined)
        }}
        // PORTALS-2861: To avoid the plot handling the double-click, change the key so the Plotly graph (gd) associated
        // to the click event is invalid.
        onDoubleClick={() => {
          setPlotKey(plotKey + 1)
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
