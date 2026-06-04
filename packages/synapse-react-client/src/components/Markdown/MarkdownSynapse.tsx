import {
  addIdsToReferenceWidgets,
  addIdsToTocWidgets,
  decodeXml,
  handleLinkClicks,
  processMath,
  fixInvalidNesting,
} from '@/components/Markdown/MarkdownUtils'
import {
  useGetWikiPage,
  useGetWikiAttachments,
} from '@/synapse-queries/wiki/useWiki'
import { sanitize } from '@/utils/functions/SanitizeHtmlUtils'
import { Link, Typography } from '@mui/material'
import markdownitContainer from '@sage-bionetworks/markdown-it-container'
import { ObjectType } from '@sage-bionetworks/synapse-types'
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
import { ComponentProps, ElementType, useEffect, useMemo, useRef } from 'react'
import {
  htmlToDOM,
  domToReact,
  attributesToProps,
  Element as DomElement,
  type DOMNode,
  type HTMLReactParserOptions,
} from 'html-react-parser'
import { ErrorBanner } from '../error/ErrorBanner'
import { SkeletonTable } from '../Skeleton'
import MarkdownWidget from './MarkdownWidget'
import { SynapseWikiContextProvider } from './SynapseWikiContext'
import Bookmarks from './widget/Bookmarks'

export const NO_WIKI_CONTENT = 'There is no content.'

export type MarkdownSynapseProps = {
  ownerId?: string
  wikiId?: string
  markdown?: string
  renderInline?: boolean
  objectType?: ObjectType
  loadingSkeletonRowCount?: number
  onMarkdownProcessingDone?: (htmlContent: string | null | undefined) => void
  showPlaceholderIfNoWikiContent?: boolean
}

