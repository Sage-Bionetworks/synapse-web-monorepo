import isEmpty from 'lodash-es/isEmpty'
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
import { useOrgQuery } from '@/hooks/useOrgQuery'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
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
// import {linkedStandardCardConfiguration} from "@/pages/StandardsDetailsPage";

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
  const {
    data = [],
    error,
    isLoading,
  } = useOrgQuery({
    ids: id ? [String(id)] : [],
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
  const detailOrg = data[0]

  const sections: DetailsPageSectionLayoutType[] = detailSections({ detailOrg })
  console.log(sections)
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

/* function orgSectionCard({ detailOrg }) {
  const card: CardDeckCardProps = {
    title: detailOrg[ORG_TABLE_COLUMN_NAMES.NAME],
    description: detailOrg[ORG_TABLE_COLUMN_NAMES.DESCRIPTION],
    cardDeckType: 'b2ai-detail-card',
    ctaButtonText: 'NOT USED IN cardDeckType = b2ai-detail-card',
    ctaButtonURL: `/Explore/Organization/OrganizationDetailsPage?${
      ORG_TABLE_COLUMN_NAMES.ID
    }=${detailOrg[ORG_TABLE_COLUMN_NAMES.ID]}`,
  }
  return card
}
function datasetSectionCard({ dataset }) {
  const card: CardDeckCardProps = {
    title: dataset.name,
    description: dataset.description,
    cardDeckType: 'b2ai-detail-card',
    ctaButtonText: 'NOT USED IN cardDeckType = b2ai-detail-card',
    ctaButtonURL: dataset.DatasheetURL || dataset.DocumentationURL || '#',
  }
  return card
}
function standardSectionCard({ standard }) {
  const card: CardDeckCardProps = {
    title: `${standard.acronym}: ${standard.name}`,
    description: standard.description,
    cardDeckType: 'b2ai-detail-card',
    ctaButtonText: 'NOT USED IN cardDeckType = b2ai-detail-card',
    ctaButtonURL: `/Explore/Standard/DetailsPage?id=${standard.id}`,
  }
  return card
} */
export const linkedOrgCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.ORGANIZATION,
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
    type: SynapseConstants.DATASET,
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

function detailSections({ detailOrg }) {
  const sections: DetailsPageSectionLayoutType[] = []

  // Main Organization section
  const main_organization =
    detailOrg[ORG_TABLE_COLUMN_NAMES.MAIN_ORGANIZATION_JSON]
  if (!isEmpty(main_organization)) {
    /* const cards: CardDeckCardProps[] = main_organization.map(org => {
      return orgSectionCard({ detailOrg: org })
    }) */
    sections.push({
      id: 'MainOrganization',
      title: 'Main Organization',
      // element: <CardDeck cardDeckType="b2ai-detail-card" cards={cards} />,
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
  const associated_organization =
    detailOrg[ORG_TABLE_COLUMN_NAMES.ASSSOCIATED_ORGANIZATION_JSON]
  if (!isEmpty(associated_organization)) {
    /* const cards: CardDeckCardProps[] = associated_organization.map(org => {
      return orgSectionCard({ detailOrg: org })
    }) */
    sections.push({
      id: 'AssociatedOrganization',
      title: 'Associated Organization',
      // element: <CardDeck cardDeckType="b2ai-detail-card" cards={cards} />,
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
  const datasets = detailOrg[ORG_TABLE_COLUMN_NAMES.DATASET_JSON]
  if (!isEmpty(datasets)) {
    /* const cards: CardDeckCardProps[] = datasets.map((dataset, i) => {
      return datasetSectionCard({ dataset })
    }) */
    sections.push({
      id: 'DataSets',
      title: 'DataSets',
      helpText: 'Metadata and links to a DataSet',
      // element: <CardDeck cardDeckType="b2ai-detail-card" cards={cards} />,
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
  const relevantStandards =
    detailOrg[ORG_TABLE_COLUMN_NAMES.RELEVANT_STANDARDS_JSON]
  if (!isEmpty(relevantStandards)) {
    /*
    const cards: CardDeckCardProps[] = relevantStandards.map(standard => {
      return standardSectionCard({ standard })
    }) */
    sections.push({
      id: 'RelevantStandards',
      title: 'Relevant Standards',
      // element: <CardDeck cardDeckType="b2ai-detail-card" cards={cards} />,
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
  const governedStandards =
    detailOrg[ORG_TABLE_COLUMN_NAMES.GOVERNED_STANDARDS_JSON]
  if (!isEmpty(governedStandards)) {
    /* const cards: CardDeckCardProps[] = governedStandards.map(standard => {
      return standardSectionCard({ standard })
    }) */
    sections.push({
      id: 'GovernedStandards',
      title: 'Governed Standards',
      // element: <CardDeck cardDeckType="b2ai-detail-card" cards={cards} />,
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
  return sections
}
