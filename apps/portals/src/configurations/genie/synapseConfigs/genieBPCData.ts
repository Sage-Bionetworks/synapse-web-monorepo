import { SynapseConfig } from 'types/portal-config'
import { genieBPCSql } from '../resources'

const rgbIndex = 0

const genieBPCData: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: genieBPCSql,
    name: 'Files',
    tableConfiguration: {
      // columnLinks: dataColumnLinks,
    },
    defaultShowPlots: false,
  },
}

export default genieBPCData
