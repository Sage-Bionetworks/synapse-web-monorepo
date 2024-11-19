import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import { toolsSql } from 'src/config/resources'
import { toolsSchema } from 'src/config/synapseConfigs/tools'
import {
  CardContainerLogic,
  ErrorPage,
  SharePageLinkButton,
  SynapseConstants,
  SynapseErrorType,
} from 'synapse-react-client'
import { toolDetailsPageDataTabRouteConfig } from './ToolDetailsPageDataTab'
import ToolDetailsPageDetailsTab from './ToolDetailsPageDetailsTab'
import ToolDetailsPageObservationsTab from './ToolDetailsPageObservationsTab'

export const toolDetailsPageTabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Details',
    path: 'Details',
  },
  {
    title: 'Observations',
    path: 'Observations',
  },
  {
    title: 'Data',
    path: 'Data',
  },
] satisfies DetailsPageTabConfig[]

export default function ToolDetailsPage() {
  const { resourceId } = useGetPortalComponentSearchParams()

  if (!resourceId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <>
      <SharePageLinkButton {...sharePageLinkButtonDetailPageProps} />
      <CardContainerLogic
        sql={toolsSql}
        type={SynapseConstants.GENERIC_CARD}
        genericCardSchema={toolsSchema}
        secondaryLabelLimit={6}
        isHeader={true}
        searchParams={{ resourceId }}
      />
      <DetailsPage
        sql={toolsSql}
        ContainerProps={{ maxWidth: 'xl' }}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      >
        <DetailsPageTabs tabConfig={toolDetailsPageTabConfig} />
        <Outlet />
      </DetailsPage>
    </>
  )
}

export const toolDetailsPageRoutesConfig: RouteObject = {
  path: 'Explore/Tools/DetailsPage',
  element: <ToolDetailsPage />,
  children: [
    {
      index: true,
      element: <RedirectWithQuery to={'Details'} />,
    },
    {
      path: 'Details',
      element: <ToolDetailsPageDetailsTab />,
    },
    {
      path: 'Observations',
      element: <ToolDetailsPageObservationsTab />,
    },
    toolDetailsPageDataTabRouteConfig,
  ],
}
