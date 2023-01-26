import * as React from 'react'
const CHAR_COUNT_CUTOFF = 400

type ShowMoreState = {
  showMore: boolean
}

type ShowMoreProps = {
  summary: string
}

export default class ShowMore extends React.Component<
  ShowMoreProps,
  ShowMoreState
> {
  constructor(props: ShowMoreProps) {
    super(props)
    this.state = {
      showMore: false,
    }
    this.toggleShowMore = this.toggleShowMore.bind(this)
  }

  public toggleShowMore(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    this.setState({
      showMore: true,
    })
  }

  getCutoff = (summary: string) => {
    let previewText = ''
    if (!summary) {
      return { previewText }
    }
    let hiddenText = ''
    const summarySplit = summary!.split(' ')
    // find num words to join such that its >= char_count_cutoff
    let i = 0
    while (previewText.length < CHAR_COUNT_CUTOFF && i < summarySplit.length) {
      previewText += `${summarySplit[i]} `
      i += 1
    }
    if (i < summarySplit.length - 1) {
      hiddenText = summarySplit.slice(i).join(' ')
    }
    return { previewText, hiddenText }
  }

  public render() {
    const { summary } = this.props
    const meetsCharRequirements = summary && summary.length >= CHAR_COUNT_CUTOFF
    let { previewText, hiddenText } = this.getCutoff(summary)
    const showMoreButton = meetsCharRequirements && (
      <a
        style={{ fontSize: '14px', cursor: 'pointer', marginLeft: '5px' }}
        onClick={this.toggleShowMore}
        className="highlight-link"
      >
        ...Show More
      </a>
    )
    return (
      <React.Fragment>
        <span>
          {previewText}
          <span className={this.state.showMore ? '' : 'SRC-hidden'}>
            {hiddenText}
          </span>
        </span>
        {!this.state.showMore && showMoreButton}
      </React.Fragment>
    )
  }
}
