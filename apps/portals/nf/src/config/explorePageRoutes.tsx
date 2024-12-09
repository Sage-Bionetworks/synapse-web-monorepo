import { ExplorePageRoute } from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapperProps'
import { QueryWrapperPlotNav } from 'synapse-react-client'
import {
  datasets,
  hackathons,
  initiatives,
  publications,
  studies,
  tools,
} from './synapseConfigs'
import { filesPlotNavProps } from './synapseConfigs/files'

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
