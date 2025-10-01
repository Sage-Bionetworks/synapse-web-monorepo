import headerbackgroundvideo from '@/assets/header-video.mp4'
import { Box, useTheme } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import { PortalHomePageHeader } from 'synapse-react-client'
import { HomePageThemeProvider } from '@/themes/HomePageThemeProvider'

function HomePageInternal() {
  const theme = useTheme()

  const title = (
    <Box sx={{ color: 'grey.100' }}>
      Discover and explore research and tools from&nbsp; <br />
      <Box
        component={'span'}
        sx={theme => ({
          display: 'block',
          minHeight: '110px',
          [theme.breakpoints.down('sm')]: {
            minHeight: '150px',
          },
        })}
      >
        <TypeAnimation
          sequence={[
            'richly phenotyped longitudinal behavioral focused studies',
            3000,
            'social science studies',
            3000,
            'small and mid sized studies',
            3000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          style={{
            fontWeight: 700,
            color: '#27FF81',
          }}
        />
      </Box>
    </Box>
  )
  const description = (
    <span style={{ color: theme.palette.grey[200] }}>
      The Consortium for Longitudinal behavioral and Social Science data
      Integration and Coordination (CLASSIC) (U24AG081810) is an NIH-funded
      initiative aimed at facilitating and stimulating collaboration among
      deeply phenotyped longitudinal studies of aging. While NIH has
      successfully built infrastructure for large, population-based studies
      (e.g., HRS, NHATS), many studies with rich measures of social and
      behavioral data—including intensive studies of cognitive function in daily
      life—have not been featured in existing catalogs. Our experience and
      interviews with study teams confirm that significant roadblocks make
      collaboration and data sharing burdensome and time-consuming.
    </span>
  )
  return (
    <>
      <PortalHomePageHeader
        backgroundCss={`linear-gradient(93deg, #098169 44.61%, rgba(9, 129, 105, 0.70) 100%)`}
        title={title}
        subTitle={''}
        description={description}
        backgroundMp4={headerbackgroundvideo}
        backgroundMp4Css="#024472"
        textAreaWidth="850px"
      />
    </>
  )
}

function HomePage() {
  return (
    <HomePageThemeProvider>
      <HomePageInternal />
    </HomePageThemeProvider>
  )
}

export default HomePage
