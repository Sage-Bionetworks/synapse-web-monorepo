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
  // EntityDownloadConfirmation,
} from 'synapse-react-client'
import { CardContainerLogic } from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '@/config/columnAliases'
import {
  ColumnSingleValueFilterOperator,
  ColumnMultiValueFunction,
  // ColumnTypeEnum,
} from '@sage-bionetworks/synapse-types'
import {
  organizationDetailsPageSQL,
  dataSetSQL,
  ORG_TABLE_COLUMN_NAMES,
  DATASET_DENORMALIZED_COLUMN_NAMES,
} from '@/config/resources'
// import { GenericCardIcon } from 'synapse-react-client/components/GenericCard/GenericCardIcon'
// import GenericCard from 'synapse-react-client/components/GenericCard/GenericCard'
// import { Collapse } from '@mui/material'
// import IconList from 'synapse-react-client/components/IconList'
// import GenericCardActionButton from 'synapse-react-client/components/GenericCard/GenericCardActionButton'
// import { GetAppTwoTone } from '@mui/icons-material'
// import CitationPopover from 'synapse-react-client/components/CitationPopover'
// import React from 'react'

export const organizationCardSchema: TableToGenericCardMapping = {
  type: SynapseConstants.ORGANIZATION,
  title: ORG_TABLE_COLUMN_NAMES.NAME,
  subTitle: 'description',
  // subTitle: ORG_TABLE_COLUMN_NAMES.DESCRIPTION,
  // link: 'url',
  secondaryLabels: [
    ORG_TABLE_COLUMN_NAMES.ROR_ID,
    ORG_TABLE_COLUMN_NAMES.WIKIDATA_ID,
    ORG_TABLE_COLUMN_NAMES.SUBCLASS_OF,
  ],
}

export const linkedDataSetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: DATASET_DENORMALIZED_COLUMN_NAMES.NAME,
    // subTitle: 'standardName',
    description: DATASET_DENORMALIZED_COLUMN_NAMES.DESCRIPTION,
    link: DATASET_DENORMALIZED_COLUMN_NAMES.DATASHEET_URL,
    secondaryLabels: [
      DATASET_DENORMALIZED_COLUMN_NAMES.DOCUMENTATION_URL,
      DATASET_DENORMALIZED_COLUMN_NAMES.TOPICS,
      DATASET_DENORMALIZED_COLUMN_NAMES.SUBSTRATES,
    ],
    // labelLinkConfig: {}
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
                // displayedColumns={['name', 'rorId']}
                displayedColumns={[
                  ORG_TABLE_COLUMN_NAMES.NAME,
                  ORG_TABLE_COLUMN_NAMES.ROR_ID,
                  ORG_TABLE_COLUMN_NAMES.WIKIDATA_ID,
                  ORG_TABLE_COLUMN_NAMES.SUBCLASS_OF,
                ]}
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
      <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_NAMES.ID}>
        {({ value }) => {
          return (
            <CardContainerLogic
              cardConfiguration={linkedDataSetCardConfiguration}
              sql={dataSetSQL}
              // need a dummy value for search to properly exclude null values and an empty string doesn't work
              searchParams={{
                [DATASET_DENORMALIZED_COLUMN_NAMES.PRODUCED_BY_ORG_ID]: value,
              }}
              sqlOperator={ColumnMultiValueFunction.HAS}
            />
          )
        }}
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
          sql: organizationDetailsPageSQL,
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
            link: 'url',
          },
        }}
      />

      <DetailsPage sql={organizationDetailsPageSQL}>
        <DetailsPageContent content={organizationDetailsPageContent} />
      </DetailsPage>
    </>
  )
}
