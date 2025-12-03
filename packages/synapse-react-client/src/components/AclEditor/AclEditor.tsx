import { PermissionLevel } from '@/utils/PermissionLevelToAccessType'
import {
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_IDS,
} from '@/utils/SynapseConstants'
import {
  Box,
  Button,
  ButtonProps,
  Checkbox,
  Collapse,
  FormControlLabel,
  Tooltip,
  Typography,
} from '@mui/material'
import { ResourceAccess } from '@sage-bionetworks/synapse-types'
import { noop } from 'lodash-es'
import React, { ReactNode } from 'react'
import { TransitionGroup } from 'react-transition-group'
import IconSvg from '../IconSvg'
import UserSearchBoxV2 from '../UserSearchBox/UserSearchBoxV2'
import { AclEditorSkeleton } from './AclEditorSkeleton'
import { ResourceAccessItem } from './ResourceAccessItem'
import useUpdateAcl from './useUpdateAcl'

export const ADD_PRINCIPAL_TO_ACL_COMBOBOX_LABEL = 'Add a user or team'
export const ADD_PUBLIC_PRINCIPALS_BUTTON_TEXT = 'Make Public'
export const REMOVE_PUBLIC_PRINCIPALS_BUTTON_TEXT = 'Remove Public Access'

export type AclEditorProps = {
  resourceAccessList: ResourceAccess[]
  availablePermissionLevels: PermissionLevel[]
  /** If true, the user can edit the ACL. If a function, it will be called with the ResourceAccess to determine if the user can edit it. */
  canEdit: boolean | ((resourceAccess: ResourceAccess) => boolean)
  /** If true, object ACL is inherited from another object */
  isInherited: boolean
  /**
   * If true, the user can remove any entry from the ACL. a function, it will be called with the ResourceAccess to determine if the user can remove it.
   * If undefined, then the behavior will fall back to the value of `canEdit`
   */
  canRemoveEntry?: boolean | ((resourceAccess: ResourceAccess) => boolean)
  isLoading?: boolean
  emptyText: ReactNode
  onAddPrincipalToAcl: (id: number) => void
  updateResourceAccessItem: ReturnType<
    typeof useUpdateAcl
  >['updateResourceAccessItem']
  removeResourceAccessItem: ReturnType<
    typeof useUpdateAcl
  >['removeResourceAccessItem']
  /** If true, shows a button to add/remove AUTHENTICATED and PUBLIC groups when in edit mode */
  showAddRemovePublicButton: boolean
  /** If present, a checkbox to notify those added to the email will be shown. */
  showNotifyCheckbox: boolean
  notifyCheckboxValue?: boolean
  onNotifyCheckboxChange?: (checked: boolean) => void
  /**
   * In special cases, can be used to display a permission level that is different from the typical permission levels.
   * For example, the PUBLIC group "Can download" an entity if they have READ access and the entity is marked as
   * "open data" (open data status is not captured in the ResourceAccess)
   */
  displayedPermissionLevelOverride?: (
    resourceAccess: ResourceAccess,
  ) => string | undefined
}

export const NOTIFY_NEW_ACL_USERS_CHECKBOX_LABEL = 'Notify people via email'

