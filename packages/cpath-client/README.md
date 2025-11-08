# C-Path Client

TypeScript client for the C-Path FAIR and Workspaces APIs.

## Overview

This package provides a TypeScript client for interacting with:

- C-Path FAIR API endpoints for workflows, datasets, and requests
- C-Path Workspaces API endpoints for authentication and workspace management

## Installation

```bash
pnpm add @sage-bionetworks/cpath-client
```

## Usage

```typescript
import {
  Configuration,
  WorkflowsApi,
  DatasetsApi,
  RequestsApi,
} from '@sage-bionetworks/cpath-client'

// Configure the client
const config = new Configuration({
  basePath: 'https://fair.c-path-dev.aridhia.io/api',
  accessToken: 'your-jwt-token',
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

  - `POST /authenticate` - Authenticate and get JWT token

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
