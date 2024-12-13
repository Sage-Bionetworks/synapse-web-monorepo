import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
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

export function ProjectDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()
  return (
    <>
      <CardContainerLogic
        isHeader={true}
        isAlignToLeftNav={true}
        {...projectsCardConfiguration}
        rgbIndex={projectsRgbIndex}
        columnAliases={columnAliases}
        genericCardSchema={{
          ...projectSchema,
          link: '',
        }}
        sql={projectsSql}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        searchParams={searchParams}
      />
      <DetailsPage sql={projectsSql}>
        <DetailsPageContent
          content={[
            {
              title: 'Datasets',
              id: 'Datasets',
              element: (
                <DetailsPageContextConsumer columnName={'Project'}>
                  {({ value }) => (
                    <CardContainerLogic
                      {...datasetCardConfiguration}
                      sql={datasetsSql}
                      searchParams={{ project: value! }}
                      columnAliases={datasetColumnAliases}
                      secondaryLabelLimit={4}
                    />
                  )}
                </DetailsPageContextConsumer>
              ),
            },
          ]}
          hideMenu={true}
        />
      </DetailsPage>
    </>
  )
}
