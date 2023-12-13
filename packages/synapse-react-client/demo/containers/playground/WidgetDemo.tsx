import React from 'react'
import { Checkbox } from '../../../src/components/widgets/Checkbox'
import { RadioGroup } from '../../../src/components/widgets/RadioGroup'
import ThemesPlot from '../../../src/components/Plot/ThemesPlot'
import {
  PlotProps,
  ClickCallbackParams,
} from '../../../src/components/Plot/types'
import { Range, RangeValues } from '../../../src/components/widgets/Range'
import RangeSlider from '../../../src/components/widgets/RangeSlider/RangeSlider'
import { useState } from 'react'

export const WidgetDemo: React.FunctionComponent = () => {
  const options = [
    { label: 'option 1', value: 'option1' },
    { label: 'option 2', value: 'option2' },
    { label: 'option 3', value: 'option3' },
  ]
  const [check1, setCheck1] = useState(true)
  const [check2, setCheck2] = useState(false)
  const [optionValue, setOptionValue] = useState('option2')
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
      <div style={{ fontWeight: 'bold' }}></div>
      <h4 style={{ marginTop: '20px' }}>Checkbox</h4>
      Checkbox 1 is {check1 ? 'checked' : 'unchecked'}
      <br />
      Checkbox 2 is {check2 ? 'checked' : 'unchecked'}
      <br />
      <Checkbox
        label="Initially Checked Checkbox"
        checked={true}
        onChange={(checked: boolean) => setCheck1(checked)}
      ></Checkbox>
      <Checkbox
        label="Initially Unchecked Checkbox"
        onChange={(checked: boolean) => setCheck2(checked)}
      ></Checkbox>
      <hr></hr>
      <h4 style={{ marginTop: '20px' }}>Radio</h4>
      Option Value is: {optionValue}
      <br />
      <RadioGroup
        options={options}
        value={optionValue}
        onChange={(value: string) => setOptionValue(value)}
      ></RadioGroup>
      <hr></hr>
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
