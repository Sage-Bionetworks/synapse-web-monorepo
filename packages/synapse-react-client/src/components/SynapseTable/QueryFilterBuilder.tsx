/**
 * QueryFilterBuilder — custom visual query filter builder.
 * No external UI library dependency.
 *
 * Shown / hidden via `showQueryFilterBuilder` from QueryVisualizationContext.
 * Generates a SQL WHERE clause from structured AND/OR filter groups and injects
 * it into the query via `executeQueryRequest`.
 *
 * Column metadata (selectColumns, columnModels) drives available fields and
 * type-appropriate operators. Enum columns with `enumValues` show a multi-select.
 * Drag-and-drop reorders conditions within a group.
 */

import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  Box,
  Button,
  Chip,
  Collapse,
  Divider,
  IconButton,
  MenuItem,
  Paper,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
  alpha,
  useTheme,
} from '@mui/material'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import type { ColumnModel, SelectColumn } from '@sage-bionetworks/synapse-types'
import { useQueryContext } from '@/components/QueryContext'
import { useQueryVisualizationContext } from '@/components/QueryVisualizationWrapper'
import { useGetQueryMetadata } from '@/components/QueryWrapper/useGetQueryMetadata'
import IconSvg from '@/components/IconSvg'

/* ─── Types ───────────────────────────────────────────────── */

type GlueType = 'AND' | 'OR'
type FieldType = 'text' | 'number' | 'date' | 'enum'
type FilterOperator =
  | 'equals'
  | 'notEquals'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith'
  | 'greaterThan'
  | 'lessThan'
  | 'greaterOrEqual'
  | 'lessOrEqual'
  | 'isEmpty'
  | 'isNotEmpty'
  | 'in'

type FilterCondition = {
  id: string
  field: string
  operator: FilterOperator
  value: string
  values: string[] // for 'in'
}

type FilterGroup = {
  id: string
  glue: GlueType
  conditions: FilterCondition[]
}

type FilterState = {
  groupGlue: GlueType
  groups: FilterGroup[]
}

/* ─── ID helper ──────────────────────────────────────────── */

let _seq = 0
const uid = () => `fqb_${++_seq}`

/* ─── Field / type helpers ───────────────────────────────── */

const NUMERIC_COL_TYPES: string[] = [
  ColumnTypeEnum.INTEGER,
  ColumnTypeEnum.DOUBLE,
]
const DATE_COL_TYPES: string[] = [ColumnTypeEnum.DATE]
// These column types cannot be meaningfully filtered with simple SQL operators
const UNSUPPORTED_COL_TYPES: string[] = [
  ColumnTypeEnum.STRING_LIST,
  ColumnTypeEnum.INTEGER_LIST,
  ColumnTypeEnum.BOOLEAN_LIST,
  ColumnTypeEnum.DATE_LIST,
  ColumnTypeEnum.USERID_LIST,
  ColumnTypeEnum.ENTITYID_LIST,
  ColumnTypeEnum.FILEHANDLEID,
  ColumnTypeEnum.JSON,
]

function resolveFieldType(
  name: string,
  columnModels: ColumnModel[],
  selectColumns: SelectColumn[],
): FieldType {
  const cm = columnModels.find(c => c.name === name)
  if (cm) {
    if (cm.enumValues && cm.enumValues.length > 0) return 'enum'
    if (NUMERIC_COL_TYPES.includes(cm.columnType)) return 'number'
    if (DATE_COL_TYPES.includes(cm.columnType)) return 'date'
    return 'text'
  }
  const sc = selectColumns.find(c => c.name === name)
  if (sc) {
    if (NUMERIC_COL_TYPES.includes(sc.columnType)) return 'number'
    if (DATE_COL_TYPES.includes(sc.columnType)) return 'date'
  }
  return 'text'
}

function isFilterable(
  name: string,
  columnModels: ColumnModel[],
  selectColumns: SelectColumn[],
): boolean {
  const cm = columnModels.find(c => c.name === name)
  if (cm && UNSUPPORTED_COL_TYPES.includes(cm.columnType)) return false
  const sc = selectColumns.find(c => c.name === name)
  if (sc && UNSUPPORTED_COL_TYPES.includes(sc.columnType)) return false
  return true
}

