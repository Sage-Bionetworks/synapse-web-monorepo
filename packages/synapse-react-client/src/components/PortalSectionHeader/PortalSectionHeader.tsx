import { Stack, Typography, Button, SxProps, Theme, Box } from '@mui/material'
import { Link } from 'react-router'
import { spreadSx } from '../../theme/spreadSx'

export type PortalSectionHeaderProps = {
  title: string
  buttonText?: string
  summaryText?: React.ReactNode
  link?: string
  sx?: SxProps<Theme>
  centered?: boolean
  reverseButtonAndText?: boolean
}

const PortalSectionHeader = ({
  title,
  buttonText,
  summaryText,
  link,
  sx,
  centered = false,
  reverseButtonAndText = false,
}: PortalSectionHeaderProps) => {
  return (
    <Box
      sx={spreadSx(sx, {
        ...(centered && {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }),
      })}
    >
      <Stack
        sx={{
          gap: '16px',
          borderTop: '4px solid',
          borderColor: 'grey.400',
          alignItems: centered ? 'center' : 'flex-start',
        }}
      >
        <Typography
          variant="headline2"
          paddingTop="30px"
          color="grey.1000"
          fontSize={{ xs: '24px', md: '32px' }}
        >
          {title}
        </Typography>
        {(buttonText || summaryText) && (
          <Stack
            sx={{
              gap: '16px',
              width: '100%',
              ...(centered && {
                alignItems: 'center',
                width: '100%',
              }),
              ...(reverseButtonAndText && {
                flexDirection: 'column-reverse',
              }),
            }}
          >
            {buttonText && (
              <Button
                variant="contained"
                component={Link}
                to={link || ''}
                sx={theme => ({
                  [theme.breakpoints.down('sm')]: {
                    width: '100%',
                  },
                  maxWidth: '100%',
                  width: 'fit-content',
                  whiteSpace: 'nowrap',
                  padding: { xs: '6px', sm: '6px 24px' },
                  fontWeight: '600',
                  fontSize: { xs: '16px', sm: '18px' },
                  lineHeight: '144%',
                })}
              >
                {buttonText}
              </Button>
            )}
            {summaryText && (
              <Typography
                variant="body1"
                sx={{
                  fontStyle: 'italic',
                  color: 'grey.800',
                  fontSize: '18px',
                  lineHeight: '27px',
                }}
              >
                {summaryText}
              </Typography>
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  )
}

export default PortalSectionHeader
