import React from 'react'
import headerConfig from '../config/headerConfig'
import { Link, Typography } from '@mui/material'
import { AddAlertTwoTone } from '@mui/icons-material'

function Header() {
  const {
    summary,
    title,
    showBlur = true,
    centerText = false,
    HeaderSvg,
    subscriptionConfig,
  } = headerConfig
  const hasImg = HeaderSvg !== undefined
  const content = (
    <>
      <div
        className={`header-text ${showBlur ? 'blur' : ''} ${
          centerText ? 'center-text' : ''
        }`}
      >
        <Typography
          variant="headline1"
          sx={{
            fontSize: '30px',
            fontWeight: 'bold',
            marginTop: '20px',
            marginBottom: '30px',
          }}
        >
          {title}
        </Typography>
        <Typography variant="body1">{summary}</Typography>
        {subscriptionConfig && (
          <>
            <Link
              href={subscriptionConfig.url}
              target="_blank"
              sx={{
                color: 'white',
                '&:hover': { color: 'white' },
                '&:focus': { color: 'white' },
                marginTop: '15px',
                display: 'block',
              }}
            >
              <AddAlertTwoTone
                sx={{ width: '16px', height: '16px', marginRight: '7px' }}
              />
              {subscriptionConfig.text ?? 'Subscribe to the newsletter'}
            </Link>
          </>
        )}
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
