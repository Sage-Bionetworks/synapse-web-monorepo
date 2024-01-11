import React from 'react'
import {
  ENTITY_VIEW_TYPE_MASK_PROJECT,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import WizardChoiceButtonGroup from '../WizardChoiceButton/WizardChoiceButtonGroup'
import WizardChoiceButton from '../WizardChoiceButton/WizardChoiceButton'
import { Link } from '@mui/material'
import WizardChoiceButtonDescription from '../WizardChoiceButton/WizardChoiceButtonDescription'
import { useSynapseContext } from '../../utils'

const FILE_VIEW_DESCRIPTION = (
  <>
    <WizardChoiceButtonDescription>
      This view lists all files, folders, and/or tables in the selected folders
      or projects.
    </WizardChoiceButtonDescription>
    <Link
      href={
        'https://help.synapse.org/docs/Views.2011070739.html#Views-CreatingaFileView'
      }
      target="_blank"
      onClick={e => {
        e.stopPropagation()
      }}
    >
      More about File Views
    </Link>
  </>
)

const PROJECT_VIEW_DESCRIPTION = (
  <>
    <WizardChoiceButtonDescription>
      This view lists all (and only) your selected projects.
    </WizardChoiceButtonDescription>
    <Link
      href={
        'https://help.synapse.org/docs/Views.2011070739.html#Views-CreatingaProjectView'
      }
      target="_blank"
      onClick={e => {
        e.stopPropagation()
      }}
    >
      More about Project Views
    </Link>
  </>
)

const SUBMISSION_VIEW_DESCRIPTION = (
  <>
    <WizardChoiceButtonDescription>
      This view lists all submissions within one or more evaluation queues.
    </WizardChoiceButtonDescription>
    <Link
      href={
        'https://help.synapse.org/docs/Views.2011070739.html#Views-CreatingaSubmissionView'
      }
      target="_blank"
      onClick={e => {
        e.stopPropagation()
      }}
    >
      More about Submission Views
    </Link>
  </>
)

const MATERIALIZED_VIEW_DESCRIPTION = (
  <>
    <WizardChoiceButtonDescription>
      The results of a query across multiple sources, defined by a SQL
      statement.
    </WizardChoiceButtonDescription>
    <Link
      href={
        'https://help.synapse.org/docs/Combining-Data-from-Multiple-Table-Sources.2973270158.html'
      }
      target="_blank"
      onClick={e => {
        e.stopPropagation()
      }}
    >
      More about Materialized Views
    </Link>
  </>
)

const VIRTUAL_TABLE_DESCRIPTION = (
  <WizardChoiceButtonDescription>
    A saved query on another table or view where complex filters can be applied
    to aggregated results.
  </WizardChoiceButtonDescription>
)

export type ViewTypeSelectionProps = {
  /* Callback including the chosen type, and optional viewTypeMask if included in the choice (e.g. Project Views) */
  onTypeSelected: (type: EntityType, viewTypeMask?: number) => void
}

/**
 * React component for selecting a View type in the View creation wizard.
 * Renders UI to show all view types where the user must choose one to continue.
 */
export default function ViewTypeSelection(props: ViewTypeSelectionProps) {
  const { onTypeSelected } = props

  const { isInExperimentalMode } = useSynapseContext()

  return (
    <WizardChoiceButtonGroup>
      <WizardChoiceButton
        title={'Files, Folders, and Other Objects'}
        description={FILE_VIEW_DESCRIPTION}
        onClick={() => {
          onTypeSelected(EntityType.ENTITY_VIEW)
        }}
      />
      <WizardChoiceButton
        title={'Projects'}
        description={PROJECT_VIEW_DESCRIPTION}
        onClick={() => {
          onTypeSelected(EntityType.ENTITY_VIEW, ENTITY_VIEW_TYPE_MASK_PROJECT)
        }}
      />
      <WizardChoiceButton
        title={'Challenge Submissions'}
        description={SUBMISSION_VIEW_DESCRIPTION}
        onClick={() => {
          onTypeSelected(EntityType.SUBMISSION_VIEW)
        }}
      />
      <WizardChoiceButton
        title={'Materialized View'}
        description={MATERIALIZED_VIEW_DESCRIPTION}
        onClick={() => {
          onTypeSelected(EntityType.MATERIALIZED_VIEW)
        }}
      />
      {isInExperimentalMode && (
        <WizardChoiceButton
          title={'Virtual Table'}
          description={VIRTUAL_TABLE_DESCRIPTION}
          onClick={() => {
            onTypeSelected(EntityType.VIRTUAL_TABLE)
          }}
        />
      )}
    </WizardChoiceButtonGroup>
  )
}
