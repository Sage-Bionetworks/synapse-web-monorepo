import { InputSizedButton } from '@/components/styled/InputSizedButton'
import { SYNAPSE_ENTITY_ID_REGEX } from '@/utils/functions/RegularExpressions'
import { SearchOutlined } from '@mui/icons-material'
import { Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { useDebouncedState } from '@react-hookz/web'
import { EntityType } from '@sage-bionetworks/synapse-types'
import { omitBy } from 'lodash-es'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { EntityFinderModal } from '../EntityFinder/EntityFinderModal'
import { FinderScope } from '../EntityFinder/tree/EntityTree'
import UserSearchBoxV2 from '../UserSearchBox/UserSearchBoxV2'
import { AccessRequirementTable } from './AccessRequirementTable'

export const AR_NAME_OR_ID_SEARCH_PARAM_KEY = 'nameOrID'
export const RELATED_PROJECT_ID_SEARCH_PARAM_KEY = 'relatedProjectId'
export const REVIEWER_ID_SEARCH_PARAM_KEY = 'reviewerId'
export const AR_TYPE_SEARCH_PARAM_KEY = 'type'

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
  const urlSearchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  )
  const navigate = useNavigate()

  /**
   * When an input changes, update the props passed to the table and update the search params.
   *
   * Debounced to prevent firing many queries while the user is entering text.
   */
  const [nameOrID, setNameOrID] = useDebouncedState<string>(
    urlSearchParams.get(AR_NAME_OR_ID_SEARCH_PARAM_KEY) ?? '',
    INPUT_CHANGE_DEBOUNCE_DELAY_MS,
  )
  const [relatedProjectId, setRelatedProjectId] = useDebouncedState<
    string | undefined
  >(
    urlSearchParams.get(RELATED_PROJECT_ID_SEARCH_PARAM_KEY) ?? undefined,
    INPUT_CHANGE_DEBOUNCE_DELAY_MS,
  )
  const [reviewerId, setReviewerId] = useDebouncedState<string | undefined>(
    urlSearchParams.get(REVIEWER_ID_SEARCH_PARAM_KEY) ?? undefined,
    INPUT_CHANGE_DEBOUNCE_DELAY_MS,
  )
  const [typeFilter, setTypeFilter] = useState<string | undefined>(
    urlSearchParams.get(AR_TYPE_SEARCH_PARAM_KEY) ?? undefined,
  )

  const projectFilterFieldIsError: boolean = useMemo(
    () =>
      !!(relatedProjectId && !SYNAPSE_ENTITY_ID_REGEX.exec(relatedProjectId)),
    [relatedProjectId],
  )

  const [showEntityFinder, setShowEntityFinder] = useState(false)

  // Update the QueryParams when the filter state changes
  useEffect(() => {
    // Don't include undefined/empty parameters
    const params = omitBy(
      {
        // Sync the search params state with the debounced props
        [AR_NAME_OR_ID_SEARCH_PARAM_KEY]: nameOrID,
        [RELATED_PROJECT_ID_SEARCH_PARAM_KEY]: relatedProjectId,
        [REVIEWER_ID_SEARCH_PARAM_KEY]: reviewerId,
        [AR_TYPE_SEARCH_PARAM_KEY]: typeFilter, // typeFilter state is not debounced
      },
      item => item === undefined || item === '',
    ) as Record<string, string>

    // Add the new params to the URL
    // Replace history because intuitively, the user has not navigated to a new page
    const paramsObject = new URLSearchParams(params)
    navigate(
      {
        pathname: location.pathname,
        search: paramsObject.toString(),
      },
      { replace: true },
    )
  }, [
    nameOrID,
    relatedProjectId,
    reviewerId,
    typeFilter,
    navigate,
    location.pathname,
  ])

  const onReviewerChange = useCallback(
    (selected: string | null) => {
      if (selected) {
        setReviewerId(selected)
      } else {
        setReviewerId(undefined)
      }
    },
    [setReviewerId],
  )

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
      <Grid component={'form'} container spacing={2} className="InputPanel">
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Filter by Access Requirement Name or ID"
            id="ar-name-filter"
            type="text"
            fullWidth
            placeholder="Search for an Access Requirement Name or ID"
            onChange={e => {
              setNameOrID(e.target.value)
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            gap: '5px',
            alignItems: 'stretch',
          }}
        >
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
            placeholder="Search for a username or team name"
            defaultValue={reviewerId}
            onChange={onReviewerChange}
          />
        </Grid>
      </Grid>
      <AccessRequirementTable
        nameOrID={nameOrID}
        relatedProjectId={relatedProjectId}
        reviewerId={reviewerId}
        onCreateNewAccessRequirementClicked={
          onCreateNewAccessRequirementClicked
        }
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
      />
    </div>
  )
}

export default AccessRequirementDashboard
