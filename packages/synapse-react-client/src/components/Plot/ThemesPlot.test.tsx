import { getFullQueryTableResults } from '@/synapse-client/SynapseClient'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ColumnTypeEnum,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import { BarPlotProps } from './BarPlot'
import ThemesPlot from './ThemesPlot'
import { PlotProps } from './types'

vi.mock('@/synapse-client/SynapseClient')
vi.mock('./BarPlot', () => ({
  default: ({ label, xMax, isTop }: BarPlotProps) =>
    isTop ? null : <span>{`${label} bar scaled to ${xMax}`}</span>,
}))
vi.mock('./DotPlot', () => ({ default: () => null }))

const mockGetFullQueryTableResults = vi.mocked(getFullQueryTableResults)

const dotPlot: PlotProps = {
  entityId: 'syn1',
  xField: 'totalCount',
  yField: 'theme',
  groupField: 'consortium',
}
const topBarPlot: PlotProps = { ...dotPlot, entityId: 'syn2' }
const sideBarPlot: PlotProps = {
  ...dotPlot,
  entityId: 'syn3',
  countLabel: 'grants',
}

function queryResultWithRows(rows: string[][]): QueryResultBundle {
  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn3',
        etag: 'etag',
        headers: ['x', 'y', 'group'].map(name => ({
          name,
          columnType: ColumnTypeEnum.STRING,
          id: '',
        })),
        rows: rows.map((values, i) => ({ rowId: i, values })),
      },
    },
  } as QueryResultBundle
}

describe('ThemesPlot', () => {
  it('shows each research theme with its own count and bar scale, most grants first', async () => {
    // Imaging is returned first, so the totals are not already in count order
    const resultsByEntityId: Record<string, QueryResultBundle> = {
      syn1: queryResultWithRows([]),
      syn2: queryResultWithRows([]),
      syn3: queryResultWithRows([
        ['1', 'Imaging', 'CSBC'],
        ['2', 'Genomics', 'CSBC'],
        ['3', 'Genomics', 'PS-ON'],
      ]),
    }
    mockGetFullQueryTableResults.mockImplementation(
      (request: QueryBundleRequest) =>
        Promise.resolve(resultsByEntityId[request.entityId]),
    )

    render(
      <ThemesPlot
        onPointClick={vi.fn()}
        dotPlot={dotPlot}
        topBarPlot={topBarPlot}
        sideBarPlot={sideBarPlot}
      />,
      { wrapper: createWrapper() },
    )

    const genomicsRow = (await screen.findByText('Genomics')).parentElement!
    expect(within(genomicsRow).getByText('5 grants')).toBeInTheDocument()
    expect(
      within(genomicsRow).getByText('Genomics bar scaled to 5'),
    ).toBeInTheDocument()

    const imagingRow = screen.getByText('Imaging').parentElement!
    expect(within(imagingRow).getByText('1 grants')).toBeInTheDocument()
    expect(
      within(imagingRow).getByText('Imaging bar scaled to 1'),
    ).toBeInTheDocument()

    const themeOrder = screen
      .getAllByText(/^(Genomics|Imaging)$/)
      .map(label => label.textContent)
    expect(themeOrder).toEqual(['Genomics', 'Imaging'])
  })
})
