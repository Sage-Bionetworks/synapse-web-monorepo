import {
  Box,
  FormControl,
  Link,
  MenuItem,
  Select,
  SxProps,
  TextField,
  Tooltip,
} from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { selectAtom } from 'jotai/utils'
import {
  ColumnModelFormData,
  JsonSubColumnModelFormData,
  tableColumnSchemaFormDataAtom,
} from './TableColumnSchemaFormReducer'
import {
  ColumnTypeEnum,
  EntityType,
  FacetType,
  VIEW_CONCRETE_TYPE_VALUES,
} from '@sage-bionetworks/synapse-types'
import { convertToConcreteEntityType } from '../../utils/functions/EntityTypeUtils'
import React, { useMemo, useState } from 'react'
import { isEmpty, isEqual } from 'lodash-es'
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
import { Checkbox } from '../widgets/Checkbox'
import JSONArrayEditorModal from '../JSONArrayEditor/JSONArrayEditorModal'
import { HIERARCHY_VERTICAL_LINE_COMPONENT } from './TableColumnSchemaForm'
import { InfoTwoTone } from '@mui/icons-material'

type ColumnModelFormProps = {
  entityType: EntityType
  columnModelIndex: number
  jsonSubColumnIndex?: number
  /* Default Columns are read-only, except for the facetType */
  isDefaultColumn: boolean
  disabled?: boolean
}
const jsonSubColumnFieldSx: SxProps = {
  height: '28px',
  fontSize: '12px',
}
const topLevelColumnModelFieldSx: SxProps = {
  height: '38px',
  fontSize: '14px',
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
  } = props
  const isJsonSubColumn = jsonSubColumnIndex != undefined
  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)
  const isView = (VIEW_CONCRETE_TYPE_VALUES as readonly string[]).includes(
    convertToConcreteEntityType(entityType),
  )

  const [isShowingRestrictedValuesModal, setIsShowingRestrictedValuesModal] =
    useState(false)

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

  return (
    <>
      {isJsonSubColumn && (
        <Box sx={{ gridColumn: '1 / span 1' }}>
          {HIERARCHY_VERTICAL_LINE_COMPONENT}
        </Box>
      )}
      <Box
        data-testid={`ColumnModelForm`}
        display={'flex'}
        alignItems={'center'}
        sx={{
          gridColumn: isJsonSubColumn ? '2 / span 1' : ' 1 / span 1',
          // Style hack to vertically center our custom checkbox component.
          mb: '-5px',
        }}
      >
        <Checkbox
          label={'Select'}
          hideLabel
          checked={columnModel.isSelected}
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
          my: 'auto',
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
            InputProps={{
              disableInjectingGlobalStyles:
                DISABLE_INJECTING_GLOBAL_STYLES_VALUE,
              sx: fieldSx,
              inputProps: {
                'aria-label': 'Name',
              },
            }}
            disabled={disabled}
            fullWidth
          />
        )}
      </Box>
      <Box my={'auto'}>
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
              inputProps={{
                'aria-label': 'Column Type',
              }}
              sx={fieldSx}
              disabled={disabled}
            >
              {allowedColumnTypes.map(value => {
                return (
                  <MenuItem value={value} key={value}>
                    {getColumnTypeFriendlyName(value)}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        )}
      </Box>
      <Box>
        {isDefaultColumn ? (
          (columnModel as ColumnModelFormData).maximumSize ?? ''
        ) : (
          <TextField
            type={'number'}
            value={(columnModel as ColumnModelFormData).maximumSize ?? ''}
            disabled={disabled || !canHaveSize(columnModel.columnType)}
            InputProps={{
              disableInjectingGlobalStyles:
                DISABLE_INJECTING_GLOBAL_STYLES_VALUE,

              inputProps: {
                'aria-label': 'Maximum Size',
                min: 0,
                max: canHaveSize(columnModel.columnType)
                  ? getMaxSizeForType(columnModel.columnType)
                  : undefined,
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
                  maximumSize: parseInt(e.target.value),
                },
              })
            }}
            fullWidth
          />
        )}
      </Box>
      <Box>
        {isDefaultColumn ? (
          (columnModel as ColumnModelFormData).maximumListLength ?? ''
        ) : (
          <TextField
            type={'number'}
            value={(columnModel as ColumnModelFormData).maximumListLength ?? ''}
            disabled={disabled || !canHaveMaxListLength(columnModel.columnType)}
            onChange={e => {
              dispatch({
                type: 'setColumnModelValue',
                columnModelIndex,
                jsonSubColumnModelIndex: jsonSubColumnIndex,
                value: {
                  ...columnModel,
                  maximumListLength: parseInt(e.target.value),
                },
              })
            }}
            InputProps={{
              disableInjectingGlobalStyles:
                DISABLE_INJECTING_GLOBAL_STYLES_VALUE,
              inputProps: {
                'aria-label': 'Maximum List Length',
              },
              sx: fieldSx,
            }}
            fullWidth
          />
        )}
      </Box>
      <Box>
        {isDefaultColumn ? (
          (columnModel as ColumnModelFormData)?.defaultValue ?? ''
        ) : (
          <TextField
            fullWidth
            value={(columnModel as ColumnModelFormData)?.defaultValue ?? ''}
            disabled={
              disabled ||
              !canHaveDefault(columnModel.columnType, isView, isJsonSubColumn)
            }
            onChange={e => {
              dispatch({
                type: 'setColumnModelValue',
                columnModelIndex,
                jsonSubColumnModelIndex: jsonSubColumnIndex,
                value: {
                  ...columnModel,
                  defaultValue: e.target.value,
                },
              })
            }}
            InputProps={{
              disableInjectingGlobalStyles:
                DISABLE_INJECTING_GLOBAL_STYLES_VALUE,
              inputProps: {
                'aria-label': 'Default Value',
              },
              sx: fieldSx,
            }}
          />
        )}
      </Box>
      <Box>
        <JSONArrayEditorModal
          isShowingModal={isShowingRestrictedValuesModal}
          onConfirm={newValue => {
            dispatch({
              type: 'setColumnModelValue',
              columnModelIndex,
              jsonSubColumnModelIndex: jsonSubColumnIndex,
              value: {
                ...columnModel,
                enumValues: isEmpty(newValue) ? undefined : newValue,
              },
            })
            setIsShowingRestrictedValuesModal(false)
          }}
          onCancel={() => setIsShowingRestrictedValuesModal(false)}
        />
        <TextField
          fullWidth
          value={((columnModel as ColumnModelFormData)?.enumValues ?? []).join(
            ', ',
          )}
          onClick={() => {
            setIsShowingRestrictedValuesModal(true)
          }}
          disabled={
            disabled ||
            !canHaveRestrictedValues(columnModel.columnType, isJsonSubColumn)
          }
          InputProps={{
            disableInjectingGlobalStyles: DISABLE_INJECTING_GLOBAL_STYLES_VALUE,
            // Is readOnly because edits are made with the JSONArrayEditorModal
            readOnly: true,
            sx: fieldSx,
            inputProps: {
              'aria-label': 'Restrict Values',
            },
          }}
        />
      </Box>
      <Box>
        <FormControl fullWidth>
          <Select
            label="Facet Type"
            value={columnModel.facetType}
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
            inputProps={{
              'aria-label': 'Facet Type',
            }}
          >
            {(allowedFacetTypes ?? []).map((value, index) => {
              return (
                <MenuItem value={value} key={index}>
                  {value === undefined ? '' : getFacetTypeFriendlyName(value)}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>
      {isJsonSubColumn && (
        <>
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
              InputProps={{
                disableInjectingGlobalStyles:
                  DISABLE_INJECTING_GLOBAL_STYLES_VALUE,
                sx: fieldSx,
                endAdornment: (
                  <Tooltip
                    title={
                      <React.Fragment>
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
                          This field is for linking the sub-column facet to the
                          corresponding location in the JSON data, so that it
                          can be used as facet filter. The correct selector will
                          point to the key referenced in the sub-column JSON
                          Path.
                        </p>
                      </React.Fragment>
                    }
                  >
                    <InfoTwoTone sx={{ color: 'grey.700' }} />
                  </Tooltip>
                ),
                inputProps: {
                  'aria-label': 'JSON Path',
                },
              }}
            />
          </Box>
        </>
      )}
    </>
  )
}
