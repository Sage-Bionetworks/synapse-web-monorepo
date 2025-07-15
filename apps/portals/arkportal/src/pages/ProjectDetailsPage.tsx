import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnSingleValueFilterOperator,
  ColumnMultiValueFunction,
} from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic'
import columnAliases from '../config/columnAliases'
import { datasetsSql, projectsSql } from '../config/resources'
import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '../config/synapseConfigs/datasets'
import {
  projectsCardConfiguration,
  projectSchema,
  projectsRgbIndex,
} from '../config/synapseConfigs/projects'

function ProjectDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()
  return (
    <DetailsPage
      header={
        <CardContainerLogic
          isAlignToLeftNav={true}
          cardConfiguration={{
            ...projectsCardConfiguration,
            genericCardSchema: {
              ...projectSchema,
              link: '',
            },
            isHeader: true,
          }}
          rgbIndex={projectsRgbIndex}
          columnAliases={columnAliases}
          sql={projectsSql}
          sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
          searchParams={searchParams}
        />
      }
      sql={projectsSql}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
    >
      <DetailsPageContent
        content={[
          {
            title: 'Datasets',
            id: 'Datasets',
            element: (
              <DetailsPageContextConsumer columnName={'Project'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={{
                      ...datasetCardConfiguration,
                      secondaryLabelLimit: 4,
                    }}
                    sqlOperator={ColumnMultiValueFunction.HAS}
                    sql={datasetsSql}
                    searchParams={{ project: value! }}
                    columnAliases={datasetColumnAliases}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
        hideMenu={true}
      />
    </DetailsPage>
  )
}

export default ProjectDetailsPage
