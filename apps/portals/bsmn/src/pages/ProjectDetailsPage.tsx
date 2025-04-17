import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { CardContainerLogic, SynapseConstants } from 'synapse-react-client'
import {
  peopleSql,
  projectsSql,
  publicationsSql,
  studiesSql,
  toolsSql,
} from '../config/resources'
import { projectCardConfiguration } from '../config/synapseConfigs/projects'
import { publicationsCardConfiguration } from '../config/synapseConfigs/publications'
import { studyCardConfiguration } from '../config/synapseConfigs/studies'
import { toolCardConfiguration } from '../config/synapseConfigs/tools'

export function ProjectDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()

  return (
    <>
      <CardContainerLogic
        cardConfiguration={{
          ...projectCardConfiguration,
          secondaryLabelLimit: Infinity,
          isHeader: true,
        }}
        sql={projectsSql}
        isAlignToLeftNav
        searchParams={searchParams}
      />
      <DetailsPage sql={projectsSql}>
        <DetailsPageContextConsumer columnName={'id'}>
          {({ value: id }) => (
            <DetailsPageContent
              content={[
                {
                  title: 'Data',
                  id: 'Data',
                  element: (
                    <CardContainerLogic
                      sql={studiesSql}
                      cardConfiguration={studyCardConfiguration}
                      searchParams={{ project: id! }}
                    />
                  ),
                },
                {
                  title: 'People',
                  id: 'People',
                  element: (
                    <CardContainerLogic
                      sql={peopleSql}
                      cardConfiguration={{
                        type: SynapseConstants.MEDIUM_USER_CARD,
                      }}
                      searchParams={{ project: id! }}
                    />
                  ),
                },
                {
                  title: 'Tools',
                  id: 'Tools',
                  element: (
                    <CardContainerLogic
                      sql={toolsSql}
                      cardConfiguration={toolCardConfiguration}
                      searchParams={{ project: id! }}
                    />
                  ),
                },
                {
                  title: 'Publications',
                  id: 'Publications',
                  element: (
                    <CardContainerLogic
                      sql={publicationsSql}
                      cardConfiguration={publicationsCardConfiguration}
                      searchParams={{ project: id! }}
                    />
                  ),
                },
              ]}
            />
          )}
        </DetailsPageContextConsumer>
      </DetailsPage>
    </>
  )
}
