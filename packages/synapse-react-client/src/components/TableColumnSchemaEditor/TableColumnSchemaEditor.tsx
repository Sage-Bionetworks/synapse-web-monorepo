import React, { useEffect, useMemo } from 'react'
import {
  useGetEntity,
  useGetQueryResultBundleWithAsyncStatus,
} from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_COLUMN_MODELS } from '../../utils/SynapseConstants'
import {
  ColumnModel,
  ColumnTypeEnum,
  EntityType,
  FacetType,
  JsonSubColumnModel,
  VIEW_CONCRETE_TYPE_VALUES,
} from '@sage-bionetworks/synapse-types'
import { Checkbox } from '../widgets/Checkbox'
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox as MUICheckbox,
  FormControl,
  MenuItem,
  Select,
  SxProps,
  TextField,
  Typography,
} from '@mui/material'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import AddToList from '../../assets/icons/AddToList'
import { SkeletonTable } from '../Skeleton'
import {
  ColumnModelFormData,
  getIsAllSelected,
  getNumberOfSelectedItems,
  JsonSubColumnModelFormData,
  tableColumnSchemaFormDataAtom,
} from './TableColumnSchemaFormReducer'
import { atom, useAtomValue, useSetAtom } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { isEmpty, isEqual, times } from 'lodash-es'
import {
  convertToConcreteEntityType,
  convertToEntityType,
} from '../../utils/functions/EntityTypeUtils'
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
import { North, South } from '@mui/icons-material'
import IconSvg from '../IconSvg'
import TextFieldCommaSeparatedInput from './TextFieldCommaSeparatedInput'

const COLUMN_SCHEMA_FORM_GRID_TEMPLATE_COLUMNS =
  '18px 18px 2fr 2fr 0.75fr 1fr 1fr 1fr 1fr'

const GRID_CONTAINER_Y_MARGIN_PX = 6

const HIERARCHY_VERTICAL_LINE_COMPONENT = (
  <Box
    sx={{
      width: '1px',
      height: `calc(100% + 2 * ${GRID_CONTAINER_Y_MARGIN_PX}px)`,
      backgroundColor: 'grey.400',
      marginLeft: '8px',
    }}
  />
)

const HIERARCHY_END_COMPONENT = (
  <Box
    sx={theme => ({
      width: '50%',
      height: '60%',
      borderLeft: `1px solid ${theme.palette.grey[400]}`,
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
      marginLeft: '8px',
      marginBottom: 'auto',
      marginRight: '0',
    })}
  />
)

type TableColumnSchemaEditorProps = {
  entityId: string
}

type TableColumnSchemaFormProps = {
  /* The type of the Table, which determines various schema restrictions and form functionality */
  entityType: EntityType
  initialData?: ColumnModel[]
}

export default function TableColumnSchemaEditor(
  props: TableColumnSchemaEditorProps,
) {
  const { entityId } = props

  const { data: entity, isLoading: isLoadingEntity } = useGetEntity(entityId)
  const { data: _queryResultBundle, isLoading: isLoadingColumnModels } =
    useGetQueryResultBundleWithAsyncStatus(
      {
        entityId,
        query: {
          sql: 'SELECT * FROM ${entityId}',
        },
        partMask: BUNDLE_MASK_QUERY_COLUMN_MODELS,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      },
      {
        // This data is inserted into an editor, so don't refetch it.
        staleTime: Infinity,
        useErrorBoundary: true,
      },
    )

  const isLoading = isLoadingEntity || isLoadingColumnModels

  // TODO: the hook above is not returning a stable reference. this is unexpected.
  const queryResultBundle = useDeepCompareMemoize(_queryResultBundle)

  if (isLoading || !entity) {
    return (
      <SkeletonTable
        numRows={8}
        numCols={7}
        rowHeight={'50px'}
        fullWidthCells
      />
    )
  }
  return (
    <TableColumnSchemaForm
      entityType={convertToEntityType(entity.concreteType)}
      initialData={queryResultBundle?.responseBody?.columnModels}
    />
  )
}

function TableColumnSchemaFormActions() {
  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)

  const columnModels = useAtomValue(tableColumnSchemaFormDataAtom)
  const allSelected = getIsAllSelected(columnModels)
  const numSelected = getNumberOfSelectedItems(columnModels)

  return (
    <Box display={'flex'} gap={1}>
      <Button
        variant={'outlined'}
        color={'neutral'}
        onClick={() => {
          dispatch({ type: 'toggleSelectAll' })
        }}
      >
        {/*
           MUI Checkbox looks a little different from ours, but it has an indeterminate state
           TODO: reconcile these differences
          */}
        <MUICheckbox
          size={'small'}
          checked={allSelected}
          indeterminate={numSelected > 0 && !allSelected}
        />
        <Typography variant="smallText1" color={'text.secondary'}>
          {numSelected} selected
        </Typography>
      </Button>
      <ButtonGroup>
        <Button
          variant={'outlined'}
          color={'neutral'}
          onClick={() => {
            dispatch({ type: 'moveDown' })
          }}
          disabled={numSelected == 0}
        >
          <South fontSize={'small'} />
        </Button>
        <Button
          variant={'outlined'}
          color={'neutral'}
          onClick={() => {
            dispatch({ type: 'moveUp' })
          }}
          disabled={numSelected == 0}
        >
          <North fontSize={'small'} />
        </Button>
      </ButtonGroup>
      <Button
        variant={'outlined'}
        color={'neutral'}
        onClick={() => {
          dispatch({ type: 'delete' })
        }}
        disabled={numSelected == 0}
      >
        <IconSvg fontSize={'small'} icon={'delete'} wrap={false} />
      </Button>
    </Box>
  )
}

