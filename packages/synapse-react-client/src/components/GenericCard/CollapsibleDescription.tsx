import { ReactNode, useState } from 'react'
import { DescriptionConfig } from '../CardContainerLogic'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import { Link } from '@mui/material'

const CHAR_COUNT_CUTOFF_DEFAULT = 400

export const CARD_SHORT_DESCRIPTION_CSS = 'SRC-short-description'
export const CARD_LONG_DESCRIPTION_CSS = 'SRC-long-description'

// This function isn't in the class only for ease of testing with renderShortDescription
export const getCutoff = (summary: string, charCountCutoff: number) => {
  let previewText = ''
  const summarySplit = summary.split(' ')
  // find num words to join such that its >= charCountCutoff
  let i = 0
  while (previewText.length < charCountCutoff && i < summarySplit.length) {
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
  toggleShowMore?: () => void
  charCountCutoff?: number
}) {
  const {
    description,
    hasClickedShowMore,
    descriptionSubTitle,
    descriptionConfig,
    toggleShowMore,
    charCountCutoff = CHAR_COUNT_CUTOFF_DEFAULT,
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
  const canCollapse =
    toggleShowMore &&
    !descriptionConfig?.showFullDescriptionByDefault &&
    description.length >= charCountCutoff
  return (
    <div className={show ? '' : 'SRC-hidden'}>
      <span
        data-search-handle={descriptionSubTitle}
        className={`SRC-font-size-base ${CARD_LONG_DESCRIPTION_CSS}`}
      >
        {content}
      </span>
      {canCollapse && (
        <Link
          style={{
            fontSize: '16px',
            cursor: 'pointer',
            marginLeft: '5px',
          }}
          onClick={toggleShowMore}
        >
          Show Less
        </Link>
      )}
    </div>
  )
}

export function ShortDescription(props: {
  description: string
  hasClickedShowMore: boolean
  descriptionSubTitle: string
  descriptionConfig?: DescriptionConfig
  toggleShowMore: () => void
  charCountCutoff?: number
}) {
  const {
    description,
    hasClickedShowMore,
    descriptionSubTitle,
    descriptionConfig,
    toggleShowMore,
    charCountCutoff = CHAR_COUNT_CUTOFF_DEFAULT,
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
        {getCutoff(description, charCountCutoff).previewText}
      </span>
      {description.length >= charCountCutoff && (
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
  charCountCutoff?: number
}

export function CollapsibleDescription({
  description,
  descriptionSubTitle,
  descriptionConfig,
  charCountCutoff = CHAR_COUNT_CUTOFF_DEFAULT,
}: CollapsibleDescriptionProps) {
  const [hasClickedShowMore, setClickedShowMore] = useState<boolean>(false)
  const toggleShowMore = () => setClickedShowMore(prev => !prev)
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
          toggleShowMore={toggleShowMore}
          charCountCutoff={charCountCutoff}
        />
      )}
      {description && (
        <LongDescription
          description={description}
          hasClickedShowMore={hasClickedShowMore}
          descriptionSubTitle={descriptionSubTitle}
          descriptionConfig={descriptionConfig}
          toggleShowMore={toggleShowMore}
          charCountCutoff={charCountCutoff}
        />
      )}
    </>
  )
}
