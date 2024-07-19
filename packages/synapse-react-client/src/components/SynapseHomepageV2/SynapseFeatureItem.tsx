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
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))
  return isMobileView ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        p: '50px 15px',
      }}
    >
      <Typography
        variant="headline3"
        sx={{
          color: 'primary.100',
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
          color: 'primary.100',
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
      <Box sx={{ svg: { width: '100%' } }}>{image}</Box>
      <Typography
        variant="body1"
        sx={{
          color: 'primary.100',
          fontSize: '16px',
          mb: '25px',
        }}
      >
        {description}
      </Typography>
      <Button
        variant="contained"
        color="lightPrimary"
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
        display: 'grid',
        gridTemplateColumns: '450px auto',
        columnGap: {
          xs: '40px',
          lg: '120px',
        },
        pb: '120px',
      }}
    >
      <Box sx={{ mb: '50px', width: '437px' }}>
        <Typography
          variant="headline3"
          sx={{
            color: 'primary.100',
            fontSize: '36px',
            lineHeight: '24px',
            mb: '30px',
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="headline3"
          sx={{
            color: 'primary.100',
            fontSize: '24px',
            lineHeight: '32px',
            mb: '20px',
            fontWeight: 700,
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'primary.100',
            mb: '30px',
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            mb: '25px',
          }}
        >
          {icons && icons.map((icon, index) => <Box key={index}>{icon}</Box>)}
        </Box>
        <Button
          variant="contained"
          size="large"
          color="lightPrimary"
          href={link}
          target="_blank"
        >
          About {featureName}
        </Button>
      </Box>
      <Box sx={{ mr: '25px', svg: { width: '100%' } }}>{image}</Box>
    </Box>
  )
}
