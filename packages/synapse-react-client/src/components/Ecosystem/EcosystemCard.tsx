import { Box, Link, Typography } from '@mui/material'
import { ReactNode } from 'react'

export type EcosystemCardProps = {
  title: ReactNode
  titleUrl?: string
  description: ReactNode
  image: ReactNode
}

const IMAGE_SIZE = '72px'

function EcosystemCard(props: EcosystemCardProps) {
  const { title, titleUrl, description, image } = props
  return (
    <Box
      component={'section'}
      sx={{
        display: 'grid',
        gridTemplateColumns: `${IMAGE_SIZE} auto`,
        alignItems: 'top',
        py: 2,
        gap: 2,
        img: { width: IMAGE_SIZE, maxHeight: IMAGE_SIZE },
      }}
    >
      <div style={{ justifySelf: 'center' }}>{image}</div>
      <div>
        <Typography component={'h3'} variant={'body1'} sx={{ mb: '5px' }}>
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
