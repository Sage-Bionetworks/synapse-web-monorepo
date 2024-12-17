import React from 'react'
import { GoalsV2DataProps } from './GoalsV2'
import ExpandableContent from '../home_page/ExpandableContent'
import QueryCount from '../QueryCount/QueryCount'
import { Button } from '@mui/material'

export default function GoalsV2Mobile({
  link,
  summary,
  countSql,
  title,
}: GoalsV2DataProps) {
  const titleElement = (
    <div className="GoalsV2__Mobile__Header">
      {countSql && (
        <span className="GoalsV2__Mobile__Header__Count">
          <QueryCount parens={false} query={{ sql: countSql }} />
        </span>
      )}
      <span className="GoalsV2__Mobile__Header__Title"> {title} </span>
    </div>
  )
  const content = (
    <div className="GoalsV2__Mobile__Content">
      <p>{summary}</p>
      <Button
        variant="contained"
        color="secondary"
        className="GoalsV2__Mobile__Content__Link"
        href={link}
      >
        Explore
      </Button>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
