import { useState } from 'react'
import {
  Button,
  Popover,
  Typography,
  Box,
  Stack,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import CopyToClipboardIcon from '../CopyToClipboardIcon'
import CloseIcon from '@mui/icons-material/Close'
import { KeyboardArrowDown } from '@mui/icons-material'
import { useCitation } from './useCitation'
import DoubleQuotes from '../../assets/icons/DoubleQuotes'

type CitationPopoverProps = {
  doi: string | undefined
  title?: string
  boilerplateText?: string
}

function CitationPopover({
  doi,
  title,
  boilerplateText,
}: CitationPopoverProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [citationFormat, setCitationFormat] = useState('bibtex')

  const selectSx = {
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

  const handleChange = (event: SelectChangeEvent) => {
    setCitationFormat(event.target.value)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
    const citationTitle = title ? `${title.replace(/\s+/g, '_')}` : 'citation'
    const fileExtension = extensionMap[citationFormat] || 'txt'

    const blob = new Blob([citation], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${citationTitle}.${fileExtension}`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCopy = (citation: string) => {
    if (!citation) {
      return
    }
    navigator.clipboard.writeText(citation)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'cite-as-popover' : undefined

  const { data: citation, isLoading } = useCitation(
    doi || '',
    citationFormat,
    open,
  )

  return (
    <div>
      {doi && (
        <Button
          onClick={handleClick}
          variant="outlined"
          startIcon={DoubleQuotes}
          data-testid="CiteAsButton"
          sx={{
            display: 'flex',
            height: '20px',
            padding: '2px 8px',
            borderColor: 'grey.400',
            '& .MuiButton-startIcon': { marginRight: '4px', marginLeft: 0 },
          }}
        >
          <Typography variant="label" sx={{ lineHeight: '20px' }}>
            Cite As
          </Typography>
        </Button>
      )}
      <Popover
        data-testid="CiteAsPopover"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
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
            sx: theme => ({
              width: '500px',
              postion: 'relative',
              borderRadius: 0,
              boxShadow: '0px 8px 24px 0px rgba(53, 58, 63, 0.15)',
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
              onClick={handleClose}
              sx={{
                display: { xs: 'block', sm: 'none' },
                marginLeft: 'auto',
                color: '#878E95',
              }}
            />
          </Box>
          <Typography
            variant="smallText1"
            sx={{
              lineHeight: 'normal',
              maxHeight: '300px',
              overflowY: 'scroll',
              wordWrap: 'break-word',
            }}
          >
            {boilerplateText}
            <br />
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
              data-testid="CopyButton"
              value={citation || ''}
              onClick={() => handleCopy(citation || '')}
              sx={{
                '.MuiIconButton-root': {
                  width: '100%',
                  borderRadius: 0,
                  padding: '6px 16px',
                  border: '1px solid',
                  borderColor: 'primary.main',
                },
              }}
            />
          </Box>
        </Stack>
      </Popover>
    </div>
  )
}

export default CitationPopover
