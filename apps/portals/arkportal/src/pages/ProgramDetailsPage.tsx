import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '@/config/synapseConfigs/datasets'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic'
import columnAliases from '../config/columnAliases'
import { datasetsSql, programSql, projectsSql } from '../config/resources'
import {
  programsCardConfiguration,
  programSchema,
  programsRgbIndex,
} from '../config/synapseConfigs/programs'
import { projectsCardConfiguration } from '../config/synapseConfigs/projects'

function ProgramsDetailPage() {
  const searchParams = useGetPortalComponentSearchParams()
  return (
    <DetailsPage
      header={
        <CardContainerLogic
          isAlignToLeftNav={true}
          cardConfiguration={{
            ...programsCardConfiguration,
            genericCardSchema: {
              ...programSchema,
              title: 'Program',
              link: 'Program',
            },
            isHeader: true,
          }}
          rgbIndex={programsRgbIndex}
          columnAliases={columnAliases}
          sql={programSql}
          searchParams={searchParams}
        />
      }
      sql={programSql}
    >
      <DetailsPageContent
        content={[
          {
            title: 'Projects',
            id: 'Projects',
            element: (
              <DetailsPageContextConsumer columnName={'Program'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={projectsCardConfiguration}
                    sql={projectsSql}
                    searchParams={{ Program: value! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            title: 'Datasets',
            id: 'Datasets',
            element: (
              <DetailsPageContextConsumer columnName={'Program'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={{
                      ...datasetCardConfiguration,
                      secondaryLabelLimit: 4,
                    }}
                    sql={datasetsSql}
                    searchParams={{ program: value! }}
                    columnAliases={datasetColumnAliases}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
      />
    </DetailsPage>
  )
}

export default ProgramsDetailPage
