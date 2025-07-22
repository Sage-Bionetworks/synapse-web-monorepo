import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { datasetsSql } from '../config/resources'
import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '../config/synapseConfigs/datasets'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic'
import DatasetDetailsFilesTable from './DatasetDetailsFilesTable'

function DatasetDetailsPage() {
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
      <DetailsPageContent
        content={[
          {
            title: 'Description',
            id: 'Description',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={'datasetDescription'}
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
          {
            title: 'Files',
            id: 'Files',
            element: (
              <DetailsPageContextConsumer>
                {({ context }) => {
                  return <DatasetDetailsFilesTable rowData={context.rowData} />
                }}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
      />
    </DetailsPage>
  )
}

export default DatasetDetailsPage
