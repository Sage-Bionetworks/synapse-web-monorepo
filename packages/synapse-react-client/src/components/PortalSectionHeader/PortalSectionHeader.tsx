import { Stack, Typography, Button, SxProps, Theme, Box } from '@mui/material'
import { Link } from 'react-router'
import { spreadSx } from '../../theme/spreadSx'

export type PortalSectionHeaderProps = {
  title: string
  buttonText?: string
  summaryText?: string
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
  centered,
  reverseButtonAndText,
}: PortalSectionHeaderProps) => {
  return (
    <Box
      sx={spreadSx(sx, {
        display: centered ? 'flex' : 'block',
        justifyContent: centered ? 'center' : 'flex-start',
      })}
    >
      <Stack
        sx={{
          gap: '16px',
          borderTop: '3px solid',
          borderColor: 'grey.400',
          alignItems: centered ? 'center' : 'flex-start',
        }}
      >
        <Typography
          variant="headline2"
          paddingTop="30px"
          paddingBottom="10px"
          color="grey.1000"
          fontSize={'32px'}
        >
          {title}
        </Typography>
        <Box
          sx={{
            ...(reverseButtonAndText && {
              display: 'flex',
              gap: '16px',
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
                [theme.breakpoints.up('sm')]: {
                  width: 'fit-content',
                },
                whiteSpace: 'nowrap',
                padding: '6px 24px',
                fontWeight: '600',
                fontSize: '16px',
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
        </Box>
      </Stack>
    </Box>
  )
}

export default PortalSectionHeader
