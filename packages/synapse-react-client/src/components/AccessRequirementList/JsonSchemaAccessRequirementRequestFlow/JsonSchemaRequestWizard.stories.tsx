import { MOCK_CLINICAL_JSON_SCHEMA_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import { mockJsonSchemaAR2 } from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import {
  getUpdatedClinicalFormHandlers,
  mockUpdatedJsonSchemaAR2,
  REMOVED_DATA_USE_PURPOSE,
} from '@/mocks/accessRequirement/mockUpdatedClinicalForm'
import { getDataAccessRequestHandlers } from '@/mocks/msw/handlers/dataAccessRequestHandlers'
import { getFileHandlers } from '@/mocks/msw/handlers/fileHandlers'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  DATA_ACCESS_REQUEST,
} from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  JsonSchemaAccessRequirement,
  Request,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { fn } from 'storybook/test'
import JsonSchemaRequestWizard, {
  JsonSchemaRequestWizardProps,
} from './JsonSchemaRequestWizard'

// The mocks are typed with the generated client; the wizard is typed with the legacy access requirement types
const clinicalAccessRequirement =
  mockJsonSchemaAR2 as unknown as JsonSchemaAccessRequirement
const updatedClinicalAccessRequirement =
  mockUpdatedJsonSchemaAR2 as unknown as JsonSchemaAccessRequirement

/** A request saved with an answer that the updated Clinical Trial form no longer offers. */
const requestWithRemovedOption: Request = {
  ...MOCK_CLINICAL_JSON_SCHEMA_DATA_ACCESS_REQUEST,
  schemaData: {
    projectTitle: 'Variant frequency across trial cohorts',
    dataUsePurpose: REMOVED_DATA_USE_PURPOSE,
    signedDataUseAgreement: 123,
  },
  attachments: ['123'],
}

/**
 * Serves what the wizard needs. The access requirement served is `initial` until the requester first saves the
 * request, and `afterFirstSave` from then on.
 */
function getHandlers(
  initial: JsonSchemaAccessRequirement,
  afterFirstSave: JsonSchemaAccessRequirement = initial,
) {
  let hasSaved = false
  return [
    http.get(
      `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_BY_ID(clinicalAccessRequirement.id)}`,
      () => HttpResponse.json(hasSaved ? afterFirstSave : initial),
    ),
    // Records the save, then falls through to the handler that saves the request
    http.post(`${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST}`, () => {
      hasSaved = true
    }),
    http.get(
      `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
        clinicalAccessRequirement.id,
      )}`,
      () => HttpResponse.json(requestWithRemovedOption),
    ),
    ...getUpdatedClinicalFormHandlers(MOCK_REPO_ORIGIN),
    ...getFormTemplateHandlers(MOCK_REPO_ORIGIN),
    ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
    ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
    ...getFileHandlers(MOCK_REPO_ORIGIN),
  ]
}

const meta: Meta<JsonSchemaRequestWizardProps & { isAuthenticated: boolean }> =
  {
    title:
      'Governance/Data Access Request Flow/Schema-driven Access Requirement/Request Wizard',
    component: JsonSchemaRequestWizard,
    parameters: {
      stack: 'mock',
      // An inferred `onEDucContinue` action would make the last step continue to the eDUC steps instead of submitting
      actions: { disable: true },
    },
    args: {
      accessRequirement: clinicalAccessRequirement,
      subjectId: 'syn123',
      subjectType: RestrictableObjectType.ENTITY,
      onHide: fn(),
      onCancel: fn(),
      onSubmissionCreated: fn(),
      isAuthenticated: true,
    },
  }

export default meta

type Story = StoryObj<typeof meta>

/**
 * The requester resumes a draft after the form changed to no longer offer one of their answers. The answer is flagged
 * on its step until the requester changes it.
 */
export const ResumedWithAnswerTheFormNoLongerAccepts: Story = {
  parameters: {
    msw: { handlers: getHandlers(updatedClinicalAccessRequirement) },
  },
}

/**
 * The form changes while the requester is filling it out. Submitting finds the change, saves the answers, and returns
 * the requester to the answer the updated form no longer accepts. Click Next, Next, then Submit.
 */
export const FormUpdatedWhileSubmitting: Story = {
  parameters: {
    msw: {
      handlers: getHandlers(
        clinicalAccessRequirement,
        updatedClinicalAccessRequirement,
      ),
    },
  },
}
