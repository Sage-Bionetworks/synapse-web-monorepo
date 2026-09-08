import EntityIdTextField from '@/components/EntityFinder/EntityIdTextField'
import { FinderScope } from '@/components/EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '@/components/EntityFinder/VersionSelectionType'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  PROJECT_FINDER_PROMPT,
  PROJECT_FINDER_TITLE,
  PROJECT_SELECTOR_DESCRIPTION,
  PROJECT_SELECTOR_LABEL,
} from '../utils/constants'

export type ProjectSelectorFieldProps = {
  value: string
  onChange: (value: string) => void
}

/**
 * Lets the user choose which project a new task belongs to. Only shown when the host page did not already
 * supply a `projectId` from its own context (e.g. when creating a task from the Curator Dashboard, which
 * has no project context, as opposed to a project's Metadata Tasks page, which does).
 */
export default function ProjectSelectorField(props: ProjectSelectorFieldProps) {
  const { value, onChange } = props

  return (
    <EntityIdTextField
      label={PROJECT_SELECTOR_LABEL}
      value={value}
      onChange={onChange}
      description={PROJECT_SELECTOR_DESCRIPTION}
      entityFinderModalProps={{
        title: PROJECT_FINDER_TITLE,
        promptCopy: PROJECT_FINDER_PROMPT,
        confirmButtonCopy: 'Select',
        configuration: {
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: 'root',
          selectMultiple: false,
          treeOnly: false,
          versionSelection: VersionSelectionType.DISALLOWED,
          selectableTypes: [EntityType.project],
        },
      }}
    />
  )
}
