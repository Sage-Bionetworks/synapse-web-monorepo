import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render } from '@testing-library/react'
import Linkify from './Linkify'

describe('Linkify tests', () => {
  test('auto-links a https URL', () => {
    const value = 'https://sagebionetworks.org/people'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(value)
  })

  test('auto-links a Synapse ID', () => {
    const value = 'syn1234567'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://www.synapse.org/Synapse:${value}`,
    )
  })

  test('auto-links PubMed ID', () => {
    const value = 'PMID:123456'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://pubmed.ncbi.nlm.nih.gov/123456`,
    )
  })

  test('auto-links Mutation ID', () => {
    const value = 'MGI:123456'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://www.informatics.jax.org/allele/${value}`,
    )
  })

  test('auto-links antibody RRID via ScienceCrunch', () => {
    const value = 'AB_123456'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://scicrunch.org/resolver/${value}`,
    )
  })
  test('auto-links cell line RRID via ScienceCrunch', () => {
    const value = 'CVCL_AB12'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://scicrunch.org/resolver/${value}`,
    )
  })

  test('auto-links ClinVar VCV', () => {
    const value = 'ClinVar:VCV123456'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://www.ncbi.nlm.nih.gov/clinvar/variation/VCV123456`,
    )
  })

  test('auto-links ClinVar RCV', () => {
    const value = 'ClinVar:RCV123456'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://www.ncbi.nlm.nih.gov/clinvar/RCV123456`,
    )
  })

  test('auto-link only the Synapse ID', () => {
    const value = 'a Synapse ID syn1234567 within other text'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })
    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://www.synapse.org/Synapse:syn1234567`,
    )
    expect(link.textContent).toEqual('syn1234567')
    expect(container).toHaveTextContent(value)
  })

  const bioregistryIds = [
    'doi:10.1093/neuonc/noy046',
    'doi:10.7303/syn66339969',
    'arxiv:2303.07469',
    'cbioportal:nst_nfosi_ntap',
    'rrid:AB_262044',
    'agrkb:100000000000001',
    'refseq:WP_029104145.1',
    'bioportal:pseudo',
    'kegg:hsa00190',
    'ensembl:ENSG00000179094.16',
    'string:P53350',
    'uniprot:P0DP23',
    'uniref:UniRef90_P00750',
    'arxiv:0807.4956v1',
    'biorxiv:2022.07.08.499378',
    'biorxiv:000091v1',
    'brenda:1.1.1.1',
    'cellxgene.collection:436154da-bcf1-4130-9c8b-120ff9a888f2',
    'ec:1.1.1.1',
    'ec:2.-.-.-',
    'geo:GDS1234',
    'go:0032571',
    'inchi:InChI=1S/C2H6O/c1-2-3/h3H,2H2,1H3',
    'inchikey:RYYVLZVUVIJVGH-UHFFFAOYSA-N',
    'orcid:0000-0003-4423-4370',
  ]

  bioregistryIds.forEach(id => {
    test(`Auto-links ${id} using the bioregistry provider`, () => {
      const { container } = render(<Linkify text={id} />, {
        wrapper: createWrapper(),
      })

      const link = container.querySelector('a')!
      expect(link.getAttribute('href')).toBe(`https://bioregistry.io/${id}`)
    })
  })
})
