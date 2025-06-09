import syn16787123Json from '@/mocks/query/syn16787123'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import UpsetPlot, { UpsetPlotProps } from './UpsetPlot'

vi.mock(import('@upsetjs/react'), async importOriginal => ({
  __esModule: true,
  ...(await importOriginal()),
  // Getting an OOM error when rendering the plot component, so mock it.
  default: () => <div role="figure" />,
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
})
