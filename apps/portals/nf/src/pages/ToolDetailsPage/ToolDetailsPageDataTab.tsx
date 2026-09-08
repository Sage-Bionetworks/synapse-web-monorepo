import {
  TOOLS_DETAILS_PAGE_DATA_DATASETS_TAB_PATH,
  TOOLS_DETAILS_PAGE_DATA_STUDIES_TAB_PATH,
} from '@/config/routeConstants'
import { DetailsPageTabs } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { Outlet } from 'react-router'

function ToolDetailsPageDataTab() {
  return (
    <>
      <DetailsPageTabs
        tabConfig={[
          {
            title: 'Datasets',
            path: TOOLS_DETAILS_PAGE_DATA_DATASETS_TAB_PATH,
          },
          {
            title: 'Studies',
            path: TOOLS_DETAILS_PAGE_DATA_STUDIES_TAB_PATH,
          },
        ]}
      />
      <Outlet
        context={{
          defaultTabPath: TOOLS_DETAILS_PAGE_DATA_DATASETS_TAB_PATH,
        }}
      />
    </>
  )
}

export default ToolDetailsPageDataTab
