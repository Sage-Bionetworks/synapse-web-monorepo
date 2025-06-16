import { IsExternalLink } from '@/utils/functions/IsExternalLink'
import { Box, SxProps, Typography, useTheme } from '@mui/material'
import IconSvg, { IconName } from '../IconSvg'

export type LinkWithIconProps = {
  text: string
  icon?: IconName
  sx?: SxProps
  href: string
}

const LinkWithIcon = (props: LinkWithIconProps) => {
  const { text, icon, href, sx } = props
  const isExternal = IsExternalLink(href)
  const theme = useTheme()
  return (
    <Box
      component="a"
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '6px 16px',
        width: { xs: '100%', sm: 'initial' },
        justifyContent: { xs: 'center', sm: 'flex-start' },
        '&:hover': {
          textDecorationColor: `${theme.palette.primary.contrastText} !important`,
        },
        ...sx,
      }}
    >
      {icon && (
        <IconSvg
          icon={icon}
          sx={{
            marginRight: '8px',
            width: '20px',
            height: '20px',
            color: theme.palette.primary.contrastText,
          }}
        />
      )}
      <Typography
        variant="buttonLink"
        sx={{
          fontWeight: 700,
          color: theme.palette.primary.contrastText,
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

export default LinkWithIcon
