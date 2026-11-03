import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import { SynapseContextProvider } from 'synapse-react-client/utils/context/SynapseContext'
import { describe, expect, it, vi } from 'vitest'
import DetailsPage from './DetailsPage'

describe('DetailsPage tests', () => {
  it.todo('DetailsPage queries a table using the searchParams')
  it.todo('DetailsPage passes a matching row to context')
  it.todo(
    'DetailsPage context consumer retrieves a value from the matching row using the requested columnName',
  )

  it('leaves the header out of the server-rendered (prerendered) HTML', () => {
    const Header = vi.fn(() => <h1>Test details header</h1>)

    const html = renderToString(
      <QueryClientProvider client={new QueryClient()}>
        <SynapseContextProvider synapseContext={{ accessToken: undefined }}>
          <MemoryRouter>
            <DetailsPage
              sql="SELECT * FROM syn123"
              resourcePrimaryKey={['id']}
              disableCanonicalUrl
              header={<Header />}
            />
          </MemoryRouter>
        </SynapseContextProvider>
      </QueryClientProvider>,
    )

    expect(Header).not.toHaveBeenCalled()
    expect(html).not.toContain('Test details header')
    expect(html).toContain('DetailsPage')
  })
})
