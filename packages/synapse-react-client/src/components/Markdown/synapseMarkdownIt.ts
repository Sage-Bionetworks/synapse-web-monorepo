import markdownitContainer from '@sage-bionetworks/markdown-it-container'
import MarkdownIt from 'markdown-it'
import markdownitBr from 'markdown-it-br'
import markdownitCentertext from 'markdown-it-center-text'
import markdownitInlineComments from 'markdown-it-inline-comments'
import markdownitStrikethroughAlt from 'markdown-it-strikethrough-alt'
import markdownitSub from 'markdown-it-sub-alt'
import markdownitSup from 'markdown-it-sup-alt'
import * as markdownitSynapse from 'markdown-it-synapse'
import markdownitSynapsePlugin from 'markdown-it-synapse'
import markdownitSynapseHeading from 'markdown-it-synapse-heading'
import markdownitMath from 'markdown-it-synapse-math'
import markdownitSynapseTable from 'markdown-it-synapse-table'

/**
 * markdown-it configured with the Synapse markdown dialect (widgets, centered
 * text, `#!` headings, `{row}`/`{column}` containers, Synapse tables, math, etc.).
 */
export const synapseMarkdownIt = MarkdownIt({ html: true })
markdownitSynapse.init_markdown_it(
  synapseMarkdownIt,
  markdownitSub,
  markdownitSup,
  markdownitCentertext,
  markdownitSynapseHeading,
  markdownitSynapseTable,
  markdownitStrikethroughAlt,
  markdownitContainer,
  markdownitInlineComments,
  markdownitBr,
)
const mathSuffix = ''
synapseMarkdownIt
  .use(markdownitSynapsePlugin, mathSuffix, 'https://synapse.org')
  .use(markdownitMath, mathSuffix)
