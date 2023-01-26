import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PlotlyWrapper from './PlotlyWrapper'
import rawData from '../../mocks/distribution_data.json'

export default {
  title: 'Components/PlotlyWrapper',
  component: PlotlyWrapper,
} as ComponentMeta<typeof PlotlyWrapper>

const Template: ComponentStory<typeof PlotlyWrapper> = args => (
  <PlotlyWrapper {...args} />
)

const plotConfigs = {
  displayModeBar: false,
}

const boxPlotData = [
  {
    x: [1, 2, 3, 4, 4, 4, 8, 9, 10],
    name: '',
    marker: {
      color: 'rgba(229, 220, 247, 1)', // "rgba(166, 132, 238, 0.25)",
      // line: {
      //   width: 1
      // }
    },
    type: 'box',
    boxmean: false,
    orientation: 'h',
    whiskerwidth: 1,
    hoverinfo: 'x',
  },
  {
    x: [2.3],
    y: [''],
    name: '',
    marker: {
      symbol: 'line-ns',
      color: 'rgba(166, 132, 238, 1)',
    },
    hovertemplate: 'Score: %{x}',
  },
]

const boxPlotLayout = {
  width: 300,
  height: 110,
  margin: {
    t: 10,
  },
  xaxis: {
    visible: false,
  },
}

const barColors = rawData.geneticsscore.distribution.map((item, ind) =>
  ind === 1 ? 'rgba(166, 132, 238, 1)' : 'rgba(166, 132, 238, 0.25)',
)

const sharedBarData = {
  type: 'bar',
  marker: {
    color: barColors,
  },
  width: 0.2,
}

const geneticsscoreData = [
  {
    x: Object.values(rawData.geneticsscore.bins).map(num => num.toFixed(2)),
    y: Object.values(rawData.geneticsscore.distribution),
    ...sharedBarData,
  },
]

// Additional info to customize axis: https://plotly.com/javascript/axes/
const barLayout = {
  width: 300,
  xaxis: {
    title: 'Gene Score'.toUpperCase(),
    titlefont: {
      size: 12,
    },
    tick0: 0,
    dtick: 0.3,
  },
  yaxis: {
    title: 'Number of Genes'.toUpperCase(),
    titlefont: {
      size: 12,
    },
  },
  plot_bgcolor: 'rgba(236, 236, 236, 0.25)',
}

const specialBarLayout = {
  ...barLayout,
  annotations: [
    {
      x: 0.3,
      y: 5149,
      text: '2.5',
      ax: 0,
      ay: -10,
    },
  ],
}

export const BarChart = Template.bind({})
BarChart.args = {
  data: geneticsscoreData,
  layout: specialBarLayout,
  containerWidth: 300,
  config: plotConfigs,
}

export const BoxPlot = Template.bind({})
BoxPlot.args = {
  data: boxPlotData,
  layout: boxPlotLayout,
  containerWidth: 300,
  config: plotConfigs,
  className: 'chart-boxplot',
}

export const NoData = Template.bind({})
NoData.args = {
  data: [],
  layout: specialBarLayout,
  containerWidth: 300,
  config: plotConfigs,
}
