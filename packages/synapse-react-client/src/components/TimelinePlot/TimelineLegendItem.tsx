import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type TimelineLegendItemProps = {
  color: string
  phaseName: string | null
}
const TimelineLegendItem = ({ color, phaseName }: TimelineLegendItemProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
      <Box
        sx={{
          backgroundColor: color,
          width: '20px',
          height: '20px',
        }}
      />
      <Typography variant="body1">{phaseName?.toUpperCase()}</Typography>
    </Box>
  )
}

export default TimelineLegendItem
