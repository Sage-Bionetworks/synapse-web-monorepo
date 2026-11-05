import { SYNAPSE_FILE_HANDLE_ID_FORMAT } from '@/utils/jsonschema/schemaData'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import { RJSFSchema } from '@rjsf/utils'
import { AccessType, Renewal, Request } from '@sage-bionetworks/synapse-types'
import {
  isRequesterInformationComplete,
  buildRequest,
  RequesterInformationValues,
  toRequesterInformationValues,
} from './requesterInformation'

const CURRENT_USER_ID = '1'

const request: Request = {
  id: '9100',
  accessRequirementId: '9000',
  irbFileHandleId: '',
  createdOn: '2026-01-01T00:00:00.000Z',
  modifiedOn: '2026-01-01T00:00:00.000Z',
  createdBy: CURRENT_USER_ID,
  modifiedBy: CURRENT_USER_ID,
  accessorChanges: [],
  etag: 'etag-0',
  concreteType: 'org.sagebionetworks.repo.model.dataaccess.Request',
  institution: 'Existing Institution',
}

const renewal: Renewal = {
  ...request,
  concreteType: 'org.sagebionetworks.repo.model.dataaccess.Renewal',
}

const completeValues: RequesterInformationValues = {
  accessorChanges: [{ userId: CURRENT_USER_ID, type: AccessType.GAIN_ACCESS }],
  institution: 'Sage Bionetworks',
  piName: 'Pat Investigator',
  piUserId: '2',
  piEmail: 'pat@sagebase.org',
  signingOfficialName: 'Sam Official',
  signingOfficialEmail: 'sam@sagebase.org',
}

describe('isRequesterInformationComplete', () => {
  it('does not require eDUC participants when the AR has no eDUC', () => {
    expect(
      isRequesterInformationComplete(
        { ...completeValues, institution: '', piUserId: null },
        false,
      ),
    ).toBe(true)
  })

  it.each<[string, Partial<RequesterInformationValues>]>([
    ['institution', { institution: '' }],
    ['PI name', { piName: '' }],
    ['PI user', { piUserId: null }],
    ['PI email', { piEmail: '' }],
    ['signing official name', { signingOfficialName: '' }],
    ['signing official email', { signingOfficialEmail: '' }],
  ])('requires the %s when the AR has an eDUC', (_name, blank) => {
    expect(isRequesterInformationComplete(completeValues, true)).toBe(true)
    expect(
      isRequesterInformationComplete({ ...completeValues, ...blank }, true),
    ).toBe(false)
  })
})

describe('toRequesterInformationValues', () => {
  it('lists the current user as a GAIN_ACCESS accessor of a request', () => {
    expect(
      toRequesterInformationValues(request, CURRENT_USER_ID).accessorChanges,
    ).toEqual([{ userId: CURRENT_USER_ID, type: AccessType.GAIN_ACCESS }])
  })

  it('lists the current user as a RENEW_ACCESS accessor of a renewal', () => {
    expect(
      toRequesterInformationValues(renewal, CURRENT_USER_ID).accessorChanges,
    ).toEqual([{ userId: CURRENT_USER_ID, type: AccessType.RENEW_ACCESS }])
  })

  it('restores the saved eDUC participants', () => {
    expect(
      toRequesterInformationValues(
        {
          ...request,
          principalInvestigator: {
            name: 'Pat Investigator',
            userId: '2',
            institutionalEmail: 'pat@sagebase.org',
          },
          signingOfficial: {
            name: 'Sam Official',
            institutionalEmail: 'sam@sagebase.org',
          },
        },
        CURRENT_USER_ID,
      ),
    ).toMatchObject({
      institution: 'Existing Institution',
      piName: 'Pat Investigator',
      piUserId: '2',
      piEmail: 'pat@sagebase.org',
      signingOfficialName: 'Sam Official',
      signingOfficialEmail: 'sam@sagebase.org',
    })
  })
})

const noFilesSchema: RJSFSchema = { type: 'object', properties: {} }
const fileSchema: RJSFSchema = {
  type: 'object',
  properties: {
    agreement: { type: 'number', format: SYNAPSE_FILE_HANDLE_ID_FORMAT },
    purpose: { type: 'string' },
  },
}
const contextualFileSchema: RJSFSchema = {
  type: 'object',
  properties: {
    agreement: { type: 'number', format: SYNAPSE_FILE_HANDLE_ID_FORMAT },
  },
  allOf: [
    {
      if: {
        properties: { [SUBMISSION_CONTEXT_PROPERTY]: { const: 'REQUEST' } },
      },
      then: {
        properties: {
          irbLetter: { type: 'number', format: SYNAPSE_FILE_HANDLE_ID_FORMAT },
        },
      },
    },
    {
      if: {
        properties: { [SUBMISSION_CONTEXT_PROPERTY]: { const: 'RENEWAL' } },
      },
      then: {
        properties: { progressReport: { type: 'string' } },
      },
    },
  ],
}

