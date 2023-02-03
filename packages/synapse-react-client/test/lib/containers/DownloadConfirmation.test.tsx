import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import {
  DownloadConfirmation,
  DownloadConfirmationProps,
} from '../../../src/lib/containers/download_list/DownloadConfirmation'
import { displayToast } from '../../../src/lib/containers/ToastMessage'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../src/lib/utils/SynapseContext'
import { QueryBundleRequest } from '../../../src/lib/utils/synapseTypes/'
import { AddToDownloadListRequest } from '../../../src/lib/utils/synapseTypes/DownloadListV2/AddToDownloadListRequest'
import { AddToDownloadListResponse } from '../../../src/lib/utils/synapseTypes/DownloadListV2/AddToDownloadListResponse'
import { FilesStatisticsResponse } from '../../../src/lib/utils/synapseTypes/DownloadListV2/QueryResponseDetails'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'
import { SynapseClient } from '../../../src/lib/utils'
import * as TestDownloadSpeed from '../../../src/lib/utils/functions/testDownloadSpeed'

const mockClose = jest.fn()
jest.mock('../../../src/lib/containers/ToastMessage', () => {
  return { displayToast: jest.fn() }
})

const mockToastFn = displayToast

const query = {
  sql: 'SELECT * FROM syn123456789',
}

const queryBundleRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn123456789',
  partMask: 0x2,
  query,
}

const queryBundleResponse: any = {
  queryCount: 8,
  sumFileSizes: { sumFileSizesBytes: 40128868, greaterThan: false },
  greaterThan: false,
  sumFileSizesBytes: 40128868,
}

const filesStatisticsResponse: FilesStatisticsResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.FilesStatisticsResponse',
  totalNumberOfFiles: 0,
  numberOfFilesAvailableForDownload: 0,
  numberOfFilesAvailableForDownloadAndEligibleForPackaging: 0,
  numberOfFilesRequiringAction: 0,
  sumOfFileSizesAvailableForDownload: 0,
}

const addFilesToDownloadListRequest: AddToDownloadListRequest = {
  query: query,
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
}

const addFilesToDownloadListResponse: AddToDownloadListResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
  numberOfFilesAdded: 1,
}

function renderComponent(
  componentProps?: DownloadConfirmationProps,
  wrapperProps?: SynapseContextType,
) {
  return render(
    // <QueryContextProvider queryContext={queryContext}>
    //   <QueryVisualizationContextProvider
    //     queryVisualizationContext={queryVisualizationContext}
    //   >
    <DownloadConfirmation {...componentProps} />,
    //   </QueryVisualizationContextProvider>
    // </QueryContextProvider>,
    {
      wrapper: createWrapper(wrapperProps),
    },
  )
}

describe('DownloadConfirmation', () => {
  const props: DownloadConfirmationProps = {
    fnClose: mockClose,
    topLevelControlsState: {
      showDownloadConfirmation: true,
    },
    setTopLevelControlsState: jest.fn(),
    getLastQueryRequest: () => queryBundleRequest,
  }

  beforeEach(() => {
    jest
      .spyOn(SynapseClient, 'addFilesToDownloadListV2')
      .mockResolvedValue(addFilesToDownloadListResponse)

    jest.spyOn(TestDownloadSpeed, 'testDownloadSpeed').mockResolvedValue(55)

    jest
      .spyOn(SynapseClient, 'getDownloadListStatistics')
      .mockResolvedValue(filesStatisticsResponse)

    jest
      .spyOn(SynapseClient, 'getQueryTableResults')
      .mockResolvedValue(queryBundleResponse)

    jest.clearAllMocks()
  })

  it("should call the 'close' function on cancel", async () => {
    renderComponent(props)
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }))
    expect(props.fnClose).toHaveBeenCalled()
  })

  it("should call getQueryTableResults with correct params and show 'add' and 'cancel' buttons once info is loaded", async () => {
    renderComponent(props)
    await waitFor(() => expect(screen.getAllByRole('button')).toHaveLength(2))
    screen.getByRole('button', { name: 'Cancel' })
    screen.getByRole('button', { name: 'Add' })
  })

  it('should call addFilesToDownload with correct params and show correct text while processing with no buttons', async () => {
    // Mock the function with a promise that never resolves.
    jest
      .spyOn(SynapseClient, 'addFilesToDownloadListV2')
      .mockReturnValue(new Promise(() => {}))

    renderComponent(props)
    const addButton = await screen.findByRole('button', { name: 'Add' })
    //click to add
    await userEvent.click(addButton)
    await screen.findByText('Adding Files To List')
    await waitFor(() => {
      expect(SynapseClient.addFilesToDownloadListV2).toHaveBeenCalledWith(
        addFilesToDownloadListRequest,
        MOCK_CONTEXT_VALUE.accessToken,
      )
    })

    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  it("should show the correct 'view downloads' link when done adding", async () => {
    renderComponent(props)
    await userEvent.click(await screen.findByRole('button', { name: 'Add' }))

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith(
        'File(s) were successfully added to your Download Cart.',
        'success',
        expect.objectContaining({
          primaryButtonConfig: expect.objectContaining({
            text: 'View Download Cart',
          }),
        }),
      ),
    )
  })

  it('displays a warning when files are already in the download cart', async () => {
    jest.spyOn(SynapseClient, 'getDownloadListStatistics').mockResolvedValue({
      ...filesStatisticsResponse,
      totalNumberOfFiles: 1,
    })

    renderComponent(props)

    await waitFor(() =>
      screen.getByText(
        'Files that you add will be mixed in with the files already in your download cart',
        {
          exact: false,
        },
      ),
    )
  })
})
