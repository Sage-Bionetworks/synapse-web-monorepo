import { act, render, screen } from '@testing-library/react'
import { use } from 'react'
import { renderToString } from 'react-dom/server'
import { describe, expect, it, vi } from 'vitest'
import ClientOnly from './ClientOnly'

describe('ClientOnly', () => {
  it('renders children immediately in a client-only render', () => {
    render(<ClientOnly fallback="Loading">Content</ClientOnly>)

    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.queryByText('Loading')).not.toBeInTheDocument()
  })

  it('renders the fallback without rendering children on the server', () => {
    const Child = vi.fn(() => <span>Content</span>)

    const html = renderToString(
      <ClientOnly fallback={<span>Loading</span>}>
        <Child />
      </ClientOnly>,
    )

    expect(html).toContain('Loading')
    expect(html).not.toContain('Content')
    expect(Child).not.toHaveBeenCalled()
  })

  it('renders children after hydrating server HTML without a hydration mismatch', async () => {
    const element = (
      <ClientOnly fallback={<span>Loading</span>}>
        <span>Content</span>
      </ClientOnly>
    )
    const container = document.createElement('div')
    container.innerHTML = renderToString(element)
    document.body.appendChild(container)
    expect(container).toHaveTextContent('Loading')
    const onRecoverableError = vi.fn()

    render(element, { container, hydrate: true, onRecoverableError })

    expect(await screen.findByText('Content')).toBeInTheDocument()
    expect(screen.queryByText('Loading')).not.toBeInTheDocument()
    expect(onRecoverableError).not.toHaveBeenCalled()
  })

  it('renders the fallback while children suspend', async () => {
    const neverResolves = new Promise<never>(() => {})
    function SuspendingChild() {
      use(neverResolves)
      return null
    }

    await act(() =>
      render(
        <ClientOnly fallback="Loading">
          <SuspendingChild />
        </ClientOnly>,
      ),
    )

    expect(screen.getByText('Loading')).toBeInTheDocument()
  })
})
