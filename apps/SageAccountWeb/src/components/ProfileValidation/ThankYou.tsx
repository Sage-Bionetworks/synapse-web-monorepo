import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import { PropsWithChildren } from 'react'

function ThankYou({ children }: PropsWithChildren) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: '500px',
        padding: theme.spacing(8),
        margin: '0 auto',
        backgroundColor: '#fff',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          width: '100px',
          display: 'flex',
          alignItems: 'center',
          marginBottom: theme.spacing(4),
          justifyContent: 'center',
          height: '100px',
          backgroundColor: theme.palette.primary.main,
          borderRadius: '50%',
        }}
      >
        <CalendarMonthOutlinedIcon sx={{ color: '#fff', fontSize: '64px' }} />
      </Box>
      <Typography
        variant="headline2"
        sx={{
          marginBottom: '16px',
        }}
      >
        We're verifying your account.
      </Typography>
      <Typography variant="headline3" sx={{ marginBottom: theme.spacing(2) }}>
        Here's what to expect next:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: '16px',
        }}
      >
        Our Access and Compliance Team (ACT) will review your application. This
        usually takes about two business days, but it can sometimes take longer.
        You’ll receive an email from us if we have any questions, and when we’ve
        made a decision.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: '16px',
        }}
      >
        You can access unrestricted areas of the website in the mean time.
      </Typography>
      {children}
    </Box>
  )
}

export default ThankYou
