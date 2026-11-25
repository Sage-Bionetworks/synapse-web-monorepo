import { render, screen } from '@testing-library/react'
import HubAndSpokes, { Spoke } from './HubAndSpokes'

const spokes: Spoke[] = [
  {
    label: 'Cardiac Disease',
    href: 'https://med.stanford.edu',
    imageUrl: 'stanford.png',
    imageAlt: 'Stanford Medicine',
  },
  {
    label: 'Oncology',
    href: 'https://www.mdanderson.org',
    imageUrl: 'mdanderson.png',
    imageAlt: 'UT MD Anderson',
  },
  {
    label: 'GI Diseases',
    href: 'https://www.cincinnatichildrens.org',
    imageUrl: 'cincinnati.png',
    imageAlt: "Cincinnati Children's",
  },
]

describe('HubAndSpokes', () => {
  it('renders the hub image', () => {
    render(
      <HubAndSpokes
        hubImageUrl="hub.png"
        hubImageAlt="NAMHub"
        spokes={spokes}
      />,
    )
    expect(screen.getByRole('img', { name: 'NAMHub' })).toHaveAttribute(
      'src',
      'hub.png',
    )
  })

  it('renders each spoke as a link that opens its URL in a new window', () => {
    render(
      <HubAndSpokes
        hubImageUrl="hub.png"
        hubImageAlt="NAMHub"
        spokes={spokes}
      />,
    )
    expect(screen.getAllByRole('link')).toHaveLength(spokes.length)
    for (const spoke of spokes) {
      const link = screen.getByRole('link', {
        name: `${spoke.imageAlt} ${spoke.label}`,
      })
      expect(link).toHaveAttribute('href', spoke.href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })
})
