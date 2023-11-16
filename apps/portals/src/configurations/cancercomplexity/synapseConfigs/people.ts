import {
  CardConfiguration,
  GenericCardSchema,
  SynapseConstants,
} from 'synapse-react-client'
import { peopleSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'
import personSvg from '../style/Person.svg'

const rgbIndex = 3

export const peopleSchema: GenericCardSchema = {
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

export const people: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
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
  },
}
