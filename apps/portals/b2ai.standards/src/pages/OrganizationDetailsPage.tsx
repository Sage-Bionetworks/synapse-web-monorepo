import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  CardConfiguration,
  CardContainerLogic,
  ErrorBanner,
  ErrorPage,
  StandaloneQueryWrapper,
  SynapseConstants,
  SynapseErrorType,
} from 'synapse-react-client'
// import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'
// import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import {
  DATASET_DENORMALIZED_COLUMN_NAMES,
  DST_TABLE_COLUMN_NAMES,
  ORG_TABLE_COLUMN_NAMES,
  organizationDetailsPageSQL,
  dataSetSQL,
  standardsFtsConfig,
  standardsSql,
} from '@/config/resources'
import { useFetchTableData } from '@/hooks/useOrgQuery'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
  QueryResultBundle,
  Query,
} from '@sage-bionetworks/synapse-types'
import columnAliases from '@/config/columnAliases'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
// import CardDeckDesktop from 'synapse-react-client/components/CardDeck/CardDeck.Desktop'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import {
  standardsColumnLinks,
  standardsRgbIndex,
} from '@/config/synapseConfigs/standards'
import { D4D } from '@/components/D4D'

export const organizationCardSchema: TableToGenericCardMapping = {
  type: SynapseConstants.ORGANIZATION,
  title: ORG_TABLE_COLUMN_NAMES.NAME,
  subTitle: ORG_TABLE_COLUMN_NAMES.DESCRIPTION,
  secondaryLabels: [
    ORG_TABLE_COLUMN_NAMES.ROR_ID,
    ORG_TABLE_COLUMN_NAMES.WIKIDATA_ID,
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

export default function OrganizationDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()
  const colNames = [
    ORG_TABLE_COLUMN_NAMES.MAIN_ORGANIZATION_JSON,
    ORG_TABLE_COLUMN_NAMES.ASSOCIATED_ORGANIZATION_JSON,
    ORG_TABLE_COLUMN_NAMES.RELEVANT_STANDARDS_JSON,
    ORG_TABLE_COLUMN_NAMES.GOVERNED_STANDARDS_JSON,
    ORG_TABLE_COLUMN_NAMES.DATASET_JSON,
    ORG_TABLE_COLUMN_NAMES.D4D,
  ]
  const {
    data = [],
    error,
    isLoading,
  } = useFetchTableData({
    tableName: 'Organization_denormalized',
    colNames,
    id,
    countsOnly: true,
  })

  if (error) {
    return <ErrorBanner error={error} />
  }

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (data.length !== 1) {
    throw new Error(`Unexpected ${data.length} rows of Org data.`)
  }
  const jsonColCounts = data[0]

  const sections: DetailsPageSectionLayoutType[] = detailSections({
    detailOrg: jsonColCounts,
  })
  console.log(data, sections)
  // const deck = <CardDeck cards={challengeCards} cardDeckType="b2ai" />

  return (
    <DetailsPage
      header={<OrgHeaderCard id={id} />}
      sql={organizationDetailsPageSQL}
    >
      <DetailsPageContent content={sections} />
    </DetailsPage>
  )
}

export const linkedOrgCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    // type: SynapseConstants.ORGANIZATION,
    title: ORG_TABLE_COLUMN_NAMES.NAME,
    description: ORG_TABLE_COLUMN_NAMES.DESCRIPTION,
    link: 'orgPageLink',
    secondaryLabels: [
      DATASET_DENORMALIZED_COLUMN_NAMES.DOCUMENTATION_URL,
      DATASET_DENORMALIZED_COLUMN_NAMES.TOPICS,
      DATASET_DENORMALIZED_COLUMN_NAMES.SUBSTRATES,
    ],
  },
}
export const linkedDataSetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    // type: SynapseConstants.DATASET,
    title: DATASET_DENORMALIZED_COLUMN_NAMES.NAME,
    description: DATASET_DENORMALIZED_COLUMN_NAMES.DESCRIPTION,
    link: DATASET_DENORMALIZED_COLUMN_NAMES.DATASHEET_URL,
    secondaryLabels: [
      DATASET_DENORMALIZED_COLUMN_NAMES.DOCUMENTATION_URL,
      DATASET_DENORMALIZED_COLUMN_NAMES.TOPICS,
      DATASET_DENORMALIZED_COLUMN_NAMES.SUBSTRATES,
    ],
  },
}

