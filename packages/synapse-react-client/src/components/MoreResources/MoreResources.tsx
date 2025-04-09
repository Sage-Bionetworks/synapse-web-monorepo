import { Box, Stack, Typography, useTheme, Link } from '@mui/material'
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
  const theme = useTheme()
  return (
    <Box
      sx={{
        padding: { xs: '40px', lg: '60px 80px 80px 80px' },
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%), ${theme.palette.primary.main}`,
      }}
    >
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: 'normal',
          marginBottom: '40px',
          textAlign: 'center',
          color: 'grey.1000',
        }}
      >
        More Resources
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          width: '100%',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {resources.map((resource, index) => (
          <Stack
            key={index}
            sx={{
              gap: '16px',
              background: '#FFF',
              border: '1px solid',
              borderColor: 'grey.300',
              flex: '1 0 0',
              padding: '24px',
              boxShadow:
                '0px 1px 1px 0px rgba(0, 0, 0, 0.03), 0px 3px 3px 0px rgba(0, 0, 0, 0.03), 0px 9px 9px 0px rgba(0, 0, 0, 0.03)',
            }}
          >
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: 'normal',
                color: 'grey.900',
              }}
            >
              {resource.title}
            </Typography>
            <Typography sx={{ fontSize: '14px', lineHeight: 'normal' }}>
              {resource.description}
            </Typography>
            <Link
              component={RouterLink}
              to={encodeURI(`${resource.link}`)}
              sx={{ textDecoration: 'none', marginTop: 'auto' }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: '150%',
                  color: 'primary.main',
                }}
              >
                More Resources
              </Typography>
            </Link>
          </Stack>
        ))}
      </Box>
    </Box>
  )
}

export default MoreResources
