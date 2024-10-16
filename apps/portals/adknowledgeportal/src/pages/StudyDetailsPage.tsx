import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { EntityResolver } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/EntityResolver'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { transformStringIntoMarkdownProps } from '@sage-bionetworks/synapse-portal-framework/components/transformStringIntoMarkdownProps'
import { DetailsPageProps } from '@sage-bionetworks/synapse-portal-framework/types/portal-util-types'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import { dataOnStudiesPageSql, dataSql, studiesSql } from 'src/config/resources'
import { DATA_TABLE_COLUMN_NAMES } from 'src/config/synapseConfigs/data'
import {
  STUDY_TABLE_COLUMN_NAMES,
  studyCardConfiguration,
  studyColumnAliases,
  studyRgbIndex,
} from 'src/config/synapseConfigs/studies'
import {
  CardContainerLogic,
  ErrorPage,
  MarkdownCollapse,
  QueryWrapperPlotNav,
  RssFeedCards,
  SynapseErrorType,
} from 'synapse-react-client'
import studyHeaderSvg from '../config/style/study-header.svg?url'

const studyDetailsTabContent: DetailsPageSectionLayoutType[] = [
  {
    title: 'Study Description',
    id: 'StudyDescription',
    element: (
      <MarkdownSynapseFromColumnData
        columnName={STUDY_TABLE_COLUMN_NAMES.STUDY}
      />
    ),
  },
  {
    title: 'Acknowledgement',
    id: 'Acknowledgement',
    element: (
      <>
        <MarkdownSynapseFromColumnData
          columnName={STUDY_TABLE_COLUMN_NAMES.ACK_CONTEXT}
        />
        <MarkdownSynapseFromColumnData
          columnName={STUDY_TABLE_COLUMN_NAMES.ACK_CONTEXT}
          MarkdownCollapseProps={{
            title: 'Acknowledgement Statement',
            textDescription: 'full statement',
            showCopyPlainText: true,
          }}
        />
        <DetailsPageContextConsumer
          columnName={STUDY_TABLE_COLUMN_NAMES.CITATIONS}
        >
          {({ value }) => {
            if (!value) {
              return null
            }
            const props = transformStringIntoMarkdownProps(value)
            return (
              <MarkdownCollapse
                {...props}
                title="Citations"
                textDescription="all citations"
                showCopyPlainText={true}
              />
            )
          }}
        </DetailsPageContextConsumer>
      </>
    ),
  },
  {
    id: 'Methods',
    title: 'Methods',
    hideTitle: true,
    element: (
      <MarkdownSynapseFromColumnData
        columnName={STUDY_TABLE_COLUMN_NAMES.METHODS}
        showEntityTitle
      />
    ),
  },
  {
    title: 'Related Studies',
    id: 'RelatedStudies',
    element: (
      <DetailsPageContextConsumer
        columnName={STUDY_TABLE_COLUMN_NAMES.RELATED_STUDIES}
      >
        {({ value }) => {
          if (!value) {
            return null
          }
          return (
            <CardContainerLogic
              sqlOperator={ColumnSingleValueFilterOperator.IN}
              sql={studiesSql}
              {...studyCardConfiguration}
              searchParams={{ [STUDY_TABLE_COLUMN_NAMES.STUDY]: value }}
            />
          )
        }}
      </DetailsPageContextConsumer>
    ),
  },
]

