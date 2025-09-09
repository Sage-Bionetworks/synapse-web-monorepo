import isEmpty from 'lodash-es/isEmpty'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  CardContainerLogic,
  ErrorBanner,
  ErrorPage,
  SynapseConstants,
  SynapseErrorType,
} from 'synapse-react-client'
import { CardDeckCardProps } from 'synapse-react-client/components/CardDeck/CardDeckCardProps'
import { CardDeck } from 'synapse-react-client/components/CardDeck/CardDeck'
import {
  ORG_TABLE_COLUMN_NAMES,
  organizationDetailsPageSQL,
} from '@/config/resources'
import { useOrgQuery } from '@/hooks/useOrgQuery'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import columnAliases from '@/config/columnAliases'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import CardDeckDesktop from 'synapse-react-client/components/CardDeck/CardDeck.Desktop'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'

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

function orgSectionCard({ detailOrg }) {
  const card: CardDeckCardProps = {
    title: detailOrg[ORG_TABLE_COLUMN_NAMES.NAME] || detailOrg.name,
    description:
      detailOrg[ORG_TABLE_COLUMN_NAMES.DESCRIPTION] || detailOrg.description,
    cardDeckType: 'b2ai',
    ctaButtonText: 'NOT USED IN cardDeckType = b2ai',
    ctaButtonURL: `/Explore/Organization/OrganizationDetailsPage?${
      ORG_TABLE_COLUMN_NAMES.ID
    }=${detailOrg[ORG_TABLE_COLUMN_NAMES.ID] || detailOrg.id}`,
  }
  return card
}

function datasetSectionCard({ dataset }) {
  const card: CardDeckCardProps = {
    title: dataset.name,
    description: dataset.description,
    cardDeckType: 'b2ai',
    ctaButtonText: 'NOT USED IN cardDeckType = b2ai',
    ctaButtonURL: dataset.DatasheetURL || dataset.DocumentationURL || '#',
  }
  return card
}

function standardSectionCard({ standard }) {
  const card: CardDeckCardProps = {
    title: `${standard.acronym}: ${standard.name}`,
    description: standard.description,
    cardDeckType: 'b2ai',
    ctaButtonText: 'NOT USED IN cardDeckType = b2ai',
    ctaButtonURL: `/Explore/Standard/DetailsPage?id=${standard.id}`,
  }
  return card
}
function detailSections({ detailOrg }) {
  const sections: DetailsPageSectionLayoutType[] = []
  /*
  // Main Organization section
  const main_organization =
    detailOrg[ORG_TABLE_COLUMN_NAMES.MAIN_ORGANIZATION_JSON]
  if (!isEmpty(main_organization)) {
    main_organization.forEach((org) => {
      sections.push({
        title: 'Main Organization',
        ...orgSectionCard({ detailOrg: org })
      })
    })
  }

  // Associated Organization section
  const associated_organization =
    detailOrg[ORG_TABLE_COLUMN_NAMES.ASSSOCIATED_ORGANIZATION_JSON]
  if (!isEmpty(associated_organization)) {
    associated_organization.forEach((org) => {
      sections.push({
        title: 'Associated Organization', 
        ...orgSectionCard({ detailOrg: org })
      })
    })
  }
  */

  // DataSets section
  const datasets = detailOrg[ORG_TABLE_COLUMN_NAMES.DATASET_JSON]
  if (!isEmpty(datasets)) {
    const cards: CardDeckCardProps[] = datasets.map((dataset, i) => {
      return datasetSectionCard({ dataset })
    })
    sections.push({
      id: 'DataSets',
      title: 'DataSets',
      element: <CardDeck cardDeckType="b2ai" cards={cards} />,
    })
  }

  /*
  // Relevant Standards section
  const relevantStandards = detailOrg[ORG_TABLE_COLUMN_NAMES.RELEVANT_STANDARDS_JSON]
  if (!isEmpty(relevantStandards)) {
    relevantStandards.forEach((standard) => {
      sections.push({
        id: 'd4d',
        title: 'Relevant Standards',
        ...standardSectionCard({ standard })
      })
    })
  }

  // Governed Standards section
  const governedStandards = detailOrg[ORG_TABLE_COLUMN_NAMES.GOVERNED_STANDARDS_JSON]
  if (!isEmpty(governedStandards)) {
    governedStandards.forEach((standard) => {
      sections.push({
        title: 'Governed Standards',
        ...standardSectionCard({ standard })
      })
    })
  }
  */

  return sections
}
