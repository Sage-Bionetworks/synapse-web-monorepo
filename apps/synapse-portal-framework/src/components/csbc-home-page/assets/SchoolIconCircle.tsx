import SchoolIcon from '@mui/icons-material/School'
import Box from '@mui/material/Box'

const SchoolIconCircle = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#5BB0B5',
        borderRadius: '50%',
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SchoolIcon sx={{ color: '#fff', width: 24, height: 24 }} />
    </Box>
  )
}

export default SchoolIconCircle
