import React from 'react'
import { Typography } from '@mui/material'
import { HelpPopover } from '../HelpPopover/HelpPopover'

export const UndefinedNodeLabel = (): React.ReactNode => {
  return (
    <>
      <Typography variant="smallText1" className="description">
        Undefined
      </Typography>

      <HelpPopover
        placement="top"
        markdownText="Provenance tracks the relationship 
          between data, code and analytical results."
        helpUrl="https://help.synapse.org/docs/Provenance.1972470373.html"
      />
    </>
  )
}
