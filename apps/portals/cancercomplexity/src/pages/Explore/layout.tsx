import { Box } from '@mui/material'
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import ShareThisPage from 'synapse-react-client/components/ShareThisPage/ShareThisPage'

function ExploreLayout() {
  return (
    <>
      <Box sx={{ position: 'absolute', right: '20px', mt: '10px' }}>
        <ShareThisPage {...sharePageLinkButtonDetailPageProps} />
      </Box>
      <ExploreWrapper
        explorePaths={[
          { path: 'Grants' },
          { path: 'People' },
          { path: 'Publications' },
          { path: 'Datasets' },
          { path: 'Tools' },
          { path: 'Educational Resources' },
        ]}
      />
    </>
  )
}

export default ExploreLayout
