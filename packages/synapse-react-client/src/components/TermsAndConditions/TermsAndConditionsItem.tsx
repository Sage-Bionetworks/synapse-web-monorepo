import React, { useEffect, useState } from 'react'
import { CheckIcon } from '../../assets/icons/terms/CheckIcon'
import { termsAndConditionsTableID } from './TermsAndConditions'
import {
  FileHandleAssociateType,
  FileResult,
} from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import { Link, Skeleton } from '@mui/material'
import { SkeletonParagraph } from '../Skeleton'
import { times } from 'lodash-es'

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
  onChange: (id: number) => void
}

const TermsAndConditionsItem: React.FunctionComponent<
  TermsAndConditionsItemProps
> = props => {
  const { id, item, enabled, checked, onChange } = props
  const { iconFileHandleId, label, description } = item
  const [iconFileResult, setIconFileResult] = useState<FileResult | undefined>(
    undefined,
  )
  const [iconFileContent, setIconFileContent] = useState<string>('')

  useEffect(() => {
    if (iconFileHandleId) {
      SynapseClient.getFiles({
        requestedFiles: [
          {
            associateObjectId: termsAndConditionsTableID,
            associateObjectType: FileHandleAssociateType.TableEntity,
            fileHandleId: iconFileHandleId,
          },
        ],
        includeFileHandles: true,
        includePreSignedURLs: true,
        includePreviewPreSignedURLs: false,
      }).then(fileResults => {
        setIconFileResult(fileResults.requestedFiles[0])
      })
    }
  }, [iconFileHandleId])

  useEffect(() => {
    if (iconFileResult) {
      SynapseClient.getFileHandleContent(
        iconFileResult.fileHandle!,
        iconFileResult.preSignedURL!,
      ).then(content => {
        setIconFileContent(content)
      })
    }
  }, [iconFileResult])
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

  const handleShowDescLink = (e: React.MouseEvent) => {
    e.preventDefault()
    if (enabled) {
      setShowDes(!showDesc)
    }
  }

  const handleCheckboxClick = (e: React.MouseEvent) => {
    if (enabled) {
      onChange(id)
    }
  }

  return (
    <li className={enabled ? 'terms-enabled' : ''}>
      <span
        className="terms-icon"
        dangerouslySetInnerHTML={{ __html: iconFileContent }}
      />
      <span className="terms-desc">
        <label
          id={`toc-item-${id}`}
          dangerouslySetInnerHTML={{ __html: label }}
        />
        {showDesc && description && (
          <div
            className="terms-desc-content"
            dangerouslySetInnerHTML={{ __html: description }}
          />
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
