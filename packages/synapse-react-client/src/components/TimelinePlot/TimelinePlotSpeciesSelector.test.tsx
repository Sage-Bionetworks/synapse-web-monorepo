import queryResultBundleJson from '@/mocks/query/syn51735464GroupBySpecies'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import TimelinePlotSpeciesSelector, {
  TimelinePlotSpeciesSelectorProps,
} from './TimelinePlotSpeciesSelector'

const setSpecies = vi.fn()

const timelineSpeciesSelectorProps: TimelinePlotSpeciesSelectorProps = {
  sql: 'select * from syn123',
  setSpecies,
}

const singleRowQueryResultBundle = cloneDeep(queryResultBundleJson)
singleRowQueryResultBundle.queryResult!.queryResults = {
  ...singleRowQueryResultBundle.queryResult!.queryResults,
  rows: [
    {
      values: ['Mus musculus'],
    },
  ],
}

const emptyQueryResultBundle = cloneDeep(queryResultBundleJson)
emptyQueryResultBundle.queryResult!.queryResults = {
  ...emptyQueryResultBundle.queryResult!.queryResults,
  rows: [],
}

async function renderTimelineSelector(
  props: TimelinePlotSpeciesSelectorProps = timelineSpeciesSelectorProps,
) {
  let component
  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
    component = render(<TimelinePlotSpeciesSelector {...props} />, {
      wrapper: createWrapper(),
    })
  })
  return component
}

describe('TimelinePlotSpeciesSelector tests', () => {
  it('renders timeline species selector', async () => {
    vi.spyOn(SynapseClient, 'getFullQueryTableResults').mockResolvedValueOnce(
      queryResultBundleJson,
    )

    await renderTimelineSelector()
    await waitFor(() => {
      expect(SynapseClient.getFullQueryTableResults).toHaveBeenCalledTimes(1)
      expect(setSpecies).toHaveBeenCalledWith('Mus musculus')
    })
    // verify the first row has been selected by default
    const dropdown = await screen.findByRole('combobox')
    await userEvent.click(dropdown)
    await userEvent.click(await screen.findByText('Saccharomyces'))
    expect(setSpecies).toHaveBeenCalledWith('Saccharomyces')
  })

  it('timeline species selector is not shown when a single species is returned', async () => {
    vi.spyOn(SynapseClient, 'getFullQueryTableResults').mockResolvedValueOnce(
      singleRowQueryResultBundle,
    )
    await renderTimelineSelector()

    await waitFor(() =>
      expect(SynapseClient.getFullQueryTableResults).toHaveBeenCalledTimes(1),
    )
    // verify the first row has been selected by default
    expect(setSpecies).toHaveBeenCalledWith('Mus musculus')

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
