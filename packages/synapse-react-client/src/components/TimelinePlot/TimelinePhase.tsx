import React, { useEffect, useRef, useState } from 'react'
import Plotly, { Layout } from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import { ObservationEvent } from './TimelinePlot'
import dayjs, { ManipulateType } from 'dayjs'
import { Paper, Typography } from '@mui/material'
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
  timeMax: number,
  timeUnits: string,
  color: string,
  observationEvents: ObservationEvent[],
): Partial<Layout> => {
  const end = start.add(timeMax, timeUnits as ManipulateType)
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

    // event annotations
    // annotations: observationEvents.map(event => {
    //   const x = start.add(event.time!, event.timeUnit as ManipulateType)
    //   const annotation: Partial<Plotly.Annotations> = {
    //     x: x.format(),
    //     y: -0.4,
    //     text: `${event.time} ${pluralize(event.timeUnit!, event.time!)}`,
    //     showarrow: false,
    //     textangle: '270',
    //   }
    //   return annotation
    // }),

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
  const [hoverEvent, setHoverEvent] = useState<Plotly.PlotHoverEvent>()
  const start = dayjs()

  // hide the hover UI if we detect that the user moves the mouse outside of this component boundary
  const componentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (componentRef.current) {
        const componentRect = componentRef.current.getBoundingClientRect()
        const mouseX = e.clientX
        const mouseY = e.clientY

        // Check if the mouse is outside the component boundaries
        if (
          mouseX < componentRect.left ||
          mouseX > componentRect.right ||
          mouseY < componentRect.top ||
          mouseY > componentRect.bottom
        ) {
          setHoverEvent(undefined)
        }
      }
    }

    // Add the event listener to the window
    window.addEventListener('mousemove', handleMouseMove)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const id = hoverEvent?.points[0].customdata as string
  return (
    <div ref={componentRef}>
      <Plot
        data={getTimelineData(start, observationEvents)}
        layout={getLayout(start, timeMax, timeUnits, color, observationEvents)}
        config={{ displayModeBar: false }}
        style={{ maxHeight: '300px' }}
        useResizeHandler={true}
        onHover={eventData => {
          setHoverEvent(eventData)
        }}
      />
      <Paper
        sx={{
          position: 'fixed',
          top: `${hoverEvent?.event.y}px`,
          left: `${hoverEvent?.event.x}px`,
          display: hoverEvent ? 'block' : 'none',
        }}
      >
        <Typography sx={{ p: 2 }} variant="body1">
          {id}
        </Typography>
      </Paper>
    </div>
  )
}

export default TimelinePhase
