import dayjs from 'dayjs'
import React, { useMemo, useState } from 'react'
import { Table } from 'react-bootstrap'
import {
  AccessApprovalSearchRequest,
  AccessApprovalSearchSort,
  AccessApprovalSortField,
  Direction,
} from '@sage-bionetworks/synapse-types'
import { Button, Typography } from '@mui/material'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useSearchAccessApprovalsInfinite } from '../../synapse-queries/dataaccess/useAccessApprovals'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import SortIcon from '../../assets/icons/Sort'
import { formatDate } from '../../utils/functions/DateFormatter'
import { upperFirst } from 'lodash-es'
import { UserBadge } from '../UserCard/UserBadge'

export type AccessApprovalsTableProps = {
  accessorId: string
  accessRequirementId?: string
}
export const AccessApprovalsTable: React.FunctionComponent<
  AccessApprovalsTableProps
> = ({ accessorId, accessRequirementId }) => {
  const [sort, setSort] = useState<AccessApprovalSearchSort>({
    field: AccessApprovalSortField.MODIFIED_ON,
    direction: Direction.DESC,
  })

  const searchRequest: AccessApprovalSearchRequest = useMemo(
    () => ({
      accessorId,
      accessRequirementId,
      sort: [sort],
    }),
    [accessorId, accessRequirementId, sort],
  )

  const { data, hasNextPage, fetchNextPage, isLoading } =
    useSearchAccessApprovalsInfinite(searchRequest)
  const accessApprovals = data?.pages.flatMap(page => page.results) ?? []

  const onSort = (field: AccessApprovalSortField) => {
    if (sort.field === field) {
      setSort({
        field,
        direction:
          sort.direction === Direction.DESC ? Direction.ASC : Direction.DESC,
      })
    } else {
      setSort({ field, direction: Direction.DESC })
    }
  }
  return (
    <div className="AccessApprovalsTable bootstrap-4-backport">
      <Table striped borderless bordered={false}>
        <thead>
          <tr>
            <th>AR ID</th>
            <th>Access Requirement Name</th>
            <th>Submitter</th>
            <th>Status</th>
            <th>
              <span className="SRC-split">
                <span>Modified Date</span>
                <SortIcon
                  role="button"
                  active={sort.field === AccessApprovalSortField.MODIFIED_ON}
                  direction={
                    sort.field === 'MODIFIED_ON'
                      ? sort.direction === 'DESC'
                        ? Direction.DESC
                        : Direction.ASC
                      : Direction.DESC
                  }
                  onClick={() => onSort(AccessApprovalSortField.MODIFIED_ON)}
                />
              </span>
            </th>
            <th>
              <span className="SRC-split">
                <span>Expires</span>
                <SortIcon
                  role="button"
                  active={sort.field === AccessApprovalSortField.EXPIRED_ON}
                  direction={
                    sort.field === 'EXPIRED_ON'
                      ? sort.direction === 'DESC'
                        ? Direction.DESC
                        : Direction.ASC
                      : Direction.DESC
                  }
                  onClick={() => onSort(AccessApprovalSortField.EXPIRED_ON)}
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {accessApprovals.map(item => {
            return (
              <tr key={item.id}>
                <td>
                  <a
                    href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!AccessRequirement:AR_ID=${item.accessRequirementId}`}
                  >
                    {item.accessRequirementId}
                  </a>
                </td>
                <td>{item.accessRequirementName}</td>
                <td>
                  <UserBadge userId={item.submitterId} />
                </td>
                <td>{upperFirst(item.state.toLocaleLowerCase())}</td>
                <td>{formatDate(dayjs(item.modifiedOn))}</td>
                <td
                  className={`${
                    item.expiredOn
                      ? new Date() > new Date(item.expiredOn)
                        ? 'expired'
                        : ''
                      : 'non-expire'
                  } remove-border`}
                >
                  {item.expiredOn ? formatDate(dayjs(item.expiredOn)) : 'Never'}
                </td>
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
      {!isLoading && accessApprovals.length === 0 && (
        <Typography className="SRC-center-text" variant="body1">
          No Results
        </Typography>
      )}
      {hasNextPage && (
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
  )
}
