import {
  Link,
  Stack,
  Tooltip,
  Typography,
  TypographyProps,
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
  useRoundedIcon?: boolean
}

/**
 * Displays a string or link and a "Copy to Clipboard" icon, that, when clicked, will copy the contents of the string to the clipboard.
 */
export function CopyToClipboardString(props: CopyToClipboardStringProps) {
  const {
    value,
    typographyVariant = 'smallText1',
    href,
    useRoundedIcon = false,
  } = props
  const [tooltipText, setTooltipText] = useState('Copy to clipboard')

  const copyToClipboard = (event: SyntheticEvent) => {
    event.preventDefault()

    copyStringToClipboard(value).then(() => {
      setTooltipText('Copied to clipboard')
    })
  }

  return (
    <Stack
      direction={'row'}
      spacing={0.5}
      sx={{
        alignItems: 'center',
        display: 'inline-flex',
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
            icon={useRoundedIcon ? 'contentCopyRounded' : 'contentCopy'}
            wrap={false}
            sx={{ width: '16px' }}
          />
        </span>
      </Tooltip>
    </Stack>
  )
}

export default CopyToClipboardString
