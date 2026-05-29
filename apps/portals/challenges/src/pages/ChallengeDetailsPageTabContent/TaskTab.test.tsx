import { describe, it, expect } from 'vitest'

function parseSubmissionTypes(value: string | undefined | null): string[] {
  // Convert `value` to string, like what's done in TaskTab.ChallengeSubmissionWrapper.
  return String(value || '')
    .split(',')
    .map(type => type.trim().toLowerCase())
}

describe('TaskTab', () => {
  describe('parseSubmissionTypes', () => {
    it('parses single submission type', () => {
      const result = parseSubmissionTypes('file')
      expect(result).toEqual(['file'])
    })

    it('parses multiple submission types', () => {
      const result = parseSubmissionTypes('file, dockerrepo')
      expect(result).toEqual(['file', 'dockerrepo'])
    })

    it('trims whitespace from submission types', () => {
      const result = parseSubmissionTypes('  file  ,  dockerrepo ')
      expect(result).toEqual(['file', 'dockerrepo'])
    })

    it('converts submission types to lowercase', () => {
      const result = parseSubmissionTypes('FILE,DockerRepo')
      expect(result).toEqual(['file', 'dockerrepo'])
    })

    it('handles empty string', () => {
      const result = parseSubmissionTypes('')
      expect(result).toEqual([''])
    })
  })
})
