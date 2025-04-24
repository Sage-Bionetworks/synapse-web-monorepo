import {
  CardConfiguration,
  IconOptions,
  QueryWrapperPlotNavProps,
  SynapseComponents,
  SynapseConstants,
} from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { grantsSql } from '../resources'

const rgbIndex = 3

export const grantsSchema: TableToGenericCardMapping = {
  type: 'Grant',
  title: 'grantName',
  subTitle: 'grantInstitution',
  description: 'abstract',
  secondaryLabels: [
    'investigator',
    'grantNumber',
    'consortium',
    'grantType',
    'nihReporterLink',
    'grantStartDate',
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
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'nihReporterLink',
    },
  ],
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  iconOptions,
}

export const grantQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: grantsSql,
  cardConfiguration: grantsCardConfiguration,
  shouldDeepLink: true,
  name: 'Grants',
  facetsToPlot: ['consortium', 'grantType'],
  searchConfiguration: {
    ftsConfig: {
      textMatchesMode: 'BOOLEAN',
      distance: 3,
    },
    searchable: [
      'grantName',
      'abstract',
      'grantInstitution',
      'investigator',
      'grantNumber',
    ],
  },
}
