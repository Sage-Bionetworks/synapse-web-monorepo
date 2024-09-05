import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { defaultSearchConfiguration, peopleSql } from '../resources'

const rgbIndex = 2

const people: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: `${peopleSql} ORDER BY firstName`,
    name: 'People',
    shouldDeepLink: true,
    cardConfiguration: {
      type: SynapseConstants.MEDIUM_USER_CARD,
    },
    facetsToPlot: [
      'institution',
      'grant',
      // 'Program',
    ],
    searchConfiguration: defaultSearchConfiguration,
  },
}

export default people
