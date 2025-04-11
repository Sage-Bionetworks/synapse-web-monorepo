import { LongDescription, ShortDescription } from './CollapsibleDescription'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, within } from '@testing-library/react'

describe('It renders markdown for the description', () => {
  const descriptionLinkConfig = {
    isMarkdown: true,
    showFullDescriptionByDefault: true,
  }
  const value = '# header [website](synapse.org)'
  test('hides the short description if descriptionConfig is specified', () => {
    const { container } = render(
      <ShortDescription
        description={value}
        hasClickedShowMore={false}
        descriptionSubTitle={''}
        descriptionConfig={descriptionLinkConfig}
        toggleShowMore={jest.fn()}
      />,
      { wrapper: createWrapper() },
    )
    expect(container.querySelectorAll('div')).toHaveLength(0)
  })
  test('shows the short description if descriptionConfig is not specified', () => {
    const { container } = render(
      <ShortDescription
        description={value}
        hasClickedShowMore={false}
        descriptionSubTitle={''}
        descriptionConfig={undefined}
        toggleShowMore={jest.fn()}
      />,
      { wrapper: createWrapper() },
    )
    expect(container.querySelectorAll('div')).toHaveLength(1)
  })
  test('hides the long description if descriptionConfig is specified', () => {
    const { container } = render(
      <LongDescription
        description={value}
        hasClickedShowMore={false}
        descriptionSubTitle={''}
        descriptionConfig={descriptionLinkConfig}
      />,
      { wrapper: createWrapper() },
    )
    const markdown = container.querySelector<HTMLElement>('.markdown')!
    within(markdown).getByText('header', { exact: false })
  })
})
