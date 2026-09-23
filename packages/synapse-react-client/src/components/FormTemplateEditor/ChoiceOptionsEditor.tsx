import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useState } from 'react'

type ChoiceOptionsEditorProps = {
  options: string[]
  onChange: (next: string[]) => void
}

export function ChoiceOptionsEditor({
  options,
  onChange,
}: ChoiceOptionsEditorProps) {
  // Parallel id array so a row's identity (and its TextField's caret/composition state) survives
  // a mid-list deletion, since the options themselves are plain strings with no natural id.
  // Mutated in lockstep with `options` by the handlers below -- never resynced from a prop effect.
  const [ids, setIds] = useState(() => options.map(() => crypto.randomUUID()))

  const update = (idx: number, next: string) => {
    onChange(options.map((o, i) => (i === idx ? next : o)))
  }
  const remove = (idx: number) => {
    onChange(options.filter((_, i) => i !== idx))
    setIds(prev => prev.filter((_, i) => i !== idx))
  }
  const add = () => {
    let n = options.length + 1
    while (options.includes(`Option ${n}`)) n++
    onChange([...options, `Option ${n}`])
    setIds(prev => [...prev, crypto.randomUUID()])
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
        {options.map((opt, idx) => (
          <Box
            key={ids[idx]}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <TextField
              value={opt}
              onChange={e => update(idx, e.target.value)}
              size="small"
              fullWidth
            />
            <IconButton
              size="small"
              aria-label="Delete choice"
              onClick={() => remove(idx)}
              disabled={options.length <= 1}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
        <Box>
          <Button size="small" startIcon={<AddIcon />} onClick={add}>
            Add choice
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}
