import React from 'react'
import MarkdownIt from 'markdown-it'
import xss from 'xss'
import SynapseClient from '../../synapse-client'
import { xssOptions } from '../../utils/functions/SanitizeHtmlUtils'
import { SynapseClientError, SynapseContext } from '../../utils'
import {
  FileHandleResults,
  ObjectType,
  WikiPage,
} from '@sage-bionetworks/synapse-types'
import { ErrorBanner } from '../error/ErrorBanner'
import MarkdownWidget from './MarkdownWidget'
import {
  SynapseWikiContextProvider,
  SynapseWikiContextType,
} from './SynapseWikiContext'
import Bookmarks from './widget/Bookmarks'
import { SkeletonTable } from '../Skeleton'
import { Link, Typography } from '@mui/material'
import katex from 'katex'
import * as markdownitSynapse from 'markdown-it-synapse'
import markdownitSynapsePlugin from 'markdown-it-synapse'
import markdownitSub from 'markdown-it-sub-alt'
import markdownitSup from 'markdown-it-sup-alt'
import markdownitCentertext from 'markdown-it-center-text'
import markdownitSynapseHeading from 'markdown-it-synapse-heading'
import markdownitSynapseTable from 'markdown-it-synapse-table'
import markdownitStrikethroughAlt from 'markdown-it-strikethrough-alt'
import markdownitContainer from '@sage-bionetworks/markdown-it-container'
import markdownitInlineComments from 'markdown-it-inline-comments'
import markdownitBr from 'markdown-it-br'
import markdownitMath from 'markdown-it-synapse-math'

export const NO_WIKI_CONTENT = 'There is no content.'

export type MarkdownSynapseProps = {
  ownerId?: string
  wikiId?: string
  markdown?: string
  renderInline?: boolean
  objectType?: ObjectType
  loadingSkeletonRowCount?: number
  onMarkdownProcessingDone?: (textContent: string | null | undefined) => void
  showPlaceholderIfNoWikiContent?: boolean
}
type MarkdownSynapseComponent = React.ComponentType<MarkdownSynapseProps>

const md = MarkdownIt({ html: true })

type MarkdownSynapseState = {
  md: MarkdownIt
  data: Partial<WikiPage>
  fileHandles?: FileHandleResults
  error: SynapseClientError | undefined
  isLoading: boolean
}
/**
 * Basic Markdown functionality for Synapse, supporting Images/Plots/References/Bookmarks/buttonlinks
 *
 * @class Markdown
 * @extends {React.Component}
 */
const MarkdownSynapse: MarkdownSynapseComponent = class MarkdownSynapse extends React.Component<
  MarkdownSynapseProps,
  MarkdownSynapseState
