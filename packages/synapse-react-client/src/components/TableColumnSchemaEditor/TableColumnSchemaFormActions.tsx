import { useAtomValue, useSetAtom } from 'jotai/index'
import {
  getIsAllSelected,
  getNumberOfSelectedItems,
  tableColumnSchemaFormDataAtom,
} from './TableColumnSchemaFormReducer'
import React, { useState } from 'react'
import { getNumberOfColumnModelsWithValuesBelowMinimumRecommendedSizes } from './TableColumnSchemaEditorUtils'
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Link,
  Tooltip,
  Typography,
} from '@mui/material'
import { Healing, North, South } from '@mui/icons-material'
import IconSvg from '../IconSvg'
import { ConfirmationDialog } from '../ConfirmationDialog'
import pluralize from 'pluralize'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { useGetAnnotationColumnModels } from '../../synapse-queries/table/useColumnModel'

export const USE_RECOMMENDED_SIZES_BUTTON_TEXT = 'Use Recommended Sizes'

const RECOMMENDED_SIZES_CONFIRMATION_MODAL_CONTENT = (
  <>
    <Typography variant={'body1'}>
      Proceeding will adjust columns with size values that are shorter than
      longest data in your annotations.
    </Typography>
    <Typography variant={'body1'}>
      Changed size values will appear in blue. Hover to see the previous value.
    </Typography>
    <Typography variant={'body1'}>
      Changes are saved only after clicking “Save” in the Schema editor. Click
      “Cancel” to discard unsaved changes.
    </Typography>
  </>
)
type TableColumnSchemaFormActionsProps = {
  disabled?: boolean
  annotationColumnModelsQuery: ReturnType<typeof useGetAnnotationColumnModels>
}

export function TableColumnSchemaFormActions(
  props: TableColumnSchemaFormActionsProps,
) {
  const { disabled = false, annotationColumnModelsQuery } = props
  const dispatch = useSetAtom(tableColumnSchemaFormDataAtom)

  const columnModels = useAtomValue(tableColumnSchemaFormDataAtom)
  const allSelected = getIsAllSelected(columnModels)
  const numSelected = getNumberOfSelectedItems(columnModels)

  const [
    showUseRecommendedSizesConfirmationDialog,
    setShowUseRecommendedSizesConfirmationDialog,
  ] = useState(false)

  const showUseRecommendedSizesButton =
    annotationColumnModelsQuery.isLoading || annotationColumnModelsQuery.data
  const numberOfColumnsBelowRecommendedSizes = annotationColumnModelsQuery.data
    ? getNumberOfColumnModelsWithValuesBelowMinimumRecommendedSizes(
        columnModels,
        annotationColumnModelsQuery.data,
      )
    : 0

  return (
    <Box display={'flex'} alignItems={'flex-start'} gap={1}>
      <Button
        aria-label={'Select All'}
        variant={'outlined'}
        color={'neutral'}
        onClick={() => {
          dispatch({ type: 'toggleSelectAll' })
        }}
        sx={{ alignSelf: 'stretch' }}
        disabled={disabled || columnModels.length == 0}
      >
        <Checkbox
          sx={{ mr: 1 }}
          checked={allSelected}
          indeterminate={numSelected > 0 && !allSelected}
          disabled={disabled || columnModels.length == 0}
        />
        <Typography variant="smallText1" color={'text.secondary'}>
          {numSelected} selected
        </Typography>
      </Button>
      <ButtonGroup sx={{ alignSelf: 'stretch' }}>
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
        sx={{ alignSelf: 'stretch' }}
        disabled={disabled || numSelected == 0}
      >
        <IconSvg fontSize={'small'} icon={'delete'} wrap={false} />
      </Button>
      <Box flexGrow={1}>{/* spacer */}</Box>
      <Link
        sx={{ display: 'block', py: '10px', mr: '10px', textAlign: 'right' }}
      >
        About schemas and column types
      </Link>
      {showUseRecommendedSizesButton && (
        <>
          <ConfirmationDialog
            open={showUseRecommendedSizesConfirmationDialog}
            onConfirm={() => {
              dispatch({
                type: 'updateColumnSizesToRecommendedValues',
                annotationColumnModels: annotationColumnModelsQuery.data!,
              })
              setShowUseRecommendedSizesConfirmationDialog(false)
            }}
            onCancel={() => {
              setShowUseRecommendedSizesConfirmationDialog(false)
            }}
            title={`This will change ${numberOfColumnsBelowRecommendedSizes.toLocaleString()} ${pluralize(
              'column',
              numberOfColumnsBelowRecommendedSizes,
            )} in this schema`}
            content={RECOMMENDED_SIZES_CONFIRMATION_MODAL_CONTENT}
            confirmButtonProps={{
              children: USE_RECOMMENDED_SIZES_BUTTON_TEXT,
            }}
          />
          <Tooltip
            title={
              numberOfColumnsBelowRecommendedSizes > 0
                ? ''
                : 'All schema values meet the minimum recommended sizes.'
            }
          >
            <Box>
              <Button
                sx={{ height: '100%' }}
                variant={'outlined'}
                startIcon={
                  annotationColumnModelsQuery.isLoading ? (
                    <SynapseSpinner />
                  ) : (
                    <Healing />
                  )
                }
                onClick={() => {
                  setShowUseRecommendedSizesConfirmationDialog(true)
                }}
                disabled={
                  annotationColumnModelsQuery.isLoading ||
                  numberOfColumnsBelowRecommendedSizes == 0
                }
              >
                Use Recommended Sizes
              </Button>
            </Box>
          </Tooltip>
        </>
      )}
    </Box>
  )
}