const studyDataTabContent: DetailsPageSectionLayoutType[] = [
  {
    title: 'Recent Data Updates',
    id: 'RecentDataUpdates',
    // TODO: Removed usage of these props in PORTALS-3195 refactor
    // Were these used to create props to inject into RssFeedCards? Does not seem like it
    // columnName: 'Study',
    // resolveSynId: {
    //   value: true,
    // },
    element: (
      <RssFeedCards
        url="https://news.adknowledgeportal.org"
        itemsToShow={3}
        allowCategories={[]}
        // mailChimpListName: 'study specific list name????',
        // mailChimpUrl:'https://study specific url????'
        viewAllNewsButtonText={'View All Data Updates'}
      />
    ),
  },
  {
    id: 'AccessRequirements',
    title: 'Access Requirements',
    element: (
      <MarkdownSynapseFromColumnData
        columnName={STUDY_TABLE_COLUMN_NAMES.ACCESS_REQS}
      />
    ),
  },
  {
    id: 'StudyMetadata',
    title: 'Study Metadata',
    element: (
      <MarkdownSynapseFromColumnData
        columnName={STUDY_TABLE_COLUMN_NAMES.STUDY_METADATA}
      />
    ),
  },
  {
    id: 'MetadataFiles',
    element: (
      <DetailsPageContextConsumer columnName={STUDY_TABLE_COLUMN_NAMES.STUDY}>
        {({ value: entityId }) => (
          <EntityResolver entityId={entityId!}>
            {entityHeader => (
              <QueryWrapperPlotNav
                sqlOperator={ColumnMultiValueFunction.HAS}
                showColumnSelection={true}
                rgbIndex={studyRgbIndex}
                name="Metadata Files"
                visibleColumnCount={10}
                showExportToCavatica={true}
                isRowSelectionVisible={true}
                tableConfiguration={{
                  showAccessColumn: true,
                  showDownloadColumn: true,
                }}
                availableFacets={['metadataType', 'dataType', 'assay']}
                sql={dataOnStudiesPageSql}
                shouldDeepLink={false}
                defaultShowPlots={false}
                lockedColumn={{
                  columnName: DATA_TABLE_COLUMN_NAMES.STUDY,
                  value: entityHeader.name,
                }}
                hideQueryCount={true}
                searchParams={{
                  [DATA_TABLE_COLUMN_NAMES.STUDY]: entityHeader.name,
                }}
              />
            )}
          </EntityResolver>
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'StudyData',
    title: 'Study Data',
    element: (
      <DetailsPageContextConsumer columnName={STUDY_TABLE_COLUMN_NAMES.STUDY}>
        {({ value: entityId }) => (
          <EntityResolver entityId={entityId!}>
            {entityHeader => (
              <QueryWrapperPlotNav
                sqlOperator={ColumnMultiValueFunction.HAS}
                rgbIndex={studyRgbIndex}
                visibleColumnCount={10}
                isRowSelectionVisible={true}
                showExportToCavatica={true}
                tableConfiguration={{
                  showAccessColumn: true,
                  showDownloadColumn: true,
                  columnLinks: [
                    {
                      matchColumnName: 'study',
                      isMarkdown: false,
                      baseURL: 'Explore/Studies/DetailsPage',
                      URLColumnName: 'Study_Name',
                      wrapValueWithParens: true,
                    },
                  ],
                }}
                sql={dataSql}
                shouldDeepLink={false}
                searchParams={{
                  [DATA_TABLE_COLUMN_NAMES.STUDY]: entityHeader.name,
                }}
                hideQueryCount
                lockedColumn={{
                  columnName: DATA_TABLE_COLUMN_NAMES.STUDY,
                  value: entityHeader.name,
                }}
              />
            )}
          </EntityResolver>
        )}
      </DetailsPageContextConsumer>
    ),
  },
]

export const studyDetailsPageTabs: DetailsPageTabConfig[] = [
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
    iconClassName: 'tab-database',
    tooltip: 'All of the Data generated within this study',
  },
]

export const studyDetailsPageChildRoutes: RouteObject[] = [
  {
    index: true,
    element: <RedirectWithQuery to={studyDetailsPageTabs[0].path} />,
  },
  {
    path: studyDetailsPageTabs[0].path,
    element: <DetailsPageContent content={studyDetailsTabContent} />,
  },
  {
    path: studyDetailsPageTabs[1].path,
    element: <DetailsPageContent content={studyDataTabContent} />,
  },
]

export const studiesDetailsPageProps: DetailsPageProps = {
  sql: studiesSql,
  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
}

export function StudyDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()

  const study = searchParams[STUDY_TABLE_COLUMN_NAMES.STUDY]
  const studyName = searchParams[STUDY_TABLE_COLUMN_NAMES.STUDY_NAME]

  if (study == null && studyName == null) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <>
      <CardContainerLogic
        isHeader={true}
        {...studyCardConfiguration}
        sql={studiesSql}
        columnAliases={studyColumnAliases}
        isAlignToLeftNav={true}
        secondaryLabelLimit={Infinity}
        iconOptions={{
          study: studyHeaderSvg,
        }}
        searchParams={searchParams}
      />
      <DetailsPage {...studiesDetailsPageProps}>
        <DetailsPageTabs tabConfig={studyDetailsPageTabs} />
        <Outlet />
      </DetailsPage>
    </>
  )
}
