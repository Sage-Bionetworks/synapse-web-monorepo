import { FormTemplate } from '@/utils/types/AccessRequirementFormTypes'
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

export type FormTemplateListProps = {
  templates: FormTemplate[]
  onEdit?: (template: FormTemplate) => void
  onAddNew?: () => void
}

export function FormTemplateList({
  templates,
  onEdit,
  onAddNew,
}: FormTemplateListProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTemplates = useMemo(() => {
    if (!searchQuery) return templates
    const query = searchQuery.toLowerCase()
    return templates.filter(
      t =>
        t.name.toLowerCase().includes(query) ||
        t.schemaRef.$id.toLowerCase().includes(query),
    )
  }, [templates, searchQuery])

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
        <Typography variant="h6">Form Templates</Typography>
        {onAddNew && (
          <Button variant="contained" size="small" onClick={onAddNew}>
            Add New Template
          </Button>
        )}
      </Box>

      <TextField
        placeholder="Search templates..."
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
              <TableCell>Schema</TableCell>
              <TableCell>Schema Version</TableCell>
              <TableCell align="right">Steps</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTemplates.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ py: 4 }}
                  >
                    {searchQuery
                      ? 'No templates match your search.'
                      : 'No form templates have been created yet.'}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredTemplates.map(template => (
                <TableRow key={template.id} hover>
                  <TableCell>
                    <Typography variant="body2" fontWeight={500}>
                      {template.name}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ fontFamily: 'monospace', fontSize: '0.8rem' }}
                  >
                    {template.schemaRef.$id}
                  </TableCell>
                  <TableCell>{template.schemaRef.semanticVersion}</TableCell>
                  <TableCell align="right">{template.steps.length}</TableCell>
                  <TableCell>
                    {template.deprecated ? (
                      <Chip label="Deprecated" size="small" color="warning" />
                    ) : (
                      <Chip label="Active" size="small" color="success" />
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {onEdit && (
                      <IconButton size="small" onClick={() => onEdit(template)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
