import React, { useEffect, useImperativeHandle, useMemo, useState } from 'react'
import OpenData from './OpenData'
import { AclEditor, AclEditorProps } from '../AclEditor/AclEditor'
import useUpdateAcl from '../AclEditor/useUpdateAcl'
import {
  getAccessTypeFromPermissionLevel,
  PermissionLevel,
  permissionLevelToLabel,
} from '../../utils/PermissionLevelToAccessType'
import {
  ANONYMOUS_PRINCIPAL_ID,
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
} from '../../utils/SynapseConstants'
import {
  ALL_ENTITY_BUNDLE_FIELDS,
  EntityType,
  ResourceAccess,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import {
  useCreateEntityACL,
  useDeleteEntityACL,
  useSuspenseGetEntityBenefactorACL,
  useSuspenseGetCurrentUserProfile,
  useSuspenseGetEntityBundle,
  useUpdateEntityACL,
} from '../../synapse-queries'
import { Alert, Stack } from '@mui/material'
import { InheritanceMessage } from './InheritanceMessage'
import { CreateOrDeleteLocalSharingSettingsButton } from './CreateOrDeleteLocalSharingSettingsButton'
import { resourceAccessListIsEqual } from '../../utils/functions/AccessControlListUtils'
import useNotifyNewACLUsers from './useNotifyNewACLUsers'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import { getDisplayNameFromProfile } from '../../utils/functions/DisplayUtils'
import { AclEditorSkeleton } from '../AclEditor/AclEditorSkeleton'
import { SynapseErrorBoundary } from '../error'

const availablePermissionLevels: PermissionLevel[] = [
  'CAN_VIEW',
  'CAN_DOWNLOAD',
  'CAN_EDIT',
  'CAN_EDIT_DELETE',
  'CAN_ADMINISTER',
]

export type EntityAclEditorProps = {
  entityId: string
  onCanSaveChange: (canSaveChanges: boolean) => void
  onUpdateSuccess: () => void
}

export type EntityAclEditorHandle = {
  save: () => void
}

function getSubject(entityName: string) {
  return `${entityName} (shared on Synapse)`
}

function getBody(profile: UserProfile, entityId: string) {
  return `${getDisplayNameFromProfile(
    profile,
  )} has shared an item with you on Synapse:\n${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}Synapse:${entityId}`
}

function getCanEditResourceAccess(
  canEdit: boolean,
  isInherited: boolean,
  ownProfile: UserProfile,
): AclEditorProps['canEdit'] {
  if (!canEdit || isInherited) {
    return false
  }
  return (resourceAccess: ResourceAccess): boolean => {
    // Users cannot change their own permissions
    const isSelf = ownProfile.ownerId === String(resourceAccess.principalId)
    // Users cannot change permission level for the public group, only add/remove it.
    // To give the public group DOWNLOAD access, ACT must mark it as anonymous access.
    const isPublicGroup = resourceAccess.principalId === PUBLIC_PRINCIPAL_ID
    if (isSelf || isPublicGroup) {
      return false
    }
    return true
  }
}

function getCanDeleteResourceAccess(
  canEdit: boolean,
  isInherited: boolean,
  ownProfile: UserProfile,
): AclEditorProps['canRemoveEntry'] {
  if (!canEdit || isInherited) {
    return false
  }
  return (resourceAccess: ResourceAccess): boolean => {
    // Users cannot delete their own permissions
    const isSelf = ownProfile.ownerId === String(resourceAccess.principalId)
    if (isSelf) {
      return false
    }
    return canEdit
  }
}

function getDisplayedPermissionLevelOverride(
  isOpenData: boolean,
): AclEditorProps['displayedPermissionLevelOverride'] {
  return (resourceAccess: ResourceAccess) => {
    if (resourceAccess.principalId === PUBLIC_PRINCIPAL_ID) {
      return isOpenData
        ? permissionLevelToLabel['CAN_DOWNLOAD']
        : permissionLevelToLabel['CAN_VIEW']
    }
    return undefined
  }
}

const EntityAclEditor = React.forwardRef(function EntityAclEditor(
  props: EntityAclEditorProps,
  ref: React.ForwardedRef<EntityAclEditorHandle>,
) {
  const { entityId, onCanSaveChange, onUpdateSuccess } = props

  const { data: ownProfile } = useSuspenseGetCurrentUserProfile()
  const { data: entityBundle } = useSuspenseGetEntityBundle(
    entityId,
    undefined,
    ALL_ENTITY_BUNDLE_FIELDS,
    { staleTime: Infinity },
  )
  const isProject = EntityType.PROJECT == entityBundle.entityType

  // The parent's benefactor ACL will be shown if the user removes the ACL on the current entity
  const { data: parentAcl } = useSuspenseGetEntityBenefactorACL(
    entityBundle.entity.parentId!,
    {
      staleTime: Infinity,
    },
  )

  const originalResourceAccess = entityBundle.benefactorAcl.resourceAccess
  const parentResourceAccess = useMemo(
    () => parentAcl?.resourceAccess ?? [],
    [parentAcl],
  )
  const canEdit = entityBundle.permissions.canChangePermissions
  const isOpenData = entityBundle.permissions.isEntityOpenData
  const originalIsInherited = !(entityBundle.benefactorAcl.id == entityId)
  const [updatedIsInherited, setUpdatedIsInherited] =
    useState(originalIsInherited)
  const [notifyNewAdditions, setNotifyNewAdditions] = useState(false)
  const [error, setError] = useState<Error>()

  const {
    resourceAccessList: updatedResourceAccessList,
    setResourceAccessList,
    addResourceAccessItem,
    updateResourceAccessItem,
    removeResourceAccessItem,
    resetDirtyState,
  } = useUpdateAcl()

  // If `originalResourceAccess` changes, reset state
  useEffect(() => {
    if (originalResourceAccess) {
      resetDirtyState()
      setResourceAccessList(originalResourceAccess)
    }
  }, [originalResourceAccess, resetDirtyState, setResourceAccessList])

  // If `originalIsInherited` changes, reset state
  useEffect(() => {
    resetDirtyState()
    setUpdatedIsInherited(originalIsInherited)
  }, [originalIsInherited, resetDirtyState])

  // If the editor toggles the inherited state, reset the resource access list
  useEffect(() => {
    if (originalIsInherited == updatedIsInherited) {
      // The user reverted to the original state (regardless of inherited or not)
      setResourceAccessList(originalResourceAccess)
    } else if (updatedIsInherited) {
      // The user toggled to inherited, update the resource access list to match the parent
      setResourceAccessList(parentResourceAccess)
    } else {
      // The user toggled to local, no need to update the list (the parent's list is already in the editor)
    }
    resetDirtyState()
  }, [
    originalIsInherited,
    originalResourceAccess,
    parentResourceAccess,
    resetDirtyState,
    setResourceAccessList,
    updatedIsInherited,
  ])

  const isPublic = updatedResourceAccessList.some(ra =>
    [
      AUTHENTICATED_PRINCIPAL_ID,
      PUBLIC_PRINCIPAL_ID,
      ANONYMOUS_PRINCIPAL_ID,
    ].includes(ra.principalId),
  )

  const {
    sendNotification,
    isLoading: isLoadingSendMessageToNewACLUsers,
    isPending: isPendingSendMessageToNewACLUsers,
  } = useNotifyNewACLUsers({
    subject: getSubject(entityBundle.entity.name || ''),
    body: getBody(ownProfile, entityId),
    initialResourceAccessList: originalResourceAccess,
    newResourceAccessList: updatedResourceAccessList,
  })

  const mutationOptions = {
    onSuccess: () => {
      if (notifyNewAdditions) {
        sendNotification()
      }
      onUpdateSuccess()
    },
    onError: (e: Error) => {
      setError(e)
    },
  }

  const { mutate: createAcl, isPending: isPendingCreateAcl } =
    useCreateEntityACL(mutationOptions)
  const { mutate: updateAcl, isPending: isPendingUpdateAcl } =
    useUpdateEntityACL(mutationOptions)
  const { mutate: deleteAcl, isPending: isPendingDeleteAcl } =
    useDeleteEntityACL(mutationOptions)

  const isPending =
    isPendingCreateAcl ||
    isPendingUpdateAcl ||
    isPendingDeleteAcl ||
    isPendingSendMessageToNewACLUsers

  const hasAclChanged = useMemo(() => {
    return (
      originalIsInherited != updatedIsInherited ||
      !resourceAccessListIsEqual(
        originalResourceAccess,
        updatedResourceAccessList,
      )
    )
  }, [
    originalResourceAccess,
    originalIsInherited,
    updatedIsInherited,
    updatedResourceAccessList,
  ])

  const canSave =
    hasAclChanged || isLoadingSendMessageToNewACLUsers || isPending

  useEffect(() => {
    onCanSaveChange(canSave)
  }, [onCanSaveChange, canSave])

  useImperativeHandle(
    ref,
    () => {
      return {
        save() {
          if (canSave) {
            // Check if the inheritance changed; if so, the ACL should be created/deleted
            if (originalIsInherited != updatedIsInherited) {
              if (updatedIsInherited) {
                deleteAcl(entityId)
              } else {
                createAcl({
                  id: entityId,
                  resourceAccess: updatedResourceAccessList,
                })
              }
            } else {
              // Inheritance did not change; update the ACL
              updateAcl({
                // ensure we get all fields from the original ACL, including the etag
                ...entityBundle.accessControlList!,
                resourceAccess: updatedResourceAccessList,
              })
            }
          } else {
            console.error('EntityAclEditor: save() called but canSave is false')
          }
        },
      }
    },
    [
      canSave,
      createAcl,
      deleteAcl,
      entityBundle,
      entityId,
      originalIsInherited,
      updateAcl,
      updatedIsInherited,
      updatedResourceAccessList,
    ],
  )

  return (
    <Stack gap={2}>
      <OpenData
        isOpenData={isOpenData}
        isPublic={isPublic}
        currentUserCanUpdateSharingSettings={canEdit}
      />
      <InheritanceMessage
        isProject={isProject}
        isInherited={updatedIsInherited}
        benefactorId={updatedIsInherited ? parentAcl?.id : entityId}
      />
      <AclEditor
        canEdit={getCanEditResourceAccess(
          canEdit,
          updatedIsInherited,
          ownProfile,
        )}
        canRemoveEntry={getCanDeleteResourceAccess(
          canEdit,
          updatedIsInherited,
          ownProfile,
        )}
        resourceAccessList={updatedResourceAccessList}
        availablePermissionLevels={availablePermissionLevels}
        emptyText={/* This should never happen */ ''}
        displayedPermissionLevelOverride={getDisplayedPermissionLevelOverride(
          isOpenData,
        )}
        onAddPrincipalToAcl={id => {
          if (id === PUBLIC_PRINCIPAL_ID) {
            addResourceAccessItem(
              id,
              getAccessTypeFromPermissionLevel('CAN_VIEW'),
            )
          } else {
            addResourceAccessItem(
              id,
              getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
            )
          }
        }}
        updateResourceAccessItem={updateResourceAccessItem}
        removeResourceAccessItem={removeResourceAccessItem}
        showNotifyCheckbox={true}
        notifyCheckboxValue={notifyNewAdditions}
        onNotifyCheckboxChange={setNotifyNewAdditions}
        showAddRemovePublicButton={true}
      />
      {/* Create / delete local sharing settings button */}
      {!isProject && entityBundle.permissions.canEnableInheritance && (
        <CreateOrDeleteLocalSharingSettingsButton
          isInherited={updatedIsInherited}
          setIsInherited={setUpdatedIsInherited}
        />
      )}
      {error && <Alert severity="error">{error.message}</Alert>}
    </Stack>
  )
})

const EntityAclEditorWithSuspense = React.forwardRef(
  function EntityAclEditorWithSuspense(
    props: EntityAclEditorProps,
    ref: React.ForwardedRef<EntityAclEditorHandle>,
  ) {
    return (
      <SynapseErrorBoundary>
        <React.Suspense fallback={<AclEditorSkeleton />}>
          <EntityAclEditor {...props} ref={ref} />
        </React.Suspense>
      </SynapseErrorBoundary>
    )
  },
)

export default EntityAclEditorWithSuspense
