import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { computationalSql } from '../resources'
import { PROGRAM_TABLE_COLUMN_NAMES } from './programs'

export const COMPUTATIONAL_TOOLS_COLUMN_NAMES = {
  GRANT: 'grant',
}

const computationalSchema: TableToGenericCardMapping = {
  type: SynapseConstants.COMPUTATIONAL,
  title: 'name',
  description: 'summary',
  subTitle: 'softwareType',
  secondaryLabels: ['contributor', 'program', 'grant', 'documentation'],
  link: 'url',
}

export const computationalCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: computationalSchema,
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: COMPUTATIONAL_TOOLS_COLUMN_NAMES.GRANT,
      URLColumnName: PROGRAM_TABLE_COLUMN_NAMES.GRANT_NUMBER,
      baseURL: 'Explore/Projects/DetailsPage',
    },
  ],
}

const rgbIndex = 7

export const computationalToolsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps =
  {
    rgbIndex,
    sql: computationalSql,
    cardConfiguration: computationalCardConfiguration,
    shouldDeepLink: true,
    name: 'Computational Tools',
    facetsToPlot: ['grant', 'program', 'softwareType'],
    searchConfiguration: {
      searchable: [
        'contributor',
        'name',
        'grant',
        'program',
        'softwareType',
        'summary',
      ],
    },
  }
