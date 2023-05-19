import {
  CardConfiguration,
  GenericCardSchema,
  IconOptions,
  SynapseComponents,
  SynapseConstants,
} from 'synapse-react-client'
import { grantsSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'

const rgbIndex = 3

export const grantsSchema: GenericCardSchema = {
  type: 'Grant',
  title: 'grantName',
  subTitle: 'grantInstitution',
  description: 'abstract',
  secondaryLabels: [
    'investigator',
    'grantNumber',
    'consortium',
    'grantType',
    'theme',
  ],
}

// TODO: Change iconOptions type to map () => string | JSX.Element and remove cast
const iconOptions: IconOptions = {
  Grant: SynapseComponents.ProjectIcon as unknown as string,
}

export const grantsCardConfiguration: CardConfiguration = {
  genericCardSchema: grantsSchema,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'grantId',
    matchColumnName: 'grantId',
    baseURL: 'Explore/Grants/DetailsPage',
  },
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  iconOptions,
}

export const grants: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: grantsSql,
    cardConfiguration: grantsCardConfiguration,
    shouldDeepLink: true,
    name: 'Grants',
    facetsToPlot: ['consortium', 'grantType'],
    searchConfiguration: {
      searchable: [
        'grantName',
        'abstract',
        'grantInstitution',
        'investigator',
        'grantNumber',
      ],
    },
  },
}
