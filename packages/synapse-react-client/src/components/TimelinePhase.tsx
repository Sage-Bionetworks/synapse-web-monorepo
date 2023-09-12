import React from 'react'
import Plotly, { Layout } from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
const Plot = createPlotlyComponent(Plotly)

const timelineData = [
  {
    x: [10, 10],
    y: [0, 1],
    mode: 'lines',
    line: {
      color: 'gray',
      width: 2,
    },
    textposition: 'top',
    name: 'Event 1',
  },
  {
    x: [20, 20],
    y: [0, 1],
    mode: 'lines',
    line: {
      color: 'gray',
      width: 2,
    },
    textposition: 'top',
    name: 'Event 1',
  },
]

const layout: Partial<Layout> = {
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
      fillcolor: 'rgba(50, 171, 96, 0.5)',
      line: {
        width: 0,
      },
    },
  ],
}

const TimelinePhase = () => {
  return (
    <Plot
      layout={layout}
      data={timelineData}
      style={{ width: '100%', height: '300px' }}
      useResizeHandler={true}
    />
  )
}

export default TimelinePhase
