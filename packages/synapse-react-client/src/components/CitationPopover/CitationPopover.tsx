import { ReactComponent as DoubleQuotes } from '@/assets/icons/DoubleQuotes.svg'
import { Typography } from '@mui/material'
import { useState } from 'react'
import GenericCardActionButton from '../GenericCard/GenericCardActionButton'
import CitationPopoverContent from './CitationPopoverContent'
import { CitationProps } from './CitationTypes'

function CitationPopover(props: CitationProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'cite-as-popover' : undefined

  return (
    <div>
      {props.doi && (
        <GenericCardActionButton
          onClick={handleClick}
          variant="outlined"
          startIcon={<DoubleQuotes />}
          sx={props.buttonSx}
        >
          <Typography variant="label" sx={{ lineHeight: '20px' }}>
            Cite As
          </Typography>
        </GenericCardActionButton>
      )}
      <CitationPopoverContent
        {...props}
        anchorEl={anchorEl}
        open={open}
        id={id}
        onClose={handleClose}
      />
    </div>
  )
}

export default CitationPopover
