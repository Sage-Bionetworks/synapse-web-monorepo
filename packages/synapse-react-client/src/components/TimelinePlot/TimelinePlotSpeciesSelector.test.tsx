import { act, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import SynapseClient from '../../synapse-client'
import queryResultBundleJson from '../../mocks/query/syn51735464GroupBySpecies'
import TimelinePlotSpeciesSelector, {
  TimelinePlotSpeciesSelectorProps,
} from './TimelinePlotSpeciesSelector'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'

const setSpecies = jest.fn()

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
    jest
      .spyOn(SynapseClient, 'getFullQueryTableResults')
      .mockResolvedValueOnce(queryResultBundleJson)

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
    jest
      .spyOn(SynapseClient, 'getFullQueryTableResults')
      .mockResolvedValueOnce(singleRowQueryResultBundle)
    await renderTimelineSelector()

    await waitFor(() =>
      expect(SynapseClient.getFullQueryTableResults).toHaveBeenCalledTimes(2),
    )
    // verify the first row has been selected by default
    expect(setSpecies).toHaveBeenCalledWith('Mus musculus')

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
