import { omitBy } from 'lodash-es'
import React, { useCallback, useEffect, useState } from 'react'
import { Button, FormControl, FormLabel, InputGroup } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import { useDebouncedEffect } from '../../utils/hooks/useDebouncedEffect'
import { EntityType } from '../../utils/synapseTypes'
import { EntityFinderModal } from '../entity_finder/EntityFinderModal'
import { FinderScope } from '../entity_finder/tree/EntityTree'
import IconSvg from '../IconSvg'
import UserSearchBoxV2 from '../UserSearchBoxV2'
import {
  AccessRequirementTable,
  AccessRequirementTableProps,
} from './AccessRequirementTable'

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

  const [nameContains, setNameContains] = useState<string>('')
  const [relatedProjectId, setRelatedProjectId] = useState<string | undefined>(
    undefined,
  )
  const [reviewerId, setReviewerId] = useState<string | undefined>(undefined)

  useEffect(() => {
    function initializeFromSearchParams() {
      const initialParams = new URLSearchParams(location.search)
      setNameContains(initialParams.get('nameContains') ?? '')
      setRelatedProjectId(initialParams.get('relatedProjectId') ?? undefined)
      setReviewerId(initialParams.get('reviewerId') ?? undefined)
    }
    initializeFromSearchParams()
  }, [location.search])

  const [showEntityFinder, setShowEntityFinder] = useState(false)

  const [tableProps, setTableProps] = useState<AccessRequirementTableProps>({
    nameContains,
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
        nameContains: string | undefined,
        relatedProjectId: string | undefined,
        reviewerId: string | undefined,
      ) {
        // Don't include undefined/empty parameters
        const params = omitBy(
          {
            nameContains,
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
        nameContains,
        relatedProjectId,
        reviewerId,
        onCreateNewAccessRequirementClicked,
      })
      updateQueryParams(nameContains, relatedProjectId, reviewerId)
    },
    [
      nameContains,
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
    <div className="AccessRequirementDashboard bootstrap-4-backport">
      <EntityFinderModal
        configuration={{
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: null,
          selectMultiple: false,
          selectableTypes: [EntityType.PROJECT],
        }}
        show={showEntityFinder}
        onClose={() => {
          setShowEntityFinder(false)
        }}
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
      <div className="InputPanel">
        <div>
          <FormLabel htmlFor="ar-name-filter">
            Filter by Access Requirement Name
          </FormLabel>

          <InputGroup>
            <FormControl
              id="ar-name-filter"
              type="text"
              placeholder="Search for an Access Requirement Name"
              value={nameContains}
              onChange={e => {
                setNameContains(e.target.value)
              }}
            />
            <IconSvg icon="searchOutlined" />
          </InputGroup>
        </div>
        <div>
          <FormLabel htmlFor="project-id-filter">Filter by Project</FormLabel>
          <div className="ProjectIdInputGroup">
            <FormControl
              id="project-id-filter"
              type="text"
              placeholder="Enter a project SynID"
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
            <Button
              variant="outline"
              onClick={() => {
                setShowEntityFinder(true)
              }}
            >
              Browse
            </Button>
          </div>
        </div>
        <div>
          <FormLabel htmlFor="reviewer-filter">Filter by Reviewer</FormLabel>
          <UserSearchBoxV2
            inputId="reviewer-filter"
            placeholder="Search for a username or team name"
            defaultValue={reviewerId}
            onChange={onReviewerChange}
          />
        </div>
      </div>
      <AccessRequirementTable {...tableProps} />
    </div>
  )
}

export default AccessRequirementDashboard
