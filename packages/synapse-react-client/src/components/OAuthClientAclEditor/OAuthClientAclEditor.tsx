import {
  useGetOAuthClientACL,
  useUpdateOAuthClientACL,
} from '@/synapse-queries'
import {
  getAccessTypeFromPermissionLevel,
  PermissionLevel,
} from '@/utils/PermissionLevelToAccessType'
import { Alert, Stack } from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { isEqual } from 'lodash-es'
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { AclEditor } from '../AclEditor/AclEditor'
import useUpdateAcl from '../AclEditor/useUpdateAcl'
import { AccessControlList } from '@sage-bionetworks/synapse-client'
import {
  convertResourceAccessSetToSRC,
  updateACLWithSRCResourceAccessList,
} from '@/utils/functions/AccessControlListUtils'

const availablePermissionLevels: PermissionLevel[] = [
  'CAN_ADMINISTER_OAUTH_CLIENT',
]

export type OAuthClientAclEditorHandle = {
  /* Allow the parent component to trigger saving the ACL, so this may be embedded in an arbitrary modal. */
  save: () => void
}

export type OAuthClientAclEditorProps = {
  clientId: string
  onSaveComplete: (saveSuccessful: boolean) => void
}

export const OAuthClientAclEditor = forwardRef(function OAuthClientAclEditor(
  props: OAuthClientAclEditorProps,
  ref: ForwardedRef<OAuthClientAclEditorHandle>,
) {
  const { clientId, onSaveComplete } = props
  const [error, setError] = useState<string | null>(null)

  const onMutationSuccess = () => {
    setError(null)
    onSaveComplete(true)
  }

  const onMutationError = (error: SynapseClientError) => {
    setError(error.reason)
    onSaveComplete(false)
  }

  const { data: originalAcl, isLoading: isLoadingOriginalAcl } =
    useGetOAuthClientACL(clientId, {
      // Infinite staleTime ensures this won't get re-fetched unless explicitly invalidated by the mutation
      staleTime: Infinity,
    })

  const {
    resourceAccessList,
    setResourceAccessList,
    addResourceAccessItem,
    updateResourceAccessItem,
    removeResourceAccessItem,
    resetDirtyState,
  } = useUpdateAcl({
    onChange: () => setError(null),
    onError: setError,
  })

  // set resourceAccessList when the fetched acl changes
  useEffect(() => {
    if (originalAcl) {
      resetDirtyState()
      setResourceAccessList(
        convertResourceAccessSetToSRC(originalAcl.resourceAccess),
      )
    }
  }, [originalAcl, setResourceAccessList])

  const { mutate: updateAcl } = useUpdateOAuthClientACL({
    onSuccess: () => onMutationSuccess(),
    onError: (error: SynapseClientError) => onMutationError(error),
  })

  useImperativeHandle(
    ref,
    () => {
      return {
        save() {
          const updatedAcl: AccessControlList =
            updateACLWithSRCResourceAccessList(originalAcl, resourceAccessList)
          const aclIsUnchanged =
            (originalAcl === null && updatedAcl == null) ||
            // ignore properties that will change when the ACL is saved (etag, modifiedOn)
            (isEqual(originalAcl?.resourceAccess, resourceAccessList) &&
              originalAcl?.id === updatedAcl?.id)

          if (aclIsUnchanged) {
            // noop
            onSaveComplete(true)
          } else {
            updateAcl(updatedAcl)
          }
        },
      }
    },
    [clientId, originalAcl, resourceAccessList, onSaveComplete, updateAcl],
  )

  return (
    <Stack
      direction="column"
      sx={{
        gap: '20px',
      }}
    >
      <AclEditor
        resourceAccessList={resourceAccessList}
        availablePermissionLevels={availablePermissionLevels}
        isLoading={isLoadingOriginalAcl}
        canEdit={true}
        emptyText={/* This should never happen */ ''}
        onAddPrincipalToAcl={id =>
          addResourceAccessItem(
            id,
            getAccessTypeFromPermissionLevel('CAN_ADMINISTER_OAUTH_CLIENT'),
          )
        }
        updateResourceAccessItem={updateResourceAccessItem}
        removeResourceAccessItem={removeResourceAccessItem}
        showAddRemovePublicButton={false}
        showNotifyCheckbox={false}
        isInherited={false}
      />
      {error && <Alert severity="error">{error}</Alert>}
    </Stack>
  )
})
