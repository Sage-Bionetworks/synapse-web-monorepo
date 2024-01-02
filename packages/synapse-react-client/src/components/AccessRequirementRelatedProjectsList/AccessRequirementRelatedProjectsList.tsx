import React from 'react'
import { AccessRequirementSearchRequest } from '@sage-bionetworks/synapse-types'
import { useSearchAccessRequirementsInfinite } from '../../synapse-queries'
import { EntityLink } from '../EntityLink'
import { Alert, List, ListItem, Typography } from '@mui/material'
import pluralize from 'pluralize'

export type AccessRequirementRelatedProjectsListProps = {
  accessRequirementId: number
}

export const AccessRequirementRelatedProjectsList = (
  props: AccessRequirementRelatedProjectsListProps,
) => {
  const searchRequest: Omit<AccessRequirementSearchRequest, 'nextPageToken'> = {
    ids: [props.accessRequirementId],
  }

  const { data, isError, error } =
    useSearchAccessRequirementsInfinite(searchRequest)
  const ar = data?.pages.flatMap(page => page.results)[0] ?? undefined

  const nRelatedProjects = ar?.relatedProjectIds.length || 0
  const relatedProjectsTitle = `${pluralize(
    'project',
    nRelatedProjects,
    true,
  )}${nRelatedProjects > 0 ? ':' : ''}`

  return (
    <>
      {ar && (
        <>
          <Typography variant="body1">{relatedProjectsTitle}</Typography>
          <List sx={{ listStyleType: 'disc', pl: 4 }}>
            {ar.relatedProjectIds.map(projectId => (
              <ListItem
                sx={{
                  display: 'list-item',
                  py: '4px',
                  // remove extra margin added by type.less to p tags
                  '.no-margin-y': { my: 0 },
                }}
                key={projectId}
              >
                <EntityLink
                  entity={projectId}
                  link={false}
                  showIcon={false}
                  className="no-margin-y"
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
      {isError && <Alert severity="error">{error.message}</Alert>}
    </>
  )
}
