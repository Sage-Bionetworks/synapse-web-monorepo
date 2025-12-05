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
import { Settings } from '@mui/icons-material'

// Synapse itself is portal ID 1 and should not have ACL management
const SYNAPSE_PORTAL_ID = '1'

export type PortalCardProps = {
  portal: Portal
}

export function PortalCard({ portal }: PortalCardProps): React.ReactNode {
  const { id, name, url, createdBy, createdOn, modifiedBy, modifiedOn } = portal
  const [isAclEditorOpen, setIsAclEditorOpen] = useState(false)
  const showAclEditor = id && id !== SYNAPSE_PORTAL_ID

  return (
    <>
      <Card className={styles.portalCard}>
        <CardContent>
          <Box className={styles.header}>
            <Box className={styles.titleRow}>
              <Typography variant="h6" component="h3">
                {name}
              </Typography>
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
    </>
  )
}

export default PortalCard
