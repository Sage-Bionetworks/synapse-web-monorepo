import { omitBy } from 'lodash-es'
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDebouncedEffect } from '../../utils/hooks/useDebouncedEffect'
import { SubmissionState } from '@sage-bionetworks/synapse-types'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types'
import { Typography } from '@mui/material'
import {
  AccessRequestSubmissionTable,
  AccessRequestSubmissionTableProps,
} from './AccessRequestSubmissionTable'
import UserSearchBoxV2 from '../UserSearchBox/UserSearchBoxV2'
import AccessRequirementSearchBox from './AccessRequirementSearchBox/AccessRequirementSearchBox'
import { ACT_TEAM_ID } from '../../utils/SynapseConstants'

export const getReviewerFilterID = (selected: string | null) => {
  if (selected && selected !== ACT_TEAM_ID.toString()) {
    return selected
  } else {
    return undefined
  }
}

export const DataAccessSubmissionDashboard = () => {
  const [accessRequirementId, setAccessRequirementId] = useState<
    string | undefined
  >()
  const [accessorId, setAccessorId] = useState<string | undefined>()
  const [reviewerId, setReviewerId] = useState<string | undefined>()
  const [tableProps, setTableProps] =
    useState<AccessRequestSubmissionTableProps>({
      accessRequirementId,
      accessorId,
      reviewerId,
      showRequesters: true,
      submissionState: SubmissionState.SUBMITTED,
    })

  const location = useLocation()
  const history = useHistory()
  const INPUT_CHANGE_DEBOUNCE_DELAY_MS = 500

  useEffect(() => {
    const initializeFromSearchParam = () => {
      const initialParams = new URLSearchParams(location.search)
      setAccessRequirementId(
        initialParams.get('accessRequirementId') ?? undefined,
      )
      setAccessorId(initialParams.get('accessorId') ?? undefined)
      setReviewerId(initialParams.get('reviewerId') ?? undefined)
    }
    initializeFromSearchParam()
  }, [location.search])

  const onRequesterChange = useCallback((selected: string | null) => {
    if (selected) {
      setAccessorId(selected)
    } else {
      setAccessorId(undefined)
    }
  }, [])

  const onReviewerChange = useCallback((selected: string | null) => {
    setReviewerId(getReviewerFilterID(selected))
  }, [])

  useDebouncedEffect(
    () => {
      const updateQueryParams = (
        accessRequirementId: string | undefined,
        accessorId: string | undefined,
        reviewerId: string | undefined,
      ) => {
        const params = new URLSearchParams(
          omitBy(
            {
              accessRequirementId,
              accessorId,
              reviewerId,
            },
            item => item === undefined || item === '',
          ) as Record<string, string>,
        )
        history.replace({
          pathname: location.pathname,
          search: params.toString(),
        })
      }

      updateQueryParams(accessRequirementId, accessorId, reviewerId)
      setTableProps({
        accessRequirementId,
        accessorId,
        reviewerId,
        showRequesters: true,
        submissionState: SubmissionState.SUBMITTED,
      })
    },
    [accessRequirementId, accessorId, reviewerId, history, location.pathname],
    INPUT_CHANGE_DEBOUNCE_DELAY_MS,
  )

  return (
    <div className="AccessSubmissionDashboard">
      <div className="InputPanel">
        <div>
          <Typography
            component="label"
            variant="smallText2"
            htmlFor="arId-filter"
          >
            Filter by Access Requirement Name
          </Typography>
          <AccessRequirementSearchBox
            inputId="arId-filter"
            onChange={setAccessRequirementId}
            placeholder="Search for an Access Requirement Name "
          />
        </div>
        <div>
          <Typography
            component="label"
            variant="smallText2"
            htmlFor="requester-filter"
          >
            Filter by Requester
          </Typography>
          <UserSearchBoxV2
            inputId="requester-filter"
            placeholder="Search for a user name"
            defaultValue={accessorId}
            onChange={onRequesterChange}
            typeFilter={TYPE_FILTER.USERS_ONLY}
          />
        </div>
        <div>
          <Typography
            component="label"
            variant="smallText2"
            htmlFor="reviewer-filter"
          >
            Filter by Reviewer
          </Typography>
          <UserSearchBoxV2
            inputId="reviewer-filter"
            placeholder="Search for a user or team name"
            defaultValue={reviewerId}
            onChange={onReviewerChange}
          />
        </div>
      </div>

      <Typography variant="headline3">Access Request Submissions</Typography>
      <AccessRequestSubmissionTable {...tableProps} />
    </div>
  )
}
