import { Box } from '@mui/material'
import React from 'react'
import { HelpPopover } from 'synapse-react-client'

type SectionTitleProps = {
  title: string
  centerTitle?: boolean
  helpText?: string
}
export default function SectionTitle(props: SectionTitleProps) {
  const { title, centerTitle, helpText } = props
  return (
    <h2 className={`title ${centerTitle ? 'center-title' : ''}`}>
      {title}
      {helpText && (
        <Box sx={{ fontSize: '14px', display: 'inline-block', ml: '5px' }}>
          <HelpPopover markdownText={helpText} />
        </Box>
      )}
    </h2>
  )
}
