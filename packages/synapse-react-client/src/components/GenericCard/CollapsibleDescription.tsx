import { ReactNode, useState } from 'react'
import { DescriptionConfig } from '../CardContainerLogic'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import { Link } from '@mui/material'

export const CHAR_COUNT_CUTOFF = 400

export const CARD_SHORT_DESCRIPTION_CSS = 'SRC-short-description'
export const CARD_LONG_DESCRIPTION_CSS = 'SRC-long-description'

// This function isn't in the class only for ease of testing with renderShortDescription
export const getCutoff = (summary: string) => {
  let previewText = ''
  const summarySplit = summary.split(' ')
  // find num words to join such that its >= char_count_cutoff
  let i = 0
  while (previewText.length < CHAR_COUNT_CUTOFF && i < summarySplit.length) {
    previewText += `${summarySplit[i]} `
    i += 1
  }
  previewText = previewText.trim()
  return { previewText }
}

export function LongDescription(props: {
  description: string
  hasClickedShowMore: boolean
  descriptionSubTitle: string
  descriptionConfig?: DescriptionConfig
}) {
  const {
    description,
    hasClickedShowMore,
    descriptionSubTitle,
    descriptionConfig,
  } = props
  let content: ReactNode = description
  if (
    descriptionConfig?.isMarkdown &&
    (content == null || typeof content === 'string')
  ) {
    content = <MarkdownSynapse markdown={content} />
  }
  const show =
    hasClickedShowMore || descriptionConfig?.showFullDescriptionByDefault
  return (
    <div className={show ? '' : 'SRC-hidden'}>
      <span
        data-search-handle={descriptionSubTitle}
        className={`SRC-font-size-base ${CARD_LONG_DESCRIPTION_CSS}`}
      >
        {content}
      </span>
    </div>
  )
}

export function ShortDescription(props: {
  description: string
  hasClickedShowMore: boolean
  descriptionSubTitle: string
  descriptionConfig?: DescriptionConfig
  toggleShowMore: () => void
}) {
  const {
    description,
    hasClickedShowMore,
    descriptionSubTitle,
    descriptionConfig,
    toggleShowMore,
  } = props
  if (descriptionConfig?.showFullDescriptionByDefault) {
    return <></>
  }
  return (
    <div className={hasClickedShowMore ? 'SRC-hidden' : ''}>
      <span
        data-search-handle={descriptionSubTitle}
        className={`SRC-font-size-base ${CARD_SHORT_DESCRIPTION_CSS} SRC-short-description`}
      >
        {getCutoff(description).previewText}
      </span>
      {description.length >= CHAR_COUNT_CUTOFF && (
        <Link
          style={{
            fontSize: '16px',
            cursor: 'pointer',
            marginLeft: '5px',
          }}
          onClick={toggleShowMore}
        >
          ...Show More
        </Link>
      )}
    </div>
  )
}

export type CollapsibleDescriptionProps = {
  description?: string
  descriptionConfig?: DescriptionConfig
  descriptionSubTitle: string
}

export function CollapsibleDescription({
  description,
  descriptionSubTitle,
  descriptionConfig,
}: CollapsibleDescriptionProps) {
  const [hasClickedShowMore, setClickedShowMore] = useState<boolean>(false)
  /* 
        Below is a hack that allows word highlighting to work, the Search component insert's
        html elements outside of the React DOM which if detected would break the app,
        but as written below this avoids that reconcilliation process.
    */
  return (
    <>
      {description && (
        <ShortDescription
          description={description}
          hasClickedShowMore={hasClickedShowMore}
          descriptionSubTitle={descriptionSubTitle}
          descriptionConfig={descriptionConfig}
          toggleShowMore={() => setClickedShowMore(true)}
        />
      )}
      {description && (
        <LongDescription
          description={description}
          hasClickedShowMore={hasClickedShowMore}
          descriptionSubTitle={descriptionSubTitle}
          descriptionConfig={descriptionConfig}
        />
      )}
    </>
  )
}
