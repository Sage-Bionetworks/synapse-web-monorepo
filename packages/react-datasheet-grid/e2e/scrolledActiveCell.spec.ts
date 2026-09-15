import { test, expect, Locator, Page } from '@playwright/test'

// The active cell's value is rendered in a popup portaled outside the
// scrollable container so it can expand past the grid's edges. Nothing clips
// that popup, so once the cell it is anchored to scrolls behind the grid's own
// sticky chrome (header row, pinned columns) or out of the scrollable area, the
// popup has to stop painting itself — otherwise its text is drawn on top of the
// column headers and of whatever sits around the grid.
test.describe('an active cell scrolled out of view', () => {
  const ROW_COUNT = 40

  test.beforeEach(async ({ page }) => {
    await page.goto(`/?rows=${ROW_COUNT}`)
    await expect(page.locator('.dsg-container')).toBeVisible()
    await expect(page.locator('.dsg-row').first()).toBeVisible()
  })

  const dataRows = (page: Page) => page.locator('.dsg-row:not(.dsg-row-header)')

  // Grid columns: gutter | Active (checkbox, pinned) | First name | Last name | Email | Company | Department
  const getFirstNameCell = (page: Page, rowIndex: number) =>
    dataRows(page).nth(rowIndex).locator('.dsg-cell').nth(2)

  const cellValue = (cell: Locator) =>
    cell.locator('textarea.dsg-input').inputValue()

  // Everything the grid renders inside its container is clipped by it and
  // painted under the sticky header, so only the portaled popup can leak. Its
  // rect is reported alongside whether it actually paints, since an
  // out-of-view popup stays mounted to preserve an in-progress edit.
  const paintedPopups = (page: Page) =>
    page.evaluate(() =>
      Array.from(document.querySelectorAll('textarea.dsg-input'))
        .filter(textarea => !textarea.closest('.dsg-container'))
        .filter(textarea =>
          textarea.checkVisibility({
            opacityProperty: true,
            visibilityProperty: true,
          }),
        )
        .map(textarea => {
          const { top, left } = textarea.getBoundingClientRect()
          return { value: (textarea as HTMLTextAreaElement).value, top, left }
        }),
    )

  const valuesRenderedInCells = (page: Page) =>
    page.evaluate(() =>
      Array.from(
        document.querySelectorAll<HTMLTextAreaElement>(
          '.dsg-container textarea.dsg-input',
        ),
      ).map(textarea => textarea.value),
    )

  // Scroll just far enough to tuck the cell behind the sticky header row (or,
  // scrolling horizontally, behind the pinned columns) while keeping it within
  // the rows/columns the grid still renders around the viewport.
  const scrollCellBehindGridChrome = async (
    page: Page,
    cell: Locator,
    axis: 'vertical' | 'horizontal',
  ) => {
    const overlap = 10
    const cellRect = (await cell.boundingBox())!
    await page.locator('.dsg-container').evaluate(
      (container, { cellRect, axis, overlap }) => {
        if (axis === 'vertical') {
          const header = container.querySelector('.dsg-row-header')!
          const headerBottom = header.getBoundingClientRect().bottom
          container.scrollTop += cellRect.y - headerBottom + overlap
        } else {
          const pinnedRight = Math.max(
            ...Array.from(
              container.querySelectorAll(
                '.dsg-row-header .dsg-cell-sticky-left, .dsg-row-header .dsg-cell-gutter',
              ),
            ).map(pinned => pinned.getBoundingClientRect().right),
          )
          container.scrollLeft += cellRect.x - pinnedRight + overlap
        }
      },
      { cellRect, axis, overlap },
    )
    // Position tracking runs on a requestAnimationFrame loop; give it a couple
    // of frames to catch up.
    await page.evaluate(
      () =>
        new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))),
    )
  }

  test('stops painting its value once it is behind the sticky header row', async ({
    page,
  }) => {
    const cell = getFirstNameCell(page, 1)
    const value = await cellValue(cell)
    await cell.click()

    // The popup paints while the cell it belongs to is in view...
    expect(await paintedPopups(page)).toEqual([
      expect.objectContaining({ value }),
    ])

    // ...and stops once that cell has scrolled behind the header row.
    await scrollCellBehindGridChrome(page, cell, 'vertical')

    expect(await paintedPopups(page)).toEqual([])
  })

  test('stops painting its value once it is behind the pinned columns', async ({
    page,
  }) => {
    const cell = getFirstNameCell(page, 1)
    await cell.click()
    expect(await paintedPopups(page)).toHaveLength(1)

    await scrollCellBehindGridChrome(page, cell, 'horizontal')

    expect(await paintedPopups(page)).toEqual([])
  })

  test('keeps showing its value in the cell itself, clipped by the grid', async ({
    page,
  }) => {
    // Hiding the popup must not blank out the active cell: the value it was
    // displaying falls back to rendering inside the cell, where the grid clips
    // it like any other cell's value.
    const cell = getFirstNameCell(page, 1)
    const value = await cellValue(cell)
    await cell.click()
    expect(await valuesRenderedInCells(page)).not.toContain(value)

    await scrollCellBehindGridChrome(page, cell, 'vertical')

    expect(await valuesRenderedInCells(page)).toContain(value)
  })

  test('keeps an in-progress edit focused so scrolling back resumes it', async ({
    page,
  }) => {
    const cell = getFirstNameCell(page, 1)
    await cell.click()
    await page.keyboard.type('edited while visible')
    await expect(page.locator('.dsg-input:focus')).toBeVisible()

    await scrollCellBehindGridChrome(page, cell, 'vertical')
    expect(await paintedPopups(page)).toEqual([])

    // Still the focused editor, just not painted — so the text survives.
    await expect(page.locator('.dsg-input:focus')).toHaveValue(
      'edited while visible',
    )
  })
})
