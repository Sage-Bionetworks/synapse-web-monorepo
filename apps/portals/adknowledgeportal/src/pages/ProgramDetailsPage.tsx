import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { programsSql, projectsSql, studiesSql } from 'src/config/resources'
import programCardConfiguration, {
  PROGRAM_TABLE_COLUMN_NAMES,
} from 'src/config/synapseConfigs/programs'
import {
  PROJECT_TABLE_COLUMN_NAMES,
  projectCardConfiguration,
} from 'src/config/synapseConfigs/projects'
import {
  STUDY_TABLE_COLUMN_NAMES,
  studyCardConfiguration,
} from 'src/config/synapseConfigs/studies'
import { CardContainerLogic } from 'synapse-react-client'

export default function ProgramDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()

  return (
    <>
      <CardContainerLogic
        sql={programsSql}
        isHeader={true}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        {...programCardConfiguration}
        genericCardSchema={{
          ...programCardConfiguration.genericCardSchema!,
          description: 'Long Description',
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
                      {...projectCardConfiguration}
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
                      {...studyCardConfiguration}
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
