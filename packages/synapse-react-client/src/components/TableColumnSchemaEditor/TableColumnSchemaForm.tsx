import {
  ColumnModel,
  ColumnTypeEnum,
  EntityType,
  VIEW_CONCRETE_TYPE_VALUES,
  ViewScope,
} from '@sage-bionetworks/synapse-types'
import { atom, Provider, useAtomValue, useSetAtom } from 'jotai'
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import {
  getIsAllSelected,
  getNumberOfSelectedItems,
  tableColumnSchemaFormDataAtom,
} from './TableColumnSchemaFormReducer'
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Checkbox as MUICheckbox,
  styled,
  Typography,
} from '@mui/material'
import { groupBy, isEqual, noop, omit, times } from 'lodash-es'
import { selectAtom, useAtomCallback } from 'jotai/utils'
import ColumnModelForm from './ColumnModelForm'
import AddToList from '../../assets/icons/AddToList'
import { AddCircleTwoTone, North, South } from '@mui/icons-material'
import IconSvg from '../IconSvg'
import {
  convertToConcreteEntityType,
  entityTypeToFriendlyName,
} from '../../utils/functions/EntityTypeUtils'
import {
  getAllowedColumnTypes,
  transformColumnModelsToFormData,
} from './TableColumnSchemaEditorUtils'
import {
  useGetAnnotationColumnModels,
  useGetDefaultColumnModels,
} from '../../synapse-queries/table/useColumnModel'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { displayToast } from '../ToastMessage'
import { StyledComponent } from '@emotion/styled/dist/emotion-styled.cjs'
import ImportTableColumnsButton from './ImportTableColumnsButton'
import { SetOptional } from 'type-fest'
import { validateColumnModelFormData } from './Validators/ColumnModelValidator'
import { ZodError, ZodIssue } from 'zod'
import pluralize from 'pluralize'

const COLUMN_SCHEMA_FORM_GRID_TEMPLATE_COLUMNS =
  '18px 18px 1.75fr 1.75fr 0.75fr 1fr 1.25fr 1.25fr 1fr'
const GRID_CONTAINER_Y_MARGIN_PX = 6
export const HIERARCHY_VERTICAL_LINE_COMPONENT = (
  <Box
    sx={{
      width: '1px',
      height: `calc(100% + 2 * ${GRID_CONTAINER_Y_MARGIN_PX}px)`,
      backgroundColor: 'grey.400',
      marginLeft: '8px',
    }}
  />
)
export const HIERARCHY_END_COMPONENT = (
  <Box
    sx={theme => ({
      width: '50%',
      height: '60%',
      borderLeft: `1px solid ${theme.palette.grey[400]}`,
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
      marginLeft: '8px',
      marginBottom: 'auto',
      marginRight: '0',
      borderBottomLeftRadius: '5px',
    })}
  />
)

export type SubmitHandle = {
  // Allow the parent component to trigger a submit of the form, so this may be embedded in an arbitrary modal.
  submit: () => void
  // Imperative handle to get the data out of the form for SWC compatibility
  getEditedColumnModels: () => SetOptional<ColumnModel, 'id'>[]
  // Used to check if all form data is valid. Returns the current validity state
  validate: () => boolean
}

type TableColumnSchemaFormProps = {
  /* The type of the Table, which determines various schema restrictions and form functionality */
  entityType: EntityType
  /* If this is an entity view, the ViewScope can be used to determine the default column models and fetch annotation column models */
  viewScope?: ViewScope
  initialData?: SetOptional<ColumnModel, 'id'>[]
  onSubmit?: (newColumnModels: SetOptional<ColumnModel, 'id'>[]) => void
  isSubmitting?: boolean
}

const ColumnHeader: StyledComponent<BoxProps> = styled(Box, {
  label: 'ColumnHeader',
})({
  fontWeight: 700,
})

