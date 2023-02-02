import { unCamelCase } from '../../../../src/lib/utils/functions/unCamelCase'

describe('unCamelCase', () => {
  it('works as expected', () => {
    expect(unCamelCase('basicCase')).toEqual('Basic Case')
    expect(unCamelCase('DNA')).toEqual('DNA')
    expect(unCamelCase('AnotherCase')).toEqual('Another Case')
    expect(unCamelCase('silly ColumnName Test (ms)')).toEqual(
      'Silly Column Name Test (ms)',
    )
    // these cases do not work as expected, and still need facet aliases
    // expect(unCamelCase('pH')).toEqual('pH') // actual 'P H'
    // expect(unCamelCase('nf1Genotype/nf2Genotype')).toEqual('NF1 Genotype/NF2 Genotype') // actual 'Nf1Genotype/nf2Genotype'
    // expect(unCamelCase('cBioFileFormat')).toEqual('cBio File Format') // actual 'C Bio File Format'
  })
})
