import { Box, Typography } from '@mui/material'

type CancerComplexityIntroSubItemProps = {
  bulletColor: string
  mainText: string
  subText: string
}
const CancerComplexityIntroSubItem = (
  props: CancerComplexityIntroSubItemProps,
) => {
  const { bulletColor, mainText, subText } = props
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
        }}
      >
        <Box
          sx={{
            w: '21px',
            h: '21px',
            borderRadius: '50px',
            border: `4px solid ${bulletColor}`,
            background: bulletColor,
          }}
        />

        <Typography
          variant="headline1"
          sx={{
            fontSize: { xs: '24px', md: '27px' },
            fontWeight: 'bold',
            marginBottom: '15px',
            textTransform: 'uppercase',
          }}
        >
          {mainText}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '16px', lineHeight: '144%' }}
        >
          {subText}
        </Typography>
      </Box>
    </>
  )
}

export default CancerComplexityIntroSubItem
