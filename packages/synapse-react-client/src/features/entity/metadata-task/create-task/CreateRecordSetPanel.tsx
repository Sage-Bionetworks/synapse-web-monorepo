import EntityIdTextField from '@/components/EntityFinder/EntityIdTextField'
import { FinderScope } from '@/components/EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '@/components/EntityFinder/VersionSelectionType'
import FieldDescription from '@/components/FieldDescription'
import { StyledFormControl } from '@/components/styled'
import {
  moveSelectedItemsDown,
  moveSelectedItemsUp,
} from '@/components/TableColumnSchemaEditor/TableColumnSchemaFormReducer'
import { TextField } from '@/components/TextField'
import { useGetSchema } from '@/synapse-queries/entity/useSchema'
import { North, South } from '@mui/icons-material'
import {
  Alert,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material'
import { EntityType, RecordSet } from '@sage-bionetworks/synapse-client'
import { useEffect, useState } from 'react'
import {
  CREATE_RECORD_SET_COLUMNS_AWAITING_UPSERT_KEY_MESSAGE,
  CREATE_RECORD_SET_COLUMNS_DESCRIPTION,
  CREATE_RECORD_SET_COLUMNS_EMPTY_MESSAGE,
  CREATE_RECORD_SET_COLUMNS_LABEL,
  CREATE_RECORD_SET_ERROR_MESSAGE,
  CREATE_RECORD_SET_NAME_DESCRIPTION,
  CREATE_RECORD_SET_NAME_LABEL,
  CREATE_RECORD_SET_PARENT_DESCRIPTION,
  CREATE_RECORD_SET_PARENT_FINDER_PROMPT,
  CREATE_RECORD_SET_PARENT_FINDER_TITLE,
  CREATE_RECORD_SET_PARENT_LABEL,
  CREATE_RECORD_SET_RESET_BUTTON_LABEL,
  CREATE_RECORD_SET_SCHEMA_ID_DESCRIPTION,
  CREATE_RECORD_SET_SCHEMA_ID_LABEL,
  CREATE_RECORD_SET_SUBMIT_BUTTON_LABEL,
  CREATE_RECORD_SET_SUCCESS_TITLE,
  CREATE_RECORD_SET_UPSERT_KEY_DESCRIPTION,
  CREATE_RECORD_SET_UPSERT_KEY_LABEL,
} from '../utils/constants'
import { useCreateRecordSetFromSchema } from './useCreateRecordSetFromSchema'
import { collectTopLevelSchemaProperties } from './utils/collectTopLevelSchemaProperties'
import { reorderColumnsWithUpsertKeysFirst } from './utils/reorderColumnsWithUpsertKeysFirst'

type ColumnRow = { name: string; isSelected: boolean }

export type CreateRecordSetPanelProps = {
  /** Called after the RecordSet is successfully created and the schema is bound to it. */
  onCreated: (recordSet: RecordSet & { id: string }) => void
}

/**
 * A self-contained panel that creates a new RecordSet from a parent container and a JSON Schema
 * `$id`: the schema's top-level properties become the RecordSet's columns (header-only CSV), and the
 * schema is bound to the created entity. Embedded in `RecordBasedFields` as the "Create new
 * RecordSet" path.
 */
export default function CreateRecordSetPanel(props: CreateRecordSetPanelProps) {
  const { onCreated } = props

  const [parentId, setParentId] = useState('')
  const [name, setName] = useState('')
  const [schema$id, setSchema$id] = useState('')
  const [columns, setColumns] = useState<ColumnRow[]>([])
  const [upsertKey, setUpsertKey] = useState<string[]>([])

  const trimmedSchema$id = schema$id.trim()
  const {
    data: schema,
    isFetching: isSchemaFetching,
    error: schemaError,
  } = useGetSchema(trimmedSchema$id, { enabled: !!trimmedSchema$id })

  useEffect(() => {
    if (schema) {
      setColumns(
        collectTopLevelSchemaProperties(schema).map(colName => ({
          name: colName,
          isSelected: false,
        })),
      )
      setUpsertKey([])
    }
  }, [schema])

  const {
    mutate: createRecordSet,
    data: createdRecordSet,
    error: createError,
    isPending: isCreating,
    isSuccess: isCreated,
    reset: resetCreate,
  } = useCreateRecordSetFromSchema({
    onSuccess: recordSet => {
      onCreated(recordSet as RecordSet & { id: string })
    },
  })

  const numSelected = columns.filter(c => c.isSelected).length
  const canSubmit =
    !!parentId.trim() &&
    !!name.trim() &&
    !!trimmedSchema$id &&
    columns.length > 0 &&
    upsertKey.length > 0 &&
    !isCreating

  function handleUpsertKeyChange(newUpsertKey: string[]) {
    setUpsertKey(newUpsertKey)
    setColumns(prev => {
      const byName = new Map(prev.map(col => [col.name, col]))
      const reorderedNames = reorderColumnsWithUpsertKeysFirst(
        prev.map(col => col.name),
        newUpsertKey,
      )
      return reorderedNames.map(name => byName.get(name)!)
    })
  }

  function handleSubmit() {
    createRecordSet({
      parentId,
      name,
      schema$id: trimmedSchema$id,
      headers: columns.map(c => c.name),
      upsertKey,
    })
  }

  function handleReset() {
    resetCreate()
    setParentId('')
    setName('')
    setSchema$id('')
    setColumns([])
    setUpsertKey([])
  }

  if (isCreated && createdRecordSet) {
    return (
      <Alert
        severity="success"
        action={
          <Button color="inherit" size="small" onClick={handleReset}>
            {CREATE_RECORD_SET_RESET_BUTTON_LABEL}
          </Button>
        }
      >
        <Typography variant="body1" fontWeight="bold">
          {CREATE_RECORD_SET_SUCCESS_TITLE}
        </Typography>
        <Typography variant="body2">
          {createdRecordSet.name} ({createdRecordSet.id})
        </Typography>
      </Alert>
    )
  }

  return (
    <Stack gap={2}>
      <EntityIdTextField
        label={CREATE_RECORD_SET_PARENT_LABEL}
        value={parentId}
        onChange={setParentId}
        description={CREATE_RECORD_SET_PARENT_DESCRIPTION}
        required
        entityFinderModalProps={{
          title: CREATE_RECORD_SET_PARENT_FINDER_TITLE,
          promptCopy: CREATE_RECORD_SET_PARENT_FINDER_PROMPT,
          confirmButtonCopy: 'Select',
          configuration: {
            initialScope: FinderScope.ALL_PROJECTS,
            initialContainer: 'root',
            selectMultiple: false,
            treeOnly: false,
            versionSelection: VersionSelectionType.DISALLOWED,
            selectableTypes: [EntityType.project, EntityType.folder],
          },
        }}
      />
      <TextField
        label={CREATE_RECORD_SET_SCHEMA_ID_LABEL}
        description={CREATE_RECORD_SET_SCHEMA_ID_DESCRIPTION}
        value={schema$id}
        onChange={e => setSchema$id(e.target.value)}
        required
      />
      <TextField
        label={CREATE_RECORD_SET_NAME_LABEL}
        description={CREATE_RECORD_SET_NAME_DESCRIPTION}
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      {columns.length > 0 && (
        <StyledFormControl fullWidth>
          <InputLabel id="create-record-set-upsert-key-label" required>
            {CREATE_RECORD_SET_UPSERT_KEY_LABEL}
          </InputLabel>
          <FieldDescription>
            {CREATE_RECORD_SET_UPSERT_KEY_DESCRIPTION}
          </FieldDescription>
          <Select
            labelId="create-record-set-upsert-key-label"
            label={CREATE_RECORD_SET_UPSERT_KEY_LABEL}
            multiple
            required
            value={upsertKey}
            onChange={e => {
              const value = e.target.value
              handleUpsertKeyChange(
                typeof value === 'string' ? value.split(',') : value,
              )
            }}
          >
            {columns.map(col => (
              <MenuItem key={col.name} value={col.name}>
                {col.name}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      )}

      <Stack gap={1}>
        <Typography variant="headline3">
          {CREATE_RECORD_SET_COLUMNS_LABEL}
        </Typography>
        <FieldDescription>
          {CREATE_RECORD_SET_COLUMNS_DESCRIPTION}
        </FieldDescription>
        {isSchemaFetching && (
          <Typography variant="body2">Loading schema…</Typography>
        )}
        {schemaError && <Alert severity="error">{schemaError.message}</Alert>}
        {!isSchemaFetching && !schemaError && columns.length === 0 && (
          <Typography variant="body2">
            {CREATE_RECORD_SET_COLUMNS_EMPTY_MESSAGE}
          </Typography>
        )}
        {columns.length > 0 && upsertKey.length === 0 && (
          <Typography variant="body2">
            {CREATE_RECORD_SET_COLUMNS_AWAITING_UPSERT_KEY_MESSAGE}
          </Typography>
        )}
        {columns.length > 0 && upsertKey.length > 0 && (
          <>
            <ButtonGroup>
              <Button
                aria-label="Move Down"
                disabled={numSelected === 0}
                onClick={() =>
                  setColumns(prev =>
                    moveSelectedItemsDown(prev, c => c.isSelected),
                  )
                }
              >
                <South fontSize="small" />
              </Button>
              <Button
                aria-label="Move Up"
                disabled={numSelected === 0}
                onClick={() =>
                  setColumns(prev =>
                    moveSelectedItemsUp(prev, c => c.isSelected),
                  )
                }
              >
                <North fontSize="small" />
              </Button>
            </ButtonGroup>
            <List>
              {columns.map((col, index) => (
                <ListItem key={col.name} disablePadding>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={col.isSelected}
                        onChange={() =>
                          setColumns(prev =>
                            prev.map((c, i) =>
                              i === index
                                ? { ...c, isSelected: !c.isSelected }
                                : c,
                            ),
                          )
                        }
                      />
                    }
                    label={col.name}
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Stack>

      {createError && (
        <Alert severity="error">
          {createError.reason ?? CREATE_RECORD_SET_ERROR_MESSAGE}
        </Alert>
      )}

      <Button
        variant="contained"
        disabled={!canSubmit}
        loading={isCreating}
        onClick={handleSubmit}
      >
        {CREATE_RECORD_SET_SUBMIT_BUTTON_LABEL}
      </Button>
    </Stack>
  )
}
