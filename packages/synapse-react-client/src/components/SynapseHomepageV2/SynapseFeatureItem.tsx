import { useMediaQuery, useTheme } from '@mui/material'
import { Box, Button, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

export type SynapseFeatureItemProps = {
  title: string
  subtitle: string
  description: string
  featureName: string
  link: string
  icons?: ReactElement[]
  image: ReactElement
}

export const SynapseFeatureItem: React.FunctionComponent<
  SynapseFeatureItemProps
> = ({ title, subtitle, description, featureName, link, icons, image }) => {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.only('xs'))
  return isMobileView ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        padding: '50px 15px',
      }}
    >
      <Typography
        variant="headline3"
        sx={{
          color: '#D7DEE4',
          fontSize: '30px',
          lineHeight: '24px',
          fontWeight: 400,
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="headline3"
        sx={{
          color: '#D7DEE4',
          fontSize: '18px',
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        {subtitle}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: '20px',
        }}
      >
        {icons && icons.map((icon, index) => <Box key={index}>{icon}</Box>)}
      </Box>
      <Box sx={{ svg: { width: '100%', height: '220px' } }}>{image}</Box>
      <Typography
        variant="body1"
        sx={{
          color: '#D7DEE4',
          fontSize: '16px',
          marginBottom: '25px',
        }}
      >
        {description}
      </Typography>
      <Button
        variant="contained"
        color="light"
        href={link}
        target="_blank"
        fullWidth
      >
        About {featureName}
      </Button>
    </Box>
  ) : (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '40px',
        paddingBottom: '120px',
      }}
    >
      <Box sx={{ marginBottom: '50px', width: '437px' }}>
        <Typography
          variant="headline3"
          sx={{
            color: '#D7DEE4',
            fontSize: '36px',
            lineHeight: '24px',
            marginBottom: '30px',
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="headline3"
          sx={{
            color: '#D7DEE4',
            fontSize: '24px',
            lineHeight: '32px',
            marginBottom: '20px',
            fontWeight: 700,
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#D7DEE4',
            marginBottom: '30px',
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            marginBottom: '25px',
          }}
        >
          {icons && icons.map((icon, index) => <Box key={index}>{icon}</Box>)}
        </Box>
        <Button
          variant="contained"
          size="large"
          color="light"
          href={link}
          target="_blank"
        >
          About {featureName}
        </Button>
      </Box>
      <Box sx={{ marginRight: '25px', svg: { width: '100%' } }}>{image}</Box>
    </Box>
  )
}
