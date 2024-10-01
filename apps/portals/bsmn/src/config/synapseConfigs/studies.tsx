import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/MarkdownSynapseFromColumnData'
import { PortalSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import React from 'react'
import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { CardContainerLogic, SynapseConstants } from 'synapse-react-client'
import { publicationsSql, studiesSql } from '../resources'
import { publicationsCardConfiguration } from './publications'

const rgbIndex = 0

export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: 'studyName',
    subTitle: 'institutions',
    description: 'studyDescription',
    icon: 'studyStatus',
    secondaryLabels: [
      'diagnosis',
      'organs',
      'tissues',
      'tissueFraction',
      'dataTypes',
      'project',
      'ndaLink',
    ],
  },
  labelLinkConfig: [
    {
      matchColumnName: 'ndaLink',
      isMarkdown: true,
    },
    {
      isMarkdown: true,
      matchColumnName: 'project',
    },
  ],
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Data/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'id',
  },
}

export const studiesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  sql: studiesSql,
  hideDownload: true,
  name: 'Data',
  cardConfiguration: studyCardConfiguration,
  facetsToPlot: [
    'studyStatus',
    'diagnosis',
    'organs',
    'tissues',
    'dataTypes',
    'tissueFraction',
  ],
  searchConfiguration: {
    searchable: [
      'studyName',
      'institutions',
      'studyDescription',
      'diagnosis',
      'organs',
      'tissues',
      'tissueFraction',
      'dataTypes',
      'methods',
    ],
  },
}

export function StudiesDetailsPage() {
  return (
    <PortalSearchParams keyFilter={['id']}>
      {searchParams => (
        <>
          <CardContainerLogic
            isHeader
            {...studyCardConfiguration}
            titleLinkConfig={undefined}
            sql={studiesSql}
            isAlignToLeftNav
            secondaryLabelLimit={Infinity}
            searchParams={searchParams}
          />
          <DetailsPage sql={studiesSql}>
            <DetailsPageContent
              content={[
                {
                  title: 'Study Description',
                  id: 'Study Description',
                  element: <MarkdownSynapseFromColumnData columnName={'id'} />,
                },
                {
                  title: 'Access Requirements',
                  id: 'Access Requirements',
                  element: (
                    <MarkdownSynapseFromColumnData
                      columnName={'accessRequirements'}
                    />
                  ),
                },
                {
                  title: 'Publications',
                  id: 'Publications',
                  element: (
                    <PortalSearchParams keyFilter={['id']}>
                      {searchParams => (
                        <CardContainerLogic
                          sql={publicationsSql}
                          {...publicationsCardConfiguration}
                          searchParams={{ study: searchParams['id'] }}
                        />
                      )}
                    </PortalSearchParams>
                  ),
                },
              ]}
            />
          </DetailsPage>
        </>
      )}
    </PortalSearchParams>
  )
}
