import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnMultiValueFunction } from '@sage-bionetworks/synapse-types'
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

export default function ProjectDetailsPage() {
  const { shortName } = useGetPortalComponentSearchParams()

  return (
    <>
      <CardContainerLogic
        sql={projectsSql}
        isHeader
        {...projectCardConfiguration}
        titleLinkConfig={{
          isMarkdown: false,
          overrideLinkURLColumnName: 'externalWebsite',
          baseURL: 'Explore/Projects',
          URLColumnName: '',
          matchColumnName: '',
        }}
        searchParams={{ shortName }}
      />
      <DetailsPage sql={projectsSql}>
        <DetailsPageContent
          content={[
            {
              id: 'Studies',
              title: 'Studies',
              element: (
                <CardContainerLogic
                  {...studyCardConfiguration}
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
                      {...publicationCardProps}
                      sql={publicationsSql}
                      searchParams={{ grant: value! }}
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
                      type={SynapseConstants.MEDIUM_USER_CARD}
                      searchParams={{ grant: value! }}
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
                      {...computationalCardConfiguration}
                      sqlOperator={ColumnMultiValueFunction.HAS}
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
    </>
  )
}
