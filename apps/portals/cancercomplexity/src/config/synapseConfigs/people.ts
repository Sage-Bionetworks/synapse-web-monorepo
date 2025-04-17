import personSvg from '@/config/style/Person.svg?url'
import {
  CardConfiguration,
  QueryWrapperPlotNavProps,
  SynapseConstants,
} from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { peopleSql } from '../resources'

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
    baseURL: 'Explore/People/DetailsPage',
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
    searchable: [
      'name',
      'grantName',
      'grantNumber',
      'workingGroupParticipation',
    ],
  },
}
