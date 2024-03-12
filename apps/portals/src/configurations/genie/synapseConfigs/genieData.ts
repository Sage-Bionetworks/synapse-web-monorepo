import { SynapseConfig } from 'types/portal-config'
import { genieDataSql } from '../resources'

const rgbIndex = 0

const genieData: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql: genieDataSql,
    name: 'Files',
    tableConfiguration: {
      // columnLinks: dataColumnLinks,
    },
    defaultShowPlots: false,
  },
}

export default genieData
