import Plotly from 'plotly.js-basic-dist'
import * as React from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SynapseConstants } from '../../utils/'
import { getFullQueryTableResults } from '../../utils/SynapseClient'
import {
  QueryResultBundle,
  QueryBundleRequest,
} from '../../utils/synapseTypes/'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/sqlFunctions'
import { SynapseContext } from '../../utils/SynapseContext'
const Plot = createPlotlyComponent(Plotly)

export type SynapsePlotProps = {
  ownerId?: string
  wikiId?: string
  widgetparamsMapped?: any
}

type SynapsePlotState = {
  isLoaded: boolean
  queryData: QueryResultBundle
}

class SynapsePlot extends React.Component<SynapsePlotProps, SynapsePlotState> {
  constructor(props: SynapsePlotProps) {
    super(props)
    this.state = {
      isLoaded: false,
      queryData: {} as QueryResultBundle,
    }
    this.fetchPlotlyData = this.fetchPlotlyData.bind(this)
    this.showPlot = this.showPlot.bind(this)
  }

  static contextType = SynapseContext
  declare context: NonNullable<React.ContextType<typeof SynapseContext>>

  public componentDidMount() {
    this.fetchPlotlyData()
  }
  /**
   * Get data for plotly
   *
   * @returns data corresponding to plotly widget
   */
  public fetchPlotlyData() {
    const { query } = this.props.widgetparamsMapped
    const queryRequest: QueryBundleRequest = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
      entityId: parseEntityIdFromSqlStatement(query),
      query: {
        sql: query,
      },
    }

    getFullQueryTableResults(queryRequest, this.context.accessToken)
      .then((data: QueryResultBundle) => {
        this.setState({
          isLoaded: true,
          queryData: data,
        })
      })
      .catch((err: any) => {
        console.log('Error on full table query ', err)
      })
  }

  public showPlot() {
    if (!this.state.isLoaded) {
      return
    }
    const { title, xtitle, ytitle, type, xaxistype, showlegend } =
      this.props.widgetparamsMapped
    const queryData = this.state
    const isHorizontal = this.props.widgetparamsMapped.horizontal.toLowerCase()
    const layout: any = {
      showlegend,
      title,
    }
    if (xtitle) {
      layout.xaxis = {
        title: xtitle,
      }
    }
    if (xaxistype) {
      layout.xaxis = {
        ...layout.xaxis,
        xaxistype: xaxistype.toLowerCase(),
      }
    }
    if (ytitle) {
      layout.yaxis = {
        title: ytitle,
      }
    }
    // init plot_data
    const plotData: any = []
    const orientation = isHorizontal ? 'v' : 'h'
    const headers = queryData.queryData.queryResult?.queryResults.headers ?? []
    for (let i = 0; i < headers.length - 1; i += 1) {
      // make an entry for each set of data points
      plotData[i] = {
        orientation,
        name: headers[i + 1].name,
        type: type.toLowerCase(),
        x: [],
        y: [],
      }
    }
    // grab all the data
    for (const row of queryData.queryData.queryResult?.queryResults.rows ??
      []) {
      for (let j = 1; j < row.values.length; j += 1) {
        // create pairs of data
        const rowValues: any = row.values
        plotData[j - 1].x.push(rowValues[0])
        plotData[j - 1].y.push(rowValues[j])
      }
    }
    return <Plot layout={layout} data={plotData} />
  }

  public render() {
    if (!this.state.isLoaded) {
      return null
    }
    return this.showPlot()
  }
}
export default SynapsePlot
