import React from 'react'
import { GoalsV2DataProps } from './GoalsV2'
import QueryCount from '../QueryCount/QueryCount'
import { Button } from '@mui/material'

export default function GoalsV2Desktop({
  asset,
  link,
  summary,
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
        className="GoalsV2__Card__header"
        style={{ background: `url('${asset}')` }}
      >
        <p>
          <span className="GoalsV2__Card__header__title"> {title} </span>
          {countSql && (
            <span className="GoalsV2__Card__header__count">
              <QueryCount parens={false} query={{ sql: countSql }} />
            </span>
          )}
        </p>
      </div>
      <div className="GoalsV2__Card__summary">
        <p> {summary} </p>
        <Button
          className="GoalsV2__Card__summary__link"
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
