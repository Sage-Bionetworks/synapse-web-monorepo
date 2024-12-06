import { Box, Typography } from '@mui/material'
import {
  Reference,
  ReferenceList,
  RestrictableObjectDescriptor,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { isEqual, uniqWith } from 'lodash-es'
import { useMemo } from 'react'
import EntityHeaderTable, { EntityHeaderTableProps } from '../EntityHeaderTable'

export const REMOVE_BUTTON_TEXT = 'Mark for Removal from AR'
export const NO_ENTITIES_SELECTED = 'No entities selected.'

export type EntitySubjectsSelectorProps = {
  // will be filtered to only entity subjects
  subjects: RestrictableObjectDescriptor[]
  onUpdate?: (subjects: RestrictableObjectDescriptor[]) => void
  onUpdateEntityIDsTextbox: EntityHeaderTableProps['onUpdateEntityIDsTextbox']
}

function EntitySubjectsSelector(props: EntitySubjectsSelectorProps) {
  const { subjects, onUpdate, onUpdateEntityIDsTextbox } = props

  const references = useMemo(() => {
    return subjects
      .filter(subject => {
        return subject.type === RestrictableObjectType.ENTITY
      })
      .map(subject => {
        const ref: Reference = {
          targetId: subject.id,
        }
        return ref
      })
  }, [subjects])

  const handleChange = (updatedReferences: ReferenceList) => {
    if (onUpdate) {
      const dedupedReferences = uniqWith(updatedReferences, isEqual)
      const updatedSubjects = dedupedReferences.map(reference => {
        const subject: RestrictableObjectDescriptor = {
          id: reference.targetId,
          type: RestrictableObjectType.ENTITY,
        }
        return subject
      })
      onUpdate(updatedSubjects)
    }
  }

  return (
    <Box mb={2}>
      {references.length === 0 && (
        <Typography variant="body1Italic" mb={-4}>
          {NO_ENTITIES_SELECTED}
        </Typography>
      )}
      <EntityHeaderTable
        references={references}
        isEditable={Boolean(onUpdate)}
        onUpdate={newReferences => {
          handleChange(newReferences)
        }}
        removeSelectedRowsButtonText={REMOVE_BUTTON_TEXT}
        onUpdateEntityIDsTextbox={onUpdateEntityIDsTextbox}
      />
    </Box>
  )
}

export default EntitySubjectsSelector
