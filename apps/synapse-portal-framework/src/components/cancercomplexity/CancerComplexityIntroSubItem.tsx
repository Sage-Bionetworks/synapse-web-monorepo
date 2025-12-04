import React from 'react'
import { Box, Typography } from '@mui/material'

type CancerComplexityIntroSubItemProps = {
  bulletColor: string
  mainText: string
  subText: string
}
const CancerComplexityIntroSubItem = (
  props: CancerComplexityIntroSubItemProps,
): React.ReactNode => {
  const { bulletColor, mainText, subText } = props
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          gap: '10px',
          alignItems: 'center',
          mt: '16px',
        }}
      >
        <Box
          sx={{
            width: '21px',
            height: '21px',
            borderRadius: '50px',
            border: `4px solid ${bulletColor}`,
            background: bulletColor,
          }}
        />

        <Typography
          variant="headline1"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            fontWeight: 'bold',
          }}
        >
          {mainText}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '14px', lineHeight: '144%' }}
        >
          {subText}
        </Typography>
      </Box>
    </>
  )
}

export default CancerComplexityIntroSubItem
