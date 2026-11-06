import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import { useRef } from 'react'
import { ChoiceOptionProblem, choiceOptionProblems } from './schemaFieldUtils'

const PROBLEM_TEXT: Record<ChoiceOptionProblem, string> = {
  empty: 'Required',
  duplicate: 'Already used by another choice',
}

type ChoiceOptionsEditorProps = {
  options: string[]
  onChange: (next: string[]) => void
}

/**
 * Edits a choice field's options. At least one option is always kept. An added option starts
 * empty and focused, so its `Option N` placeholder is never saved by accident; each empty or
 * duplicated option is flagged on its own input.
 */
export function ChoiceOptionsEditor({
  options,
  onChange,
}: ChoiceOptionsEditorProps) {
  // Index of a just-added option, focused once its input mounts.
  const pendingFocusIdx = useRef<number | null>(null)
  const problems = choiceOptionProblems(options)

  const update = (idx: number, next: string) => {
    onChange(options.map((o, i) => (i === idx ? next : o)))
  }
  const remove = (idx: number) => {
    onChange(options.filter((_, i) => i !== idx))
  }
  const add = () => {
    pendingFocusIdx.current = options.length
    onChange([...options, ''])
  }

  return (
    <Box sx={{ pl: 1, borderLeft: 2, borderColor: 'divider' }}>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', mb: 0.5 }}
      >
        Choices
      </Typography>
      <Stack spacing={1}>
        {/* Index keys are safe: rows are fully controlled and hold no local state. */}
        {options.map((opt, idx) => {
          const problem = problems[idx]
          return (
            <Box
              key={idx}
              sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}
            >
              <TextField
                value={opt}
                onChange={e => update(idx, e.target.value)}
                placeholder={`Option ${idx + 1}`}
                error={problem !== null}
                helperText={problem && PROBLEM_TEXT[problem]}
                inputRef={(el: HTMLInputElement | null) => {
                  if (el && pendingFocusIdx.current === idx) {
                    pendingFocusIdx.current = null
                    el.focus()
                  }
                }}
                slotProps={{ htmlInput: { 'aria-label': `Choice ${idx + 1}` } }}
                size="small"
                fullWidth
              />
              <IconButton
                size="small"
                aria-label="Delete choice"
                onClick={() => remove(idx)}
                disabled={options.length <= 1}
                sx={{ mt: 0.5 }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          )
        })}
        <Box>
          <Button size="small" startIcon={<AddIcon />} onClick={add}>
            Add choice
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}
