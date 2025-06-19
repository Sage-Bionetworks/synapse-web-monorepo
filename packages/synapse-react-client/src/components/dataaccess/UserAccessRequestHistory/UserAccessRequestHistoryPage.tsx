import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { UserAccessRequestHistoryTable } from './UserAccessRequestHistoryTable'

type FaqItem = {
  summary: string
  details: string
}

const faqContent: FaqItem[] = [
  // {
  //   summary:
  //     'Why do I still have access to data when I have an expired, canceled, or rejected access request?',
  //   details:
  //     "This table shows all the requests you've ever been part of, including requests that were canceled, rejected, or that have since expired. If an older request was canceled, rejected, or has expired, but a newer request was approved and is still active, you'll still have access to the data.",
  // },
  // {
  //   summary: 'Some other question?',
  //   details: 'Here is another answer!',
  // },
]

export function UserAccessRequestHistoryPage() {
  return (
    <Stack
      sx={{
        gap: 2,
      }}
    >
      <Typography variant="headline1" gutterBottom>
        History of your access requests
      </Typography>
      <Typography variant="body1" gutterBottom>
        This list represents every access request you have been named in. It
        includes requests you&apos;ve submitted yourself, and requests submitted
        by others, which you were named as a requester on.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Note: Requests where your access has been revoked will appear as
        &quot;Approved&quot;.
      </Typography>
      {faqContent.length > 0 && (
        <>
          <Typography variant="headline2" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <div>
            {faqContent.map(faq => (
              <Accordion key={faq.summary} sx={{ p: 1 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="headline3">{faq.summary}</Typography>
                </AccordionSummary>
                <AccordionDetails>{faq.details}</AccordionDetails>
              </Accordion>
            ))}
          </div>
        </>
      )}
      <UserAccessRequestHistoryTable />
    </Stack>
  )
}
