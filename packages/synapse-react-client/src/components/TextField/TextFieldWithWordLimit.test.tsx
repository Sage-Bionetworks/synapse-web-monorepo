import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import TextFieldWithWordLimit, {
  TextFieldWithWordLimitProps,
} from './TextFieldWithWordLimit'

describe('TextFieldWithWordLimit', () => {
  function renderComponent(props: TextFieldWithWordLimitProps) {
    const user = userEvent.setup()
    const label = 'my label'

    render(<TextFieldWithWordLimit label={label} {...props} />, {
      wrapper: createWrapper(),
    })

    const input = screen.getByLabelText(label)

    return { user, input }
  }

  it('displays a maximum word count', async () => {
    const { user, input } = renderComponent({ maxWords: 10 })

    screen.getByText('0 of 10 words')

    await user.type(input, 'one two three four five six seven eight nine ten')

    screen.getByText('10 of 10 words')
  })

  it('displays a minimum word count', async () => {
    const { user, input } = renderComponent({ minWords: 10 })

    screen.getByText('0 words (min. 10)')

    await user.type(input, 'one two three four five six seven eight nine ten')

    screen.getByText('10 words (min. 10)')
  })

  it('displays a maximum and minimum word count', async () => {
    const { user, input } = renderComponent({ minWords: 5, maxWords: 10 })

    screen.getByText('0 of 10 words (min. 5)')

    await user.type(input, 'one two three four five six seven eight nine ten')

    screen.getByText('10 of 10 words (min. 5)')
  })

  it('works with a fully controlled component', () => {
    renderComponent({
      maxWords: 10,
      value: 'one two three',
    })

    screen.getByText('3 of 10 words')
  })
  it('counts words only', () => {
    renderComponent({
      maxWords: 10,
      value: ', . ,,,,,,. , $ % 66555 3 two @@ & three',
    })

    screen.getByText('4 of 10 words')
  })
})
