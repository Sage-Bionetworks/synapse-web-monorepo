import { Box, Link, Typography } from '@mui/material'

const MoreResources = () => {
  const resources = [
    { title: 'title 1', description: 'desc 1', link: 'link 1' },
    { title: 'title 2', description: 'desc 2', link: 'link 2' },
    { title: 'title 3', description: 'desc 3', link: 'link 3' },
  ]
  return (
    <Box sx={{ padding: { xs: '40px', lg: '80px' } }}>
      <Typography
        sx={{ fontSize: '24px', fontWeight: 600, lineHeight: 'normal' }}
      >
        More Resources
      </Typography>
      <Box sx={{ display: 'flex', gap: '16px', width: '100%' }}>
        {resources.map(resource => (
          <Box sx={{ background: 'grey', flex: '1 0 0', padding: '24px' }}>
            <Typography>{resource.title}</Typography>
            <Typography>{resource.description}</Typography>
            <Link>{resource.link}</Link>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default MoreResources
