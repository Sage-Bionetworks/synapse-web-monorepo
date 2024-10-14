import { Box, Typography } from '@mui/material'
import { Row } from '@sage-bionetworks/synapse-types'
import Plotly, { Datum } from 'plotly.js-basic-dist'
import React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'

const Plot = createPlotlyComponent(Plotly)
export type SynapseByTheNumbersItemProps = {
  title: string
  description: string
  rows: Row[]
  plotXColIndex: number
  plotYColIndex: number
}

export const SynapseByTheNumbersItem: React.FunctionComponent<
  SynapseByTheNumbersItemProps
> = ({ title, description, rows, plotXColIndex, plotYColIndex }) => {
  if (rows.length == 0) {
    return <></>
  }
  const xArray: Datum[] = []
  const yArray: Datum[] = []
  for (const row of rows) {
    for (let j = 1; j < row.values.length; j += 1) {
      // create pairs of data
      const rowValues = row.values
      xArray.push(rowValues[plotXColIndex])
      yArray.push(rowValues[plotYColIndex])
    }
  }
  //convert table data into numbers
  const yArrayNumbers = yArray.map(v => parseFloat(v!.toString()))

  const plotData: Partial<Plotly.PlotData>[] = [
    {
      type: 'scatter',
      mode: 'lines',
      fill: 'tozeroy',
      fillcolor: '#336663',
      line: {
        color: '#6ba89d',
        shape: 'spline', //smooth line, will need to do a more complex cubic spline interpolation (introducing new values between the data points) if we want to really smooth this out
        smoothing: 1.3,
      },
      x: xArray,
      y: yArrayNumbers,
      hoverinfo: 'skip', //hide hover over tool tips
    },
  ]

  // calculate the y axis range to show off the trend
  const maxY = Math.max(...yArrayNumbers)
  const minY = Math.min(...yArrayNumbers)
  // we're showing a trend, so set the y-axis range minimum to 5% below the minimum point
  const rangeMinYValue = minY - minY * 0.05
  const layout: Partial<Plotly.Layout> = {
    showlegend: false,
    xaxis: {
      visible: false, // Hide x-axis
      showgrid: false, // Hide x-axis grid
    },
    yaxis: {
      visible: false, // Hide y-axis
      showgrid: false, // Hide y-axis grid
      range: [rangeMinYValue, maxY], // Set the range from half of minY to maxY
    },
    paper_bgcolor: 'rgba(0,0,0,0)', // Transparent background
    plot_bgcolor: 'rgba(0,0,0,0)', // Transparent plot area
    width: 170,
    height: 100,
    margin: {
      l: 0,
      r: 0,
      t: 0,
      b: 0,
      pad: 0,
    },
  }
  const config: Partial<Plotly.Config> = {
    displayModeBar: false, // Hide Plotly controls
    staticPlot: true, //disable all interactivity
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        p: {
          xs: '5px',
          sm: '20px',
        },
      }}
    >
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '40px',
            color: 'white',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '24px',
            color: 'white',
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          //add a linear gradient (fades out near the bottom)
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)',
        }}
      >
        <Plot layout={layout} data={plotData} config={config} />
      </Box>
    </Box>
  )
}
