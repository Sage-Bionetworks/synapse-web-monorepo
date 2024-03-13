import { Alert, Box, Skeleton, Stack, Typography } from '@mui/material'
import {
  ACCESS_TYPE,
  AccessControlList,
  ResourceAccess,
} from '@sage-bionetworks/synapse-types'
import React, { useEffect, useState } from 'react'
import { useGetAccessRequirementACL } from '../../synapse-queries'
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

type ACL_OPERATION = 'UPDATE' | 'CREATE' | 'DELETE' | 'NOOP'
export type AccessRequirementAclEditorProps = {
  accessRequirementId: string
  onUpdate: (acl: AccessControlList | null, aclOperation: ACL_OPERATION) => void
}

export const AccessRequirementAclEditor: React.FunctionComponent<
  AccessRequirementAclEditorProps
> = (props: AccessRequirementAclEditorProps) => {
  const { accessRequirementId, onUpdate } = props
  const [error, setError] = useState<string | null>(null)
  const [resourceAccessList, setResourceAccessList] = useState<
    ResourceAccess[]
  >([])

  const { data: originalAcl, isLoading: isLoadingOriginalAcl } =
    useGetAccessRequirementACL(accessRequirementId)

  useEffect(() => {
    if (originalAcl) {
      setResourceAccessList(originalAcl.resourceAccess)
    }
  }, [originalAcl])

  const baseAcl: AccessControlList = originalAcl
    ? originalAcl
    : { id: accessRequirementId, resourceAccess: resourceAccessList }

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
        onUpdate(
          {
            ...baseAcl,
            resourceAccess: updatedResourceAccessList,
          },
          originalAcl === null ? 'CREATE' : 'UPDATE',
        )
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
    onUpdate(
      {
        ...baseAcl,
        resourceAccess: updatedResourceAccessList,
      },
      originalAcl === null ? 'CREATE' : 'UPDATE',
    )
  }

  const removeResourceAccessItem = (principalId: number) => {
    const updatedResourceAccessList = resourceAccessList.filter(
      raListItem => raListItem.principalId !== principalId,
    )
    setResourceAccessList(updatedResourceAccessList)

    const updatedAcl =
      updatedResourceAccessList.length === 0
        ? null
        : { ...baseAcl, resourceAccess: updatedResourceAccessList }

    let updateType: ACL_OPERATION
    if (originalAcl === null && updatedAcl === null) {
      updateType = 'NOOP'
    } else if (originalAcl === null) {
      updateType = 'CREATE'
    } else if (updatedAcl === null) {
      updateType = 'DELETE'
    } else {
      updateType = 'UPDATE'
    }

    onUpdate(updatedAcl, updateType)
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
            {error && <Alert severity="error">{error}</Alert>}
          </Box>
        </Box>
      </Box>
    </Stack>
  )
}
