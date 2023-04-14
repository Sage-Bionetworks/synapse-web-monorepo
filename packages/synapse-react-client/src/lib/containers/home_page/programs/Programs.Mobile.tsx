import React from 'react'
import { ProgramsDataProps } from './Programs'
import ExpandableContent from '../ExpandableContent'
import { Button } from 'react-bootstrap'
import { ImageFileHandle } from '../../widgets/ImageFileHandle'

export default function ProgramsMobile({
  link,
  summary,
  title,
  color,
  fileHandleAssociation,
  exploreLink,
}: ProgramsDataProps) {
  const titleElement = (
    <div className="Programs__Mobile__Header">
      <span className="Programs__Card__header__icon">
        {fileHandleAssociation && (
          <ImageFileHandle fileHandleAssociation={fileHandleAssociation} />
        )}
      </span>
      <span className="Programs__Mobile__Header__Title"> {title} </span>
    </div>
  )
  const content = (
    <div className="Programs__Mobile__Content">
      {link && (
        <p className="Programs__Card__header__info__link">
          <a
            className="highlight-link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
        </p>
      )}
      <p>{summary}</p>
      <Button variant="secondary" size="lg" href={exploreLink}>
        Explore
      </Button>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
