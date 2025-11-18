import {
  deleteEvaluation,
  getEvaluationPermissions,
} from '@/synapse-client/SynapseClient'
import { RequiredProperties } from '@/utils'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  Evaluation,
  UserEvaluationPermissions,
} from '@sage-bionetworks/synapse-types'
import { MouseEvent, useEffect, useState } from 'react'
import { ErrorBanner } from '../error/ErrorBanner'
import IconSvg from '../IconSvg/IconSvg'
import WarningDialog from '../SynapseForm/WarningDialog'
import { CreatedOnByUserDiv } from './CreatedOnByUserDiv'

export type ExistingEvaluation = RequiredProperties<
  Evaluation,
  'id' | 'etag' | 'createdOn' | 'contentSource' | 'ownerId'
>

export type EvaluationCardProps = {
  /** properties of the Evaluation to show*/
  evaluation: ExistingEvaluation
  /** Callback when the Edit option in the dropdown is clicked*/
  onEdit: () => void
  /** Callback when the Modify Access option in the dropdown is clicked*/
  onModifyAccess: () => void
  /** Callback when the Submit button is clicked*/
  onSubmit: () => void
  /** Callback when the Delete option is successful */
  onDeleteSuccess: () => void
}

/**
 * This component is currently only intended to be used in Synapse.org.
 * For this reason, the dropdown menu items are unimplemented as no components
 * in this project implement their behavior. The dropdown options are also
 * not shown if the current user does not have permissions for the action
 *
 * All Evaluation metadata must be provided to this component; it will not
 * retrieve an Evaluation via a REST API call
 */
export function EvaluationCard({
  evaluation,
  onEdit,
  onModifyAccess,
  onSubmit,
  onDeleteSuccess,
}: EvaluationCardProps) {
  const { accessToken } = useSynapseContext()
  const [error, setError] = useState<SynapseClientError>()
  const [permissions, setPermissions] = useState<UserEvaluationPermissions>()

  useEffect(() => {
    //clear error
    setError(undefined)

    getEvaluationPermissions(evaluation.id, accessToken)
      .then(retrievedPermissions => {
        setPermissions(retrievedPermissions)
      })
      .catch(error => setError(error))
  }, [evaluation, accessToken])

  const onDelete = () => {
    setError(undefined)
    deleteEvaluation(evaluation.id, accessToken)
      .then(onDeleteSuccess)
      .catch(setError)
  }

  return (
    <div className="evaluation-card">
      <Card>
        <CardContent sx={{ p: 3 }}>
          {error && <ErrorBanner error={error} />}

          {permissions && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <label>EVALUATION QUEUE</label>
                <EvaluationCardDropdown
                  permissions={permissions}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  onModifyAccess={onModifyAccess}
                />
              </Box>

              <h4>
                {evaluation.name} ({evaluation.id})
              </h4>

              <label>Description</label>
              <p>{evaluation.description}</p>
              <label>Instructions</label>
              <p>{evaluation.submissionInstructionsMessage}</p>
              <CreatedOnByUserDiv
                userId={evaluation.ownerId}
                date={new Date(evaluation.createdOn)}
              />
              {permissions?.canSubmit && (
                <Button
                  className="submit-button"
                  color="primary"
                  variant="contained"
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

type EvaluationCardDropdownProps = {
  permissions: UserEvaluationPermissions
  onEdit: () => void
  onModifyAccess: () => void
  onDelete: () => void
}

function EvaluationCardDropdown({
  permissions,
  onEdit,
  onModifyAccess,
  onDelete,
}: EvaluationCardDropdownProps) {
  const [deleteWarningShow, setDeleteWarningShow] = useState<boolean>(false)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  if (
    !(
      permissions.canEdit ||
      permissions.canChangePermissions ||
      permissions.canDelete
    )
  ) {
    return null
  }
  return (
    <>
      {permissions?.canDelete && (
        <WarningDialog
          title="Delete Evaluation Queue"
          content="Are you sure you want to delete the Evaluation Queue?"
          open={deleteWarningShow}
          confirmButtonText="Delete"
          onConfirm={() => {
            onDelete()
            setDeleteWarningShow(false)
          }}
          onConfirmCallbackArgs={[]}
          onCancel={() => {
            setDeleteWarningShow(false)
          }}
          confirmButtonColor="error"
        />
      )}
      <IconButton onClick={handleClick} aria-label="Options">
        <IconSvg icon="verticalEllipsis" wrap={false} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{ paper: { sx: { minWidth: '120px' } } }}
      >
        {permissions.canEdit && (
          <MenuItem
            role="menuitem"
            onClick={() => {
              handleClose()
              onEdit()
            }}
          >
            Edit
          </MenuItem>
        )}
        {permissions.canChangePermissions && (
          <MenuItem
            role="menuitem"
            onClick={() => {
              handleClose()
              onModifyAccess()
            }}
          >
            Modify Access
          </MenuItem>
        )}
        {/* MUI Menu cannot have a fragment child, so we split the divider and Delete MenuItem into two separate statements */}
        {permissions.canDelete && <Divider />}
        {permissions.canDelete && (
          <MenuItem
            role="menuitem"
            onClick={() => {
              handleClose()
              setDeleteWarningShow(true)
            }}
          >
            Delete
          </MenuItem>
        )}
      </Menu>
    </>
  )
}

export default EvaluationCard
