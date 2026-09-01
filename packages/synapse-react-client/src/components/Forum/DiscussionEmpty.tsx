import { Stack, Typography, Button, Box } from '@mui/material'
import Illustrations from '../../assets/illustrations'
import styles from './DiscussionEmpty.module.scss'

type DiscussionEmptyProps = {
  onViewForumClicked: () => void
}

function DiscussionEmpty({ onViewForumClicked }: DiscussionEmptyProps) {
  return (
    <Stack className={styles.container}>
      <Illustrations.Discussions2 />
      <Box>
        <Typography className={styles.title}>No discussions yet</Typography>
        <Typography className={styles.subtitle}>
          Mentions of this file will be shown here.{' '}
        </Typography>
      </Box>
      <Button
        onClick={onViewForumClicked}
        className={styles.button}
        variant="outlined"
      >
        View Discussion Forum
      </Button>
    </Stack>
  )
}

export default DiscussionEmpty
