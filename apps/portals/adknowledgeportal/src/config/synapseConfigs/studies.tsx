import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { EntityResolver } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/EntityResolver'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { transformStringIntoMarkdownProps } from '@sage-bionetworks/synapse-portal-framework/components/transformStringIntoMarkdownProps'
import { DetailsPageProps } from '@sage-bionetworks/synapse-portal-framework/types/portal-util-types'
import {
  PortalSearchParams,
  useGetPortalComponentSearchParams,
} from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import React from 'react'
import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import {
  CardContainerLogic,
  MarkdownCollapse,
  QueryWrapperPlotNav,
  RssFeedCards,
  SynapseConstants,
} from 'synapse-react-client'
import { dataOnStudiesPageSql, dataSql, studiesSql } from '../resources'
import studyHeaderSvg from '../style/study-header.svg?url'
import { Outlet, RouteObject } from 'react-router-dom'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'

const rgbIndex = 0
export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'Study',
    matchColumnName: 'Study',
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'Program',
      URLColumnName: 'Program',
      baseURL: 'Explore/Programs/DetailsPage',
    },
  ],
  genericCardSchema: {
    type: SynapseConstants.STUDY,
    title: 'Study_Name',
    subTitle: 'Data_Contributor',
    icon: 'Access_Type',
    description: 'Study_Description',
    secondaryLabels: [
      'DataType_All',
      'studyFocus',
      'Number_Of_Individuals',
      'specimenType',
      'Species',
      'Cohort_Type',
      'Study_Status',
      'Program',
      'Grant Number',
    ],
  },
}
const columnAliases = {
  DataType_All: 'Data Types',
  Data_Contributor: 'Data Contributor',
  Study_Description: 'Study Description',
  Study_Name: 'Study Name',
  Number_of_Individuals: 'Individuals',
  'Grant Number': 'Grant',
}

export const studiesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  columnAliases,
  sql: studiesSql,
  name: 'Studies',
  shouldDeepLink: true,
  cardConfiguration: studyCardConfiguration,
  searchConfiguration: {
    searchable: [
      'Study_Name',
      'Study_Description',
      'DataType_All',
      'studyFocus',
      'Data_Contributor',
      'specimenType',
      'Species',
      'Grant Number',
      'Program',
    ],
  },
}

export function StudiesDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()

  return (
    <>
      <CardContainerLogic
        isHeader={true}
        {...studyCardConfiguration}
        sql={studiesSql}
        columnAliases={columnAliases}
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

const studyDetailsTabContent: DetailsPageSectionLayoutType[] = [
  {
    title: 'Study Description',
    id: 'StudyDescription',
    element: <MarkdownSynapseFromColumnData columnName={'Study'} />,
  },
  {
    title: 'Acknowledgement',
    id: 'Acknowledgement',
    element: (
      <>
        <MarkdownSynapseFromColumnData columnName={'ackContext'} />
        {/*TODO: MarkdownCollapseFromColumnData component */}
        <DetailsPageContextConsumer columnName={'Acknowledgement'}>
          {({ value }) => {
            if (!value) {
              return null
            }
            const props = transformStringIntoMarkdownProps(value)
            return (
              <MarkdownCollapse
                {...props}
                title="Acknowledgement Statement"
                textDescription="full statement"
                showCopyPlainText={true}
              />
            )
          }}
        </DetailsPageContextConsumer>
        <DetailsPageContextConsumer columnName={'Citations'}>
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
      <MarkdownSynapseFromColumnData columnName={'Methods'} showEntityTitle />
    ),
  },
  {
    title: 'Related Studies',
    id: 'RelatedStudies',
    element: (
      <DetailsPageContextConsumer columnName={'Related_Studies'}>
        {({ value }) => {
          if (!value) {
            return null
          }
          return (
            <CardContainerLogic
              sqlOperator={ColumnSingleValueFilterOperator.IN}
              sql={studiesSql}
              {...studyCardConfiguration}
              searchParams={{ ['Study']: value }}
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
    element: <MarkdownSynapseFromColumnData columnName={'accessReqs'} />,
  },
  {
    id: 'StudyMetadata',
    title: 'Study Metadata',
    element: <MarkdownSynapseFromColumnData columnName={'studyMetadata'} />,
  },
  {
    id: 'MetadataFiles',
    element: (
      <PortalSearchParams>
        {searchParams => (
          <EntityResolver entityId={searchParams['Study']}>
            {entityHeader => (
              <QueryWrapperPlotNav
                sqlOperator={ColumnMultiValueFunction.HAS}
                showColumnSelection={true}
                rgbIndex={rgbIndex}
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
                  columnName: 'study',
                  value: entityHeader.name,
                }}
                hideQueryCount={true}
                searchParams={{ study: entityHeader.name }}
              />
            )}
          </EntityResolver>
        )}
      </PortalSearchParams>
    ),
  },
  {
    id: 'StudyData',
    title: 'Study Data',
    element: (
      <PortalSearchParams>
        {searchParams => (
          <EntityResolver entityId={searchParams['Study']}>
            {entityHeader => (
              <QueryWrapperPlotNav
                sqlOperator={ColumnMultiValueFunction.HAS}
                rgbIndex={rgbIndex}
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
                // searchParams={{ study: entityHeader.name }}
                lockedColumn={{
                  columnName: 'study',
                  value: entityHeader.name,
                }}
              />
            )}
          </EntityResolver>
        )}
      </PortalSearchParams>
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
