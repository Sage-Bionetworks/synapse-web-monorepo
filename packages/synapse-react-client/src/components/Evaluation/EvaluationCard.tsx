import React, { useEffect, useState } from 'react'
import {
  deleteEvaluation,
  getEvaluationPermissions,
} from '../../synapse-client/SynapseClient'
import { SynapseClientError } from 'synapse-client'
import { Evaluation } from '@sage-bionetworks/synapse-types'
import { Button } from '@mui/material'
import { Card, Col, Dropdown, Row } from 'react-bootstrap'
import { ErrorBanner } from '../error/ErrorBanner'
import { CreatedOnByUserDiv } from './CreatedOnByUserDiv'
import { UserEvaluationPermissions } from '@sage-bionetworks/synapse-types'
import { RequiredProperties } from '../../utils'
import WarningDialog from '../SynapseForm/WarningDialog'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import IconSvg from '../IconSvg/IconSvg'

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
export const EvaluationCard: React.FunctionComponent<EvaluationCardProps> = ({
  evaluation,
  onEdit,
  onModifyAccess,
  onSubmit,
  onDeleteSuccess,
}: EvaluationCardProps) => {
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
    <div className="bootstrap-4-backport evaluation-card">
      <Card>
        <Card.Body>
          {error && <ErrorBanner error={error} />}

          {permissions && (
            <>
              <Row>
                <Col>
                  <label>EVALUATION QUEUE</label>
                </Col>
                <Col>
                  <EvaluationCardDropdown
                    permissions={permissions}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onModifyAccess={onModifyAccess}
                  />
                </Col>
              </Row>

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
        </Card.Body>
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

const EvaluationCardDropdown: React.FunctionComponent<
  EvaluationCardDropdownProps
> = ({ permissions, onEdit, onModifyAccess, onDelete }) => {
  const [deleteWarningShow, setDeleteWarningShow] = useState<boolean>(false)

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
      <Dropdown className="float-right">
        <Dropdown.Toggle
          role="menu"
          aria-label="Options"
          variant="link"
          className="dropdown-no-caret"
        >
          <IconSvg icon="verticalEllipsis" />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight={true}>
          {permissions.canEdit && (
            <Dropdown.Item role="menuitem" onClick={onEdit}>
              Edit
            </Dropdown.Item>
          )}
          {permissions.canChangePermissions && (
            <Dropdown.Item role="menuitem" onClick={onModifyAccess}>
              Modify Access
            </Dropdown.Item>
          )}
          {permissions.canDelete && (
            <>
              <Dropdown.Divider />
              <Dropdown.Item
                role="menuitem"
                onClick={() => setDeleteWarningShow(true)}
              >
                Delete
              </Dropdown.Item>{' '}
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
