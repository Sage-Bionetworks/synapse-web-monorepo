import React from 'react'
import { Button } from '@mui/material'
import QueryCount from '../QueryCount/QueryCount'
import { GoalsDataProps } from './Goals'

export default function GoalsDesktop({
  asset,
  link,
  summary,
  countSql,
  title,
}: GoalsDataProps) {
  return (
    <div className="Goals__Card">
      <div
        className="Goals__Card__header"
        style={{ background: `url('${asset}')` }}
      >
        <p>
          <span className="Goals__Card__header__title"> {title} </span>
          {countSql && (
            <span className="Goals__Card__header__count">
              <QueryCount parens={false} query={{ sql: countSql }} />
            </span>
          )}
        </p>
      </div>
      <div className="Goals__Card__summary">
        <p> {summary} </p>
        <Button
          className="Goals__Card__summary__link"
          variant="contained"
          color="secondary"
          href={link}
        >
          Explore
        </Button>
      </div>
    </div>
  )
}
