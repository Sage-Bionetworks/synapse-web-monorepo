import { GoalsV3CardProps } from './GoalsV3'
import ExpandableContent from '../home_page/ExpandableContent'
import QueryCount from '../QueryCount/QueryCount'
import Button from '@/react-ui/components/Button'

export default function GoalsV3Mobile({
  link,
  summary,
  countSql,
  title,
}: GoalsV3CardProps) {
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
    <div>
      <p>{summary}</p>
      <Button variant="contained" color="secondary" href={link}>
        Explore
      </Button>
    </div>
  )
  return <ExpandableContent title={titleElement} content={content} />
}
