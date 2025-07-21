import { Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import { ReactNode } from 'react'

export type EcosystemCardProps = {
  title: ReactNode
  titleUrl?: string
  description: ReactNode
  image: ReactNode
}

const IMAGE_SIZE = '72px'

/**
 * Card layout designed to be used in the EcosystemLayout component.
 */
function EcosystemCard(props: EcosystemCardProps) {
  const { title, titleUrl, description, image } = props

  const { breakpoints } = useTheme()
  const isMobile = useMediaQuery(breakpoints.down('sm'))

  return (
    <Box
      component={'section'}
      sx={theme => ({
        display: 'grid',
        alignItems: 'top',
        gap: 2,
        py: 2,
        [theme.breakpoints.down('sm')]: {
          gridTemplateColumns: '1fr',
          '.EcosystemCardImageContainer': {
            textAlign: 'center',
            img: { maxWidth: '100%', height: IMAGE_SIZE },
          },
        },
        [theme.breakpoints.up('sm')]: {
          gridTemplateColumns: `${IMAGE_SIZE} auto`,
          '.EcosystemCardImageContainer': {
            justifySelf: 'center',
            img: { width: IMAGE_SIZE, maxHeight: IMAGE_SIZE },
          },
        },
      })}
    >
      <div className={'EcosystemCardImageContainer'}>{image}</div>
      <div>
        <Typography
          component={'h3'}
          variant={isMobile ? 'headline3' : 'body1'}
          sx={{ mb: '5px' }}
        >
          <Link href={titleUrl} target="_blank" rel={'noopener noreferrer'}>
            {title}
          </Link>
        </Typography>
        <Typography
          component={'div'}
          variant={'body1'}
          sx={{ color: 'grey.700' }}
        >
          {description}
        </Typography>
      </div>
    </Box>
  )
}

export default EcosystemCard
