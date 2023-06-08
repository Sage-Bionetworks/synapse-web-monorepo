import dayjs from 'dayjs'
import React, { useMemo, useState } from 'react'
import { Table } from 'react-bootstrap'
import SortIcon from '../../assets/icons/Sort'
import { formatDate } from '../../utils/functions/DateFormatter'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useSearchAccessRequirementsInfinite } from '../../synapse-queries/dataaccess/useAccessRequirements'
import { ACT_TEAM_ID } from '../../utils/SynapseConstants'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import {
  AccessRequirementSearchRequest,
  AccessRequirementSearchSort,
} from '@sage-bionetworks/synapse-types'
import { Button, Typography } from '@mui/material'
import { EntityLink } from '../EntityLink'
import { StarTwoTone } from '@mui/icons-material'
import { SynapseSpinner } from '../LoadingScreen'
import UserOrTeamBadge from '../UserOrTeamBadge/UserOrTeamBadge'

export type AccessRequirementTableProps = {
  nameContains?: string
  relatedProjectId?: string
  reviewerId?: string
  accessType?: ACCESS_TYPE
  onCreateNewAccessRequirementClicked?: () => void
}

export function AccessRequirementTable(props: AccessRequirementTableProps) {
  const {
    nameContains,
    relatedProjectId,
    reviewerId,
    accessType,
    onCreateNewAccessRequirementClicked,
  } = props

  const [sort, setSort] = useState<AccessRequirementSearchSort>({
    field: 'CREATED_ON',
    direction: 'DESC',
  })

  const searchRequest: Omit<AccessRequirementSearchRequest, 'nextPageToken'> =
    useMemo(
      () => ({
        nameContains,
        relatedProjectId,
        reviewerId,
        accessType,
        sort: [sort],
      }),
      [nameContains, relatedProjectId, reviewerId, accessType, sort],
    )

  const { data, hasNextPage, fetchNextPage, isLoading } =
    useSearchAccessRequirementsInfinite(searchRequest)

  const accessRequirements = data?.pages.flatMap(page => page.results) ?? []
  const onSort = (field: AccessRequirementSearchSort['field']) => {
    if (sort.field === field) {
      setSort({ field, direction: sort.direction === 'DESC' ? 'ASC' : 'DESC' })
    } else {
      setSort({ field, direction: 'DESC' })
    }
  }

  return (
    <div className="bootstrap-4-backport">
      <div className="SRC-split">
        <Typography variant="headline3" style={{ marginBottom: 0 }}>
          Access Requirements
        </Typography>
        {onCreateNewAccessRequirementClicked && (
          <Button
            variant="outlined"
            color="primary"
            onClick={onCreateNewAccessRequirementClicked}
            startIcon={<StarTwoTone />}
          >
            New Access Requirement
          </Button>
        )}
      </div>

      <div className="AccessRequirementsTable">
        <Table striped borderless bordered={false}>
          <thead className="access-requirements-header">
            <tr>
              <th>AR ID</th>
              <th>
                <span className="SRC-split">
                  <span>Access Requirement Name</span>
                  <SortIcon
                    role="button"
                    onClick={() => onSort('NAME')}
                    aria-label="Sort by Name"
                    active={sort.field === 'NAME'}
                    direction={sort.field === 'NAME' ? sort.direction : 'DESC'}
                  />
                </span>
              </th>
              <th>Related to Projects</th>
              <th>Reviewer</th>
              <th>Last Modified</th>
              <th>
                <span className="SRC-split">
                  <span>Created On</span>
                  <SortIcon
                    role="button"
                    onClick={() => onSort('CREATED_ON')}
                    active={sort.field === 'CREATED_ON'}
                    aria-label="Sort by Created On"
                    direction={
                      sort.field === 'CREATED_ON' ? sort.direction : 'DESC'
                    }
                  />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {accessRequirements.map(ar => {
              return (
                <tr key={ar.id}>
                  <td>
                    <a
                      href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!AccessRequirement:AR_ID=${ar.id}`}
                    >
                      {ar.id}
                    </a>
                  </td>
                  <td>{ar.name}</td>
                  <td>
                    {ar.relatedProjectIds.map(projectId => (
                      <React.Fragment key={projectId}>
                        <EntityLink entity={projectId} />{' '}
                        <span className="InlineLabel">({projectId})</span>
                        <br />
                      </React.Fragment>
                    ))}
                  </td>
                  <td>
                    {ar.reviewerIds.length === 0 ? (
                      <UserOrTeamBadge principalId={ACT_TEAM_ID} />
                    ) : (
                      ar.reviewerIds.map(reviewerId => (
                        <UserOrTeamBadge
                          key={reviewerId}
                          principalId={reviewerId}
                        />
                      ))
                    )}
                  </td>
                  <td>{formatDate(dayjs(ar.modifiedOn))}</td>
                  <td>{formatDate(dayjs(ar.createdOn))}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        {isLoading && (
          <div className="SRC-center-text">
            <SynapseSpinner size={40} />
          </div>
        )}
        {!isLoading && accessRequirements.length === 0 && (
          <Typography className="SRC-center-text" variant="body1">
            No Results
          </Typography>
        )}
        {!hasNextPage ? (
          <></>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              fetchNextPage()
            }}
          >
            Show More
          </Button>
        )}
      </div>
    </div>
  )
}
