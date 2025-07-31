import { D4D } from '@/components/D4D'
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
  CardConfiguration,
} from 'synapse-react-client'
import {
  CardContainerLogic,
  StandaloneQueryWrapper,
} from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '@/config/columnAliases'
import {
  standardsRgbIndex,
  standardsColumnLinks,
} from '@/config/synapseConfigs/standards'
import {
  ColumnSingleValueFilterOperator,
  ColumnMultiValueFunction,
  // ColumnTypeEnum,
} from '@sage-bionetworks/synapse-types'
import {
  organizationDetailsPageSQL,
  dataSetSQL,
  standardsSql,
  standardsFtsConfig,
  ORG_TABLE_COLUMN_NAMES,
  DATASET_DENORMALIZED_COLUMN_NAMES,
  DST_TABLE_COLUMN_NAMES,
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
    // ORG_TABLE_COLUMN_NAMES.SUBCLASS_OF,
  ],
}

function OrgHeaderCard({ id }) {
  return (
    <CardContainerLogic
      query={{
        sql: organizationDetailsPageSQL,
        additionalFilters: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
            columnName: 'id',
            operator: ColumnSingleValueFilterOperator.EQUAL,
            values: [id as string],
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
  )
}

export const linkedOrgCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.ORGANIZATION,
    title: ORG_TABLE_COLUMN_NAMES.NAME,
    // subTitle: 'standardName',
    description: ORG_TABLE_COLUMN_NAMES.DESCRIPTION,
    link: 'orgPageLink',
    secondaryLabels: [
      DATASET_DENORMALIZED_COLUMN_NAMES.DOCUMENTATION_URL,
      DATASET_DENORMALIZED_COLUMN_NAMES.TOPICS,
      DATASET_DENORMALIZED_COLUMN_NAMES.SUBSTRATES,
    ],
    // labelLinkConfig: {}
  },
}
export const linkedDataSetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: DATASET_DENORMALIZED_COLUMN_NAMES.NAME,
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
    id: 'subclassOf',
    title: 'Parent Organization',
    element: (
      <DetailsPageContextConsumer
        columnName={ORG_TABLE_COLUMN_NAMES.SUBCLASS_OF}
      >
        {({ value }) => {
          return (
            <CardContainerLogic
              cardConfiguration={linkedOrgCardConfiguration}
              sql={organizationDetailsPageSQL}
              // need a dummy value for search to properly exclude null values and an empty string doesn't work
              searchParams={{ [ORG_TABLE_COLUMN_NAMES.ID]: value ?? 'notreal' }}
            />
          )
        }}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'hasSubclass',
    title: 'Child Organization',
    element: (
      <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_NAMES.ID}>
        {({ value }) => {
          return (
            <CardContainerLogic
              cardConfiguration={linkedOrgCardConfiguration}
              sql={organizationDetailsPageSQL}
              // need a dummy value for search to properly exclude null values and an empty string doesn't work
              searchParams={{
                [ORG_TABLE_COLUMN_NAMES.SUBCLASS_OF]: value ?? 'notreal',
              }}
              sqlOperator={ColumnMultiValueFunction.HAS}
            />
          )
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
                [DATASET_DENORMALIZED_COLUMN_NAMES.PRODUCED_BY_ORG_ID]:
                  value ?? 'no value',
              }}
              sqlOperator={ColumnMultiValueFunction.HAS}
            />
          )
        }}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'relatedStandards',
    title: 'Standards relevant to this organization',
    element: (
      <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_NAMES.ID}>
        {({ value }) => (
          <StandaloneQueryWrapper
            rgbIndex={standardsRgbIndex}
            sql={standardsSql}
            searchParams={{
              [DST_TABLE_COLUMN_NAMES.HAS_RELEVANT_ORGANIZATION]:
                value ?? 'no value',
            }}
            sqlOperator={ColumnMultiValueFunction.HAS}
            columnAliases={columnAliases}
            tableConfiguration={{
              showDownloadColumn: false,
              columnLinks: standardsColumnLinks,
            }}
            // facetsToPlot={['topic', DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES]}
            // initialPlotType={'BAR'}
            searchConfiguration={{
              ftsConfig: standardsFtsConfig,
            }}
            shouldDeepLink={false}
            hideQueryCount={true}
            hideDownload={true}
            /*
                showColumnSelection={true}
                // visibleColumnCount={10}
                isRowSelectionVisible={true}
                tableConfiguration={{
                  showAccessColumn: true,
                  showDownloadColumn: true,
                }}
                lockedColumn={{
                  columnName: DATA_TABLE_COLUMN_NAMES.STUDY,
                  value: entityHeader.name,
                }}
                */
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'responsibleForStandards',
    title: 'Standards this organization is responsible for',
    element: (
      <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_NAMES.ID}>
        {({ value }) => (
          <StandaloneQueryWrapper
            rgbIndex={standardsRgbIndex}
            sql={standardsSql}
            searchParams={{
              [DST_TABLE_COLUMN_NAMES.RESPONSIBLE_ORGANIZATION]:
                value ?? 'no value',
            }}
            sqlOperator={ColumnMultiValueFunction.HAS}
            columnAliases={columnAliases}
            tableConfiguration={{
              showDownloadColumn: false,
              columnLinks: standardsColumnLinks,
            }}
            // facetsToPlot={['topic', DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES]}
            // initialPlotType={'BAR'}
            searchConfiguration={{
              ftsConfig: standardsFtsConfig,
            }}
            shouldDeepLink={false}
            hideQueryCount={true}
            hideDownload={true}
            /*
                      showColumnSelection={true}
                      // visibleColumnCount={10}
                      isRowSelectionVisible={true}
                      tableConfiguration={{
                        showAccessColumn: true,
                        showDownloadColumn: true,
                      }}
                      lockedColumn={{
                        columnName: DATA_TABLE_COLUMN_NAMES.STUDY,
                        value: entityHeader.name,
                      }}
                      */
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'd4d',
    title: 'DataSheet for DataSet',
    element: (
      <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_NAMES.ID}>
        {({ value }) => {
          return <D4D org_id={value ?? ''} />
        }}
      </DetailsPageContextConsumer>
    ),
  },
]

export default function OrganizationDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()

  console.log(organizationDetailsPageSQL)
  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  return (
    <DetailsPage
      header={<OrgHeaderCard id={id} />}
      sql={organizationDetailsPageSQL}
    >
      <DetailsPageContent content={organizationDetailsPageContent} />
    </DetailsPage>
  )
}
