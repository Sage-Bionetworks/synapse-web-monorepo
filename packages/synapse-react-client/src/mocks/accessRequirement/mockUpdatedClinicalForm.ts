import {
  FormTemplate,
  JsonSchemaAccessRequirement,
} from '@sage-bionetworks/synapse-client'
import { RJSFSchema } from '@rjsf/utils'
import { JSONSchema7 } from 'json-schema'
import { http, HttpResponse } from 'msw'
import {
  getRegisteredSchemaHandlers,
  getValidationSchemaHandlers,
} from '@/mocks/msw/handlers/schemaHandlers'
import { mockJsonSchemaAR2 } from './mockJsonSchemaAccessRequirements'
import { mockClinicalTemplate } from './mockFormTemplates'
import {
  mockClinicalSchema,
  mockJsonSchemaRegistry,
  mockJsonSchemaValidationSchemas,
  toMockValidationSchema,
} from './mockJsonSchemas'

/** The Data Use Purpose that the updated Clinical Trial form no longer offers. */
export const REMOVED_DATA_USE_PURPOSE = 'Commercial'

/** The Clinical Trial data contract, updated to no longer offer {@link REMOVED_DATA_USE_PURPOSE}. */
export const mockUpdatedClinicalSchema: RJSFSchema = {
  ...mockClinicalSchema,
  $id: 'org.sagebionetworks.act-ClinicalTrialDataAccessRequest-1.0.1',
  properties: {
    ...mockClinicalSchema.properties,
    dataUsePurpose: {
      type: 'string',
      title: 'Data Use Purpose',
      description: 'Select the primary purpose for your use of this data.',
      enum: ['Research', 'Educational'],
    },
  },
}

/** Version 2 of the Clinical Trial form, which uses {@link mockUpdatedClinicalSchema}. */
export const mockUpdatedClinicalTemplate: FormTemplate = {
  ...mockClinicalTemplate,
  etag: 'etag-template-2-v2',
  versionNumber: 2,
  schema$id: mockUpdatedClinicalSchema.$id as string,
}

/** {@link mockJsonSchemaAR2}, updated to use {@link mockUpdatedClinicalTemplate}. */
export const mockUpdatedJsonSchemaAR2: JsonSchemaAccessRequirement = {
  ...mockJsonSchemaAR2,
  etag: 'etag-ar-9001-v2',
  versionNumber: 2,
  formTemplateRef: {
    templateId: mockUpdatedClinicalTemplate.id!,
    templateVersionNumber: mockUpdatedClinicalTemplate.versionNumber!,
  },
}

/**
 * Serves version 2 of the Clinical Trial form, and its schema, alongside the existing forms and schemas. MSW uses the
 * first matching handler, so these must come before the default form template and schema handlers.
 */
export function getUpdatedClinicalFormHandlers(backendOrigin: string) {
  return [
    http.get(
      `${backendOrigin}/repo/v1/accessRequirement/formTemplate/${mockUpdatedClinicalTemplate.id}/version/${mockUpdatedClinicalTemplate.versionNumber}`,
      () => HttpResponse.json(mockUpdatedClinicalTemplate),
    ),
    ...getRegisteredSchemaHandlers(backendOrigin, [
      ...(Object.values(mockJsonSchemaRegistry) as JSONSchema7[]),
      mockUpdatedClinicalSchema as JSONSchema7,
    ]),
    ...getValidationSchemaHandlers(backendOrigin, [
      ...mockJsonSchemaValidationSchemas,
      toMockValidationSchema(mockUpdatedClinicalSchema),
    ]),
  ]
}
