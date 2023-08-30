import { Box, Typography, useTheme } from '@mui/material'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import React from 'react'

const ThankYou: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
      <Typography variant="headline2" paragraph>
        We&apos;re verifying your account.
      </Typography>
      <Typography
        variant="headline3"
        paragraph
        sx={{ marginBottom: theme.spacing(2) }}
      >
        Here&apos;s what to expect next:
      </Typography>
      <Typography variant="body1" paragraph>
        Our Access and Compliance Team (ACT) will review your application. This
        usually takes about two business days, but it can sometimes take longer.
        You’ll receive an email from us if we have any questions, and when we’ve
        made a decision.
      </Typography>
      <Typography variant="body1" paragraph>
        You can access unrestricted areas of the website in the mean time.
      </Typography>
      {children}
    </Box>
  )
}

export default ThankYou
