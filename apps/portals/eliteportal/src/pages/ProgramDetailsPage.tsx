import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { CardContainerLogic } from 'synapse-react-client'
import { programsSql, projectsSql, studiesSql } from '../config/resources'
import { programCardConfiguration } from '../config/synapseConfigs/programs'
import { projectCardConfiguration } from '../config/synapseConfigs/projects'
import { studyCardConfiguration } from '../config/synapseConfigs/studies'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types/src'

function ProgramDetailsPage() {
  const { program } = useGetPortalComponentSearchParams()

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sql={programsSql}
          cardConfiguration={{
            ...programCardConfiguration,
            titleLinkConfig: {
              isMarkdown: false,
              overrideLinkURLColumnName: 'moreInformationURL',
              baseURL: 'Explore/Programs',
              URLColumnName: '',
              matchColumnName: '',
            },
            isHeader: true,
          }}
          searchParams={{ program }}
          sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        />
      }
      sql={programsSql}
      resourcePrimaryKey={['program']}
    >
      <DetailsPageContent
        content={[
          {
            id: 'Projects',
            title: 'Projects',
            element: (
              <DetailsPageContextConsumer columnName={'program'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={projectCardConfiguration}
                    sql={projectsSql}
                    searchParams={{ program: value! }}
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Studies',
            title: 'Studies',
            element: (
              <DetailsPageContextConsumer columnName={'program'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={studyCardConfiguration}
                    sql={studiesSql}
                    searchParams={{ program: value! }}
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
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

export default ProgramDetailsPage
