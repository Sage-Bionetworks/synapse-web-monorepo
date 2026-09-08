import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SynapseSankeyPlot, { SynapseSankeyPlotProps } from './SynapseSankeyPlot'

const SQL = 'SELECT source, count(source) FROM syn123 GROUP BY source'

// Two sources, 40 + 10 = 50 total -> 80.0% and 20.0% shares.
function bundleWithColumns(
  headers: { name: string }[],
  rows: string[][],
): QueryResultBundle {
  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn123',
        headers: headers.map(h => ({ ...h, columnType: 'STRING' })),
        rows: rows.map((values, i) => ({
          rowId: i + 1,
          versionNumber: 1,
          values,
        })),
      },
    },
  } as QueryResultBundle
}

const labelFirstBundle = bundleWithColumns(
  [{ name: 'source' }, { name: 'count' }],
  [
    ['Gene Expression Omnibus', '40'],
    ['NYGC ALS Consortium', '10'],
  ],
)

// Same data, but the columns are swapped: value comes first, label second.
const valueFirstBundle = bundleWithColumns(
  [{ name: 'count' }, { name: 'source' }],
  [
    ['40', 'Gene Expression Omnibus'],
    ['10', 'NYGC ALS Consortium'],
  ],
)

const getResultsSpy = vi.spyOn(SynapseClient, 'getFullQueryTableResults')

function renderComponent(props: Partial<SynapseSankeyPlotProps> = {}) {
  return render(
    <SynapseSankeyPlot sql={SQL} rootLabel="All Datasets" {...props} />,
    { wrapper: createWrapper() },
  )
}

describe('SynapseSankeyPlot', () => {
  beforeEach(() => {
    getResultsSpy.mockReset()
  })

  it('renders a labeled chart with a node, count, and share for each query row', async () => {
    getResultsSpy.mockResolvedValue(labelFirstBundle)
    renderComponent({ unitLabel: 'datasets', breakdownLabel: 'by source' })

    // Accessible label is built from rootLabel + breakdownLabel.
    await screen.findByRole('img', {
      name: 'All Datasets broken down by source',
    })

    // Each category row shows its label, count, and percentage of the total.
    expect(screen.getByText('Gene Expression Omnibus')).toBeInTheDocument()
    expect(screen.getByText('NYGC ALS Consortium')).toBeInTheDocument()
    expect(screen.getByText('40')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('80.0%')).toBeInTheDocument()
    expect(screen.getByText('20.0%')).toBeInTheDocument()

    // The root figure shows the summed total and the unit caption.
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('datasets total')).toBeInTheDocument()
  })

  it('resolves the label and value columns by header name regardless of column order', async () => {
    getResultsSpy.mockResolvedValue(valueFirstBundle)
    renderComponent({ labelColumn: 'source', valueColumn: 'count' })

    await screen.findByRole('img')

    // If column resolution were ignored, the label would be the number "40"
    // and the share would be NaN. Correct resolution yields the source name
    // and an 80.0% share.
    expect(screen.getByText('Gene Expression Omnibus')).toBeInTheDocument()
    expect(screen.getByText('80.0%')).toBeInTheDocument()
  })

  it('resolves the label and value columns by numeric index', async () => {
    getResultsSpy.mockResolvedValue(valueFirstBundle)
    renderComponent({ labelColumn: 1, valueColumn: 0 })

    await screen.findByRole('img')

    expect(screen.getByText('Gene Expression Omnibus')).toBeInTheDocument()
    expect(screen.getByText('80.0%')).toBeInTheDocument()
  })

  it('invokes onCategoryClick with the category label after a brief delay when a category is clicked', async () => {
    const user = userEvent.setup()
    const onCategoryClick = vi.fn()
    getResultsSpy.mockResolvedValue(labelFirstBundle)
    renderComponent({ onCategoryClick })

    const categoryLabel = await screen.findByText('Gene Expression Omnibus')
    await user.click(categoryLabel)

    // The click "swells" the flow first; the handler fires only after the delay.
    expect(onCategoryClick).not.toHaveBeenCalled()
    await waitFor(() => expect(onCategoryClick).toHaveBeenCalledTimes(1))
    expect(onCategoryClick).toHaveBeenCalledWith('Gene Expression Omnibus')
  })

  it('does not make categories clickable when no onCategoryClick is provided', async () => {
    getResultsSpy.mockResolvedValue(labelFirstBundle)
    renderComponent()

    const categoryLabel = await screen.findByText('Gene Expression Omnibus')
    // Without a handler the label group is not given a pointer cursor.
    expect(categoryLabel.closest('g')).not.toHaveAttribute('cursor', 'pointer')
  })

  describe('butterfly mode (right flow)', () => {
    // source, dataset count, file count
    const butterflyBundle = bundleWithColumns(
      [{ name: 'source' }, { name: 'datasets' }, { name: 'files' }],
      [
        ['Gene Expression Omnibus', '40', '120'],
        ['NYGC ALS Consortium', '10', '30'],
      ],
    )

    const butterflyProps = {
      rightValueColumn: 2,
      rightLabel: 'All Files',
      rightUnitLabel: 'files',
      unitLabel: 'datasets',
    }

    it('renders a right end node with the summed file total and per-source counts', async () => {
      getResultsSpy.mockResolvedValue(butterflyBundle)
      renderComponent(butterflyProps)

      await screen.findByRole('img')

      // Right end figure: eyebrow + summed file total (120 + 30) + caption.
      expect(screen.getByText('ALL FILES')).toBeInTheDocument()
      expect(screen.getByText('150')).toBeInTheDocument()
      expect(screen.getByText('files total')).toBeInTheDocument()

      // Center label shows both counts for the source.
      expect(screen.getByText('40 datasets · 120 files')).toBeInTheDocument()
    })

    it('navigates immediately (no swell delay) when the left end node is clicked', async () => {
      const user = userEvent.setup()
      const onRootClick = vi.fn()
      getResultsSpy.mockResolvedValue(butterflyBundle)
      renderComponent({ ...butterflyProps, onRootClick })

      const leftEnd = await screen.findByText('ALL DATASETS')
      await user.click(leftEnd)

      expect(onRootClick).toHaveBeenCalledTimes(1)
    })

    it('invokes onRightCategoryClick with the source label when a right flow is clicked', async () => {
      const user = userEvent.setup()
      const onRightCategoryClick = vi.fn()
      getResultsSpy.mockResolvedValue(butterflyBundle)
      const { container } = renderComponent({
        ...butterflyProps,
        onRightCategoryClick,
      })

      await screen.findByRole('img')

      // Links are emitted left flows first, then right flows. With two sources,
      // path index 2 is the first source's right (files) ribbon.
      const ribbons = container.querySelectorAll('path')
      await user.click(ribbons[2])

      await waitFor(() =>
        expect(onRightCategoryClick).toHaveBeenCalledWith(
          'Gene Expression Omnibus',
        ),
      )
    })
  })

  it('renders nothing when the query returns no rows', async () => {
    getResultsSpy.mockResolvedValue(
      bundleWithColumns([{ name: 'source' }, { name: 'count' }], []),
    )
    renderComponent()

    await waitFor(() =>
      expect(SynapseClient.getFullQueryTableResults).toHaveBeenCalled(),
    )
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
