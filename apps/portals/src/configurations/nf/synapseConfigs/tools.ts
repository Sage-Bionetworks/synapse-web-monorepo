import type { GenericCardSchema } from 'synapse-react-client'

import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import { columnAliases } from './commonProps'
import type { CardConfiguration } from 'synapse-react-client'
import {
  toolsSql,
  observationsSql,
  investigatorSql,
  developmentPublicationSql,
  fundingAgencySql,
  usageRequirementsSql,
  vendorSql,
  catalogNumberSql,
  toolApplicationsSql,
  mutationsSql,
  publicationsV2Sql,
  filesSql,
  studiesSql,
} from '../resources'
import { DetailsPageProps } from 'types/portal-util-types'
import { publicationsV2CardConfiguration } from './publications'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'

export const newToolsSql = `${toolsSql} order by ROW_ID desc limit 3`

export const toolsSchema: GenericCardSchema = {
  type: SynapseConstants.EXPERIMENTAL_TOOL,
  title: 'resourceName',
  subTitle: 'resourceType',
  description: 'description',
  secondaryLabels: [
    'investigatorName',
    'institution',
    'investigatorWebsite',
    'rrid',
    'synonyms',
    'cellLineCategory',
    'cellLineDisease',
    'modelofManifestation',
    'backgroundStrain',
    'backgroundSubstrain',
    'animalModelDisease',
    'animalModelOfManifestation',
    'targetAntigen',
    'reactiveSpecies',
    'hostOrganism',
    'specimenTissueType',
    'specimenPreparationMethod',
    'diseaseType',
    'tumorType',
    'specimenFormat',
    'specimenType',
    'dateModified',
  ],
}

export const toolsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Tools/DetailsPage',
    URLColumnName: 'resourceId',
    matchColumnName: 'resourceId',
    overrideLinkURLColumnName: 'biobankURL',
  },
  secondaryLabelLimit: 4,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'investigatorWebsite',
    },
  ],
  genericCardSchema: toolsSchema,
}
const rgbIndex = 6
const tools: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: toolsSql,
    shouldDeepLink: true,
    name: 'Tools',
    cardConfiguration: toolsCardConfiguration,
    columnAliases,
    defaultShowSearchBox: true,
    searchConfiguration: {
      fullTextSearchHelpURL:
        'https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html',
    },
  },
}

