import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  useAddFileToDownloadList,
  useAddToDownloadList,
  useGetEntity,
  useGetEntityChildren,
  useGetVersions,
} from '@/synapse-queries'
import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import {
  getUseMutationIdleMock,
  getUseQueryLoadingMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { useDirectDownloadHandler } from '@/utils/hooks/useDirectDownloadHandler'
import {
  EntityDownloadButton,
  getDownloadActionsForEntityType,
} from './EntityDownloadButton'
import { EntityChildrenResponse } from '@sage-bionetworks/synapse-types'

vi.mock('@/utils/context/SynapseContext')
vi.mock('@/synapse-queries')
vi.mock('@/utils/hooks/useDirectDownloadHandler')

// This test will fail if a new EntityType is added and not handled in getDownloadActionsForEntityType
describe('getDownloadActionsForEntityType', () => {
  test.each(Object.values(EntityType))(
    'getDownloadActionsForEntityType: %s',
    type => {
      expect(() => {
        getDownloadActionsForEntityType(type)
      }).not.toThrow()
    },
  )
})

describe('EntityDownloadButton', () => {
  beforeEach(() => {
    vi.mocked(useGetEntity).mockReturnValue(
      getUseQuerySuccessMock(mockFileEntityData.entity),
    )
    vi.mocked(useGetVersions).mockReturnValue(getUseQueryLoadingMock())
    vi.mocked(useGetEntityChildren).mockReturnValue(
      getUseQuerySuccessMock<EntityChildrenResponse>({
        page: [],
        nextPageToken: '',
        totalChildCount: 100,
        sumFileSizesBytes: 1000,
      }),
    )
    vi.mocked(useAddFileToDownloadList).mockReturnValue(
      getUseMutationIdleMock(),
    )
    vi.mocked(useAddToDownloadList).mockReturnValue(getUseMutationIdleMock())
    vi.mocked(useDirectDownloadHandler).mockReturnValue({
      downloadFile: vi.fn(),
    })
  })

  async function openDropdown() {
    const button = await screen.findByRole('button', { name: /download/i })
    await userEvent.click(button)
  }

  it('disables "Download File" with sign-in tooltip when unauthenticated', async () => {
    vi.mocked(useSynapseContext).mockReturnValue({
      isAuthenticated: false,
      downloadCartPageUrl: '/DownloadCart',
    } as unknown as ReturnType<typeof useSynapseContext>)

    render(
      <EntityDownloadButton
        entityId={mockFileEntityData.id}
        name={mockFileEntityData.name}
        entityType={EntityType.file}
      />,
    )

    await openDropdown()

    const downloadFileMenuItem = screen
      .getByText('Download File')
      .closest('[role="menuitem"]') as HTMLElement // aria-label (set to tooltipText) overrides the accessible name, so query by visible text instead

    expect(downloadFileMenuItem).toHaveAttribute('aria-disabled', 'true')

    await userEvent.hover(downloadFileMenuItem)

    expect(
      await screen.findByText('Sign in to download this file'),
    ).toBeInTheDocument()
  })

  it('enables "Download File" when authenticated', async () => {
    vi.mocked(useSynapseContext).mockReturnValue({
      isAuthenticated: true,
      downloadCartPageUrl: '/DownloadCart',
    } as unknown as ReturnType<typeof useSynapseContext>)

    render(
      <EntityDownloadButton
        entityId={mockFileEntityData.id}
        name={mockFileEntityData.name}
        entityType={EntityType.file}
      />,
    )

    await openDropdown()

    const downloadFileMenuItem = screen
      .getByText('Download File')
      .closest('[role="menuitem"]') as HTMLElement

    expect(downloadFileMenuItem).not.toHaveAttribute('aria-disabled', 'true')

    await userEvent.hover(downloadFileMenuItem)
    expect(
      await screen.findByText('Download this file directly'),
    ).toBeInTheDocument()
  })
})
