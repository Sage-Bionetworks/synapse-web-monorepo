import React from 'react'
import TermsAndConditions from '../../src/components/TermsAndConditions/TermsAndConditions'
import { SynapseClient, SynapseContextType } from '../../src'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import termsAndConditionsResponse from '../../mocks/query/syn51718002.json'
import { createWrapper } from '../testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'

const defaultProps = {
  onFormChange: jest.fn(),
}

async function renderComponent(wrapperProps?: SynapseContextType) {
  const wrapper = render(<TermsAndConditions {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })

  // The items are loaded when we can't find any loading items
  await waitFor(() =>
    expect(
      screen.getAllByTestId('loading-terms-and-conditions').length,
    ).toEqual(0),
  )

  return wrapper
}
describe('Terms And Conditions: basic functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest
      .spyOn(SynapseClient, 'getFullQueryTableResults')
      .mockResolvedValue(termsAndConditionsResponse as QueryResultBundle)
  })

  const checkboxCount = 8

  it('renders terms and condition without crashing', async () => {
    const container = await renderComponent()
    await screen.findByText(
      'I will adhere to the Synapse Community Standards of inclusion and respect',
      { exact: true },
    )
    expect(container).toBeDefined()
  })

  it('should render all checkboxes', async () => {
    const container = await renderComponent()
    const li = container.queryAllByRole('checkbox')
    expect(li.length).toEqual(checkboxCount)
  })
})
