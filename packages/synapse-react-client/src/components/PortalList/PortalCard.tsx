import { Portal } from '@sage-bionetworks/synapse-client'
import {
  Card,
  CardContent,
  Typography,
  Box,
  Link as MuiLink,
  IconButton,
} from '@mui/material'
import styles from './PortalCard.module.scss'
import UserCard from '../UserCard/UserCard'
import dayjs from 'dayjs'
import { useState } from 'react'
import PortalAclEditorModal from '../PortalAclEditor/PortalAclEditorModal'
import { Settings, Delete } from '@mui/icons-material'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import { useDeletePortal } from '@/synapse-queries/portal/usePortal'
import { displayToast } from '../ToastMessage'

// Synapse itself is portal ID 1 and should not have ACL management
const SYNAPSE_PORTAL_ID = '1'

export type PortalCardProps = {
  portal: Portal
}

export function PortalCard({ portal }: PortalCardProps): React.ReactNode {
  const { id, name, url, createdBy, createdOn, modifiedBy, modifiedOn } = portal
  const [isAclEditorOpen, setIsAclEditorOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const showAclEditor = id && id !== SYNAPSE_PORTAL_ID
  const showDeleteButton = id && id !== SYNAPSE_PORTAL_ID

  const { mutate: deletePortal } = useDeletePortal({
    onSuccess: () => {
      displayToast(`Portal "${name}" was successfully deleted`, 'success')
      setIsDeleteDialogOpen(false)
    },
    onError: error => {
      displayToast(`Failed to delete portal: ${error.reason}`, 'danger')
    },
  })

  return (
    <>
      <Card className={styles.portalCard}>
        <CardContent>
          <Box className={styles.header}>
            <Box className={styles.titleRow}>
              <Typography variant="h6" component="h3">
                {name}
              </Typography>
              <Box className={styles.actions}>
                {showAclEditor && (
                  <IconButton
                    size="small"
                    onClick={() => setIsAclEditorOpen(true)}
                    aria-label="Manage portal permissions"
                    title="Manage portal permissions"
                  >
                    <Settings fontSize="small" />
                  </IconButton>
                )}
                {showDeleteButton && (
                  <IconButton
                    size="small"
                    onClick={() => setIsDeleteDialogOpen(true)}
                    aria-label="Delete portal"
                    title="Delete portal"
                    color="error"
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                )}
              </Box>
            </Box>
            {url && (
              <MuiLink
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.url}
              >
                {url}
              </MuiLink>
            )}
          </Box>

          <Box className={styles.metadata}>
            {id && (
              <Typography variant="body2" color="text.secondary">
                <strong>ID:</strong> {id}
              </Typography>
            )}

            {createdBy && (
              <Box className={styles.userInfo}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Created by:</strong>
                </Typography>
                <UserCard
                  ownerId={createdBy}
                  size="SMALL USER CARD"
                  hideEmail
                  disableLink={false}
                />
                {createdOn && (
                  <Typography variant="caption" color="text.secondary">
                    on {dayjs(createdOn).format('MMMM D, YYYY')}
                  </Typography>
                )}
              </Box>
            )}

            {modifiedBy && (
              <Box className={styles.userInfo}>
                <Typography variant="body2" color="text.secondary">
                  <strong>Last modified by:</strong>
                </Typography>
                <UserCard
                  ownerId={modifiedBy}
                  size="SMALL USER CARD"
                  hideEmail
                  disableLink={false}
                />
                {modifiedOn && (
                  <Typography variant="caption" color="text.secondary">
                    on {dayjs(modifiedOn).format('MMMM D, YYYY')}
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>

      {showAclEditor && id && (
        <PortalAclEditorModal
          portalId={id}
          open={isAclEditorOpen}
          onClose={() => setIsAclEditorOpen(false)}
        />
      )}

      {id && (
        <ConfirmationDialog
          open={isDeleteDialogOpen}
          title="Delete Portal"
          content={
            <Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Are you sure you want to delete this portal?
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Name:</strong> {name}
              </Typography>
              {url && (
                <Typography variant="body2">
                  <strong>URL:</strong> {url}
                </Typography>
              )}
            </Box>
          }
          confirmButtonProps={{
            children: 'Delete',
            color: 'error',
            variant: 'contained',
          }}
          onConfirm={() => {
            if (id) {
              deletePortal(id)
            }
          }}
          onCancel={() => setIsDeleteDialogOpen(false)}
          maxWidth="sm"
        />
      )}
    </>
  )
}

export default PortalCard
