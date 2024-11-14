import React from 'react'
import { GoalsV2DataProps } from './GoalsV2'
import QueryCount from '../QueryCount/QueryCount'
import IconButton from '@mui/material/IconButton'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box, Link, Typography, Button, darken } from '@mui/material'

export default function GoalsV2Desktop({
  asset,
  link,
  countSql,
  title,
}: GoalsV2DataProps) {
  return (
    <div
      className="GoalsV2__Card"
      style={{ cursor: 'pointer' }}
      onClick={() => window.open(link)}
    >
      <div
        className="GoalsV2__Card__summary"
        style={{ background: `url('${asset}')` }}
      >
        <p>
          {countSql && (
            <span className="GoalsV2__Card__header__count">
              <QueryCount parens={false} query={{ sql: countSql }} />
            </span>
          )}
          <span className="GoalsV2__Card__header__title"> {title} </span>
          <span className="GoalsV2__Card__header__icon">
            <IconButton>
              <NavigateNextIcon />
            </IconButton>
          </span>
        </p>
      </div>
    </div>
  )
}
