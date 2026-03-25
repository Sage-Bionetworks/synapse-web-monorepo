import { Card, CardContent, CardMedia, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import React, { ReactNode } from 'react'
import styles from './BasePortalCard.module.scss'

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
}: BasePortalCardProps): React.ReactNode => (
  <Stack>
    <Card
      className={`${className} ${styles.BasePortalCard__root} ${styles[cardSize]}`}
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadiusPx,
        boxShadow: boxShadow,
      }}
    >
      <Box className={styles.BasePortalCard__media}>
        {backgroundImage && (
          <CardMedia image={backgroundImage} component="img" />
        )}
      </Box>
      <CardContent className={styles.BasePortalCard__content}>
        {children}
      </CardContent>
    </Card>
    {contentBelowCard && (
      <Box className={styles.BasePortalCard__contentBelow}>
        {contentBelowCard}
      </Box>
    )}
  </Stack>
)

export default BasePortalCard
