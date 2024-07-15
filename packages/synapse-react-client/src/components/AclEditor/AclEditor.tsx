import React from 'react'
import { Box, Collapse, Typography } from '@mui/material'
import { ResourceAccessItem } from './ResourceAccessItem'
import UserSearchBoxV2 from '../UserSearchBox/UserSearchBoxV2'
import { ResourceAccess } from '@sage-bionetworks/synapse-types'
import useUpdateAcl from './useUpdateAcl'
import { TransitionGroup } from 'react-transition-group'
import { PermissionLevel } from '../../utils/PermissionLevelToAccessType'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

export type AclEditorProps = {
  isInEditMode: boolean
  isLoading: boolean
  resourceAccessList: ResourceAccess[]
  availablePermissionLevels: PermissionLevel[]
  emptyText: React.ReactNode
  addResourceAccessItem: ReturnType<
    typeof useUpdateAcl
  >['addResourceAccessItem']
  updateResourceAccessItem: ReturnType<
    typeof useUpdateAcl
  >['updateResourceAccessItem']
  removeResourceAccessItem: ReturnType<
    typeof useUpdateAcl
  >['removeResourceAccessItem']
}

export function AclEditor(props: AclEditorProps) {
  const {
    isInEditMode,
    isLoading,
    resourceAccessList,
    availablePermissionLevels,
    emptyText,
    addResourceAccessItem,
    updateResourceAccessItem,
    removeResourceAccessItem,
  } = props
  if (isLoading) {
    return (
      <Box display={'flex'} justifyContent={'center'} height={'150px'}>
        <SynapseSpinner size={50} />
      </Box>
    )
  }

  return (
    <Box>
      <Box mb="30px">
        <Typography variant="headline3" mb="10px">
          Users and Teams with Permissions
        </Typography>

        {resourceAccessList.length === 0 ? (
          <Typography variant="body1Italic">{emptyText}</Typography>
        ) : (
          <TransitionGroup>
            {resourceAccessList.map(resourceAccess => {
              return (
                <Collapse key={resourceAccess.principalId}>
                  <ResourceAccessItem
                    key={resourceAccess.principalId}
                    resourceAccess={resourceAccess}
                    availablePermissionLevels={availablePermissionLevels}
                    isInEditMode={isInEditMode}
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
      {isInEditMode && (
        <Box>
          <Typography variant="headline3" mb="10px">
            Add More
          </Typography>
          <Typography
            sx={{
              variant: 'body1',
              lineHeight: '20px',
              fontStyle: 'italic',
              color: 'grey.900',
            }}
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
              Add a user or team
            </Typography>
            <UserSearchBoxV2
              value={null}
              inputId="reviewer-search"
              placeholder="Username, name (first and last) or team name."
              onChange={id => addResourceAccessItem(id)}
            />
          </Box>
        </Box>
      )}
    </Box>
  )
}
