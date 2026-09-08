import NoData from '@/assets/icons/NoData'
import { ReactComponent as SubscribePlus } from '@/assets/icons/subscribe_plus.svg'
import LargeButton from '@/components/styled/LargeButton'
import dayjs from 'dayjs'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Parser from 'rss-parser'
import { QueryClient, queryOptions, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const rssParser = new Parser()

export type RssFilter = {
  type?: 'tag' | 'category'
  value: string
}

export type RssFeedCardsProps = {
  url: string
  filter?: RssFilter // optional tag or category to use as a filter
  itemsToShow: number
  allowCategories?: string[]
  mailChimpListName?: string
  mailChimpUrl?: string
  viewAllNewsButtonText?: string
}

function buildRssFeedUrl(url: string, filter?: RssFilter) {
  const filterValue = filter?.value
  const filterType = filter?.type
  const tagPath = filterValue
    ? `/${filterType ?? 'tag'}/${filterValue.replace(' ', '-')}`
    : ''
  const allItemsUrl = `${url}${tagPath}`
  const feedUrl = `${allItemsUrl}/?feed=rss2`
  return { allItemsUrl, feedUrl }
}

function getRssFeedQueryOptions(feedUrl: string) {
  return queryOptions({
    queryKey: ['rssFeed', feedUrl],
    queryFn: () =>
      fetch(feedUrl)
        .then(response => response.text())
        .then(responseData => rssParser.parseString(responseData)),
  })
}

export function RssFeedCards(props: RssFeedCardsProps) {
  const {
    url,
    filter,
    itemsToShow,
    allowCategories,
    mailChimpListName,
    mailChimpUrl,
    viewAllNewsButtonText,
  } = props

  const { allItemsUrl, feedUrl } = buildRssFeedUrl(url, filter)

  const { data: rssFeed, isError } = useQuery(getRssFeedQueryOptions(feedUrl))

  const [isShowingSubscribeUI, setIsShowingSubscribeUI] = useState(false)

  if (rssFeed?.items?.length === 0) {
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
      {mailChimpUrl && (
        <div className="FeedSubscribe">
          {!isShowingSubscribeUI && (
            <a
              className="FeedSubscribeToNewsLink SRC-no-border-bottom-imp"
              onClick={() => setIsShowingSubscribeUI(true)}
            >
              <SubscribePlus title="Subscribe to News" />
              Subscribe to News
            </a>
          )}
          {isShowingSubscribeUI && (
            <div className="MailchimpSubscribeContainer">
              <SubscribePlus title="Subscribe to News" />
              <p>
                Subscribe to receive the {mailChimpListName} by e-mail, which
                provides information and updates related to the Portal. You can
                opt out at any time by using the unsubscribe link within the
                e-mail. We will not share your information with any third
                parties or use it for any other purposes.
              </p>
              <div className="SRC-marginBottomTop">
                <MailchimpSubscribe url={mailChimpUrl} />
              </div>
            </div>
          )}
        </div>
      )}
      <div className="Feed">
        <div className="FeedItems">
          {rssFeed?.items &&
            rssFeed.items.map((item, index) => {
              // The other is to hide the large number of items in a particular feed (usually a max of 10 are returned).  See state.isShowingMoreItems
              if (index >= itemsToShow) {
                return
              }

              return (
                <div key={item.guid} className={`FeedItem`}>
                  <div>
                    {allowCategories && allowCategories.length > 0 && (
                      <div className="FeedItemCategories">
                        {item.categories?.map((categoryName: string) => {
                          // are we allowed to show this category/tag?
                          const categoryNameLowerCase =
                            categoryName.toLowerCase()
                          if (
                            allowCategories?.findIndex(
                              item =>
                                categoryNameLowerCase === item.toLowerCase(),
                            ) === -1
                          )
                            return null
                          // else
                          return (
                            <a
                              href={`${rssFeed.link}/tag/${categoryName.replace(
                                ' ',
                                '-',
                              )}`}
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
                      {dayjs(item.isoDate).format('MMMM YYYY')}
                    </p>
                    <p className="FeedItemTitle">{item.title}</p>
                    <div className="FeedItemDescription">
                      {item.contentSnippet?.replace(/\[...\]|\[…\]/gm, '…')}
                    </div>
                    <a
                      className="FeedItemLink"
                      href={item.link}
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
        {rssFeed?.items &&
          rssFeed.items.length > itemsToShow &&
          allItemsUrl && (
            <div className="FeedViewAllNewsButtonContainer">
              <LargeButton
                color="secondary"
                variant="contained"
                onClick={() => window.open(allItemsUrl, '_blank', 'noopener')}
                // @ts-expect-error - target prop exists, but TS doesn't recognize on styled component
                target="_blank"
              >
                {viewAllNewsButtonText ?? 'View All News'}
              </LargeButton>
            </div>
          )}
        {isError && <div>Unable to load feed: {url}</div>}
      </div>
    </>
  )
}

export default RssFeedCards

/**
 * Prefetches the RSS feed into a QueryClient for use with HydrationBoundary.
 * Uses the same query key as the RssFeedCards component.
 */
export async function prefetchRssFeed(
  queryClient: QueryClient,
  url: string,
  filter?: RssFilter,
): Promise<void> {
  const { feedUrl } = buildRssFeedUrl(url, filter)
  await queryClient.prefetchQuery(getRssFeedQueryOptions(feedUrl))
}
