import { useState } from 'react'
import { Button, Popover, Typography, Box, Stack } from '@mui/material'
import CopyToClipboardIcon from '../CopyToClipboardIcon'

function CitationPopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'cite-as-popover' : undefined

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
        disableScrollLock
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Stack sx={{ gap: '20px', padding: '20px', maxWidth: '40vw' }}>
          <Typography
            sx={{ fontSize: '14px', fontWeight: 700, lineHeight: 'normal' }}
          >
            Cite as:
          </Typography>
          <Typography variant="smallText1" sx={{ lineHeight: 'normal' }}>
            Serra Kaya, Charles A Schurman, Neha S Dole, Daniel S Evans, Tamara
            Alliston, Prioritization of Genes Relevant to Bone Fragility Through
            the Unbiased Integration of Aging Mouse Bone Transcriptomics and
            Human GWAS Analyses, Journal of Bone and Mineral Research, Volume
            37, Issue 4, 1 April 2022, Pages 804–817,
            https://doi.org/10.1002/jbmr.4516
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <Button>Select format</Button>
            <Button
              sx={{
                backgroundColor: 'primary.main',
                color: '#FFF',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: '#FFF',
                },
              }}
            >
              Download Citation
            </Button>
            <Button
              sx={{
                border: '1px solid',
                borderColor: 'primary.main',
              }}
            >
              <CopyToClipboardIcon value={''} />
            </Button>
          </Box>
        </Stack>
      </Popover>
    </Box>
  )
}

export default CitationPopover
