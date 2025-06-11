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

  test('auto-links doi in APA modern alphanumeric string format', () => {
    const value = 'doi:10.1093/neuonc/noy046'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/doi:10.1093/neuonc/noy046`,
    )
  })

  test('auto-links doi with Synapse ID', () => {
    const value = 'doi:10.7303/syn66339969'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/doi:10.7303/syn66339969`,
    )
  })

  test('auto-links arXiv', () => {
    const value = 'arXiv:2303.07469 '
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://arxiv.org/abs/2303.07469`,
    )
  })

  test('auto-links cbioportal', () => {
    const value = 'cbioportal:nst_nfosi_ntap'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/cbioportal:nst_nfosi_ntap`,
    )
  })

  test('auto-links Research Resource Identification ids using the bioregistry provider', () => {
    const value = 'rrid:AB_262044'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/rrid:AB_262044`,
    )
  })
  test('auto-links Alliance of Genome Resources Knowledge Base ids using the bioregistry provider', () => {
    const value = 'agrkb:100000000000001'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/agrkb:100000000000001`,
    )
  })
  test('auto-links Reference Sequence (RefSeq) collection ids using the bioregistry provider', () => {
    const value = 'refseq:WP_029104145.1'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/refseq:WP_029104145.1`,
    )
  })
  test('auto-links BioPortal ids using the bioregistry provider', () => {
    const value = 'bioportal:pseudo'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/bioportal:pseudo`,
    )
  })
  test('auto-links Kyoto Encyclopedia of Genes and Genomes (KEGG) ids using the bioregistry provider', () => {
    const value = 'kegg:hsa00190'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/kegg:hsa00190`,
    )
  })
  test('auto-links Ensembl ids using the bioregistry provider', () => {
    const value = 'ensembl:ENSG00000179094.16'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/ensembl:ENSG00000179094.16`,
    )
  })
  test('auto-links STRING (Search Tool for Retrieval of Interacting Genes/Proteins) ids using the bioregistry provider', () => {
    const value = 'string:P53350'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/string:P53350`,
    )
  })
  test('auto-links UniProt Protein ids using the bioregistry provider', () => {
    const value = 'uniprot:P0DP23'
    const { container } = render(<Linkify text={value} />, {
      wrapper: createWrapper(),
    })

    const link = container.querySelector('a')!
    expect(link.getAttribute('href')).toEqual(
      `https://bioregistry.io/uniprot:P0DP23`,
    )
  })
})
