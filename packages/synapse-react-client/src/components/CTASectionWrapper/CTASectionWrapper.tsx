import React from 'react'
import { Box, Stack, SxProps, useTheme } from '@mui/material'
import Illustrations from '../../assets/illustrations'

export type CTASectionWrapperProps = {
  themeMode: 'dark' | 'light'
  showBlobs?: boolean
  content: React.ReactNode
  sx?: SxProps
}

const CTASectionWrapper = ({
  content,
  themeMode,
  showBlobs = true,
  sx,
}: CTASectionWrapperProps): React.ReactNode => {
  const theme = useTheme()
  const blobStyles = {
    position: 'absolute',
    height: '100%',
    overflow: 'hidden',
    display: { xs: 'none', md: 'block' },
  }
  return (
    <Stack
      sx={{
        padding: { xs: '40px', lg: '80px' },
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background:
          themeMode === 'light'
            ? `linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), ${theme.palette.primary.main}`
            : theme.palette.primary.main,
        position: 'relative',
        overflow: 'hidden',
        color: themeMode === 'dark' ? '#FFFF' : '',
        svg: {
          mixBlendMode: themeMode === 'light' ? 'soft-light' : '',
        },
        ...sx,
      }}
    >
      {showBlobs && (
        <>
          <Box
            sx={theme => ({
              ...blobStyles,
              left: 0,
              [theme.breakpoints.down('lg')]: {
                svg: {
                  width: '280px',
                  height: '100%',
                },
              },
            })}
          >
            {themeMode === 'light' ? (
              <Illustrations.LeftDotBlob />
            ) : (
              <Illustrations.LeftDotBlobDark />
            )}
          </Box>
          <Box
            sx={theme => ({
              ...blobStyles,
              right: 0,
              top: '30%',
              [theme.breakpoints.down('lg')]: {
                svg: {
                  width: '370px',
                  height: '100%',
                },
              },
            })}
          >
            {themeMode === 'light' ? (
              <Illustrations.RightDotBlob />
            ) : (
              <Illustrations.RightDotBlobDark />
            )}
          </Box>
        </>
      )}
      {content}
    </Stack>
  )
}

export default CTASectionWrapper
