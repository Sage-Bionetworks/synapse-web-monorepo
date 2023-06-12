import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import SynapseClient from '../../synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { AccessTokenRecord } from '@sage-bionetworks/synapse-types'
import { scopeDescriptions } from '@sage-bionetworks/synapse-types'
import { Button, Tooltip } from '@mui/material'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import IconSvg from '../IconSvg/IconSvg'
import WarningDialog from '../SynapseForm/WarningDialog'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export type AccessTokenCardProps = {
  /** Record referring to an access token, not a token itself */
  accessToken: AccessTokenRecord
  onDelete: (...args: any[]) => void
}

export const AccessTokenCard: React.FunctionComponent<AccessTokenCardProps> = ({
  accessToken,
  onDelete,
}: AccessTokenCardProps) => {
  const { accessToken: authToken } = useSynapseContext()
  const [showModal, setShowModal] = useState(false)
  const handleError = useErrorHandler()

  const isExpired = accessToken.state === 'EXPIRED'

  return (
    <div
      className={
        'cardContainer PersonalAccessTokenCard' +
        (isExpired ? ' bg-warning' : '')
      }
    >
      <WarningDialog
        title={'Confirm Deletion'}
        content={
          <>
            <p>
              If you delete this token, any applications using it will stop
              working. This action cannot be undone.
            </p>
            <p className="SRC-boldText">
              Are you sure you want to delete this token?
            </p>
          </>
        }
        confirmButtonText={'Delete Token'}
        onCancel={() => setShowModal(false)}
        onConfirm={(id: string) => {
          SynapseClient.deletePersonalAccessToken(id, authToken)
            .then(() => {
              onDelete()
              setShowModal(false)
            })
            .catch(error => {
              handleError(error)
            })
        }}
        confirmButtonColor="error"
        open={showModal}
        onConfirmCallbackArgs={[accessToken.id, authToken]}
      />

      <div className="SRC-cardContent">
        <div className="SRC-eqHeightRow SRC-userCardName">
          <span className={'SRC-blackText'}>{accessToken.name}</span>
          {isExpired && (
            <Tooltip
              title="This token has expired. It no longer works and can only be deleted."
              enterNextDelay={100}
            >
              <span aria-hidden="true">
                <IconSvg icon="warning" />
              </span>
            </Tooltip>
          )}
        </div>

        <div className="SRC-eqHeightRow">
          <span>Permissions: </span>
          {accessToken.scopes.map(scope => {
            return (
              <span
                className="PersonalAccessTokenCard__ScopeName SRC-primary-text-color SRC-primary-color-hover SRC-hand-cursor SRC-inlineFlex"
                data-tip={scopeDescriptions[scope].description}
                key={scope}
              >
                {scopeDescriptions[scope].displayName}
              </span>
            )
          })}
        </div>
        <div className="SRC-eqHeightRow">
          <span>Last used {dayjs(accessToken.lastUsed).fromNow()}</span>
          <span className={'SRC-deemphasized-text'}>{' | '}</span>
          <span>Created {dayjs(accessToken.createdOn).fromNow()}</span>
        </div>
      </div>
      {/* Delete button */}
      <div className="PersonalAccessTokenCard__DeleteButton">
        <Button
          variant="outlined"
          color="error"
          aria-label="delete"
          onClick={() => {
            if (isExpired) {
              // token no longer works, no need for warning/confirmation
              SynapseClient.deletePersonalAccessToken(accessToken.id, authToken)
                .then(() => {
                  onDelete()
                })
                .catch(error => {
                  handleError(error)
                })
            } else {
              setShowModal(true)
            }
          }}
        >
          <DeleteTwoToneIcon />
        </Button>
      </div>
    </div>
  )
}
