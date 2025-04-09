import { Box, Stack, Typography, Link, Card } from '@mui/material'
import { Link as RouterLink } from 'react-router'

type ResourceConfig = {
  title: string
  description: string
  link: string
}

export type MoreResourcesProps = {
  resources: ResourceConfig[]
}

const MoreResources = ({ resources }: MoreResourcesProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {resources.map((resource, index) => {
        const encodedURI = encodeURI(resource.link)
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
                {resource.title}
              </Typography>
              <Typography
                variant={'body1'}
                sx={{ fontSize: '14px', flex: '1', lineHeight: 'normal' }}
              >
                {resource.description}
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  marginTop: 'auto',
                }}
              >
                <Link
                  component={RouterLink}
                  to={encodedURI}
                  sx={{ textDecoration: 'none' }}
                >
                  More Resources
                </Link>
              </Typography>
            </Stack>
          </Card>
        )
      })}
    </Box>
  )
}

export default MoreResources
