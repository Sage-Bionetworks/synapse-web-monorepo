import { Box } from '@mui/material'
import { ReactNode } from 'react'

export type TemplateDownloadBarProps = {
  /** The button that downloads the template file */
  button: ReactNode
  /** The instructions shown next to the button */
  children: ReactNode
}

/**
 * A tinted bar with the button that downloads a template file, and the instructions for the template next to it.
 */
export default function TemplateDownloadBar(props: TemplateDownloadBarProps) {
  const { button, children } = props
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 2,
        backgroundColor: 'tertiary.100',
        p: 2.5,
        my: 2,
        flexWrap: { xs: 'nowrap', md: 'wrap-reverse' },
      }}
    >
      {button}
      {children}
    </Box>
  )
}
