import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { datasetsSql } from 'src/config/resources'
import { datasetCardConfiguration } from 'src/config/synapseConfigs/datasets'
import { CardContainerLogic } from 'synapse-react-client'

export default function StudyDatasetsTab() {
  const { value: studyId } = useDetailsPageContext('studyId')
  if (studyId == null) {
    return null
  }
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Study Datasets',
          title: 'Study Datasets',
          element: (
            <CardContainerLogic
              {...datasetCardConfiguration}
              sql={datasetsSql}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              searchParams={{ studyId }}
            />
          ),
        },
      ]}
    ></DetailsPageContent>
  )
}
