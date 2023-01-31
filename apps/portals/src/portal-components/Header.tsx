import * as React from 'react'
import headerConfig from '../config/headerConfig'

function Header() {
  const {
    summary,
    title,
    showBlur = true,
    centerText = false,
    HeaderSvg,
  } = headerConfig
  const hasImg = HeaderSvg !== undefined
  const content = (
    <>
      <div
        className={`header-text ${showBlur ? 'blur' : ''} ${
          centerText ? 'center-text' : ''
        }`}
      >
        <h2>{title}</h2>
        <p className="normal-weight">{summary}</p>
      </div>
    </>
  )
  return (
    <header id="header">
      {hasImg && (
        <>
          <HeaderSvg />
          {content}
        </>
      )}
      {!hasImg && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-offset-1 col-md-10">{content}</div>
          </div>
        </div>
      )}
    </header>
  )
}

export default React.memo(Header)
