import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { datasetsSql } from '@/config/resources'
import { datasetCardConfiguration } from '@/config/synapseConfigs/datasets'

function DatasetDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()
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
          searchParams={{ id }}
        />
      }
      sql={datasetsSql}
      searchParams={{ id }}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['id']}
    >
      <DetailsPageContent
        content={[
          {
            title: 'Files',
            id: 'Files',
            element: id ? (
              <QueryWrapperPlotNav
                rgbIndex={5}
                sql={`SELECT * FROM syn${id}`}
                visibleColumnCount={7}
                tableConfiguration={{
                  showAccessColumn: true,
                  showDownloadColumn: true,
                }}
                shouldDeepLink={false}
                defaultShowPlots={false}
              />
            ) : null,
          },
        ]}
      />
    </DetailsPage>
  )
}

export default DatasetDetailsPage
