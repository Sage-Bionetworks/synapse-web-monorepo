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
import columnAliases from '../config/columnAliases'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  DST_TABLE_COLUMN_NAMES,
  standardsDetailsPageSQL,
} from '../config/resources'
const dataSql = standardsDetailsPageSQL

export const standardsCardSchema: TableToGenericCardMapping = {
  type: SynapseConstants.STANDARD_DATA_MODEL,
  title: 'acronym',
  subTitle: 'standardName',
  description: 'description',
  link: 'url',
  secondaryLabels: ['SDO', 'collections', 'topics'],
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
            return (
              <RowDataTable
                rowData={context.rowData.values ?? []}
                headers={context.rowSet?.headers ?? []}
                displayedColumns={[
                  'standardName',
                  'SDO',
                  DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES,
                  'isOpen',
                  'registration',
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
    id: 'Linked Training Resources',
    title: 'Linked Training Resources',
    element: (
      <DetailsPageContextConsumer columnName={'trainingResources'}>
        {({ value }) => (
          <CardContainerLogic
            cardConfiguration={linkedStandardCardConfiguration}
            sql={dataSql}
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
              sql={dataSql}
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
    <>
      {/* TODO: header card */}
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
        cardConfiguration={{
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: standardsCardSchema,
          secondaryLabelLimit: 6,
          isHeader: true,
          headerCardVariant: 'HeaderCardV2',
          ctaLinkConfig: {
            text: 'View Standard on External Website',
            link: 'url',
          },
        }}
      />

      <DetailsPage sql={dataSql}>
        <DetailsPageContent content={standardDetailsPageContent} />
      </DetailsPage>
    </>
  )
}
