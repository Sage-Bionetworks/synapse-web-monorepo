import { useEffect, useState } from 'react'
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
  const [citation, setCitation] = useState('')

  const selectSx = {
    width: '100%',
    boxShadow: 'none',
    backgroundColor: '#F1F3F5',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '.MuiInputBase-root': {
      display: 'flex',
      minHeight: '38px',
      alignItems: 'center',
      gap: '10px',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      '&:before, &:after': {
        borderBottom: 'none !important',
      },
    },
    '.MuiSelect-select': {
      display: 'flex',
      alignItems: 'center',
      color: '#353A3F',
      fontFamily: 'DM Sans',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '16px',
      gap: '10px',
    },
    '.MuiInputBase-input': {
      padding: '7px 10px',
      border: 'none',
      '&::placeholder': {
        color: '#353A3F',
        fontFamily: 'DM Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '16px',
      },
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

  const getCitation = async () => {
    const formattedDoi = doi ? doi.replace('https://doi.org/', '') : ''

    try {
      const response = await fetch(
        `https://citation.doi.org/format?doi=${formattedDoi}&style=${citationFormat}&lang=en-US`,
        {
          headers: {
            Accept: `text/x-${citationFormat}`,
          },
        },
      )
      if (!response.ok) {
        throw new Error('Failed to fetch citation.')
      }
      const citationText = await response.text()
      setCitation(citationText)
    } catch (err) {
      console.log(err)
      return
    }
  }

  const handleDownload = () => {
    if (!citation) {
      return
    }
    const extensionMap: Record<string, string> = {
      bibtex: 'bib',
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

  const handleCopy = () => {
    if (!citation) {
      return
    }
    navigator.clipboard.writeText(citation)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'cite-as-popover' : undefined

  useEffect(() => {
    if (open) {
      getCitation()
    }
  }, [open])

  return (
    <Box>
      <Button
        onClick={handleClick}
        sx={{
          display: 'flex',
          height: '20px',
          padding: '2px 8px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          textDecoration: 'none',
          borderRadius: '3px',
          border: '1px solid',
          borderColor: 'grey.400',
          '&:hover': {
            textDecoration: 'none',
          },
        }}
      >
        <Box sx={{ display: 'flex' }}>{quotationSvg}</Box>
        <Typography variant="label" sx={{ lineHeight: '20px' }}>
          Cite As
        </Typography>
      </Button>
      <Popover
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
        sx={{
          '.MuiPopover-paper': {
            borderRadius: 0,
            background: '#FFF',
            boxShadow: '0px 8px 24px 0px rgba(53, 58, 63, 0.15)',
          },
        }}
      >
        <Stack
          sx={{
            gap: '20px',
            padding: '20px',
            width: '500px',
          }}
        >
          <Typography
            sx={{ fontSize: '14px', fontWeight: 700, lineHeight: 'normal' }}
          >
            Cite as:
          </Typography>
          <Typography
            variant="smallText1"
            sx={{
              lineHeight: 'normal',
              maxHeight: '300px',
              width: '100%',
              overflowY: 'scroll',
              overflowX: 'hidden',
              wordWrap: 'break-word',
            }}
          >
            {boilerplateText}
            {citation ? citation : <span>Loading citation...</span>}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              gap: '8px',
              width: '100%',
              maxHeight: '38px',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <FormControl sx={selectSx}>
                <Select
                  variant="standard"
                  displayEmpty
                  value={citationFormat}
                  onChange={handleChange}
                  renderValue={selected => (
                    <Typography variant="smallText1" sx={{ color: 'grey.900' }}>
                      {selected?.length ? citationFormat : 'BibTeX'}
                    </Typography>
                  )}
                >
                  <MenuItem value={'bibtex'}>bibtex</MenuItem>
                  <MenuItem value={'other'}>other</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              onClick={() => {
                handleDownload()
              }}
              sx={{
                flex: 1,
                padding: '6px 16px',
                borderRadius: 'none',
                backgroundColor: 'primary.main',
                color: '#FFF',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#2d4673',
                  textDecoration: 'none',
                  color: '#FFF',
                },
              }}
            >
              Download Citation
            </Button>
            <CopyToClipboardIcon
              value={citation}
              onClick={() => {
                handleCopy()
              }}
              sx={{
                '.MuiIconButton-root': {
                  borderRadius: 0,
                  padding: '6px 16px',
                },
                border: '1px solid',
                borderColor: 'primary.main',
              }}
            />
          </Box>
        </Stack>
      </Popover>
    </Box>
  )
}

export default CitationPopover
