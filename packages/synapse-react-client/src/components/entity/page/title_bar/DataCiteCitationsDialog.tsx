import { List, ListItem, Link, Typography, Button } from '@mui/material'
import { CitingWork } from './useDataCiteUsage'
import { sanitize } from '@/utils/functions/SanitizeHtmlUtils'
import { DialogBase } from '@/components/DialogBase'

type Props = { open: boolean; onClose: () => void; citations: CitingWork[] }

export const DataCiteCitationsDialog: React.FC<Props> = ({
  open,
  onClose,
  citations,
}) => {
  return (
    <DialogBase
      title={'Cited by'}
      onCancel={() => {
        onClose()
      }}
      open={open}
      content={
        <List>
          {citations.map(w => {
            const title = w.title ?? w.doi
            return (
              <ListItem key={w.id} alignItems="flex-start">
                <Typography>
                  <Link
                    href={`https://doi.org/${w.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: sanitize(title) }}
                    />
                  </Link>
                  <br />
                  {w.containerTitle ? `${w.containerTitle} · ` : ''}
                  {w.publisher ? `${w.publisher} · ` : ''}
                  {w.publicationYear ?? ''}
                </Typography>
              </ListItem>
            )
          })}
        </List>
      }
      actions={
        <>
          <Button variant={'outlined'} onClick={() => onClose()}>
            Close
          </Button>
        </>
      }
    />
  )
}
