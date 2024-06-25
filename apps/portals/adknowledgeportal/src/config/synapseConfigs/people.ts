import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { peopleSql } from '../resources'

const rgbIndex = 2

const people: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: peopleSql,
    name: 'People',
    shouldDeepLink: true,
    cardConfiguration: {
      type: SynapseConstants.MEDIUM_USER_CARD,
    },
    searchConfiguration: {
      searchable: [
        'firstName',
        'lastName',
        'institution',
        'Program',
        'Grant Number',
      ],
    },
  },
}

export default people
