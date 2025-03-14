import {
  CardConfiguration,
  GenericCardSchema,
  IconOptions,
  QueryWrapperPlotNavProps,
  SynapseConstants,
} from 'synapse-react-client'
import { educationSql } from '../resources'
import educationalResourceSvg from '../style/EducationalResource.svg?url'

const rgbIndex = 8

export const educationSchema: GenericCardSchema = {
  type: 'Educational Resource',
  title: 'title',
  subTitle: 'topic',
  description: 'description',
  includeCitation: true,
  secondaryLabels: [
    'link',
    'activityType',
    'primaryFormat',
    'educationalLevel',
    'originInstitution',
    'language',
  ],
}
const iconOptions: IconOptions = {
  'Educational Resource': educationalResourceSvg,
}

export const educationCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 3,
  genericCardSchema: educationSchema,
  iconOptions,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'title',
    matchColumnName: 'title',
    baseURL: 'Explore/Educational Resources/DetailsPage',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'link',
    },
  ],
}

export const educationQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: educationSql,
  cardConfiguration: educationCardConfiguration,
  shouldDeepLink: true,
  name: 'Educational Resources',
  facetsToPlot: ['topic', 'activityType'],
  searchConfiguration: {
    searchable: ['title', 'description'],
  },
}

/**
 *  Request to show different labels on Details Page vs Explore page.
 */
export const educationDetailsSchema: GenericCardSchema = {
  type: 'Educational Resource',
  title: 'title',
  subTitle: 'topic',
  description: 'description',
  secondaryLabels: [
    'link',
    'activityType',
    'primaryFormat',
    'intendedUse',
    'primaryAudience',
    'educationalLevel',
    'originInstitution',
    'language',
    'contributors',
    'license',
    'useRequirements',
    'mediaAccessibility',
    'accessHazard',
    'datasetLink',
    'toolLink',
  ],
}

export const educationDetailsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 3,
  genericCardSchema: educationDetailsSchema,
  iconOptions,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'title',
    matchColumnName: 'title',
    baseURL: 'Explore/Educational Resources/DetailsPage',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'link',
    },
    {
      isMarkdown: true,
      matchColumnName: 'datasetLink',
    },
    {
      isMarkdown: true,
      matchColumnName: 'toolLink',
    },
  ],
}
