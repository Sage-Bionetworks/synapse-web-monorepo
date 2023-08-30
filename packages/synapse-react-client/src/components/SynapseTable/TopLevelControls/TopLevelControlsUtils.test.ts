import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import {
  getNumberOfResultsToAddToDownloadListCopy,
  getNumberOfResultsToInvokeAction,
  getNumberOfResultsToInvokeActionCopy,
} from './TopLevelControlsUtils'

describe('TopLevelControlsUtils', () => {
  describe('getNumberOfResultsToInvokeAction', () => {
    it('has selected rows', () => {
      const hasSelectedRows = true
      const selectedRows = [{}, {}] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      expect(
        getNumberOfResultsToInvokeAction(hasSelectedRows, selectedRows, data),
      ).toEqual(2)
    })
    it('has no selected rows', () => {
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      expect(
        getNumberOfResultsToInvokeAction(hasSelectedRows, selectedRows, data),
      ).toEqual(200)
    })
    it('selection is disabled, total result count is available', () => {
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      expect(
        getNumberOfResultsToInvokeAction(hasSelectedRows, selectedRows, data),
      ).toEqual(200)
    })
    it('selection is disabled, total result count is not available', () => {
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = undefined
      expect(
        getNumberOfResultsToInvokeAction(hasSelectedRows, selectedRows, data),
      ).toEqual(undefined)
    })
  })

  describe('getNumberOfResultsToInvokeActionCopy', () => {
    it('is unfiltered and selection is disabled', () => {
      const hasResettableFilters = false
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('all files')
    })
    it('is unfiltered and has no selected rows', () => {
      const hasResettableFilters = false
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('all files')
    })
    it('has selected rows', () => {
      const hasResettableFilters = false
      const hasSelectedRows = true
      const selectedRows = [{}, {}] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('2 files')
    })
    it('is filtered without selection', () => {
      const hasResettableFilters = true
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('200 files')
    })
    it('is filtered with selection', () => {
      const hasResettableFilters = true
      const hasSelectedRows = true
      const selectedRows = [{}, {}] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('2 files')
    })

    it('is filtered without selection, count is not available', () => {
      const hasResettableFilters = true
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = undefined
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToInvokeActionCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('files')
    })
  })

  describe('getNumberOfResultsToAddToDownloadListCopy', () => {
    it('is unfiltered and selection is disabled', () => {
      const hasResettableFilters = false
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToAddToDownloadListCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('Add All Files to Download Cart')
    })
    it('is unfiltered and has no selected rows', () => {
      const hasResettableFilters = false
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToAddToDownloadListCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('Add All Files to Download Cart')
    })
    it('has selected rows', () => {
      const hasResettableFilters = false
      const hasSelectedRows = true
      const selectedRows = [{}, {}] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToAddToDownloadListCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('Add 2 Selected Files to Download Cart')
    })
    it('is filtered without selection', () => {
      const hasResettableFilters = true
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToAddToDownloadListCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('Add 200 Selected Files to Download Cart')
    })
    it('is filtered with selection', () => {
      const hasResettableFilters = true
      const hasSelectedRows = true
      const selectedRows = [{}, {}] as Row[]
      const data = { queryCount: 200 } as QueryResultBundle
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToAddToDownloadListCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('Add 2 Selected Files to Download Cart')
    })

    it('is filtered without selection, count is not available', () => {
      const hasResettableFilters = true
      const hasSelectedRows = false
      const selectedRows = [] as Row[]
      const data = undefined
      const unitDescription = 'file'
      expect(
        getNumberOfResultsToAddToDownloadListCopy(
          hasResettableFilters,
          hasSelectedRows,
          selectedRows,
          data,
          unitDescription,
        ),
      ).toEqual('Add to Download Cart')
    })
  })
})
