import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { getTemplateFileAssociation } from './CustomFormContext'

const templateObject = {
  associateObjectType: FileHandleAssociateType.FormTemplateAttachment,
  associateObjectId: '42',
}

describe('getTemplateFileAssociation', () => {
  it('downloads a file through the template object when no list restricts it', () => {
    expect(getTemplateFileAssociation({ templateObject }, '1')).toEqual({
      fileHandleId: '1',
      ...templateObject,
    })
  })

  it('downloads a listed file through the template object', () => {
    expect(
      getTemplateFileAssociation(
        { templateObject, templateFileHandleIds: ['1'] },
        '1',
      ),
    ).toEqual({ fileHandleId: '1', ...templateObject })
  })

  it('does not download an unlisted file through the template object', () => {
    expect(
      getTemplateFileAssociation(
        { templateObject, templateFileHandleIds: ['2'] },
        '1',
      ),
    ).toBeUndefined()
  })

  it('has no association without a template object', () => {
    expect(
      getTemplateFileAssociation({ templateFileHandleIds: ['1'] }, '1'),
    ).toBeUndefined()
    expect(getTemplateFileAssociation(undefined, '1')).toBeUndefined()
  })
})
