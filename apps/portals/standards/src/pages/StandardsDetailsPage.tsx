import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ErrorPage,
  GenericCardSchema,
  SynapseConstants,
  SynapseErrorType,
  RowDataTable,
  SkeletonTable,
} from 'synapse-react-client'
import { dataSql } from '../config/resources'
import { CardContainerLogic } from 'synapse-react-client'
import columnAliases from '../config/columnAliases'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

export const standardsCardSchema: GenericCardSchema = {
  type: SynapseConstants.STANDARD_DATA_MODEL,
  // include acronym somewhere?
  title: 'name',
  subTitle: 'responsibleOrgName',
  description: 'description',
  secondaryLabels: ['collections', 'topic', 'relevantOrgName', 'URL'],
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
                  'name',
                  'responsibleOrgName',
                  'relevantOrgName',
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
      <DetailsPageContextConsumer columnName={'id'}>
        {({ value }) => (
          <>{value}</>
          // TODO:
          // <CardContainerLogic
          //   {...trainingResourcesCardContainerProps}
          //   searchParams={{ standardId: value! }}
          // />
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Related Standards',
    title: 'Related Standards',
    element: (
      <DetailsPageContextConsumer columnName={'id'}>
        {({ value }) => (
          <>{value}</>
          // TODO:
          // <CardContainerLogic
          //   {...standardCardContainerProps}
          //   searchParams={{ standardId: value! }}
          // />
        )}
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
        sql={dataSql}
        type={SynapseConstants.GENERIC_CARD}
        genericCardSchema={standardsCardSchema}
        secondaryLabelLimit={6}
        isHeader={true}
        headerCardVariant="HeaderCardV2"
        searchParams={{ id }}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      />

      <DetailsPage sql={dataSql}>
        <DetailsPageContent content={standardDetailsPageContent} />
      </DetailsPage>
    </>
  )
}
