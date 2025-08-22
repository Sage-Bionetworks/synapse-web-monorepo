import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnSingleValueFilterOperator,
  ObjectType,
} from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client'
import { datasetsSql } from '../config/resources'
import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '../config/synapseConfigs/datasets'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

export default function DatasetDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()
  return (
    <DetailsPage
      header={
        <CardContainerLogic
          cardConfiguration={{
            ...datasetCardConfiguration,
            secondaryLabelLimit: 4,
            isHeader: true,
          }}
          sql={datasetsSql}
          searchParams={searchParams}
          columnAliases={datasetColumnAliases}
        />
      }
      sql={datasetsSql}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      ContainerProps={{
        maxWidth: 'xl',
      }}
    >
      <DetailsPageContextConsumer columnName={'id'}>
        {({ value: synID }) => (
          <DetailsPageContent
            content={[
              {
                title: 'Description',
                id: 'Description',
                element: (
                  <MarkdownSynapse
                    ownerId={synID!}
                    objectType={ObjectType.ENTITY}
                  />
                ),
              },
              {
                title: 'Acknowledgment',
                id: 'Acknowledgment',
                element: (
                  <MarkdownSynapseFromColumnData
                    columnName={'acknowledgmentStatement'}
                  />
                ),
              },
            ]}
          />
        )}
      </DetailsPageContextConsumer>
    </DetailsPage>
  )
}
