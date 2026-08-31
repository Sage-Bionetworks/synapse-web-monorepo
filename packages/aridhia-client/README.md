# Aridhia Client

TypeScript client for the C-Path Aridhia FAIR API, generated from the vendored upstream OpenAPI
spec (`src/spec/fair-api-full.json`).

## Overview

This package provides a TypeScript client for:

- The Aridhia API gateway's third-party token exchange (`POST /authenticate`)
- The C-Path FAIR API endpoints this integration needs: datasets, dataset settings,
  dictionaries, workspaces, catalogue entries, workspace-request forms, workflows, and data
  access requests

## Installation

```bash
pnpm add @sage-bionetworks/aridhia-client
```

## Usage

### Authentication

First, exchange your third-party token (e.g., Synapse token) for an Aridhia access token:

```typescript
import {
  Configuration,
  AuthenticationApi,
} from '@sage-bionetworks/aridhia-client'

// Exchange third-party token for Aridhia access token
const authApi = new AuthenticationApi(
  new Configuration({
    basePath: 'https://gateway.westeurope.dap.c-path.org',
    accessToken: 'your-synapse-bearer-token',
  }),
)

const authResponse = await authApi.authenticatePost({
  authenticationRequest: {
    subject_token_type: 'string',
    subject_token_issuer: 'string',
    subject_token: 'string',
  },
})

const aridhiaToken = authResponse.access_token
```

### Using the FAIR API

```typescript
import {
  Configuration,
  DatasetsApi,
  RequestsApi,
} from '@sage-bionetworks/aridhia-client'

// The gateway proxies FAIR under `/fair`, and every generated operation path already carries
// that prefix — so basePath is the bare gateway host, with no `/fair` suffix.
const config = new Configuration({
  basePath: 'https://gateway.westeurope.dap.c-path.org',
  accessToken: aridhiaToken,
})

const datasetsApi = new DatasetsApi(config)
const requestsApi = new RequestsApi(config)

const dataset = await datasetsApi.fairDatasetsCodeGet({ code: 'netflix' })
const settings = await datasetsApi.fairDatasetsCodeSettingsGet({
  code: 'netflix',
})
const requests = await requestsApi.fairRequestsGet({ page: 1, pageSize: 20 })
```

## Available APIs

Generated method/class names are derived from upstream tags and paths (the upstream spec has no
`operationId`s); the actual emitted names — not the endpoint list below — are the source of
truth. Two operations (`/datasets/{code}/workspaces` and `/datasets/{code}/workspaces-locations`)
carry both a `datasets` and a `workspaces` tag upstream, so they're emitted on both `DatasetsApi`
and `WorkspacesApi`.

- **Authentication** (`AuthenticationApi`)
  - `POST /authenticate` - Exchange third party token for Aridhia access token
    - Request body: `{ subject_token_type, subject_token_issuer, subject_token }`
    - Response: `{ access_token, expires_in, refresh_token, token_type, ... }`

- **Datasets** (`DatasetsApi`)
  - `GET /datasets/{code}` - Get dataset by code
  - `GET /datasets/{code}/settings` - Get dataset settings (`allow_clear`/`allow_pseudonymised`/`allow_manual`, `workflow_key`, ...)
  - `GET /datasets/{code}/dictionaries/` - List a dataset's dictionaries
  - `GET /datasets/{code}/workspaces` - List a dataset's workspaces at a location
  - `GET /datasets/{code}/workspaces-locations` - List a dataset's workspace locations
  - `GET /datasets/{code}/catalogue` - Get a dataset's catalogue entry (includes the DUA `rights` URL)

- **Requests** (`RequestsApi`)
  - `GET /requests/` - List all requests
  - `GET /requests/{code}` - Get request by code
  - `POST /requests/` - Create a new data access request
  - `GET /workflows/{code}` - Get a workflow's form fields by workflow key

- **Workspaces** (`WorkspacesApi`)
  - `GET /workspaces-forms/{code}` - Get a form definition (e.g. `code: 'workspace_request'`)

## Development

To regenerate the client from the vendored upstream OpenAPI spec (`src/spec/fair-api-full.json`),
patching the four known upstream defects and merging in the hand-authored gateway fragment
(`src/spec/gateway-api.json`, which supplies `/authenticate` — a route the upstream FAIR spec
doesn't describe):

```bash
pnpm generate
```

To refresh the vendored upstream spec itself (occasionally, when C-Path ships a new FAIR API
version):

```bash
curl -sS https://fair.dap.c-path.org/api/docs/fair.json -o src/spec/fair-api-full.json
```

To build the package:

```bash
pnpm build
```

To run tests:

```bash
pnpm test
```

## License

Apache-2.0
