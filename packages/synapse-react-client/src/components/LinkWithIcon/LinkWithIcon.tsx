import { isExternalLink } from '@/utils/functions/IsExternalLink'
import { Button, SxProps, Typography } from '@mui/material'
import IconSvg, { IconName } from '../IconSvg'

export type LinkWithIconProps = {
  text: string
  icon?: IconName
  sx?: SxProps
  href: string
}

const LinkWithIcon = (props: LinkWithIconProps) => {
  const { text, icon, href, sx } = props
  const isExternal = isExternalLink(href)
  return (
    <Button
      role="link"
      variant="text"
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      endIcon={
        icon && (
          <IconSvg
            icon={icon}
            sx={{
              display: 'flex',
              marginRight: '8px',
              width: '20px',
              height: '20px',
              textAlign: 'center',
            }}
          />
        )
      }
      sx={{
        '&:hover': {
          background: 'none',
          textDecorationColor: 'inherit',
        },
        padding: '6px 16px',
        width: { xs: '100%', sm: 'initial' },
        justifyContent: { xs: 'center', sm: 'flex-start' },
        ...sx,
      }}
    >
      <Typography
        variant="buttonLink"
        sx={{
          fontWeight: 700,
        }}
      >
        {text}
      </Typography>
    </Button>
  )
}

export default LinkWithIcon
