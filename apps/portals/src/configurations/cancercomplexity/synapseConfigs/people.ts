import { SynapseConstants, SynapseComponents } from 'synapse-react-client'
import type { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import type { IconOptions } from 'synapse-react-client/dist/containers/row_renderers/utils/Icon'
import type { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { peopleSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'
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

// TODO: Change iconOptions type to map () => string | JSX.Element and remove cast
const iconOptions: IconOptions = {
  Grant: SynapseComponents.ProjectIcon as unknown as string,
}

export const peopleCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 3,
  iconOptions,
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
