import { Typography, TypographyProps } from '@mui/material'
import styles from './HighlightedTypography.module.scss'

// Maybe we need a new highlighted Typography component
// (that takes Typography properties, the raw text, as well as an array of search terms).
// Then split the text on each search term,
// and insert a styled <span> between each split piece (where the style, from a css module, highlights the text).
// Then you could use this for today's search result hit title,
// and we can enhance later if the backend tells us the actual match strings
// (and apply to other indexed data, and it's included).

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
