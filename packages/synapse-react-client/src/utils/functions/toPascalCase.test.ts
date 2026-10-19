import { toPascalCase } from './toPascalCase'

describe('toPascalCase', () => {
  it.each([
    ['genomics data request', 'GenomicsDataRequest'],
    ['Clinical-Trial_DAR (v2)', 'ClinicalTrialDARV2'],
    ['  padded   spaces  ', 'PaddedSpaces'],
    ['camelCase stays', 'CamelCaseStays'],
    ['2024 request', '2024Request'],
    ['', ''],
    ['!!! ???', ''],
  ])('converts %j to %j', (input, expected) => {
    expect(toPascalCase(input)).toBe(expected)
  })
})