/* ─── Operators ──────────────────────────────────────────── */

const TEXT_OPS: FilterOperator[] = [
  'equals',
  'notEquals',
  'contains',
  'notContains',
  'startsWith',
  'endsWith',
  'isEmpty',
  'isNotEmpty',
]
const NUMBER_OPS: FilterOperator[] = [
  'equals',
  'notEquals',
  'greaterThan',
  'lessThan',
  'greaterOrEqual',
  'lessOrEqual',
  'isEmpty',
  'isNotEmpty',
]
const DATE_OPS: FilterOperator[] = [
  'equals',
  'notEquals',
  'greaterThan',
  'lessThan',
  'greaterOrEqual',
  'lessOrEqual',
  'isEmpty',
  'isNotEmpty',
]
const ENUM_OPS: FilterOperator[] = [
  'in',
  'equals',
  'notEquals',
  'isEmpty',
  'isNotEmpty',
]

function operatorsFor(t: FieldType): FilterOperator[] {
  if (t === 'number') return NUMBER_OPS
  if (t === 'date') return DATE_OPS
  if (t === 'enum') return ENUM_OPS
  return TEXT_OPS
}

const OP_LABELS: Record<FilterOperator, string> = {
  equals: 'equals',
  notEquals: 'does not equal',
  contains: 'contains',
  notContains: "doesn't contain",
  startsWith: 'starts with',
  endsWith: 'ends with',
  greaterThan: 'is greater than',
  lessThan: 'is less than',
  greaterOrEqual: 'is ≥',
  lessOrEqual: 'is ≤',
  isEmpty: 'is empty',
  isNotEmpty: 'is not empty',
  in: 'is one of',
}

const needsValue = (op: FilterOperator) =>
  op !== 'isEmpty' && op !== 'isNotEmpty'

/* ─── SQL generation ─────────────────────────────────────── */

