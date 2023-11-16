import React from 'react'
import SynapsePlot from '../../../src/components/Plot/SynapsePlot'

export const SynapsePlotDemo: React.FunctionComponent = () => {
  return (
    <SynapsePlot
      synapsePlotWidgetParams={{
        query:
          "SELECT 'date', survey_1, survey_2, survey_3, survey_4 FROM syn22314856",
        title: 'New Participants Per Survey Per Day',
        xtitle: 'Date',
        ytitle: 'Count',
        type: 'scatter',
        horizontal: true,
        // xaxistype:,
        showlegend: true,
      }}
    />
  )
}
