import { Typography, TypographyProps } from '@mui/material'
import styles from './HighlightedTypography.module.scss'

type HighlightedTypographyProps = {
  text: string
  searchTerms: string[]
} & TypographyProps

function escapeRegex(s: string) {
  return s.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`)
}

export function HighlightedTypography({
  text,
  searchTerms,
  ...typographyProps
}: HighlightedTypographyProps) {
  const nonBlankTerms = searchTerms.filter(term => term.trim() !== '')
  if (nonBlankTerms.length === 0) {
    return <Typography {...typographyProps}>{text}</Typography>
  }
  const pattern = nonBlankTerms.map(escapeRegex).join('|')
  // With a capturing group, split places each match at an odd index
  const parts = text.split(new RegExp(`(${pattern})`, 'i'))

  return (
    <Typography {...typographyProps}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
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