export function AclEditor(props: AclEditorProps): React.JSX.Element {
  const {
    resourceAccessList,
    availablePermissionLevels,
    canEdit,
    isInherited,
    canRemoveEntry = canEdit,
    isLoading = false,
    emptyText,
    onAddPrincipalToAcl,
    updateResourceAccessItem,
    removeResourceAccessItem,
    showAddRemovePublicButton,
    showNotifyCheckbox,
    notifyCheckboxValue,
    onNotifyCheckboxChange = noop,
    displayedPermissionLevelOverride,
  } = props

  if (isLoading) {
    return <AclEditorSkeleton />
  }

  const resourceAccessListCurrentlyIncludesPublic = Boolean(
    resourceAccessList.find(resourceAccess =>
      PUBLIC_PRINCIPAL_IDS.includes(resourceAccess.principalId),
    ),
  )

  const addOrRemovePublicButtonProps: ButtonProps =
    resourceAccessListCurrentlyIncludesPublic
      ? {
          startIcon: <IconSvg icon={'close'} wrap={false} />,
          children: REMOVE_PUBLIC_PRINCIPALS_BUTTON_TEXT,
          onClick: () => {
            PUBLIC_PRINCIPAL_IDS.forEach(publicId => {
              removeResourceAccessItem(publicId)
            })
          },
        }
      : {
          startIcon: <IconSvg icon={'public'} wrap={false} />,
          children: ADD_PUBLIC_PRINCIPALS_BUTTON_TEXT,
          onClick: () => {
            onAddPrincipalToAcl(PUBLIC_PRINCIPAL_ID)
            onAddPrincipalToAcl(AUTHENTICATED_PRINCIPAL_ID)
          },
        }

  return (
    <Box>
      <Box
        sx={{
          mb: '30px',
        }}
      >
        <Typography
          variant="headline3"
          sx={{
            mb: '10px',
          }}
        >
          Users and Teams with Permissions
        </Typography>

        {resourceAccessList.length === 0 ? (
          <Typography variant="body1Italic">{emptyText}</Typography>
        ) : (
          <TransitionGroup>
            {resourceAccessList.map(resourceAccess => {
              const canChangePermission =
                typeof canEdit === 'function'
                  ? canEdit(resourceAccess)
                  : canEdit
              const canDelete =
                typeof canRemoveEntry === 'function'
                  ? canRemoveEntry(resourceAccess)
                  : canRemoveEntry

              const permissionLevelOverride = displayedPermissionLevelOverride
                ? displayedPermissionLevelOverride(resourceAccess)
                : undefined
              return (
                <Collapse key={resourceAccess.principalId}>
                  <ResourceAccessItem
                    resourceAccess={resourceAccess}
                    availablePermissionLevels={availablePermissionLevels}
                    canChangePermission={canChangePermission}
                    displayedPermissionLevelOverride={permissionLevelOverride}
                    showDeleteButton={canDelete}
                    onChange={accessType =>
                      updateResourceAccessItem(
                        resourceAccess.principalId,
                        accessType,
                      )
                    }
                    onRemove={() =>
                      removeResourceAccessItem(resourceAccess.principalId)
                    }
                  />
                </Collapse>
              )
            })}
          </TransitionGroup>
        )}
      </Box>
      {canEdit && (
        <Box>
          <Typography
            variant="headline3"
            sx={{
              mb: '10px',
            }}
          >
            Add More
          </Typography>
          <Typography
            sx={{
              mb: '20px',
              variant: 'body1',
              lineHeight: '20px',
              fontStyle: 'italic',
              color: 'text.secondary',
            }}
          >
            Search for a username or team to add. You can search by username,
            first or last names, or team name.
          </Typography>
          <Box sx={{ mb: 1 }}>
            <Typography
              component="label"
              variant="smallText2"
              htmlFor="reviewer-search"
            >
              {ADD_PRINCIPAL_TO_ACL_COMBOBOX_LABEL}
            </Typography>
            <UserSearchBoxV2
              value={null}
              inputId="reviewer-search"
              placeholder="Username, name (first and last) or team name."
              onChange={id => {
                const parsedId = parseInt(id || '')
                if (parsedId) {
                  onAddPrincipalToAcl(parsedId)
                }
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box>
              {showAddRemovePublicButton && (
                <Button
                  size={'small'}
                  variant={'outlined'}
                  {...addOrRemovePublicButtonProps}
                />
              )}
            </Box>
            {showNotifyCheckbox && (
              <Tooltip
                title={
                  'Select to notify newly added people that this item has been shared with them'
                }
              >
                <FormControlLabel
                  sx={{ mr: 0 }}
                  control={
                    <Checkbox
                      value={notifyCheckboxValue}
                      onChange={() =>
                        onNotifyCheckboxChange(!notifyCheckboxValue)
                      }
                    />
                  }
                  label={
                    <Typography variant={'smallText1'}>
                      {NOTIFY_NEW_ACL_USERS_CHECKBOX_LABEL}
                    </Typography>
                  }
                />
              </Tooltip>
            )}
          </Box>
        </Box>
      )}
      {!canEdit && !isInherited && (
        <Typography variant={'body1'}>
          You do not have sufficient privileges to modify the sharing settings.
        </Typography>
      )}
    </Box>
  )
}
