import RORInstitutionField from '@/components/RORInstitutionField/RORInstitutionField'
import { useSearchRegistry } from '@/synapse-queries/index'
import {
  getUseQueryErrorMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('@/synapse-queries/ror')

const mockUseSearchRegistry = jest.mocked(useSearchRegistry).mockReturnValue(
  getUseQuerySuccessMock({
    items: [
      {
        admin: {
          created: { date: '2018-11-14', schema_version: '1.0' },
          last_modified: { date: '2024-12-11', schema_version: '2.1' },
        },
        domains: [],
        established: 2009,
        external_ids: [
          { all: ['grid.430406.5'], preferred: 'grid.430406.5', type: 'grid' },
          { all: ['0000 0004 6023 5303'], preferred: null, type: 'isni' },
          { all: ['Q891621'], preferred: null, type: 'wikidata' },
        ],
        id: 'https://ror.org/049ncjx51',
        links: [
          { type: 'website', value: 'https://sagebionetworks.org' },
          {
            type: 'wikipedia',
            value: 'https://en.wikipedia.org/wiki/Sage_Bionetworks',
          },
        ],
        locations: [
          {
            geonames_details: {
              continent_code: 'NA',
              continent_name: 'North America',
              country_code: 'US',
              country_name: 'United States',
              country_subdivision_code: 'WA',
              country_subdivision_name: 'Washington',
              lat: 47.60621,
              lng: -122.33207,
              name: 'Seattle',
            },
            geonames_id: 5809844,
          },
        ],
        names: [
          {
            lang: 'en',
            types: ['ror_display', 'label'],
            value: 'Sage Bionetworks',
          },
        ],
        relationships: [],
        status: 'active',
        types: ['nonprofit'],
      },
    ],
  }),
)

describe('RORInstitutionField', () => {
  it('displays the value prop', () => {
    const value1 = 'some value'
    const value2 = 'some other value'
    const { rerender } = render(<RORInstitutionField value={value1} />)
    const input = screen.getByRole('combobox')
    expect(input).toHaveValue(value1)

    rerender(<RORInstitutionField value={value2} />)
    expect(input).toHaveValue(value2)
  })

  it('allows typing free text', async () => {
    const mockOnChange = jest.fn()

    render(<RORInstitutionField onChange={mockOnChange} />)

    const input = screen.getByRole('combobox')
    await userEvent.type(input, 'my organization')

    expect(input).toHaveValue('my organization')
    expect(mockOnChange).toHaveBeenLastCalledWith('my organization')
  })

  it('shows search results which can be selected', async () => {
    const mockOnChange = jest.fn()

    render(<RORInstitutionField onChange={mockOnChange} />)

    const input = screen.getByRole('combobox')
    await userEvent.type(input, 'sage bionetworks')

    const option = await screen.findByRole('option', {
      name: 'Sage Bionetworks',
    })
    await userEvent.click(option)
    expect(mockOnChange).toHaveBeenLastCalledWith('Sage Bionetworks')
  })

  it('handles ROR API outage', async () => {
    const mockOnChange = jest.fn()
    mockUseSearchRegistry.mockReturnValue(
      getUseQueryErrorMock(
        new SynapseClientError(
          500,
          'ROR API is down',
          expect.getState().currentTestName!,
        ),
      ),
    )

    render(<RORInstitutionField onChange={mockOnChange} />)

    const input = screen.getByRole('combobox')
    await userEvent.type(input, 'my organization')
    await waitFor(() => {
      expect(screen.queryByRole('option')).not.toBeInTheDocument()
    })

    expect(input).toHaveValue('my organization')
    expect(mockOnChange).toHaveBeenLastCalledWith('my organization')
  })
})
