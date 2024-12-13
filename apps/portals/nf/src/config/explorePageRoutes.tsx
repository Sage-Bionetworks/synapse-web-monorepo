import { ExplorePageRoute } from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapperProps'

import {
  datasets,
  hackathons,
  initiatives,
  publications,
  studies,
  tools,
} from './synapseConfigs'
import { filesPlotNavProps } from './synapseConfigs/files'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

const explorePageRoutes: ExplorePageRoute[] = [
  {
    path: 'Initiatives',
    element: (
      <div className={'InitiativeCardList'}>
        <QueryWrapperPlotNav {...initiatives} />
      </div>
    ),
  },
  { path: 'Studies', element: <QueryWrapperPlotNav {...studies} /> },
  { path: 'Datasets', element: <QueryWrapperPlotNav {...datasets} /> },
  { path: 'Files', element: <QueryWrapperPlotNav {...filesPlotNavProps} /> },
  { path: 'Publications', element: <QueryWrapperPlotNav {...publications} /> },
  { path: 'Tools', element: <QueryWrapperPlotNav {...tools} /> },
  {
    path: 'Hackathon',
    displayName: 'Hackathon Projects',
    element: <QueryWrapperPlotNav {...hackathons} />,
  },
]
export default explorePageRoutes
