# Aridhia Client

TypeScript client for the Aridhia FAIR and Workspaces APIs.

## Overview

This package provides a TypeScript client for interacting with:

- Aridhia FAIR API endpoints for workflows, datasets, and requests
- Aridhia Workspaces API endpoints for authentication and workspace management

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
    basePath: 'https://gateway.westus2.c-path-dev.aridhia.io',
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
  WorkflowsApi,
  DatasetsApi,
  RequestsApi,
} from '@sage-bionetworks/aridhia-client'

// Configure the client with Aridhia access token
const config = new Configuration({
  basePath: 'https://fair.c-path-dev.aridhia.io/api',
  accessToken: aridhiaToken,
})

// Create API instances
const workflowsApi = new WorkflowsApi(config)
const datasetsApi = new DatasetsApi(config)
const requestsApi = new RequestsApi(config)

// Use the APIs
const workflows = await workflowsApi.fairWorkflowsGet()
const datasets = await datasetsApi.fairDatasetsGet({
  page: 1,
  pageSize: 20,
  requestable: true,
})
```

## Available APIs

### FAIR API Endpoints

- **Workflows**

  - `GET /fair/workflows/` - List all workflows
  - `GET /fair/workflows/{code}` - Get workflow by code

- **Datasets**

  - `GET /fair/datasets/` - List all datasets (with filtering)
  - `GET /fair/datasets/{code}` - Get dataset by code
  - `GET /fair/datasets/{code}/settings` - Get dataset settings

- **Requests**
  - `GET /fair/requests/` - List all requests
  - `GET /fair/requests/{code}` - Get request by code
  - `POST /fair/requests/` - Create a new request

### Workspaces API Endpoints

- **Authentication**

  - `POST /authenticate` - Exchange third party token for Aridhia access token
    - Requires bearer token authentication
    - Request body: `{ subject_token_type, subject_token_issuer, subject_token }`
    - Response: `{ access_token, expires_in, refresh_token, token_type, ... }`

- **Workspace Management**
  - `POST /workspace_admin/workspace/search` - Search workspaces
  - `GET /workspace_admin/form_definition/workspace_request` - Get workspace request form
  - `POST /workspace_admin/workspace` - Create a workspace
  - `POST /workspace_admin/workspace/{uuid}/upload_token` - Get upload token

## Development

To regenerate the client from the OpenAPI spec:

```bash
pnpm generate
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
