// @vitest-environment node

import { runDomPurifyTests, runXssTests } from './SanitizeHtmlUtils.test-utils'

describe('SanitizeHTMLUtils - SSR', () => {
  runDomPurifyTests()
  runXssTests()
})
