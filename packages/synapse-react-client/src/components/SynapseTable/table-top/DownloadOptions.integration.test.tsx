import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { DownloadOptions } from './index'
import { DownloadOptionsProps } from './DownloadOptions'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import mockDatasetData from '../../../mocks/entity/mockDataset'
import { mockTableEntity } from '../../../mocks/entity/mockTableEntity'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { mockFileViewEntity } from '../../../mocks/entity/mockFileView'
import QueryWrapper from '../../QueryWrapper'
import { rest, server } from '../../../mocks/msw/server'
import { getHandlersForTableQuery } from '../../../mocks/msw/handlers/tableQueryHandlers'
import mockQueryResponseData from '../../../mocks/mockQueryResponseData'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import { mockProjectViewEntity } from '../../../mocks/entity/mockProjectView'

const ADD_ALL_FILES_TO_DOWNLOAD_CART = 'Add All Files to Download Cart'

const mockDatasetEntity = mockDatasetData.entity

function renderComponent(
  props: DownloadOptionsProps,
  queryRequest: QueryBundleRequest,
) {
  return render(
    <QueryWrapper initQueryRequest={queryRequest}>
      <QueryVisualizationWrapper>
        <DownloadOptions {...props} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    { wrapper: createWrapper() },
  )
}
const props: DownloadOptionsProps = {
  onDownloadFiles: jest.fn(),
}

const tableEntityQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: mockTableEntity.id,
  partMask: 255,
  query: {
    sql: `SELECT * FROM ${mockTableEntity.id}`,
  },
}

const fileViewQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: mockFileViewEntity.id,
  partMask: 255,
  query: {
    sql: `SELECT * FROM ${mockFileViewEntity.id}`,
  },
}

const projectViewQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: mockProjectViewEntity.id,
  partMask: 255,
  query: {
    sql: `SELECT * FROM ${mockProjectViewEntity.id}`,
  },
}

const datasetQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: mockDatasetEntity.id!,
  partMask: 255,
  query: {
    sql: `SELECT * FROM ${mockDatasetEntity.id}`,
  },
}

describe('Download Options tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(...getHandlersForTableQuery(mockQueryResponseData))
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows correct options for a TableEntity', async () => {
    renderComponent(props, tableEntityQueryRequest)

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
    renderComponent(props, fileViewQueryRequest)

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
    renderComponent(props, projectViewQueryRequest)

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
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/entity/${mockDatasetEntity.id!}`,
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockDatasetEntity,
              isLatestVersion: !isStableVersion,
            }),
          )
        },
      ),
    )

    renderComponent(props, datasetQueryRequest)

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
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/entity/${mockDatasetEntity.id!}`,
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockDatasetEntity,
              isLatestVersion: !isStableVersion,
            }),
          )
        },
      ),
    )

    renderComponent(props, datasetQueryRequest)

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
