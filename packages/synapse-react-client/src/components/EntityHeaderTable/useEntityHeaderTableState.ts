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
  const [refsInState, _setRefsInState] = useState<ReferenceList>(
    cloneDeep(references),
  )
  const [newEntityIDs, _setNewEntityIDs] = useState<string>('')
  const [parseErrors, setParseErrors] = useState<string[]>([])

  /* Reset state if the `references` argument changes */
  useEffect(() => {
    _setRefsInState(cloneDeep(references))
  }, [references])

  const setNewEntityIDs = useCallback(
    (newValue: string) => {
      _setNewEntityIDs(newValue)
      onUpdateEntityIDsTextbox && onUpdateEntityIDsTextbox(newValue)
    },
    [onUpdateEntityIDsTextbox],
  )

  const setRefsInState = useCallback(
    (refs: ReferenceList) => {
      setRowSelection({})
      _setRefsInState(refs)
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
    refsInState,
    setRefsInState,
    newEntityIDs,
    setNewEntityIDs,
    parseErrors,
    setParseErrors,
  }
}
