import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { mockGenomicsTemplate } from '@/mocks/accessRequirement/mockFormTemplates'
import { mockJsonSchemaAR1 } from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import { mockGenomicsSchema } from '@/mocks/accessRequirement/mockJsonSchemas'
import { server } from '@/mocks/msw/server'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataAccessRequestForm } from './DataAccessRequestForm'

function renderForm() {
  return render(
    <DataAccessRequestForm
      accessRequirement={mockJsonSchemaAR1}
      formTemplate={mockGenomicsTemplate}
      jsonSchema={mockGenomicsSchema}
    />,
    { wrapper: createWrapper() },
  )
}

describe('DataAccessRequestForm', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('blocks submission until both the first-class fields and the schema-driven steps are complete', async () => {
    const user = userEvent.setup()
    renderForm()

    // Click through to the last step without filling in anything.
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.click(screen.getByRole('button', { name: 'Submit Request' }))

    const errorAlert = screen.getByRole('alert')
    expect(
      within(errorAlert).getByText('Institution is required.'),
    ).toBeVisible()
    expect(
      within(errorAlert).getByText(/agreeToTerms must have required property/),
    ).toBeVisible()
    expect(screen.queryByText(/submitted successfully/)).not.toBeInTheDocument()

    // Go back to the first-class section and fill it in.
    await user.click(screen.getByRole('button', { name: 'Previous' }))
    await user.click(screen.getByRole('button', { name: 'Previous' }))
    await user.type(
      screen.getByRole('textbox', { name: 'Institution' }),
      'Sage Bionetworks',
    )
    await user.type(
      screen.getByRole('textbox', { name: 'Principal Investigator Name' }),
      'Jane Doe',
    )
    await user.type(
      screen.getByRole('textbox', {
        name: 'Principal Investigator Institutional Email',
      }),
      'jane.doe@sagebase.org',
    )
    await user.type(
      screen.getByRole('textbox', {
        name: 'First and last names of your Signing Official',
      }),
      'John Smith',
    )
    await user.type(
      screen.getByRole('textbox', {
        name: 'Institutional Email of your Signing Official',
      }),
      'john.smith@sagebase.org',
    )

    // Fill in the schema-driven steps.
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.type(
      screen.getByRole('textbox', { name: 'root_intendedDataUse' }),
      'Reanalysis of publicly available genomic datasets.',
    )
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.click(
      screen.getByRole('combobox', { name: /Terms and Conditions/ }),
    )
    await user.click(screen.getByRole('option', { name: 'true' }))

    await user.click(screen.getByRole('button', { name: 'Submit Request' }))

    expect(await screen.findByText(/submitted successfully/)).toBeVisible()
  })
})
