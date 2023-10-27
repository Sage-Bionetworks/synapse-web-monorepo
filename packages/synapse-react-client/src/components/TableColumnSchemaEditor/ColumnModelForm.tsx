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

type ColumnOrSubcolumnFormProps = {
  entityType: EntityType
  columnModelIndex: number
  jsonSubColumnIndex?: number
}
const jsonSubColumnFieldSx: SxProps = {
  height: '28px',
  fontSize: '12px',
}
const topLevelColumnModelFieldSx: SxProps = {
  height: '38px',
  fontSize: '14px',
}

export default function ColumnModelForm(props: ColumnOrSubcolumnFormProps) {
  const { columnModelIndex, jsonSubColumnIndex, entityType } = props
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
        display={'flex'}
        alignItems={'center'}
        sx={{
          gridColumn: isJsonSubColumn ? '2 / span 1' : ' 1 / span 1',
        }}
      >
        <Checkbox
          label={'Select'}
          hideLabel
          checked={columnModel.isSelected}
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
          gridColumn: isJsonSubColumn
            ? /* If this is a JSON Subcolumn, we reduce the width of this grid column to create space to render the visual hierarchical line */
              '3 / span 1'
            : /* Otherwise, span across both grid columns  */
              '2 / span 2',
        }}
      >
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
            sx: fieldSx,
            inputProps: {
              'aria-label': 'Name',
            },
          }}
          fullWidth
        />
      </Box>
      <Box>
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
            sx={fieldSx}
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
      </Box>
      <Box>
        <TextField
          type={'number'}
          value={(columnModel as ColumnModelFormData).maximumSize ?? ''}
          disabled={!canHaveSize(columnModel.columnType)}
          InputProps={{
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
      </Box>
      <Box>
        <TextField
          type={'number'}
          value={(columnModel as ColumnModelFormData).maximumListLength ?? ''}
          disabled={!canHaveMaxListLength(columnModel.columnType)}
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
            inputProps: {
              'aria-label': 'Maximum List Length',
            },
            sx: fieldSx,
          }}
          fullWidth
        />
      </Box>
      <Box>
        <TextField
          fullWidth
          value={(columnModel as ColumnModelFormData)?.defaultValue ?? ''}
          disabled={
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
            inputProps: {
              'aria-label': 'Default Value',
            },
            sx: fieldSx,
          }}
        />
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
            !canHaveRestrictedValues(columnModel.columnType, isJsonSubColumn)
          }
          InputProps={{
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
            disabled={allowedFacetTypes === null}
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
          <Box>{HIERARCHY_VERTICAL_LINE_COMPONENT}</Box>
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
              fullWidth
              InputProps={{
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
