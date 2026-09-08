import personSvg from '@/config/style/Person.svg?url'
import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { peopleSearchIndexId, peopleSql } from '../resources'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

const rgbIndex = 3

export const peopleSchema: TableToGenericCardMapping = {
  type: 'Person',
  title: 'name',
  subTitle: 'lastKnownInstitution',
  description: '',
  secondaryLabels: [
    'email',
    'orcidId',
    'consortium',
    'workingGroupParticipation',
    'synapseProfileLink',
  ],
}

export const peopleCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 3,
  iconOptions: {
    Person: personSvg,
  },
  genericCardSchema: peopleSchema,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'name',
    matchColumnName: 'name',
    baseURL: 'Explore/People',
    urlParamStyle: 'path-segment',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'synapseProfileLink',
    },
  ],
}

export const peopleQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: peopleSql,
  cardConfiguration: peopleCardConfiguration,
  shouldDeepLink: true,
  name: 'People',
  facetsToPlot: ['consortium', 'grantNumber'],
  searchConfiguration: {
    ftsConfig: {
      textMatchesMode: 'BOOLEAN',
      distance: 20,
    },
    searchable: [
      'name',
      'grantName',
      'grantNumber',
      'workingGroupParticipation',
    ],
  },
}

export const peopleSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'People',
  shouldDeepLink: false,
  cardConfiguration: peopleCardConfiguration,
  facetsToPlot: ['consortium', 'grantNumber'],
  searchIndexId: peopleSearchIndexId,
  autocompleteFieldName: 'name',
  hideTopLevelControls: false,
  hideQueryCount: false,
}
