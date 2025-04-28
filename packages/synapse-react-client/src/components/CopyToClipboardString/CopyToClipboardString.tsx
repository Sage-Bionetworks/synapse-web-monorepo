import { Stack, Tooltip, Typography, TypographyProps } from '@mui/material'
import { SyntheticEvent, useState } from 'react'
import IconSvg from '../IconSvg/IconSvg'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'

export type CopyToClipboardStringProps = {
  value: string
  typographyVariant?: TypographyProps['variant']
}

/**
 * Displays a string and a "Copy to Clipboard" icon, that, when clicked, will copy the contents of the string to the clipboard.
 */
export function CopyToClipboardString(props: CopyToClipboardStringProps) {
  const { value, typographyVariant = 'smallText1' } = props
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
      alignItems="center"
      spacing={0.5}
      sx={{ display: 'inline-flex' }}
    >
      <Typography component={'span'} variant={typographyVariant}>
        {value}
      </Typography>
      <Tooltip title={tooltipText} placement={'top'}>
        <span
          role="button"
          style={{ cursor: 'pointer' }}
          onClick={copyToClipboard}
        >
          <IconSvg icon="contentCopy" wrap={false} sx={{ width: '16px' }} />
        </span>
      </Tooltip>
    </Stack>
  )
}

export default CopyToClipboardString
