import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
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
        {...projectCardConfiguration}
        isHeader
        sql={projectsSql}
        isAlignToLeftNav
        secondaryLabelLimit={Infinity}
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
                      {...studyCardConfiguration}
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
                      type={SynapseConstants.MEDIUM_USER_CARD}
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
                      {...toolCardConfiguration}
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
                      {...publicationsCardConfiguration}
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
