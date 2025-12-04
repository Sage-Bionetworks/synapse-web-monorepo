import React from 'react'
import { Box, Stack, Typography, Link, Card } from '@mui/material'
import { Link as RouterLink } from 'react-router'

type CardGridWithLinksConfig = {
  title: string
  description: string
  link: string
}

export type CardGridWithLinksProps = {
  linkText: string
  cards: CardGridWithLinksConfig[]
}

const CardGridWithLinks = ({
  cards,
  linkText,
}: CardGridWithLinksProps): React.ReactNode => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            sx={{
              padding: '24px',
              flex: '1',
            }}
          >
            <Stack sx={{ height: '100%', gap: 2 }}>
              <Typography variant={'headline3'} sx={{ lineHeight: '20px' }}>
                {card.title}
              </Typography>
              <Typography
                variant={'body1'}
                sx={{ fontSize: '14px', flex: '1', lineHeight: 'normal' }}
              >
                {card.description}
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  marginTop: 'auto',
                }}
              >
                <Link
                  component={RouterLink}
                  to={card.link}
                  sx={{ textDecoration: 'none' }}
                >
                  {linkText}
                </Link>
              </Typography>
            </Stack>
          </Card>
        )
      })}
    </Box>
  )
}

export default CardGridWithLinks
