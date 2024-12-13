import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet, RouteObject } from 'react-router-dom'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import {
  cavaticaConnectAccountURL,
  dataOnStudiesPageSql,
  dataSql,
  studiesSql,
} from '../config/resources'
import studyHeaderSvg from '../config/style/study-header.svg?url'
import {
  studiesRgbIndex,
  studyCardConfiguration,
  studyColumnAliases,
} from '../config/synapseConfigs/studies'
import CardContainerLogic from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'

export const studyDetailsPageTabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Study Details',
    path: 'StudyDetails',
    iconName: 'study',
    tooltip: 'Description, methods, acknowledgements and related studies',
  },
  {
    title: 'Study Data',
    path: 'StudyData',
    iconName: 'database',
    tooltip: 'All of the Data generated within this study',
    iconClassName: 'tab-database',
  },
] satisfies DetailsPageTabConfig[]

export const studyDetailsPageRoutes: RouteObject[] = [
  {
    index: true,
    element: <RedirectWithQuery to={studyDetailsPageTabConfig[0].path} />,
  },
  {
    path: studyDetailsPageTabConfig[0].path,
    element: (
      <DetailsPageContent
        content={[
          {
            id: 'Study Description',
            title: 'Study Description',
            element: (
              <MarkdownSynapseFromColumnData columnName={'studyDescription'} />
            ),
          },
          {
            id: 'Acknowledgement',
            title: 'Acknowledgement',
            element: (
              <MarkdownSynapseFromColumnData columnName={'ackContext'} />
            ),
          },
          {
            id: 'acknowledgementFull',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={'acknowledgment'}
                MarkdownCollapseProps={{
                  textDescription: 'full statement',
                  showCopyPlainText: true,
                }}
              />
            ),
          },
          {
            id: 'Methods',
            title: 'Methods',
            element: <MarkdownSynapseFromColumnData columnName={'methods'} />,
          },
          {
            id: 'Related Studies',
            title: 'Related Studies',
            element: (
              <DetailsPageContextConsumer columnName={'relatedStudies'}>
                {({ value }) => {
                  if (!value) {
                    return null
                  }

                  return (
                    <CardContainerLogic
                      sqlOperator={ColumnSingleValueFilterOperator.IN}
                      sql={studiesSql}
                      {...studyCardConfiguration}
                      searchParams={{ id: value }}
                    />
                  )
                }}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
      />
    ),
  },
  {
    path: studyDetailsPageTabConfig[1].path,
    element: (
      <DetailsPageContent
        content={[
          {
            id: 'Access Requirements',
            title: 'Access Requirements',
            element: (
              <MarkdownSynapseFromColumnData columnName={'accessReqs'} />
            ),
          },
          {
            id: 'Study Metadata',
            title: 'Study Metadata',
            element: (
              <MarkdownSynapseFromColumnData columnName={'studyMetadata'} />
            ),
          },
          {
            id: 'studyMetadataQueryWrapperPlotNav',
            element: (
              <DetailsPageContextConsumer columnName={'studyKey'}>
                {({ value }) => (
                  <QueryWrapperPlotNav
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    showColumnSelection={true}
                    rgbIndex={studiesRgbIndex}
                    visibleColumnCount={10}
                    name="Metadata Files"
                    showExportToCavatica={true}
                    cavaticaConnectAccountURL={cavaticaConnectAccountURL}
                    isRowSelectionVisible={true}
                    isRowSelectionUIFloating={false}
                    tableConfiguration={{
                      showAccessColumn: true,
                      showDownloadColumn: true,
                    }}
                    availableFacets={['metadataType', 'dataType', 'assay']}
                    sql={dataOnStudiesPageSql}
                    shouldDeepLink={false}
                    defaultShowPlots={false}
                    lockedColumn={{
                      columnName: 'study',
                      value: value!,
                    }}
                    searchParams={{ study: value! }}
                    hideQueryCount
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },

          {
            id: 'Study Data',
            title: 'Study Data',
            element: (
              <DetailsPageContextConsumer columnName={'studyKey'}>
                {({ value }) => (
                  <QueryWrapperPlotNav
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    rgbIndex={studiesRgbIndex}
                    visibleColumnCount={10}
                    showExportToCavatica={true}
                    cavaticaConnectAccountURL={cavaticaConnectAccountURL}
                    isRowSelectionVisible={true}
                    isRowSelectionUIFloating={false}
                    tableConfiguration={{
                      showAccessColumn: true,
                      showDownloadColumn: true,
                      columnLinks: [
                        {
                          matchColumnName: 'study',
                          isMarkdown: false,
                          baseURL: 'Explore/Studies/DetailsPage',
                          URLColumnName: 'studyKey',
                          wrapValueWithParens: true,
                        },
                      ],
                    }}
                    sql={dataSql}
                    shouldDeepLink={false}
                    lockedColumn={{
                      columnName: 'study',
                      value: value!,
                    }}
                    searchParams={{ study: value! }}
                    hideQueryCount
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
      />
    ),
  },
]

export default function StudyDetailsPage() {
  const { studyKey } = useGetPortalComponentSearchParams()

  return (
    <>
      <CardContainerLogic
        sql={studiesSql}
        isHeader
        {...studyCardConfiguration}
        columnAliases={studyColumnAliases}
        isAlignToLeftNav
        secondaryLabelLimit={Infinity}
        iconOptions={{ study: studyHeaderSvg }}
        searchParams={{ studyKey }}
      />
      <DetailsPage
        sql={studiesSql}
        sqlOperator={ColumnSingleValueFilterOperator.LIKE}
        ContainerProps={{
          maxWidth: 'xl',
        }}
      >
        <DetailsPageTabs tabConfig={studyDetailsPageTabConfig} />
        <Outlet />
      </DetailsPage>
    </>
  )
}
