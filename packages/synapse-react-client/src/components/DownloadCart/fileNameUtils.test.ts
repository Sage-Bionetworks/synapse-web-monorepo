import { describe, expect, it } from 'vitest'
import { deduplicateFileName, getFileName } from './fileNameUtils'
import {
  FileResult,
  DownloadListItemResult,
} from '@sage-bionetworks/synapse-types'

describe('fileNameUtils', () => {
  describe('getFileName', () => {
    it('should return fileName from fileHandle when available', () => {
      const fileResult: FileResult = {
        fileHandleId: '123',
        fileHandle: {
          id: '123',
          fileName: 'myfile.txt',
          concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
        },
      } as FileResult

      expect(getFileName(fileResult)).toBe('myfile.txt')
    })

    it('should fall back to originalItem fileName when fileHandle fileName is not available', () => {
      const fileResult: FileResult = {
        fileHandleId: '123',
      } as FileResult

      const originalItem: DownloadListItemResult = {
        fileEntityId: 'syn123',
        fileName: 'originalName.txt',
      } as DownloadListItemResult

      expect(getFileName(fileResult, originalItem)).toBe('originalName.txt')
    })

    it('should generate default name when neither fileHandle nor originalItem fileName is available', () => {
      const fileResult: FileResult = {
        fileHandleId: '123',
      } as FileResult

      expect(getFileName(fileResult)).toBe('file-123')
    })

    it('should prioritize fileHandle fileName over originalItem fileName', () => {
      const fileResult: FileResult = {
        fileHandleId: '123',
        fileHandle: {
          id: '123',
          fileName: 'handleName.txt',
          concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
        },
      } as FileResult

      const originalItem: DownloadListItemResult = {
        fileEntityId: 'syn123',
        fileName: 'originalName.txt',
      } as DownloadListItemResult

      expect(getFileName(fileResult, originalItem)).toBe('handleName.txt')
    })
  })

  describe('deduplicateFileName', () => {
    it('should return original filename for first occurrence', () => {
      const usedFilenames = new Map<string, number>()
      const fileName = deduplicateFileName('test.txt', usedFilenames)

      expect(fileName).toBe('test.txt')
      expect(usedFilenames.get('test.txt')).toBe(0)
    })

    it('should append counter for duplicate filename with extension', () => {
      const usedFilenames = new Map<string, number>([['test.txt', 0]])
      const fileName = deduplicateFileName('test.txt', usedFilenames)

      expect(fileName).toBe('test (1).txt')
      expect(usedFilenames.get('test.txt')).toBe(1)
    })

    it('should append counter for duplicate filename without extension', () => {
      const usedFilenames = new Map<string, number>([['README', 0]])
      const fileName = deduplicateFileName('README', usedFilenames)

      expect(fileName).toBe('README (1)')
      expect(usedFilenames.get('README')).toBe(1)
    })

    it('should increment counter for multiple duplicates', () => {
      const usedFilenames = new Map<string, number>([['test.txt', 0]])

      const fileName1 = deduplicateFileName('test.txt', usedFilenames)
      expect(fileName1).toBe('test (1).txt')
      expect(usedFilenames.get('test.txt')).toBe(1)

      const fileName2 = deduplicateFileName('test.txt', usedFilenames)
      expect(fileName2).toBe('test (2).txt')
      expect(usedFilenames.get('test.txt')).toBe(2)

      const fileName3 = deduplicateFileName('test.txt', usedFilenames)
      expect(fileName3).toBe('test (3).txt')
      expect(usedFilenames.get('test.txt')).toBe(3)
    })

    it('should handle filenames with multiple dots', () => {
      const usedFilenames = new Map<string, number>([['archive.tar.gz', 0]])
      const fileName = deduplicateFileName('archive.tar.gz', usedFilenames)

      expect(fileName).toBe('archive.tar (1).gz')
      expect(usedFilenames.get('archive.tar.gz')).toBe(1)
    })

    it('should handle filenames starting with a dot', () => {
      const usedFilenames = new Map<string, number>([['.gitignore', 0]])
      const fileName = deduplicateFileName('.gitignore', usedFilenames)

      expect(fileName).toBe('.gitignore (1)')
      expect(usedFilenames.get('.gitignore')).toBe(1)
    })

    it('should mutate the usedFilenames map', () => {
      const usedFilenames = new Map<string, number>()

      deduplicateFileName('file1.txt', usedFilenames)
      expect(usedFilenames.size).toBe(1)
      expect(usedFilenames.get('file1.txt')).toBe(0)

      deduplicateFileName('file2.txt', usedFilenames)
      expect(usedFilenames.size).toBe(2)
      expect(usedFilenames.get('file2.txt')).toBe(0)

      deduplicateFileName('file1.txt', usedFilenames)
      expect(usedFilenames.size).toBe(2)
      expect(usedFilenames.get('file1.txt')).toBe(1)
    })
  })
})
