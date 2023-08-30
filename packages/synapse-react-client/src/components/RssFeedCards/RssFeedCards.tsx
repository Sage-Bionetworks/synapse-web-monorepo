import React from 'react'
import Parser from 'rss-parser'
import dayjs from 'dayjs'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { ReactComponent as SubscribePlus } from '../../assets/icons/subscribe_plus.svg'
import { LockedColumn } from '../QueryContext/QueryContext'
import NoData from '../../assets/icons/NoData'
import LargeButton from '../../components/styled/LargeButton'

const rssParser = new Parser()
type RssState = {
  rssFeed: any
  isLoadingError: boolean
  isShowingSubscribeUI: boolean
  allItemsUrl?: string
}

export type RssFeedCardsProps = {
  url: string
  lockedColumn?: LockedColumn // optional tag to filter by, typically set by using this component on a DetailsPage
  itemsToShow: number
  allowCategories?: string[]
  mailChimpListName?: string
  mailChimpUrl?: string
  viewAllNewsButtonText?: string
}
export class RssFeedCards extends React.Component<RssFeedCardsProps, RssState> {
  // only update the state if this component is mounted
  _isMounted = false

  constructor(props: RssFeedCardsProps) {
    super(props)
    this.state = {
      rssFeed: {},
      isLoadingError: false,
      isShowingSubscribeUI: false,
    }
  }

  componentDidMount() {
    this._isMounted = true
    const { url, lockedColumn } = this.props
    const lockedColumnValue = lockedColumn?.value
    const tagPath = lockedColumnValue
      ? `/tag/${lockedColumnValue.replace(' ', '-')}`
      : ''
    const allItems = `${url}${tagPath}`
    const feedUrl = `${allItems}/feed/`
    fetch(feedUrl)
      .then(response => response.text())
      .then(responseData => rssParser.parseString(responseData))
      .then(rss => {
        if (this._isMounted) {
          this.setState({ rssFeed: rss, allItemsUrl: allItems })
        }
      })
      .catch(err => {
        if (this._isMounted) {
          this.setState({ isLoadingError: true })
        }
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  public onClickSubscribe = () => {
    this.setState({ isShowingSubscribeUI: true })
  }

  render() {
    const { viewAllNewsButtonText } = this.props

    if (this.state.rssFeed.items?.length === 0) {
      return (
        <div className="text-center SRCBorderedPanel SRCBorderedPanel--padded2x">
          {NoData}
          <div style={{ marginTop: '20px', fontStyle: 'italic' }}>
            There are no items currently available
          </div>
        </div>
      )
    }
    return (
      <>
        {this.props.mailChimpUrl && (
          <div className="FeedSubscribe">
            {!this.state.isShowingSubscribeUI && (
              <a
                className="FeedSubscribeToNewsLink SRC-no-border-bottom-imp"
                onClick={this.onClickSubscribe}
              >
                <SubscribePlus title="Subscribe to News" />
                Subscribe to News
              </a>
            )}
            {this.state.isShowingSubscribeUI && (
              <div className="MailchimpSubscribeContainer">
                <SubscribePlus title="Subscribe to News" />
                <p>
                  Subscribe to receive the {this.props.mailChimpListName} by
                  e-mail, which provides information and updates related to the
                  Portal. You can opt out at any time by using the unsubscribe
                  link within the e-mail. We will not share your information
                  with any third parties or use it for any other purposes.
                </p>
                <div className="SRC-marginBottomTop">
                  <MailchimpSubscribe url={this.props.mailChimpUrl} />
                </div>
              </div>
            )}
          </div>
        )}
        <div className="Feed">
          <div className="FeedItems">
            {this.state.rssFeed.items &&
              this.state.rssFeed.items.map((item: any, index: any) => {
                // The other is to hide the large number of items in a particular feed (usually a max of 10 are returned).  See state.isShowingMoreItems
                const isItemVisible: boolean = index < this.props.itemsToShow

                return (
                  <div
                    key={item.guid}
                    className={`FeedItem ${isItemVisible ? '' : 'hidden'}`}
                  >
                    <div>
                      {this.props.allowCategories &&
                        this.props.allowCategories.length > 0 && (
                          <div className="FeedItemCategories">
                            {item['categories'].map((categoryName: string) => {
                              // are we allowed to show this category/tag?
                              const categoryNameLowerCase =
                                categoryName.toLowerCase()
                              const allowCategories = this.props.allowCategories
                              if (
                                allowCategories?.findIndex(
                                  item =>
                                    categoryNameLowerCase ===
                                    item.toLowerCase(),
                                ) === -1
                              )
                                return <></>
                              // else
                              return (
                                <a
                                  href={`${
                                    this.state.rssFeed.link
                                  }/tag/${categoryName.replace(' ', '-')}`}
                                  className="SRC-no-border-bottom-imp"
                                  key={`${item.guid}_${categoryName}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="FeedItemCategory">
                                    {categoryName}
                                  </div>
                                </a>
                              )
                            })}
                          </div>
                        )}
                      <p className="FeedItemDate">
                        {dayjs(item['isoDate']).format('MMMM YYYY')}
                      </p>
                      <p className="FeedItemTitle">{item['title']}</p>
                      <div className="FeedItemDescription">
                        {item['contentSnippet'].replace(/\[...\]|\[…\]/gm, '…')}
                      </div>
                      <a
                        className="FeedItemLink"
                        href={item['link']}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Continue reading
                      </a>
                    </div>
                  </div>
                )
              })}
          </div>
          {this.state.rssFeed.items &&
            this.state.rssFeed.items.length > this.props.itemsToShow &&
            this.state.allItemsUrl && (
              <div className="FeedViewAllNewsButtonContainer">
                <LargeButton
                  color="secondary"
                  variant="contained"
                  onClick={() =>
                    window.open(this.state.allItemsUrl, '_blank', 'noopener')
                  }
                  // @ts-expect-error - target prop exists, but TS doesn't recognize on styled component
                  target="_blank"
                >
                  {viewAllNewsButtonText ?? 'View All News'}
                </LargeButton>
              </div>
            )}
          {this.state.isLoadingError && (
            <div>Unable to load feed: {this.props.url}</div>
          )}
        </div>
      </>
    )
  }
}

export default RssFeedCards
