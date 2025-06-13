import { IsExternalLink } from '@/utils/functions/IsExternalLink'
import { Box, SxProps, Typography } from '@mui/material'
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
  return (
    <Box
      component="a"
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '6px 16px',
        color: '#FFF !important',
        '&:hover': {
          textDecorationColor: '#FFF !important',
        },
        ...sx,
      }}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {icon && (
        <IconSvg
          icon={icon}
          sx={{ marginRight: '8px', width: '20px', height: '20px' }}
        />
      )}
      <Typography
        variant="buttonLink"
        sx={{
          fontWeight: 700,
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

export default LinkWithIcon
