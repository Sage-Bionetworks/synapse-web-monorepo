/**
 * Example usage of the C-Path Client
 *
 * This file demonstrates how to use the generated C-Path API client
 * to interact with the FAIR and Workspaces APIs.
 */

import {
  Configuration,
  AuthenticationApi,
  WorkflowsApi,
  DatasetsApi,
  RequestsApi,
  WorkspaceApi,
} from '@sage-bionetworks/cpath-client'

// Example 1: Authentication with username/password
async function authenticateExample() {
  const authApi = new AuthenticationApi(
    new Configuration({
      basePath: 'https://workspaces.westus2.c-path-dev.aridhia.io',
    }),
  )

  const authResponse = await authApi.authenticatePost({
    authenticationRequest: {
      username: 'your-username',
      password: 'your-password',
    },
  })

  console.log('JWT Token:', authResponse.token)
  return authResponse.token
}

// Example 1b: Exchange bearer token for DAP token
async function authenticateWithBearerTokenExample(bearerToken: string) {
  const authApi = new AuthenticationApi(
    new Configuration({
      basePath: 'https://workspaces.westus2.c-path-dev.aridhia.io',
      accessToken: bearerToken,
    }),
  )

  // POST /authenticate with bearer token returns a DAP token
  // When using bearer token auth, username/password can be empty strings
  const authResponse = await authApi.authenticatePost({
    authenticationRequest: {
      username: '',
      password: '',
    },
  })

  console.log('DAP Token:', authResponse.token)
  return authResponse.token
}

// Example 2: List Workflows
async function listWorkflowsExample(token: string) {
  const workflowsApi = new WorkflowsApi(
    new Configuration({
      basePath: 'https://fair.c-path-dev.aridhia.io/api',
      accessToken: token,
    }),
  )

  const workflows = await workflowsApi.fairWorkflowsGet({
    enabled: true,
  })

  console.log('Workflows:', workflows.items)
  return workflows
}

// Example 3: Get a specific workflow
async function getWorkflowExample(token: string, workflowCode: string) {
  const workflowsApi = new WorkflowsApi(
    new Configuration({
      basePath: 'https://fair.c-path-dev.aridhia.io/api',
      accessToken: token,
    }),
  )

  const workflow = await workflowsApi.fairWorkflowsCodeGet({
    code: workflowCode,
  })

  console.log('Workflow:', workflow)
  return workflow
}

// Example 4: List Datasets (with filtering)
async function listDatasetsExample(token: string) {
  const datasetsApi = new DatasetsApi(
    new Configuration({
      basePath: 'https://fair.c-path-dev.aridhia.io/api',
      accessToken: token,
    }),
  )

  const datasets = await datasetsApi.fairDatasetsGet({
    page: 1,
    pageSize: 20,
    requestable: true,
  })

  console.log('Datasets:', datasets.items)
  return datasets
}

// Example 5: Get a specific dataset
async function getDatasetExample(token: string, datasetCode: string) {
  const datasetsApi = new DatasetsApi(
    new Configuration({
      basePath: 'https://fair.c-path-dev.aridhia.io/api',
      accessToken: token,
    }),
  )

  const dataset = await datasetsApi.fairDatasetsCodeGet({
    code: datasetCode,
  })

  console.log('Dataset:', dataset)
  return dataset
}

// Example 6: Get dataset settings
async function getDatasetSettingsExample(token: string, datasetCode: string) {
  const datasetsApi = new DatasetsApi(
    new Configuration({
      basePath: 'https://fair.c-path-dev.aridhia.io/api',
      accessToken: token,
    }),
  )

  const settings = await datasetsApi.fairDatasetsCodeSettingsGet({
    code: datasetCode,
  })

  console.log('Dataset Settings:', settings)
  return settings
}

// Example 7: Create a new request
async function createRequestExample(token: string) {
  const requestsApi = new RequestsApi(
    new Configuration({
      basePath: 'https://fair.c-path-dev.aridhia.io/api',
      accessToken: token,
    }),
  )

  const newRequest = await requestsApi.fairRequestsPost({
    requestPost: {
      name: 'My Data Access Request',
      transfer_type: 'clear',
      terms: true,
      fields: {
        project_name: 'Research Project',
        project_description: 'Description of research',
        purpose: 'Research purposes',
      },
    },
  })

  console.log('Created Request:', newRequest)
  return newRequest
}

