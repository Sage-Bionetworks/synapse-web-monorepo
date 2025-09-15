import { convertToConcreteEntityType } from '@/utils/functions/EntityTypeUtils'
import { InfoTwoTone } from '@mui/icons-material'
import {
  Box,
  Checkbox,
  FormControl,
  Link,
  MenuItem,
  Select,
  SxProps,
  TextField,
  Tooltip,
} from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  ColumnModel,
  ColumnTypeEnum,
  FacetType,
  VIEW_CONCRETE_TYPE_VALUES,
} from '@sage-bionetworks/synapse-types'
import { useAtomValue, useSetAtom } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { isArray, isEmpty, isEqual } from 'lodash-es'
import { useMemo } from 'react'
import { ZodIssue } from 'zod'
import DefaultValueField from './ColumnModelFormFields/DefaultValueField'
import { FieldWithRecommendedMinimum } from './ColumnModelFormFields/FieldWithRecommendedMinimum'
import MultiValueField from './ColumnModelFormFields/MultiValueField'
import {
  canHaveDefault,
  canHaveMaxListLength,
  canHaveRestrictedValues,
  canHaveSize,
  configureFacetsForType,
  getAllowedColumnTypes,
  getColumnTypeFriendlyName,
  getFacetTypeFriendlyName,
  getMaxSizeForType,
} from './TableColumnSchemaEditorUtils'
import { HIERARCHY_VERTICAL_LINE_COMPONENT } from './TableColumnSchemaForm'
import { tableColumnSchemaFormDataAtom } from './TableColumnSchemaFormReducer'
import {
  ColumnModelFormData,
  JsonSubColumnModelFormData,
} from './Validators/ColumnModelValidator'

type ColumnModelFormProps = {
  entityType: EntityType
  columnModelIndex: number
  jsonSubColumnIndex?: number
  /* Default Columns are read-only, except for the facetType */
  isDefaultColumn: boolean
  disabled?: boolean
  /* Can be used to override the schema used for validating ColumnModels */
  validationErrors?: ZodIssue[] | null
  defaultAnnotationModel?: ColumnModel | null
  originalColumnModel?: ColumnModel | null
}
const jsonSubColumnFieldSx: SxProps = {
  height: '28px',
  fontSize: '12px',
}
const topLevelColumnModelFieldSx: SxProps = {
  height: '38px',
  fontSize: '14px',
}

function renderDefaultValue(
  defaultValue: string | unknown[] | undefined,
  columnType: ColumnTypeEnum,
): string {
  if (defaultValue == null) {
    return ''
  }

  if (isArray(defaultValue)) {
    return defaultValue.map(String).join(', ')
  }
  return defaultValue
}

/*
 * Disable immediate MUI/Emotion style injection because it causes performance issues when adding many columns at once.
 * This can be a common occurence when adding annotation columns
 */
const DISABLE_INJECTING_GLOBAL_STYLES_VALUE = true

