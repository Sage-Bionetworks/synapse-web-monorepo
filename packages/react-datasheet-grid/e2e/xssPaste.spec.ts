import { test, expect, Page } from '@playwright/test'

// Clipboard HTML is attacker-controlled: a user can be tricked into copying
// crafted markup from a malicious page. It is parsed with DOMParser, which
// produces an inert document, and only textContent is ever read from it — these
// tests hold that boundary in a real browser, which is something JSDOM cannot
// demonstrate (it does not execute scripts at all).
test.describe('pasting hostile HTML', () => {
  const dataRows = (page: Page) => page.locator('.dsg-row:not(.dsg-row-header)')

  // Grid columns: gutter | Active (checkbox, pinned) | First name | Last name | ...
  const firstNameCell = (page: Page, rowIndex = 0) =>
    dataRows(page).nth(rowIndex).locator('.dsg-cell').nth(2)
  const lastNameCell = (page: Page, rowIndex = 0) =>
    dataRows(page).nth(rowIndex).locator('.dsg-cell').nth(3)

  // Payloads below all assign to window.__xss; reading it back is how we detect
  // that any of them managed to run.
  const xssSentinel = (page: Page) =>
    page.evaluate(
      () => (window as unknown as Record<string, unknown>).__xss ?? null,
    )

  const pasteHtml = (page: Page, html: string, plain: string) =>
    page.evaluate(
      ([html, plain]) => {
        const dt = new DataTransfer()
        dt.setData('text/html', html)
        dt.setData('text/plain', plain)
        document.dispatchEvent(
          new ClipboardEvent('paste', {
            clipboardData: dt,
            bubbles: true,
            cancelable: true,
          }),
        )
      },
      [html, plain],
    )

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.dsg-container')).toBeVisible()
    await expect(page.locator('.dsg-row')).toHaveCount(5)
  })

  test('a pasted <script> does not execute and its source does not become the cell value', async ({
    page,
  }) => {
    const pageErrors: string[] = []
    page.on('pageerror', error => pageErrors.push(String(error)))

    await firstNameCell(page).click()
    await pasteHtml(
      page,
      '<table><tr><td><scr' +
        'ipt>window.__xss = "script"</scr' +
        'ipt>Alice</td></tr></table>',
      'ignored',
    )

    // Ample time for a script or a queued microtask to have run.
    await page.waitForTimeout(500)
    expect(await xssSentinel(page)).toBe(null)
    expect(pageErrors).toEqual([])

    // Paste leaves the cell active rather than editing, so its textarea stays
    // portaled — click a different row to settle it back before reading.
    await firstNameCell(page, 2).click()
    expect(await firstNameCell(page).locator('textarea').inputValue()).toBe(
      'Alice',
    )
  })

  test('a pasted <img onerror> handler never fires and no markup reaches the live DOM', async ({
    page,
  }) => {
    await firstNameCell(page).click()
    await pasteHtml(
      page,
      '<table><tr>' +
        '<td><img src="does-not-exist.png" onerror="window.__xss = \'img\'">Bob</td>' +
        '<td onmouseover="window.__xss = \'handler\'">Smith</td>' +
        '</tr></table>',
      'ignored\tignored',
    )

    await page.waitForTimeout(500)
    expect(await xssSentinel(page)).toBe(null)
    expect(
      await page.evaluate(() => document.body.innerHTML.includes('onerror')),
    ).toBe(false)
    expect(
      await page.evaluate(() =>
        document.body.innerHTML.includes('onmouseover'),
      ),
    ).toBe(false)

    // Hovering the cell that carried the handler must not trigger it either.
    await lastNameCell(page).hover()
    expect(await xssSentinel(page)).toBe(null)

    await firstNameCell(page, 2).click()
    expect(await firstNameCell(page).locator('textarea').inputValue()).toBe(
      'Bob',
    )
    expect(await lastNameCell(page).locator('textarea').inputValue()).toBe(
      'Smith',
    )
  })

  test('a pasted <style> block does not become the cell value or affect the page', async ({
    page,
  }) => {
    await firstNameCell(page).click()
    await pasteHtml(
      page,
      '<table><tr><td><sty' +
        'le>.dsg-container{display:none}</sty' +
        'le>Carol</td></tr></table>',
      'ignored',
    )

    await firstNameCell(page, 2).click()
    expect(await firstNameCell(page).locator('textarea').inputValue()).toBe(
      'Carol',
    )
    // The pasted rule would have hidden the grid had it been applied.
    await expect(page.locator('.dsg-container')).toBeVisible()
  })
})
