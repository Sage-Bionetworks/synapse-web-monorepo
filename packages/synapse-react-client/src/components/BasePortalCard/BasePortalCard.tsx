import Box from '@mui/material/Box'
import styles from './BasePortalCard.module.scss'
import { ReactNode } from 'react'
import { CardMedia, Stack } from '@mui/material'

type BasePortalCardProps = {
  children?: ReactNode
  contentBelowCard?: ReactNode
  borderRadiusPx?: number
  boxShadow?: string
  cardSize?: 'small' | 'medium' | 'large'
  backgroundImage?: string
  backgroundColor?: string
  className?: string
}

const BasePortalCard = ({
  borderRadiusPx,
  boxShadow,
  children,
  contentBelowCard,
  cardSize = 'medium',
  className,
  backgroundImage,
  backgroundColor,
}: BasePortalCardProps) => (
  <Stack>
    <CardMedia
      image={backgroundImage}
      className={`${className} ${styles.BasePortalCard__root} ${styles[cardSize]}`}
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadiusPx,
        boxShadow: boxShadow,
      }}
    >
      {children}
    </CardMedia>
    <Box className={styles.BasePortalCard__contentBelow}>
      {contentBelowCard}
    </Box>
  </Stack>
)

export default BasePortalCard
