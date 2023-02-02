import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

export type PageProgressProps = {
  barColor: string
  barPercent: number
  backBtnLabel: string
  backBtnCallback?: () => void
  forwardBtnLabel: string
  forwardBtnCallback?: () => void
  forwardBtnActive: boolean
}

const PageProgress: React.FunctionComponent<PageProgressProps> = props => {
  const {
    barColor,
    barPercent,
    backBtnLabel,
    forwardBtnLabel,
    forwardBtnActive,
    backBtnCallback,
    forwardBtnCallback,
  } = props
  const [progressPercent, setProgressPercent] = useState<number>(0)
  let mounted = true

  useEffect(() => {
    if (mounted) {
      setProgressPercent(barPercent)
    }
    return () => {
      mounted = false
    }
  }, [barPercent])

  const handleBackButtonClick = (e: React.MouseEvent) => {
    if (backBtnCallback) {
      backBtnCallback()
    }
  }

  const handleNextButtonClick = (e: React.MouseEvent) => {
    if (forwardBtnCallback && forwardBtnActive) {
      forwardBtnCallback()
    }
  }

  return (
    <section className="page-progress">
      <div
        className="page-progress-percent"
        style={{
          width: `${progressPercent}%`,
          backgroundColor: barColor,
        }}
      ></div>
      <div className="page-progress-action">
        <Button className="btn-progress-back" onClick={handleBackButtonClick}>
          {backBtnLabel}
        </Button>
        <Button
          className={
            forwardBtnActive ? 'btn-progress-next-active' : 'btn-progress-next'
          }
          onClick={handleNextButtonClick}
        >
          {forwardBtnLabel}
        </Button>
      </div>
    </section>
  )
}

export default PageProgress