const escapeSql = (s: string) => s.replace(/'/g, "''")
const quoteCol = (name: string) => `\`${name}\``

function conditionToSql(c: FilterCondition, ft: FieldType): string {
  const col = quoteCol(c.field)
  if (c.operator === 'isEmpty') return `(${col} IS NULL OR ${col} = '')`
  if (c.operator === 'isNotEmpty')
    return `(${col} IS NOT NULL AND ${col} <> '')`
  if (c.operator === 'in') {
    if (!c.values.length) return ''
    return `${col} IN (${c.values.map(v => `'${escapeSql(v)}'`).join(', ')})`
  }
  if (!needsValue(c.operator) || (!c.value && c.value !== '0')) return ''

  if (ft === 'number') {
    const n = Number(c.value)
    if (isNaN(n)) return ''
    const m: Partial<Record<FilterOperator, string>> = {
      equals: `${col} = ${n}`,
      notEquals: `${col} <> ${n}`,
      greaterThan: `${col} > ${n}`,
      lessThan: `${col} < ${n}`,
      greaterOrEqual: `${col} >= ${n}`,
      lessOrEqual: `${col} <= ${n}`,
    }
    return m[c.operator] ?? ''
  }
  if (ft === 'date') {
    const ms = new Date(c.value).getTime()
    if (isNaN(ms)) return ''
    const m: Partial<Record<FilterOperator, string>> = {
      equals: `${col} = ${ms}`,
      notEquals: `${col} <> ${ms}`,
      greaterThan: `${col} > ${ms}`,
      lessThan: `${col} < ${ms}`,
      greaterOrEqual: `${col} >= ${ms}`,
      lessOrEqual: `${col} <= ${ms}`,
    }
    return m[c.operator] ?? ''
  }
  const v = escapeSql(c.value)
  const m: Partial<Record<FilterOperator, string>> = {
    equals: `${col} = '${v}'`,
    notEquals: `${col} <> '${v}'`,
    contains: `${col} LIKE '%${v}%'`,
    notContains: `${col} NOT LIKE '%${v}%'`,
    startsWith: `${col} LIKE '${v}%'`,
    endsWith: `${col} LIKE '%${v}'`,
  }
  return m[c.operator] ?? ''
}

function groupToSql(g: FilterGroup, ftMap: Map<string, FieldType>): string {
  const parts = g.conditions
    .map(c => conditionToSql(c, ftMap.get(c.field) ?? 'text'))
    .filter(Boolean)
  if (!parts.length) return ''
  if (parts.length === 1) return parts[0]
  return parts.join(` ${g.glue} `)
}

function stateToWhereClause(
  state: FilterState,
  ftMap: Map<string, FieldType>,
): string {
  const parts = state.groups.map(g => groupToSql(g, ftMap)).filter(Boolean)
  if (!parts.length) return ''
  if (parts.length === 1) return parts[0]
  return parts.map(p => `(${p})`).join(` ${state.groupGlue} `)
}

function injectWhere(sql: string, where: string): string {
  if (!where) return sql
  return /\bWHERE\b/i.test(sql)
    ? `${sql} AND (${where})`
    : `${sql} WHERE ${where}`
}

/* ─── Initial state factory ──────────────────────────────── */

function createInitialState(
  availableFields: string[],
  fieldTypeMap: Map<string, FieldType>,
): FilterState {
  const firstField = availableFields[0] ?? ''
  const ft = fieldTypeMap.get(firstField) ?? 'text'
  return {
    groupGlue: 'AND',
    groups: [
      {
        id: uid(),
        glue: 'AND',
        conditions: [
          {
            id: uid(),
            field: firstField,
            operator: operatorsFor(ft)[0],
            value: '',
            values: [],
          },
        ],
      },
    ],
  }
}

/* ─── GlueToggle ─────────────────────────────────────────── */

function GlueToggle({
  glue,
  onChange,
}: {
  glue: GlueType
  onChange: (g: GlueType) => void
}) {
  return (
    <ToggleButtonGroup
      exclusive
      size="small"
      value={glue}
      onChange={(_, v) => v && onChange(v as GlueType)}
      sx={{
        '& .MuiToggleButton-root': {
          py: 0.25,
          px: 1.5,
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
        },
      }}
    >
      <ToggleButton value="AND">AND</ToggleButton>
      <ToggleButton value="OR">OR</ToggleButton>
    </ToggleButtonGroup>
  )
}

/* ─── ConditionRow ───────────────────────────────────────── */

type ConditionRowProps = {
  condition: FilterCondition
  fieldType: FieldType
  enumValues: string[]
  availableFields: string[]
  isDragOver: boolean
  onUpdate: (patch: Partial<FilterCondition>) => void
  onRemove: () => void
  onDragStart: () => void
  onDragOver: (e: React.DragEvent) => void
  onDrop: () => void
  onDragEnd: () => void
}

function ConditionRow({
  condition,
  fieldType,
  enumValues,
  availableFields,
  isDragOver,
  onUpdate,
  onRemove,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
}: ConditionRowProps) {
  const theme = useTheme()
  const operators = operatorsFor(fieldType)
  // Ensure operator is valid for the current field type
  const activeOperator = operators.includes(condition.operator)
    ? condition.operator
    : operators[0]
  const showValue = needsValue(activeOperator)
  const isInOp = activeOperator === 'in'

  return (
    <Box
      draggable
      onDragStart={e => {
        e.stopPropagation()
        onDragStart()
      }}
      onDragOver={e => {
        e.preventDefault()
        e.stopPropagation()
        onDragOver(e)
      }}
      onDrop={e => {
        e.preventDefault()
        e.stopPropagation()
        onDrop()
      }}
      onDragEnd={onDragEnd}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 1,
        px: 1,
        py: 0.75,
        borderRadius: 1,
        border: `1px solid ${isDragOver ? theme.palette.primary.main : 'transparent'}`,
        bgcolor: isDragOver
          ? alpha(theme.palette.primary.main, 0.06)
          : 'transparent',
        transition: 'border-color 0.15s, background-color 0.15s',
        '&:hover': { bgcolor: alpha(theme.palette.action.hover, 0.5) },
      }}
    >
      {/* Drag handle */}
      <Tooltip title="Drag to reorder">
        <Box
          component="span"
          sx={{
            cursor: 'grab',
            color: 'text.disabled',
            fontSize: 18,
            lineHeight: 1,
            userSelect: 'none',
            letterSpacing: '-2px',
          }}
        >
          ⠿
        </Box>
      </Tooltip>

      {/* Field selector */}
      <Select
        size="small"
        value={
          availableFields.includes(condition.field)
            ? condition.field
            : (availableFields[0] ?? '')
        }
        onChange={e =>
          onUpdate({ field: e.target.value, value: '', values: [] })
        }
        sx={{ minWidth: 140 }}
      >
        {availableFields.map(f => (
          <MenuItem key={f} value={f}>
            {f}
          </MenuItem>
        ))}
      </Select>

      {/* Operator selector */}
      <Select
        size="small"
        value={activeOperator}
        onChange={e =>
          onUpdate({
            operator: e.target.value as FilterOperator,
            value: '',
            values: [],
          })
        }
        sx={{ minWidth: 170 }}
      >
        {operators.map(op => (
          <MenuItem key={op} value={op}>
            {OP_LABELS[op]}
          </MenuItem>
        ))}
      </Select>

      {/* Value — text / number / date */}
      {showValue && !isInOp && (
        <TextField
          size="small"
          type={
            fieldType === 'number'
              ? 'number'
              : fieldType === 'date'
                ? 'date'
                : 'text'
          }
          value={condition.value}
          onChange={e => onUpdate({ value: e.target.value })}
          placeholder={fieldType === 'date' ? undefined : 'Value…'}
          slotProps={
            fieldType === 'date' ? { inputLabel: { shrink: true } } : undefined
          }
          sx={{ flex: 1, minWidth: 130 }}
        />
      )}

      {/* Value — enum multi-select (known values from column model) */}
      {showValue && isInOp && enumValues.length > 0 && (
        <Select
          multiple
          size="small"
          value={condition.values}
          onChange={e => onUpdate({ values: e.target.value as string[] })}
          displayEmpty
          renderValue={(selected: string[]) =>
            selected.length === 0 ? (
              <Typography variant="inherit" color="text.disabled">
                Select values…
              </Typography>
            ) : (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.25 }}>
                {selected.map(v => (
                  <Chip key={v} label={v} size="small" />
                ))}
              </Box>
            )
          }
          sx={{ flex: 1, minWidth: 160 }}
        >
          {enumValues.map(v => (
            <MenuItem key={v} value={v}>
              {v}
            </MenuItem>
          ))}
        </Select>
      )}

      {/* Value — 'in' with free-text (no known enum values) */}
      {showValue && isInOp && enumValues.length === 0 && (
        <TextField
          size="small"
          value={condition.values.join(', ')}
          onChange={e =>
            onUpdate({
              values: e.target.value
                .split(',')
                .map(s => s.trim())
                .filter(Boolean),
            })
          }
          placeholder="value1, value2, …"
          helperText="Separate with commas"
          sx={{ flex: 1, minWidth: 160 }}
        />
      )}

      {/* Remove condition */}
      <Tooltip title="Remove condition">
        <IconButton
          size="small"
          onClick={onRemove}
          sx={{ ml: 'auto', color: 'text.secondary' }}
        >
          <IconSvg icon="close" wrap={false} sx={{ fontSize: 16 }} />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

