import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { DetailsPageTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import React from 'react'
import {
  catalogNumberSql,
  developmentPublicationSql,
  fundingAgencySql,
  investigatorSql,
  mutationsSql,
  publicationsV2Sql,
  studiesSql,
  toolApplicationsSql,
  toolsSql,
  usageRequirementsSql,
  vendorSql,
} from 'src/config/resources'
import { toolsSchema } from 'src/config/synapseConfigs/tools'
import {
  CardContainerLogic,
  ErrorPage,
  MarkdownSynapse,
  StandaloneQueryWrapper,
  SubsectionRowRenderer,
  SynapseConstants,
  SynapseErrorType,
  UserCardListRotate,
} from 'synapse-react-client'
import { studyDetailsPageTabRoutes } from './StudyDetailsPage'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { Typography } from '@mui/material'
import { columnAliases } from 'src/config/synapseConfigs/commonProps'
import { publicationsV2CardConfiguration } from 'src/config/synapseConfigs/publications'
import { datasetsRgbIndex } from 'src/config/synapseConfigs/datasets'

export const toolDetailsPageTabRoutes: DetailsPageTabConfig[] = [
  {
    title: 'Details',
    path: 'Details',
    element: (
      <DetailsPageContent
        hideMenu
        content={[
          {
            id: 'How To Obtain The Tool',
            title: 'How To Obtain The Tool',
            element: (
              <MarkdownSynapseFromColumnData
                columnName="howToAcquire"
                injectMarkdown
              />
            ),
          },
          {
            id: 'usageRequirements',
            element: (
              <DetailsPageContextConsumer columnName="resourceId">
                {({ value }) => (
                  <SubsectionRowRenderer
                    sql={usageRequirementsSql}
                    isMarkdown={true}
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    searchParams={{ resourceId: value! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'usageRequirements',
            element: (
              <DetailsPageContextConsumer columnName="resourceId">
                {({ value }) => (
                  <SubsectionRowRenderer
                    sql={vendorSql}
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    searchParams={{ resourceId: value! }}
                    columnLink={{
                      linkColumnName: 'Vendor Url',
                      matchColumnName: 'Vendor',
                      isMarkdown: false,
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'catalogNumber',
            element: (
              <DetailsPageContextConsumer columnName="resourceId">
                {({ value }) => (
                  <SubsectionRowRenderer
                    sql={catalogNumberSql}
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    columnLink={{
                      linkColumnName: 'Catalog Number URL',
                      matchColumnName: 'Catalog Number',
                      isMarkdown: false,
                    }}
                    searchParams={{ resourceId: value! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Tool Origin',
            title: 'Tool Origin',
            element: (
              <>
                <Typography variant="headline3" sx={{ my: 3 }}>
                  Investigator
                </Typography>
                <DetailsPageContextConsumer columnName="resourceId">
                  {({ value }) => (
                    <UserCardListRotate
                      sql={investigatorSql}
                      count={1}
                      size={SynapseConstants.MEDIUM_USER_CARD}
                      useQueryResultUserData={true}
                      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                      searchParams={{ resourceId: value! }}
                    />
                  )}
                </DetailsPageContextConsumer>
              </>
            ),
          },
          {
            id: 'Development Publication',
            title: 'Development Publication',
            helpText:
              'The first report providing a detailed characterization of a tool.',
            element: (
              <DetailsPageContextConsumer columnName="resourceId">
                {({ value }) => (
                  <CardContainerLogic
                    {...publicationsV2CardConfiguration}
                    initialLimit={3}
                    columnAliases={columnAliases}
                    sql={developmentPublicationSql}
                    secondaryLabelLimit={4}
                    searchParams={{ resourceId: value! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'fundingAgency',
            element: (
              <DetailsPageContextConsumer columnName="resourceId">
                {({ value }) => (
                  <SubsectionRowRenderer
                    sql={fundingAgencySql}
                    isMarkdown={true}
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    searchParams={{ resourceId: value! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'toolApplications',
            element: (
              <DetailsPageContextConsumer columnName="resourceId">
                {({ value }) => (
                  <SubsectionRowRenderer
                    sql={toolApplicationsSql}
                    columnNameIsSectionTitle={true}
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    limit={1}
                    searchParams={{ resourceId: value! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'mutations',
            element: (
              <DetailsPageContextConsumer columnName="resourceId">
                {({ value }) => (
                  <StandaloneQueryWrapper
                    name="Mutations"
                    unitDescription="Mutations"
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    rgbIndex={datasetsRgbIndex}
                    sql={mutationsSql}
                    showTopLevelControls={true}
                    searchParams={{ resourceId: value! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Publications',
            title: 'Publications',
            helpText:
              'Subsequent reports that utilize the tool outlined in the development publication.',

            element: (
              <DetailsPageContextConsumer columnName="resourceId">
                {({ value }) => (
                  <CardContainerLogic
                    {...publicationsV2CardConfiguration}
                    initialLimit={3}
                    columnAliases={columnAliases}
                    sql={publicationsV2Sql}
                    searchParams={{ resourceId: value! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Submit an Observation',
            title: 'Submit an Observation',
            element: <MarkdownSynapse ownerId="syn26338068" wikiId="613438" />,
          },
        ]}
      />
    ),
  },
  //   {
  //     title: 'Observations',
  //     uriValue: 'Observations',
  //     showMenu: false,
  //     synapseConfigArray: [
  //       {
  //         name: 'TimelinePlot',
  //         outsideContainerClassName: 'home-spacer',
  //         props: {
  //           title: 'Natural History Observations',
  //           subTitle:
  //             'To view the observations, click on a mark on the timeline.',
  //           sql: observationsSql,
  //           sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
  //         },
  //         tableSqlKeys: ['resourceId'],
  //         columnName: 'resourceId',
  //       },
  //       // {
  //       //   name: 'CardContainerLogic',
  //       //   props: {
  //       //     sql: `${observationsSql} WHERE observationTime IS NOT NULL ORDER BY observationTime DESC`,
  //       //     type: SynapseConstants.OBSERVATION_CARD,
  //       //     limit: 3,
  //       //   },
  //       //   title: 'Natural History Observations',
  //       //   tableSqlKeys: ['resourceId'],
  //       //   columnName: 'resourceId',
  //       // },
  //       {
  //         name: 'CardContainerLogic',
  //         props: {
  //           sql: `${observationsSql} WHERE observationTime IS NULL`,
  //           type: SynapseConstants.OBSERVATION_CARD,
  //           initialLimit: 3,
  //         },
  //         title: 'Community Observations',
  //         tableSqlKeys: ['resourceId'],
  //         columnName: 'resourceId',
  //       },
  //       {
  //         name: 'Markdown',
  //         title: 'Submit an Observation',
  //         standalone: true,
  //         props: {
  //           ownerId: 'syn26338068',
  //           wikiId: '613438',
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Data',
  //     uriValue: 'Data',
  //     showMenu: false,
  //     tabLayout: [
  //       {
  //         title: 'Files',
  //         uriValue: 'Files',
  //         synapseConfigArray: [
  //           {
  //             name: 'QueryWrapperPlotNav',
  //             props: {
  //               sqlOperator: ColumnMultiValueFunction.HAS,
  //               rgbIndex,
  //               name: 'Files',
  //               sql: filesSql,
  //               visibleColumnCount: 7,
  //               tableConfiguration: {
  //                 showAccessColumn: true,
  //                 showDownloadColumn: true,
  //               },
  //               shouldDeepLink: false,
  //               columnAliases,
  //             },
  //             tableSqlKeys: ['Resource_id'],
  //             columnName: 'resourceId',
  //           },
  //         ],
  //       },
  //       // {
  //       //   title: 'Datasets',
  //       //   synapseConfigArray: [
  //       //     ...
  //       //   ],
  //       // },
  //       {
  //         title: 'Studies',
  //         uriValue: 'Studies',
  //         synapseConfigArray: [
  //           {
  //             name: 'QueryWrapperPlotNav',
  //             props: {
  //               sqlOperator: ColumnMultiValueFunction.HAS,
  //               rgbIndex,
  //               name: 'Studies',
  //               sql: studiesSql,
  //               visibleColumnCount: 7,
  //               tableConfiguration: {
  //                 showAccessColumn: true,
  //                 showDownloadColumn: true,
  //               },
  //               shouldDeepLink: false,
  //               columnAliases,
  //             },
  //             tableSqlKeys: ['Resource_id'],
  //             columnName: 'resourceId',
  //           },
  //         ],
  //       },
  //     ],
  //   },
]

export default function ToolDetailsPage() {
  const { resourceId } = useGetPortalComponentSearchParams()

  if (!resourceId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <>
      <CardContainerLogic
        sql={toolsSql}
        type={SynapseConstants.GENERIC_CARD}
        genericCardSchema={toolsSchema}
        secondaryLabelLimit={6}
        isHeader={true}
        labelLinkConfig={[
          {
            isMarkdown: true,
            matchColumnName: 'investigatorWebsite',
          },
        ]}
        searchParams={{ resourceId }}
      />
      <DetailsPage
        sql={toolsSql}
        ContainerProps={{ maxWidth: 'xl' }}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        tabRoutes={toolDetailsPageTabRoutes}
      />
    </>
  )
}
