import { GoalsV3CardProps } from './GoalsV3'
import QueryCount from '../QueryCount/QueryCount'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { Card, CardActionArea } from '@mui/material'

export default function GoalsV3Desktop({
  link,
  countSql,
  title,
  svgIconComponent,
}: GoalsV3CardProps) {
  const theme = useTheme()
  const SvgIconComponent = svgIconComponent
  return (
    <Card
      sx={{
        maxWidth: '470px',
        display: 'flex',
        flex: '1 0 0',
        borderRadius: '3px',
        '&:hover': {
          border: `1px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      <CardActionArea
        onClick={() => window.open(link, '_self')}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px',
          gap: '12px',
        }}
      >
        {SvgIconComponent && (
          <Box
            sx={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '.MuiCardActionArea-root:hover &': {
                background: theme.palette.primary.main,
                fill: '#FFF',
              },
            }}
          >
            <Box
              component="span"
              sx={{
                width: 24,
                height: 24,
                svg: {
                  color: 'grey.700',
                  '.MuiCardActionArea-root:hover &': {
                    color: '#FFF !important',
                  },
                },
              }}
            >
              <SvgIconComponent width={24} height={24} />
            </Box>
          </Box>
        )}
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
