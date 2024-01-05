import { render } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import React from 'react'
import Linkify from './Linkify'

describe('Linkify tests', () => {
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
})
