import { GoalsV2DataProps } from './GoalsV2'
import ExpandableContent from '../home_page/ExpandableContent'
import QueryCount from '../QueryCount/QueryCount'
import Button from '@/react-ui/components/Button'

export default function GoalsV2Mobile({
  link,
  summary,
  countSql,
  title,
}: GoalsV2DataProps) {
  const titleElement = (
    <div>
      {countSql && (
        <span>
          <QueryCount parens={false} query={{ sql: countSql }} />
        </span>
      )}
      <span> {title} </span>
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
