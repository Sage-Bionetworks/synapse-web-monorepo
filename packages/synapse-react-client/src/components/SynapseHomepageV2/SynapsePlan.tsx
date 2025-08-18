import {
  darkTextColor,
  homepageBodyText,
} from '@/components/SynapseHomepageV2/HomepageStyles'
import { PropsWithChildren } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/material'

export type SynapsePlanProps = {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundColor: string
}
export function SynapsePlan({
  title,
  description,
  ctaText,
  ctaLink,
  backgroundColor,
  children,
}: PropsWithChildren<SynapsePlanProps>) {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        p: '40px',
        maxWidth: {
          md: '373px',
        },
        width: {
          xs: '100%',
          md: 'auto',
        },
        backgroundColor,
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          minHeight: '590px',
        }}
      >
        <Box>
          <Typography
            variant="headline1"
            sx={{
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '40px',
              textAlign: 'center',
              color: darkTextColor,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              ...homepageBodyText,
              textAlign: 'center',
              fontSize: {
                xs: '16px',
                sm: '24px',
              },
            }}
          >
            {description}
          </Typography>
          {children}
        </Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: '100%', mt: '30px' }}
          href={ctaLink}
        >
          {ctaText}
        </Button>
      </Box>
    </Box>
  )
}
