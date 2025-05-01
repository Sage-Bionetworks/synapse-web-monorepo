import { programsSql, projectsSql, studiesSql } from '@/config/resources'
import programCardConfiguration, {
  PROGRAM_TABLE_COLUMN_NAMES,
} from '@/config/synapseConfigs/programs'
import {
  PROJECT_TABLE_COLUMN_NAMES,
  projectCardConfiguration,
} from '@/config/synapseConfigs/projects'
import {
  STUDY_TABLE_COLUMN_NAMES,
  studyCardConfiguration,
} from '@/config/synapseConfigs/studies'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic'

export default function ProgramDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()

  return (
    <>
      <CardContainerLogic
        sql={programsSql}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        cardConfiguration={{
          ...programCardConfiguration,
          genericCardSchema: {
            ...programCardConfiguration.genericCardSchema!,
            description: 'Long Description',
          },
          isHeader: true,
        }}
        searchParams={searchParams}
      />
      <DetailsPage sql={programsSql}>
        <DetailsPageContextConsumer
          columnName={PROGRAM_TABLE_COLUMN_NAMES.PROGRAM}
        >
          {({ value: program }) => (
            <DetailsPageContent
              content={[
                {
                  title: 'Projects',
                  id: 'Projects',
                  element: (
                    <CardContainerLogic
                      cardConfiguration={projectCardConfiguration}
                      sql={projectsSql}
                      searchParams={{
                        [PROJECT_TABLE_COLUMN_NAMES.PROGRAM]: program!,
                      }}
                    />
                  ),
                },
                {
                  title: 'Studies',
                  id: 'Studies',
                  element: (
                    <CardContainerLogic
                      cardConfiguration={studyCardConfiguration}
                      sql={studiesSql}
                      searchParams={{
                        [STUDY_TABLE_COLUMN_NAMES.PROGRAM]: program!,
                      }}
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
