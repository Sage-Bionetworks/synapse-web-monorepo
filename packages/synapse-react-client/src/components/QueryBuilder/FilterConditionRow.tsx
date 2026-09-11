import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import {
  Autocomplete,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from '@mui/material'
import { ColumnModel } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { splitAndTrim } from '../../utils/functions/StringUtils'
import { useQueryBuilderInternalContext } from './QueryBuilderInternalContext'
import {
  availableOpsForKind,
  classifyColumn,
  labelForOp,
  QBColumnKind,
} from './queryBuilderMetadata'
import styles from './FilterConditionRow.module.scss'
import { defaultOpForColumnType } from './QueryBuilderStore'
import { QBCondition, QBConditionOp } from './QueryBuilderTypes'

export type FilterConditionRowProps = {
  condition: QBCondition
}

export function FilterConditionRow(props: FilterConditionRowProps) {
  const { condition } = props
  const {
    columnModels,
    facetResults,
    onlyFacetedColumns,
    getColumnDisplayName,
    updateConditionAt,
    removeConditionAt,
  } = useQueryBuilderInternalContext()

  const facetColumnNames = useMemo(
    () =>
      new Set(
        facetResults
          .filter(
            f =>
              f.concreteType ===
              'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
          )
          .map(f => f.columnName),
      ),
    [facetResults],
  )

  const propertyOptions = useMemo(() => {
    const source = onlyFacetedColumns
      ? columnModels.filter(cm => facetColumnNames.has(cm.name))
      : columnModels
    return source.map(cm => ({
      name: cm.name,
      columnType: cm.columnType as string,
      label: getColumnDisplayName(cm.name),
    }))
  }, [columnModels, facetColumnNames, onlyFacetedColumns, getColumnDisplayName])

  const selectedOption =
    propertyOptions.find(opt => opt.name === condition.columnName) ?? null

  const hasFacet =
    condition.columnName != null && facetColumnNames.has(condition.columnName)
  const columnKind = classifyColumn(condition.columnType, hasFacet)
  const availableOps = availableOpsForKind(columnKind)

  const operatorLabelId = `qb-op-label-${condition.id}`

  return (
    <div
      className={styles.row}
      role="group"
      aria-label={`Filter condition${condition.columnName ? ` on ${condition.columnName}` : ''}`}
      data-qb-node-id={condition.id}
    >
      <Tooltip title="Drag to reorder">
        <IconButton
          size="small"
          className={styles.dragHandle}
          aria-label="Drag to reorder condition"
        >
          <DragIndicatorIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Remove condition">
        <IconButton
          size="small"
          className={styles.remove}
          aria-label="Remove condition"
          onClick={() => removeConditionAt(condition.id)}
        >
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Autocomplete
        className={styles.propertyPicker}
        size="small"
        options={propertyOptions}
        getOptionLabel={opt => opt.label}
        isOptionEqualToValue={(a, b) => a.name === b.name}
        value={selectedOption}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Select property…"
            inputProps={{ ...params.inputProps, 'aria-label': 'Property' }}
          />
        )}
        onChange={(_event, value) => {
          if (value == null) return
          // Pick a default op that matches the new column's kind (so a
          // faceted column shifts the row into pill-picker mode, a numeric
          // column into range mode, etc.). Fall back to the raw columnType
          // default if the kind has no ops.
          const nextKind = classifyColumn(
            value.columnType,
            hasFacetForColumnName(facetResults, value.name),
          )
          const opsForKind = availableOpsForKind(nextKind)
          const nextOp =
            opsForKind.length > 0
              ? opsForKind[0]
              : defaultOpForColumnType(value.columnType)
          updateConditionAt(condition.id, {
            columnName: value.name,
            columnType: value.columnType,
            op: nextOp,
            values: [],
            rangeMin: null,
            rangeMax: null,
            text: null,
          })
        }}
      />

      {availableOps.length > 0 && (
        <>
          <InputLabel id={operatorLabelId} sx={{ display: 'none' }}>
            Operator
          </InputLabel>
          <Select
            className={styles.operatorPicker}
            size="small"
            labelId={operatorLabelId}
            variant="outlined"
            value={
              availableOps.includes(condition.op)
                ? condition.op
                : availableOps[0]
            }
            onChange={event => {
              const nextOp = event.target.value as QBConditionOp
              updateConditionAt(condition.id, { op: nextOp })
            }}
            aria-label="Operator"
          >
            {availableOps.map(op => (
              <MenuItem key={op} value={op}>
                {labelForOp(op)}
              </MenuItem>
            ))}
          </Select>
        </>
      )}

      <ValueInput
        condition={condition}
        columnKind={columnKind}
        hasFacet={hasFacet}
        columnModels={columnModels}
        facetValues={
          hasFacet && condition.columnName != null
            ? findFacetValues(facetResults, condition.columnName)
            : []
        }
        onChange={patch => updateConditionAt(condition.id, patch)}
      />
    </div>
  )
}

