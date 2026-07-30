import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import SynapseChatMessage from './SynapseChatMessage'

describe('SynapseChatMessage', () => {
  it('renders the known user message and issues no poll when chatJobId is undefined', () => {
    const { wrapperFn, queryClient } = createWrapperAndQueryClient()

    render(
      <SynapseChatMessage
        agentAvatar={<div />}
        userAvatar={<div />}
        userMessage="hello there"
        chatJobId={undefined}
      />,
      { wrapper: wrapperFn },
    )

    expect(screen.getByText('hello there')).toBeInTheDocument()
    expect(queryClient.isFetching()).toBe(0)
  })
})
