import { omitBy } from 'lodash-es'
import React, { useCallback, useEffect, useState } from 'react'
import { FormLabel } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { useDebouncedEffect } from '../../utils/hooks/useDebouncedEffect'
import { TYPE_FILTER } from '../../utils/synapseTypes'
import { Typography } from '@mui/material'
import {
  AccessApprovalsTable,
  AccessApprovalsTableProps,
} from '../AccessApprovalsTable'
import {
  AccessRequestSubmissionTable,
  AccessRequestSubmissionTableProps,
} from '../AccessRequestSubmissionTable'
import UserOrTeamBadge from '../UserOrTeamBadge'
import UserSearchBoxV2 from '../UserSearchBoxV2'
import AccessRequirementSearchBox from './AccessRequirementSearchBox'
import { useGetCurrentUserBundle } from '../../utils/hooks/SynapseAPI'

export const UserHistoryDashboard = () => {
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
  const history = useHistory()
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
        history.replace({
          pathname: location.pathname,
          search: params.toString(),
        })
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
    [accessRequirementId, accessorId, history, location.pathname],
    INPUT_CHANGE_DEBOUNCE_DELAY_MS,
  )

  const NoSearchResultComponent = () => {
    return (
      <div className="text-center">
        <img
          className="SearchPlaceholderImage"
          alt="Begin searching"
          src="https://s3.amazonaws.com/static.synapse.org/images/search-happy.svg"
        />
        <Typography variant="body1Italic">
          Select a user using the search field above to view their data access
          history
        </Typography>
      </div>
    )
  }

  return (
    <div className="UserHistoryDashboard bootstrap-4-backport">
      <div className="InputPanel">
        <div>
          <FormLabel htmlFor="user-filter">
            Select a user to view their access history
          </FormLabel>
          <UserSearchBoxV2
            inputId="user-filter"
            onChange={onAccessorChange}
            defaultValue={accessorId}
            placeholder="Search for a user name"
            typeFilter={TYPE_FILTER.USERS_ONLY}
          />
        </div>

        {accessorId && (
          <div>
            <FormLabel htmlFor="arName-filter">
              Filter by Access Requirement Name
            </FormLabel>
            <AccessRequirementSearchBox
              inputId="arName-filter"
              placeholder="Search for an Access Requirement Name "
              onChange={setAccessRequirementId}
            />
          </div>
        )}
      </div>

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
        <NoSearchResultComponent />
      )}
    </div>
  )
}
