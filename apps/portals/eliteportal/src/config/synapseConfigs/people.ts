import { QueryWrapperPlotNavProps } from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { defaultSearchConfiguration, peopleSql } from '../resources'

const rgbIndex = 2

const peopleQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
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
}

export default peopleQueryWrapperPlotNavProps
