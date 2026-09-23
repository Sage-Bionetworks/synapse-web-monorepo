import { Registry } from '@rjsf/utils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RJSFInputLabelWrapper } from './RJSFInputLabel'

function registryWith(descriptionVariant?: string): Registry {
  return { formContext: { descriptionVariant } } as unknown as Registry
}

describe('RJSFInputLabelWrapper', () => {
  it('shows the description inline, with no expand/popover button, when descriptionVariant is inline', () => {
    render(
      <RJSFInputLabelWrapper
        fieldLabel="Institution"
        description="Your home institution"
        registry={registryWith('inline')}
      >
        <input />
      </RJSFInputLabelWrapper>,
    )
    expect(screen.getByText('Your home institution')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /more info/i }),
    ).not.toBeInTheDocument()
  })

  it('hides the description behind an expand toggle when descriptionVariant is expand', async () => {
    const user = userEvent.setup()
    render(
      <RJSFInputLabelWrapper
        fieldLabel="Institution"
        description="Your home institution"
        registry={registryWith('expand')}
      >
        <input />
      </RJSFInputLabelWrapper>,
    )
    expect(screen.queryByText('Your home institution')).not.toBeVisible()
    await user.click(screen.getByRole('button', { name: /more info/i }))
    expect(screen.getByText('Your home institution')).toBeVisible()
  })

  it('defaults to the popover variant when none is configured', () => {
    render(
      <RJSFInputLabelWrapper
        fieldLabel="Institution"
        description="Your home institution"
        registry={registryWith(undefined)}
      >
        <input />
      </RJSFInputLabelWrapper>,
    )
    expect(screen.queryByText('Your home institution')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /more info/i }),
    ).not.toBeInTheDocument()
  })

  it('omits the label row entirely when hideLabel is set, regardless of variant', () => {
    render(
      <RJSFInputLabelWrapper
        hideLabel
        fieldLabel="Institution"
        description="Your home institution"
        registry={registryWith('inline')}
      >
        <input />
      </RJSFInputLabelWrapper>,
    )
    expect(screen.queryByText('Institution')).not.toBeInTheDocument()
    expect(screen.queryByText('Your home institution')).not.toBeInTheDocument()
  })

  it('renders no description markup at all when the field has none', () => {
    render(
      <RJSFInputLabelWrapper
        fieldLabel="Institution"
        description={null}
        registry={registryWith('inline')}
      >
        <input />
      </RJSFInputLabelWrapper>,
    )
    expect(screen.getByText('Institution')).toBeInTheDocument()
    expect(document.querySelector('.field-description-inline')).toBeNull()
  })
})
