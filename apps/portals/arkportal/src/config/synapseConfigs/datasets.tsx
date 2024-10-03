import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { PortalSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import type {
  CardConfiguration,
  GenericCardSchema,
  LabelLinkConfig,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import {
  CardContainerLogic,
  DatasetJsonLdScript,
  QueryWrapperPlotNav,
  SynapseConstants,
} from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { datasetsSql } from '../resources'
import experimentalDataSvg from '../style/experimentalData.svg?url'
import publicationDataSvg from '../style/publicationData.svg?url'

const rgbIndex = 0
export const datasetColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: false,
    baseURL: 'Explore/Datasets/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'name',
    overrideValueWithRowID: true,
  },
]

export const datasetQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  sql: datasetsSql,
  name: 'Datasets',
  columnAliases,
  tableConfiguration: {
    columnLinks: datasetColumnLinks,
  },
  facetsToPlot: ['program', 'project', 'datasetType', 'assay'],
  searchConfiguration: {
    searchable: ['name', 'program', 'project', 'datasetType', 'assay'],
  },
}

export const datasetSchema: GenericCardSchema = {
  type: 'Dataset',
  title: 'name',
  subTitle: 'program',
  description: 'description',
  secondaryLabels: ['project', 'assay', 'datasetType'],
  icon: 'datasetType',
}

export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: datasetSchema,
  titleLinkConfig: {
    isMarkdown: false,
    matchColumnName: 'id',
    URLColumnName: 'id',
    baseURL: 'Explore/Datasets/DetailsPage',
  },
  iconOptions: {
    Publication: publicationDataSvg,
    'Experimental Data': experimentalDataSvg,
  },
}

export const detailsPageContent: DetailsPageContentType = [
  {
    title: 'Description',
    id: 'Description',
    element: (
      <MarkdownSynapseFromColumnData columnName={'datasetDescription'} />
    ),
  },
  {
    title: 'Acknowledgment',
    id: 'Acknowledgment',
    element: (
      <MarkdownSynapseFromColumnData columnName={'acknowledgmentStatement'} />
    ),
  },
  {
    title: 'Files',
    id: 'Files',
    element: (
      <DetailsPageContextConsumer>
        {({ context }) => {
          if (!context.rowData) {
            return null
          }
          const hasVersionNumber = Boolean(context.rowData?.versionNumber)
          const sql = `SELECT * FROM syn${context.rowData?.rowId}${
            hasVersionNumber ? `.${context.rowData?.versionNumber}` : ''
          }`
          console.log('SQL', sql)
          return (
            <QueryWrapperPlotNav
              rgbIndex={rgbIndex}
              sql={sql}
              visibleColumnCount={7}
              tableConfiguration={{
                showAccessColumn: true,
                showDownloadColumn: true,
              }}
              shouldDeepLink={false}
              columnAliases={columnAliases}
              defaultShowPlots={false}
            />
          )
        }}
      </DetailsPageContextConsumer>
    ),
  },
]

export function DatasetsDetailsPage() {
  return (
    <PortalSearchParams keyFilter={['id']}>
      {searchParams => (
        <>
          <CardContainerLogic
            {...datasetCardConfiguration}
            sql={datasetsSql}
            isHeader
            searchParams={searchParams}
          />
          <DetailsPage
            sql={datasetsSql}
            sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
            ContainerProps={{
              maxWidth: 'xl',
            }}
          >
            <DatasetJsonLdScript entityId={searchParams.id} />
            <DetailsPageContent content={detailsPageContent} />
          </DetailsPage>
        </>
      )}
    </PortalSearchParams>
  )
}
