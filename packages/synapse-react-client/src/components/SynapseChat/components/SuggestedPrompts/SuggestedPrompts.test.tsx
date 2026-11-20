import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChatAppearance } from '../../utils/types'
import { SuggestedPrompts } from './SuggestedPrompts'

const PROMPTS = ['Summarize this document', 'Explain what each column means']
const APPEARANCES: ChatAppearance[] = ['default', 'sidebar']

describe('SuggestedPrompts', () => {
  it.each(APPEARANCES)(
    'selects the prompt the user clicks, with the %s appearance',
    async appearance => {
      const user = userEvent.setup()
      const onSelect = vi.fn()
      render(
        <SuggestedPrompts
          prompts={PROMPTS}
          onSelect={onSelect}
          appearance={appearance}
        />,
      )

      await user.click(screen.getByRole('button', { name: PROMPTS[1] }))

      expect(onSelect).toHaveBeenCalledExactlyOnceWith(PROMPTS[1])
    },
  )

  it.each(APPEARANCES)(
    'disables every prompt, with the %s appearance',
    appearance => {
      render(
        <SuggestedPrompts
          prompts={PROMPTS}
          onSelect={vi.fn()}
          disabled
          appearance={appearance}
        />,
      )

      PROMPTS.forEach(prompt => {
        expect(screen.getByRole('button', { name: prompt })).toHaveAttribute(
          'aria-disabled',
          'true',
        )
      })
    },
  )
})