export const toolDetailsPageConfig: DetailsPageProps = {
  sql: toolsSql,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
  showMenu: false,
  tabLayout: [
    {
      title: 'Details',
      uriValue: 'Details',
      synapseConfigArray: [
        {
          name: 'Markdown',
          columnName: 'howToAcquire',
          title: 'How To Obtain The Tool',
          injectMarkdown: true,
          props: {},
        },
        {
          name: 'SubsectionRowRenderer',
          outsideContainerClassName: 'home-spacer',
          props: {
            sql: usageRequirementsSql,
            isMarkdown: true,
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
          },
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        {
          name: 'SubsectionRowRenderer',
          outsideContainerClassName: 'home-spacer',
          props: {
            sql: vendorSql,
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
            columnLink: {
              linkColumnName: 'Vendor Url',
              matchColumnName: 'Vendor',
              isMarkdown: false,
            },
            limit: 1,
          },
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        {
          name: 'SubsectionRowRenderer',
          outsideContainerClassName: 'home-spacer',
          props: {
            sql: catalogNumberSql,
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
            columnLink: {
              linkColumnName: 'Catalog Number URL',
              matchColumnName: 'Catalog Number',
              isMarkdown: false,
            },
          },
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        {
          name: 'UserCardListRotate',
          title: 'Tool Origin',
          subtitle: 'Investigator',
          props: {
            sql: investigatorSql,
            count: 1,
            size: SynapseConstants.MEDIUM_USER_CARD,
            useQueryResultUserData: true,
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
          },
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        {
          name: 'CardContainerLogic',
          title: 'Development Publication',
          props: {
            ...publicationsV2CardConfiguration,
            initialLimit: 3,
            columnAliases,
            sql: developmentPublicationSql,
            secondaryLabelLimit: 4,
          },
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        {
          name: 'SubsectionRowRenderer',
          outsideContainerClassName: 'home-spacer',
          props: {
            sql: fundingAgencySql,
            isMarkdown: true,
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
          },
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        {
          name: 'SubsectionRowRenderer',
          outsideContainerClassName: 'home-spacer',
          props: {
            sql: toolApplicationsSql,
            columnNameIsSectionTitle: true,
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
            limit: 1,
          },
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        {
          name: 'StandaloneQueryWrapper',
          props: {
            name: 'Mutations',
            unitDescription: 'Mutations',
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
            rgbIndex,
            sql: mutationsSql,
            showTopLevelControls: true,
          },
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        {
          name: 'CardContainerLogic',
          title: 'Publications',
          props: {
            ...publicationsV2CardConfiguration,
            initialLimit: 3,
            columnAliases,
            sql: publicationsV2Sql,
          },
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        {
          name: 'Markdown',
          title: 'Submit an Observation',
          standalone: true,
          props: {
            ownerId: 'syn26338068',
            wikiId: '613438',
          },
        },
      ],
    },
    {
      title: 'Observations',
      uriValue: 'Observations',
      synapseConfigArray: [
        {
          name: 'TimelinePlot',
          outsideContainerClassName: 'home-spacer',
          props: {
            title: 'Natural History Observations',
            subTitle:
              'To view the observations, click on a mark on the timeline.',
            sql: observationsSql,
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
          },
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        // {
        //   name: 'CardContainerLogic',
        //   props: {
        //     sql: `${observationsSql} WHERE observationTime IS NOT NULL ORDER BY observationTime DESC`,
        //     type: SynapseConstants.OBSERVATION_CARD,
        //     limit: 3,
        //   },
        //   title: 'Natural History Observations',
        //   tableSqlKeys: ['resourceId'],
        //   columnName: 'resourceId',
        // },
        {
          name: 'CardContainerLogic',
          props: {
            sql: `${observationsSql} WHERE observationTime IS NULL`,
            type: SynapseConstants.OBSERVATION_CARD,
            initialLimit: 3,
          },
          title: 'Community Observations',
          tableSqlKeys: ['resourceId'],
          columnName: 'resourceId',
        },
        {
          name: 'Markdown',
          title: 'Submit an Observation',
          standalone: true,
          props: {
            ownerId: 'syn26338068',
            wikiId: '613438',
          },
        },
      ],
    },
    {
      title: 'Data',
      uriValue: 'Data',
      tabLayout: [
        {
          title: 'Files',
          uriValue: 'Files',
          synapseConfigArray: [
            {
              name: 'QueryWrapperPlotNav',
              props: {
                sqlOperator: ColumnMultiValueFunction.HAS,
                rgbIndex,
                name: 'Files',
                sql: filesSql,
                visibleColumnCount: 7,
                tableConfiguration: {
                  showAccessColumn: true,
                  showDownloadColumn: true,
                },
                shouldDeepLink: false,
                columnAliases,
              },
              tableSqlKeys: ['Resource_id'],
              columnName: 'resourceId',
            },
          ],
        },
        // {
        //   title: 'Datasets',
        //   synapseConfigArray: [
        //     ...
        //   ],
        // },
        {
          title: 'Studies',
          uriValue: 'Studies',
          synapseConfigArray: [
            {
              name: 'QueryWrapperPlotNav',
              props: {
                sqlOperator: ColumnMultiValueFunction.HAS,
                rgbIndex,
                name: 'Studies',
                sql: studiesSql,
                visibleColumnCount: 7,
                tableConfiguration: {
                  showAccessColumn: true,
                  showDownloadColumn: true,
                },
                shouldDeepLink: false,
                columnAliases,
              },
              tableSqlKeys: ['Resource_id'],
              columnName: 'resourceId',
            },
          ],
        },
      ],
    },
  ],
}

export const toolsDetailsPage: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      sql: toolsSql,
      type: SynapseConstants.GENERIC_CARD,
      genericCardSchema: toolsSchema,
      secondaryLabelLimit: 6,
      isHeader: true,
      labelLinkConfig: [
        {
          isMarkdown: true,
          matchColumnName: 'investigatorWebsite',
        },
      ],
    },
  },
  {
    name: 'DetailsPage',
    props: toolDetailsPageConfig,
    containerClassName: 'container-full-width',
  },
]

export default tools
