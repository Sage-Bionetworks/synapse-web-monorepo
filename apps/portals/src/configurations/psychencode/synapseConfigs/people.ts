import { SynapseConfig } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { ColumnMultiValueFunction } from 'synapse-react-client/dist/utils/synapseTypes/Table/QueryFilter'

import { peopleSql } from '../resources'

const name = 'People'
const sql = 'SELECT * FROM syn22096112'
const rgbIndex = 4

export const people: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    sql: peopleSql,
    cardConfiguration: {
      type: SynapseConstants.MEDIUM_USER_CARD,
    },
    rgbIndex,
    name,
    shouldDeepLink: true,
    hideDownload: true,
    searchConfiguration: {
      searchable: ['grants', 'firstName', 'lastName'],
    },
  },
}

export const peopleDetailPageProps = {
  sql,
  type: SynapseConstants.MEDIUM_USER_CARD,
  sqlOperator: ColumnMultiValueFunction.HAS,
}
