import { Box, Stack, useTheme } from '@mui/material'
import Illustrations from '../../assets/illustrations'

export type CTASectionProps = {
  themeMode: 'dark' | 'light'
  content: React.ReactNode
}

const blobStyles = {
  position: 'absolute',
  height: '100%',
  overflow: 'hidden',
  display: { xs: 'none', md: 'block' },
}

const CTASection = ({ content, themeMode }: CTASectionProps) => {
  const theme = useTheme()
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
      }}
    >
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
      {content}
    </Stack>
  )
}

export default CTASection
