/**
 * Example usage of the Aridhia Client
 *
 * This file demonstrates how to use the generated Aridhia API client
 * to interact with the FAIR API.
 */

import { Configuration } from './generated/runtime.js'
import { AuthenticationApi } from './generated/apis/AuthenticationApi.js'
import { DatasetsApi } from './generated/apis/DatasetsApi.js'
import { RequestsApi } from './generated/apis/RequestsApi.js'
import { WorkspacesApi } from './generated/apis/WorkspacesApi.js'

// Example 1: Exchange third party token for Aridhia access token
async function authenticateExample() {
  // This example assumes you have a Synapse bearer token
  const synapseToken = 'your-synapse-token'

  const authApi = new AuthenticationApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
      accessToken: synapseToken,
    }),
  )

  const authResponse = await authApi.authenticatePost({
    authenticationRequest: {
      subject_token_type: 'string',
      subject_token_issuer: 'string',
      subject_token: 'string',
    },
  })

  console.log('Aridhia Access Token:', authResponse.access_token)
  return authResponse.access_token
}

// Example 2: Get a specific workflow
async function getWorkflowExample(token: string, workflowCode: string) {
  const requestsApi = new RequestsApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
      accessToken: token,
    }),
  )

  const workflow = await requestsApi.fairWorkflowsCodeGet({
    code: workflowCode,
  })

  console.log('Workflow:', workflow)
  return workflow
}

// Example 3: Get a specific dataset
async function getDatasetExample(token: string, datasetCode: string) {
  const datasetsApi = new DatasetsApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
      accessToken: token,
    }),
  )

  const dataset = await datasetsApi.fairDatasetsCodeGet({
    code: datasetCode,
  })

  console.log('Dataset:', dataset)
  return dataset
}

// Example 4: Get dataset settings
async function getDatasetSettingsExample(token: string, datasetCode: string) {
  const datasetsApi = new DatasetsApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
      accessToken: token,
    }),
  )

  const settings = await datasetsApi.fairDatasetsCodeSettingsGet({
    code: datasetCode,
  })

  console.log('Dataset Settings:', settings)
  return settings
}

// Example 5: List a dataset's dictionaries
async function getDatasetDictionariesExample(
  token: string,
  datasetCode: string,
) {
  const datasetsApi = new DatasetsApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
      accessToken: token,
    }),
  )

  const dictionaries = await datasetsApi.fairDatasetsCodeDictionariesGet({
    code: datasetCode,
  })

  console.log('Dataset Dictionaries:', dictionaries.items)
  return dictionaries
}

// Example 6: List a dataset's workspace locations, then its workspaces at one location
async function getDatasetWorkspacesExample(token: string, datasetCode: string) {
  const datasetsApi = new DatasetsApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
      accessToken: token,
    }),
  )

  const locations = await datasetsApi.fairDatasetsCodeWorkspacesLocationsGet({
    code: datasetCode,
  })

  const firstLocation = locations.items?.[0]?.value
  const workspaces = await datasetsApi.fairDatasetsCodeWorkspacesGet({
    code: datasetCode,
    location: firstLocation,
  })

  console.log('Dataset Workspaces:', workspaces.items)
  return workspaces
}

// Example 7: Get a dataset's catalogue entry
async function getDatasetCatalogueExample(token: string, datasetCode: string) {
  const datasetsApi = new DatasetsApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
      accessToken: token,
    }),
  )

  const catalogue = await datasetsApi.fairDatasetsCodeCatalogueGet({
    code: datasetCode,
  })

  console.log('Dataset Catalogue:', catalogue)
  return catalogue
}

// Example 8: Get the workspace request form definition
async function getWorkspaceRequestFormExample(token: string) {
  const workspacesApi = new WorkspacesApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
      accessToken: token,
    }),
  )

  const forms = await workspacesApi.fairWorkspacesFormsCodeGet({
    code: 'workspace_request',
  })

  const form = forms.items?.[0]
  console.log('Workspace Request Form:', form)
  return form
}

// Example 9: Create a new data access request
async function createRequestExample(token: string) {
  const requestsApi = new RequestsApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
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
      cohort: {
        name: 'My cohort',
        queries: [
          {
            name: 'My cohort query',
            clauses: [
              {
                name: 'netflix_subjects',
                dictionary: { code: 'netflix_subjects' },
                filters: [],
              },
            ],
          },
        ],
      },
    },
  })

  console.log('Created Request:', newRequest)
  return newRequest
}

// Example 10: List all requests
async function listRequestsExample(token: string) {
  const requestsApi = new RequestsApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
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

// Example 11: Get a specific request
async function getRequestExample(token: string, requestCode: string) {
  const requestsApi = new RequestsApi(
    new Configuration({
      basePath: 'https://gateway.westeurope.dap.c-path.org',
      accessToken: token,
    }),
  )

  const request = await requestsApi.fairRequestsCodeGet({
    code: requestCode,
  })

  console.log('Request:', request)
  return request
}

// Full workflow example
async function fullWorkflowExample() {
  try {
    // Step 1: Authenticate
    const token = await authenticateExample()

    // Step 2: Get a dataset and its settings
    const datasetCode = 'netflix'
    const dataset = await getDatasetExample(token!, datasetCode)
    const settings = await getDatasetSettingsExample(token!, datasetCode)

    // Step 3: Get the dataset's workflow, if one is configured
    if (settings.workflow_key) {
      await getWorkflowExample(token!, settings.workflow_key)
    }

    // Step 4: Create a data access request
    const request = await createRequestExample(token!)

    // Step 5: Check request status
    if (request.code) {
      await getRequestExample(token!, request.code)
    }

    return { dataset, settings, request }
  } catch (error) {
    console.error('Error in workflow:', error)
    return undefined
  }
}

export {
  authenticateExample,
  getWorkflowExample,
  getDatasetExample,
  getDatasetSettingsExample,
  getDatasetDictionariesExample,
  getDatasetWorkspacesExample,
  getDatasetCatalogueExample,
  getWorkspaceRequestFormExample,
  createRequestExample,
  listRequestsExample,
  getRequestExample,
  fullWorkflowExample,
}
