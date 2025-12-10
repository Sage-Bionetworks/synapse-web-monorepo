import { Meta, StoryObj } from '@storybook/react-vite'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { RouteErrorBoundary } from './RouteErrorBoundary'

const meta = {
  title: 'Components/Error/RouteErrorBoundary',
  component: RouteErrorBoundary,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RouteErrorBoundary>

export default meta
type Story = StoryObj<typeof meta>

// Helper function to create a router that will trigger the error boundary
function createErrorRouter(errorToThrow: unknown, icon?: string) {
  return createMemoryRouter([
    {
      path: '/',
      element: <div>This should not render</div>,
      errorElement: <RouteErrorBoundary icon={icon} />,
      loader: () => {
        throw errorToThrow
      },
    },
  ])
}

export const StandardError: Story = {
  render: () => {
    const router = createErrorRouter(
      new Error('Something went wrong while loading the page'),
    )
    return <RouterProvider router={router} />
  },
}

export const ErrorWithStackTrace: Story = {
  render: () => {
    const error = new Error('Failed to fetch data from the server')
    error.stack = `Error: Failed to fetch data from the server
    at fetchData (http://localhost:3000/src/utils/api.ts:42:15)
    at async loadUserProfile (http://localhost:3000/src/pages/Profile.tsx:23:18)
    at async RouteLoader (http://localhost:3000/node_modules/react-router/index.js:156:5)`
    const router = createErrorRouter(error)
    return <RouterProvider router={router} />
  },
}

export const ModuleInitializationErrorWithIcon: Story = {
  render: () => {
    const error = new ReferenceError(
      "Cannot access 'QueryWrapperPlotNav' before initialization",
    )
    error.stack = `ReferenceError: Cannot access 'QueryWrapperPlotNav' before initialization
    at http://localhost:3000/@fs/Users/jhodgson/synapse-web-monorepo/packages/synapse-react-client/src/components/QueryWrapperPlotNav/index.ts?t=1765391879833:2121:16
    at async __vite__moduleInitialize (http://localhost:3000/vite/dist/client/env.mjs:235:5)
    at async __vite__moduleResolver (http://localhost:3000/vite/dist/client/env.mjs:165:7)`
    const router = createErrorRouter(
      error,
      'https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg',
    )
    return <RouterProvider router={router} />
  },
}

export const RouteNotFoundError: Story = {
  render: () => {
    const router = createErrorRouter({
      status: 404,
      statusText: 'Not Found',
      data: { message: 'The page you are looking for does not exist' },
    })
    return <RouterProvider router={router} />
  },
}

export const ServerError: Story = {
  render: () => {
    const router = createErrorRouter({
      status: 500,
      statusText: 'Internal Server Error',
      data: { message: 'An unexpected error occurred on the server' },
    })
    return <RouterProvider router={router} />
  },
}

export const StringError: Story = {
  render: () => {
    const router = createErrorRouter('An unexpected error occurred')
    return <RouterProvider router={router} />
  },
}

export const UnknownError: Story = {
  render: () => {
    const router = createErrorRouter({ someUnknownError: 'weird object' })
    return <RouterProvider router={router} />
  },
}

export const WithIcon: Story = {
  render: () => {
    const router = createErrorRouter(
      new Error('Something went wrong while loading the page'),
      'https://raw.githubusercontent.com/Sage-Bionetworks/synapse-web-monorepo/main/apps/portals/adknowledgeportal/public/logo.svg',
    )
    return <RouterProvider router={router} />
  },
}
