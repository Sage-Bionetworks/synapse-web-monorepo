import React from 'react'
import { spreadSx } from '@/theme/spreadSx'
import { isExternalLink } from '@/utils/functions/IsExternalLink'
import {
  Box,
  Button,
  Link as MuiLink,
  Stack,
  SxProps,
  Theme,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router'

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
}: PortalSectionHeaderProps): React.ReactNode => {
  const isExternal = isExternalLink(link ?? '')

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
          sx={theme => ({
            paddingTop: '30px',
            color: 'grey.1000',
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
                component={isExternal ? MuiLink : RouterLink}
                {...(isExternal
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