/* ─── FilterGroupCard ────────────────────────────────────── */

type FilterGroupCardProps = {
  group: FilterGroup
  availableFields: string[]
  fieldTypeMap: Map<string, FieldType>
  enumValuesMap: Map<string, string[]>
  canRemove: boolean
  onUpdate: (patch: Partial<FilterGroup>) => void
  onRemove: () => void
}

function FilterGroupCard({
  group,
  availableFields,
  fieldTypeMap,
  enumValuesMap,
  canRemove,
  onUpdate,
  onRemove,
}: FilterGroupCardProps) {
  const theme = useTheme()
  const dragCondIdRef = useRef<string | null>(null)
  const [dragOverCondId, setDragOverCondId] = useState<string | null>(null)

  const updateCondition = (condId: string, patch: Partial<FilterCondition>) => {
    const conditions = group.conditions.map(c =>
      c.id === condId ? { ...c, ...patch } : c,
    )
    // If the field changed, ensure operator is still valid for the new type
    if (patch.field) {
      const newFt = fieldTypeMap.get(patch.field) ?? 'text'
      const validOps = operatorsFor(newFt)
      const idx = conditions.findIndex(c => c.id === condId)
      if (idx !== -1 && !validOps.includes(conditions[idx].operator)) {
        conditions[idx] = { ...conditions[idx], operator: validOps[0] }
      }
    }
    onUpdate({ conditions })
  }

  const removeCondition = (condId: string) => {
    onUpdate({ conditions: group.conditions.filter(c => c.id !== condId) })
  }

  const addCondition = () => {
    const field = availableFields[0] ?? ''
    const ft = fieldTypeMap.get(field) ?? 'text'
    onUpdate({
      conditions: [
        ...group.conditions,
        {
          id: uid(),
          field,
          operator: operatorsFor(ft)[0],
          value: '',
          values: [],
        },
      ],
    })
  }

  const handleDrop = (targetId: string) => {
    const srcId = dragCondIdRef.current
    if (!srcId || srcId === targetId) {
      setDragOverCondId(null)
      return
    }
    const conds = [...group.conditions]
    const srcIdx = conds.findIndex(c => c.id === srcId)
    const tgtIdx = conds.findIndex(c => c.id === targetId)
    if (srcIdx === -1 || tgtIdx === -1) return
    const [moved] = conds.splice(srcIdx, 1)
    conds.splice(tgtIdx, 0, moved)
    onUpdate({ conditions: conds })
    setDragOverCondId(null)
    dragCondIdRef.current = null
  }

  const glueColor =
    group.glue === 'AND'
      ? theme.palette.primary.main
      : theme.palette.secondary.main

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 1.5,
        borderColor: theme.palette.divider,
        bgcolor: alpha(theme.palette.background.paper, 0.7),
      }}
    >
      {/* Header: "Match [AND|OR] of the following conditions" */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
        <Typography
          variant="smallText2"
          sx={{
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'text.secondary',
          }}
        >
          Match
        </Typography>
        <GlueToggle glue={group.glue} onChange={glue => onUpdate({ glue })} />
        <Typography variant="smallText2" color="text.secondary">
          of the following conditions:
        </Typography>
        {canRemove && (
          <Tooltip title="Remove group">
            <IconButton
              size="small"
              onClick={onRemove}
              sx={{ ml: 'auto', color: 'text.secondary' }}
            >
              <IconSvg icon="deleteSweep" wrap={false} sx={{ fontSize: 16 }} />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {/* Conditions */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {group.conditions.map((cond, idx) => (
          <Box key={cond.id}>
            {/* Glue label between conditions */}
            {idx > 0 && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  my: 0.25,
                  pl: '34px',
                }}
              >
                <Box
                  sx={{
                    px: 0.75,
                    py: 0.1,
                    borderRadius: '3px',
                    bgcolor: alpha(glueColor, 0.12),
                    border: `1px solid ${alpha(glueColor, 0.3)}`,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 800,
                      fontSize: '0.65rem',
                      color: glueColor,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {group.glue}
                  </Typography>
                </Box>
              </Box>
            )}
            <ConditionRow
              condition={cond}
              fieldType={fieldTypeMap.get(cond.field) ?? 'text'}
              enumValues={enumValuesMap.get(cond.field) ?? []}
              availableFields={availableFields}
              isDragOver={dragOverCondId === cond.id}
              onUpdate={patch => updateCondition(cond.id, patch)}
              onRemove={() => removeCondition(cond.id)}
              onDragStart={() => {
                dragCondIdRef.current = cond.id
              }}
              onDragOver={e => {
                e.preventDefault()
                setDragOverCondId(cond.id)
              }}
              onDrop={() => handleDrop(cond.id)}
              onDragEnd={() => {
                setDragOverCondId(null)
                dragCondIdRef.current = null
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Add condition */}
      <Button
        size="small"
        startIcon={<IconSvg icon="add" wrap={false} sx={{ fontSize: 14 }} />}
        onClick={addCondition}
        sx={{ mt: 1, fontSize: '0.75rem', color: 'text.secondary' }}
      >
        Add Condition
      </Button>
    </Paper>
  )
}

/* ─── QueryFilterBuilderContent (stateful inner component) ── */

type ContentProps = {
  availableFields: string[]
  fieldTypeMap: Map<string, FieldType>
  enumValuesMap: Map<string, string[]>
  executeQueryRequest: ReturnType<typeof useQueryContext>['executeQueryRequest']
  getInitQueryRequest: ReturnType<typeof useQueryContext>['getInitQueryRequest']
}

function QueryFilterBuilderContent({
  availableFields,
  fieldTypeMap,
  enumValuesMap,
  executeQueryRequest,
  getInitQueryRequest,
}: ContentProps) {
  const theme = useTheme()

  const [state, setState] = useState<FilterState>(() =>
    createInitialState(availableFields, fieldTypeMap),
  )

  const updateGroup = useCallback((id: string, patch: Partial<FilterGroup>) => {
    setState(s => ({
      ...s,
      groups: s.groups.map(g => (g.id === id ? { ...g, ...patch } : g)),
    }))
  }, [])

  const removeGroup = useCallback((id: string) => {
    setState(s => ({ ...s, groups: s.groups.filter(g => g.id !== id) }))
  }, [])

  const addGroup = useCallback(() => {
    const field = availableFields[0] ?? ''
    const ft = fieldTypeMap.get(field) ?? 'text'
    setState(s => ({
      ...s,
      groups: [
        ...s.groups,
        {
          id: uid(),
          glue: 'AND' as GlueType,
          conditions: [
            {
              id: uid(),
              field,
              operator: operatorsFor(ft)[0],
              value: '',
              values: [],
            },
          ],
        },
      ],
    }))
  }, [availableFields, fieldTypeMap])

  const sqlPreview = useMemo(
    () => stateToWhereClause(state, fieldTypeMap),
    [state, fieldTypeMap],
  )

  const handleApply = useCallback(() => {
    const where = stateToWhereClause(state, fieldTypeMap)
    const baseSql = getInitQueryRequest().query.sql
    executeQueryRequest(req => {
      req.query.sql = injectWhere(baseSql, where)
      req.query.offset = 0
      return req
    })
  }, [executeQueryRequest, fieldTypeMap, getInitQueryRequest, state])

  const handleClear = useCallback(() => {
    setState(createInitialState(availableFields, fieldTypeMap))
    executeQueryRequest(req => {
      req.query.sql = getInitQueryRequest().query.sql
      req.query.offset = 0
      return req
    })
  }, [availableFields, executeQueryRequest, fieldTypeMap, getInitQueryRequest])

  const groupGlueColor =
    state.groupGlue === 'AND'
      ? theme.palette.primary.main
      : theme.palette.secondary.main

  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{ p: 2, my: 1, borderColor: theme.palette.divider }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
        <IconSvg
          icon="filter"
          wrap={false}
          sx={{ color: 'text.secondary', fontSize: 20 }}
        />
        <Typography variant="sectionTitle">Query Filter Builder</Typography>
      </Box>

      {/* Groups */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {state.groups.map((group, idx) => (
          <Box key={group.id}>
            {/* Connector between groups — shows the group-level AND/OR */}
            {idx > 0 && (
              <Box sx={{ display: 'flex', alignItems: 'center', my: 1.5 }}>
                <Divider
                  sx={{ flex: 1, borderColor: alpha(groupGlueColor, 0.4) }}
                />
                <Box sx={{ mx: 1.5 }}>
                  <GlueToggle
                    glue={state.groupGlue}
                    onChange={groupGlue => setState(s => ({ ...s, groupGlue }))}
                  />
                </Box>
                <Divider
                  sx={{ flex: 1, borderColor: alpha(groupGlueColor, 0.4) }}
                />
              </Box>
            )}
            <FilterGroupCard
              group={group}
              availableFields={availableFields}
              fieldTypeMap={fieldTypeMap}
              enumValuesMap={enumValuesMap}
              canRemove={state.groups.length > 1}
              onUpdate={patch => updateGroup(group.id, patch)}
              onRemove={() => removeGroup(group.id)}
            />
          </Box>
        ))}
      </Box>

      {/* Add Group */}
      <Button
        size="small"
        startIcon={<IconSvg icon="add" wrap={false} sx={{ fontSize: 14 }} />}
        onClick={addGroup}
        sx={{ mt: 1.5, color: 'text.secondary' }}
      >
        Add Group
      </Button>

      {/* SQL preview */}
      {sqlPreview && (
        <Box
          sx={{
            mt: 2,
            p: 1.25,
            bgcolor: alpha(theme.palette.primary.main, 0.04),
            borderRadius: 1,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
          }}
        >
          <Typography
            variant="smallText2"
            sx={{
              fontFamily: 'monospace',
              color: 'text.secondary',
              wordBreak: 'break-all',
            }}
          >
            <strong>WHERE</strong> {sqlPreview}
          </Typography>
        </Box>
      )}

      {/* Actions */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
        <Button variant="outlined" size="small" onClick={handleClear}>
          Clear
        </Button>
        <Button variant="contained" size="small" onClick={handleApply}>
          Apply Filter
        </Button>
      </Box>
    </Paper>
  )
}

/* ─── QueryFilterBuilder (outer: Collapse + null-guard) ───── */

/**
 * The outer component handles the Collapse animation and waits for column
 * metadata to load. The inner `QueryFilterBuilderContent` only mounts once
 * fields are available, so its `useState` initializer always has valid data.
 */
export function QueryFilterBuilder() {
  const { showQueryFilterBuilder } = useQueryVisualizationContext()
  const { executeQueryRequest, getInitQueryRequest } = useQueryContext()
  const { data: queryMetadata } = useGetQueryMetadata()

  const selectColumns = useMemo(
    () => queryMetadata?.selectColumns ?? [],
    [queryMetadata?.selectColumns],
  )
  const columnModels = useMemo(
    () => queryMetadata?.columnModels ?? [],
    [queryMetadata?.columnModels],
  )

  const availableFields = useMemo(
    () =>
      selectColumns
        .map(c => c.name)
        .filter(name => isFilterable(name, columnModels, selectColumns)),
    [selectColumns, columnModels],
  )

  const fieldTypeMap = useMemo(() => {
    const m = new Map<string, FieldType>()
    for (const f of availableFields) {
      m.set(f, resolveFieldType(f, columnModels, selectColumns))
    }
    return m
  }, [availableFields, columnModels, selectColumns])

  const enumValuesMap = useMemo(() => {
    const m = new Map<string, string[]>()
    for (const f of availableFields) {
      const cm = columnModels.find(c => c.name === f)
      if (cm?.enumValues?.length) m.set(f, cm.enumValues)
    }
    return m
  }, [availableFields, columnModels])

  return (
    <Collapse
      className="QueryFilterBuilder"
      in={showQueryFilterBuilder}
      timeout={{ enter: 300, exit: 300 }}
    >
      {availableFields.length > 0 && (
        <QueryFilterBuilderContent
          availableFields={availableFields}
          fieldTypeMap={fieldTypeMap}
          enumValuesMap={enumValuesMap}
          executeQueryRequest={executeQueryRequest}
          getInitQueryRequest={getInitQueryRequest}
        />
      )}
    </Collapse>
  )
}

export default QueryFilterBuilder
