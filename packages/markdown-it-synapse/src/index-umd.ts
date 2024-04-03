import markdownitSynapse from './index'
import * as markdownitSynapseExports from './index'

Object.assign(markdownitSynapse, markdownitSynapseExports)

// must use CJS `module.exports` for esbuild to make the function the default export
// see https://github.com/evanw/esbuild/issues/1182#issuecomment-825352324
module.exports = markdownitSynapse
