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
  darken,
  useTheme,
} from '@mui/material'
import CopyToClipboardIcon from '../CopyToClipboardIcon'
import CloseIcon from '@mui/icons-material/Close'
import { KeyboardArrowDown } from '@mui/icons-material'
import { useCitation } from './useCitation'

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
  const theme = useTheme()

  const selectSx = {
    width: '100%',
    backgroundColor: '#F1F3F5',
    '.MuiInputBase-root': {
      minHeight: '38px',
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

  const quotationSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        d="M1.2002 6.85162H3.497C3.497 7.82963 3.09981 8.71402 2.4614 9.35362C2.45901 9.356 2.45421 9.3608 2.45179 9.36322V10.3364C3.18859 10.2116 3.84859 9.85881 4.35379 9.35361C4.99457 8.71283 5.38939 7.82961 5.38939 6.85161L5.38943 2.66241H1.20022L1.2002 6.85162Z"
        fill="#395979"
      />
      <path
        d="M6.61035 2.66242V6.85162H8.90715C8.90715 7.82963 8.50996 8.71402 7.87155 9.35362C7.86917 9.356 7.86436 9.3608 7.86194 9.36322V10.3364C8.59874 10.2116 9.25874 9.85881 9.76394 9.35361C10.4048 8.714 10.7995 7.83081 10.7995 6.85161V2.66241L6.61035 2.66242Z"
        fill="#395979"
      />
    </svg>
  )

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
          sx={{
            display: 'flex',
            height: '20px',
            padding: '2px 8px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none !important',
            borderRadius: '3px',
            border: '1px solid',
            borderColor: 'grey.400',
          }}
        >
          <Box sx={{ display: 'flex' }}>{quotationSvg}</Box>
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
