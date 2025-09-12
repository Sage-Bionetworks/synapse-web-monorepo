import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnSingleValueFilterOperator,
  ColumnMultiValueFunction,
} from '@sage-bionetworks/synapse-types'
import { CardContainerLogic, SynapseConstants } from 'synapse-react-client'
import {
  computationalSql,
  peopleSql,
  projectsSql,
  publicationsSql,
  studiesSql,
} from '../config/resources'
import { computationalCardConfiguration } from '../config/synapseConfigs/computational_tools'
import { projectCardConfiguration } from '../config/synapseConfigs/projects'
import { publicationCardProps } from '../config/synapseConfigs/publications'
import { studyCardConfiguration } from '../config/synapseConfigs/studies'

function ProjectDetailsPage() {
  const { shortName } = useGetPortalComponentSearchParams()

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sql={projectsSql}
          cardConfiguration={{
            ...projectCardConfiguration,
            titleLinkConfig: {
              isMarkdown: false,
              overrideLinkURLColumnName: 'externalWebsite',
              baseURL: 'Explore/Projects',
              URLColumnName: '',
              matchColumnName: '',
            },
            isHeader: true,
          }}
          searchParams={{ shortName }}
        />
      }
      sql={projectsSql}
    >
      <DetailsPageContent
        content={[
          {
            id: 'Studies',
            title: 'Studies',
            element: (
              <CardContainerLogic
                cardConfiguration={studyCardConfiguration}
                sql={studiesSql}
                searchParams={{ project: shortName }}
              />
            ),
          },
          {
            id: 'Publications',
            title: 'Publications',
            element: (
              <DetailsPageContextConsumer columnName={'grant'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={publicationCardProps}
                    sql={publicationsSql}
                    searchParams={{ grant: value! }}
                    sqlOperator={ColumnMultiValueFunction.HAS}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'People',
            title: 'People',
            element: (
              <DetailsPageContextConsumer columnName={'grant'}>
                {({ value }) => (
                  <CardContainerLogic
                    sql={peopleSql}
                    limit={6}
                    cardConfiguration={{
                      type: SynapseConstants.MEDIUM_USER_CARD,
                    }}
                    searchParams={{ grant: value! }}
                    sqlOperator={ColumnMultiValueFunction.HAS}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Computational Tools',
            title: 'Computational Tools',
            element: (
              <DetailsPageContextConsumer columnName={'shortName'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={computationalCardConfiguration}
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    sql={computationalSql}
                    searchParams={{ project: value! }}
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

export default ProjectDetailsPage
