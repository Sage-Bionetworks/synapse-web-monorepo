import { Locator, Page, expect, test } from '@playwright/test'
import { defaultExpectTimeout } from '../playwright.config'
import exploreConfig from './configs/exploreConfig'
import { dismissBanners } from './helpers/banners'
import { getPortal } from './helpers/portalInfo'
import { tagTestTitle } from './helpers/setup'

const portalExploreConfig = exploreConfig[getPortal()]

const goToExploreTab = async (page: Page, exploreTab: string) => {
  await test.step(`go to Explore/${exploreTab}`, async () => {
    await test.step('navigate to explore page', async () => {
      await page.goto(`/Explore/${exploreTab}`)
    })

    await test.step('explore page has loaded', async () => {
      await expect(
        page.getByRole('main').getByText('Explore', { exact: true }),
      ).toBeVisible()
      await expect(page.getByLabel('Explore Sections')).toBeVisible()
      await expect(page.getByRole('tab', { name: exploreTab })).toBeVisible()
    })

    await dismissBanners(page)
  })
}

const expectCards = async (page: Page) => {
  await test.step('expect cards', async () => {
    const { cards, nCards } = await test.step('expect cards list', async () => {
      const cards = page.locator('.SRC-portalCard')
      await expect.poll(() => cards.count()).toBeGreaterThanOrEqual(1)
      const nCards = await cards.count()
      return { cards, nCards }
    })

    for (let i = 0; i < nCards; i++) {
      await test.step(`confirm card ${i}`, async () => {
        const card = cards.nth(i)
        const mainCard = card.locator('.SRC-portalCardMain')
        await expect(mainCard, 'card has main div').toBeVisible()

        const cardContent = mainCard.locator('.SRC-cardContent')
        await expect(cardContent, 'main card has card content').toBeVisible()

        const cardType = cardContent.locator('.SRC-type')
        if (await cardType.isVisible()) {
          expect(await cardType.textContent()).not.toBeNull()
        }
      })
    }
  })
}

const expectButtons = async (locator: Locator, buttonNames: string[]) => {
  for (const buttonName of buttonNames) {
    await expect(
      locator.getByRole('button', { name: buttonName }),
    ).toBeVisible()
  }
}

const expectTopLevelControls = async (
  page: Page,
  exploreTab: string,
  isTableTab: boolean,
) => {
  await test.step('expect top level controls', async () => {
    const header = page.getByTestId('TopLevelControls')

    await test.step('confirm heading', async () => {
      let exploreTabHeading = exploreTab
      if (
        (getPortal() === 'arkportal' && exploreTab === 'All Data') ||
        (getPortal() === 'elportal' && exploreTab === 'Data By Files')
      ) {
        exploreTabHeading = 'Data'
      } else if (
        getPortal() === 'elportal' &&
        exploreTab === 'Data by Participants'
      ) {
        exploreTabHeading = 'Participants'
      }
      await expect(header.getByRole('heading')).toContainText(exploreTabHeading)
    })

    await test.step('confirm header buttons', async () => {
      const buttonNames = [
        'Hide filters',
        'Show / Hide Search Bar',
        'Copy this search to the clipboard',
        'Show / Hide Visualizations',
        // 'Download Options', - hidden in some portal tabs
      ]
      if (isTableTab) buttonNames.push('Show/Hide Columns')
      await expectButtons(header, buttonNames)
    })
  })
}

const getFacetFilterControlsPanel = (page: Page) => {
  return page.locator('.FacetFilterControls')
}

const getFacetFilterControls = (page: Page) => {
  return getFacetFilterControlsPanel(page).locator(
    '.FacetFilterControls__facet',
  )
}

const getAvailableFacetsDiv = (page: Page) => {
  return getFacetFilterControlsPanel(page)
    .locator('> div')
    .filter({ hasText: 'Available Facets' })
}

const countVisibleElements = async (allCells: Locator) => {
  const count = await allCells.count()
  let visibleCount = 0
  for (let i = 0; i < count; i++) {
    const cell = allCells.nth(i)
    if (await cell.isVisible()) {
      visibleCount++
    }
  }
  return visibleCount
}

const toggleChartVisibilityAndVerifyCount = async (page: Page) => {
  const chartsPanel = page.locator('.PlotsContainer')

  const allChartCells = chartsPanel.getByRole('figure')
  const allChartsCount = await allChartCells.count()

  const visibleChartCount = await countVisibleElements(allChartCells)
  let firstVisibleindex = -1
  for (let i = 0; i < allChartsCount; i++) {
    const chart = allChartCells.nth(i)
    if (await chart.isVisible()) {
      firstVisibleindex = i
      break
    }
  }
  const chartToTestIndex = firstVisibleindex
  const initialCount = visibleChartCount

  await test.step('confirm chart visibility and count', async () => {
    const chartCell = allChartCells.nth(chartToTestIndex)
    const chartToolbar = chartCell.getByRole('toolbar')
    await chartToolbar
      .getByRole('button', { name: 'Hide graph under Show More' })
      .click()

    const newCount = await countVisibleElements(allChartCells)
    expect(newCount).toBe(initialCount - 1)
  })
}

