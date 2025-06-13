import { ReactComponent as DoubleQuotes } from '@/assets/icons/DoubleQuotes.svg'
import { SxProps, Typography } from '@mui/material'
import { useState } from 'react'
import GenericCardActionButton from '../GenericCard/GenericCardActionButton'
import CitationPopoverContent from './CitationPopoverContent'

export type CitationFormat = 'bibtex' | 'apa' | 'ieee' | 'nature' | 'science'

export type CitationProps = {
  doi: string | undefined
  title?: string
  boilerplateText?: string
  defaultCitationFormat?: CitationFormat
  selectSx?: SxProps
}

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
