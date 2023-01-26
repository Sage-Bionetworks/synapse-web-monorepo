import React, { useEffect, useState } from 'react'
import { CheckIcon } from '../assets/icons/terms/CheckIcon'

export type tcItem = {
  icon: any
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
    <>
      <span className="terms-icon">{item.icon}</span>
      <span className="terms-desc">
        <label
          id={`toc-item-${id}`}
          dangerouslySetInnerHTML={{ __html: item.label }}
        />
        {showDesc && item.description && (
          <div
            className="terms-desc-content"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        )}
        {item.description && (
          <div>
            <a
              className="terms-show-desc highlight-link"
              href=""
              onClick={handleShowDescLink}
            >
              {showDesc ? 'Show Less' : 'Show More'}
            </a>
          </div>
        )}
      </span>
      <span className="terms-checkbox">
        <span
          aria-labelledby={`toc-item-${id}`}
          className={isChecked ? 'terms-circle terms-checked' : 'terms-circle'}
          onClick={handleCheckboxClick}
        >
          <CheckIcon />
        </span>
        I agree
      </span>
    </>
  )
}

export default TermsAndConditionsItem
