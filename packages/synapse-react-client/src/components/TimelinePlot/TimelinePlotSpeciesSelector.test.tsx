import { act, render, screen } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseClient } from '../../index'
import queryResultBundleJson from '../../mocks/query/syn51735464GroupBySpecies'
import TimelinePlotSpeciesSelector, {
  TimelinePlotSpeciesSelectorProps,
} from './TimelinePlotSpeciesSelector'
import userEvent from '@testing-library/user-event'

const setSpecies = jest.fn()

const timelineSpeciesSelectorProps: TimelinePlotSpeciesSelectorProps = {
  sql: 'select * from syn123',
  setSpecies,
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
  jest
    .spyOn(SynapseClient, 'getFullQueryTableResults')
    .mockResolvedValue(queryResultBundleJson)

  it('renders timeline species selector', async () => {
    await renderTimelineSelector()
    expect(SynapseClient.getFullQueryTableResults).toHaveBeenCalledTimes(1)
    // verify the first row has been selected by default
    expect(setSpecies).toHaveBeenCalledWith('Mus musculus')
    const dropdown = await screen.findByRole('button')
    await userEvent.click(dropdown)
    await userEvent.click(await screen.findByText('Saccharomyces'))
    expect(setSpecies).toHaveBeenCalledWith('Saccharomyces')
  })
})
