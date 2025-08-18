import { ReactComponent as PlanItemIcon } from '@/assets/homepage/plan-item.svg'
import { darkTextColor } from '@/components/SynapseHomepageV2/HomepageStyles'
import { Box, Typography } from '@mui/material'

export type SynapsePlanContentProps = {
  category: string
  items: string[]
  asteriskNote?: string
}
export function SynapsePlanContent({
  category,
  items,
  asteriskNote,
}: SynapsePlanContentProps) {
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '20px',
          mt: '30px',
          color: darkTextColor,
        }}
      >
        {category}
      </Typography>
      {items.map(item => (
        <Box
          key={item}
          sx={{
            display: 'grid',
            gridTemplateColumns: '30px auto',
            alignItems: 'center',
            mt: '10px',
          }}
        >
          <PlanItemIcon />
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '24px',
              color: darkTextColor,
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
      {asteriskNote && (
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '20px',
            mt: '20px',
          }}
        >
          {asteriskNote}
        </Typography>
      )}
    </>
  )
}
