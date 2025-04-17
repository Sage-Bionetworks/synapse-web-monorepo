import { GoalsV3CardProps } from './GoalsV3'
import QueryCount from '../QueryCount/QueryCount'
import { Stack, Typography } from '@mui/material'
import { Card, CardActionArea, CardMedia } from '@mui/material'

export default function GoalsV3Desktop({
  asset,
  link,
  countSql,
  title,
}: GoalsV3CardProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flex: '1 0 0',
      }}
    >
      <CardActionArea
        onClick={() => window.open(link)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px',
          gap: '12px',
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 24, height: 24 }}
          image={asset}
          alt={title}
        />
        <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Typography
            variant="headline3"
            sx={{
              fontSize: '21px',
              lineHeight: '21px',
              fontWeight: 700,
              letterSpacing: '0.2px',
            }}
          >
            {countSql && (
              <QueryCount parens={false} query={{ sql: countSql }} />
            )}
          </Typography>
          <Typography
            variant="headline3"
            sx={{ fontWeight: 400, lineHeight: '27px' }}
          >
            {title}
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  )
}
