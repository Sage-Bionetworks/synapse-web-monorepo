import { CheckIcon } from '@/assets/icons/terms/CheckIcon'
import { useGetPresignedUrlContentFromFHA } from '@/synapse-queries/file/useFiles'
import { Link, Skeleton } from '@mui/material'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { times } from 'lodash-es'
import { MouseEvent, useEffect, useState } from 'react'
import MarkdownSynapse from '../Markdown/MarkdownSynapse/MarkdownSynapse'
import { SkeletonParagraph } from '../Skeleton'

export type tcItem = {
  iconFileHandleId: string
  label: string
  description: string
}

export type TermsAndConditionsItemProps = {
  id: number
  enabled: boolean
  checked: boolean
  item: tcItem
  termsAndConditionsTableID: string
  onChange: (id: number) => void
}

function TermsAndConditionsItem(props: TermsAndConditionsItemProps) {
  const { id, item, enabled, checked, onChange, termsAndConditionsTableID } =
    props
  const { iconFileHandleId, label, description } = item
  const { data: iconFileContent } = useGetPresignedUrlContentFromFHA(
    {
      associateObjectId: termsAndConditionsTableID,
      associateObjectType: FileHandleAssociateType.TableEntity,
      fileHandleId: iconFileHandleId,
    },
    true, // force this query to be run as the anonymous user (without an access token)
  )

  const [showDesc, setShowDes] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  let mounted = true

  useEffect(() => {
    if (mounted) {
      setIsChecked(checked)
    }
    return () => {
      mounted = false
    }
  }, [enabled, checked])

  const handleShowDescLink = (e: MouseEvent) => {
    e.preventDefault()
    if (enabled) {
      setShowDes(!showDesc)
    }
  }

  const handleCheckboxClick = (e: MouseEvent) => {
    if (enabled) {
      onChange(id)
    }
  }

  return (
    <li className={enabled ? 'terms-enabled' : ''}>
      <span
        className="terms-icon"
        dangerouslySetInnerHTML={{ __html: iconFileContent ?? '' }}
      />
      <span className="terms-desc">
        <label id={`toc-item-${id}`}>
          <MarkdownSynapse markdown={label} />
        </label>
        {showDesc && description && (
          <div className="terms-desc-content">
            <MarkdownSynapse markdown={description} />
          </div>
        )}
        {description && (
          <div>
            <Link
              className="terms-show-desc highlight-link"
              href=""
              onClick={handleShowDescLink}
            >
              {showDesc ? 'Show Less' : 'Show More'}
            </Link>
          </div>
        )}
      </span>
      <span className="terms-checkbox">
        <span
          role="checkbox"
          aria-labelledby={`toc-item-${id}`}
          className={isChecked ? 'terms-circle terms-checked' : 'terms-circle'}
          onClick={handleCheckboxClick}
        >
          <CheckIcon />
        </span>
        I agree
      </span>
    </li>
  )
}

export function LoadingItem(props: { numLoadingItems: number }) {
  const { numLoadingItems } = props
  return (
    <>
      {times(numLoadingItems).map(index => {
        return (
          <li
            key={index}
            aria-busy="true"
            aria-live="polite"
            data-testid="loading-terms-and-conditions"
          >
            <span className="terms-icon">
              <Skeleton
                variant="rectangular"
                height="30px"
                width="30px"
                sx={{ margin: 'auto' }}
              />
            </span>
            <span className="terms-desc">
              <SkeletonParagraph numRows={5} />
            </span>
            <span className="terms-checkbox">
              <Skeleton
                variant="circular"
                height="40px"
                width="40px"
                sx={{ margin: 'auto' }}
              />
            </span>
          </li>
        )
      })}
    </>
  )
}

export default TermsAndConditionsItem
