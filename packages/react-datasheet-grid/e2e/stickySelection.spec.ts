import { test, expect } from '@playwright/test'

test.describe('Sticky Selection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Wait for the grid to be fully rendered
    await expect(page.locator('.dsg-container')).toBeVisible()
    await expect(page.locator('.dsg-row')).toHaveCount(5, { timeout: 5000 }) // header + 4 data rows
  })

  test('Selection border stays fixed when scrolling horizontally on pinned column', async ({
    page,
  }) => {
    // Click on a cell in the pinned column (first data column, row 0)
    // The grid has: gutter | Active (checkbox, pinned) | First name | Last name
    const pinnedCell = page
      .locator('.dsg-row:not(.dsg-row-header) .dsg-cell-sticky-left')
      .first()
    await pinnedCell.click()

    // Wait for selection to appear
    const stickyActiveCell = page.locator('.dsg-active-cell-sticky')
    await expect(stickyActiveCell).toBeVisible()

    // Get initial selection position
    const selectionBefore = await stickyActiveCell.boundingBox()
    expect(selectionBefore).not.toBeNull()

    // Scroll horizontally by triggering scroll on the container
    const container = page.locator('.dsg-container')
    await container.evaluate(el => {
      el.scrollLeft = 200
    })

    // Wait a bit for any rerender
    await page.waitForTimeout(100)

    // Get selection position after scroll
    const selectionAfter = await stickyActiveCell.boundingBox()
    expect(selectionAfter).not.toBeNull()

    // Selection left position should remain the same (within a small tolerance for sub-pixel differences)
    expect(selectionAfter!.x).toBeCloseTo(selectionBefore!.x, 0)
  })

  test('Non-pinned column selection moves when scrolling horizontally', async ({
    page,
  }) => {
    // Click on a cell in a non-pinned column (e.g., "First name" column)
    // Need to click on a row cell, not the header
    const rows = page
      .locator('.dsg-row')
      .filter({ hasNot: page.locator('.dsg-row-header') })
    const firstRow = rows.first()

    // The third cell in a row should be the "First name" column (after gutter and Active)
    const nonPinnedCell = firstRow.locator('.dsg-cell').nth(2)
    await nonPinnedCell.click()

    // Wait for selection to appear (should NOT have sticky class)
    const activeCell = page.locator(
      '.dsg-active-cell:not(.dsg-active-cell-sticky)',
    )
    await expect(activeCell).toBeVisible()

    // Get initial selection position
    const selectionBefore = await activeCell.boundingBox()
    expect(selectionBefore).not.toBeNull()

    // Scroll horizontally
    const container = page.locator('.dsg-container')
    await container.evaluate(el => {
      el.scrollLeft = 50
    })

    // Wait a bit for any rerender
    await page.waitForTimeout(100)

    // Get selection position after scroll
    const selectionAfter = await activeCell.boundingBox()
    expect(selectionAfter).not.toBeNull()

    // Selection left position should have moved (decreased by scroll amount)
    expect(selectionAfter!.x).toBeLessThan(selectionBefore!.x)
  })

  test('Sticky active cell class is applied for pinned column selection', async ({
    page,
  }) => {
    // Click on a cell in the pinned column
    const pinnedCell = page.locator('.dsg-cell-sticky-left').first()
    await pinnedCell.click()

    // Should have sticky active cell class
    await expect(page.locator('.dsg-active-cell-sticky')).toBeVisible()
  })

  test('Sticky active cell class is NOT applied for non-pinned column selection', async ({
    page,
  }) => {
    // Click on a cell in a non-pinned column
    const rows = page
      .locator('.dsg-row')
      .filter({ hasNot: page.locator('.dsg-row-header') })
    const firstRow = rows.first()
    const nonPinnedCell = firstRow.locator('.dsg-cell').nth(2)
    await nonPinnedCell.click()

    // Should have regular active cell but NOT sticky class
    await expect(page.locator('.dsg-active-cell')).toBeVisible()
    await expect(page.locator('.dsg-active-cell-sticky')).not.toBeVisible()
  })

  test('Column marker stays fixed when scrolling with pinned column selected', async ({
    page,
  }) => {
    // Click on a cell in the pinned column
    const pinnedCell = page.locator('.dsg-cell-sticky-left').first()
    await pinnedCell.click()

    // Should have sticky column marker
    const stickyColMarker = page.locator(
      '.dsg-selection-col-marker-container-sticky',
    )
    await expect(stickyColMarker).toBeVisible()

    // Get initial position
    const markerBefore = await stickyColMarker.boundingBox()
    expect(markerBefore).not.toBeNull()

    // Scroll horizontally
    const container = page.locator('.dsg-container')
    await container.evaluate(el => {
      el.scrollLeft = 200
    })

    await page.waitForTimeout(100)

    // Get position after scroll
    const markerAfter = await stickyColMarker.boundingBox()
    expect(markerAfter).not.toBeNull()

    // Position should remain the same
    expect(markerAfter!.x).toBeCloseTo(markerBefore!.x, 0)
  })
})
