import { Box } from '@mui/material'
import App from '@sage-bionetworks/synapse-portal-framework/App'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'
import { RouteObject } from 'react-router'
import { QueryWrapperPlotNav } from 'synapse-react-client'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import HomePage from '../pages/HomePage'
import { dataQueryWrapperPlotNavProps } from './synapseConfigs/data'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App>{/* Add any global banners here if needed */}</App>,
    children: [
      ...sharedRoutes,
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'Explore',
        element: (
          <Box
            sx={{
              '.QueryWrapperPlotNav > *': {
                p: '0px 20px',
              },
              '.QueryWrapperPlotNav > .TopLevelControls': {
                mt: '0',
              },
            }}
          >
            <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />
          </Box>
        ),
      },
      {
        path: 'About',
        element: (
          <SectionLayout
            title={'About'}
            ContainerProps={{ className: 'AboutPage' }}
          >
            <MarkdownSynapse
              ownerId={'syn22130826'}
              loadingSkeletonRowCount={20}
            />
          </SectionLayout>
        ),
      },
    ],
  },
]

export default routes
