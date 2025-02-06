// Copied from https://github.com/facebook/jest/issues/4156#issuecomment-757376195
import { DefaultReporter, TestResult, Config } from '@jest/reporters'

class Reporter extends DefaultReporter {
  printTestFileHeader(
    _testPath: string,
    _config: Config.ProjectConfig,
    result: TestResult,
  ) {
    const console = result.console

    if (result.numFailingTests === 0 && !result.testExecError) {
      result.console = undefined
    }

    super.printTestFileHeader(_testPath, _config, result)

    result.console = console
  }
}

module.exports = Reporter
