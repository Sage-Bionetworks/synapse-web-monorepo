import React from 'react'
import Plotly, { Layout } from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import { ObservationEvent } from './TimelinePlot'
import dayjs, { Dayjs, ManipulateType } from 'dayjs'
const Plot = createPlotlyComponent(Plotly)

const getTimelineData = (
  start: dayjs.Dayjs,
  observationEvents: ObservationEvent[],
) => {
  const data = observationEvents.map(event => {
    const timepoint = start.add(event.time!, event.timeUnit as ManipulateType)
    const utcFormattedTimepoint = timepoint.format()
    return {
      x: [utcFormattedTimepoint, utcFormattedTimepoint, utcFormattedTimepoint],
      y: [0, 0.5, 1],
      mode: 'lines',
      line: {
        color: 'gray',
        width: 2,
      },
      // Add event into in the customdata
      customdata: [event.id, event.id, event.id],
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
): Partial<Layout> => {
  return {
    hovermode: 'closest',
    showlegend: false,
    xaxis: {
      showgrid: false,
      showticklabels: false,
      showline: false,
      zeroline: false,
    },
    yaxis: {
      showgrid: false,
      zeroline: false,
      showline: false,
      showticklabels: false,
    },

    // event annotations
    annotations: [
      {
        x: 10,
        y: -0.2,
        text: '10', // Text to display
        showarrow: false,
      },
    ],

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
  observationEvents: ObservationEvent[]
}
const TimelinePhase = ({
  color,
  timeMax,
  timeUnits,
  observationEvents,
}: TimelinePhaseProps) => {
  const start = dayjs()
  const end = start.add(timeMax, timeUnits as ManipulateType)
  debugger
  return (
    <Plot
      data={getTimelineData(start, observationEvents)}
      layout={getLayout(start, end, color)}
      config={{ displayModeBar: false }}
      style={{ width: '100%', height: '300px' }}
      useResizeHandler={true}
      onHover={eventData => {
        if (eventData.points[0]) {
          //TODO: pop up UI at this position that has the event info, and a link!
          const point = eventData.points[0]
          console.log(`Pop up custom hover using the following info:`)
          console.log(
            `curveNumber:${point.curveNumber}, pointNumber: ${point.pointNumber}`,
          )
          console.log(`x:${point.x}, y: ${point.y}`)
          console.log(`custom data:${point.customdata}`)
        }
      }}
    />
  )
}

export default TimelinePhase
