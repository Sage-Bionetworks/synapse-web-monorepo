import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

export type PortalHomePageHeaderProps = {
  backgroundCss: string // background of entire header
  buttonLink?: string
  title: React.ReactNode
  subTitle: React.ReactNode
  description: React.ReactNode
  backgroundMp4?: string
  backgroundMp4Css?: string // while video is loading, what should the background color be?
  textAreaWidth?: string // default is 746px.  used for md and up screen sizes
}

const PortalHomePageHeader = ({
  backgroundCss,
  buttonLink,
  title,
  subTitle,
  description,
  backgroundMp4,
  backgroundMp4Css,
  textAreaWidth = '746px',
}: PortalHomePageHeaderProps): React.ReactNode => {
  return (
    <Box
      data-testid="HeaderContainer"
      sx={{
        background: backgroundCss,
        padding: { xs: 0, md: '50px 80px' },
        position: 'relative',
      }}
    >
      {backgroundMp4 && (
        <Box
          component="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            zIndex: -1,
            background: backgroundMp4Css,
          }}
        >
          <source src={backgroundMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      )}
      <Stack
        sx={{
          alignItems: 'flex-start',
          padding: { xs: '40px', md: '40px 0' },
          gap: '24px',
          width: { sm: '100%', md: textAreaWidth },
        }}
      >
        <Typography
          variant="headline2"
          sx={{
            fontWeight: 300,
            lineHeight: '130%',
            fontSize: { xs: '36px', md: '42px' },
            color: 'grey.1000',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="headline3"
          sx={{
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '160%',
            color: 'grey.1000',
          }}
        >
          {subTitle}
        </Typography>
        <Typography
          sx={{ fontSize: '18px', lineHeight: '140%', color: 'grey.900' }}
        >
          {description}
        </Typography>
        {buttonLink && (
          <Button
            href={buttonLink}
            target="_blank"
            variant="contained"
            role="button"
            sx={theme => ({
              whiteSpace: 'nowrap',
              alignSelf: 'flex-start',
              padding: '6px 24px',
              fontWeight: 600,
              boxShadow:
                '0px 16px 16px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.10)',
              '&:hover': {
                boxShadow:
                  '0px 16px 16px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.10)',
              },
              [theme.breakpoints.down('sm')]: {
                width: '100%',
              },
            })}
          >
            Learn more
          </Button>
        )}
      </Stack>
    </Box>
  )
}

export default PortalHomePageHeader
