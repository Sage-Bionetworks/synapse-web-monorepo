import {
  Stack,
  Typography,
  Button,
  SxProps,
  Theme,
  Box,
  Link as MuiLink,
} from '@mui/material'
import { Link as RouterLink } from 'react-router'
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
  const iisExternalLink =
    link?.startsWith('http://') || link?.startsWith('https://')
  return (
    <Box
      sx={spreadSx(sx, {
        ...(centered && {
          width: '100%',
        }),
      })}
    >
      <Stack
        sx={{
          gap: '16px',
          ...(centered && {
            textAlign: 'center',
            alignItems: 'center',
          }),
        }}
      >
        <Typography
          variant="headline2"
          paddingTop="30px"
          color="grey.1000"
          sx={theme => ({
            fontSize: { xs: '24px', md: '32px' },
            borderTop: '4px solid',
            borderColor: 'grey.400',
            [theme.breakpoints.down('md')]: {
              width: '100%',
            },
          })}
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
                component={iisExternalLink ? MuiLink : RouterLink}
                {...(iisExternalLink
                  ? {
                      href: link,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : { to: link })}
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
