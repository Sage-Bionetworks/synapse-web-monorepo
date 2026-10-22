import syn16787123Json from '@/mocks/query/syn16787123'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import { ISets } from '@upsetjs/react'
import UpsetPlot, { UpsetPlotProps } from './UpsetPlot'

vi.mock(import('@upsetjs/react'), async importOriginal => ({
  __esModule: true,
  ...(await importOriginal()),
  // Getting an OOM error when rendering the plot component, so mock it.
  default: ({ sets }: { sets: ISets }) => (
    <figure>
      <ul>
        {sets.map(set => (
          <li key={set.name}>{set.name}</li>
        ))}
      </ul>
    </figure>
  ),
}))

const data = syn16787123Json as QueryResultBundle

function renderComponent(props: UpsetPlotProps) {
  return render(<UpsetPlot {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('UpsetPlot', () => {
  const props: UpsetPlotProps = {
    rgbIndex: 0,
    sql: 'select * from syn16787123',
  }

  beforeEach(() => {
    vi.spyOn(SynapseClient, 'getFullQueryTableResults').mockResolvedValue(data)
  })

  it('displays plot', async () => {
    renderComponent(props)
    await waitFor(
      () => {
        screen.getByRole('figure')
        expect(SynapseClient.getFullQueryTableResults).toHaveBeenCalled()
      },
      { timeout: 10000 },
    )
  })

  it('passes the sets to the plot sorted by descending set name', async () => {
    vi.spyOn(SynapseClient, 'getFullQueryTableResults').mockResolvedValue({
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      queryResult: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
        queryResults: {
          concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
          tableId: 'syn16787123',
          etag: 'etag',
          headers: [],
          rows: [
            { rowId: 1, values: ['individual1', 'rnaSeq'] },
            { rowId: 2, values: ['individual2', 'ATACSeq'] },
            { rowId: 3, values: ['individual2', 'rnaSeq'] },
            { rowId: 4, values: ['individual3', 'wholeGenomeSeq'] },
          ],
        },
      },
    } as QueryResultBundle)

    renderComponent(props)

    const plot = await screen.findByRole('figure')
    const setNames = within(plot)
      .getAllByRole('listitem')
      .map(item => item.textContent)
    expect(setNames).toEqual(['wholeGenomeSeq', 'rnaSeq', 'ATACSeq'])
  })
})
