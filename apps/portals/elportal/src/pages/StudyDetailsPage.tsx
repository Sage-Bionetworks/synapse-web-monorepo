import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import RedirectToURL from '@sage-bionetworks/synapse-portal-framework/components/RedirectToURL'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet, RouteObject } from 'react-router'
import { CardContainerLogic, QueryWrapperPlotNav } from 'synapse-react-client'
import {
  cavaticaConnectAccountURL,
  dataOnStudiesPageSql,
  dataSql,
  studiesSql,
} from '../config/resources'
import studyHeaderSvg from '../config/style/study-header.svg?url'
import { DATA_TABLE_COLUMN_NAMES } from '../config/synapseConfigs/dataTable'
import {
  studiesRgbIndex,
  studyCardConfiguration,
  studyColumnAliases,
} from '../config/synapseConfigs/studies'

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
      <>
        <DetailsPageContent
          content={[
            {
              id: 'Study Description',
              title: 'Study Description',
              element: (
                <MarkdownSynapseFromColumnData
                  columnName={'studyDescription'}
                />
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
        <RedirectToURL
          toURL="/Explore/Studies/DetailsPage/StudyDetails?studyKey=LLFS"
          search="studyKey=LLFS_Metabolomics"
        />
      </>
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
                      showAccessColumnHeader: true,
                      showDownloadColumn: true,
                    }}
                    availableFacets={['metadataType', 'dataType', 'assay']}
                    sql={dataOnStudiesPageSql}
                    shouldDeepLink={false}
                    defaultShowPlots={false}
                    lockedColumn={{
                      columnName: DATA_TABLE_COLUMN_NAMES.STUDY,
                      value: value!,
                    }}
                    searchParams={{ [DATA_TABLE_COLUMN_NAMES.STUDY]: value! }}
                    fileIdColumnName={DATA_TABLE_COLUMN_NAMES.ID}
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
                      showAccessColumnHeader: true,
                      showDownloadColumn: true,
                      columnLinks: [
                        {
                          matchColumnName: DATA_TABLE_COLUMN_NAMES.STUDY,
                          isMarkdown: false,
                          baseURL: 'Explore/Studies/DetailsPage',
                          URLColumnName: 'studyKey',
                          wrapValueWithParens: false,
                        },
                      ],
                    }}
                    sql={dataSql}
                    shouldDeepLink={false}
                    lockedColumn={{
                      columnName: DATA_TABLE_COLUMN_NAMES.STUDY,
                      value: value!,
                    }}
                    fileIdColumnName={DATA_TABLE_COLUMN_NAMES.ID}
                    searchParams={{ [DATA_TABLE_COLUMN_NAMES.STUDY]: value! }}
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
