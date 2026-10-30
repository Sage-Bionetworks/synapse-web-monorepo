import { useState, useCallback, useEffect } from 'react'
import { RowSelectionState } from '@tanstack/react-table'
import { cloneDeep } from 'lodash-es'
import { ReferenceList } from '@sage-bionetworks/synapse-types'

export function useEntityHeaderTableState(
  references: ReferenceList,
  onUpdateEntityIDsTextbox?: (value: string) => void,
  onUpdate?: (updatedRefs: ReferenceList) => void,
) {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [refsState, setRefsState] = useState<ReferenceList>(
    cloneDeep(references),
  )
  const [newEntityIDsState, setNewEntityIDsState] = useState<string>('')
  const [parseErrors, setParseErrors] = useState<string[]>([])

  /* Reset state if the `references` argument changes */
  useEffect(() => {
    setRefsState(cloneDeep(references))
  }, [references])

  const setNewEntityIDs = useCallback(
    (newValue: string) => {
      setNewEntityIDsState(newValue)
      if (onUpdateEntityIDsTextbox) {
        onUpdateEntityIDsTextbox(newValue)
      }
    },
    [onUpdateEntityIDsTextbox],
  )

  const setRefsInState = useCallback(
    (refs: ReferenceList) => {
      setRowSelection({})
      setRefsState(refs)
      if (onUpdate) {
        onUpdate(refs)
      }
      setParseErrors([])
      setNewEntityIDs('')
    },
    [onUpdate, setNewEntityIDs],
  )

  return {
    rowSelection,
    setRowSelection,
    refsInState: refsState,
    setRefsInState,
    newEntityIDs: newEntityIDsState,
    setNewEntityIDs,
    parseErrors,
    setParseErrors,
  }
}
