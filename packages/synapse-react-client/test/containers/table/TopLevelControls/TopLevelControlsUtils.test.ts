import { getSchemaForPropertyType } from '../../../../src/components/SchemaDrivenAnnotationEditor/field/AdditionalPropertiesSchemaField'
import {
  getNumberOfResultsToInvokeAction,
  getNumberOfResultsToInvokeActionCopy,
} from '../../../../src/components/SynapseTable/TopLevelControls/TopLevelControlsUtils'
import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'

describe('TopLevelControlsUtils', () => {
  describe('getNumberOfResultsToInvokeAction', () => {
    it('has selected rows', () => {
      const isRowSelectionVisible = true
      const selectedRows = [{}, {}] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      expect(
        getNumberOfResultsToInvokeAction(
          isRowSelectionVisible,
          selectedRows,
          data,
        ),
      ).toEqual(2)
    })
    it('has no selected rows', () => {
      const isRowSelectionVisible = true
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      expect(
        getNumberOfResultsToInvokeAction(
          isRowSelectionVisible,
          selectedRows,
          data,
        ),
      ).toEqual(200)
    })
    it('selection is disabled, total result count is available', () => {
      const isRowSelectionVisible = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      expect(
        getNumberOfResultsToInvokeAction(
          isRowSelectionVisible,
          selectedRows,
          data,
        ),
      ).toEqual(200)
    })
    it('selection is disabled, total result count is not available', () => {
      const isRowSelectionVisible = false
      const selectedRows = [] as Row[]
      const data = undefined
      expect(
        getNumberOfResultsToInvokeAction(
          isRowSelectionVisible,
          selectedRows,
          data,
        ),
      ).toEqual(undefined)
    })
  })

  describe('getNumberOfResultsToInvokeActionCopy', () => {
    it('is unfiltered and selection is disabled', () => {
      const hasResettableFilters = false
      const isRowSelectionVisible = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          isRowSelectionVisible,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('all files')
    })
    it('is unfiltered and has no selected rows', () => {
      const hasResettableFilters = false
      const isRowSelectionVisible = true
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          isRowSelectionVisible,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('all files')
    })
    it('has selected rows', () => {
      const hasResettableFilters = false
      const isRowSelectionVisible = true
      const selectedRows = [{}, {}] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          isRowSelectionVisible,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('2 files')
    })
    it('is filtered without selection', () => {
      const hasResettableFilters = true
      const isRowSelectionVisible = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          isRowSelectionVisible,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('200 files')
    })
    it('is filtered with selection', () => {
      const hasResettableFilters = true
      const isRowSelectionVisible = true
      const selectedRows = [{}, {}] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          isRowSelectionVisible,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('2 files')
    })

    it('is filtered without selection, count is not available', () => {
      const hasResettableFilters = true
      const isRowSelectionVisible = false
      const selectedRows = [] as Row[]
      const data = undefined
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          isRowSelectionVisible,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('files')
    })
  })
})
