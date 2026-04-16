import { FormField } from '@/utils/types/AccessRequirementFormTypes'
import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { Close as RemoveIcon } from '@mui/icons-material'
import { useMemo } from 'react'

type SelectedFieldsListProps = {
  selectedFields: FormField[]
  requiredFieldIds: Set<string>
  onRemove: (fieldId: string) => void
  onToggleRequired: (fieldId: string) => void
}

export function SelectedFieldsList({
  selectedFields,
  requiredFieldIds,
  onRemove,
  onToggleRequired,
}: SelectedFieldsListProps) {
  // Sort by orderWeight so the displayed order matches the form order
  const sortedFields = useMemo(
    () =>
      [...selectedFields].sort((a, b) => {
        if (a.orderWeight !== b.orderWeight)
          return a.orderWeight - b.orderWeight
        return a.id.localeCompare(b.id)
      }),
    [selectedFields],
  )

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Selected Fields ({selectedFields.length})
      </Typography>
      {sortedFields.length === 0 ? (
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Select fields from the left panel to include in this Access
            Requirement.
          </Typography>
        </Box>
      ) : (
        <List dense sx={{ maxHeight: 400, overflow: 'auto' }}>
          {sortedFields.map(field => (
            <ListItem
              key={field.id}
              sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                mb: 0.5,
              }}
              secondaryAction={
                <IconButton size="small" onClick={() => onRemove(field.id)}>
                  <RemoveIcon fontSize="small" />
                </IconButton>
              }
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {(field.schemaDefinition.title as string) ?? field.name}
                    <Chip
                      label={`Weight: ${field.orderWeight}`}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.7rem' }}
                    />
                  </Box>
                }
                secondary={
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={requiredFieldIds.has(field.id)}
                        onChange={() => onToggleRequired(field.id)}
                        size="small"
                      />
                    }
                    label="Required"
                    slotProps={{
                      typography: { variant: 'caption' },
                    }}
                  />
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  )
}
