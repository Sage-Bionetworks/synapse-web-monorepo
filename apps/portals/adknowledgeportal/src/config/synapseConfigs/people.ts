import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { peopleSql } from '../resources'

const rgbIndex = 2

export const PEOPLE_COLUMN_NAMES = {
  GRANT_NUMBER: 'Grant Number',
}

export const peopleQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
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
}
