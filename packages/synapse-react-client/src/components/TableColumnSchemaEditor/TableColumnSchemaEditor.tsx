import React, { useCallback, useMemo, useRef } from 'react'
import {
  useGetEntityBundle,
  useUpdateTableColumns,
} from '../../synapse-queries'
import { SkeletonTable } from '../Skeleton'
import { convertToEntityType } from '../../utils/functions/EntityTypeUtils'
import TableColumnSchemaForm, { SubmitHandle } from './TableColumnSchemaForm'
import { Alert, Box, Button } from '@mui/material'
import { getViewScopeForEntity } from './TableColumnSchemaEditorUtils'
import { ColumnModel, ViewScope } from '@sage-bionetworks/synapse-types'
import { SetOptional } from 'type-fest'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { DialogBase } from '../DialogBase'
import { noop } from 'lodash-es'

export type TableColumnSchemaEditorProps = {
  entityId: string
  open: boolean
  onColumnsUpdated?: () => void
  onCancel?: () => void
}

/**
 * Fetches column model data for a Synapse Table and renders a form to edit the column models.
 * @param props
 * @constructor
 */
export default function TableColumnSchemaEditor(
  props: TableColumnSchemaEditorProps,
) {
  const { entityId, open, onColumnsUpdated = noop, onCancel = noop } = props

  const formRef = useRef<SubmitHandle>(null)
  const { data: bundle, isLoading } = useGetEntityBundle(
    entityId,
    undefined,
    {
      includeEntity: true,
      includeTableBundle: true,
    },
    {
      // This data is inserted into a form, so don't refetch it.
      staleTime: Infinity,
      useErrorBoundary: true,
    },
  )

  const entity = bundle?.entity
  const originalColumnModels = bundle?.tableBundle?.columnModels

  const {
    mutate,
    isLoading: isMutating,
    error,
  } = useUpdateTableColumns({
    onSuccess: () => {
      onColumnsUpdated()
    },
  })

  const onSubmit = useCallback(
    (newColumnModels: SetOptional<ColumnModel, 'id'>[]) => {
      // Update the table schema with the new column models.
      mutate({
        entityId,
        originalColumnModels: originalColumnModels!,
        newColumnModels: newColumnModels,
      })
    },
    [entityId, mutate, originalColumnModels],
  )

  const viewScope: ViewScope | undefined = useMemo(() => {
    if (!entity) {
      return undefined
    }
    return getViewScopeForEntity(entity)
  }, [entity])

  if (isLoading || !bundle || !entity) {
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
    <DialogBase
      open={open}
      onCancel={onCancel}
      maxWidth={'xl'}
      title={'Edit Columns'}
      content={
        <>
          <TableColumnSchemaForm
            ref={formRef}
            entityType={convertToEntityType(entity.concreteType)}
            viewScope={viewScope}
            initialData={bundle?.tableBundle?.columnModels}
            isSubmitting={isMutating}
            onSubmit={formData => {
              onSubmit(formData)
            }}
          />
          {error && (
            <Alert severity={'error'} sx={{ my: 2 }}>
              {error?.message}
            </Alert>
          )}
        </>
      }
      actions={
        <Box
          display={'flex'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          width={'100%'}
          gap={2.25}
        >
          <Button variant={'outlined'} onClick={onCancel} disabled={isMutating}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              if (formRef.current) {
                formRef.current.submit()
              }
            }}
            disabled={isMutating}
            sx={{ my: 2 }}
            startIcon={isMutating ? <SynapseSpinner /> : undefined}
          >
            {isMutating ? 'Saving...' : 'Save'}
          </Button>
        </Box>
      }
    />
  )
}
