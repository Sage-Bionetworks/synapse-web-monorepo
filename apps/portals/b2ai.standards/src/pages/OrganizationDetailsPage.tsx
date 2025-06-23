import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ErrorPage,
  SynapseConstants,
  SynapseErrorType,
  RowDataTable,
  SkeletonTable,
  CardConfiguration,
  EntityDownloadConfirmation,
} from 'synapse-react-client'
import { CardContainerLogic } from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../config/columnAliases'
import {
  ColumnSingleValueFilterOperator,
  ColumnTypeEnum,
} from '@sage-bionetworks/synapse-types'
import { organizationDetailsPageSQL, dataSetSQL } from '../config/resources'
import { GenericCardIcon } from 'synapse-react-client/components/GenericCard/GenericCardIcon'
import GenericCard from 'synapse-react-client/components/GenericCard/GenericCard'
import { Collapse } from '@mui/material'
import IconList from 'synapse-react-client/components/IconList'
import GenericCardActionButton from 'synapse-react-client/components/GenericCard/GenericCardActionButton'
import { GetAppTwoTone } from '@mui/icons-material'
import CitationPopover from 'synapse-react-client/components/CitationPopover'
import React from 'react'
const dataSql = organizationDetailsPageSQL
console.log({ dataSql })

export const organizationCardSchema: TableToGenericCardMapping = {
  type: SynapseConstants.ORGANIZATION,
  title: 'name',
  subTitle: 'description',
  // description: 'description',
  link: 'URL',
  secondaryLabels: ['rorId', 'wikidataId', 'topics', 'dataTypes'],
}

export const linkedDataSetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: 'acronym',
    subTitle: 'standardName',
    description: 'description',
    link: '',
  },
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Standard/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'id',
  },
}

export const organizationDetailsPageContent: DetailsPageContentType = [
  {
    id: 'About the Organization',
    title: 'About the Organization',
    element: (
      <DetailsPageContextConsumer columnName={'id'}>
        {({ context }) => {
          if (context.rowData && context.rowSet) {
            return (
              <RowDataTable
                rowData={context.rowData.values ?? []}
                headers={context.rowSet?.headers ?? []}
                displayedColumns={['name', 'rorId']}
                columnAliases={columnAliases}
              />
            )
          } else {
            return <SkeletonTable numRows={6} numCols={1} />
          }
        }}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'DataSets',
    title: 'DataSets',
    element: (
      <DetailsPageContextConsumer columnName={'dataset_json'}>
        {({ value }) => (
          <CardContainerLogic
            cardConfiguration={linkedDataSetCardConfiguration}
            sql={dataSetSQL}
            // need a dummy value for search to properly exclude null values and an empty string doesn't work
            searchParams={{ id: value || 'notreal' }}
            sqlOperator={ColumnSingleValueFilterOperator.IN}
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
]

export default function OrganizationDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()

  /*
  This is the code previously used on home page to generate the Explore Standards
  links. Need to get it working here now.

  function createExplorePageLink(query: Query): string {
    return `/Explore?QueryWrapper0=${encodeURIComponent(JSON.stringify(query))}`
  }

  const query: Query = {
    sql: dataSql,
    limit: 25,
    selectedFacets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES,
        facetValues: [org[ORG_DENORMALIZED_COLUMN_NAMES.NAME]],
      },
    ],
  }
  ctaButtonText: 'Explore Standards',
  ctaButtonURL: createExplorePageLink(query),
  */

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  return (
    <>
      <CardContainerLogic
        query={{
          sql: dataSql,
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
              columnName: 'id',
              operator: ColumnSingleValueFilterOperator.EQUAL,
              values: [id],
            },
          ],
        }}
        columnAliases={columnAliases}
        cardConfiguration={{
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: organizationCardSchema,
          secondaryLabelLimit: 6,
          isHeader: true,
          headerCardVariant: 'HeaderCardV2',
          ctaLinkConfig: {
            text: 'View Organization on External Website',
            link: 'URL',
          },
        }}
      />

      <DetailsPage sql={dataSql}>
        <DetailsPageContent content={organizationDetailsPageContent} />
      </DetailsPage>
    </>
  )
}
