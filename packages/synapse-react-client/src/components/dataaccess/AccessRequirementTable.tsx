import dayjs from 'dayjs'
import React, { useMemo, useState } from 'react'
import { Table } from 'react-bootstrap'
import SortIcon from '../../assets/icons/Sort'
import { formatDate } from '../../utils/functions/DateFormatter'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useSearchAccessRequirementsInfinite } from '../../synapse-queries/dataaccess/useAccessRequirements'
import { ACT_TEAM_ID } from '../../utils/SynapseConstants'
import {
  ACCESS_REQUIREMENT_CONCRETE_TYPE,
  ACCESS_TYPE,
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE,
} from '@sage-bionetworks/synapse-types'
import {
  AccessRequirementSearchRequest,
  AccessRequirementSearchSort,
} from '@sage-bionetworks/synapse-types'
import { Button, Typography } from '@mui/material'
import { EntityLink } from '../EntityLink'
import { StarTwoTone } from '@mui/icons-material'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import UserOrTeamBadge from '../UserOrTeamBadge/UserOrTeamBadge'

export type AccessRequirementTableProps = {
  nameOrID?: string
  relatedProjectId?: string
  reviewerId?: string
  accessType?: ACCESS_TYPE
  onCreateNewAccessRequirementClicked?: () => void
}

export function accessRequirementConcreteTypeValueToDisplayValue(
  accessRequirementConcreteTypeValue: ACCESS_REQUIREMENT_CONCRETE_TYPE,
) {
  switch (accessRequirementConcreteTypeValue) {
    case TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE
    case SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE: {
      return SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE
    }
    case MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE
    case ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE
    case LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE:
      return LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE
    default:
      return 'Unknown'
  }
}
const isIntegerInput = (v: string): boolean => {
  return /^\d+$/.test(v)
}

export function AccessRequirementTable(props: AccessRequirementTableProps) {
  const {
    nameOrID,
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
    useMemo(() => {
      // SWC-6615: If the input string is a single integer, assume it's the AR ID.  Otherwise use as the nameContains field.
      let nameContains: string | undefined = undefined
      let ids: number[] | undefined = undefined
      if (nameOrID !== undefined) {
        const nameOrIDTrimmed = nameOrID.trim()
        if (isIntegerInput(nameOrIDTrimmed)) {
          ids = [Number.parseInt(nameOrIDTrimmed)]
        } else {
          nameContains = nameOrIDTrimmed
        }
      }
      return {
        ids,
        nameContains,
        relatedProjectId,
        reviewerId,
        accessType,
        sort: [sort],
      }
    }, [nameOrID, relatedProjectId, reviewerId, accessType, sort])

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
              <th>Type</th>
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
                    {accessRequirementConcreteTypeValueToDisplayValue(ar.type)}
                  </td>
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
