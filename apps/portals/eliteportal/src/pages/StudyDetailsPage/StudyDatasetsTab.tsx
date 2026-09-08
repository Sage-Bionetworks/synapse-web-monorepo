import { datasetQueryWrapperPlotNavProps } from '@/config/synapseConfigs/datasets'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

function StudyDatasetsTab() {
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Study Datasets',
          title: 'Study Datasets',
          element: (
            <DetailsPageContextConsumer columnName={'studyKey'}>
              {({ value }) => (
                <QueryWrapperPlotNav
                  {...datasetQueryWrapperPlotNavProps}
                  sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                  shouldDeepLink={false}
                  lockedColumn={{
                    columnName: 'studyKey',
                    value: value!,
                  }}
                  searchParams={{ studyKey: value! }}
                />
              )}
            </DetailsPageContextConsumer>
          ),
        },
      ]}
    />
  )
}

export default StudyDatasetsTab
