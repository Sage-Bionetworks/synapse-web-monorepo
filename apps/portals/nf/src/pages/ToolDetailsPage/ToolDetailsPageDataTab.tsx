import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { DetailsPageTabs } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { ColumnMultiValueFunction } from '@sage-bionetworks/synapse-types'
import { Outlet, RouteObject } from 'react-router'
import { filesSql, studiesSql } from 'src/config/resources'
import { columnAliases } from 'src/config/synapseConfigs/commonProps'
import { datasetsRgbIndex } from 'src/config/synapseConfigs/datasets'
import { QueryWrapperPlotNav } from 'synapse-react-client'

export function ToolDetailsPageDataTabLayout() {
  return (
    <>
      <DetailsPageTabs
        tabConfig={[
          {
            title: 'Files',
            path: 'Files',
          },
          {
            title: 'Studies',
            path: 'Studies',
          },
        ]}
      />
      <Outlet />
    </>
  )
}

export function ToolDetailsPageDataFilesTab() {
  const { value: resourceId } = useDetailsPageContext('resourceId')

  return (
    <DetailsPageContent
      hideMenu
      content={[
        {
          id: 'dataFiles',
          element: (
            <QueryWrapperPlotNav
              sqlOperator={ColumnMultiValueFunction.HAS}
              rgbIndex={datasetsRgbIndex}
              name="Files"
              sql={filesSql}
              visibleColumnCount={7}
              tableConfiguration={{
                showAccessColumn: true,
                showDownloadColumn: true,
              }}
              shouldDeepLink={false}
              columnAliases={columnAliases}
              searchParams={{ Resource_id: resourceId! }}
              lockedColumn={{ columnName: 'Resource_id', value: resourceId! }}
              hideQueryCount
            />
          ),
        },
      ]}
    />
  )
}

export function ToolDetailsPageDataStudiesTab() {
  const { value: resourceId } = useDetailsPageContext('resourceId')
  // TODO: this is broken! The studies table (nor tools table) seems to have a column that references the other.
  return (
    <DetailsPageContent
      hideMenu
      content={[
        {
          id: 'dataStudies',
          element: (
            <QueryWrapperPlotNav
              sqlOperator={ColumnMultiValueFunction.HAS}
              rgbIndex={datasetsRgbIndex}
              name="Studies"
              sql={studiesSql}
              visibleColumnCount={7}
              tableConfiguration={{
                showAccessColumn: true,
                showDownloadColumn: true,
              }}
              shouldDeepLink={false}
              columnAliases={columnAliases}
              searchParams={{ Resource_id: resourceId! }}
              lockedColumn={{ columnName: 'Resource_id', value: resourceId! }}
              hideQueryCount
            />
          ),
        },
      ]}
    />
  )
}

export const toolDetailsPageDataTabRouteConfig: RouteObject = {
  path: 'Data',
  element: <ToolDetailsPageDataTabLayout />,
  children: [
    {
      path: 'Files',
      element: <ToolDetailsPageDataFilesTab />,
    },
    {
      path: 'Studies',
      element: <ToolDetailsPageDataStudiesTab />,
    },
  ],
}
