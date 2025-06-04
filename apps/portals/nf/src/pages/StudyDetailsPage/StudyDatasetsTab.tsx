import { datasetsSql } from '@/config/resources'
import { datasetCardConfiguration } from '@/config/synapseConfigs/datasets'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client'

function StudyDatasetsTab() {
  const { value: studyId } = useDetailsPageContext('studyId')
  if (studyId == null) {
    return null
  }
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Study Datasets',
          title: 'Study Datasets',
          element: (
            <CardContainerLogic
              cardConfiguration={datasetCardConfiguration}
              sql={datasetsSql}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              searchParams={{ studyId }}
            />
          ),
        },
      ]}
    ></DetailsPageContent>
  )
}

export default StudyDatasetsTab