function TableColumnSchemaFormInternal(
  props: TableColumnSchemaFormProps,
  ref: React.ForwardedRef<SubmitHandle>,
) {
  const {
    initialData,
    entityType,
    viewScope,
    onSubmit = noop,
    isSubmitting = false,
  } = props

  const numColumnModels = useAtomValue(
    useMemo(() => atom(get => get(tableColumnSchemaFormDataAtom).length), []),
  )

  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)
  const [validationErrors, setValidationErrors] = useState<ZodError | null>(
    null,
  )

  // useAtomCallback will let us imperatively read the form data, instead of tracking it in state and triggering a full re-render of the form when any data changes
  const readFormData = useAtomCallback(
    useCallback(get => {
      return get(tableColumnSchemaFormDataAtom)
    }, []),
  )
  const concreteTableType = convertToConcreteEntityType(entityType)
  const isView = VIEW_CONCRETE_TYPE_VALUES.includes(
    concreteTableType as (typeof VIEW_CONCRETE_TYPE_VALUES)[number],
  )
  const hasAnnotationColumnModels = isView,
    hasDefaultColumnModels = isView

  const { data: defaultColumnModels, isLoading: isLoadingDefaultColumns } =
    useGetDefaultColumnModels(
      viewScope?.viewEntityType!,
      viewScope?.viewTypeMask,
      {
        enabled: hasDefaultColumnModels,
        staleTime: Infinity, // The default column models will never change
      },
    )

  const {
    data: annotationColumnModels,
    isLoading: isLoadingAnnotationColumns,
  } = useGetAnnotationColumnModels(
    {
      viewScope: viewScope!,
      includeDerivedAnnotations: true,
      concreteType:
        'org.sagebionetworks.repo.model.table.ViewColumnModelRequest',
    },
    {
      enabled: hasAnnotationColumnModels,
    },
  )

  /**
   * Set the initialData in the form state atom on mount, if it exists and we have no data.
   */
  useEffect(() => {
    if (initialData && !isLoadingDefaultColumns) {
      dispatch({
        type: 'setValue',
        value: transformColumnModelsToFormData(
          initialData,
          defaultColumnModels ?? [],
        ),
      })
    }
    // Don't re-run if initial data changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingDefaultColumns])

  const validateInternal = useCallback(() => {
    const result = validateColumnModelFormData(readFormData())
    if (result.success) {
      setValidationErrors(null)
    } else {
      setValidationErrors(result.error)
    }
    return result
  }, [readFormData])

  useImperativeHandle(
    ref,
    () => {
      return {
        submit() {
          const result = validateInternal()
          if (result.success) {
            onSubmit(result.data)
          }
        },
        getEditedColumnModels() {
          const result = validateInternal()
          if (!result.success) {
            throw new Error('Column models were not valid')
          }
          return result.data
        },
        validate() {
          const result = validateInternal()
          return result.success
        },
      }
    },
    [onSubmit, validateInternal],
  )

  // Generic function to add a set of columns to the schema (e.g. default columns, annotation columns)
  const addColumnSet = useCallback(
    (newColumns: SetOptional<ColumnModel, 'id'>[]) => {
      const currentFormData = readFormData()
      let columnsToAdd = newColumns.filter(
        (cm: SetOptional<ColumnModel, 'id'>) => {
          // Don't add columns that cannot be added (for example, Views cannot have JSON columns)
          if (
            !getAllowedColumnTypes(isView, false).includes(
              cm.columnType as ColumnTypeEnum,
            )
          ) {
            return false
          }
          // Only add columns that are not already present
          // Use the name column to match because the ID may vary, e.g. if the facetType was changed
          return !currentFormData.find(fd => fd.name === cm.name)
        },
      )
      // Remove the ID column so TableColumnSchemaUtils.createTableUpdateTransactionRequest recognizes these as new columns
      // createTableUpdateTransactionRequest uses the existing column ID to track column updates in the table, so any new columns should have no ID
      // The user can also modify these columns before submitting them, so the ID may not be accurate when we end up submitting them
      columnsToAdd = columnsToAdd.map(cm => omit(cm, ['id']))
      if (columnsToAdd.length > 0) {
        dispatch({
          type: 'setValue',
          value: [
            ...currentFormData,
            ...transformColumnModelsToFormData(
              columnsToAdd,
              defaultColumnModels,
            ),
          ],
        })
        displayToast(
          `${columnsToAdd.length} ${pluralize(
            'column',
            columnsToAdd.length,
          )} added to schema.`,
          'success',
        )
      } else {
        displayToast(
          'No columns added. All columns to add are present in the column schema.',
          'info',
        )
      }
    },
    [defaultColumnModels, dispatch, isView, readFormData],
  )

  const addDefaultColumns = useCallback(() => {
    if (defaultColumnModels) {
      addColumnSet(defaultColumnModels)
    }
  }, [defaultColumnModels, addColumnSet])

  const addAnnotationColumns = useCallback(() => {
    if (annotationColumnModels) {
      addColumnSet(annotationColumnModels)
    }
  }, [annotationColumnModels, addColumnSet])

  // Put the errors into a map of columnModelIndex -> errors
  const errorsByColumnModel = useMemo(() => {
    if (validationErrors) {
      return groupBy(validationErrors.errors, e => e.path[0])
    }
    return {}
  }, [validationErrors])

  return (
    <Box
      component={'form'}
      sx={{
        py: 2.5,
      }}
    >
      <TableColumnSchemaFormActions disabled={isSubmitting} />
      <Box
        display={'grid'}
        sx={{
          gridTemplateColumns: COLUMN_SCHEMA_FORM_GRID_TEMPLATE_COLUMNS,
          py: 2.5,
        }}
        gap={'8px'}
      >
        <ColumnHeader>{/* Checkbox */}</ColumnHeader>
        <ColumnHeader sx={{ gridColumn: '2 / span 2' }}>
          Column Name
        </ColumnHeader>
        <ColumnHeader>Column Type</ColumnHeader>
        <ColumnHeader>Size</ColumnHeader>
        <ColumnHeader>Max List Length</ColumnHeader>
        <ColumnHeader>Default Value</ColumnHeader>
        <ColumnHeader>Restrict Values</ColumnHeader>
        <ColumnHeader>Facet</ColumnHeader>
        <Box
          sx={{
            gridColumn: '1 / span 10',
            backgroundColor: 'grey.300',
            height: '2px',
          }}
        />
        {times(numColumnModels, index => {
          return (
            <TableColumnSchemaFormRow
              entityType={entityType}
              columnModelIndex={index}
              disabled={isSubmitting}
              key={index}
              columnModelValidationErrors={errorsByColumnModel[index]}
            />
          )
        })}
      </Box>

      <Box display={'flex'} gap={1}>
        <Button
          variant={'outlined'}
          onClick={() => {
            dispatch({ type: 'appendColumn' })
          }}
          startIcon={<AddCircleTwoTone />}
          disabled={isSubmitting}
        >
          Add Column
        </Button>

        {hasDefaultColumnModels && (
          <Button
            variant={'outlined'}
            startIcon={
              isLoadingDefaultColumns ? (
                <SynapseSpinner />
              ) : (
                <AddCircleTwoTone />
              )
            }
            onClick={() => {
              addDefaultColumns()
            }}
            disabled={isLoadingDefaultColumns || isSubmitting}
          >
            Add Default {entityTypeToFriendlyName(entityType)} Columns
          </Button>
        )}

        {hasAnnotationColumnModels && (
          <Button
            variant={'outlined'}
            startIcon={
              isLoadingAnnotationColumns ? (
                <SynapseSpinner />
              ) : (
                <AddCircleTwoTone />
              )
            }
            disabled={isLoadingAnnotationColumns || isSubmitting}
            onClick={() => {
              addAnnotationColumns()
            }}
          >
            Add All Annotations
          </Button>
        )}
        <ImportTableColumnsButton
          onAddColumns={cms => {
            addColumnSet(cms)
          }}
          disabled={isSubmitting}
        />
      </Box>
    </Box>
  )
}

type TableColumnSchemaFormActionsProps = {
  disabled?: boolean
}

function TableColumnSchemaFormActions(
  props: TableColumnSchemaFormActionsProps,
) {
  const { disabled = false } = props
  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)

  const columnModels = useAtomValue(tableColumnSchemaFormDataAtom)
  const allSelected = getIsAllSelected(columnModels)
  const numSelected = getNumberOfSelectedItems(columnModels)

  return (
    <Box display={'flex'} gap={1}>
      <Button
        aria-label={'Select All'}
        variant={'outlined'}
        color={'neutral'}
        onClick={() => {
          dispatch({ type: 'toggleSelectAll' })
        }}
        disabled={disabled || columnModels.length == 0}
      >
        {/*
           MUI Checkbox looks a little different from ours, but it has an indeterminate state
           TODO: reconcile these differences
          */}
        <MUICheckbox
          size={'small'}
          checked={allSelected}
          indeterminate={numSelected > 0 && !allSelected}
          disabled={disabled || columnModels.length == 0}
        />
        <Typography variant="smallText1" color={'text.secondary'}>
          {numSelected} selected
        </Typography>
      </Button>
      <ButtonGroup>
        <Button
          aria-label={'Move Down'}
          variant={'outlined'}
          color={'neutral'}
          onClick={() => {
            dispatch({ type: 'moveDown' })
          }}
          disabled={disabled || numSelected == 0}
        >
          <South fontSize={'small'} />
        </Button>
        <Button
          aria-label={'Move Up'}
          variant={'outlined'}
          color={'neutral'}
          onClick={() => {
            dispatch({ type: 'moveUp' })
          }}
          disabled={disabled || numSelected == 0}
        >
          <North fontSize={'small'} />
        </Button>
      </ButtonGroup>
      <Button
        aria-label={'Delete'}
        variant={'outlined'}
        color={'neutral'}
        onClick={() => {
          dispatch({ type: 'delete' })
        }}
        disabled={disabled || numSelected == 0}
      >
        <IconSvg fontSize={'small'} icon={'delete'} wrap={false} />
      </Button>
    </Box>
  )
}

