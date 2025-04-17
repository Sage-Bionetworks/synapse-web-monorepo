import { render, screen, waitFor } from '@testing-library/react'
import EntityDownloadConfirmation, {
  EntityDownloadConfirmationProps,
} from './EntityDownloadConfirmation'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { useGetEntity } from '../../synapse-queries/'
import { getUseQuerySuccessMock } from '../../testutils/ReactQueryMockUtils'
import mockTableEntity from '../../mocks/entity/mockTableEntity'
import mockFileEntityData from '../../mocks/entity/mockFileEntity'
import { mockFolderEntity } from '../../mocks/entity/mockEntity'

jest.mock('../download_list/TableQueryDownloadConfirmation', () => ({
  TableQueryDownloadConfirmation: () => (
    <div data-testid="TableQueryDownloadConfirmation" />
  ),
}))
jest.mock('../download_list/FolderDownloadConfirmation', () => ({
  FolderDownloadConfirmation: () => (
    <div data-testid="FolderDownloadConfirmation" />
  ),
}))

// Test comment to trigger workflow
// mock useGetEntity; don't need second arg when creating multiple values
// eg folder, table, file
jest.mock('../../synapse-queries')
const mockUseGetEntity = jest.mocked(useGetEntity)

beforeEach(() => {
  jest.clearAllMocks()

  mockUseGetEntity.mockReturnValue(
    getUseQuerySuccessMock(mockTableEntity.entity),
  )
})

// getUseQueryLoadingMock for loading test
// folder mock for folder test

describe('EntityDownloadConfirmation', () => {
  const propsFolder: EntityDownloadConfirmationProps = {
    entityId: 'syn7248585',
    onIsLoadingChange: jest.fn(),
    handleClose: jest.fn(),
  }

  const propsTable: EntityDownloadConfirmationProps = {
    entityId: 'syn53132831',
    onIsLoadingChange: jest.fn(),
    handleClose: jest.fn(),
  }

  const propsFile: EntityDownloadConfirmationProps = {
    entityId: 'syn59954313',
    onIsLoadingChange: jest.fn(),
    handleClose: jest.fn(),
  }

  it('table entities show the download confirmation UI when clicked', () => {
    render(<EntityDownloadConfirmation {...propsTable} />, {
      wrapper: createWrapper(),
    })
    screen.getByTestId('TableQueryDownloadConfirmation')
  })

  it('folder entities show the download confirmation UI when clicked', () => {
    mockUseGetEntity.mockReturnValue(getUseQuerySuccessMock(mockFolderEntity))
    render(<EntityDownloadConfirmation {...propsFolder} />, {
      wrapper: createWrapper(),
    })
    screen.getByTestId('FolderDownloadConfirmation')
  })

  it('waits for the button to disappear for non-table or non-folder entities', async () => {
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockFileEntityData.entity),
    )
    render(<EntityDownloadConfirmation {...propsFile} />, {
      wrapper: createWrapper(),
    })
    await waitFor(() => {
      const button = screen.queryByRole('button', {
        name: /download/i,
      })
      expect(button).not.toBeInTheDocument()
    })
  })
})