// Configure markdown-it
const md = MarkdownIt({ html: true })
markdownitSynapse.init_markdown_it(
  md,
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
md.use(markdownitSynapsePlugin, mathSuffix, 'https://synapse.org').use(
  markdownitMath,
  mathSuffix,
)

/**
 * Process all the corresponding bookmark tags of the references made throughout the page and renders footnotes, if any exist.
 */
function AddBookmarks(props: { renderInline: boolean; markdown: string }) {
  const { markdown, renderInline } = props
  const footnotesHtml = useMemo(() => {
    markdownitSynapse.resetFootnotes()
    createHTML(renderInline, markdown)
    return createHTML(renderInline, markdownitSynapse.footnotes()).__html
  }, [markdown, renderInline])

  if (footnotesHtml.length > 0) {
    return (
      <div>
        <Bookmarks footnotes={footnotesHtml} />
      </div>
    )
  }
  return null
}

/**
 * Given input text, generate markdown object to be passed onto inner html of some container.
 * @param {String} markdown The text being written in plain markdown
 * @returns {Object} Dictionary to be passed into dangerouslySetInnerHTML with markdown text
 */
function createHTML(renderInline: boolean, markdown?: string) {
  if (!markdown) {
    return { __html: '' }
  }
  // Note - renderInline parses out any block level elements contained in the markdown
  const initText = renderInline
    ? md.renderInline(markdown)
    : md.render(markdown)
  const cleanText = sanitize(initText)
  return { __html: cleanText }
}

/**
 * Given widgetMap renders it in a React component (or originalMarkup in special cases.)
 *
 * @param {string} widgetParams The params of the widget to render
 * @param {string} originalMarkup The original markup text, this is a special case for widgets that
 * are html specific.
 * @returns the rendered markdown widget
 */
function MapParamsToMarkdownWidget(props: {
  widgetParams: string
  originalMarkup: string
}) {
  const { widgetParams, originalMarkup } = props
  // General workflow -
  //   1. Capture widget parameters
  //   2. Transform any widget xml parameters to standard text
  //   3. Split those parameters into a map
  //   4. Render that widget based on its parameters

  // steps 1,2
  const decodedWidgetParams = decodeXml(widgetParams)

  // decodedWidgetParams look like {<widget>?param1=xxx&param2=yyy}
  const questionIndex = decodedWidgetParams.indexOf('?')
  if (questionIndex === -1) {
    // e.g. toc is passed, there are no params
    return (
      <MarkdownWidget
        key={JSON.stringify(decodedWidgetParams)}
        widgetType={decodedWidgetParams as any}
        widgetParamsMapped={{}}
        originalMarkup={originalMarkup}
      />
    )
  }
  const widgetType = decodedWidgetParams.substring(0, questionIndex)
  const widgetParamsMapped: Record<string, string> = {}
  // map out params and their values
  decodedWidgetParams
    .substring(questionIndex + 1)
    .split('&')
    .forEach(keyPair => {
      let [key, value] = keyPair.split('=')
      value = decodeURIComponent(value)
      widgetParamsMapped[key] = value
    })
  return (
    <MarkdownWidget
      key={JSON.stringify(decodedWidgetParams)}
      widgetType={widgetType as any}
      widgetParamsMapped={widgetParamsMapped}
      originalMarkup={originalMarkup}
    />
  )
}

/**
 * Builds the `html-react-parser` options used to convert the parsed markdown
 * HTML tree into React elements.
 *
 * The `replace` callback handles the Synapse-specific cases (widgets, and the
 * elements we render via MUI `Typography`/`Link`); every other element falls
 * through to html-react-parser's default conversion, which maps attributes
 * (e.g. `class` -> `className`, inline `style` string -> object), handles void
 * elements, and assigns React keys to sibling elements.
 *
 * @param markdown The original (post-processing) markup string, forwarded to
 * widgets that need the full markup (e.g. table of contents).
 */
function getParserOptions(markdown: string): HTMLReactParserOptions {
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if (!(domNode instanceof DomElement)) {
        // Text/comment nodes use default handling.
        return
      }

      const widgetParams = domNode.attribs['data-widgetparams']
      if (widgetParams) {
        // Synapse widget
        return (
          <MapParamsToMarkdownWidget
            widgetParams={widgetParams}
            originalMarkup={markdown}
          />
        )
      }

      const tag = domNode.name.toLowerCase()
      // attributesToProps remaps `class` -> `className`, parses the inline
      // `style` string into an object, etc.
      const props = attributesToProps(domNode.attribs) as ComponentProps<
        typeof Typography
      >
      const children = domToReact(domNode.children as DOMNode[], options)

      switch (tag) {
        case 'p':
        case 'span':
        case 'ol':
        case 'ul':
          return (
            <Typography
              variant={'body1'}
              {...props}
              component={tag as ElementType}
            >
              {children}
            </Typography>
          )
        case 'h1':
          return (
            <Typography
              variant={'headline1'}
              {...props}
              component={tag as ElementType}
            >
              {children}
            </Typography>
          )
        case 'h2':
          return (
            <Typography
              variant={'headline2'}
              {...props}
              component={tag as ElementType}
            >
              {children}
            </Typography>
          )
        case 'h3':
          return (
            <Typography
              variant={'headline3'}
              {...props}
              component={tag as ElementType}
            >
              {children}
            </Typography>
          )
        case 'a':
          return (
            <Link {...props} component={tag as ElementType}>
              {children}
            </Link>
          )
        default:
          // Let html-react-parser render the element with default handling.
          return
      }
    },
  }
  return options
}

/**
 * Component that process all the markdown and transforms it to the appropriate Synapse widgets.
 *
 * @returns JSX of the markdown into widgets
 */
function RenderMarkdown(props: {
  renderInline: boolean
  markdown: string
  isLoading: boolean
  showPlaceholderIfNoWikiContent: boolean
}) {
  const { renderInline, markdown, isLoading, showPlaceholderIfNoWikiContent } =
    props

  const markup = useMemo(() => {
    // create initial markup
    let markup = createHTML(renderInline, markdown).__html
    // process reference widgets
    markup = addIdsToReferenceWidgets(markup)
    // process table of contents widgets
    markup = addIdsToTocWidgets(markup)

    return markup
  }, [markdown, renderInline])

  // Parse the markup into React elements. This uses html-react-parser, which
  // is isomorphic (native DOMParser in the browser, htmlparser2 during
  // SSR/SSG prerender) and produces `domhandler` nodes in both environments,
  // so there is no dependency on `DOMParser`/`Node`/`HTMLElement` globals.
  const content = useMemo(() => {
    if (markup.length > 0) {
      const nodes = htmlToDOM(markup)
      // Fix invalid HTML nesting (e.g. block elements inside <p>) before
      // converting to React.
      nodes.forEach(node => fixInvalidNesting(node))
      return domToReact(nodes, getParserOptions(markup))
    }
    return null
  }, [markup])

  if (content) {
    return <>{content}</>
  }

  if (!isLoading && showPlaceholderIfNoWikiContent && markup === '') {
    return (
      <Typography variant="body1Italic" sx={{ mb: 1 }}>
        {NO_WIKI_CONTENT}
      </Typography>
    )
  }

  return
}

