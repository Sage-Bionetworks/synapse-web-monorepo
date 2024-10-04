import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { DetailsPageTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import {
  CardContainerLogic,
  ErrorPage,
  NoContentPlaceholderType,
  SharePageLinkButton,
  SynapseErrorType,
} from 'synapse-react-client'
import {
  initiativesSql,
  publicationsSql,
  studiesSql,
  toolStudySql,
} from '../config/resources'
import { columnAliases } from '../config/synapseConfigs/commonProps'
import { initiativeCardConfiguration } from '../config/synapseConfigs/initiatives'
import { publicationsCardConfiguration } from '../config/synapseConfigs/publications'
import {
  studyCardConfiguration,
  studyHeaderIconOptions,
} from '../config/synapseConfigs/studies'
import { toolsCardConfiguration } from '../config/synapseConfigs/tools'

export const studyDetailsPageTabRoutes: DetailsPageTabConfig[] = [
  {
    title: 'Study Details',
    path: 'Details',
    iconName: 'study',
    tooltip: 'Description, methods, acknowledgements and related studies',
    element: (
      <DetailsPageContent
        content={[
          {
            id: 'Access Requirements',
            title: 'Access Requirements',
            element: (
              <MarkdownSynapseFromColumnData
                injectMarkdown
                columnName={'accessRequirements'}
              />
            ),
          },
          {
            id: 'Acknowledgement Statements',
            title: 'Acknowledgement Statements',
            element: (
              <MarkdownSynapseFromColumnData
                injectMarkdown
                columnName={'acknowledgementStatements'}
              />
            ),
          },
          {
            id: 'Tools Used',
            title: 'Tools Used',
            element: (
              <DetailsPageContextConsumer columnName={'studyId'}>
                {({ value: studyId }) => (
                  <CardContainerLogic
                    sql={toolStudySql}
                    initialLimit={3}
                    {...toolsCardConfiguration}
                    searchParams={{ studyId: studyId! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Publications',
            title: 'Publications',

            element: (
              <DetailsPageContextConsumer columnName={'studyId'}>
                {({ value: studyId }) => (
                  <CardContainerLogic
                    sql={publicationsSql}
                    {...publicationsCardConfiguration}
                    searchParams={{ studyId: studyId! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Related Studies',
            title: 'Related Studies',
            element: (
              <DetailsPageContextConsumer columnName={'relatedStudies'}>
                {({ value: studyId }) => (
                  <CardContainerLogic
                    sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                    sql={studiesSql}
                    columnAliases={columnAliases}
                    noContentPlaceholderType={NoContentPlaceholderType.HIDDEN}
                    {...studyCardConfiguration}
                    searchParams={{ studyId: studyId! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
      />
    ),
  },
]

export default function StudyDetailsPage() {
  const { studyId } = useGetPortalComponentSearchParams()

  if (!studyId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <>
      <SharePageLinkButton {...sharePageLinkButtonDetailPageProps} />
      <CardContainerLogic
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
        isHeader
        {...studyCardConfiguration}
        columnAliases={columnAliases}
        iconOptions={studyHeaderIconOptions}
        secondaryLabelLimit={Infinity}
        sql={studiesSql}
        searchParams={{ studyId }}
      />
      <DetailsPage
        sql={studiesSql}
        ContainerProps={{ maxWidth: 'xl' }}
        tabRoutes={studyDetailsPageTabRoutes}
      />
    </>
  )
}
