import { test, expect, Page, Locator } from '@playwright/test'

const LONG_VALUE = 'A very long first name that is much wider than the column'

test.describe('cell expansion on focus', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.dsg-container')).toBeVisible()
    await expect(page.locator('.dsg-row')).toHaveCount(5, { timeout: 5000 }) // header + 4 data rows
  })

  // A plain CSS :not() selector rather than .filter({ hasNot: ... }) —
  // the latter can report stale/empty matches once a descendant (like the
  // portaled textarea) has been moved in and out of the DOM via
  // createPortal, independent of React's normal render cycle.
  const dataRows = (page: Page) => page.locator('.dsg-row:not(.dsg-row-header)')

  // Grid columns: gutter | Active (checkbox, pinned) | First name | Last name | Email | Company | Department
  const getFirstNameCell = (page: Page, rowIndex = 0) =>
    dataRows(page).nth(rowIndex).locator('.dsg-cell').nth(2)

  // Selecting a cell and then typing starts editing (standard spreadsheet
  // behavior, replacing the existing value) — this is used instead of
  // dblclick() throughout, since a synthetic double-click's two mousedown
  // events can arrive faster than React re-renders activeCell between them,
  // so the click-tracking logic never recognizes it as landing on an
  // already-active cell.
  const startEditingWith = async (cell: Locator, value: string) => {
    await cell.click()
    await cell.page().keyboard.type(value)
  }

  const activeInputRect = (page: Page) =>
    page.evaluate(() => {
      const rect = (
        document.activeElement as HTMLElement
      ).getBoundingClientRect()
      return { x: rect.x, y: rect.y, width: rect.width, height: rect.height }
    })

  test('a resting (non-active) cell keeps its text vertically centered', async ({
    page,
  }) => {
    // The editable element is a <textarea> (needed so an expanded value can
    // wrap), which — unlike <input> — doesn't center single-line text
    // within a taller box on its own; centering has to come from how it's
    // laid out at rest.
    const { cellRect, textareaRect } = await page.evaluate(() => {
      const cell = document
        .querySelectorAll('.dsg-row:not(.dsg-row-header)')[0]
        .querySelectorAll('.dsg-cell')[2]
      const textarea = cell.querySelector('textarea')!
      const c = cell.getBoundingClientRect()
      const t = textarea.getBoundingClientRect()
      return {
        cellRect: { top: c.top, height: c.height },
        textareaRect: { top: t.top, height: t.height },
      }
    })
    const cellCenter = cellRect.top + cellRect.height / 2
    const textareaCenter = textareaRect.top + textareaRect.height / 2
    // Within a couple of pixels — box-model rounding, not a precise match.
    expect(Math.abs(textareaCenter - cellCenter)).toBeLessThanOrEqual(1)
  })

  test('an active or editing cell with a short (existing) value stays vertically centered', async ({
    page,
  }) => {
    // Regression test: a <textarea> always top-aligns its own text within
    // its own box. Forcing that box to the cell's full height (e.g. via
    // min-height) makes a short value sit at the top of it instead of
    // centered — vertical centering only works if the textarea is left to
    // its natural (short) height and centered by its wrapper instead.
    const firstNameCell = getFirstNameCell(page)
    const cellRect = (await firstNameCell.boundingBox())!
    const cellCenter = cellRect.y + cellRect.height / 2

    const assertCenteredAndNatural = async () => {
      const rect = await page.evaluate(() => {
        // Active cell's textarea is portaled: find the one holding "Elon"
        // rather than relying on document.activeElement (not focused yet
        // in the "active but not editing" case).
        const textareas = Array.from(
          document.querySelectorAll('textarea.dsg-input'),
        )
        const el = textareas.find(
          t => (t as HTMLTextAreaElement).value === 'Elon',
        )!
        const r = el.getBoundingClientRect()
        return { y: r.y, height: r.height }
      })
      // The textarea's own box should be close to its natural single-line
      // height, not stretched to the (much taller) cell.
      expect(rect.height).toBeLessThan(cellRect.height * 0.75)
      expect(
        Math.abs(rect.y + rect.height / 2 - cellCenter),
      ).toBeLessThanOrEqual(2)
    }

    await firstNameCell.click() // active, not yet editing
    await assertCenteredAndNatural()

    await page.keyboard.press('Enter') // now editing
    await expect(page.locator('.dsg-input:focus')).toBeVisible()
    await assertCenteredAndNatural()
  })

  test('typing a long value does not move the container scroll position', async ({
    page,
  }) => {
    const container = page.locator('.dsg-container')

    // Confirm the demo grid actually has horizontal overflow to scroll —
    // otherwise this test would trivially pass without exercising anything.
    const { scrollWidth, clientWidth } = await container.evaluate(el => ({
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
    }))
    expect(scrollWidth).toBeGreaterThan(clientWidth)

    const firstNameCell = getFirstNameCell(page)
    const columnWidth = (await firstNameCell.boundingBox())!.width

    const { scrollLeft: scrollLeftBefore, scrollTop: scrollTopBefore } =
      await container.evaluate(el => ({
        scrollLeft: el.scrollLeft,
        scrollTop: el.scrollTop,
      }))

    await startEditingWith(firstNameCell, LONG_VALUE)
    await expect(page.locator('.dsg-input:focus')).toBeVisible()

    const { scrollLeft: scrollLeftAfter, scrollTop: scrollTopAfter } =
      await container.evaluate(el => ({
        scrollLeft: el.scrollLeft,
        scrollTop: el.scrollTop,
      }))

    expect(scrollLeftAfter).toBe(scrollLeftBefore)
    expect(scrollTopAfter).toBe(scrollTopBefore)

    // Sanity check: the input is still focused (never unmounted mid-edit)
    // and holds the full value we typed.
    const activeValue = await page.evaluate(
      () => (document.activeElement as HTMLTextAreaElement).value,
    )
    expect(activeValue).toBe(LONG_VALUE)

    // And, where field-sizing is supported, the input actually grew past the
    // column width rather than silently truncating.
    const supported = await page.evaluate(() =>
      CSS.supports('field-sizing', 'content'),
    )
    if (supported) {
      const inputWidth = (await activeInputRect(page)).width
      expect(inputWidth).toBeGreaterThan(columnWidth)
    }
  })

  test("expanding a cell never changes the container's scrollWidth/scrollHeight", async ({
    page,
  }) => {
    // The expanded value is rendered in a position: fixed portal to
    // document.body, so it's never a descendant of .dsg-container and can
    // never affect its scrollable area, regardless of how large it grows.
    const container = page.locator('.dsg-container')
    const before = await container.evaluate(el => ({
      sw: el.scrollWidth,
      sh: el.scrollHeight,
    }))

    const firstNameCell = getFirstNameCell(page)
    await startEditingWith(firstNameCell, Array(60).fill('word').join(' '))
    await expect(page.locator('.dsg-input:focus')).toBeVisible()

    const after = await container.evaluate(el => ({
      sw: el.scrollWidth,
      sh: el.scrollHeight,
    }))
    expect(after).toEqual(before)
  })

  test('the expanded input is portaled outside the scrollable container, not clipped by it', async ({
    page,
  }) => {
    const firstNameCell = getFirstNameCell(page)
    await startEditingWith(firstNameCell, LONG_VALUE)
    await expect(page.locator('.dsg-input:focus')).toBeVisible()

    const isInsideContainer = await page.evaluate(() =>
      Boolean(document.activeElement?.closest('.dsg-container')),
    )
    expect(isInsideContainer).toBe(false)
  })

  test('a cell near the bottom edge of the grid expands fully instead of being clipped', async ({
    page,
  }) => {
    const containerBox = (await page.locator('.dsg-container').boundingBox())!
    const lastRowCell = getFirstNameCell(page, 3) // last of the 4 demo rows

    await startEditingWith(lastRowCell, Array(40).fill('word').join(' '))
    await expect(page.locator('.dsg-input:focus')).toBeVisible()
    // Let field-sizing settle on its final (wrapped, multi-line) height.
    await expect
      .poll(async () => (await activeInputRect(page)).height)
      .toBeGreaterThan(40)

    const rect = await activeInputRect(page)
    const containerBottom = containerBox.y + containerBox.height

    // The expanded popup genuinely extends past the grid's own bottom edge...
    expect(rect.y + rect.height).toBeGreaterThan(containerBottom)

    // ...and a point in that overflow area actually renders the textarea
    // (not clipped/hidden by the grid), confirmed via real hit-testing.
    const hitElementIsTextarea = await page.evaluate(
      ([x, y]) => {
        const el = document.elementFromPoint(x, y)
        return el?.tagName === 'TEXTAREA' && el.classList.contains('dsg-input')
      },
      [rect.x + 10, containerBottom + 5],
    )
    expect(hitElementIsTextarea).toBe(true)
  })

  test('a cell near the edge of the browser window is clamped to stay fully on screen', async ({
    page,
  }) => {
    // Narrow enough that --dsg-cell-expanded-max-width (480px) would push
    // the popup off the right edge if it weren't clamped further.
    await page.setViewportSize({ width: 700, height: 600 })

    const container = page.locator('.dsg-container')
    await container.evaluate(el => {
      el.scrollLeft = el.scrollWidth
    })

    const rows = dataRows(page)
    const cellCount = await rows.first().locator('.dsg-cell').count()
    const lastCell = rows
      .first()
      .locator('.dsg-cell')
      .nth(cellCount - 1)

    await startEditingWith(lastCell, Array(60).fill('word').join(' '))
    await expect(page.locator('.dsg-input:focus')).toBeVisible()
    await expect
      .poll(async () => (await activeInputRect(page)).width)
      .toBeGreaterThan((await lastCell.boundingBox())!.width)

    const rect = await activeInputRect(page)
    expect(rect.x + rect.width).toBeLessThanOrEqual(700)
    expect(rect.y + rect.height).toBeLessThanOrEqual(600)
  })

  test('still wraps at a sensible width if --dsg-cell-expanded-max-width is missing', async ({
    page,
  }) => {
    // Regression test: nothing in the stylesheet references
    // --dsg-cell-expanded-max-width/height via var() anymore (that's read
    // in JS instead), which makes the :root declaration a candidate for a
    // CSS-purging build step to strip as "unused". Falling back to
    // Infinity in that case would mean the popup only stops growing at the
    // edge of the viewport instead of wrapping at a reasonable width.
    await page.addStyleTag({
      content:
        ':root { --dsg-cell-expanded-max-width: initial; --dsg-cell-expanded-max-height: initial; }',
    })
    const configuredValue = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue(
        '--dsg-cell-expanded-max-width',
      ),
    )
    expect(configuredValue).toBe('')

    const firstNameCell = getFirstNameCell(page)
    await startEditingWith(firstNameCell, Array(80).fill('word').join(' '))
    await expect(page.locator('.dsg-input:focus')).toBeVisible()
    await expect
      .poll(async () => (await activeInputRect(page)).height)
      .toBeGreaterThan(40)

    const rect = await activeInputRect(page)
    expect(rect.width).toBeLessThanOrEqual(481)
  })

  test('scrolling the grid while editing keeps the expanded popup aligned with the cell', async ({
    page,
  }) => {
    const container = page.locator('.dsg-container')
    const firstNameCell = getFirstNameCell(page)
    await startEditingWith(firstNameCell, Array(20).fill('word').join(' '))
    await expect(page.locator('.dsg-input:focus')).toBeVisible()

    const before = await activeInputRect(page)

    await container.evaluate(el => {
      el.scrollLeft = 30
    })
    // Position tracking runs on a requestAnimationFrame loop; give it a
    // couple of frames to catch up.
    await page.evaluate(
      () =>
        new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))),
    )

    const after = await activeInputRect(page)
    expect(before.x - after.x).toBeCloseTo(30, 0)
  })

  test('clicking on the overflowing part of the expanded input keeps it in edit mode', async ({
    page,
  }) => {
    const supported = await page.evaluate(() =>
      CSS.supports('field-sizing', 'content'),
    )
    test.skip(!supported, 'field-sizing not supported in this browser')

    const firstNameCell = getFirstNameCell(page)
    const columnBox = (await firstNameCell.boundingBox())!

    await startEditingWith(firstNameCell, LONG_VALUE)
    await expect(page.locator('.dsg-input:focus')).toBeVisible()

    const inputBox = await activeInputRect(page)
    expect(inputBox.width).toBeGreaterThan(columnBox.width)

    // Click near the right edge of the now-wider input, past where the
    // original column ended — this lands geometrically over the next
    // column, but should still be treated as a click on the active input.
    await page.mouse.click(
      inputBox.x + inputBox.width - 5,
      inputBox.y + inputBox.height / 2,
    )

    await expect(page.locator('.dsg-input:focus')).toBeVisible()
    const activeValue = await page.evaluate(
      () => (document.activeElement as HTMLTextAreaElement).value,
    )
    expect(activeValue).toBe(LONG_VALUE)
  })

  test('clicking away from an expanded cell commits the value', async ({
    page,
  }) => {
    const firstNameCell = getFirstNameCell(page)
    await startEditingWith(firstNameCell, LONG_VALUE)
    await expect(page.locator('.dsg-input:focus')).toBeVisible()

    // A cell in a different row so it can't possibly sit under the
    // expanded popup's visual footprint — clicking a cell the popup
    // visually covers is expected to keep editing (same as clicking the
    // input itself), which is exercised separately above.
    const otherCell = dataRows(page).nth(1).locator('.dsg-cell').nth(3) // Last name, row 2
    await otherCell.click()
    await expect(page.locator('.dsg-input:focus')).not.toBeVisible()

    const committedValue = await firstNameCell.locator('textarea').inputValue()
    expect(committedValue).toBe(LONG_VALUE)
  })

  test('Enter confirms the value instead of inserting a newline', async ({
    page,
  }) => {
    const firstNameCell = getFirstNameCell(page)
    await startEditingWith(firstNameCell, 'foo')
    await page.keyboard.press('Enter')

    // Editing ended (moved to the next row) rather than inserting a \n.
    await expect(page.locator('.dsg-input:focus')).not.toBeVisible()

    const value = await firstNameCell.locator('textarea').inputValue()
    expect(value).toBe('foo')
  })

  test('Shift+Enter inserts a newline and stays in edit mode instead of inserting a row', async ({
    page,
  }) => {
    const rowCountBefore = await dataRows(page).count()

    const firstNameCell = getFirstNameCell(page)
    await startEditingWith(firstNameCell, 'line1')
    await page.keyboard.press('Shift+Enter')
    await page.keyboard.type('line2')

    await expect(page.locator('.dsg-input:focus')).toBeVisible()
    const value = await page.evaluate(
      () => (document.activeElement as HTMLTextAreaElement).value,
    )
    expect(value).toBe('line1\nline2')

    // Shift+Enter's other existing meaning (insert a row below) shouldn't
    // also fire while editing.
    expect(await dataRows(page).count()).toBe(rowCountBefore)

    await page.keyboard.press('Enter')
    await expect(page.locator('.dsg-input:focus')).not.toBeVisible()
    expect(await firstNameCell.locator('textarea').inputValue()).toBe(
      'line1\nline2',
    )
  })

  test('pasting a multi-line value preserves the newline instead of collapsing it to a space', async ({
    page,
  }) => {
    // e.g. a multi-line cell copied from Excel/Google Sheets, whose HTML
    // clipboard format represents the line break as <br> rather than \n.
    const firstNameCell = getFirstNameCell(page)
    await firstNameCell.click()

    await page.evaluate(() => {
      const dt = new DataTransfer()
      dt.setData('text/html', '<table><tr><td>line1<br>line2</td></tr></table>')
      dt.setData('text/plain', 'line1\nline2')
      document.dispatchEvent(
        new ClipboardEvent('paste', {
          clipboardData: dt,
          bubbles: true,
          cancelable: true,
        }),
      )
    })

    // Paste doesn't enter edit mode — the cell stays merely active, so its
    // textarea is still portaled rather than back inside the cell (see the
    // "clicking away" test above). Click elsewhere to settle it back to
    // resting before reading its value through the normal DOM position.
    await dataRows(page).first().locator('.dsg-cell').nth(3).click()

    expect(await firstNameCell.locator('textarea').inputValue()).toBe(
      'line1\nline2',
    )
  })

  test('pasting a multi-cell block containing a multi-line cell keeps every cell aligned', async ({
    page,
  }) => {
    // A 2x2 paste (First name, Last name) x 2 rows, where some cells are
    // multi-line and some are plain single-line — the embedded newlines
    // must not be mistaken for row breaks, and must not throw off which
    // value lands in which cell.
    const firstNameCell = getFirstNameCell(page)
    await firstNameCell.click()

    await page.evaluate(() => {
      const dt = new DataTransfer()
      dt.setData(
        'text/html',
        '<table>' +
          '<tr><td>Alice</td><td>Multi<br>Line</td></tr>' +
          '<tr><td>Bob<br>Smith</td><td>Jones</td></tr>' +
          '</table>',
      )
      dt.setData('text/plain', 'Alice\tMulti\nLine\nBob\nSmith\tJones')
      document.dispatchEvent(
        new ClipboardEvent('paste', {
          clipboardData: dt,
          bubbles: true,
          cancelable: true,
        }),
      )
    })

    // Paste doesn't enter edit mode, so the pasted cells' textareas stay
    // portaled unless the cell is deactivated first — click elsewhere to
    // settle everything back to resting before reading via cell locators.
    await dataRows(page).nth(2).locator('.dsg-cell').nth(2).click()

    const lastNameCell = (rowIndex: number) =>
      dataRows(page).nth(rowIndex).locator('.dsg-cell').nth(3)

    expect(
      await getFirstNameCell(page, 0).locator('textarea').inputValue(),
    ).toBe('Alice')
    expect(await lastNameCell(0).locator('textarea').inputValue()).toBe(
      'Multi\nLine',
    )
    expect(
      await getFirstNameCell(page, 1).locator('textarea').inputValue(),
    ).toBe('Bob\nSmith')
    expect(await lastNameCell(1).locator('textarea').inputValue()).toBe('Jones')
  })

  test.describe('wrapping (grow wide, then wrap and grow tall)', () => {
    test('a long value grows wide up to the max-width cap, then wraps and grows taller', async ({
      page,
    }) => {
      const supported = await page.evaluate(() =>
        CSS.supports('field-sizing', 'content'),
      )
      test.skip(!supported, 'field-sizing not supported in this browser')

      const firstNameCell = getFirstNameCell(page)
      const cellHeight = (await firstNameCell.boundingBox())!.height

      // Long enough to force wrapping onto multiple lines even once capped
      await startEditingWith(firstNameCell, Array(40).fill('word').join(' '))

      const rect = await activeInputRect(page)
      const maxWidth = await page.evaluate(() =>
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--dsg-cell-expanded-max-width',
          ),
        ),
      )

      expect(rect.width).toBeCloseTo(maxWidth, 0)
      expect(rect.height).toBeGreaterThan(cellHeight)
    })

    test('an extremely long value is capped at max-height and scrolls internally', async ({
      page,
    }) => {
      const supported = await page.evaluate(() =>
        CSS.supports('field-sizing', 'content'),
      )
      test.skip(!supported, 'field-sizing not supported in this browser')

      const firstNameCell = getFirstNameCell(page)
      await startEditingWith(firstNameCell, Array(120).fill('word').join(' '))

      const maxHeight = await page.evaluate(() =>
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--dsg-cell-expanded-max-height',
          ),
        ),
      )
      const rect = await activeInputRect(page)
      expect(rect.height).toBeLessThanOrEqual(maxHeight + 1)

      const overflowY = await page.evaluate(
        () => getComputedStyle(document.activeElement as Element).overflowY,
      )
      expect(overflowY).toBe('auto')
    })
  })
})
