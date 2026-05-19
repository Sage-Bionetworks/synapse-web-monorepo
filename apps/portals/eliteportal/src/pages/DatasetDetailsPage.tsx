import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { datasetsSql } from '../config/resources'
import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '../config/synapseConfigs/datasets'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
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
      resourcePrimaryKey={['id']}
    >
      <DetailsPageContent
        content={[
          // TODO: Add People and Publications sections once join columns are available.
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
