import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'
import {
  CardActionButtonStyle,
  CardActionButtonStyleContext,
} from '../GenericCard/CardActionButtonStyleContext'
import { DatasetHostingButton } from './DatasetHostingButton'

const CART_LABEL = 'Add to Download Cart'
const MORE_OPTIONS_LABEL = 'More download options'

function renderButton(
  props: Parameters<typeof DatasetHostingButton>[0],
  style: CardActionButtonStyle = 'button',
) {
  return render(
    <CardActionButtonStyleContext.Provider value={style}>
      <DatasetHostingButton {...props} />
    </CardActionButtonStyleContext.Provider>,
    { wrapper: createWrapper() },
  )
}

describe('DatasetHostingButton', () => {
  describe('single action', () => {
    test('renders one button and no dropdown when only onDownloadClick is given', () => {
      const onDownloadClick = vi.fn()
      renderButton({ hosting: 'synapse', onDownloadClick })
      expect(screen.getByRole('button', { name: 'Download' })).toBeVisible()
      expect(
        screen.queryByRole('button', { name: MORE_OPTIONS_LABEL }),
      ).not.toBeInTheDocument()
    })

    test('external-access renders a link-out even when both actions are provided', () => {
      renderButton({
        hosting: 'external-access',
        repository: 'dbGaP',
        externalUrl: 'https://example.org/',
        onDownloadClick: vi.fn(),
        onAddToCartClick: vi.fn(),
      })
      const link = screen.getByRole('link', { name: 'Access at dbGaP' })
      expect(link).toHaveAttribute('href', 'https://example.org/')
      expect(
        screen.queryByRole('button', { name: MORE_OPTIONS_LABEL }),
      ).not.toBeInTheDocument()
    })
  })

  describe('split button (both actions on a downloadable dataset)', () => {
    test('defaults to add-to-cart as the primary action', async () => {
      const onDownloadClick = vi.fn()
      const onAddToCartClick = vi.fn()
      renderButton({ hosting: 'synapse', onDownloadClick, onAddToCartClick })

      await userEvent.click(screen.getByRole('button', { name: CART_LABEL }))
      expect(onAddToCartClick).toHaveBeenCalledTimes(1)
      expect(onDownloadClick).not.toHaveBeenCalled()
    })

    test('primaryAction="download" makes direct download the primary click', async () => {
      const onDownloadClick = vi.fn()
      const onAddToCartClick = vi.fn()
      renderButton({
        hosting: 'synapse',
        primaryAction: 'download',
        onDownloadClick,
        onAddToCartClick,
      })

      await userEvent.click(screen.getByRole('button', { name: 'Download' }))
      expect(onDownloadClick).toHaveBeenCalledTimes(1)
      expect(onAddToCartClick).not.toHaveBeenCalled()
    })

    test('the caret menu offers both actions and runs the alternate', async () => {
      const onDownloadClick = vi.fn()
      const onAddToCartClick = vi.fn()
      renderButton({
        hosting: 'external-download',
        repository: 'GEO',
        onDownloadClick,
        onAddToCartClick,
      })

      await userEvent.click(
        screen.getByRole('button', { name: MORE_OPTIONS_LABEL }),
      )
      const menu = screen.getByRole('menu')
      expect(
        within(menu).getByRole('menuitem', { name: CART_LABEL }),
      ).toBeVisible()

      await userEvent.click(
        within(menu).getByRole('menuitem', { name: 'Download from GEO' }),
      )
      expect(onDownloadClick).toHaveBeenCalledTimes(1)
      expect(onAddToCartClick).not.toHaveBeenCalled()
    })

    test('renders a split button in chip style too', async () => {
      const onAddToCartClick = vi.fn()
      renderButton(
        {
          hosting: 'synapse',
          onDownloadClick: vi.fn(),
          onAddToCartClick,
        },
        'chip',
      )

      await userEvent.click(screen.getByRole('button', { name: CART_LABEL }))
      expect(onAddToCartClick).toHaveBeenCalledTimes(1)
      expect(
        screen.getByRole('button', { name: MORE_OPTIONS_LABEL }),
      ).toBeInTheDocument()
    })
  })
})
