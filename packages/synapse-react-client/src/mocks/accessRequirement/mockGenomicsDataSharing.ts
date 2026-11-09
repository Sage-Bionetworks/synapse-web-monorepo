import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { RJSFSchema } from '@rjsf/utils'
import { JSONSchema7 } from 'json-schema'
import {
  getFormTemplateHandlers,
  getFormTemplateService,
} from '@/mocks/msw/handlers/formTemplateHandlers'
import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { mockClinicalTemplate, mockGenomicsTemplate } from './mockFormTemplates'
import { mockClinicalSchema, mockGenomicsSchema } from './mockJsonSchemas'

export const DATA_SHARING_QUESTION =
  'Will the data be shared with collaborators outside your institution?'

/** The genomics DAR data contract, with a required Yes/No question about sharing the data. */
export const mockGenomicsSchemaWithDataSharing: RJSFSchema = {
  ...mockGenomicsSchema,
  properties: {
    ...mockGenomicsSchema.properties,
    sharesDataExternally: { type: 'boolean', title: DATA_SHARING_QUESTION },
  },
  required: [...(mockGenomicsSchema.required ?? []), 'sharesDataExternally'],
}

/**
 * The genomics DAR form with a "Data Sharing" step, holding the Yes/No question, between
 * Research Use and Agreements. It keeps the ids of `mockGenomicsTemplate` and
 * `mockGenomicsSchema`, so it is served in their place.
 */
export const mockGenomicsTemplateWithDataSharing: FormTemplate = {
  ...mockGenomicsTemplate,
  steps: [
    mockGenomicsTemplate.steps[0],
    {
      title: 'Data Sharing',
      fields: [{ schemaPath: '/sharesDataExternally', uiDefinition: {} }],
    },
    ...mockGenomicsTemplate.steps.slice(1),
  ],
}

/** Serves the genomics DAR form with the Data Sharing step in place of the plain genomics form. */
export function getGenomicsDataSharingHandlers(backendOrigin: string) {
  return [
    ...getFormTemplateHandlers(
      backendOrigin,
      getFormTemplateService([
        mockGenomicsTemplateWithDataSharing,
        mockClinicalTemplate,
      ]),
    ),
    ...getRegisteredSchemaHandlers(backendOrigin, [
      mockGenomicsSchemaWithDataSharing as JSONSchema7,
      mockClinicalSchema as JSONSchema7,
    ]),
  ]
}
