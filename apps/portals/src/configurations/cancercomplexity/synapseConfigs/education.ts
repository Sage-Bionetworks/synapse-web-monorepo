import {
  CardConfiguration,
  GenericCardSchema,
  IconOptions,
  SynapseComponents,
  SynapseConstants,
} from 'synapse-react-client'
import { educationSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'

const rgbIndex = 8

export const educationSchema: GenericCardSchema = {
  type: 'Educational Resource',
  title: 'resourceTitle',
  subTitle: 'resourceTopic',
  description: 'resourceDescription',
  secondaryLabels: [
    'resourceLink',
    'resourceActivityType',
    'resourcePrimaryFormat',
    'resourceIntendedUse',
    'resourcePrimaryAudience',
    'resourceEducationalLevel',
    'resourceOriginInstitution',
    'resourceLanguage',
    'resourceLicense',
    'resourceUseRequirements',
    'resourceMediaAccessibility',
    'resourceAccessHazard',
    'resourceDatasetAlias',
    'resourceToolLink',
  ],
}

// TODO: Change iconOptions type to map () => string | JSX.Element and remove cast
const iconOptions: IconOptions = {
  Grant: SynapseComponents.ProjectIcon as unknown as string,
}

export const educationCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 3,
  iconOptions,
  genericCardSchema: educationSchema,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'resourceTitle',
    matchColumnName: 'resourceTitle',
    baseURL: 'Explore/Education/DetailsPage',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'resourceLink',
    },
    {
      isMarkdown: true,
      matchColumnName: 'resourceDatasetAlias',
    },
    {
      isMarkdown: true,
      matchColumnName: 'resourceToolLink',
    },
  ],
}

export const education: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: educationSql,
    cardConfiguration: educationCardConfiguration,
    shouldDeepLink: true,
    name: 'Educational Resources',
    facetsToPlot: ['resourceTopic', 'resourceActivityType'],
    searchConfiguration: {
      searchable: ['resourceTitle', 'resourceDescription'],
    },
  },
}