function detailSections({ detailOrg: jsonColCounts }) {
  const sections: DetailsPageSectionLayoutType[] = []

  // Main Organization section
  if (jsonColCounts[ORG_TABLE_COLUMN_NAMES.MAIN_ORGANIZATION_JSON]) {
    sections.push({
      id: 'MainOrganization',
      title: 'Main Organization',
      element: (
        <DetailsPageContextConsumer
          columnName={ORG_TABLE_COLUMN_NAMES.SUBCLASS_OF}
        >
          {({ value, context }) => {
            return (
              <CardContainerLogic
                cardConfiguration={linkedOrgCardConfiguration}
                sql={organizationDetailsPageSQL}
                // need a dummy value for search to properly exclude null values and an empty string doesn't work
                searchParams={{ id: value || 'notreal' }}
                sqlOperator={ColumnSingleValueFilterOperator.IN}
              />
            )
          }}
        </DetailsPageContextConsumer>
      ),
    })
  }

  // Associated Organization section
  if (jsonColCounts[ORG_TABLE_COLUMN_NAMES.ASSOCIATED_ORGANIZATION_JSON]) {
    sections.push({
      id: 'AssociatedOrganization',
      title: 'Associated Organization',
      element: (
        <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_NAMES.ID}>
          {({ value, context }) => {
            return (
              <CardContainerLogic
                cardConfiguration={linkedOrgCardConfiguration}
                sql={organizationDetailsPageSQL}
                // need a dummy value for search to properly exclude null values and an empty string doesn't work
                searchParams={{
                  [ORG_TABLE_COLUMN_NAMES.SUBCLASS_OF]: value || 'notreal',
                }}
                sqlOperator={ColumnMultiValueFunction.HAS}
              />
            )
          }}
        </DetailsPageContextConsumer>
      ),
    })
  }

  // DataSets section
  if (jsonColCounts[ORG_TABLE_COLUMN_NAMES.DATASET_JSON]) {
    sections.push({
      id: 'DataSets',
      title: 'DataSets',
      helpText: 'Metadata and links to a DataSet',
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
    })
  }

  // Relevant Standards section
  if (jsonColCounts[ORG_TABLE_COLUMN_NAMES.RELEVANT_STANDARDS_JSON]) {
    sections.push({
      id: 'RelevantStandards',
      title: 'Relevant Standards',
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
              searchConfiguration={{
                ftsConfig: standardsFtsConfig,
              }}
              shouldDeepLink={false}
              hideQueryCount={true}
              hideDownload={true}
            />
          )}
        </DetailsPageContextConsumer>
      ),
    })
  }

  // Governed Standards section
  if (jsonColCounts[ORG_TABLE_COLUMN_NAMES.GOVERNED_STANDARDS_JSON]) {
    sections.push({
      id: 'GovernedStandards',
      title: 'Governed Standards',
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
              searchConfiguration={{
                ftsConfig: standardsFtsConfig,
              }}
              shouldDeepLink={false}
              hideQueryCount={true}
              hideDownload={true}
            />
          )}
        </DetailsPageContextConsumer>
      ),
    })
  }
  if (jsonColCounts[ORG_TABLE_COLUMN_NAMES.D4D]) {
    sections.push({
      id: 'D4D',
      title: 'D4D',
      helpText: 'DataSheet for DataSet (D4D)',
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
    })
  }
  return sections
}
