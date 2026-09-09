import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'

type ChoiceOptionsEditorProps = {
  options: string[]
  onChange: (next: string[]) => void
}

export function ChoiceOptionsEditor({
  options,
  onChange,
}: ChoiceOptionsEditorProps) {
  const update = (idx: number, next: string) => {
    onChange(options.map((o, i) => (i === idx ? next : o)))
  }
  const remove = (idx: number) => {
    onChange(options.filter((_, i) => i !== idx))
  }
  const add = () => {
    onChange([...options, `Option ${options.length + 1}`])
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
          <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              value={opt}
              onChange={e => update(idx, e.target.value)}
              size="small"
              fullWidth
            />
            <IconButton
              size="small"
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
