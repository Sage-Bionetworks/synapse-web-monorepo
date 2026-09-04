import { FairField } from '@/aridhia-queries/FairFormPayload'
import { http, HttpHandler, HttpResponse, JsonBodyType } from 'msw'

export const MOCK_ARIDHIA_GATEWAY = 'https://mock-gateway.test'
export const MOCK_ARIDHIA_DATASET_CODE = 'sdtm_als1003'

export const MOCK_ARIDHIA_AUTHENTICATION_REQUEST = {
  subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
  subject_token_issuer: 'sage-prod',
}

export const MOCK_ARIDHIA_ACCESS_TOKEN_RESPONSE = {
  access_token: 'mock-aridhia-token',
  expires_in: 300,
}

export const MOCK_ARIDHIA_DICTIONARIES = [
  { code: 'dict_a', name: 'Dictionary A' },
  { code: 'dict_b', name: 'Dictionary B' },
]

export const MOCK_ARIDHIA_WORKSPACE_LOCATIONS = [
  { value: 'uksouth', description: 'UK South' },
]

export const MOCK_ARIDHIA_WORKSPACES = [
  {
    uuid: 'ws-uuid-1',
    name: 'My Workspace',
    location: 'uksouth',
    url: 'https://example.aridhia.com/workspaces/1',
  },
]

export const MOCK_ARIDHIA_CATALOGUE = {
  title: 'SDTM ALS Dataset',
  publisher: { name: 'C-Path' },
  description: 'A dataset',
}

/**
 * Every FAIR form field carries a `label`, as real gateway payloads do, so that UI built from
 * these fixtures is reachable by its accessible name.
 */
export const MOCK_ARIDHIA_ABOUT_FIELDS: FairField[] = [
  {
    name: 'name',
    type: 'string',
    label: 'Your name',
    validation: { required: true },
  },
  {
    name: 'email',
    type: 'string',
    label: 'Email address',
    validation: { required: true },
  },
]

export const MOCK_ARIDHIA_PROJECT_FIELDS: FairField[] = [
  {
    name: 'project_name',
    type: 'string',
    label: 'Project name',
    validation: { required: true },
  },
]

export const MOCK_ARIDHIA_WORKSPACE_FORM_FIELDS: FairField[] = [
  {
    name: 'workspace_name',
    type: 'string',
    label: 'Workspace name',
    validation: { required: true },
  },
]

export function getAridhiaAuthenticateHandler(
  response: object = MOCK_ARIDHIA_ACCESS_TOKEN_RESPONSE,
  status = 200,
): HttpHandler {
  return http.post(`${MOCK_ARIDHIA_GATEWAY}/authenticate`, () =>
    HttpResponse.json(response, { status }),
  )
}

export function getAridhiaRequestsHandler(items: unknown[] = []): HttpHandler {
  return http.get(`${MOCK_ARIDHIA_GATEWAY}/fair/requests/`, () =>
    HttpResponse.json({
      items,
      paging: { page: 1, pageSize: 100, total: items.length },
    }),
  )
}

export function getAridhiaDatasetSettingsHandler(
  overrides: Partial<{
    allow_clear: boolean
    allow_pseudonymised: boolean
    allow_manual: boolean
  }> = {},
): HttpHandler {
  return http.get(
    `${MOCK_ARIDHIA_GATEWAY}/fair/datasets/${MOCK_ARIDHIA_DATASET_CODE}/settings`,
    () =>
      HttpResponse.json({
        workflow_key: 'rdca_access_request',
        allow_clear: true,
        allow_pseudonymised: false,
        allow_manual: false,
        ...overrides,
      }),
  )
}

export function getAridhiaWorkflowHandler(
  fields: { about?: FairField[]; project?: FairField[] } = {},
): HttpHandler {
  const {
    about = MOCK_ARIDHIA_ABOUT_FIELDS,
    project = MOCK_ARIDHIA_PROJECT_FIELDS,
  } = fields
  return http.get(
    `${MOCK_ARIDHIA_GATEWAY}/fair/workflows/rdca_access_request`,
    () =>
      HttpResponse.json({
        code: 'rdca_access_request',
        fields: { about, project },
      }),
  )
}

/**
 * `body` defaults to the shape confirmed against a real gateway capture: `GET
 * /workspaces-forms/{code}` returns the form object directly, not wrapped in the `items`
 * envelope its OpenAPI spec documents. See `useGetAridhiaWorkspaceRequestForm`. Pass a body to
 * exercise a different payload shape or field set.
 */
export function getAridhiaWorkspaceRequestFormHandler(
  body: JsonBodyType = {
    name: 'Request a workspace',
    sections: {
      workspace: {
        label: 'Workspace details',
        fields: MOCK_ARIDHIA_WORKSPACE_FORM_FIELDS,
      },
    },
  },
): HttpHandler {
  return http.get(
    `${MOCK_ARIDHIA_GATEWAY}/fair/workspaces-forms/workspace_request`,
    () => HttpResponse.json(body),
  )
}

export function getAridhiaDictionariesHandler(
  items: unknown[] = MOCK_ARIDHIA_DICTIONARIES,
): HttpHandler {
  return http.get(
    `${MOCK_ARIDHIA_GATEWAY}/fair/datasets/${MOCK_ARIDHIA_DATASET_CODE}/dictionaries/`,
    () => HttpResponse.json({ items }),
  )
}

export function getAridhiaWorkspaceLocationsHandler(
  items: unknown[] = MOCK_ARIDHIA_WORKSPACE_LOCATIONS,
): HttpHandler {
  return http.get(
    `${MOCK_ARIDHIA_GATEWAY}/fair/datasets/${MOCK_ARIDHIA_DATASET_CODE}/workspaces-locations`,
    () => HttpResponse.json({ items }),
  )
}

export function getAridhiaWorkspacesHandler(
  items: unknown[] = MOCK_ARIDHIA_WORKSPACES,
): HttpHandler {
  return http.get(
    `${MOCK_ARIDHIA_GATEWAY}/fair/datasets/${MOCK_ARIDHIA_DATASET_CODE}/workspaces`,
    () => HttpResponse.json({ items }),
  )
}

export function getAridhiaCatalogueHandler(
  body: JsonBodyType = MOCK_ARIDHIA_CATALOGUE,
): HttpHandler {
  return http.get(
    `${MOCK_ARIDHIA_GATEWAY}/fair/datasets/${MOCK_ARIDHIA_DATASET_CODE}/catalogue`,
    () => HttpResponse.json(body),
  )
}

/**
 * `respond` receives the submitted body, so a test can both assert on it and choose the
 * response (success, or a failure to exercise the retry path).
 */
export function getAridhiaSubmitRequestHandler<TBody = unknown>(
  respond: (body: TBody) => Response,
): HttpHandler {
  return http.post(
    `${MOCK_ARIDHIA_GATEWAY}/fair/requests/`,
    async ({ request }) => respond((await request.json()) as TBody),
  )
}

/**
 * Everything the DAR wizard fetches to reach its first step and run through to submission,
 * excluding the submission itself — see `getAridhiaSubmitRequestHandler`.
 */
export function getAridhiaDarWizardHandlers(): HttpHandler[] {
  return [
    getAridhiaAuthenticateHandler(),
    getAridhiaDatasetSettingsHandler(),
    getAridhiaWorkflowHandler(),
    getAridhiaWorkspaceRequestFormHandler(),
    getAridhiaDictionariesHandler(),
    getAridhiaWorkspaceLocationsHandler(),
    getAridhiaWorkspacesHandler(),
    getAridhiaCatalogueHandler(),
  ]
}
