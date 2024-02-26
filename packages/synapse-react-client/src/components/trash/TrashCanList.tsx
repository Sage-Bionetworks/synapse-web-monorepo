import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { Table } from 'react-bootstrap'
import { formatDate } from '../../utils/functions/DateFormatter'
import { entityTypeToFriendlyName } from '../../utils/functions/EntityTypeUtils'
import { useGetEntity } from '../../synapse-queries'
import {
  useGetItemsInTrashCanInfinite,
  usePurgeEntities,
  useRestoreEntities,
} from '../../synapse-queries/trash/useTrashCan'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { TrashedEntity } from '@sage-bionetworks/synapse-types'
import { Alert, Button, Typography } from '@mui/material'
import { EntityLink } from '../EntityLink'
import { BlockingLoader, SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import WarningDialog from '../SynapseForm/WarningDialog'
import { Checkbox } from '../widgets/Checkbox'

type TrashCanListItemProps = {
  item: TrashedEntity
  isSelected: boolean
  setIsSelected: (isSelected: boolean) => void
  onRestore: () => void
}

function TrashCanListItem(props: TrashCanListItemProps) {
  const { item, isSelected, setIsSelected, onRestore } = props
  const { data: parentEntity } = useGetEntity(item.originalParentId)
  return (
    <tr>
      <td>
        <Checkbox
          label={`Select ${item.entityId}`}
          hideLabel={true}
          checked={isSelected}
          onChange={setIsSelected}
        />
      </td>
      <td>{item.entityId}</td>
      <td>{item.entityName}</td>
      <td>{entityTypeToFriendlyName(item.entityType)}</td>
      {/* <td>TypePlaceholder</td> */}
      <td>
        <>
          {parentEntity && <EntityLink entity={parentEntity} />} (
          {item.originalParentId})
        </>
      </td>
      <td>{formatDate(dayjs(item.deletedOn))}</td>
      <td>
        <Button size="small" variant="outlined" onClick={onRestore}>
          Restore
        </Button>
      </td>
    </tr>
  )
}

/**
 * Convert an array of Promise results to an array of errors
 */
function toSynapseClientErrorList(
  results: PromiseSettledResult<void>[],
): SynapseClientError[] {
  return results
    .filter(
      (result): result is PromiseRejectedResult => result.status === 'rejected',
    )
    .map(result => result.reason as SynapseClientError)
}

export function TrashCanList() {
  const isMounted = useRef(true)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [errors, setErrors] = useState<SynapseClientError[]>([])

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  })

  /**
   * When a mutation operation settles, update the list of errors and clear the selected set
   */
  function onMutateSettled(
    results?: PromiseSettledResult<void>[],
    error?: SynapseClientError | null,
  ) {
    if (isMounted.current) {
      if (results) {
        setErrors(toSynapseClientErrorList(results))
      } else if (error) {
        setErrors([error])
      }
      setSelected(new Set())
    }
  }

  const { mutate: restore, isPending: isPendingRestore } = useRestoreEntities({
    onSettled: onMutateSettled,
  })
  const { mutate: purge, isPending: isPendingPurge } = usePurgeEntities({
    onSettled: onMutateSettled,
  })

  const isMutating = isPendingRestore || isPendingPurge

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetItemsInTrashCanInfinite({
      throwOnError: true,
    })

  const items = data?.pages.flatMap(page => page.results) ?? []

  const isAllSelected = selected.size === items.length

  const onSelectAll = () => {
    if (isAllSelected) {
      setSelected(new Set())
    } else {
      setSelected(new Set(items.map(item => item.entityId)))
    }
  }

  return (
    <div className="bootstrap-4-backport">
      <BlockingLoader
        show={isMutating}
        headlineText={isPendingPurge ? 'Deleting...' : 'Restoring...'}
      />
      <Typography variant="body1">
        The trash can contains items that were recently deleted. You can recover
        deleted items in the trash can by clicking &quot;Restore&quot;. Items
        will remain in the trash can for 30 days before being automatically
        purged.
      </Typography>
      <WarningDialog
        title="Delete selected items from your Trash?"
        content={
          <Typography variant="body1">
            You can&apos;t undo this action.
          </Typography>
        }
        confirmButtonText="Delete"
        confirmButtonColor="error"
        onConfirm={() => {
          purge(selected)
          setShowDeleteConfirmation(false)
        }}
        onCancel={() => {
          setShowDeleteConfirmation(false)
        }}
        open={showDeleteConfirmation}
      />
      {isLoading && <SynapseSpinner />}
      {!isLoading && items.length === 0 && (
        <Typography variant="body1">Trash Can is currently empty.</Typography>
      )}
      {!isLoading && items.length > 0 && (
        <>
          <Table striped borderless bordered={false}>
            <thead>
              <tr>
                <th>
                  <Checkbox
                    label="Select All"
                    hideLabel={true}
                    checked={isAllSelected}
                    onChange={onSelectAll}
                  />
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Entity Type</th>
                {/* <th>TypePlaceholder</th> */}
                <th>Location</th>
                <th>Deleted On</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <TrashCanListItem
                  key={item.entityId}
                  item={item}
                  isSelected={selected.has(item.entityId)}
                  setIsSelected={isSelected => {
                    setSelected(selected => {
                      if (isSelected) {
                        selected.add(item.entityId)
                      } else {
                        selected.delete(item.entityId)
                      }
                      return new Set(selected)
                    })
                  }}
                  onRestore={() => {
                    restore(item.entityId)
                    selected.delete(item.entityId)
                  }}
                />
              ))}
            </tbody>
          </Table>
          {errors.length > 0 && (
            <Alert severity={'error'} sx={{ mb: 1 }}>
              The following errors were encountered:
              <ul style={{ marginBottom: 0 }}>
                {errors.map(error => (
                  <li key={error.message}>{error.message}</li>
                ))}
              </ul>
            </Alert>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '10px',
            }}
          >
            {hasNextPage && (
              <Button
                variant="contained"
                disabled={isFetchingNextPage}
                onClick={() => {
                  fetchNextPage()
                }}
              >
                Load More
              </Button>
            )}
            <div style={{ margin: 'auto' }} />
            <Button
              variant="contained"
              color="error"
              disabled={selected.size === 0}
              onClick={() => {
                setShowDeleteConfirmation(true)
              }}
            >
              Delete Selected
            </Button>
            <Button
              variant="outlined"
              disabled={selected.size === 0}
              onClick={() => {
                restore(selected)
              }}
            >
              Restore Selected
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
