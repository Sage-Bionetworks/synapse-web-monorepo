/**
 * Mock JSON Schema registry for the JSON Schema-based Access Requirements demo.
 *
 * Each FormTemplate pins exactly one registered JSON Schema (by `$id` +
 * `semanticVersion`). The schema is the data contract — it owns property
 * types, validation rules, and which properties are required.
 *
 * For the demo, we maintain an in-memory map keyed by `$id`. The
 * FormTemplateEditor lets ACT edit the schema body alongside the template in
 * a single UI; saving is conceptually a write to both the schema registry
 * and the template service.
 */

import { RJSFSchema } from '@rjsf/utils'

/** Genomics DAR data contract — all fields required. */
export const mockGenomicsSchema: RJSFSchema = {
  $id: 'org.sagebionetworks.dar.genomics-1.0.0',
  type: 'object',
  title: 'Genomics Data Access Request',
  properties: {
    institution: {
      type: 'string',
      title: 'Institution',
      description:
        'The name of the institution or organization you are affiliated with.',
    },
    projectLead: {
      type: 'string',
      title: 'Project Lead',
      description: 'The name of the principal investigator or project lead.',
    },
    intendedDataUse: {
      type: 'string',
      title: 'Intended Data Use Statement',
      description:
        'Describe in detail how you intend to use the requested data.',
    },
    agreeToTerms: {
      type: 'boolean',
      title: 'Terms and Conditions',
      description:
        'I agree to abide by all terms and conditions for accessing this data.',
    },
  },
  required: ['institution', 'projectLead', 'intendedDataUse', 'agreeToTerms'],
}

/** Clinical Trial DAR data contract — includes a file upload. */
export const mockClinicalSchema: RJSFSchema = {
  $id: 'org.sagebionetworks.dar.clinical-1.0.0',
  type: 'object',
  title: 'Clinical Trial Data Access Request',
  properties: {
    institution: {
      type: 'string',
      title: 'Institution',
      description:
        'The name of the institution or organization you are affiliated with.',
    },
    projectTitle: {
      type: 'string',
      title: 'Project Title',
      description: 'The title of the research project.',
    },
    dataUsePurpose: {
      type: 'string',
      title: 'Data Use Purpose',
      description: 'Select the primary purpose for your use of this data.',
      enum: ['Research', 'Commercial', 'Educational'],
    },
    irbApprovalNumber: {
      type: 'string',
      title: 'IRB Approval Number',
      description:
        'If your institution requires IRB approval, provide the approval number.',
    },
    signedDataUseAgreement: {
      type: 'number',
      title: 'Signed Data Use Agreement',
      description:
        'Upload a signed copy of the Data Use Agreement. A template is available for download.',
      format: 'synapse-filehandle-id',
    },
  },
  required: ['institution', 'projectTitle', 'signedDataUseAgreement'],
}

/**
 * Map from `$id` (with version) to the JSON Schema body. In the real system
 * this is served by the registered JSON Schema service.
 */
export const mockJsonSchemaRegistry: Record<string, RJSFSchema> = {
  [mockGenomicsSchema.$id as string]: mockGenomicsSchema,
  [mockClinicalSchema.$id as string]: mockClinicalSchema,
}

/** Look up a registered JSON Schema body by its `$id`. */
export function getMockJsonSchemaById(
  schema$id: string,
): RJSFSchema | undefined {
  return mockJsonSchemaRegistry[schema$id]
}
