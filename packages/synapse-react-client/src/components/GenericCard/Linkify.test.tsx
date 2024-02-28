import { render } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import React from 'react'
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
      `https://www.synapse.org/#!Synapse:${value}`,
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
      `https://www.synapse.org/#!Synapse:syn1234567`,
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
      `https://doi.org/10.1093/neuonc/noy046`,
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
})
