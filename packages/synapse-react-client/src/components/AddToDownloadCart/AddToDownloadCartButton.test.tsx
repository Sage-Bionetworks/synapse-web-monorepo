import { render, screen, waitFor } from '@testing-library/react'
import AddToDownloadCartButton, {
  AddToDownloadCartButtonProps,
} from './AddToDownloadCartButton'
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

describe('AddToDownloadCartButton', () => {
  const propsFolder: AddToDownloadCartButtonProps = {
    entityId: 'syn7248585',
    buttonText: 'Download',
    onIsLoadingChange: jest.fn(),
    handleClose: jest.fn(),
  }

  const propsTable: AddToDownloadCartButtonProps = {
    entityId: 'syn53132831',
    buttonText: 'Download',
    onIsLoadingChange: jest.fn(),
    handleClose: jest.fn(),
  }

  const propsFile: AddToDownloadCartButtonProps = {
    entityId: 'syn59954313',
    buttonText: 'Download',
    onIsLoadingChange: jest.fn(),
    handleClose: jest.fn(),
  }

  it('table entities show the download confirmation UI when clicked', () => {
    render(<AddToDownloadCartButton {...propsTable} />, {
      wrapper: createWrapper(),
    })
    screen.getByTestId('TableQueryDownloadConfirmation')
  })

  it('folder entities show the download confirmation UI when clicked', () => {
    mockUseGetEntity.mockReturnValue(getUseQuerySuccessMock(mockFolderEntity))
    render(<AddToDownloadCartButton {...propsFolder} />, {
      wrapper: createWrapper(),
    })
    screen.getByTestId('FolderDownloadConfirmation')
  })

  it('waits for the button to disappear for non-table or non-folder entities', async () => {
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockFileEntityData.entity),
    )
    render(<AddToDownloadCartButton {...propsFile} />, {
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
