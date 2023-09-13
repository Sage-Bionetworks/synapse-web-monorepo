import React from 'react'
import Plotly, { Layout } from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import { ObservationEvent } from './TimelinePlot'
const Plot = createPlotlyComponent(Plotly)

const timelineData = [
  {
    x: [10, 10, 10],
    y: [0, 0.5, 1],
    mode: 'lines',
    line: {
      color: 'gray',
      width: 2,
    },
    name: 'Event 1',
    // Add event into in the customdata
    customdata: [
      'Custom Data for Event 1a',
      'Custom Data for Event 1b',
      'Custom Data for Event 1c',
    ],
    // but tell Plotly that we do not want it to show a hover tooltip (we're going to handle this)
    hoverinfo: 'none',
  },
  {
    x: [20, 20, 20],
    y: [0, 0.5, 1],
    mode: 'lines',
    line: {
      color: 'gray',
      width: 2,
    },
    name: 'Event 2',
    customdata: [
      'Custom Data for Event 2a',
      'Custom Data for Event 2b',
      'Custom Data for Event 2c',
    ],
    hoverinfo: 'none',
  },
]

const getLayout = (color: string): Partial<Layout> => {
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
        x0: 0,
        x1: 100,
        y0: 0.25,
        y1: 0.75,
        fillcolor: color,
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
  observationEvents?: ObservationEvent[]
}
const TimelinePhase = ({
  name,
  color,
  timeMax,
  timeUnits,
  observationEvents,
}: TimelinePhaseProps) => {
  return (
    <Plot
      layout={getLayout(color)}
      data={timelineData}
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