const toggleAndVerifyVisibility = async (
  page: Page,
  showHideButton: Locator,
  chartsPanel: Locator,
  shouldBeVisible: boolean,
) => {
  await showHideButton.click()
  if (shouldBeVisible) {
    await expect(chartsPanel).toBeVisible()
  } else {
    await expect(chartsPanel).toBeHidden()
  }
}

const toggleShowHideVisualizationsAndVerify = async (
  page: Page,
  shouldBeVisible: boolean,
) => {
  const viewAllChartsButton = page.getByRole('button', {
    name: 'View All Charts',
  })
  expect(viewAllChartsButton).not.toBeNull()

  await test.step('show all charts', async () => {
    await viewAllChartsButton.click()
  })

  const showHideButton = page.getByRole('button', {
    name: 'Show / Hide Visualizations',
  })
  expect(showHideButton).not.toBeNull()

  const chartsPanel = page.locator('.PlotsContainer')

  const chartCells = chartsPanel.getByRole('figure')
  const initialCount = await chartCells.count()

  await test.step('toggle visualization and count', async () => {
    await toggleAndVerifyVisibility(
      page,
      showHideButton,
      chartsPanel,
      shouldBeVisible,
    )
    shouldBeVisible = !shouldBeVisible
    await toggleAndVerifyVisibility(
      page,
      showHideButton,
      chartsPanel,
      shouldBeVisible,
    )
    const newCount = await page.getByRole('figure').count()
    expect(newCount).toBe(initialCount)
  })
}

const expectFacetControls = async (page: Page) => {
  await test.step('expect facet controls', async () => {
    const facetControls = getFacetFilterControls(page)

    await test.step('wait for facets to finish loading', async () => {
      await expect(
        facetControls.filter({ has: page.locator('.MuiSkeleton-root') }),
      ).toHaveCount(0)
    })

    await test.step('confirm facet controls', async () => {
      await expect.poll(() => facetControls.count()).toBeGreaterThanOrEqual(1)

      const nFacetControls = await facetControls.count()
      for (let i = 0; i < Math.min(nFacetControls, 3); i++) {
        await test.step(`confirm facet control ${i}`, async () => {
          const facetControl = facetControls.nth(i)
          const facetControlHeader = facetControl.locator('.FacetFilterHeader')
          await expect(facetControlHeader).toBeVisible()
          expect(await facetControlHeader.textContent()).not.toBeNull()

          const checkboxes = facetControl.getByRole('checkbox')
          const radioButtons = facetControl
            .getByRole('radiogroup')
            .getByRole('radio')
          await expect
            .poll(() => checkboxes.or(radioButtons).count())
            .toBeGreaterThanOrEqual(1)
        })
      }
    })

    await test.step('confirm available facets control', async () => {
      const availableFacets = getAvailableFacetsDiv(page)
      await expect(availableFacets).toBeVisible()
      await expect
        .poll(() => availableFacets.getByRole('button').count())
        .toBeGreaterThanOrEqual(1)
    })
  })
}

const expectFacetCharts = async (page: Page) => {
  await test.step('confirm facet charts', async () => {
    const chartsPanel = page.locator('.PlotsContainer')
    const facetPlotCells = chartsPanel.locator('.FacetNavPanel:visible')
    const facetChartCells = await facetPlotCells.count()
    expect(facetChartCells).toBeGreaterThanOrEqual(1)
    expect(facetChartCells).toBeLessThanOrEqual(2)

    const availableFacetNames =
      await test.step('get available facets', async () => {
        const availableFacetButtons =
          getAvailableFacetsDiv(page).getByRole('button')
        const nAvailableFacets = await availableFacetButtons.count()
        const availableFacetNames: string[] = []
        for (let i = 0; i < nAvailableFacets; i++) {
          const buttonText = await availableFacetButtons.nth(i).textContent()
          buttonText && availableFacetNames.push(buttonText)
        }
        return availableFacetNames
      })

    for (let i = 0; i < facetChartCells; i++) {
      await test.step(`confirm chart ${i}`, async () => {
        const chartCell = facetPlotCells.nth(i)
        await expect(chartCell).toBeVisible()
        await test.step('confirm chart title', async () => {
          const chartTitle = chartCell.locator('.FacetNavPanel__title')
          const chartTitleText = await chartTitle.textContent()
          expect(availableFacetNames).toContain(chartTitleText)
          await expectButtons(chartTitle, [
            'Filter by specific facet',
            'Expand to large graph',
            'Hide graph under Show More',
          ])
        })

        await test.step('confirm chart body', async () => {
          const chartBody = chartCell.locator('.FacetNavPanel__body')
          await expect(chartBody.locator('.js-plotly-plot')).toBeVisible()
          await expect(
            chartBody.locator('.FacetNavPanel__body__legend'),
          ).toBeVisible()
        })
      })
    }

    await test.step('confirm view all charts button', async () => {
      const button = chartsPanel.getByRole('button', {
        name: 'View All Charts',
      })

      const nFacetControlLabels = await getFacetFilterControls(page)
        .locator('.FacetFilterHeader__label')
        .count()
      if (nFacetControlLabels <= 2) {
        await expect(button).not.toBeVisible()
      }
      if (await button.isVisible()) {
        expect(nFacetControlLabels).toBeGreaterThan(2)
      }
    })
  })
}

