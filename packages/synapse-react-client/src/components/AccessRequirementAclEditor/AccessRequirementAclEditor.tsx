import { Alert, Box, Skeleton, Stack, Typography } from '@mui/material'
import {
  ACCESS_TYPE,
  AccessControlList,
  ResourceAccess,
} from '@sage-bionetworks/synapse-types'
import { isEqual } from 'lodash-es'
import React, { useEffect, useMemo, useState } from 'react'
import {
  useCreateAccessRequirementACL,
  useDeleteAccessRequirementACL,
  useGetAccessRequirementACL,
  useUpdateAccessRequirementACL,
} from '../../synapse-queries'
import UserSearchBoxV2 from '../UserSearchBox/UserSearchBoxV2'
import { ResourceAccessItem } from './ResourceAccessItem'

const textSx = {
  variant: 'body1',
  lineHeight: '20px',
  color: 'grey.800',
}

export const EMPTY_RESOURCE_ACCESS_LIST_TEXT =
  'Only ACT has permissions on this AR.'
export const REVIEWER_ALREADY_ADDED_ERROR_MESSAGE =
  'User or team already has permissions on this AR.'

export type AccessRequirementAclEditorProps = {
  accessRequirementId: string
  /* Prop changed by SWC when updated ACL should be saved */
  isSaveClicked: boolean
  /* Called when ACL has been saved or an error has been returned */
  onSaveComplete: (saveSuccessful: boolean) => void
}

export const AccessRequirementAclEditor: React.FunctionComponent<
  AccessRequirementAclEditorProps
