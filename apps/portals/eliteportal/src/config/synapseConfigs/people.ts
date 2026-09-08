import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import {
  defaultSearchConfiguration,
  peopleSearchIndexId,
  peopleSql,
} from '../resources'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

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

export const peopleSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'People',
  shouldDeepLink: false,
  cardConfiguration: {
    type: SynapseConstants.MEDIUM_USER_CARD,
  },
  facetsToPlot: ['institution', 'grant'],
  searchIndexId: peopleSearchIndexId,
  // autocompleteFieldName: 'lastName',
  hideTopLevelControls: false,
  hideQueryCount: false,
}

export default peopleQueryWrapperPlotNavProps
