import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { PortalSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import type {
  CardConfiguration,
  GenericCardSchema,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { CardContainerLogic, SynapseConstants } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { datasetsSql, projectsSql } from '../resources'
import { datasetCardConfiguration } from './datasets'

const rgbIndex = 9

export const projectSchema: GenericCardSchema = {
  type: SynapseConstants.PROJECT,
  title: 'Full Project Name',
  subTitle: 'Program',
  description: 'Description',
  secondaryLabels: ['Program'],
}

export const projectsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: projectSchema,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Projects/DetailsPage',
    URLColumnName: 'Project',
    matchColumnName: 'Project',
  },
  labelLinkConfig: [
    {
      matchColumnName: 'Description',
      isMarkdown: true,
    },
  ],
}

export const projectsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  cardConfiguration: projectsCardConfiguration,
  sql: projectsSql,
  shouldDeepLink: true,
  hideDownload: true,
  name: 'Projects',
  columnAliases,
  facetsToPlot: [],
  defaultShowPlots: false,
}

export const detailsPageContent: DetailsPageContentType = [
  {
    title: 'Datasets',
    id: 'Datasets',
    element: (
      <PortalSearchParams keyFilter={['Project']}>
        {searchParams => (
          <CardContainerLogic
            {...datasetCardConfiguration}
            sql={datasetsSql}
            searchParams={{ project: searchParams['Project'] }}
          />
        )}
      </PortalSearchParams>
    ),
  },
]

export function ProjectsDetailPage() {
  return (
    <PortalSearchParams keyFilter={['Project']}>
      {searchParams => (
        <>
          <CardContainerLogic
            isHeader={true}
            isAlignToLeftNav={true}
            {...projectsCardConfiguration}
            rgbIndex={rgbIndex}
            columnAliases={columnAliases}
            genericCardSchema={{
              ...projectSchema,
              link: '',
            }}
            sql={projectsSql}
            sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
            searchParams={searchParams}
          />
          <DetailsPage sql={projectsSql}>
            <DetailsPageContent content={detailsPageContent} hideMenu={true} />
          </DetailsPage>
        </>
      )}
    </PortalSearchParams>
  )
}
