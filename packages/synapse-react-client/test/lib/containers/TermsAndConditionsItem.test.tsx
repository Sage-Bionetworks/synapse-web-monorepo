import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { ChatBubblesIcon } from '../../../src/lib/assets/icons/terms/ChatBubblesIcon'
import TermsAndConditionsItem from '../../../src/lib/containers/TermsAndConditionsItem'

describe('Terms and Conditions Item: basic functionality', () => {
  const mockItem = {
    icon: <ChatBubblesIcon />,
    label: 'Item 1',
    description: 'Item 1 desc',
  }
  const onChange = jest.fn()

  it('render component without crashing', () => {
    const { container } = render(
      <TermsAndConditionsItem
        id={1}
        enabled={true}
        checked={false}
        item={mockItem}
        onChange={onChange}
      />,
    )
    expect(container).toBeDefined()
  })

  it('should populate the right content', () => {
    render(
      <TermsAndConditionsItem
        id={1}
        enabled={true}
        checked={false}
        item={mockItem}
        onChange={onChange}
      />,
    )

    screen.getByLabelText(mockItem.label)
  })

  it('should display show more link when there is description', () => {
    render(
      <TermsAndConditionsItem
        id={1}
        enabled={true}
        checked={false}
        item={mockItem}
        onChange={onChange}
      />,
    )

    screen.getByText('Show More')
  })

  it('should display show less link when show more link is clicked', async () => {
    render(
      <TermsAndConditionsItem
        id={1}
        enabled={true}
        checked={false}
        item={mockItem}
        onChange={onChange}
      />,
    )

    await userEvent.click(screen.getByText('Show More'))
    await userEvent.click(screen.getByText('Show Less'))
    screen.getByText('Show More')
  })

  it('should call event handler when checkbox is checked', async () => {
    render(
      <TermsAndConditionsItem
        id={1}
        enabled={true}
        checked={false}
        item={mockItem}
        onChange={onChange}
      />,
    )
    await userEvent.click(screen.getByLabelText(mockItem.label))
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