/**
 * Basic Markdown functionality for Synapse, supporting Images/Plots/References/Bookmarks/buttonlinks
 *
 * @class Markdown
 * @extends {Component}
 */
function MarkdownSynapse(props: MarkdownSynapseProps) {
  const {
    ownerId,
    wikiId,
    objectType = ObjectType.ENTITY,
    markdown: markdownFromProps,
    onMarkdownProcessingDone,
    renderInline = false,
    loadingSkeletonRowCount,
    showPlaceholderIfNoWikiContent = false,
  } = props

  const markupRef = useRef<HTMLDivElement>(null)

  const {
    data: wikiPage,
    isLoading: isLoadingWikiPage,
    error: getWikiPageError,
  } = useGetWikiPage(
    {
      ownerObjectId: ownerId!,
      wikiPageId: wikiId!,
      ownerObjectType: objectType,
    },
    { enabled: Boolean(ownerId) },
  )

  const {
    data: wikiAttachments,
    isLoading: isLoadingWikiAttachments,
    error: getWikiAttachmentsError,
  } = useGetWikiAttachments(
    {
      ownerObjectId: ownerId!,
      wikiPageId: wikiId!,
      ownerObjectType: objectType,
    },
    {
      enabled: Boolean(ownerId),
    },
  )

  const isLoading = isLoadingWikiPage || isLoadingWikiAttachments
  const error = getWikiPageError || getWikiAttachmentsError

  /* Add click handler to the markdown area to handle clicking refs, ToC, etc. */
  useEffect(() => {
    const currentMarkupNode = markupRef.current
    if (currentMarkupNode) {
      currentMarkupNode.addEventListener('click', handleLinkClicks)
    }
    return () => {
      if (currentMarkupNode) {
        currentMarkupNode.removeEventListener('click', handleLinkClicks)
      }
    }
  }, [])

  const markdown = markdownFromProps || wikiPage?.markdown || ''

  /* When the markdown changes, call the `onMarkdownProcessingDone` callback */
  useEffect(() => {
    if (markdown && onMarkdownProcessingDone) {
      onMarkdownProcessingDone(createHTML(renderInline, markdown).__html)
    }
  }, [wikiPage, onMarkdownProcessingDone, renderInline])

  /* When the markdown changes, re-run the math processor */
  useEffect(() => {
    if (markdown) {
      processMath(markupRef)
    }
  }, [markdown])

  const loader = loadingSkeletonRowCount ? (
    <SkeletonTable numCols={1} numRows={loadingSkeletonRowCount} />
  ) : (
    <span className="spinner" />
  )

  if (error) {
    return <ErrorBanner error={error} />
  }
  const content = (
    <SynapseWikiContextProvider
      wikiContext={{
        ownerId: props.ownerId,
        wikiId: props.wikiId,
        wikiPage: wikiPage,
        fileHandles: wikiAttachments,
      }}
    >
      {isLoading && loader}
      {(markdown || showPlaceholderIfNoWikiContent) && (
        <RenderMarkdown
          markdown={markdown}
          renderInline={renderInline}
          isLoading={isLoading}
          showPlaceholderIfNoWikiContent={showPlaceholderIfNoWikiContent}
        />
      )}
      {markdown && (
        <AddBookmarks renderInline={renderInline} markdown={markdown} />
      )}
    </SynapseWikiContextProvider>
  )
  if (renderInline) {
    return (
      <span
        data-testid="markdown"
        className="markdown markdown-inline"
        ref={markupRef}
      >
        {content}
      </span>
    )
  }
  return (
    <div data-testid="markdown" className="markdown" ref={markupRef}>
      {content}
    </div>
  )
}

export { MarkdownSynapse, MarkdownSynapse as Markdown }

export default MarkdownSynapse
