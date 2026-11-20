import ChevronRight from '@mui/icons-material/ChevronRight'
import { Chip, Stack } from '@mui/material'
import { ChatAppearance } from '../../utils/types'
import styles from './SuggestedPrompts.module.scss'

export type SuggestedPromptsProps = {
  prompts: string[]
  /** Called with the prompt the user clicks */
  onSelect: (prompt: string) => void
  disabled?: boolean
  /** @default 'default' */
  appearance?: ChatAppearance
}

/**
 * Prompt suggestions the user can click to fill in the composer. They show as a row of outlined
 * chips, or with the `sidebar` appearance, as stacked pills whose text wraps.
 */
export function SuggestedPrompts({
  prompts,
  onSelect,
  disabled = false,
  appearance = 'default',
}: SuggestedPromptsProps) {
  if (appearance === 'sidebar') {
    return (
      <div className={styles.pills}>
        {prompts.map(prompt => (
          <Chip
            key={prompt}
            className={styles.pill}
            label={
              <span className={styles.pillLabel}>
                {prompt}
                <ChevronRight className={styles.pillChevron} />
              </span>
            }
            onClick={() => onSelect(prompt)}
            disabled={disabled}
          />
        ))}
      </div>
    )
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ pt: '8px', flexWrap: 'wrap', gap: 1 }}
    >
      {prompts.map(prompt => (
        <Chip
          key={prompt}
          label={prompt}
          variant="outlined"
          onClick={() => onSelect(prompt)}
          disabled={disabled}
          sx={{ cursor: 'pointer' }}
        />
      ))}
    </Stack>
  )
}

export default SuggestedPrompts
