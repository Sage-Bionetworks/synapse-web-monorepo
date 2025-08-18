import {
  computationalSql,
  experimentalModelsSql,
  peopleSql,
  projectsSql,
  publicationsSql,
  studiesSql,
  targetEnablingResourcesDetailsPageSql,
} from '@/config/resources'
import {
  COMPUTATIONAL_TOOLS_COLUMN_NAMES,
  computationalCardConfiguration,
} from '@/config/synapseConfigs/computational_tools'
import {
  EXPERIMENTAL_MODELS_COLUMN_NAMES,
  experimentalDetailsTableConfigurationColumnLinks,
  experimentalToolsCardConfiguration,
} from '@/config/synapseConfigs/experimental_tools'
import { PEOPLE_COLUMN_NAMES } from '@/config/synapseConfigs/people'
import {
  PROJECT_TABLE_COLUMN_NAMES,
  projectCardConfiguration,
} from '@/config/synapseConfigs/projects'
import {
  publicationCardProps,
  PUBLICATIONS_TABLE_COLUMN_NAMES,
} from '@/config/synapseConfigs/publications'
import {
  STUDY_TABLE_COLUMN_NAMES,
  studyCardConfiguration,
} from '@/config/synapseConfigs/studies'
import {
  TARGET_ENABLING_RESOURCES_COLUMN_NAMES,
  targetEnablingResourcesCardConfiguration,
} from '@/config/synapseConfigs/target_enabling_resources'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import ToggleSynapseObjects from '@sage-bionetworks/synapse-portal-framework/components/ToggleSynapseObjects'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic'
import StandaloneQueryWrapper from 'synapse-react-client/components/StandaloneQueryWrapper'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

function ProjectDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()

  return (
    <DetailsPage
      showMenu={true}
      sql={projectsSql}
      header={
        <CardContainerLogic
          sql={projectsSql}
          cardConfiguration={{ ...projectCardConfiguration, isHeader: true }}
          searchParams={searchParams}
        />
      }
    >
      <DetailsPageContextConsumer
        columnName={PROJECT_TABLE_COLUMN_NAMES.GRANT_NUMBER}
      >
        {({ value: grantNumber }) => (
          <DetailsPageContent
            content={[
              {
                title: 'Studies',
                id: 'Studies',
                element: (
                  <CardContainerLogic
                    cardConfiguration={studyCardConfiguration}
                    sql={studiesSql}
                    searchParams={{
                      [STUDY_TABLE_COLUMN_NAMES.GRANT_NUMBER]: grantNumber!,
                    }}
                  />
                ),
              },
              {
                title: 'Publications',
                id: 'Publications',
                element: (
                  <CardContainerLogic
                    sql={publicationsSql}
                    cardConfiguration={publicationCardProps}
                    searchParams={{
                      [PUBLICATIONS_TABLE_COLUMN_NAMES.GRANT]: grantNumber!,
                    }}
                  />
                ),
              },
              {
                title: 'Experimental Models',
                id: 'Experimental Models',
                element: (
                  <ToggleSynapseObjects
                    icon1={'table'}
                    synapseObject1={
                      <StandaloneQueryWrapper
                        sql={experimentalModelsSql}
                        rgbIndex={4}
                        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                        columnLinks={
                          experimentalDetailsTableConfigurationColumnLinks
                        }
                        searchParams={{
                          [EXPERIMENTAL_MODELS_COLUMN_NAMES.GRANT]:
                            grantNumber!,
                        }}
                        hideQueryCount
                      />
                    }
                    icon2={'cards'}
                    synapseObject2={
                      <CardContainerLogic
                        sql={experimentalModelsSql}
                        cardConfiguration={experimentalToolsCardConfiguration}
                        searchParams={{
                          [EXPERIMENTAL_MODELS_COLUMN_NAMES.GRANT]:
                            grantNumber!,
                        }}
                      />
                    }
                  />
                ),
              },
              {
                title: 'Computational Tools',
                id: 'Computational Tools',
                element: (
                  <CardContainerLogic
                    sql={computationalSql}
                    cardConfiguration={computationalCardConfiguration}
                    searchParams={{
                      [COMPUTATIONAL_TOOLS_COLUMN_NAMES.GRANT]: grantNumber!,
                    }}
                  />
                ),
              },
              {
                title: 'Target Enabling Resources',
                id: 'Target Enabling Resources',
                element: (
                  <CardContainerLogic
                    sql={targetEnablingResourcesDetailsPageSql}
                    cardConfiguration={targetEnablingResourcesCardConfiguration}
                    searchParams={{
                      [TARGET_ENABLING_RESOURCES_COLUMN_NAMES.GRANT]:
                        grantNumber!,
                    }}
                  />
                ),
              },
              {
                title: 'People',
                id: 'People',
                element: (
                  <CardContainerLogic
                    sql={peopleSql}
                    limit={6}
                    cardConfiguration={{
                      type: SynapseConstants.MEDIUM_USER_CARD,
                    }}
                    searchParams={{
                      [PEOPLE_COLUMN_NAMES.GRANT_NUMBER]: grantNumber!,
                    }}
                  />
                ),
              },
            ]}
          />
        )}
      </DetailsPageContextConsumer>
    </DetailsPage>
  )
}

export default ProjectDetailsPage
