import {
  Alert,
  Box,
  Button,
  FormControl,
  MenuItem,
  Popover,
  Select,
  SelectChangeEvent,
  Stack,
  SxProps,
  Typography,
  PopoverProps,
} from '@mui/material'
import { useCitation } from './useCitation'
import { createLinkAndDownload } from './CitationPopoverUtils'
import { KeyboardArrowDown } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import CopyToClipboardIcon from '../CopyToClipboardIcon'
import { CitationProps, CitationFormat } from './CitationTypes'

const selectSx: SxProps = {
  width: '100%',
  '.MuiInputBase-root': {
    minHeight: '38px',
    borderRadius: 0,
    '&:before, &:after': {
      borderBottom: 'none !important',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 0,
  },
  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '.MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
  },
  '.MuiInputBase-input': {
    padding: '7px 10px',
  },
}

export type CitationPopoverProps = CitationProps &
  Pick<PopoverProps, 'anchorEl' | 'open' | 'id' | 'onClose'>

export const CitationPopoverContent = (props: CitationPopoverProps) => {
  const {
    doi,
    title,
    boilerplateText,
    defaultCitationFormat,
    onClose,
    anchorEl,
    open,
    id,
  } = props

  const [citationFormat, setCitationFormat] = useState<CitationFormat>(
    defaultCitationFormat || 'bibtex',
  )
  const {
    data: citation,
    isLoading,
    error,
  } = useCitation(doi || '', citationFormat, true)

  const handleDownload = (citation: string) => {
    if (!citation) {
      return
    }
    const extensionMap: Record<string, string> = {
      apa: 'ris',
      bibtex: 'bib',
      ieee: 'ris',
      nature: 'ris',
      science: 'ris',
    }
    const fileExtension = extensionMap[citationFormat] || 'txt'

    const blob = new Blob([citation], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)

    createLinkAndDownload(title || 'citation', fileExtension, url)
  }

  const handleChange = (event: SelectChangeEvent<CitationFormat>) => {
    setCitationFormat(event.target.value as CitationFormat)
  }

  return (
    <Popover
      aria-label="Citation options"
      role="dialog"
      id={id}
      elevation={9}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      slotProps={{
        paper: {
          square: true,
          sx: theme => ({
            width: '500px',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
              maxWidth: '100%',
              maxHeight: '100%',
              top: '0 !important',
              left: '0 !important',
              bottom: '0 !important',
            },
          }),
        },
      }}
    >
      <Stack
        sx={{
          gap: '20px',
          padding: '20px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{ fontSize: '20px', fontWeight: 700, lineHeight: 'normal' }}
          >
            Cite As:
          </Typography>
          <CloseIcon
            sx={{
              cursor: 'pointer',
              display: { xs: 'block', sm: 'none' },
              marginLeft: 'auto',
              color: '#878E95',
            }}
            onClick={() => {
              onClose?.({}, 'escapeKeyDown')
            }}
          />
        </Box>
        {error && (
          <Alert severity={'error'} sx={{ my: 2 }} icon={false}>
            {error.message}
          </Alert>
        )}
        <Typography
          variant="smallText1"
          sx={{
            lineHeight: 'normal',
            maxHeight: '300px',
            overflowY: 'scroll',
            wordWrap: 'break-word',
          }}
        >
          {boilerplateText && (
            <>
              {boilerplateText}
              <br />
            </>
          )}
          {isLoading ? (
            <Box sx={{ fontWeight: 700 }}>
              <br />
              Loading citation...
            </Box>
          ) : (
            citation
          )}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: '10px', sm: '8px' },
            width: '100%',
            maxHeight: '38px',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <FormControl sx={selectSx}>
              <Select
                variant="standard"
                sx={{
                  svg: {
                    color: '#878E95',
                    width: '24px',
                    height: '24px',
                    right: '10px',
                  },
                }}
                value={citationFormat}
                onChange={handleChange}
                IconComponent={KeyboardArrowDown}
              >
                <MenuItem value={'bibtex'}>bibtex</MenuItem>
                <MenuItem value={'apa'}>apa</MenuItem>
                <MenuItem value={'ieee'}>ieee</MenuItem>
                <MenuItem value={'nature'}>nature</MenuItem>
                <MenuItem value={'science'}>science</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            onClick={() => handleDownload(citation || '')}
            variant="contained"
            sx={{
              padding: '6px 16px',
              borderRadius: 0,
            }}
          >
            Download Citation
          </Button>
          <CopyToClipboardIcon
            value={citation || ''}
            sx={{
              borderRadius: 0,
              padding: '6px 16px',
              border: '1px solid',
              borderColor: 'primary.main',
            }}
          />
        </Box>
      </Stack>
    </Popover>
  )
}

export default CitationPopoverContent