export default function ColumnModelForm(props: ColumnModelFormProps) {
  const {
    columnModelIndex,
    jsonSubColumnIndex,
    entityType,
    isDefaultColumn,
    disabled = false,
    validationErrors = null,
    defaultAnnotationModel,
    originalColumnModel,
  } = props
  const isJsonSubColumn = jsonSubColumnIndex != undefined
  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)
  const isView = (VIEW_CONCRETE_TYPE_VALUES as readonly string[]).includes(
    convertToConcreteEntityType(entityType),
  )

  const columnModelAtom = useMemo(
    () =>
      selectAtom(
        tableColumnSchemaFormDataAtom,
        v =>
          isJsonSubColumn
            ? v[columnModelIndex].jsonSubColumns![jsonSubColumnIndex]
            : v[columnModelIndex],
        isEqual,
      ),
    [columnModelIndex, isJsonSubColumn, jsonSubColumnIndex],
  )

  const columnModel = useAtomValue(columnModelAtom)

  const allowedColumnTypes = useMemo(
    () => getAllowedColumnTypes(isView, isJsonSubColumn),
    [isView, isJsonSubColumn],
  )

  const allowedFacetTypes = useMemo(
    () => configureFacetsForType(columnModel.columnType, isJsonSubColumn),
    [columnModel.columnType, isJsonSubColumn],
  )
  const fieldSx: SxProps = useMemo(
    () => (isJsonSubColumn ? jsonSubColumnFieldSx : topLevelColumnModelFieldSx),
    [isJsonSubColumn],
  )

  const errorsByField = useMemo(() => {
    if (validationErrors && isArray(validationErrors)) {
      const errorsByField: Record<string, string> = {}
      validationErrors.forEach(e => {
        if (e.path) {
          errorsByField[e.path[e.path.length - 1]] = e.message
        }
      })
      return errorsByField
    }
    return {}
  }, [validationErrors])

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridColumn: '1 / span 10',
          gridTemplateColumns: 'subgrid',
        }}
      >
        {isJsonSubColumn && (
          <Box sx={{ gridColumn: '1 / span 1' }}>
            {HIERARCHY_VERTICAL_LINE_COMPONENT}
          </Box>
        )}
        <Box
          data-testid={`ColumnModelForm`}
          sx={{
            display: 'flex',
            alignItems: 'start',
            gridColumn: isJsonSubColumn ? '2 / span 1' : ' 1 / span 1',
            // Checkbox is offset from top; vertical centering causes issues when validation errors are displayed
            mt: isJsonSubColumn ? '0px' : '5px',
          }}
        >
          <Checkbox
            checked={columnModel.isSelected}
            inputProps={{ 'aria-label': 'Select' }}
            disabled={disabled}
            onChange={() => {
              dispatch({
                type: 'toggleSelect',
                columnModelIndex,
                jsonSubColumnModelIndex: jsonSubColumnIndex,
              })
            }}
          />
        </Box>
        <Box
          sx={{
            my: isDefaultColumn ? 'auto' : undefined,
            gridColumn: isJsonSubColumn
              ? /* If this is a JSON Subcolumn, we reduce the width of this grid column to create space to render the visual hierarchical line */
                '3 / span 1'
              : /* Otherwise, span across both grid columns  */
                '2 / span 2',
          }}
        >
          {isDefaultColumn ? (
            columnModel.name
          ) : (
            <TextField
              value={columnModel.name}
              placeholder={isJsonSubColumn ? 'Facet name' : 'Column name'}
              onChange={e => {
                dispatch({
                  type: 'setColumnModelValue',
                  columnModelIndex,
                  jsonSubColumnModelIndex: jsonSubColumnIndex,
                  value: {
                    ...columnModel,
                    name: e.target.value,
                  },
                })
              }}
              disabled={disabled}
              fullWidth
              error={!!errorsByField['name']}
              helperText={errorsByField['name']}
              slotProps={{
                input: {
                  disableInjectingGlobalStyles:
                    DISABLE_INJECTING_GLOBAL_STYLES_VALUE,
                  sx: fieldSx,
                  slotProps: {
                    input: {
                      'aria-label': 'Name',
                    },
                  },
                },
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            my: isDefaultColumn ? 'auto' : undefined,
          }}
        >
          {isDefaultColumn ? (
            getColumnTypeFriendlyName(columnModel.columnType)
          ) : (
            <FormControl fullWidth>
              <Select
                label="Column Type"
                value={columnModel.columnType}
                onChange={e => {
                  dispatch({
                    type: 'changeColumnModelType',
                    columnModelIndex,
                    jsonSubColumnModelIndex: jsonSubColumnIndex,
                    newColumnType: e.target.value as ColumnTypeEnum,
                  })
                }}
                slotProps={{
                  input: {
                    'aria-label': 'Column Type',
                  },
                }}
                sx={fieldSx}
                disabled={disabled}
                error={!!errorsByField['columnType']}
              >
                {allowedColumnTypes.map(value => {
                  return (
                    <MenuItem value={value} key={value}>
                      {getColumnTypeFriendlyName(value)}
                    </MenuItem>
                  )
                })}
              </Select>
              {errorsByField['columnType'] && (
                <FormHelperText color={'error.main'}>
                  {errorsByField['columnType']}
                </FormHelperText>
              )}
            </FormControl>
          )}
        </Box>
        <Box
          sx={{
            my: isDefaultColumn ? 'auto' : undefined,
          }}
        >
          {isDefaultColumn ? (
            (columnModel as ColumnModelFormData).maximumSize ?? ''
          ) : (
            <FieldWithRecommendedMinimum
              value={(columnModel as ColumnModelFormData).maximumSize ?? ''}
              originalValue={originalColumnModel?.maximumSize}
              recommendedValue={defaultAnnotationModel?.maximumSize}
              columnType={columnModel.columnType as ColumnTypeEnum}
              disabled={disabled || !canHaveSize(columnModel.columnType)}
              InputProps={{
                disableInjectingGlobalStyles:
                  DISABLE_INJECTING_GLOBAL_STYLES_VALUE,

                slotProps: {
                  input: {
                    'aria-label': 'Maximum Size',
                    min: 1,
                    max: canHaveSize(columnModel.columnType)
                      ? getMaxSizeForType(columnModel.columnType)
                      : undefined,
                  },
                },
                sx: fieldSx,
              }}
              onChange={e => {
                dispatch({
                  type: 'setColumnModelValue',
                  columnModelIndex,
                  jsonSubColumnModelIndex: jsonSubColumnIndex,
                  value: {
                    ...columnModel,
                    maximumSize: e.target.value,
                  },
                })
              }}
              fullWidth
              error={!!errorsByField['maximumSize']}
              helperText={errorsByField['maximumSize']}
            />
          )}
        </Box>
        <Box
          sx={{
            my: isDefaultColumn ? 'auto' : undefined,
          }}
        >
          {isDefaultColumn ? (
            (columnModel as ColumnModelFormData).maximumListLength ?? ''
          ) : (
            <FieldWithRecommendedMinimum
              value={
                (columnModel as ColumnModelFormData).maximumListLength ?? ''
              }
              originalValue={originalColumnModel?.maximumListLength}
              recommendedValue={defaultAnnotationModel?.maximumListLength}
              columnType={columnModel.columnType as ColumnTypeEnum}
              disabled={
                disabled || !canHaveMaxListLength(columnModel.columnType)
              }
              onChange={e => {
                dispatch({
                  type: 'setColumnModelValue',
                  columnModelIndex,
                  jsonSubColumnModelIndex: jsonSubColumnIndex,
                  value: {
                    ...columnModel,
                    maximumListLength: e.target.value,
                  },
                })
              }}
              InputProps={{
                disableInjectingGlobalStyles:
                  DISABLE_INJECTING_GLOBAL_STYLES_VALUE,
                slotProps: {
                  input: {
                    'aria-label': 'Maximum List Length',
                  },
                },
                sx: fieldSx,
              }}
              fullWidth
              error={!!errorsByField['maximumListLength']}
              helperText={errorsByField['maximumListLength']}
            />
          )}
        </Box>
        <Box
          sx={{
            my: isDefaultColumn ? 'auto' : undefined,
          }}
        >
          {isDefaultColumn ? (
            renderDefaultValue(
              (columnModel as ColumnModelFormData)?.defaultValue,
              columnModel.columnType as ColumnTypeEnum,
            )
          ) : (
            <DefaultValueField
              TextFieldProps={{
                InputProps: {
                  disableInjectingGlobalStyles:
                    DISABLE_INJECTING_GLOBAL_STYLES_VALUE,
                  slotProps: {
                    input: {
                      'aria-label': 'Default Value',
                    },
                  },
                  sx: fieldSx,
                },
                fullWidth: true,
                error: !!errorsByField['defaultValue'],
                helperText: errorsByField['defaultValue'],
              }}
              SelectProps={{
                label: 'Default Value',
                sx: fieldSx,
                slotProps: {
                  input: {
                    'aria-label': 'Default Value',
                  },
                },
                error: !!errorsByField['defaultValue'],
              }}
              selectFormHelperText={errorsByField['defaultValue']}
              columnModel={columnModel as ColumnModelFormData}
              value={(columnModel as ColumnModelFormData)?.defaultValue || null}
              onChange={value => {
                dispatch({
                  type: 'setColumnModelValue',
                  columnModelIndex,
                  jsonSubColumnModelIndex: jsonSubColumnIndex,
                  value: {
                    ...columnModel,
                    defaultValue: value || undefined,
                  },
                })
              }}
              disabled={
                disabled ||
                !canHaveDefault(columnModel.columnType, isView, isJsonSubColumn)
              }
            />
          )}
        </Box>
        <Box>
          <MultiValueField
            value={(columnModel as ColumnModelFormData)?.enumValues}
            onChange={newValue => {
              dispatch({
                type: 'setColumnModelValue',
                columnModelIndex,
                jsonSubColumnModelIndex: jsonSubColumnIndex,
                value: {
                  ...columnModel,
                  enumValues:
                    newValue == null || isEmpty(newValue)
                      ? undefined
                      : newValue,
                },
              })
            }}
            columnType={columnModel.columnType as ColumnTypeEnum}
            TextFieldProps={{
              fullWidth: true,
              disabled:
                disabled ||
                !canHaveRestrictedValues(
                  columnModel.columnType,
                  isJsonSubColumn,
                ),
              InputProps: {
                disableInjectingGlobalStyles:
                  DISABLE_INJECTING_GLOBAL_STYLES_VALUE,
                // Is readOnly because edits are made with the JSONArrayEditorModal
                readOnly: true,
                sx: fieldSx,
                slotProps: {
                  input: {
                    'aria-label': 'Restrict Values',
                  },
                },
              },
              error: !!errorsByField['enumValues'],
              helperText: errorsByField['enumValues'],
            }}
          />
        </Box>
        <Box>
          <FormControl fullWidth>
            <Select
              label="Facet Type"
              value={columnModel.facetType || ''}
              disabled={disabled || allowedFacetTypes === null}
              onChange={e => {
                dispatch({
                  type: 'setColumnModelValue',
                  columnModelIndex,
                  jsonSubColumnModelIndex: jsonSubColumnIndex,
                  value: {
                    ...columnModel,
                    facetType: e.target.value as FacetType,
                  },
                })
              }}
              sx={fieldSx}
              slotProps={{
                input: {
                  'aria-label': 'Facet Type',
                },
              }}
              error={!!errorsByField['facetType']}
            >
              {(allowedFacetTypes ?? []).map((value, index) => {
                return (
                  <MenuItem value={value} key={index}>
                    {value === undefined ? '' : getFacetTypeFriendlyName(value)}
                  </MenuItem>
                )
              })}
            </Select>
            {errorsByField['facetType'] && (
              <FormHelperText color={'error.main'}>
                {errorsByField['facetType']}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
      </Box>
      {isJsonSubColumn && (
        <Box
          sx={{
            display: 'grid',
            gridColumn: '1 / span 10',
            gridTemplateColumns: 'subgrid',
          }}
        >
          <Box
            sx={{
              gridColumn: '1 / span 1',
            }}
          >
            {HIERARCHY_VERTICAL_LINE_COMPONENT}
          </Box>
          <Box></Box>
          <Box
            sx={{
              gridColumn: '3 / span 7',
            }}
          >
            <TextField
              placeholder={'JSON Path'}
              value={(columnModel as JsonSubColumnModelFormData).jsonPath}
              onChange={e => {
                dispatch({
                  type: 'setColumnModelValue',
                  columnModelIndex,
                  jsonSubColumnModelIndex: jsonSubColumnIndex,
                  value: {
                    ...(columnModel as JsonSubColumnModelFormData),
                    jsonPath: e.target.value,
                  },
                })
              }}
              disabled={disabled}
              fullWidth
              slotProps={{
                input: {
                  disableInjectingGlobalStyles:
                    DISABLE_INJECTING_GLOBAL_STYLES_VALUE,
                  sx: fieldSx,
                  endAdornment: (
                    <Tooltip
                      title={
                        <>
                          <p>
                            <Link
                              href={
                                'https://dev.mysql.com/doc/refman/8.0/en/json.html#json-path-syntax'
                              }
                            >
                              Please use a valid JSON Path selector, following
                              this format.
                            </Link>
                          </p>
                          <p>
                            This field is for linking the sub-column facet to
                            the corresponding location in the JSON data, so that
                            it can be used as facet filter. The correct selector
                            will point to the key referenced in the sub-column
                            JSON Path.
                          </p>
                        </>
                      }
                    >
                      <InfoTwoTone sx={{ color: 'grey.700' }} />
                    </Tooltip>
                  ),
                  slotProps: {
                    input: { 'aria-label': 'JSON Path' },
                  },
                },
              }}
              error={!!errorsByField['jsonPath']}
              helperText={errorsByField['jsonPath']}
            />
          </Box>
        </Box>
      )}
    </>
  )
}
