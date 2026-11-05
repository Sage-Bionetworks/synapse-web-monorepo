import { Box, Paper, Typography } from '@mui/material'
import { ReactNode } from 'react'

export type ActionPanelProps = {
  title?: ReactNode
  description?: ReactNode
  /** Shown to the right of the title and description, e.g. a button. */
  action: ReactNode
}

/**
 * A grey panel with a title and description, and an action beside them.
 */
export function ActionPanel(props: ActionPanelProps) {
  const { title, description, action } = props
  return (
    <Paper
      sx={{
        backgroundColor: 'grey.100',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        borderRadius: 1,
      }}
      elevation={0}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 0.5 }}>
        {title && (
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, fontSize: '14px' }}
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>
      {action}
    </Paper>
  )
}
