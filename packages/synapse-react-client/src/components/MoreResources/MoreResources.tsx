import { Box, Link, Stack, Typography, useTheme } from '@mui/material'

const MoreResources = () => {
  const theme = useTheme()
  const resources = [
    {
      title: 'For Researchers',
      description:
        'Tutorials about using this portal, as well as links to external partner resources, and related ALS knowledge portals.',
      link: 'View resources',
    },
    {
      title: 'For Data Contributors',
      description:
        'Visit this page for instructions on how to contribute data to this portal.',
      link: 'View resources',
    },
    {
      title: 'For Persons with Lived Experience',
      description:
        'Visit this page for links to external resources with information about clinical trials, ongoing research, and community.',
      link: 'View resources',
    },
  ]
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
        }}
      >
        More Resources
      </Typography>
      <Box sx={{ display: 'flex', gap: '16px', width: '100%' }}>
        {resources.map(resource => (
          <Stack
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
              sx={{ fontSize: '18px', fontWeight: 700, lineHeight: 'normal' }}
            >
              {resource.title}
            </Typography>
            <Typography sx={{ fontSize: '14px', lineHeight: 'normal' }}>
              {resource.description}
            </Typography>
            <Link sx={{ textDecoration: 'none', marginTop: 'auto' }}>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: '150%',
                  color: 'primary.main',
                }}
              >
                {resource.link}
              </Typography>
            </Link>
          </Stack>
        ))}
      </Box>
    </Box>
  )
}

export default MoreResources
