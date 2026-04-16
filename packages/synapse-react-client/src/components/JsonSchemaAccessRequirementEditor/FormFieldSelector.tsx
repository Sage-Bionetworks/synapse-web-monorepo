import { FormField, FormStep } from '@/utils/types/AccessRequirementFormTypes'
import {
  Box,
  Checkbox,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useMemo, useState } from 'react'

type FormFieldSelectorProps = {
  availableFields: FormField[]
  selectedFieldIds: Set<string>
  formSteps: FormStep[]
  onToggleField: (fieldId: string) => void
}

export function FormFieldSelector({
  availableFields,
  selectedFieldIds,
  formSteps,
  onToggleField,
}: FormFieldSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const stepLookup = useMemo(() => {
    const map = new Map<string, FormStep>()
    for (const step of formSteps) {
      map.set(step.id, step)
    }
    return map
  }, [formSteps])

  const filteredFields = useMemo(() => {
    if (!searchQuery) return availableFields
    const query = searchQuery.toLowerCase()
    return availableFields.filter(
      f =>
        f.name.toLowerCase().includes(query) ||
        f.schemaDefinition.title?.toLowerCase().includes(query),
    )
  }, [availableFields, searchQuery])

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Available Fields
      </Typography>
      <TextField
        placeholder="Search fields..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        size="small"
        fullWidth
        sx={{ mb: 1 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
      />
      <List dense sx={{ maxHeight: 400, overflow: 'auto' }}>
        {filteredFields.map(field => {
          const step = field.stepId ? stepLookup.get(field.stepId) : null
          return (
            <ListItem key={field.id} disablePadding>
              <ListItemButton onClick={() => onToggleField(field.id)}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Checkbox
                    edge="start"
                    checked={selectedFieldIds.has(field.id)}
                    tabIndex={-1}
                    disableRipple
                    size="small"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    (field.schemaDefinition.title as string) ?? field.name
                  }
                  secondary={step ? `Step: ${step.title}` : 'General'}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
        {filteredFields.length === 0 && (
          <ListItem>
            <ListItemText
              primary="No fields found"
              sx={{ textAlign: 'center', color: 'text.secondary' }}
            />
          </ListItem>
        )}
      </List>
    </Box>
  )
}