// Example 8: List all requests
async function listRequestsExample(token: string) {
  const requestsApi = new RequestsApi(
    new Configuration({
      basePath: 'https://fair.c-path-dev.aridhia.io/api',
      accessToken: token,
    }),
  )

  const requests = await requestsApi.fairRequestsGet({
    page: 1,
    pageSize: 20,
  })

  console.log('Requests:', requests.items)
  return requests
}

// Example 9: Get a specific request
async function getRequestExample(token: string, requestCode: string) {
  const requestsApi = new RequestsApi(
    new Configuration({
      basePath: 'https://fair.c-path-dev.aridhia.io/api',
      accessToken: token,
    }),
  )

  const request = await requestsApi.fairRequestsCodeGet({
    code: requestCode,
  })

  console.log('Request:', request)
  return request
}

// Example 10: Search workspaces
async function searchWorkspacesExample(token: string) {
  const workspaceApi = new WorkspaceApi(
    new Configuration({
      basePath: 'https://workspaces.westus2.c-path-dev.aridhia.io',
      accessToken: token,
    }),
  )

  const workspaces = await workspaceApi.workspaceAdminWorkspaceSearchPost({
    workspaceSearchRequest: {
      query: 'my-workspace',
    },
  })

  console.log('Workspaces:', workspaces)
  return workspaces
}

// Example 11: Get workspace request form definition
async function getWorkspaceFormExample(token: string) {
  const workspaceApi = new WorkspaceApi(
    new Configuration({
      basePath: 'https://workspaces.westus2.c-path-dev.aridhia.io',
      accessToken: token,
    }),
  )

  const formDefinition =
    await workspaceApi.workspaceAdminFormDefinitionWorkspaceRequestGet()

  console.log('Form Definition:', formDefinition)
  return formDefinition
}

// Example 12: Create a new workspace
async function createWorkspaceExample(token: string) {
  const workspaceApi = new WorkspaceApi(
    new Configuration({
      basePath: 'https://workspaces.westus2.c-path-dev.aridhia.io',
      accessToken: token,
    }),
  )

  const workspace = await workspaceApi.workspaceAdminWorkspacePost({
    workspaceCreateRequest: {
      name: 'My Research Workspace',
      description: 'Workspace for data analysis',
    },
  })

  console.log('Created Workspace:', workspace)
  return workspace
}

// Example 13: Get upload token for a workspace
async function getUploadTokenExample(token: string, workspaceUuid: string) {
  const workspaceApi = new WorkspaceApi(
    new Configuration({
      basePath: 'https://workspaces.westus2.c-path-dev.aridhia.io',
      accessToken: token,
    }),
  )

  const uploadToken =
    await workspaceApi.workspaceAdminWorkspaceUuidUploadTokenPost({
      uuid: workspaceUuid,
    })

  console.log('Upload Token:', uploadToken)
  return uploadToken
}

// Full workflow example
async function fullWorkflowExample() {
  try {
    // Step 1: Authenticate
    const token = await authenticateExample()

    // Step 2: List available workflows
    await listWorkflowsExample(token!)

    // Step 3: List requestable datasets
    const datasets = await listDatasetsExample(token!)

    // Step 4: Get dataset settings for a specific dataset
    if (datasets.items && datasets.items.length > 0) {
      const datasetCode = datasets.items[0].code!
      await getDatasetSettingsExample(token!, datasetCode)
    }

    // Step 5: Create a data access request
    const request = await createRequestExample(token!)

    // Step 6: Check request status
    if (request.code) {
      await getRequestExample(token!, request.code)
    }

    // Step 7: Search for workspaces
    await searchWorkspacesExample(token!)
  } catch (error) {
    console.error('Error in workflow:', error)
  }
}

export {
  authenticateExample,
  authenticateWithBearerTokenExample,
  listWorkflowsExample,
  getWorkflowExample,
  listDatasetsExample,
  getDatasetExample,
  getDatasetSettingsExample,
  createRequestExample,
  listRequestsExample,
  getRequestExample,
  searchWorkspacesExample,
  getWorkspaceFormExample,
  createWorkspaceExample,
  getUploadTokenExample,
  fullWorkflowExample,
}
