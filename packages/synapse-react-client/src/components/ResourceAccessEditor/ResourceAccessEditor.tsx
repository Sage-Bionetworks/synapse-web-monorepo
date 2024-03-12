import { Alert, Box, IconButton, Stack, Typography } from '@mui/material'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import React, { useState } from 'react'
import { PermissionLevel } from '../../utils/PermissionLevelToAccessType'
import IconSvg from '../IconSvg'
import UserOrTeamBadge from '../UserOrTeamBadge'
import UserSearchBoxV2 from '../UserSearchBox/UserSearchBoxV2'
import { PermissionLevelMenu } from './PermissionLevelMenu'

const availablePermissionLevels: PermissionLevel[] = [
  'CAN_REVIEW_SUBMISSIONS',
  'IS_EXEMPTION_ELIGIBLE',
  'CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE',
]

type ResourceAccessItemProps = {
  resourceAccess: ResourceAccess
  onChangeAccessType: (accessType: ACCESS_TYPE[]) => void
  onRemove: () => void
}

const ResourceAccessItem: React.FunctionComponent<ResourceAccessItemProps> = (
  props: ResourceAccessItemProps,
) => {
  const { resourceAccess, onChangeAccessType, onRemove } = props

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="10px"
        py="6px"
        role="row"
      >
        <Typography fontSize="16px" lineHeight="20px">
          <UserOrTeamBadge principalId={resourceAccess.principalId} />
        </Typography>
        <Stack direction="row" gap="10px" alignItems="center" width="225px">
          <PermissionLevelMenu
            currentAccessType={resourceAccess.accessType}
            availablePermissionLevels={availablePermissionLevels}
            onChange={onChangeAccessType}
          />
          <IconButton
            // TODO - confirm this language
            aria-label={`Remove from AR Permissions`}
            onClick={() => onRemove()}
            sx={{
              '&:hover': {
                color: 'error.main',
              },
            }}
          >
            <IconSvg icon={'delete'} fontSize={'inherit'} wrap={false} />
          </IconButton>
        </Stack>
      </Stack>
    </>
  )
}

const textSx = {
  variant: 'body1',
  lineHeight: '20px',
  color: 'grey.800',
}

export const EMPTY_RESOURCE_ACCESS_LIST_TEXT =
  'Only ACT has permissions on this AR.'
export const REVIEWER_ALREADY_ADDED_ERROR_MESSAGE =
  'User or team already has permissions on this AR.'

export type ResourceAccessEditorProps = {
  resourceAccessList: ResourceAccess[]
  onChange: (resourceAccess: ResourceAccess[]) => void
}

export const ResourceAccessEditor: React.FunctionComponent<
  ResourceAccessEditorProps
> = (props: ResourceAccessEditorProps) => {
  const { resourceAccessList, onChange } = props
  const [error, setError] = useState<string | null>(null)

  const handleNewReviewer = (newReviewerId: string | null) => {
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
        onChange([...resourceAccessList, newResourceAccess])
      }
    } else {
      setError(null)
    }
  }

  const handleOnChangeAccessType = (
    principalId: number,
    accessType: ACCESS_TYPE[],
  ) => {
    onChange(
      resourceAccessList.map(resourceAccess => {
        return resourceAccess.principalId === principalId
          ? { ...resourceAccess, accessType }
          : resourceAccess
      }),
    )
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
          {/* TODO - confirm this case / language */}
          {resourceAccessList.length === 0 ? (
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
                    onChangeAccessType={accessType =>
                      handleOnChangeAccessType(
                        resourceAccess.principalId,
                        accessType,
                      )
                    }
                    onRemove={() => {
                      onChange(
                        resourceAccessList.filter(
                          raListItem =>
                            raListItem.principalId !==
                            resourceAccess.principalId,
                        ),
                      )
                    }}
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
              onChange={handleNewReviewer}
            />
            {error && <Alert severity="error">{error}</Alert>}
          </Box>
        </Box>
      </Box>
    </Stack>
  )
}
