import mockMultiValueColumnResultsJson from '@/mocks/query/mockMultiValueColumnResults.json'
import syn26433429CatalogNumberJson from '@/mocks/query/syn26433429CatalogNumber.json'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import SubsectionRowRenderer, {
  SubsectionRowRendererProps,
} from './SubsectionRowRenderer'

vi.mock('../../synapse-client/SynapseClient', () => ({
  getQueryTableResults: vi.fn(),
}))

const defaultProps: SubsectionRowRendererProps = {
  sql: 'select * from syn123',
}

function renderComponent(
  propOverrides?: Partial<SubsectionRowRendererProps>,
  wrapperProps?: SynapseContextType,
) {
  return render(
    <SubsectionRowRenderer {...defaultProps} {...propOverrides} />,
    {
      wrapper: createWrapper(wrapperProps),
    },
  )
}
const mockGetQueryTableResults = vi.mocked(SynapseClient.getQueryTableResults)

describe('SubsectionRowRenderer rendering tests', () => {
  it('renders multi-row response, using a link column and a friendly values map', async () => {
    const data = syn26433429CatalogNumberJson as QueryResultBundle
    mockGetQueryTableResults.mockResolvedValue(data)

    renderComponent({
      columnLink: {
        linkColumnName: 'Catalog Number URL',
        matchColumnName: 'Catalog Number',
        isMarkdown: false,
      },
      friendlyValuesMap: {
        row2: 'Friendly Row 2 Value',
      },
    })

    await waitFor(() => {
      expect(screen.getAllByRole('heading').length).toBe(1)
      expect(screen.getAllByRole('heading')[0].textContent).toBe(
        'Catalog Number',
      )

      expect(screen.getAllByRole('row').length).toBe(2)
      const a1 = screen.getAllByRole('row')[0].getElementsByTagName('a')[0]
      expect(a1.href).toBe(
        'https://www.creative-diagnostics.com/Anti-NF1-MAb-165834-144.htm',
      )
      expect(a1.textContent).toBe('DCABH-6461')

      const a2 = screen.getAllByRole('row')[1].getElementsByTagName('a')[0]
      expect(a2.href).toBe('https://www.google.com/row2.htm')
      expect(a2.textContent).toBe('Friendly Row 2 Value')
    })
  })

  it('renders multi-value column, where the markdown processor has been run on each value', async () => {
    const data = mockMultiValueColumnResultsJson as QueryResultBundle
    mockGetQueryTableResults.mockResolvedValue(data)

    renderComponent({
      isMarkdown: true,
    })

    await waitFor(() => {
      expect(screen.getAllByRole('heading').length).toBe(1)
      expect(screen.getAllByRole('heading')[0].textContent).toBe(
        'fundingAgency',
      )

      expect(screen.getAllByRole('row').length).toBe(2)
      expect(screen.getAllByRole('row')[0].textContent?.trim()).toBe('CTF')
      expect(
        screen.getAllByRole('row')[0].getElementsByClassName('markdown').length,
      ).toBe(1)
      expect(screen.getAllByRole('row')[1].textContent?.trim()).toBe('NTAP')
      expect(
        screen.getAllByRole('row')[1].getElementsByClassName('markdown').length,
      ).toBe(1)
    })
  })
})
