import rawData from '@/mocks/distribution_data.json'
import { Meta, StoryObj } from '@storybook/react-vite'
import Plotly from 'plotly.js-basic-dist'
import Plot from './Plot'

const meta = {
  title: 'Components/PlotlyPlot',
  component: Plot,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

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
    // @ts-expect-error
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
] satisfies Plotly.Data[]

const boxPlotLayout = {
  width: 300,
  height: 110,
  margin: {
    t: 10,
  },
  xaxis: {
    visible: false,
  },
} satisfies Partial<Plotly.Layout>

const barColors = rawData.geneticsscore.distribution.map((item, ind) =>
  ind === 1 ? 'rgba(166, 132, 238, 1)' : 'rgba(166, 132, 238, 0.25)',
)

const sharedBarData = {
  type: 'bar',
  marker: {
    color: barColors,
  },
  width: 0.2,
} satisfies Plotly.Data

const geneticsscoreData = [
  {
    x: Object.values(rawData.geneticsscore.bins).map(num => num.toFixed(2)),
    y: Object.values(rawData.geneticsscore.distribution),
    ...sharedBarData,
  },
] satisfies Plotly.Data[]

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

export const BarChart: Story = {
  args: {
    data: geneticsscoreData,
    layout: specialBarLayout,
    config: plotConfigs,
  },
}

export const BoxPlot: Story = {
  args: {
    data: boxPlotData,
    layout: boxPlotLayout,
    config: plotConfigs,
    className: 'chart-boxplot',
  },
}

export const NoData: Story = {
  args: {
    data: [],
    layout: specialBarLayout,
    config: plotConfigs,
  },
}
