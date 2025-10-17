import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { act, render, screen } from '@testing-library/react'
import { SynapseContextType } from '../../index'
import SynapsePortalBanners, {
  SynapsePortalBannersProps,
} from './SynapsePortalBanners'
import {
  useGetEntityPath,
  useGetQueryResultBundleWithAsyncStatus,
} from '@/synapse-queries'
import { useSourceAppConfigs } from '@/utils/hooks'
import {
  SourceAppConfig,
  STATIC_SOURCE_APP_CONFIG,
} from '@/utils/hooks/useSourceAppConfigs'
import {
  EntityPath,
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
  PROJECT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'

const defaultProps: SynapsePortalBannersProps = {
  entityId: 'syn1234567',
  dataCatalogEntityId: 'syn6000',
  sourceAppConfigTableID: 'syn7000',
}

vi.mock('@/synapse-queries', async () => {
  const actual = await vi.importActual<typeof import('@/synapse-queries')>(
    '@/synapse-queries',
  )
  return {
    ...actual,
    useGetEntityPath: vi.fn(),
    useGetQueryResultBundleWithAsyncStatus: vi.fn(),
  }
})

vi.mock('@/synapse-queries/entity', async () => {
  const actual = await vi.importActual<
    typeof import('@/synapse-queries/entity')
  >('@/synapse-queries/entity')
  return {
    ...actual,
    useGetEntityPath: vi.fn(),
    useGetQueryResultBundleWithAsyncStatus: vi.fn(),
  }
})

vi.mock('@/synapse-queries/entity/useEntity', async () => {
  const actual = await vi.importActual<
    typeof import('@/synapse-queries/entity/useEntity')
  >('@/synapse-queries/entity/useEntity')
  return {
    ...actual,
    useGetEntityPath: vi.fn(),
  }
})

vi.mock('@/synapse-queries/entity/useGetQueryResultBundle', async () => {
  const actual = await vi.importActual<
    typeof import('@/synapse-queries/entity/useGetQueryResultBundle')
  >('@/synapse-queries/entity/useGetQueryResultBundle')
  return {
    ...actual,
    useGetQueryResultBundleWithAsyncStatus: vi.fn(),
  }
})

vi.mock('@/utils/hooks/useSourceAppConfigs', async () => {
  const actual = await vi.importActual<
    typeof import('@/utils/hooks/useSourceAppConfigs')
  >('@/utils/hooks/useSourceAppConfigs')
  return {
    ...actual,
    useSourceAppConfigs: vi.fn(),
  }
})

vi.mock('@/utils/hooks', async () => {
  const actual = await vi.importActual<typeof import('@/utils/hooks')>(
    '@/utils/hooks',
  )
  return {
    ...actual,
    useSourceAppConfigs: vi.fn(),
  }
})

async function renderComponent(
  props: SynapsePortalBannersProps,
  wrapperProps?: Partial<SynapseContextType>,
) {
  let renderReturn
  // We must await asynchronous events for our assertions to pass
  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
    renderReturn = render(<SynapsePortalBanners {...props} />, {
      wrapper: createWrapper(wrapperProps),
    })
  })
  return renderReturn
}

const mockUseGetEntityPath = vi.mocked(useGetEntityPath)
const mockUseGetQueryResultBundleWithAsyncStatus = vi.mocked(
  useGetQueryResultBundleWithAsyncStatus,
)
const mockUseSourceAppConfigs = vi.mocked(useSourceAppConfigs)

const mockEntityPath: EntityPath = {
  path: [
    {
      name: 'Redacted',
      id: 'syn4489',
      type: 'org.sagebionetworks.repo.model.Folder',
    }, // root Synapse folder, should be ignored
    { id: 'syn1', name: 'Project', type: PROJECT_CONCRETE_TYPE_VALUE },
    {
      id: 'syn1234567',
      name: 'Entity',
      type: FILE_ENTITY_CONCRETE_TYPE_VALUE,
    },
  ],
}

type TableRow = { values: (string | null)[] }

const portalRows: TableRow[] = [
  {
    values: ['adknowledgeportal', 'https://adknowledgeportal.synapse.org'],
  },
]

const portalConfigs: SourceAppConfig[] = [
  {
    appId: 'adknowledgeportal',
    friendlyName: 'AD Knowledge Portal',
    appURL: 'https://adknowledgeportal.synapse.org',
    logo: <div>logo</div>,
    palette: STATIC_SOURCE_APP_CONFIG.palette,
    description: 'AD portal description',
    requestAffiliation: false,
    isPublicized: true,
    shortDescription: 'Short description',
  },
]

const createEntityPathResult = (
  entityPath: EntityPath,
): ReturnType<typeof useGetEntityPath> =>
  ({
    data: entityPath,
    isLoading: false,
    isError: false,
    isSuccess: true,
  } as unknown as ReturnType<typeof useGetEntityPath>)

const createQueryBundleResult = (
  rows: TableRow[],
): ReturnType<typeof useGetQueryResultBundleWithAsyncStatus> =>
  ({
    data: {
      responseBody: {
        queryResult: {
          queryResults: {
            rows,
          },
        },
      },
    },
    isLoading: false,
    isError: false,
    isSuccess: true,
  } as unknown as ReturnType<typeof useGetQueryResultBundleWithAsyncStatus>)

describe('SynapsePortalBanners', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseGetEntityPath.mockReturnValue(createEntityPathResult(mockEntityPath))
  })

  it('Banner is shown', async () => {
    mockUseGetQueryResultBundleWithAsyncStatus.mockReturnValue(
      createQueryBundleResult(portalRows),
    )
    mockUseSourceAppConfigs.mockReturnValue(portalConfigs)

    await renderComponent(defaultProps)
    await screen.findByText('This resource is part of a Portal')
    await screen.findByText('Access it on the AD Knowledge Portal')
  })

  it('Banner is not shown because entity is not in the data catalog', async () => {
    mockUseGetQueryResultBundleWithAsyncStatus.mockReturnValue(
      createQueryBundleResult([]),
    )
    mockUseSourceAppConfigs.mockReturnValue(portalConfigs)

    await renderComponent(defaultProps)
    expect(
      screen.queryByText('This resource is part of a Portal'),
    ).not.toBeInTheDocument()
  })

  it('Banner is not shown because data catalog appId is not associated to a source app config', async () => {
    mockUseGetQueryResultBundleWithAsyncStatus.mockReturnValue(
      createQueryBundleResult(portalRows),
    )
    mockUseSourceAppConfigs.mockReturnValue([])

    await renderComponent(defaultProps)
    expect(
      screen.queryByText('This resource is part of a Portal'),
    ).not.toBeInTheDocument()
  })
})