type ValueInputProps = {
  condition: QBCondition
  columnKind: QBColumnKind
  hasFacet: boolean
  columnModels: ColumnModel[]
  facetValues: string[]
  onChange: (patch: Partial<Omit<QBCondition, 'kind' | 'id'>>) => void
}

function ValueInput(props: ValueInputProps) {
  const { condition, columnKind, hasFacet, facetValues, onChange } = props
  const { op } = condition

  // Presence operators have no input at all.
  if (op === 'has_value' || op === 'no_value') return null

  switch (op) {
    case 'is_any_of':
    case 'is_all_of':
      if ((columnKind === 'enum' || columnKind === 'list') && hasFacet) {
        return (
          <ToggleButtonGroup
            className={styles.pillGroup}
            value={condition.values}
            onChange={(_event, next: string[]) => onChange({ values: next })}
            aria-label="Selected values"
          >
            {facetValues.map(value => (
              <ToggleButton key={value} value={value}>
                {value}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        )
      }
      return (
        <TextField
          className={styles.textInput}
          size="small"
          variant="outlined"
          placeholder="Comma-separated values"
          value={condition.values.join(', ')}
          slotProps={{ htmlInput: { 'aria-label': 'Values' } }}
          onChange={event =>
            onChange({ values: splitAndTrim(event.target.value) })
          }
        />
      )
    case 'between':
      return (
        <>
          <TextField
            className={styles.rangeInput}
            size="small"
            variant="outlined"
            type="text"
            placeholder="Min"
            value={condition.rangeMin ?? ''}
            slotProps={{ htmlInput: { 'aria-label': 'Minimum' } }}
            onChange={event => onChange({ rangeMin: event.target.value })}
          />
          <span aria-hidden="true">to</span>
          <TextField
            className={styles.rangeInput}
            size="small"
            variant="outlined"
            type="text"
            placeholder="Max"
            value={condition.rangeMax ?? ''}
            slotProps={{ htmlInput: { 'aria-label': 'Maximum' } }}
            onChange={event => onChange({ rangeMax: event.target.value })}
          />
        </>
      )
    case 'gt':
    case 'gte':
      return (
        <TextField
          className={styles.rangeInput}
          size="small"
          variant="outlined"
          type="text"
          value={condition.rangeMin ?? ''}
          slotProps={{ htmlInput: { 'aria-label': 'Value' } }}
          onChange={event => onChange({ rangeMin: event.target.value })}
        />
      )
    case 'lt':
    case 'lte':
      return (
        <TextField
          className={styles.rangeInput}
          size="small"
          variant="outlined"
          type="text"
          value={condition.rangeMax ?? ''}
          slotProps={{ htmlInput: { 'aria-label': 'Value' } }}
          onChange={event => onChange({ rangeMax: event.target.value })}
        />
      )
    case 'equal':
    case 'not_equal':
      if (columnKind === 'boolean') {
        return (
          <ToggleButtonGroup
            className={styles.pillGroup}
            exclusive
            value={condition.values[0] ?? null}
            onChange={(_event, next: string | null) => {
              onChange({ values: next == null ? [] : [next] })
            }}
            aria-label="Boolean value"
          >
            <ToggleButton value="true">Yes</ToggleButton>
            <ToggleButton value="false">No</ToggleButton>
          </ToggleButtonGroup>
        )
      }
      return (
        <TextField
          className={styles.textInput}
          size="small"
          variant="outlined"
          value={condition.values[0] ?? ''}
          slotProps={{ htmlInput: { 'aria-label': 'Value' } }}
          onChange={event => onChange({ values: [event.target.value] })}
        />
      )
    case 'contains':
    case 'starts_with':
    case 'ends_with':
    case 'is_exactly':
      return (
        <TextField
          className={styles.textInput}
          size="small"
          variant="outlined"
          value={condition.text ?? ''}
          slotProps={{ htmlInput: { 'aria-label': 'Value' } }}
          onChange={event => onChange({ text: event.target.value })}
        />
      )
    default:
      op satisfies never
      return null
  }
}

function findFacetValues(
  facetResults: readonly ReturnType<
    typeof useQueryBuilderInternalContext
  >['facetResults'][number][],
  columnName: string,
): string[] {
  const match = facetResults.find(f => f.columnName === columnName)
  if (match == null) return []
  if (
    match.concreteType ===
    'org.sagebionetworks.repo.model.table.FacetColumnResultValues'
  ) {
    return match.facetValues.map(v => v.value)
  }
  return []
}

function hasFacetForColumnName(
  facetResults: readonly ReturnType<
    typeof useQueryBuilderInternalContext
  >['facetResults'][number][],
  columnName: string,
): boolean {
  return facetResults.some(
    f =>
      f.columnName === columnName &&
      f.concreteType ===
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
  )
}