type TableColumnSchemaFormRowProps = {
  entityType: EntityType
  columnModelIndex: number
  disabled: boolean
  columnModelValidationErrors: ZodIssue[] | null
}

function TableColumnSchemaFormRow(props: TableColumnSchemaFormRowProps) {
  const {
    columnModelIndex,
    entityType,
    disabled,
    columnModelValidationErrors = null,
  } = props
  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)
  const columnModel = useAtomValue(
    useMemo(
      () =>
        selectAtom(
          tableColumnSchemaFormDataAtom,
          formData => formData[columnModelIndex],
          isEqual,
        ),
      [columnModelIndex],
    ),
  )

  // Organize the JSON Subcolumn errors into a map of subcolumn index to errors
  const errorsForSubcolumns = useMemo(() => {
    if (columnModelValidationErrors) {
      const errorsForAllSubcolumns = columnModelValidationErrors.filter(e => {
        return e.path[0] === columnModelIndex && e.path[1] == 'jsonSubColumns'
      })
      return groupBy(errorsForAllSubcolumns, e => e.path[2])
    }
    return {}
  }, [columnModelIndex, columnModelValidationErrors])

  if (!columnModel) {
    return <></>
  }
  const isDefaultColumn = columnModel.isOriginallyDefaultColumn

  return (
    <>
      <ColumnModelForm
        entityType={entityType}
        columnModelIndex={columnModelIndex}
        isDefaultColumn={isDefaultColumn}
        disabled={disabled}
        validationErrors={columnModelValidationErrors}
      />
      {columnModel.columnType === ColumnTypeEnum.JSON &&
        columnModel.jsonSubColumns &&
        columnModel.jsonSubColumns.map((subColumnFacet, index) => (
          <ColumnModelForm
            key={index}
            entityType={entityType}
            columnModelIndex={columnModelIndex}
            jsonSubColumnIndex={index}
            isDefaultColumn={isDefaultColumn}
            disabled={disabled}
            validationErrors={errorsForSubcolumns[index]}
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
          <Box
            sx={{
              gridColumn: '3 / span 5',
            }}
          >
            <Button
              startIcon={<AddToList />}
              variant={'text'}
              disabled={disabled}
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

const TableColumnSchemaFormInternalWithForwardRef = React.forwardRef<
  SubmitHandle,
  TableColumnSchemaFormProps
>(TableColumnSchemaFormInternal)

const TableColumnSchemaFormWrapped = React.forwardRef<
  SubmitHandle,
  TableColumnSchemaFormProps
>(function TableColumnSchemaForm(props: TableColumnSchemaFormProps, ref) {
  // Wrap the form in a Jotai provider so that the internal atoms are scoped to just this component instance
  // Use forwardRef to ensure that the ref can be passed along
  return (
    <Provider>
      <TableColumnSchemaFormInternalWithForwardRef {...props} ref={ref} />
    </Provider>
  )
})

export default TableColumnSchemaFormWrapped
