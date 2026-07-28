import {
  Link,
  Stack,
  Tooltip,
  Typography,
  TypographyProps,
  SxProps,
} from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import IconSvg from '../IconSvg/IconSvg'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'

export type CopyToClipboardStringProps = {
  value: string
  typographyVariant?: TypographyProps['variant']
  /**
   * When provided, the value is rendered as an external link to this URL in
   * addition to the copy icon. Defaults to rendering the value as plain text.
   */
  href?: string
  icon?: 'default' | 'rounded' | 'fileCopy'
  sx?: SxProps
}

const ICON_MAP = {
  default: 'contentCopy',
  rounded: 'contentCopyRounded',
  fileCopy: 'fileCopy',
} as const

/**
 * Displays a string or link and a "Copy to Clipboard" icon, that, when clicked, will copy the contents of the string to the clipboard.
 */
export function CopyToClipboardString(props: CopyToClipboardStringProps) {
  const {
    value,
    typographyVariant = 'smallText1',
    href,
    icon = 'default',
    sx,
  } = props
  const [tooltipText, setTooltipText] = useState('Copy to clipboard')

  const copyToClipboard = (event: SyntheticEvent) => {
    event.preventDefault()

    copyStringToClipboard(value).then(() => {
      setTooltipText('Copied to clipboard')
    })
  }

  const selectedIcon = ICON_MAP[icon] ?? ICON_MAP.default
  const iconSize = icon === 'fileCopy' ? '18px' : '16px'

  return (
    <Stack
      direction={'row'}
      spacing={0.5}
      sx={{
        alignItems: 'center',
        display: 'inline-flex',
        ...sx,
      }}
    >
      {href ? (
        <Link
          href={href}
          rel={'noopener noreferrer'}
          target={'_blank'}
          variant={typographyVariant}
        >
          {value}
        </Link>
      ) : (
        <Typography component={'span'} variant={typographyVariant}>
          {value}
        </Typography>
      )}
      <Tooltip title={tooltipText} placement={'top'}>
        <span
          role="button"
          style={{ cursor: 'pointer' }}
          onClick={copyToClipboard}
        >
          <IconSvg
            icon={selectedIcon}
            wrap={false}
            sx={{ width: iconSize, height: iconSize }}
          />
        </span>
      </Tooltip>
    </Stack>
  )
}

export default CopyToClipboardString
