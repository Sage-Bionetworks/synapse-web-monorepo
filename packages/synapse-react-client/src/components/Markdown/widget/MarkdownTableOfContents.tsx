const TOC_CLASS = {
  1: 'toc-indent1',
  2: 'toc-indent2',
  3: 'toc-indent3',
  4: 'toc-indent4',
  5: 'toc-indent5',
  6: 'toc-indent6',
}

type MarkdownTableOfContentsProps = {
  originalMarkup: string
}

export default function MarkdownTableOfContents(
  props: MarkdownTableOfContentsProps,
) {
  const { originalMarkup } = props
  const elements: any[] = []
  const TOC_HEADER_REGEX_WITH_ID =
    /<h([1-6]) id="(.*)" .*toc="true">(.*)<\/h[1-6]>/gm
  let text = ''
  originalMarkup.replace(TOC_HEADER_REGEX_WITH_ID, (p1, p2, p3, p4) => {
    text += p4
    elements.push(
      <div key={p4}>
        <a
          role="link"
          className={`link ${TOC_CLASS[Number(p2) as keyof typeof TOC_CLASS]}`}
          data-anchor={p3}
        >
          {p4}
        </a>
      </div>,
    )
    return ''
  })
  return <div key={text}>{elements}</div>
}
