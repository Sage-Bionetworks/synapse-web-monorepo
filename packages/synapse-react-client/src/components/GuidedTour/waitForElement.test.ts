import { waitForElement } from './waitForElement'

describe('waitForElement', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('resolves immediately for an element already in the DOM', async () => {
    const element = document.createElement('div')
    element.setAttribute('data-tour', 'existing')
    document.body.appendChild(element)

    await expect(waitForElement('[data-tour="existing"]')).resolves.toBe(
      element,
    )
  })

  it('resolves when the element is added later', async () => {
    const promise = waitForElement('[data-tour="late"]')

    const element = document.createElement('div')
    element.setAttribute('data-tour', 'late')
    document.body.appendChild(element)

    await expect(promise).resolves.toBe(element)
  })

  it('resolves with null when the element never appears', async () => {
    await expect(waitForElement('[data-tour="missing"]', 50)).resolves.toBe(
      null,
    )
  })
})
