import {
  addIdsToReferenceWidgets,
  addIdsToTocWidgets,
  decodeXml,
  handleLinkClicks,
  processMath,
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
import { Fragment, JSX, useEffect, useMemo, useRef } from 'react'
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

  if (markup.length > 0) {
    const domParser = new DOMParser()
    const document = domParser.parseFromString(markup, 'text/html')
    return <RecursiveRender element={document.body} markdown={markup} />
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
 * recursiveRender will render react tree from HTML tree
 *
 * @param {Node} element This will be either a text Node or an HTMLElement
 * @param {string} markdown The original markdown, its kept as a special case for the table of contents widget
 * @returns {*}
 */
function RecursiveRender(props: { element: Node; markdown: string }) {
  const { element, markdown } = props
  /*
    Recursively render the html tree created from the markdown, there are a few cases:
    1. element is Node and is text in which case it is simply rendered
    2. element is an HTMLElement and is: a self closing tag, has no children (e.g. <br>), or its a synapse widget and is
    rendered accordingly
    3. element is an HTMLElement and has children so we loop through its childNodes, recurively render those, and then render its own tag
    as the parent of those child nodes. Note - childNodes was specifically chosen over .children because text Nodes
    would not come through .children
  */
  if (element.nodeType === Node.TEXT_NODE) {
    // case 1.
    return <>{element.textContent}</>
  } else if (
    element.nodeType === Node.ELEMENT_NODE &&
    element instanceof HTMLElement
  ) {
    const Tag: keyof JSX.IntrinsicElements | typeof Fragment =
      element.tagName.toLowerCase() === 'body'
        ? Fragment // The component ultimately wraps this content, so if the tag is 'body', we use Fragment to avoid an extra nested element
        : (element.tagName.toLowerCase() as keyof JSX.IntrinsicElements)
    const widgetParams = element.getAttribute('data-widgetparams')
    if (widgetParams) {
      // case 2
      // process widget
      return (
        <MapParamsToMarkdownWidget
          widgetParams={widgetParams}
          originalMarkup={markdown}
        />
      )
    }
    // manually add on props, depending on what comes through the markdown their could
    // be unforseen issues with attributes being misnamed according to what react will respect
    // e.g. class instead of className
    const attributes = element.attributes
    const rawProps: Record<string, string> = {}
    for (let i = 0; i < attributes.length; i++) {
      let name = ''
      let value = ''
      const attribute = attributes.item(i)
      if (attribute) {
        name = attribute.name
        value = attribute.value
      }
      if (name && value) {
        rawProps[name] = value
      }
    }

    const { style: styleString, class: className, ...props } = rawProps
    // Remap class to className
    props.className = className
    if (styleString) {
      // React expects the `style` prop to be an object, not a string, so use
      // the all-caps STYLE to pass the style string as a custom attribute
      props.STYLE = styleString
    }

    if (element.childNodes.length === 0) {
      // case 2
      // e.g. self closing tag like <br/> or <img>
      return <Tag {...props} />
    }
    // case 3
    // recursively render children
    const children = Array.from(element.childNodes).map((el, index) => {
      return <RecursiveRender key={index} element={el} markdown={markdown} />
    })
    // Render tagName as parent element of the children below
    switch (Tag) {
      case 'p':
        return (
          <Typography variant={'body1'} {...props} component={Tag}>
            {children}
          </Typography>
        )
      case 'span':
        return (
          <Typography variant={'body1'} {...props} component={Tag}>
            {children}
          </Typography>
        )
      case 'h1':
        return (
          <Typography variant={'headline1'} {...props} component={Tag}>
            {children}
          </Typography>
        )
      case 'h2':
        return (
          <Typography variant={'headline2'} {...props} component={Tag}>
            {children}
          </Typography>
        )
      case 'h3':
        return (
          <Typography variant={'headline3'} {...props} component={Tag}>
            {children}
          </Typography>
        )
      case 'ol':
        return (
          <Typography variant={'body1'} {...props} component={Tag}>
            {children}
          </Typography>
        )
      case 'ul':
        return (
          <Typography variant={'body1'} {...props} component={Tag}>
            {children}
          </Typography>
        )
      case 'a':
        return (
          <Link {...props} component={Tag}>
            {children}
          </Link>
        )
      default:
        return <Tag {...props}>{children}</Tag>
    }
  }
  return null
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
