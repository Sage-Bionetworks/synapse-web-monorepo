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
} from 'synapse-react-client'
import { CardContainerLogic } from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '@/config/columnAliases'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  DST_TABLE_COLUMN_CONSTS,
  standardsDetailsPageSQL,
} from '@/config/resources'
import { standardsColumnLinks } from '@/config/synapseConfigs/standards'
import { CardsFromData, CardData } from '@/components/CardsFromData'
import {
  CitationCard,
  Citation,
  extractJsonFromContext,
} from '@/components/CitationCard'
import { Box, Typography } from '@mui/material'

export const standardsCardSchema: TableToGenericCardMapping = {
  type: SynapseConstants.STANDARD_DATA_MODEL,
  title: 'acronym',
  subTitle: 'standardName',
  description: 'description',
  link: 'url',
  secondaryLabels: [
    'category',
    'collections',
    'topic',
    'dataTypes',
    'aiApplicationCount',
    // DST_TABLE_COLUMN_NAMES.RESPONSIBLE_ORGANIZATION,
    // DST_TABLE_COLUMN_NAMES.RESPONSIBLE_ORG_LINKS,
    // DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES,
  ],
}

export const linkedStandardCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.STANDARD_DATA_MODEL,
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

export const standardDetailsPageContent: DetailsPageContentType = [
  {
    id: 'About The Standard',
    title: 'About The Standard',
    element: (
      <DetailsPageContextConsumer columnName={'id'}>
        {({ context }) => {
          if (context.rowData && context.rowSet) {
            const publication = extractJsonFromContext<Citation>(
              context,
              'publication',
            )
            return (
              <div>
                <RowDataTable
                  rowData={context.rowData.values ?? []}
                  headers={context.rowSet?.headers ?? []}
                  displayedColumns={[
                    'standardName',
                    DST_TABLE_COLUMN_CONSTS.RESPONSIBLE_ORG_LINKS,
                    DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_LINKS,
                    'isOpen',
                    'registration',
                  ]}
                  columnAliases={columnAliases}
                  columnLinks={standardsColumnLinks}
                />
                {publication && (
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: 'text.secondary', mb: 0.5 }}
                    >
                      Publication
                    </Typography>
                    <CitationCard citation={publication} />
                  </Box>
                )}
              </div>
            )
          } else {
            return <SkeletonTable numRows={8} numCols={1} />
          }
        }}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'AIApplications',
    title: 'AI Applications',
    element: (
      <DetailsPageContextConsumer columnName={'AIApplicationJSON'}>
        {({ value }) => {
          if (!value) return null
          const apps = JSON.parse(value) as Array<{
            id: string
            name: string
            category: string
            references?: Citation[]
            description: string
            used_in_bridge2ai: boolean
          }>
          const cards: CardData[] = apps.map(app => ({
            key: app.id,
            // omit type to avoid redundant "APPLICATION" header under "Applications" section
            title: app.name,
            subtitle: app.used_in_bridge2ai ? 'Used in Bridge2AI' : undefined,
            description: app.description || '',
            footer: app.references?.length ? (
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'text.secondary', mb: 0.5 }}
                >
                  References
                </Typography>
                {app.references.map(ref => (
                  <CitationCard key={ref.ref_url} citation={ref} />
                ))}
              </Box>
            ) : undefined,
          }))
          return <CardsFromData data={cards} />
        }}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Linked Training Resources',
    title: 'Linked Training Resources',
    element: (
      <DetailsPageContextConsumer columnName={'trainingResources'}>
        {({ value }) => (
          <CardContainerLogic
            cardConfiguration={linkedStandardCardConfiguration}
            sql={standardsDetailsPageSQL}
            // need a dummy value for search to properly exclude null values and an empty string doesn't work
            searchParams={{ id: value || 'notreal' }}
            sqlOperator={ColumnSingleValueFilterOperator.IN}
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Related Standards',
    title: 'Related Standards',
    element: (
      <DetailsPageContextConsumer columnName={'relatedTo'}>
        {({ value, context }) => {
          return (
            <CardContainerLogic
              cardConfiguration={linkedStandardCardConfiguration}
              sql={standardsDetailsPageSQL}
              // need a dummy value for search to properly exclude null values and an empty string doesn't work
              searchParams={{ id: value || 'notreal' }}
              sqlOperator={ColumnSingleValueFilterOperator.IN}
            />
          )
        }}
      </DetailsPageContextConsumer>
    ),
  },
]

export default function StandardsDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  return (
    <DetailsPage
      header={
        <CardContainerLogic
          query={{
            sql: standardsDetailsPageSQL,
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
            genericCardSchema: standardsCardSchema,
            secondaryLabelLimit: 6,
            isHeader: true,
            headerCardVariant: 'HeaderCardV2',
            charCountCutoff: 800,
            ctaLinkConfig: [
              {
                text: 'View Standard on External Website',
                link: 'url',
              },
              {
                text: 'View Formal Specification',
                link: 'formalSpec',
              },
            ],
            labelLinkConfig: standardsColumnLinks,
          }}
        />
      }
      sql={standardsDetailsPageSQL}
      resourcePrimaryKey={['id']}
    >
      <DetailsPageContent content={standardDetailsPageContent} />
    </DetailsPage>
  )
}
