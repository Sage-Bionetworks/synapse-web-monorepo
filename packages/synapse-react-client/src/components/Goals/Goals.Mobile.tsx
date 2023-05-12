import React from 'react'
import { GoalsDataProps } from './Goals'
import ExpandableContent from '../home_page/ExpandableContent'
import QueryCount from '../QueryCount/QueryCount'
import { Button } from '@mui/material'

export default function GoalsMobile({
  link,
  summary,
  countSql,
  title,
}: GoalsDataProps) {
  const titleElement = (
    <div className="Goals__Mobile__Header">
      {countSql && (
        <span className="Goals__Mobile__Header__Count">
          <QueryCount parens={false} query={{ sql: countSql }} />
        </span>
      )}
      <span className="Goals__Mobile__Header__Title"> {title} </span>
    </div>
  )
  const content = (
    <div className="Goals__Mobile__Content">
      <p>{summary}</p>
      <Button
        variant="contained"
        color="secondary"
        className="Goals__Mobile__Content__Link"
        href={link}
      >
        Explore
      </Button>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
