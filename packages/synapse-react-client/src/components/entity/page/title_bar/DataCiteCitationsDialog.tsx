import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  List,
  ListItem,
  Link,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { CitingWork } from './useDataCiteUsage'
import { sanitize } from '@/utils/functions/SanitizeHtmlUtils'

type Props = { open: boolean; onClose: () => void; citations: CitingWork[] }

export const DataCiteCitationsDialog: React.FC<Props> = ({
  open,
  onClose,
  citations,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Citations
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
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
                  {w.publisher ? `${w.publisher} · ` : ''}
                  {w.publicationYear ?? ''}
                </Typography>
              </ListItem>
            )
          })}
        </List>
      </DialogContent>
    </Dialog>
  )
}