> {
  public markupRef: React.RefObject<HTMLInputElement>
  static contextType = SynapseContext
  declare context: NonNullable<React.ContextType<typeof SynapseContext>>

  /**
   * Creates an instance of Markdown.
   * @param {*} props
   */
  constructor(props: MarkdownSynapseProps) {
    super(props)
    // markdownitSynapse wraps around markdownit object and uses its own dependencies
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
    // Update the internal markdownit object with the wrapped synapse object
    md.use(markdownitSynapsePlugin, mathSuffix, 'https://synapse.org').use(
      markdownitMath,
      mathSuffix,
    )
    const data: { markdown?: string } = {}
    if (this.props.markdown) {
      data.markdown = this.props.markdown
    }
    this.state = {
      md,
      error: undefined,
      fileHandles: undefined,
      data,
      isLoading: true,
    }
    this.markupRef = React.createRef()
    this.handleLinkClicks = this.handleLinkClicks.bind(this)
    // handle widgets and math markdown
    this.renderMarkdown = this.renderMarkdown.bind(this)
    this.recursiveRender = this.recursiveRender.bind(this)
    this.processMath = this.processMath.bind(this)
    // handle init calls to get wiki related items
    this.getWikiAttachments = this.getWikiAttachments.bind(this)
    this.getWikiPageMarkdown = this.getWikiPageMarkdown.bind(this)
    this.createHTML = this.createHTML.bind(this)
    this.stripHTML = this.stripHTML.bind(this)
    this.addBookmarks = this.addBookmarks.bind(this)
    this.addIdsToReferenceWidgets = this.addIdsToReferenceWidgets.bind(this)
    this.addIdsToTocWidgets = this.addIdsToTocWidgets.bind(this)
  }

  public componentWillUnmount() {
    this.markupRef.current &&
      // @ts-expect-error TODO: find better documentation on typescript/react event params
      this.markupRef.current.removeEventListener('click', this.handleLinkClicks)
  }

  // Manually handle clicks to anchor tags where the scrollto isn't handled by page hash
  public handleLinkClicks(event: React.MouseEvent<HTMLElement>) {
    const genericElement = event.target as HTMLElement
    if (genericElement.tagName === 'A' || genericElement.tagName === 'BUTTON') {
      const anchor = event.target as HTMLAnchorElement
      if (anchor.id.substring(0, 3) === 'ref') {
        event.preventDefault()
        // its a reference, so we scroll to the appropriate bookmark
        const referenceNumber = Number(event.currentTarget.id.substring(3)) // e.g. ref2 => '2'
        const goTo = this.markupRef.current!.querySelector(
          `#bookmark${referenceNumber}`,
        )
        try {
          goTo!.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          })
        } catch (e) {
          console.log('error on scroll', e)
        }
      } else if (
        event.currentTarget.id !== null &&
        anchor.getAttribute('data-anchor')
      ) {
        event.preventDefault()
        // handle table of contents widget
        const idOfContent = anchor.getAttribute('data-anchor')
        const goTo = this.markupRef.current!.querySelector(
          `[id="${idOfContent}"]`,
        )
        try {
          goTo!.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          })
        } catch (e) {
          console.log('error on scroll', e)
        }
      }
    }
  }

  /**
   * Given input text, generate markdown object to be passed onto inner html of some container.
   * @param {String} markdown The text being written in plain markdown
   * @returns {Object} Dictionary to be passed into dangerouslySetInnerHTML with markdown text
   */
  public createHTML(markdown?: string) {
    if (!markdown) {
      return { __html: '' }
    }
    // Note - renderInline parses out any block level elements contained in the markdown
    const initText = this.props.renderInline
      ? this.state.md.renderInline(markdown)
      : this.state.md.render(markdown)
    const cleanText = xss(initText, xssOptions)
    return { __html: cleanText }
  }

  /**
   * Find all math identified elements of the form [id^=\"mathjax-\"]
   * (e.g. <dom element id="mathjax-10"> text </dom element>)
   * and transform them to their math markedown equivalents
   */
  public processMath() {
    if (!this.markupRef.current) {
      return
    }
    // use regex to grab all elements
    const mathExpressions =
      this.markupRef.current.querySelectorAll<HTMLElement>('[id^="mathjax-"]')
    // go through all obtained elements and transform them with katex
    const regEx = new RegExp(/\\[()[\]]/, 'g') // Look for a '\' followed by either '(', ')', '[', or ']'. We delete these strings since they interfere with katex processing.
    mathExpressions.forEach(element => {
      if (element.textContent && !element.getAttribute('processed')) {
        // only process a math element once, used to double/triple process
        element.setAttribute('processed', 'true')
        const textContent = element.textContent.replace(regEx, '')
        return katex.render(textContent, element, {
          // @ts-expect-error
          output: 'html',
          throwOnError: false,
        })
      }
    })
  }
  /**
   * Process all the corresponding bookmark tags of the references made throughout the page
   *
   * @memberof MarkdownSynapse
   */
  public addBookmarks() {
    markdownitSynapse.resetFootnotes()
    this.createHTML(this.state.data.markdown)
    const footnotesHtml = this.createHTML(markdownitSynapse.footnotes()).__html
    if (footnotesHtml.length > 0) {
      return <Bookmarks footnotes={footnotesHtml} />
    }
    return
  }

  public stripHTML(myHtmlString: string): string {
    const el = document.createElement('div')
    el.innerHTML = myHtmlString
    return el.textContent || el.innerText || ''
  }

  /**
   * Get wiki page markdown and file attachment handles
   */
  public async getWikiPageMarkdown() {
    const { ownerId, wikiId, objectType } = this.props
    if (!ownerId && !wikiId) {
      return
    }
    try {
      /* TODO: when wikiId is undefined, get the root WikiPageKey (SynapseClient.getRootWikiPageKey),
      then use the key to get the specific WikiPage (SynapseClient.getWikiPage). 
      See https://sagebionetworks.jira.com/browse/SWC-6791.
      */
      const wikiPage = await SynapseClient.getEntityWiki(
        this.context.accessToken,
        ownerId,
        wikiId,
        objectType,
      )
      try {
        const fileHandles = await this.getWikiAttachments(
          wikiId ? wikiId : wikiPage.id,
        )
        if (this.props.onMarkdownProcessingDone) {
          const plainText = this.stripHTML(
            this.createHTML(wikiPage.markdown).__html,
          )
          this.props.onMarkdownProcessingDone(plainText)
        }
        this.setState({
          data: wikiPage,
          fileHandles,
          error: undefined,
        })
      } catch (fileHandlesErr) {
        console.error('fileHandlesErr = ', fileHandlesErr)
      }
    } catch (err) {
      console.error('Error on wiki markdown load\n', err)
      this.setState({
        error: err,
      })
    }
  }
  public async getWikiAttachments(wikiId: string) {
    const { ownerId, objectType } = this.props
    if (!ownerId) {
      console.error(
        'Cannot get wiki attachments without ownerId on Markdown Component',
      )
      return undefined
    }
    return await SynapseClient.getWikiAttachmentsFromEntity(
      this.context.accessToken,
      ownerId,
      wikiId,
      objectType,
    )
      .then(data => {
        return data
      })
      .catch(err => {
        console.error('Error on wiki attachment load ', err)
        return undefined
      })
  }

  public addIdsToReferenceWidgets(text: string) {
    const referenceRegex =
      /<span id="wikiReference.*?<span data-widgetparams.*?span>/g
    let referenceCount = 1

    return text.replace(referenceRegex, () => {
      // replace all reference tags with id's of the form id="ref<number>"" that we can read onClick
      const current = referenceCount
      referenceCount += 1
      return `<a href="" id="ref${current}">[${current}]</a>`
    })
  }

  public addIdsToTocWidgets(text: string) {
    const tocId = 'SRC-header-'
    let tocIdCount = 1
    const TOC_HEADER_REGEX = /<h[1-6] toc="true">.*<\/h[1-6]>/gm

    return text.replace(TOC_HEADER_REGEX, (match: string) => {
      // replace with id of the form id="toc" so we can read them with onclick events
      const curTocId = tocIdCount
      tocIdCount += 1
      const matchWithId = `${match.substring(
        0,
        3,
      )} id="${tocId}${curTocId}"${match.substring(3)}`
      return matchWithId
    })
  }

  /**
   * The 'main' method of this class that process all the markdown and transforms it to the appropriate
   * Synapse widgets.
   *
   * @returns JSX of the markdown into widgets
   * @memberof MarkdownSynapse
   */
  public renderMarkdown() {
    // create initial markup
    let markup = this.createHTML(this.state.data.markdown).__html
    // process reference widgets
    markup = this.addIdsToReferenceWidgets(markup)
    // process table of contents widgets
    markup = this.addIdsToTocWidgets(markup)
    if (markup.length > 0) {
      const domParser = new DOMParser()
      const document = domParser.parseFromString(markup, 'text/html')
      return <>{this.recursiveRender(document.body, markup)}</>
    }

    // If we're still fetching data, then don't show the placeholder yet
    const isFetchingData =
      this.props.objectType && this.props.ownerId && this.state.isLoading
    if (
      !isFetchingData &&
      this.props.showPlaceholderIfNoWikiContent &&
      markup === ''
    ) {
      return (
        <Typography variant="body1Italic" mb={1}>
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
   * @memberof MarkdownSynapse
   */
  public recursiveRender(element: Node, markdown: string): any {
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
      const Tag: keyof JSX.IntrinsicElements =
        element.tagName.toLowerCase() === 'body'
          ? 'span'
          : (element.tagName.toLowerCase() as keyof JSX.IntrinsicElements)
      const widgetParams = element.getAttribute('data-widgetparams')
      if (widgetParams) {
        // case 2
        // process widget
        return this.processHTMLWidgetMapping(widgetParams, markdown)
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
        return (
          <React.Fragment key={index}>
            {this.recursiveRender(el, markdown)}
          </React.Fragment>
        )
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
  }

  /**
   *  When the markdown string is transferred over the network certain characters get transformed,
   * this does a simple transformation back to the original user's string.
   *
   * @param {string} xml
   * @returns
   * @memberof MarkdownSynapse
   */
  public decodeXml(xml: string) {
    const escapedOneToXmlSpecialMap = {
      '&amp;': '&',
      '&gt;': '>',
      '&lt;': '<',
      '&quot;': '"',
    }
    return xml.replace(
      /(&quot;|&lt;|&gt;|&amp;)/g,
      (str: string, item: keyof typeof escapedOneToXmlSpecialMap) => {
        return escapedOneToXmlSpecialMap[item]
      },
    )
  }

  /**
   * Given widgetMap renders it in a React component (or originalMarkup in special cases.)
   *
   * @param {string} widgetMatch The synapse widget to be rendered
   * @param {string} originalMarkup The original markup text, this is a special case for widgets that
   * are html specific.
   * @returns JSX of the widget to render
   * @memberof MarkdownSynapse
   */
  public processHTMLWidgetMapping(
    widgetParams: string,
    originalMarkup: string,
  ) {
    // General workflow -
    //   1. Capture widget parameters
    //   2. Transform any widget xml parameters to standard text
    //   3. Split those parameters into a map
    //   4. Render that widget based on its parameters

    // steps 1,2
    const decodedWidgetParams = this.decodeXml(widgetParams)

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

  public async componentDidMount() {
    if (this.state.data.markdown) {
      this.setState({ isLoading: false })
      if (this.props.onMarkdownProcessingDone) {
        const plainText = this.stripHTML(
          this.createHTML(this.state.data.markdown).__html,
        )
        this.props.onMarkdownProcessingDone(plainText)
      }
      return
    }
    // we use this.markupRef.current && because in testing environment refs aren't defined
    this.markupRef.current &&
      // @ts-expect-error
      this.markupRef.current.addEventListener('click', this.handleLinkClicks)
    // unpack and set default value if not specified
    // get wiki attachments
    await this.getWikiPageMarkdown()
    this.processMath()
    this.setState({ isLoading: false })
  }

  // on component update find and re-render the math/widget items accordingly
  public async componentDidUpdate(prevProps: MarkdownSynapseProps) {
    let shouldUpdate = this.props.ownerId !== prevProps.ownerId
    shouldUpdate = shouldUpdate || this.props.wikiId !== prevProps.wikiId

    // we have to carefully update the component so it doesn't encounter an infinite loop
    if (shouldUpdate) {
      await this.getWikiPageMarkdown()
    }
    this.processMath()
  }

  public render() {
    const { renderInline, loadingSkeletonRowCount } = this.props
    const { isLoading, error } = this.state

    const wikiContext: SynapseWikiContextType = {
      ownerId: this.props.ownerId,
      wikiId: this.props.wikiId,
      wikiPage: this.state.data,
      fileHandles: this.state.fileHandles,
    }

    if (error) {
      return <ErrorBanner error={error} />
    }
    const bookmarks = this.addBookmarks()
    const content = (
      <SynapseWikiContextProvider wikiContext={wikiContext}>
        {isLoading && (
          <>
            {loadingSkeletonRowCount ? (
              <SkeletonTable numCols={1} numRows={loadingSkeletonRowCount} />
            ) : (
              <span className="spinner" />
            )}
          </>
        )}
        {this.renderMarkdown()}
        {bookmarks && <div>{this.addBookmarks()}</div>}
      </SynapseWikiContextProvider>
    )
    if (renderInline) {
      return (
        <span
          data-testid="markdown"
          className="markdown markdown-inline"
          ref={this.markupRef}
        >
          {content}
        </span>
      )
    }
    return (
      <div data-testid="markdown" className="markdown" ref={this.markupRef}>
        {content}
      </div>
    )
  }
}

export { MarkdownSynapse, MarkdownSynapse as Markdown }

export default MarkdownSynapse
