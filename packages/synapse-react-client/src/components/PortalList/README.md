# PortalList Component

A component for displaying and managing Synapse Portals with infinite scroll pagination.

## Overview

The `PortalList` component provides a responsive grid layout for displaying Synapse Portal information. It uses infinite scroll to load additional portals as the user scrolls down the page.

## Components

### PortalList

The main container component that handles fetching and displaying the list of portals.

**Props:**

- `title?: string` - Optional title for the portal list (default: "Synapse Portals")
- `emptyMessage?: string` - Message to display when no portals are found (default: "No portals found.")

**Example:**

```tsx
import { PortalList } from '@sage-bionetworks/synapse-react-client'

function MyComponent() {
  return (
    <PortalList
      title="All Available Portals"
      emptyMessage="No portals are currently available."
    />
  )
}
```

### PortalCard

A card component that displays information about a single portal.

**Props:**

- `portal: Portal` - The portal object to display

**Portal Properties:**

- `id` - Unique ID of the portal
- `name` - Portal name
- `url` - Portal base URL
- `createdBy` - User ID who created the portal
- `createdOn` - Creation timestamp
- `modifiedBy` - User ID who last modified the portal
- `modifiedOn` - Last modification timestamp
- `etag` - Entity tag for optimistic concurrency control

**Example:**

```tsx
import { PortalCard } from '@sage-bionetworks/synapse-react-client'
import { Portal } from '@sage-bionetworks/synapse-client'

const portal: Portal = {
  id: '1',
  name: 'NF Data Portal',
  url: 'https://nf.synapse.org',
  createdBy: '1234567',
  createdOn: '2023-01-15T10:30:00.000Z',
  modifiedBy: '1234567',
  modifiedOn: '2024-12-01T14:20:00.000Z',
  etag: 'etag-1',
}

function MyComponent() {
  return <PortalCard portal={portal} />
}
```

## Hooks

### useListPortalsInfinite

A React Query hook for fetching portals with infinite scroll pagination.

**Example:**

```tsx
import { useListPortalsInfinite } from '@sage-bionetworks/synapse-react-client'

function MyComponent() {
  const {
    data,
    status,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useListPortalsInfinite()

  const allPortals = data?.pages.flatMap(page => page.page ?? []) ?? []

  // ... render your UI
}
```

## Styling

The components use SCSS modules for styling with responsive breakpoints:

- **Small screens** (mobile): Single column grid
- **Medium screens** (tablets): 2-column grid
- **Large screens** (desktop): 3-column grid

Custom styles can be applied by wrapping the component or using MUI's `sx` prop where applicable.

## API Endpoint

The components use the Synapse REST API endpoint:

- `POST /repo/v1/portal/list` - Lists all available portals with pagination support

## Features

- ✅ Infinite scroll pagination
- ✅ Responsive grid layout
- ✅ User information display with UserCard integration
- ✅ Error handling with user-friendly messages
- ✅ Loading states with spinners
- ✅ Empty state messaging
- ✅ Date formatting with dayjs
- ✅ External link support

## Storybook

View the component in Storybook under "Synapse/PortalList" for interactive examples:

- **WithPortals** - Shows pagination with multiple pages
- **EmptyList** - Shows empty state
- **WithCustomTitle** - Shows custom title and empty message
- **ErrorState** - Shows error handling
