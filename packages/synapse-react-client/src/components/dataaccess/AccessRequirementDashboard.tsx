import { omitBy } from 'lodash-es'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import { useHistory, useLocation } from 'react-router-dom'
import { useDebouncedEffect } from '../../utils/hooks/useDebouncedEffect'
import { EntityType } from '@sage-bionetworks/synapse-types'
import { EntityFinderModal } from '../EntityFinder/EntityFinderModal'
import { FinderScope } from '../EntityFinder/tree/EntityTree'
import UserSearchBoxV2 from '../UserSearchBox/UserSearchBoxV2'
import {
  AccessRequirementTable,
  AccessRequirementTableProps,
} from './AccessRequirementTable'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import { InputSizedButton } from '../styled/InputSizedButton'

export type AccessRequirementDashboardProps = {
  onCreateNewAccessRequirementClicked?: () => void
}

export function AccessRequirementDashboard(
  props: AccessRequirementDashboardProps,
) {
  // Amount of time to wait after an input value changes before sending a new request
  const INPUT_CHANGE_DEBOUNCE_DELAY_MS = 500

  const { onCreateNewAccessRequirementClicked } = props

  const location = useLocation()
  const history = useHistory()

  const [nameOrID, setNameOrID] = useState<string>('')
  const [relatedProjectId, setRelatedProjectId] = useState<string | undefined>(
    undefined,
  )
  const [reviewerId, setReviewerId] = useState<string | undefined>(undefined)

  const projectFilterFieldIsError: boolean = useMemo(
    () =>
      !!(relatedProjectId && !SYNAPSE_ENTITY_ID_REGEX.exec(relatedProjectId)),
    [relatedProjectId],
  )

  useEffect(() => {
    function initializeFromSearchParams() {
      const initialParams = new URLSearchParams(location.search)
      setNameOrID(initialParams.get('nameOrID') ?? '')
      setRelatedProjectId(initialParams.get('relatedProjectId') ?? undefined)
      setReviewerId(initialParams.get('reviewerId') ?? undefined)
    }
    initializeFromSearchParams()
  }, [location.search])

  const [showEntityFinder, setShowEntityFinder] = useState(false)

  const [tableProps, setTableProps] = useState<AccessRequirementTableProps>({
    nameOrID,
    relatedProjectId,
    reviewerId,
    onCreateNewAccessRequirementClicked,
  })

  /**
   * When an input changes, update the props passed to the table and update the search params.
   *
   * Debounced to prevent firing many queries while the user is entering text.
   */
  useDebouncedEffect(
    () => {
      function updateQueryParams(
        nameOrID: string | undefined,
        relatedProjectId: string | undefined,
        reviewerId: string | undefined,
      ) {
        // Don't include undefined/empty parameters
        const params = omitBy(
          {
            nameOrID,
            relatedProjectId,
            reviewerId,
          },
          item => item === undefined || item === '',
        ) as Record<string, string>

        // Add the new params to the URL
        // Replace history because intuitively, the user has not navigated to a new page
        const paramsObject = new URLSearchParams(params)
        history.replace({
          pathname: location.pathname,
          search: paramsObject.toString(),
        })
      }

      setTableProps({
        nameOrID,
        relatedProjectId,
        reviewerId,
        onCreateNewAccessRequirementClicked,
      })
      updateQueryParams(nameOrID, relatedProjectId, reviewerId)
    },
    [
      nameOrID,
      relatedProjectId,
      reviewerId,
      onCreateNewAccessRequirementClicked,
      history,
      location.pathname,
    ],
    INPUT_CHANGE_DEBOUNCE_DELAY_MS,
  )

  const onReviewerChange = useCallback((selected: string | null) => {
    if (selected) {
      setReviewerId(selected)
    } else {
      setReviewerId(undefined)
    }
  }, [])

  return (
    <div className="AccessRequirementDashboard">
      <EntityFinderModal
        configuration={{
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: null,
          selectMultiple: false,
          selectableTypes: [EntityType.PROJECT],
          treeOnly: true,
        }}
        show={showEntityFinder}
        onCancel={() => {
          setShowEntityFinder(false)
        }}
        title={'Select Project to Filter Access Requirements'}
        promptCopy={
          'Select a project to find Access Requirements that are associated with that project. Access Requirements will be found if the Access Requirement is applied to the project, or if it is applied to any item inside the project.'
        }
        onConfirm={selected => {
          setRelatedProjectId(selected[0].targetId)
          setShowEntityFinder(false)
        }}
        confirmButtonCopy={'Select'}
      />
      <form className="InputPanel">
        <div>
          <TextField
            label="Filter by Access Requirement Name or ID"
            id="ar-name-filter"
            type="text"
            fullWidth
            placeholder="Search for an Access Requirement Name or ID"
            value={nameOrID}
            onChange={e => {
              setNameOrID(e.target.value)
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Box display="flex" gap="5px" alignItems="stretch">
          <TextField
            label="Filter by Project"
            id="project-id-filter"
            type="text"
            fullWidth
            placeholder="Enter a project SynID"
            error={projectFilterFieldIsError}
            helperText={
              projectFilterFieldIsError
                ? 'Value must be a Synapse ID, e.g. "syn1234"'
                : undefined
            }
            value={relatedProjectId}
            onChange={e => {
              const newValue = e.target.value
              if (newValue === '') {
                setRelatedProjectId(undefined)
              } else {
                setRelatedProjectId(newValue)
              }
            }}
          />
          <InputSizedButton
            variant="outlined"
            color="primary"
            onClick={() => {
              setShowEntityFinder(true)
            }}
          >
            Browse
          </InputSizedButton>
        </Box>
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
            placeholder="Search for a username or team name"
            defaultValue={reviewerId}
            onChange={onReviewerChange}
          />
        </div>
      </form>
      <AccessRequirementTable {...tableProps} />
    </div>
  )
}

export default AccessRequirementDashboard
