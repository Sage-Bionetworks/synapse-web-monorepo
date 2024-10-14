import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { PortalSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import React from 'react'
import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { CardContainerLogic, SynapseConstants } from 'synapse-react-client'
import {
  peopleSql,
  projectsSql,
  publicationsSql,
  studiesSql,
  toolsSql,
} from '../resources'
import { publicationsCardConfiguration } from './publications'
import { studyCardConfiguration } from './studies'
import { toolCardConfiguration } from './tools'

const rgbIndex = 7

export const projectCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Project',
    title: 'title',
    subTitle: 'primaryInvestigators',
    description: 'abstract',
    secondaryLabels: [
      'grantNumber',
      'institution',
      'contributors',
      'ndaCollection',
    ],
  },
  secondaryLabelLimit: 4,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'ndaCollection',
    },
  ],
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'id',
    matchColumnName: 'id',
    baseURL: 'Explore/Projects/DetailsPage',
  },
}

export const projectsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: projectsSql,
  name: 'Projects',
  cardConfiguration: projectCardConfiguration,
  shouldDeepLink: true,
  hideDownload: true,
  facetsToPlot: ['primaryInvestigators', 'grantNumber', 'institutions'],
  columnAliases: {
    ndaCollection: 'NDA Collection',
  },
  searchConfiguration: {
    searchable: [
      'title',
      'primaryInvestigators',
      'abstract',
      'grantNumber',
      'institution',
      'contributors',
      'ndaCollection',
    ],
  },
}

export function ProjectsDetailsPage() {
  return (
    <PortalSearchParams keyFilter={['id']}>
      {searchParams => (
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
            <DetailsPageContent
              content={[
                {
                  title: 'Data',
                  id: 'Data',
                  element: (
                    <PortalSearchParams keyFilter={['id']}>
                      {searchParams => (
                        <CardContainerLogic
                          sql={studiesSql}
                          {...studyCardConfiguration}
                          searchParams={{ project: searchParams['id'] }}
                        />
                      )}
                    </PortalSearchParams>
                  ),
                },
                {
                  title: 'People',
                  id: 'People',
                  element: (
                    <PortalSearchParams>
                      {searchParams => (
                        <CardContainerLogic
                          sql={peopleSql}
                          type={SynapseConstants.MEDIUM_USER_CARD}
                          searchParams={{ project: searchParams['id'] }}
                        />
                      )}
                    </PortalSearchParams>
                  ),
                },
                {
                  title: 'Tools',
                  id: 'Tools',
                  element: (
                    <PortalSearchParams>
                      {searchParams => (
                        <CardContainerLogic
                          sql={toolsSql}
                          {...toolCardConfiguration}
                          searchParams={{ project: searchParams['id'] }}
                        />
                      )}
                    </PortalSearchParams>
                  ),
                },
                {
                  title: 'Publications',
                  id: 'Publications',
                  element: (
                    <PortalSearchParams>
                      {searchParams => (
                        <CardContainerLogic
                          sql={publicationsSql}
                          {...publicationsCardConfiguration}
                          searchParams={{ project: searchParams['id'] }}
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
