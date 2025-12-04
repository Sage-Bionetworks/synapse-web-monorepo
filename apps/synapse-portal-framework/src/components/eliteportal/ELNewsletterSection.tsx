import React from 'react'
import { AddAlertTwoTone } from '@mui/icons-material'
import { Button, Typography, Link } from '@mui/material'
import { CTASectionWrapper } from 'synapse-react-client'

const ElNewsletterSection = (): React.ReactNode => {
  const title = 'Subscribe to the ELITE Portal Newsletter'
  const subtitle =
    'Get the latest on data releases, events, community highlights, and more'
  const buttonText = 'Subscribe Now'
  const buttonLink = 'https://news.eliteportal.org/elite-portal-newsletter/'

  const content = (
    <>
      <Typography
        variant="headline2"
        sx={{
          fontSize: '24px',
          color: 'grey.900',
          lineHeight: 'normal',
          marginBottom: '16px',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'grey.900',
          fontStyle: 'italic',
          lineHeight: '22.4px',
          marginBottom: '26px',
        }}
      >
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        component={Link}
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: '#FFF',
          '&:hover': { color: '#FFF', textDecorationColor: '#FFF' },
          '&:focus': { color: '#FFF' },
          textDecorationColor: '#FFF',
          display: 'flex',
          padding: '6px 24px',
          gap: '10px',
        }}
      >
        <AddAlertTwoTone sx={{ width: '24px', height: '24px' }} />
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '144%',
          }}
        >
          {buttonText}
        </Typography>
      </Button>
    </>
  )

  return <CTASectionWrapper content={content} themeMode="light" />
}

export default ElNewsletterSection