const expectCharts = async (
  page: Page,
  exploreTab: string,
  isTableTab: boolean,
) => {
  await test.step('confirm charts', async () => {
    await expectTopLevelControls(page, exploreTab, isTableTab)
    await expectFacetControls(page)
    await expectFacetCharts(page)
  })
}

const expectSynapseProfileHref = (href: string) => {
  expect(href).toMatch(/^https:\/\/www\.synapse\.org\/#!Profile:\d{6,}$/)
}

const expectPeopleCards = async (page: Page) => {
  await test.step('confirm people cards', async () => {
    const cards = await test.step('expect people card list', async () => {
      const cards = page.locator('.SRC-userCard')
      await expect.poll(() => cards.count()).toBeGreaterThanOrEqual(1)
      return cards
    })

    await test.step('expect people cards have subcomponents', async () => {
      const nCards = await cards.count()
      for (let i = 0; i < nCards; i++) {
        await test.step(`confirm card ${i}`, async () => {
          const card = cards.nth(i)

          const isSynapseUser = await card
            .filter({ has: cards.getByText('synapse') })
            .isVisible()

          if (isSynapseUser) {
            await test.step('confirm profile pic link', async () => {
              const profilePicLink = await card
                .locator('> a')
                .getAttribute('href')
              expectSynapseProfileHref(profilePicLink || '')
            })
          }

          await test.step('confirm card content', async () => {
            const cardContent = card.locator('.SRC-cardContent')
            await expect(cardContent).toBeVisible()

            const userCardName = cardContent.locator('.SRC-userCardName')
            await expect(userCardName).toBeVisible()
            expect(await userCardName.textContent()).not.toBeNull()

            if (isSynapseUser) {
              const userCardNameLink = await userCardName
                .getByRole('link')
                .getAttribute('href')
              expectSynapseProfileHref(userCardNameLink || '')

              const emailText = await cardContent
                .locator('.SRC-emailText')
                .locator('a')
                .textContent()
              expect(emailText).toContain('@synapse.org')
            }
          })
        })
      }
    })
  })
}

const expectTable = async (page: Page, exploreTab: string) => {
  await test.step('confirm table', async () => {
    await expectTopLevelControls(page, exploreTab, true)

    await test.step('table has loaded', async () => {
      const progressBar = page.getByRole('progressbar').locator(':visible')
      await expect(progressBar).toHaveCount(0, {
        timeout: defaultExpectTimeout * 3,
      })
    })

    await expectFacetControls(page)

    await test.step('expect table body', async () => {
      const table = page.getByRole('table')
      await expect(table).toBeVisible()

      const rows = table.getByRole('row')
      const totalRowsText = await page.getByText('total rows').textContent()
      const totalRows = Number(totalRowsText?.replace(/\D/g, ''))

      await test.step('confirm total row count in heading', async () => {
        const tabHeading = await page.getByRole('heading').textContent()
        const totalRowsHeading = Number(tabHeading?.replace(/\D/g, '')) || 0
        expect(totalRows).toEqual(totalRowsHeading)
      })

      await test.step('confirm rows shown matches page count or total rows', async () => {
        const rowsPerPage = await page.getByRole('combobox').inputValue()
        await expect(rows).toHaveCount(
          // add one for the header row
          Math.min(Number(rowsPerPage), totalRows) + 1,
        )
      })

      await test.step('confirm column headers include buttons', async () => {
        const colHeaders = rows.first()
        expect(
          await colHeaders.getByLabel('sort').count(),
        ).toBeGreaterThanOrEqual(1)
        expect(
          await colHeaders.getByLabel('Filter by specific facet').count(),
        ).toBeGreaterThanOrEqual(1)
      })
    })
  })
}

test.describe('Explore', () => {
  for (const [exploreTabType, exploreTabs] of Object.entries(
    portalExploreConfig,
  )) {
    const exploreTabTypes = exploreTabType.split('_')

    for (const exploreTab of exploreTabs) {
      test(tagTestTitle(exploreTab), async ({ page }) => {
        await goToExploreTab(page, exploreTab)

        if (exploreTabTypes.includes('cards')) await expectCards(page)
        if (exploreTabTypes.includes('charts')) {
          await expectCharts(
            page,
            exploreTab,
            exploreTabTypes.includes('table'),
          )
          // Toggle visibility of a specific chart and verify count
          await toggleChartVisibilityAndVerifyCount(page)
          // Toggle Show/Hide Visualizations and verify all charts are hidden/visible
          await toggleShowHideVisualizationsAndVerify(page, false)
        }
        if (exploreTabTypes.includes('people')) await expectPeopleCards(page)
        if (exploreTabTypes.includes('table'))
          await expectTable(page, exploreTab)
      })
    }
  }
})
