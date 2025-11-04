import Box from '@mui/material/Box'
import styles from './BasePortalCard.module.scss'
import { ReactNode } from 'react'
import { CardMedia, Stack, SxProps } from '@mui/material'

type BasePortalCardProps = {
  children?: ReactNode
  contentBelowCard?: ReactNode
  /** border radius in px */
  borderRadius?: number
  boxShadow?: string
  cardSize?: 'small' | 'medium' | 'large'
  backgroundImage?: string
  backgroundColor?: string
  className?: string
}

const BasePortalCard = ({
  borderRadius,
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
      className={`${className} ${styles.PortalCard} ${styles[cardSize]}`}
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        boxShadow: boxShadow,
      }}
    >
      {children}
    </CardMedia>
    <Box className={styles.ChallengePortalCard__contentBelow}>
      {contentBelowCard}
    </Box>
  </Stack>
)

export default BasePortalCard
