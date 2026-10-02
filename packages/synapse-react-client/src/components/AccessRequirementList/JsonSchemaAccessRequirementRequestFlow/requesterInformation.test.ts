import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
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

describe('buildRequest', () => {
  it.each([
    ['REQUEST', request],
    ['RENEWAL', renewal],
  ])('tags the schema data with the %s submission context', (context, r) => {
    const built = buildRequest(r, completeValues, { answer: 1 }, false)
    expect(built.schemaData).toEqual({
      answer: 1,
      [SUBMISSION_CONTEXT_PROPERTY]: context,
    })
  })

  it('writes the eDUC participants when the AR has an eDUC', () => {
    expect(buildRequest(request, completeValues, {}, true)).toMatchObject({
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
      false,
    )
    expect(built.institution).toBe('Existing Institution')
    expect(built.principalInvestigator).toEqual(principalInvestigator)
    expect(built.signingOfficial).toEqual(signingOfficial)
  })

  it('saves the accessor changes', () => {
    expect(
      buildRequest(request, completeValues, {}, false).accessorChanges,
    ).toEqual(completeValues.accessorChanges)
  })
})
