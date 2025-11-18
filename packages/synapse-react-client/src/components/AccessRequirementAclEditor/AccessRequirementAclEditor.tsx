import {
  useCreateAccessRequirementACL,
  useDeleteAccessRequirementACL,
  useGetAccessRequirementACL,
  useUpdateAccessRequirementACL,
} from '@/synapse-queries'
import spreadSx from '@/react-ui/theme/utils/mergeSx'
import { PermissionLevel } from '@/utils/PermissionLevelToAccessType'
import { Alert, Box, Stack, Typography } from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { ACCESS_TYPE, AccessControlList } from '@sage-bionetworks/synapse-types'
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

const textSx = {
  variant: 'body1',
  lineHeight: '20px',
  color: 'grey.800',
}

export const EMPTY_RESOURCE_ACCESS_LIST_TEXT =
  'Only ACT has permissions on this AR.'

const availablePermissionLevels: PermissionLevel[] = [
  'CAN_REVIEW_SUBMISSIONS',
  'IS_EXEMPTION_ELIGIBLE',
  'CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE',
]

export type AccessRequirementAclEditorHandle = {
  /* Allow the parent component to trigger saving the ACL, so this may be embedded in an arbitrary modal. */
  save: () => void
}

export type AccessRequirementAclEditorProps = {
  accessRequirementId: string
  /* Called when ACL has been saved or an error has been returned */
  onSaveComplete: (saveSuccessful: boolean) => void
}

export const AccessRequirementAclEditor = forwardRef(
  function AccessRequirementAclEditor(
    props: AccessRequirementAclEditorProps,
    ref: ForwardedRef<AccessRequirementAclEditorHandle>,
  ) {
    const { accessRequirementId, onSaveComplete } = props
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
      useGetAccessRequirementACL(accessRequirementId, {
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
        setResourceAccessList(originalAcl.resourceAccess)
      }
    }, [originalAcl, setResourceAccessList])

    const { mutate: deleteAcl } = useDeleteAccessRequirementACL({
      onSuccess: () => onMutationSuccess(),
      onError: error => onMutationError(error),
    })

    const { mutate: createAcl } = useCreateAccessRequirementACL({
      onSuccess: () => onMutationSuccess(),
      onError: error => onMutationError(error),
    })

    const { mutate: updateAcl } = useUpdateAccessRequirementACL({
      onSuccess: () => onMutationSuccess(),
      onError: error => onMutationError(error),
    })

    useImperativeHandle(
      ref,
      () => {
        return {
          save() {
            const updatedAcl: AccessControlList | null =
              resourceAccessList.length === 0
                ? null
                : {
                    ...originalAcl,
                    id: originalAcl?.id || accessRequirementId,
                    resourceAccess: resourceAccessList,
                  }
            const aclIsUnchanged =
              (originalAcl === null && updatedAcl == null) ||
              // ignore properties that will change when the ACL is saved (etag, modifiedOn)
              (isEqual(originalAcl?.resourceAccess, resourceAccessList) &&
                originalAcl?.id === updatedAcl?.id)

            if (aclIsUnchanged) {
              // noop
              onSaveComplete(true)
            } else if (originalAcl === null && updatedAcl !== null) {
              createAcl(updatedAcl)
            } else if (updatedAcl === null) {
              deleteAcl(accessRequirementId)
            } else {
              updateAcl(updatedAcl)
            }
          },
        }
      },
      [
        accessRequirementId,
        originalAcl,
        resourceAccessList,
        createAcl,
        deleteAcl,
        onSaveComplete,
        updateAcl,
      ],
    )

    return (
      <Stack
        direction="column"
        sx={{
          gap: '20px',
        }}
      >
        <Box>
          <Typography
            variant="headline3"
            sx={{
              mb: '10px',
            }}
          >
            Guide to AR permissions
          </Typography>
          <Typography
            sx={spreadSx(
              {
                mb: '10px',
              },
              textSx,
            )}
          >
            <span style={{ fontStyle: 'italic' }}>Can Review</span> means a user
            or team has access request review permission for this AR.
          </Typography>
          <Typography
            sx={spreadSx(
              {
                mb: '10px',
              },
              textSx,
            )}
          >
            <span style={{ fontStyle: 'italic' }}>Exempt Eligible</span> users
            and teams can bypass access requirements for entities they have been
            granted &quot;edit and delete&quot; permission on, via the
            &quot;Sharing Settings&quot; dialog in the Project Settings.
          </Typography>
          <Typography sx={{ ...textSx, color: 'grey.900' }}>
            ACT members always retain the ability to review or modify Access
            Requirements.
          </Typography>
        </Box>
        <AclEditor
          resourceAccessList={resourceAccessList}
          availablePermissionLevels={availablePermissionLevels}
          isLoading={isLoadingOriginalAcl}
          canEdit={true}
          emptyText={EMPTY_RESOURCE_ACCESS_LIST_TEXT}
          onAddPrincipalToAcl={id =>
            addResourceAccessItem(id, [ACCESS_TYPE.REVIEW_SUBMISSIONS])
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
  },
)
