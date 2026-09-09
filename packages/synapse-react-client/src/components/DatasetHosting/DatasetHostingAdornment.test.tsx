import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { DatasetHostingAdornment } from './DatasetHostingAdornment'

describe('DatasetHostingAdornment', () => {
  test.each([
    ['synapse', 'Synapse Hosted'],
    ['external-cloud', 'External Cloud'],
    ['external-download', 'Synapse Indexed'],
    ['external-access', 'Externally Hosted'],
    ['mixed', 'Mixed Hosting'],
    ['unavailable', 'Not Available'],
  ] as const)(
    'renders the canonical chip label for hostingType=%s',
    (hostingType, expectedLabel) => {
      render(<DatasetHostingAdornment hostingType={hostingType} />)
      expect(screen.getByText(expectedLabel)).toBeVisible()
    },
  )

  test('renders the outlined header variant on dark backgrounds', () => {
    render(<DatasetHostingAdornment hostingType="synapse" isHeader />)
    const chip = screen.getByText('Synapse Hosted').closest('.MuiChip-root')
    expect(chip).toHaveClass('MuiChip-outlined')
  })
})
