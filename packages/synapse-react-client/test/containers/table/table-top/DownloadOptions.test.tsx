import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  QueryContextProvider,
  QueryContextType,
} from '../../../../src/components/QueryContext/QueryContext'
import { DownloadOptions } from '../../../../src/components/SynapseTable/table-top'
import { DownloadOptionsProps } from '../../../../src/components/SynapseTable/table-top/DownloadOptions'
import { createWrapper } from '../../../../src/testutils/TestingLibraryUtils'
import { mockFileViewEntity } from '../../../../src/mocks/entity/mockEntity'
import mockDatasetData from '../../../../src/mocks/entity/mockDataset'
import { mockTableEntity } from '../../../../src/mocks/entity/mockTableEntity'
import { QueryVisualizationContextProvider } from '../../../../src/components/QueryVisualizationWrapper'

const ADD_ALL_FILES_TO_DOWNLOAD_CART = 'Add All Files to Download Cart'

const mockDatasetEntity = mockDatasetData.entity

function renderComponent(
  props: DownloadOptionsProps,
  queryContext: Partial<QueryContextType>,
) {
  return render(
    <QueryContextProvider queryContext={queryContext}>
      <QueryVisualizationContextProvider
        queryVisualizationContext={{ hasSelectedRows: false, selectedRows: [] }}
      >
        <DownloadOptions {...props} />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    { wrapper: createWrapper() },
  )
}

describe('Download Options tests', () => {
  const props: DownloadOptionsProps = {
    onDownloadFiles: jest.fn(),
  }

  const queryContext: Partial<QueryContextType> = {
    entity: mockTableEntity,
    getCurrentQueryRequest: () => ({}),
  }

  it('Shows correct options for a TableEntity', async () => {
    renderComponent(props, queryContext)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    await userEvent.click(downloadOptionsButton)

    await screen.findByRole('button', { name: 'Export Table' })
    const programmaticOptionsMenuItem = await screen.findByRole('button', {
      name: 'Programmatic Options',
    })

    // Download files should not be visible for tables
    expect(
      screen.queryByRole('button', { name: ADD_ALL_FILES_TO_DOWNLOAD_CART }),
    ).not.toBeInTheDocument()

    // Verify that programmatic download isn't disabled
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a File View', async () => {
    const fileViewQueryContext = {
      ...queryContext,
      entity: mockFileViewEntity,
    }
    renderComponent(props, fileViewQueryContext)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    await userEvent.click(downloadOptionsButton)

    await screen.findByRole('button', { name: 'Export Table' })
    const downloadFilesMenuItem = await screen.findByRole('button', {
      name: ADD_ALL_FILES_TO_DOWNLOAD_CART,
    })
    const programmaticOptionsMenuItem = await screen.findByRole('button', {
      name: 'Programmatic Options',
    })

    // Verify that programmatic download and download files are not disabled
    expect(downloadFilesMenuItem.classList.contains('disabled')).toBe(false)
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a Project View', async () => {
    renderComponent(props, queryContext)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    await userEvent.click(downloadOptionsButton)

    await screen.findByRole('button', { name: 'Export Table' })
    const programmaticOptionsMenuItem = await screen.findByRole('button', {
      name: 'Programmatic Options',
    })

    // Download files should not be visible for project views
    expect(
      screen.queryByRole('button', { name: ADD_ALL_FILES_TO_DOWNLOAD_CART }),
    ).not.toBeInTheDocument()

    // Verify that programmatic download isn't disabled
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a stable version of a dataset', async () => {
    const isStableVersion = true
    const fileViewQueryContext = {
      ...queryContext,
      entity: {
        ...mockDatasetEntity,
        isLatestVersion: !isStableVersion,
      },
    }

    renderComponent(props, fileViewQueryContext)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    await userEvent.click(downloadOptionsButton)

    await screen.findByRole('button', { name: 'Export Table' })
    const downloadFilesMenuItem = await screen.findByRole('button', {
      name: ADD_ALL_FILES_TO_DOWNLOAD_CART,
    })
    const programmaticOptionsMenuItem = await screen.findByRole('button', {
      name: 'Programmatic Options',
    })

    // Verify that programmatic download and download files are not disabled
    expect(downloadFilesMenuItem.classList.contains('disabled')).toBe(false)
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a draft Dataset', async () => {
    const isStableVersion = false
    const fileViewQueryContext = {
      ...queryContext,
      entity: {
        ...mockDatasetEntity,
        isLatestVersion: !isStableVersion,
      },
    }

    renderComponent(props, fileViewQueryContext)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    await userEvent.click(downloadOptionsButton)

    await screen.findByRole('button', { name: 'Export Table' })
    const downloadFilesMenuItem = await screen.findByRole('button', {
      name: ADD_ALL_FILES_TO_DOWNLOAD_CART,
    })
    const programmaticOptionsMenuItem = await screen.findByRole('button', {
      name: 'Programmatic Options',
    })

    // Verify that programmatic download and download files are disabled
    expect(downloadFilesMenuItem.classList.contains('disabled')).toBe(true)
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      true,
    )
  })
})
