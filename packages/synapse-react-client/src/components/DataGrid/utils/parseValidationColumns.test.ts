import { describe, it, expect } from 'vitest'
import {
  extractValidationFieldNames,
  extractUniqueValidationFieldNames,
} from './parseValidationColumns'

describe('extractValidationFieldNames', () => {
  it('parses single message', () => {
    expect(
      extractValidationFieldNames([
        '#/platform: null is not a valid enum value',
      ]),
    ).toEqual(['platform'])
  })

  it('parses multiple messages', () => {
    const input = [
      '#/platform: null is not a valid enum value',
      '#/disease: "flu" is not allowed',
      '#/study: required property missing',
    ]
    expect(extractValidationFieldNames(input)).toEqual([
      'platform',
      'disease',
      'study',
    ])
  })

  it('handles leading whitespace', () => {
    expect(extractValidationFieldNames(['   #/organ: bad value'])).toEqual([
      'organ',
    ])
  })

  it('ignores strings without expected pattern', () => {
    const input = [
      'platform: missing hash slash',
      '#platform: missing slash after hash',
      '#/: empty path',
      'random text',
    ]
    expect(extractValidationFieldNames(input)).toEqual([])
  })

  it('stops at first colon only', () => {
    expect(
      extractValidationFieldNames(['#/assay: value: another: details']),
    ).toEqual(['assay'])
  })

  it('keeps duplicates (no de-dupe)', () => {
    const input = ['#/platform: msg1', '#/platform: msg2', '#/platform: msg3']
    expect(extractValidationFieldNames(input)).toEqual([
      'platform',
      'platform',
      'platform',
    ])
  })

  it('trims extracted name', () => {
    expect(
      extractValidationFieldNames(['#/ platform  : something wrong']),
    ).toEqual(['platform'])
  })
})

describe('extractUniqueValidationFieldNames', () => {
  it('returns unique names preserving first-seen order', () => {
    const input = [
      '#/platform: msg1',
      '#/disease: msg2',
      '#/platform: msg3',
      '#/study: msg4',
      '#/disease: msg5',
    ]
    expect(extractUniqueValidationFieldNames(input)).toEqual([
      'platform',
      'disease',
      'study',
    ])
  })

  it('empty input', () => {
    expect(extractUniqueValidationFieldNames([])).toEqual([])
  })

  it('no valid patterns', () => {
    expect(
      extractUniqueValidationFieldNames([
        'random',
        'platform:',
        '#platform: x',
      ]),
    ).toEqual([])
  })
})
