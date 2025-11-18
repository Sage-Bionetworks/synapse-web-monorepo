import { GoalsDataProps } from './Goals'
import ExpandableContent from '../home_page/ExpandableContent'
import QueryCount from '../QueryCount/QueryCount'
import Button from '@/react-ui/components/Button'

export default function GoalsMobile({
  link,
  summary,
  countSql,
  title,
  linkText = 'Explore',
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
        variant="outlined"
        color="secondary"
        className="Goals__Mobile__Content__Link"
        href={link}
      >
        {linkText}
      </Button>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
