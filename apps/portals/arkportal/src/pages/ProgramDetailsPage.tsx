import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import React from 'react'
import { datasetCardConfiguration } from 'src/config/synapseConfigs/datasets'
import { CardContainerLogic } from 'synapse-react-client'
import columnAliases from '../config/columnAliases'
import { datasetsSql, programSql, projectsSql } from '../config/resources'
import {
  programsCardConfiguration,
  programSchema,
  programsRgbIndex,
} from '../config/synapseConfigs/programs'
import { projectsCardConfiguration } from '../config/synapseConfigs/projects'

export function ProgramsDetailPage() {
  const searchParams = useGetPortalComponentSearchParams()
  return (
    <>
      <CardContainerLogic
        isHeader={true}
        isAlignToLeftNav={true}
        {...programsCardConfiguration}
        rgbIndex={programsRgbIndex}
        columnAliases={columnAliases}
        genericCardSchema={{
          ...programSchema,
          title: 'Program',
          link: 'Program',
        }}
        sql={programSql}
        searchParams={searchParams}
      />
      <DetailsPage sql={programSql}>
        <DetailsPageContent
          content={[
            {
              title: 'Projects',
              id: 'Projects',
              element: (
                <DetailsPageContextConsumer columnName={'Program'}>
                  {({ value }) => (
                    <CardContainerLogic
                      {...projectsCardConfiguration}
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
                      {...datasetCardConfiguration}
                      sql={datasetsSql}
                      searchParams={{ program: value! }}
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
