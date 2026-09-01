import { toolDatasetSql } from '@/config/resources'
import { datasetCardConfiguration } from '@/config/synapseConfigs/datasets'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'

function ToolDetailsPageDataDatasetsTab() {
  const { value: resourceId } = useDetailsPageContext('resourceId')
  if (resourceId == null) {
    return null
  }
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Tool Datasets',
          title: 'Datasets',
          element: (
            <CardContainerLogic
              cardConfiguration={datasetCardConfiguration}
              sql={toolDatasetSql}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              searchParams={{ resourceId }}
            />
          ),
        },
      ]}
    ></DetailsPageContent>
  )
}

export default ToolDetailsPageDataDatasetsTab
