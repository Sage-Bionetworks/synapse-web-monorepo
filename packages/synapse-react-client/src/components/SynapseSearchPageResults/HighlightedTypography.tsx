import { Typography, TypographyProps } from '@mui/material'
import styles from './HighlightedTypography.module.scss'

type HighlightedTypographyProps = {
  text: string
  searchTerms: string[]
} & TypographyProps

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function HighlightedTypography({
  text,
  searchTerms,
  ...typographyProps
}: HighlightedTypographyProps) {
  if (!searchTerms.length) {
    return <Typography {...typographyProps}>{text}</Typography>
  }
  const pattern = searchTerms.map(escapeRegex).join('|')
  const regex = new RegExp(`(${pattern})`, 'gi')
  const parts = text.split(regex)

  console.log('pattern', pattern, 'regex', regex, 'parts', parts)
  return (
    <Typography {...typographyProps}>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className={styles.highlight}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </Typography>
  )
}
