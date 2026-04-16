import { FormField, FormStep } from '@/utils/types/AccessRequirementFormTypes'
import { FIELD_TYPE_LABELS } from '@/components/FormFieldEditor/formFieldEditorUtils'
import { jsonSchemaToFieldConfig } from '@/components/FormFieldEditor/formFieldEditorUtils'
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { Edit as EditIcon, Search as SearchIcon } from '@mui/icons-material'
import { useMemo, useState } from 'react'

export type FormFieldListProps = {
  fields: FormField[]
  formSteps: FormStep[]
  onEdit?: (field: FormField) => void
  onAddNew?: () => void
}

export function FormFieldList({
  fields,
  formSteps,
  onEdit,
  onAddNew,
}: FormFieldListProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const stepLookup = useMemo(() => {
    const map = new Map<string, FormStep>()
    for (const step of formSteps) {
      map.set(step.id, step)
    }
    return map
  }, [formSteps])

  const filteredFields = useMemo(() => {
    if (!searchQuery) return fields
    const query = searchQuery.toLowerCase()
    return fields.filter(
      f =>
        f.name.toLowerCase().includes(query) ||
        f.schemaDefinition.title?.toLowerCase().includes(query),
    )
  }, [fields, searchQuery])

  return (
    <Paper sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="h6">Form Fields</Typography>
        {onAddNew && (
          <Button variant="contained" size="small" onClick={onAddNew}>
            Add New Field
          </Button>
        )}
      </Box>

      <TextField
        placeholder="Search fields..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Step</TableCell>
              <TableCell align="right">Order</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredFields.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ py: 4 }}
                  >
                    {searchQuery
                      ? 'No fields match your search.'
                      : 'No form fields have been created yet.'}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredFields.map(field => {
                const visualConfig = jsonSchemaToFieldConfig(
                  field.schemaDefinition,
                  field.uiDefinition,
                )
                const step = field.stepId ? stepLookup.get(field.stepId) : null

                return (
                  <TableRow key={field.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight={500}>
                        {field.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {(field.schemaDefinition.title as string) ?? '—'}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={FIELD_TYPE_LABELS[visualConfig.fieldType]}
                        size="small"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>{step?.title ?? 'General'}</TableCell>
                    <TableCell align="right">{field.orderWeight}</TableCell>
                    <TableCell>
                      {field.deprecated ? (
                        <Chip label="Deprecated" size="small" color="warning" />
                      ) : (
                        <Chip label="Active" size="small" color="success" />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {onEdit && (
                        <IconButton size="small" onClick={() => onEdit(field)}>
                          <EditIcon fontSize="small" />
                        </IconButton>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
