import * as React from 'react'
import SynapsePlot from '../../../lib/containers/widgets/SynapsePlot'

export const SynapsePlotDemo: React.FunctionComponent = () => {
  return (
    <SynapsePlot
      widgetparamsMapped={{
        query:
          "SELECT 'date', survey_1, survey_2, survey_3, survey_4 FROM syn22314856",
        title: 'New Participants Per Survey Per Day',
        xtitle: 'Date',
        ytitle: 'Count',
        type: 'scatter',
        horizontal: 'true',
        // xaxistype:,
        showlegend: 'true',
      }}
    />
  )
}
