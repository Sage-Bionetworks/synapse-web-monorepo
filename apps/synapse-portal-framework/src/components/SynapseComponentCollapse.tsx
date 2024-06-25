import { SynapseConfig } from '../types/portal-config'
import React, { useState } from 'react'
import { Box, Collapse, SxProps, Typography } from '@mui/material'
import {
  KeyboardArrowDownTwoTone,
  KeyboardArrowUpTwoTone,
} from '@mui/icons-material'
import { SynapseComponent } from '../components/SynapseComponent'

export type SynapseComponentCollapseProps = {
  text: string
  synapseConfig: SynapseConfig
  defaultVisible?: boolean // default to false (collapsed)
}

/**
 * Wrap any Synapse config object in a collapse
 * @param props
 * @returns
 */
export default function SynapseComponentCollapse({
  text,
  synapseConfig,
  defaultVisible,
}: SynapseComponentCollapseProps) {
  const [show, setShow] = useState(defaultVisible)
  const iconSx: SxProps = {
    color: 'grey.700',
    marginBottom: '-5px !important',
    height: '18px',
  }

  return (
    <div className="MarkdownCollapse">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'grey.200',
          padding: '15px',
        }}
      >
        <Typography
          variant="smallLink"
          onClick={() => setShow(!show)}
          aria-controls="collapse-text"
          aria-expanded={show}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          {text}{' '}
          {show ? (
            <KeyboardArrowUpTwoTone sx={iconSx} />
          ) : (
            <KeyboardArrowDownTwoTone sx={iconSx} />
          )}
        </Typography>
      </Box>

      <Collapse in={show}>
        <Box sx={{ backgroundColor: 'grey.100', padding: '25px' }}>
          <div id="collapse-text">
            <SynapseComponent synapseConfig={synapseConfig} />
          </div>
        </Box>
      </Collapse>
    </div>
  )
}
