import mockDatasetData from '@/mocks/entity/mockDataset'
import { mockFileViewEntity } from '@/mocks/entity/mockFileView'
import { mockProjectViewEntity } from '@/mocks/entity/mockProjectView'
import { mockTableEntity } from '@/mocks/entity/mockTableEntity'
import mockQueryResponseData from '@/mocks/mockQueryResponseData'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  ColumnTypeEnum,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper'
import QueryWrapper from '../../QueryWrapper'
import { DownloadOptionsProps } from './DownloadOptions'
import { DownloadOptions } from './index'

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
  onDownloadFiles: vi.fn(),
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

const mockQueryResponseDataWithoutEntityIdColumn = cloneDeep(
  mockQueryResponseData,
)
mockQueryResponseDataWithoutEntityIdColumn.columnModels =
  mockQueryResponseDataWithoutEntityIdColumn.columnModels?.filter(
    cm => cm.columnType !== ColumnTypeEnum.ENTITYID,
  )

describe('Download Options tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows correct options for a TableEntity with no ENTITY_ID column', async () => {
    registerTableQueryResult(
      tableEntityQueryRequest.query,
      mockQueryResponseDataWithoutEntityIdColumn,
    )

    renderComponent(props, tableEntityQueryRequest)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    await userEvent.click(downloadOptionsButton)

    await screen.findByRole('menuitem', { name: 'Export Table' })
    const programmaticOptionsMenuItem = await screen.findByRole('menuitem', {
      name: 'Programmatic Options',
    })

    // Download files should not be visible for tables
    await waitFor(() => {
      expect(
        screen.queryByRole('menuitem', {
          name: ADD_ALL_FILES_TO_DOWNLOAD_CART,
        }),
      ).not.toBeInTheDocument()
    })
    // Verify that programmatic download isn't disabled
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a File View', async () => {
    registerTableQueryResult(fileViewQueryRequest.query, mockQueryResponseData)

    renderComponent(props, fileViewQueryRequest)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    await userEvent.click(downloadOptionsButton)

    await screen.findByRole('menuitem', { name: 'Export Table' })
    const downloadFilesMenuItem = await screen.findByRole('menuitem', {
      name: ADD_ALL_FILES_TO_DOWNLOAD_CART,
    })
    const programmaticOptionsMenuItem = await screen.findByRole('menuitem', {
      name: 'Programmatic Options',
    })

    // Verify that programmatic download and download files are not disabled
    expect(downloadFilesMenuItem.classList.contains('disabled')).toBe(false)
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a Project View', async () => {
    registerTableQueryResult(
      projectViewQueryRequest.query,
      mockQueryResponseData,
    )

    renderComponent(props, projectViewQueryRequest)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    await userEvent.click(downloadOptionsButton)

    await screen.findByRole('menuitem', { name: 'Export Table' })
    const programmaticOptionsMenuItem = await screen.findByRole('menuitem', {
      name: 'Programmatic Options',
    })

    // Download files should not be visible for project views
    await waitFor(() => {
      expect(
        screen.queryByRole('menuitem', {
          name: ADD_ALL_FILES_TO_DOWNLOAD_CART,
        }),
      ).not.toBeInTheDocument()
    })

    // Verify that programmatic download isn't disabled
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a stable version of a dataset', async () => {
    registerTableQueryResult(datasetQueryRequest.query, mockQueryResponseData)

    const isStableVersion = true
    server.use(
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/entity/${mockDatasetEntity.id!}`,
        () => {
          return HttpResponse.json(
            { ...mockDatasetEntity, isLatestVersion: !isStableVersion },
            { status: 200 },
          )
        },
      ),
    )

    renderComponent(props, datasetQueryRequest)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    await userEvent.click(downloadOptionsButton)

    await screen.findByRole('menuitem', { name: 'Export Table' })
    const downloadFilesMenuItem = await screen.findByRole('menuitem', {
      name: ADD_ALL_FILES_TO_DOWNLOAD_CART,
    })
    const programmaticOptionsMenuItem = await screen.findByRole('menuitem', {
      name: 'Programmatic Options',
    })

    // Verify that programmatic download and download files are not disabled
    expect(downloadFilesMenuItem.classList.contains('disabled')).toBe(false)
    expect(programmaticOptionsMenuItem.classList.contains('disabled')).toBe(
      false,
    )
  })

  it('Shows correct options for a draft Dataset', async () => {
    registerTableQueryResult(datasetQueryRequest.query, mockQueryResponseData)

    const isStableVersion = false
    server.use(
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/entity/${mockDatasetEntity.id!}`,
        () => {
          return HttpResponse.json(
            {
              ...mockDatasetEntity,
              isLatestVersion: !isStableVersion,
            },
            { status: 200 },
          )
        },
      ),
    )

    renderComponent(props, datasetQueryRequest)

    const downloadOptionsButton = await screen.findByRole('button', {
      name: 'Download Options',
    })

    await userEvent.click(downloadOptionsButton)

    await screen.findByRole('menuitem', { name: 'Export Table' })
    const downloadFilesMenuItem = await screen.findByRole('menuitem', {
      name: ADD_ALL_FILES_TO_DOWNLOAD_CART,
    })
    const programmaticOptionsMenuItem = await screen.findByRole('menuitem', {
      name: 'Programmatic Options',
    })

    // Verify that programmatic download and download files are disabled
    // Note: `toBeDisabled` only checks the `disabled` attribute, which is not set on these menuitems,  see https://github.com/testing-library/jest-dom/issues/144
    expect(downloadFilesMenuItem).toHaveAttribute('aria-disabled', 'true')
    expect(programmaticOptionsMenuItem).toHaveAttribute('aria-disabled', 'true')
  })
})