describe('buildRequest', () => {
  it('replaces the attachments with the file handles that the answers reference', () => {
    const built = buildRequest(
      { ...request, attachments: ['999'] },
      completeValues,
      { agreement: 123, purpose: '456' },
      fileSchema,
      false,
    )
    expect(built.attachments).toEqual(['123'])
  })

  it('replaces the attachments of a renewal', () => {
    const built = buildRequest(
      { ...renewal, attachments: ['999'] },
      completeValues,
      { agreement: 123 },
      fileSchema,
      false,
    )
    expect(built.attachments).toEqual(['123'])
  })

  it('clears stale attachments when no answer is a file', () => {
    const built = buildRequest(
      { ...request, attachments: ['999'] },
      completeValues,
      { purpose: 'Research' },
      fileSchema,
      false,
    )
    expect(built.attachments).toEqual([])
  })

  it('does not list the DUC as an attachment', () => {
    const built = buildRequest(
      { ...request, ducFileHandleId: '77' },
      completeValues,
      {},
      fileSchema,
      false,
    )
    expect(built.attachments).toEqual([])
    expect(built.ducFileHandleId).toBe('77')
  })

  it('drops a renewal’s answers to request-only questions, and their files', () => {
    // A renewal starts with the approved request's answers, but its form does not show request-only questions
    const built = buildRequest(
      { ...renewal, attachments: ['1', '2'] },
      completeValues,
      { agreement: 1, irbLetter: 2, progressReport: 'Done' },
      contextualFileSchema,
      false,
    )
    expect(built.schemaData).toEqual({
      agreement: 1,
      progressReport: 'Done',
      [SUBMISSION_CONTEXT_PROPERTY]: 'RENEWAL',
    })
    expect(built.attachments).toEqual(['1'])
  })

  it('keeps a request’s answers to request-only questions, and their files', () => {
    const built = buildRequest(
      request,
      completeValues,
      { agreement: 1, irbLetter: 2 },
      contextualFileSchema,
      false,
    )
    expect(built.schemaData).toEqual({
      agreement: 1,
      irbLetter: 2,
      [SUBMISSION_CONTEXT_PROPERTY]: 'REQUEST',
    })
    expect(built.attachments).toEqual(['1', '2'])
  })

  it.each([
    ['REQUEST', request],
    ['RENEWAL', renewal],
  ])('tags the schema data with the %s submission context', (context, r) => {
    const built = buildRequest(
      r,
      completeValues,
      { answer: 1 },
      noFilesSchema,
      false,
    )
    expect(built.schemaData).toEqual({
      answer: 1,
      [SUBMISSION_CONTEXT_PROPERTY]: context,
    })
  })

  it('writes the eDUC participants when the AR has an eDUC', () => {
    expect(
      buildRequest(request, completeValues, {}, noFilesSchema, true),
    ).toMatchObject({
      institution: 'Sage Bionetworks',
      principalInvestigator: {
        name: 'Pat Investigator',
        userId: '2',
        institutionalEmail: 'pat@sagebase.org',
      },
      signingOfficial: {
        name: 'Sam Official',
        institutionalEmail: 'sam@sagebase.org',
      },
    })
  })

  it('omits blank eDUC participant fields', () => {
    const built = buildRequest(
      request,
      { ...completeValues, piEmail: '', piUserId: null },
      {},
      noFilesSchema,
      true,
    )
    expect(built.principalInvestigator?.institutionalEmail).toBeUndefined()
    expect(built.principalInvestigator?.userId).toBeUndefined()
  })

  it('keeps the request’s eDUC participants when the AR has no eDUC', () => {
    const principalInvestigator = { name: 'Saved PI', userId: '7' }
    const signingOfficial = { name: 'Saved SO' }
    const built = buildRequest(
      { ...request, principalInvestigator, signingOfficial },
      completeValues,
      {},
      noFilesSchema,
      false,
    )
    expect(built.institution).toBe('Existing Institution')
    expect(built.principalInvestigator).toEqual(principalInvestigator)
    expect(built.signingOfficial).toEqual(signingOfficial)
  })

  it('saves the accessor changes', () => {
    expect(
      buildRequest(request, completeValues, {}, noFilesSchema, false)
        .accessorChanges,
    ).toEqual(completeValues.accessorChanges)
  })
})
