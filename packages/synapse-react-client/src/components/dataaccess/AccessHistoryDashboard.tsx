import React from 'react'
import SearchImage from '@/assets/icons/SearchImage'
import { useGetCurrentUserBundle } from '@/synapse-queries'
import { useDebouncedEffect } from '@/utils/hooks/useDebouncedEffect'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types'
import { omitBy } from 'lodash-es'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import UserOrTeamBadge from '../UserOrTeamBadge/UserOrTeamBadge'
import UserSearchBoxV2 from '../UserSearchBox/UserSearchBoxV2'
import {
  AccessApprovalsTable,
  AccessApprovalsTableProps,
} from './AccessApprovalsTable'
import {
  AccessRequestSubmissionTable,
  AccessRequestSubmissionTableProps,
} from './AccessRequestSubmissionTable'
import AccessRequirementSearchBox from './AccessRequirementSearchBox/AccessRequirementSearchBox'

const SearchStartComponent = (): React.ReactNode => {
  return (
    <div className="text-center">
      <SearchImage className="SearchPlaceholderImage" height="167px" />
      <Typography variant="body1Italic">
        Select a user using the search field above to view their data access
        history
      </Typography>
    </div>
  )
}

export const UserHistoryDashboard = (): React.ReactNode => {
  const [accessRequirementId, setAccessRequirementId] = useState<
    string | undefined
  >()
  const [accessorId, setAccessorId] = useState<string>('')
  const [approvalTableProps, setApprovalTableProps] =
    useState<AccessApprovalsTableProps>({
      accessorId,
      accessRequirementId,
    })
  const [submissionTableProps, setSubmissionTableProps] =
    useState<AccessRequestSubmissionTableProps>({
      showStatus: true,
      showSubmitter: true,
      accessorId,
      accessRequirementId,
    })

  const { data: userBundle } = useGetCurrentUserBundle()
  const hasActPermissions = userBundle?.isACTMember

  const location = useLocation()
  const navigate = useNavigate()
  const INPUT_CHANGE_DEBOUNCE_DELAY_MS = 500

  const onAccessorChange = useCallback((selected: string | null) => {
    if (selected) {
      setAccessorId(selected)
    } else {
      setAccessorId('')
    }
  }, [])

  useEffect(() => {
    const initializeFromSearchParam = () => {
      const initialParams = new URLSearchParams(location.search)
      setAccessRequirementId(
        initialParams.get('accessRequirementId') ?? undefined,
      )
      setAccessorId(initialParams.get('accessorId') ?? '')
    }
    initializeFromSearchParam()
  }, [location.search])

  useDebouncedEffect(
    () => {
      const updateQueryParams = (
        accessRequirementId: string | undefined,
        accessorId: string,
      ) => {
        const params = new URLSearchParams(
          omitBy(
            {
              accessRequirementId,
              accessorId,
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

      updateQueryParams(accessRequirementId, accessorId)
      setApprovalTableProps({
        accessorId,
        accessRequirementId,
      })
      setSubmissionTableProps({
        showStatus: true,
        showSubmitter: true,
        accessorId,
        accessRequirementId,
      })
    },
    [accessRequirementId, accessorId, navigate, location.pathname],
    INPUT_CHANGE_DEBOUNCE_DELAY_MS,
  )

  return (
    <div className="UserHistoryDashboard">
      <Grid container spacing={2} className="InputPanel">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            component="label"
            variant="smallText2"
            htmlFor="user-filter"
          >
            Select a user to view their access history
          </Typography>
          <UserSearchBoxV2
            inputId="user-filter"
            onChange={onAccessorChange}
            defaultValue={accessorId}
            placeholder="Search for a user name"
            typeFilter={TYPE_FILTER.USERS_ONLY}
          />
        </Grid>

        {accessorId && (
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              component="label"
              variant="smallText2"
              htmlFor="arName-filter"
            >
              Filter by Access Requirement Name
            </Typography>
            <AccessRequirementSearchBox
              inputId="arName-filter"
              placeholder="Search for an Access Requirement Name "
              onChange={setAccessRequirementId}
            />
          </Grid>
        )}
      </Grid>

      {accessorId ? (
        <>
          <Typography variant="headline3">
            Submissions including <UserOrTeamBadge principalId={accessorId} />
          </Typography>
          <AccessRequestSubmissionTable {...submissionTableProps} />
          {hasActPermissions && (
            <>
              <Typography variant="headline3">
                Status in Access Requirements
              </Typography>
              <AccessApprovalsTable {...approvalTableProps} />
            </>
          )}
        </>
      ) : (
        <SearchStartComponent />
      )}
    </div>
  )
}
