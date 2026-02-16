import {
  useCreateEntityACL,
  useDeleteEntityACL,
  useSuspenseGetCurrentUserProfile,
  useSuspenseGetEntityBenefactorACL,
  useSuspenseGetEntityBundle,
  useUpdateEntityACL,
} from '@/synapse-queries'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { resourceAccessListIsEqual } from '@/utils/functions/AccessControlListUtils'
import { getDisplayNameFromProfile } from '@/utils/functions/DisplayUtils'
import { entityTypeToFriendlyName } from '@/utils/functions/EntityTypeUtils'
import {
  getAccessTypeFromPermissionLevel,
  PermissionLevel,
  permissionLevelToLabel,
} from '@/utils/PermissionLevelToAccessType'
import { useRealmPrincipals } from '@/utils/context/RealmPrincipalsContext'
import { Alert, Link, Stack } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  ALL_ENTITY_BUNDLE_FIELDS,
  ResourceAccess,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import {
  ForwardedRef,
  forwardRef,
  Suspense,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import { AclEditor, AclEditorProps } from '../AclEditor/AclEditor'
import { AclEditorSkeleton } from '../AclEditor/AclEditorSkeleton'
import useUpdateAcl from '../AclEditor/useUpdateAcl'
import { SynapseErrorBoundary } from '../error'
import FullWidthAlert from '../FullWidthAlert'
import { CreateOrDeleteLocalSharingSettingsButton } from './CreateOrDeleteLocalSharingSettingsButton'
import { InheritanceMessage } from './InheritanceMessage'
import OpenData from './OpenData'
import useNotifyNewACLUsers from './useNotifyNewACLUsers'

const availablePermissionLevels: PermissionLevel[] = [
  'CAN_VIEW',
  'CAN_DOWNLOAD',
  'CAN_EDIT',
  'CAN_EDIT_DELETE',
  'CAN_ADMINISTER',
]

export type EntityAclEditorProps = {
  /** The ID of the entity on which to view/edit the ACL. Note that the ACL may actually belong to an entity ancestor (benefactor). */
  entityId: string
  /** Invoked when the user can/cannot save the pending changes. */
  onCanSaveChange: (canSaveChanges: boolean) => void
  /** Invoked when changes are successfully made. */
  onUpdateSuccess: () => void
  /** Special case to show specific copy and allow changes to an inherited ACL immediately after a file is uploaded.
   *  Note that if this is true, the entityId should be the ID of the folder or project that is the benefactor of the newly uploaded file(s)
   * @defaultValue false */
  isAfterUpload?: boolean
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
  publicGroupId: string | undefined,
): AclEditorProps['canEdit'] {
  if (!canEdit || isInherited) {
    return false
  }
  return (resourceAccess: ResourceAccess): boolean => {
    // Users cannot change their own permissions
    const isSelf = ownProfile.ownerId === String(resourceAccess.principalId)
    // Users cannot change permission level for the public group, only add/remove it.
    // To give the public group DOWNLOAD access, ACT must mark it as anonymous access.
    const isPublicGroup =
      publicGroupId !== undefined &&
      String(resourceAccess.principalId) === publicGroupId
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
  publicGroupId: string | undefined,
): AclEditorProps['displayedPermissionLevelOverride'] {
  return (resourceAccess: ResourceAccess) => {
    if (
      publicGroupId !== undefined &&
      String(resourceAccess.principalId) === publicGroupId
    ) {
      return isOpenData
        ? permissionLevelToLabel['CAN_DOWNLOAD']
        : permissionLevelToLabel['CAN_VIEW']
    }
    return undefined
  }
}

const EntityAclEditor = forwardRef(function EntityAclEditor(
  props: EntityAclEditorProps,
  ref: ForwardedRef<EntityAclEditorHandle>,
) {
  const {
    entityId,
    onCanSaveChange,
    onUpdateSuccess,
    isAfterUpload = false,
  } = props

  const { data: ownProfile } = useSuspenseGetCurrentUserProfile()
  const { authenticatedUsersId, publicGroupId, anonymousUserId } =
    useRealmPrincipals()
  const { data: entityBundle } = useSuspenseGetEntityBundle(
    entityId,
    undefined,
    ALL_ENTITY_BUNDLE_FIELDS,
    { staleTime: Infinity },
  )
  const isProject = EntityType.project == entityBundle.entityType

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
  } = useUpdateAcl({ initialResourceAccessList: originalResourceAccess })

  // If `originalResourceAccess` changes, reset state
  useEffect(() => {
    if (originalResourceAccess) {
      resetDirtyState()
      setResourceAccessList([...originalResourceAccess])
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
    [authenticatedUsersId, publicGroupId, anonymousUserId]
      .filter((id): id is string => id !== undefined)
      .includes(String(ra.principalId)),
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

  const showInheritedAclUpdateWarning = hasAclChanged && isAfterUpload

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
    <Stack
      sx={{
        gap: 2,
      }}
    >
      <OpenData
        isOpenData={isOpenData}
        isPublic={isPublic}
        currentUserCanUpdateSharingSettings={canEdit}
      />
      <InheritanceMessage
        isProject={isProject}
        isInherited={updatedIsInherited}
        benefactorId={updatedIsInherited ? parentAcl?.id : entityId}
        isAfterUpload={isAfterUpload}
      />
      {showInheritedAclUpdateWarning && (
        <FullWidthAlert
          isGlobal={false}
          variant={'warning'}
          title={`Edits will affect settings of entire ${entityTypeToFriendlyName(
            entityBundle?.entityType,
          ).toLowerCase()}.`}
          description={
            <>
              <p>
                Editing the settings here will impact the sharing settings for
                all files and folders within this{' '}
                {entityTypeToFriendlyName(
                  entityBundle?.entityType,
                ).toLowerCase()}
                , not just the ones you&apos;ve recently uploaded.
              </p>
              <p>
                View the instructions above for setting your{' '}
                <Link
                  href={
                    'https://help.synapse.org/docs/Sharing-Settings,-Permissions,-and-Conditions-for-Use.2024276030.html'
                  }
                  target={'_blank'}
                >
                  Local Sharing Settings
                </Link>
                .
              </p>
            </>
          }
        />
      )}
      <AclEditor
        isInherited={updatedIsInherited}
        canEdit={getCanEditResourceAccess(
          canEdit,
          updatedIsInherited,
          ownProfile,
          publicGroupId,
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
          publicGroupId,
        )}
        onAddPrincipalToAcl={id => {
          if (publicGroupId !== undefined && String(id) === publicGroupId) {
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
      {!isAfterUpload &&
        !isProject &&
        entityBundle.permissions.canEnableInheritance && (
          <CreateOrDeleteLocalSharingSettingsButton
            isInherited={updatedIsInherited}
            setIsInherited={setUpdatedIsInherited}
          />
        )}
      {error && <Alert severity="error">{error.message}</Alert>}
    </Stack>
  )
})

const EntityAclEditorWithSuspense = forwardRef(
  function EntityAclEditorWithSuspense(
    props: EntityAclEditorProps,
    ref: ForwardedRef<EntityAclEditorHandle>,
  ) {
    return (
      <SynapseErrorBoundary>
        <Suspense fallback={<AclEditorSkeleton />}>
          <EntityAclEditor {...props} ref={ref} />
        </Suspense>
      </SynapseErrorBoundary>
    )
  },
)

export default EntityAclEditorWithSuspense
