import { HomePageHeaderConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { ReactComponent as SageLogo } from './style/SageLogo.svg'
import { ReactComponent as DreamLogo } from './style/DreamLogo.svg'
import Box from '@mui/material/Box'

const homePageHeader: HomePageHeaderConfig = {
  title: 'Welcome to the Sage Challenge Portal!',
  summary: (
    <>
      {import.meta.env.VITE_PORTAL_DESCRIPTION}
      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        <DreamLogo /> <SageLogo />
      </Box>
    </>
  ),
  showBlur: true,
}

export default homePageHeader
