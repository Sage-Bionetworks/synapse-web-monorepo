import { LinearProgress } from '@mui/material'
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
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import {
  standardsColumnLinks,
  standardsRgbIndex,
} from '@/config/synapseConfigs/standards'
import {
  DATASET_DENORMALIZED_COLUMN_CONSTS,
  DST_TABLE_COLUMN_CONSTS,
  ORG_TABLE_COLUMN_CONSTS,
  organizationDetailsPageSQL,
  dataSetSQL,
  standardsFtsConfig,
  standardsSql,
} from '@/config/resources'
import {
  getQueryBundleRequestWithIdFilter,
  useFetchJsonArrayLengths,
} from '@/hooks/fetchDataUtils'
import columnAliases from '@/config/columnAliases'
import { D4D } from '@/components/D4D'

export const organizationCardSchema: TableToGenericCardMapping = {
  type: SynapseConstants.ORGANIZATION,
  title: ORG_TABLE_COLUMN_CONSTS.NAME,
  subTitle: ORG_TABLE_COLUMN_CONSTS.DESCRIPTION,
  secondaryLabels: [
    ORG_TABLE_COLUMN_CONSTS.ROR_ID,
    ORG_TABLE_COLUMN_CONSTS.WIKIDATA_ID,
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
  const colExpressions = [
    ORG_TABLE_COLUMN_CONSTS.MAIN_ORGANIZATION_JSON,
    ORG_TABLE_COLUMN_CONSTS.ASSOCIATED_ORGANIZATION_JSON,
    ORG_TABLE_COLUMN_CONSTS.RELEVANT_STANDARDS_JSON,
    ORG_TABLE_COLUMN_CONSTS.GOVERNED_STANDARDS_JSON,
    ORG_TABLE_COLUMN_CONSTS.DATASET_JSON,
    ORG_TABLE_COLUMN_CONSTS.D4D,
  ]
  const queryBundleRequest: QueryBundleRequest =
    getQueryBundleRequestWithIdFilter(
      'Organization_denormalized',
      colExpressions,
      [id],
    )
  const {
    data = [],
    error,
    isLoading,
  } = useFetchJsonArrayLengths(queryBundleRequest)

  if (error) {
    return <ErrorBanner error={error} />
  }

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  if (isLoading) {
    return <LinearProgress />
  }
  if (data.length == 0) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  } else if (data.length > 1) {
    console.error('Unexpected ${data.length} rows of Org data')
  }
  const jsonColCounts = data[0]

  const sections: DetailsPageSectionLayoutType[] = detailSections({
    detailOrg: jsonColCounts,
  })

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
    type: '',
    title: ORG_TABLE_COLUMN_CONSTS.NAME,
    description: ORG_TABLE_COLUMN_CONSTS.DESCRIPTION,
    link: 'orgPageLink',
    secondaryLabels: [
      DATASET_DENORMALIZED_COLUMN_CONSTS.DATA_URL,
      DATASET_DENORMALIZED_COLUMN_CONSTS.DOCUMENTATION_URL,
      DATASET_DENORMALIZED_COLUMN_CONSTS.TOPICS,
      DATASET_DENORMALIZED_COLUMN_CONSTS.SUBSTRATES,
    ],
  },
}
export const linkedDataSetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: '',
    title: DATASET_DENORMALIZED_COLUMN_CONSTS.NAME,
    description: DATASET_DENORMALIZED_COLUMN_CONSTS.DESCRIPTION,
    link: DATASET_DENORMALIZED_COLUMN_CONSTS.DATA_URL,
    secondaryLabels: [
      DATASET_DENORMALIZED_COLUMN_CONSTS.DATA_URL,
      DATASET_DENORMALIZED_COLUMN_CONSTS.DOCUMENTATION_URL,
      DATASET_DENORMALIZED_COLUMN_CONSTS.TOPICS,
      DATASET_DENORMALIZED_COLUMN_CONSTS.SUBSTRATES,
    ],
  },
}

function detailSections({ detailOrg: jsonColCounts }) {
  const sections: DetailsPageSectionLayoutType[] = []

  // Main Organization section
  if (jsonColCounts[ORG_TABLE_COLUMN_CONSTS.MAIN_ORGANIZATION_JSON]) {
    sections.push({
      id: 'MainOrganization',
      title: 'Main Organization',
      element: (
        <DetailsPageContextConsumer
          columnName={ORG_TABLE_COLUMN_CONSTS.SUBCLASS_OF}
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
  if (jsonColCounts[ORG_TABLE_COLUMN_CONSTS.ASSOCIATED_ORGANIZATION_JSON]) {
    sections.push({
      id: 'AssociatedOrganization',
      title: 'Associated Organization',
      element: (
        <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_CONSTS.ID}>
          {({ value, context }) => {
            return (
              <CardContainerLogic
                cardConfiguration={linkedOrgCardConfiguration}
                sql={organizationDetailsPageSQL}
                // need a dummy value for search to properly exclude null values and an empty string doesn't work
                searchParams={{
                  [ORG_TABLE_COLUMN_CONSTS.SUBCLASS_OF]: value || 'notreal',
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
  if (jsonColCounts[ORG_TABLE_COLUMN_CONSTS.DATASET_JSON]) {
    sections.push({
      id: 'DataSets',
      title: 'DataSets',
      helpText: 'Metadata and links to a DataSet',
      element: (
        <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_CONSTS.ID}>
          {({ value }) => {
            return (
              <CardContainerLogic
                cardConfiguration={linkedDataSetCardConfiguration}
                sql={dataSetSQL}
                // need a dummy value for search to properly exclude null values and an empty string doesn't work
                searchParams={{
                  [DATASET_DENORMALIZED_COLUMN_CONSTS.PRODUCED_BY_ORG_ID]:
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
  if (jsonColCounts[ORG_TABLE_COLUMN_CONSTS.RELEVANT_STANDARDS_JSON]) {
    sections.push({
      id: 'RelevantStandards',
      title: 'Relevant Standards',
      element: (
        <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_CONSTS.ID}>
          {({ value }) => (
            <StandaloneQueryWrapper
              rgbIndex={standardsRgbIndex}
              sql={standardsSql}
              searchParams={{
                [DST_TABLE_COLUMN_CONSTS.HAS_RELEVANT_ORGANIZATION]:
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
  if (jsonColCounts[ORG_TABLE_COLUMN_CONSTS.GOVERNED_STANDARDS_JSON]) {
    sections.push({
      id: 'GovernedStandards',
      title: 'Governed Standards',
      element: (
        <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_CONSTS.ID}>
          {({ value }) => (
            <StandaloneQueryWrapper
              rgbIndex={standardsRgbIndex}
              sql={standardsSql}
              searchParams={{
                [DST_TABLE_COLUMN_CONSTS.RESPONSIBLE_ORGANIZATION]:
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
  if (jsonColCounts[ORG_TABLE_COLUMN_CONSTS.D4D]) {
    sections.push({
      id: 'D4D',
      title: 'D4D',
      helpText: 'DataSheet for DataSet (D4D)',
      element: (
        <DetailsPageContextConsumer columnName={ORG_TABLE_COLUMN_CONSTS.ID}>
          {({ value }) => {
            return <D4D org_id={String(value)} />
          }}
        </DetailsPageContextConsumer>
      ),
    })
  }
  return sections
}
