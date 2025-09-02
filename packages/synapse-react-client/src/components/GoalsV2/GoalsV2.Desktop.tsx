import { GoalsV2DataProps } from './GoalsV2'
import QueryCount from '../QueryCount/QueryCount'
import IconButton from '@mui/material/IconButton'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Typography } from '@mui/material'
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material'

export default function GoalsV2Desktop({
  asset,
  link,
  countSql,
  title,
}: GoalsV2DataProps) {
  return (
    <Card
      sx={{
        width: '200px',
        maxWidth: '200px',
        height: 'auto',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <CardActionArea onClick={() => window.open(link, '_self')}>
        <CardMedia
          component="img"
          sx={{ height: 150, width: '100%', paddingX: 2, overflow: 'visible' }}
          image={asset}
          alt={title}
        />
        <CardContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginRight: 1, fontSize: '16px', fontWeight: 900 }}
          >
            {countSql && (
              <QueryCount parens={false} query={{ sql: countSql }} />
            )}
          </Typography>
          <Typography variant="body1">{title}</Typography>
          <IconButton sx={{ color: 'primary.main' }}>
            <NavigateNextIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
