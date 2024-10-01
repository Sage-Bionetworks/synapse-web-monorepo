import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { PortalSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import React from 'react'
import type {
  CardConfiguration,
  GenericCardSchema,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { CardContainerLogic, SynapseConstants } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { datasetsSql, programSql, projectsSql } from '../resources'
import tagCloudSvg from '../style/tagCloud.svg?url'
import { datasetCardConfiguration } from './datasets'
import { projectsCardConfiguration } from './projects'

const rgbIndex = 9

export const programSchema: GenericCardSchema = {
  type: 'program',
  title: 'Program',
  // subTitle: 'Short Description',
  description: 'Description',
  icon: 'Program',
}

export const programsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: programSchema,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Programs/DetailsPage',
    URLColumnName: 'Program',
    matchColumnName: 'Program',
  },
  labelLinkConfig: [
    {
      matchColumnName: 'Description',
      isMarkdown: true,
    },
  ],
  descriptionConfig: {
    showFullDescriptionByDefault: true,
  },
  iconOptions: {
    'AMP-RA/SLE': tagCloudSvg,
  },
}

export const programsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  cardConfiguration: programsCardConfiguration,
  sql: programSql,
  shouldDeepLink: true,
  hideDownload: true,
  name: 'Programs',
  columnAliases,
  facetsToPlot: [],
  defaultShowPlots: false,
}

export const detailsPageContent: DetailsPageContentType = [
  {
    title: 'Projects',
    id: 'Projects',
    element: (
      <PortalSearchParams keyFilter={['Program']}>
        {searchParams => (
          <CardContainerLogic
            {...projectsCardConfiguration}
            sql={projectsSql}
            searchParams={searchParams}
          />
        )}
      </PortalSearchParams>
    ),
  },
  {
    title: 'Datasets',
    id: 'Datasets',
    element: (
      <PortalSearchParams keyFilter={['Program']}>
        {searchParams => (
          <CardContainerLogic
            {...datasetCardConfiguration}
            sql={datasetsSql}
            searchParams={{ program: searchParams['Program'] }}
          />
        )}
      </PortalSearchParams>
    ),
  },
]

export function ProgramsDetailPage() {
  return (
    <PortalSearchParams keyFilter={['Program']}>
      {searchParams => (
        <>
          <CardContainerLogic
            isHeader={true}
            isAlignToLeftNav={true}
            {...programsCardConfiguration}
            rgbIndex={rgbIndex}
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
            <DetailsPageContent content={detailsPageContent} />
          </DetailsPage>
        </>
      )}
    </PortalSearchParams>
  )
}
