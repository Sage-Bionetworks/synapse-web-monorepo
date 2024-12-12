import {
  KeyboardArrowDownTwoTone,
  KeyboardArrowUpTwoTone,
} from '@mui/icons-material'
import { Box, Collapse, SxProps, Typography } from '@mui/material'
import { PropsWithChildren, useState } from 'react'

export type ComponentCollapseProps = PropsWithChildren<{
  text: string
  defaultVisible?: boolean // default to false (collapsed)
}>

/**
 * Wrap any Synapse config object in a collapse
 * @param props
 * @returns
 */
export default function ComponentCollapse({
  text,
  defaultVisible,
  children,
}: ComponentCollapseProps) {
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
          <div id="collapse-text">{children}</div>
        </Box>
      </Collapse>
    </div>
  )
}
