import { runDomPurifyTests, runXssTests } from './SanitizeHtmlUtils.test-utils'

describe('SanitizeHTMLUtils - CSR', () => {
  runDomPurifyTests()
  runXssTests()
})
