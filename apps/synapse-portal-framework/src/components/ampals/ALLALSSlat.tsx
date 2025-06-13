import { Box, Button, Stack, Typography, Link } from '@mui/material'
import { ReactComponent as ALLALSLogo } from '../../../../portals/ampals/src/config/style/ALLALSLogo.svg'
import { IconSvg } from 'synapse-react-client'
import backgroundImage from '../../../../portals/ampals/src/config/style/ALLALSSlatBackground.png'

const AllALSSlat = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        padding: { xs: '40px', lg: '80px' },
        background: 'linear-gradient(0deg, #264077 0%, #264077 100%), #2360A6',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          flexDirection: { xs: 'column', lg: 'row' },
          textAlign: { xs: 'center', lg: 'left' },
          gap: { xs: '20px', md: '60px' },
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            svg: {
              width: '147px',
              height: '122px',
            },
          }}
        >
          <ALLALSLogo />
        </Box>
        <Stack sx={{ gap: '10px', color: '#FFF', display: 'flex', flex: 1 }}>
          <Typography variant="headline1" sx={{ lineHeight: '144%' }}>
            The ALL ALS Consortium
          </Typography>
          <Typography sx={{ fontSize: '18px', lineHeight: '144%' }}>
            ALL ALS provides access to a broad range of data from multiple ALS
            research initiatives, enabling deeper cross-study analysis and
            discovery. If you're exploring ALS-related data, you may find
            valuable complementary resources there. Click the button below to
            open it in a new tab.
          </Typography>
        </Stack>
        <Button
          variant="contained"
          component={Link}
          href="https://www.all-als.org/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            padding: '6px 24px',
            whiteSpace: 'nowrap',
            height: '38px',
            width: { xs: '100%', md: 'fit-content' },
            bordeRadius: '3px',
            border: '1px solid rgba(255, 255, 255, 0.50)',
            display: 'flex',
            gap: '10px',
          }}
        >
          <Typography
            sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '144%' }}
          >
            Open ALL ALS in a new tab
          </Typography>
          <IconSvg
            icon="openInNewWindow"
            sx={{
              path: {
                width: '18px',
                height: '18px',
              },
            }}
          />
        </Button>
      </Box>
    </Box>
  )
}

export default AllALSSlat