> = (props: AccessRequirementAclEditorProps) => {
  const { accessRequirementId, isSaveClicked, onSaveComplete } = props
  const [error, setError] = useState<string | null>(null)
  const [resourceAccessList, setResourceAccessList] = useState<
    ResourceAccess[]
  >([])
  const [hasSavedAcl, setHasSavedAcl] = useState<boolean>(false)

  const { data: originalAcl, isLoading: isLoadingOriginalAcl } =
    useGetAccessRequirementACL(accessRequirementId)

  // set resourceAccessList when the fetched acl changes
  useEffect(() => {
    if (originalAcl) {
      setResourceAccessList(originalAcl.resourceAccess)
    }
  }, [originalAcl])

  // reset hasSavedAcl when isSaveClicked is false,
  // ...so that changing isSaveClicked to true will trigger saving the ACL
  useMemo(() => {
    if (!isSaveClicked && hasSavedAcl) {
      setHasSavedAcl(false)
    }
  }, [isSaveClicked, hasSavedAcl])

  const { mutate: deleteAcl } = useDeleteAccessRequirementACL({
    onSuccess: () => {
      setHasSavedAcl(true)
      onSaveComplete(true)
    },
    onError: error => {
      setError(error.reason)
      onSaveComplete(false)
    },
  })

  const { mutate: createAcl } = useCreateAccessRequirementACL({
    onSuccess: () => {
      setHasSavedAcl(true)
      onSaveComplete(true)
    },
    onError: error => {
      setError(error.reason)
      onSaveComplete(false)
    },
  })

  const { mutate: updateAcl } = useUpdateAccessRequirementACL({
    onSuccess: () => {
      setHasSavedAcl(true)
      onSaveComplete(true)
    },
    onError: error => {
      setError(error.reason)
      onSaveComplete(false)
    },
  })

  // save the ACL
  useMemo(() => {
    if (isSaveClicked && !hasSavedAcl) {
      setError(null)
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
        setHasSavedAcl(true)
        onSaveComplete(true)
      } else if (originalAcl === null && updatedAcl !== null) {
        createAcl(updatedAcl)
      } else if (updatedAcl === null) {
        deleteAcl(accessRequirementId)
      } else {
        updateAcl(updatedAcl)
      }
    }
  }, [
    isSaveClicked,
    hasSavedAcl,
    resourceAccessList,
    originalAcl,
    accessRequirementId,
    createAcl,
    deleteAcl,
    updateAcl,
    onSaveComplete,
  ])

  const addResourceAccessItem = (newReviewerId: string | null) => {
    if (newReviewerId) {
      const alreadyReviewer = resourceAccessList.some(
        resourceAccess => resourceAccess.principalId === Number(newReviewerId),
      )
      if (alreadyReviewer) {
        // TODO - confirm this case handling / text
        setError(REVIEWER_ALREADY_ADDED_ERROR_MESSAGE)
      } else {
        const newResourceAccess: ResourceAccess = {
          principalId: Number(newReviewerId),
          accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
        }
        const updatedResourceAccessList = [
          ...resourceAccessList,
          newResourceAccess,
        ]
        setResourceAccessList(updatedResourceAccessList)
      }
    } else {
      setError(null)
    }
  }

  const updateResourceAccessItem = (
    principalId: number,
    accessType: ACCESS_TYPE[],
  ) => {
    const updatedResourceAccessList = resourceAccessList.map(resourceAccess => {
      return resourceAccess.principalId === principalId
        ? { ...resourceAccess, accessType }
        : resourceAccess
    })
    setResourceAccessList(updatedResourceAccessList)
  }

  const removeResourceAccessItem = (principalId: number) => {
    const updatedResourceAccessList = resourceAccessList.filter(
      raListItem => raListItem.principalId !== principalId,
    )
    setResourceAccessList(updatedResourceAccessList)
  }

  return (
    <Stack gap="20px" direction="column">
      <Box>
        <Typography variant="headline3" mb="10px">
          Guide to AR permissions
        </Typography>
        <Typography sx={textSx} mb="10px">
          <span style={{ fontStyle: 'italic' }}>Can Review</span> means a user
          or team has access request review permission for this AR.
        </Typography>
        <Typography sx={textSx} mb="10px">
          <span style={{ fontStyle: 'italic' }}>Exempt Eligible</span> users and
          teams can bypass access requirements for entities they have been
          granted &quot;edit and delete&quot; permission on, via the
          &quot;Sharing Settings&quot; dialog in the Project Settings.
        </Typography>
        <Typography sx={{ ...textSx, color: 'grey.900' }}>
          ACT members always retain the ability to review or modify Access
          Requirements.
        </Typography>
      </Box>
      <Box>
        <Box mb="30px">
          <Typography variant="headline3" mb="10px">
            Users and Teams with Permissions
          </Typography>
          {isLoadingOriginalAcl && (
            <Skeleton variant="rectangular" width={250} height={24} />
          )}
          {/* TODO - confirm this case / language */}
          {!isLoadingOriginalAcl && resourceAccessList.length === 0 ? (
            <Typography variant="body1Italic">
              {EMPTY_RESOURCE_ACCESS_LIST_TEXT}
            </Typography>
          ) : (
            <>
              {resourceAccessList.map(resourceAccess => {
                return (
                  <ResourceAccessItem
                    key={resourceAccess.principalId}
                    resourceAccess={resourceAccess}
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
                )
              })}
            </>
          )}
        </Box>
        <Box>
          <Typography variant="headline3" mb="10px">
            Add More
          </Typography>
          <Typography
            sx={{ ...textSx, fontStyle: 'italic', color: 'grey.900' }}
            mb="20px"
          >
            Search for a username or team to add. You can search by username,
            first or last names, or team name
          </Typography>
          <Box>
            <Typography
              component="label"
              variant="smallText2"
              htmlFor="reviewer-search"
            >
              Select a reviewer
            </Typography>
            <UserSearchBoxV2
              inputId="reviewer-search"
              placeholder="Username, name (first and last) or team name."
              onChange={addResourceAccessItem}
            />
          </Box>
        </Box>
      </Box>
      {error && <Alert severity="error">{error}</Alert>}
    </Stack>
  )
}
