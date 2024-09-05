import React, { useState } from 'react'
import ThemesPlot from '../../../src/components/Plot/ThemesPlot'
import {
  ClickCallbackParams,
  PlotProps,
} from '../../../src/components/Plot/types'
import { Range, RangeValues } from '../../../src/components/widgets/Range'
import RangeSlider from '../../../src/components/widgets/RangeSlider/RangeSlider'

export const WidgetDemo: React.FunctionComponent = () => {
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(false)
  const [rangeNumberValue, setRangeNumberValue] = useState(() => {
    const result: RangeValues = {
      min: '10.5',
      max: '30',
    }
    return result
  })
  const [rangeDateValue, setRangeDateValue] = useState(() => {
    const result: RangeValues = {
      min: new Date(2019, 5, 10).toISOString(),
      max: new Date(2019, 6, 11).toISOString(),
    }
    return result
  })

  const [rangeSliderValue, setRangeSliderValue] = useState<RangeValues>({
    min: '10',
    max: '25',
  })

  const topBarPlotProps: PlotProps = {
    entityId: 'syn21641485',
    xField: 'totalCount',
    yField: 'groupBy',
    groupField: 'consortium',
    whereClause: 'totalCount is not NULL',
    colors: {
      CSBC: 'rgba(64,123,160, 1)',
      'PS-ON': 'rgba(91,176,181,1)',
    },
  }

  const sideBarPlotProps: PlotProps = {
    entityId: 'syn21649281',
    xField: 'totalCount',
    yField: 'theme',
    groupField: 'consortium',
    countLabel: 'projects',
    plotStyle: {
      backgroundColor: '#f5f9fa',
    },
    colors: {
      CSBC: '#4788A5',
      'PS-ON': '#5bb0b5',
    },
  }

  const dotPlotProps: PlotProps = {
    entityId: 'syn21639584',
    xField: 'totalCount',
    yField: 'theme',
    groupField: 'groupBy',
    infoField: 'themeDescription',
    whereClause: "groupBy IN ('publications', 'tools', 'datasets')",
    markerSymbols: {
      tools: 'y-down',
      datasets: 'diamond-x',
      publications: 'circle',
    },
    plotStyle: {
      markerLine: 'rgba(0, 0, 0,1)',
      markerFill: 'rgba(255, 255, 255,1)',
      markerSize: 11,
      backgroundColor: '#f5f9fa',
    },
  }

  const plotCallback = ({ facetValue, type }: ClickCallbackParams) => {
    alert(`facetValue: ${facetValue} type: ${type}`)
  }

  return (
    <div className="container">
      <h4 style={{ marginTop: '20px' }}>Number Range</h4>
      Number Range Value is:
      {` ${rangeNumberValue.min} - ${rangeNumberValue.max}`}
      <br />
      <Range
        type="number"
        initialValues={{ min: rangeNumberValue.min, max: rangeNumberValue.max }}
        onApplyClicked={(values: RangeValues) => setRangeNumberValue(values)}
      ></Range>
      <hr></hr>
      <h4>Date Range</h4>
      Number Date Value is: {rangeDateValue.min} - {rangeDateValue.max}
      <br />
      <Range
        type="date"
        initialValues={{ min: rangeDateValue.min, max: rangeDateValue.max }}
        onApplyClicked={(values: RangeValues) => setRangeDateValue(values)}
      ></Range>
      <hr></hr>
      <h4>Range Slider</h4>
      Range Slider Value is: {rangeSliderValue.min} - {rangeSliderValue.max}
      <br />
      <RangeSlider
        initialValues={rangeSliderValue}
        onChange={setRangeSliderValue}
        domain={['0', '100']}
        step={1}
      ></RangeSlider>
      <ThemesPlot
        onPointClick={plotCallback}
        topBarPlot={topBarPlotProps}
        sideBarPlot={sideBarPlotProps}
        dotPlot={dotPlotProps}
      ></ThemesPlot>
    </div>
  )
}