function TableColumnSchemaForm(props: TableColumnSchemaFormProps) {
  const { initialData, entityType } = props

  const numColumnModels = useAtomValue(
    useMemo(() => atom(get => get(tableColumnSchemaFormDataAtom).length), []),
  )

  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)

  useEffect(() => {
    if (initialData) {
      dispatch({
        type: 'setValue',
        value: initialData.map(
          (cm: ColumnModel): ColumnModelFormData => ({
            ...cm,
            jsonSubColumns: cm.jsonSubColumns?.map(
              (jsc: JsonSubColumnModel): JsonSubColumnModelFormData => ({
                ...jsc,
                isSelected: false,
              }),
            ),
            isSelected: false,
          }),
        ),
      })
    }
  }, [])

  return (
    <>
      <TableColumnSchemaFormActions />
      <Box
        display={'grid'}
        sx={{
          gridTemplateColumns: COLUMN_SCHEMA_FORM_GRID_TEMPLATE_COLUMNS,
          py: 1.25,
          fontWeight: 700,
          borderBottom: '2px solid',
          borderColor: 'grey.300',
        }}
        gap={'8px'}
      >
        <Box>{/* Checkbox */}</Box>
        <Box sx={{ gridColumn: '2 / span 2' }}>Column Name</Box>
        <Box>Column Type</Box>
        <Box>Size</Box>
        <Box>Max List Length</Box>
        <Box>Default Value</Box>
        <Box>Restrict Values</Box>
        <Box>Facet</Box>
        {times(numColumnModels, index => {
          return (
            <TableColumnSchemaFormRow
              entityType={entityType}
              columnModelIndex={index}
              key={index}
            />
          )
        })}
      </Box>

      <Button
        onClick={
          () => {
            dispatch({ type: 'appendColumn' })
          }
          // append({
          //   id: '',
          //   name: '',
          //   columnType: ColumnTypeEnum.STRING,
          //   isSelected: false,
          // })
        }
      >
        Add Column
      </Button>
      {/*  Add / import buttons here  */}
    </>
  )
}

type ColumnOrSubcolumnFormProps = {
  entityType: EntityType
  columnModelIndex: number
  jsonSubColumnIndex?: number
}

const jsonSubColumnFieldSx: SxProps = {
  height: '32px',
  fontSize: '13px',
}

const topLevelColumnModelFieldSx: SxProps = {
  height: '42px',
  fontSize: '14px',
}

function ColumnOrSubcolumnForm(props: ColumnOrSubcolumnFormProps) {
  const { columnModelIndex, jsonSubColumnIndex, entityType } = props
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
          gridColumn: isJsonSubColumn ? '2 / span 1' : ' 1/span 1',
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
          /* To create space to render the visual line for JSON Subcolumns, we reduce the width of this grid column*/
          gridColumn: isJsonSubColumn ? '3 / span 1' : '2 / span 2',
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
          }}
          fullWidth
        />
      </Box>
      <Box>
        <FormControl fullWidth>
          <Select
            label="ColumnType"
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
              min: 0,
              max:
                canHaveSize(columnModel.columnType) &&
                getMaxSizeForType(columnModel.columnType),
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
            sx: fieldSx,
          }}
        />
      </Box>
      <Box>
        <TextFieldCommaSeparatedInput
          fullWidth
          value={(columnModel as ColumnModelFormData)?.enumValues ?? []}
          disabled={canHaveRestrictedValues(
            columnModel.columnType,
            isJsonSubColumn,
          )}
          onBlur={newValue => {
            dispatch({
              type: 'setColumnModelValue',
              columnModelIndex,
              jsonSubColumnModelIndex: jsonSubColumnIndex,
              value: {
                ...columnModel,
                enumValues: isEmpty(newValue) ? undefined : newValue,
              },
            })
          }}
          InputProps={{
            sx: fieldSx,
          }}
        />
      </Box>
      <Box>
        <FormControl fullWidth>
          <Select
            label="Facet"
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
              placeholder={'JSONPath'}
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
              }}
            />
            {/* TODO: Help */}
          </Box>
        </>
      )}
    </>
  )
}

type TableColumnSchemaEditorRowProps = {
  entityType: EntityType
  columnModelIndex: number
}

function TableColumnSchemaFormRow(props: TableColumnSchemaEditorRowProps) {
  const { columnModelIndex, entityType } = props
  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)
  const columnModel = useAtomValue(
    useMemo(
      () =>
        selectAtom(
          tableColumnSchemaFormDataAtom,
          v => v[columnModelIndex],
          isEqual,
        ),
      [columnModelIndex],
    ),
  )

  if (!columnModel) {
    return <></>
  }

  return (
    <>
      <ColumnOrSubcolumnForm
        entityType={entityType}
        columnModelIndex={columnModelIndex}
      />
      {columnModel.columnType === ColumnTypeEnum.JSON &&
        columnModel.jsonSubColumns &&
        columnModel.jsonSubColumns.map((subcolumnFacet, index) => (
          <ColumnOrSubcolumnForm
            key={index}
            entityType={entityType}
            columnModelIndex={columnModelIndex}
            jsonSubColumnIndex={index}
          />
        ))}
      {columnModel.columnType === ColumnTypeEnum.JSON && (
        <>
          <Box
            sx={{
              gridColumn: '1 / span 2',
            }}
          >
            {HIERARCHY_END_COMPONENT}
          </Box>
          <Box>
            <Button
              startIcon={<AddToList />}
              variant={'text'}
              onClick={() =>
                dispatch({ type: 'appendJsonSubColumn', columnModelIndex })
              }
            >
              Add sub-column
            </Button>
          </Box>
        </>
      )}
    </>
  )
}

ColumnOrSubcolumnForm.whyDidYouRender = true
