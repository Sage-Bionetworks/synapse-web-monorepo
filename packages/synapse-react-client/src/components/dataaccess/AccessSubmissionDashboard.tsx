import React from 'react'
import { useIsCurrentUserACTMember } from '@/synapse-queries/index'
import { useDebouncedEffect } from '@/utils/hooks/useDebouncedEffect'
import { ACT_TEAM_ID } from '@/utils/SynapseConstants'
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  SubmissionReviewerFilterType,
  SubmissionState,
  TYPE_FILTER,
} from '@sage-bionetworks/synapse-types'
import { omitBy } from 'lodash-es'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import UserSearchBoxV2 from '../UserSearchBox/UserSearchBoxV2'
import {
  AccessRequestSubmissionTable,
  AccessRequestSubmissionTableProps,
} from './AccessRequestSubmissionTable'
import AccessRequirementSearchBox from './AccessRequirementSearchBox/AccessRequirementSearchBox'

export const getReviewerFilterID = (selected: string | null) => {
  if (selected && selected !== ACT_TEAM_ID.toString()) {
    return selected
  } else {
    return undefined
  }
}

export const DataAccessSubmissionDashboard = (): React.ReactNode => {
  const [accessRequirementId, setAccessRequirementId] = useState<
    string | undefined
  >()
  const [accessorId, setAccessorId] = useState<string | undefined>()
  const [reviewerId, setReviewerId] = useState<string | undefined>()
  const [reviewerFilterType, setReviewerFilterType] = useState<
    SubmissionReviewerFilterType | undefined
  >(SubmissionReviewerFilterType.ALL)
  const [tableProps, setTableProps] =
    useState<AccessRequestSubmissionTableProps>({
      accessRequirementId,
      accessorId,
      reviewerId,
      showRequesters: true,
      submissionState: SubmissionState.SUBMITTED,
    })

  const location = useLocation()
  const navigate = useNavigate()
  const INPUT_CHANGE_DEBOUNCE_DELAY_MS = 500

  const { data: isACT } = useIsCurrentUserACTMember()

  useEffect(() => {
    const initializeFromSearchParam = () => {
      const initialParams = new URLSearchParams(location.search)
      setAccessRequirementId(
        initialParams.get('accessRequirementId') ?? undefined,
      )
      setAccessorId(initialParams.get('accessorId') ?? undefined)
      setReviewerId(initialParams.get('reviewerId') ?? undefined)
      setReviewerFilterType(
        (initialParams.get(
          'reviewerFilterType',
        ) as SubmissionReviewerFilterType) ?? undefined,
      )
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
        reviewerFilterType: SubmissionReviewerFilterType | undefined,
      ) => {
        const params = new URLSearchParams(
          omitBy(
            {
              accessRequirementId,
              accessorId,
              reviewerId,
              reviewerFilterType,
            },
            item => item === undefined || item === '',
          ) as Record<string, string>,
        )
        navigate(
          {
            pathname: location.pathname,
            search: params.toString(),
          },
          { replace: true },
        )
      }

      updateQueryParams(
        accessRequirementId,
        accessorId,
        reviewerId,
        reviewerFilterType,
      )
      setTableProps({
        accessRequirementId,
        accessorId,
        reviewerId,
        reviewerFilterType,
        showRequesters: true,
        submissionState: SubmissionState.SUBMITTED,
      })
    },
    [
      accessRequirementId,
      accessorId,
      reviewerId,
      reviewerFilterType,
      navigate,
      location.pathname,
    ],
    INPUT_CHANGE_DEBOUNCE_DELAY_MS,
  )

  return (
    <div className="AccessSubmissionDashboard">
      <Grid
        container
        spacing={2}
        className="InputPanel"
        sx={{ alignItems: 'stretch' }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
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
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
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
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
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
        </Grid>
        {isACT && (
          <Grid size={12} sx={{ textAlign: 'right' }}>
            <Tooltip
              title={
                'This will hide submissions that have a reviewer specifically assigned.'
              }
            >
              <FormControlLabel
                control={<Checkbox />}
                value={
                  reviewerFilterType === SubmissionReviewerFilterType.ACT_ONLY
                }
                label="Reviewed by ACT only"
                onChange={(_, checked) => {
                  const newValue = checked
                    ? SubmissionReviewerFilterType.ACT_ONLY
                    : SubmissionReviewerFilterType.ALL
                  setReviewerFilterType(newValue)
                }}
              />
            </Tooltip>
          </Grid>
        )}
      </Grid>

      <Typography variant="headline3">Access Request Submissions</Typography>
      <AccessRequestSubmissionTable {...tableProps} />
    </div>
  )
}
