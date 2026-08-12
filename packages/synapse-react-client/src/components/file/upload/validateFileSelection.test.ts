import { validateFileSelection } from './validateFileSelection'

describe('validateFileSelection', () => {
  const txtFile = (name: string, sizeBytes = 10) => {
    const file = new File(['x'.repeat(sizeBytes)], name, {
      type: 'text/plain',
    })
    return file
  }

  it('returns null when there are no constraints', () => {
    expect(validateFileSelection([txtFile('a.txt')], {})).toBeNull()
  })

  it('returns null when the selection satisfies all constraints', () => {
    expect(
      validateFileSelection([txtFile('a.txt')], {
        acceptedContentTypes: ['text/plain'],
        maxFileSizeBytes: 1000,
        maxFiles: 5,
        currentFileCount: 1,
      }),
    ).toBeNull()
  })

  it('rejects a selection that would exceed maxFiles, counting currentFileCount', () => {
    const result = validateFileSelection([txtFile('a.txt'), txtFile('b.txt')], {
      maxFiles: 2,
      currentFileCount: 1,
    })
    expect(result).toEqual('You can attach up to 2 files.')
  })

  it('allows a selection that exactly meets maxFiles', () => {
    const result = validateFileSelection([txtFile('a.txt'), txtFile('b.txt')], {
      maxFiles: 2,
      currentFileCount: 0,
    })
    expect(result).toBeNull()
  })

  it('rejects a file exceeding maxFileSizeBytes', () => {
    const oneMb = 1024 * 1024
    const result = validateFileSelection([txtFile('big.txt', oneMb * 2)], {
      maxFileSizeBytes: oneMb,
    })
    expect(result).toEqual('Each file must be 1 MB or less.')
  })

  it('rejects an unsupported content type', () => {
    const exeFile = new File(['x'], 'virus.exe', {
      type: 'application/x-msdownload',
    })
    const result = validateFileSelection([exeFile], {
      acceptedContentTypes: ['text/plain', 'application/pdf'],
    })
    expect(result).toEqual('Unsupported file type: virus.exe.')
  })

  it('lists every unsupported file by name', () => {
    const exeFile = new File(['x'], 'virus.exe', {
      type: 'application/x-msdownload',
    })
    const batFile = new File(['x'], 'script.bat', { type: '' })
    const result = validateFileSelection([exeFile, batFile], {
      acceptedContentTypes: ['text/plain'],
    })
    expect(result).toEqual('Unsupported file type: virus.exe, script.bat.')
  })

  it('checks maxFiles before file size or type', () => {
    const bigUnsupportedFile = new File(['x'.repeat(2000)], 'big.exe', {
      type: 'application/x-msdownload',
    })
    const result = validateFileSelection([bigUnsupportedFile], {
      acceptedContentTypes: ['text/plain'],
      maxFileSizeBytes: 1000,
      maxFiles: 0,
      currentFileCount: 0,
    })
    expect(result).toEqual('You can attach up to 0 files.')
  })
})
