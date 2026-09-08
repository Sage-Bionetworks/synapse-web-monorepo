import { toolStudySql } from '@/config/resources'
import { toolStudyCardConfiguration } from '@/config/synapseConfigs/studies'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'

function ToolDetailsPageDataStudiesTab() {
  const { value: resourceId } = useDetailsPageContext('resourceId')
  if (resourceId == null) {
    return null
  }
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Tool Studies',
          title: 'Studies',
          element: (
            <CardContainerLogic
              cardConfiguration={toolStudyCardConfiguration}
              sql={toolStudySql}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              searchParams={{ resourceId }}
            />
          ),
        },
      ]}
    ></DetailsPageContent>
  )
}

export default ToolDetailsPageDataStudiesTab
