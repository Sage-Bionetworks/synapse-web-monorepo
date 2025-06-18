import ConditionalWrapper from '@/components/utils/ConditionalWrapper'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import IconSvg, { IconName } from '../IconSvg'

export type TopicProps = {
  isSubscribed: boolean
  isLoading: boolean
  icon: IconName
  name?: string
  nameHref?: string
  onToggleSubscribe: () => void
}

/**
 * Represents a single object on which a Synapse user has subscribed to notifications
 * @param props
 * @constructor
 */
export default function Topic(props: TopicProps) {
  const { icon, isSubscribed, isLoading, nameHref, name, onToggleSubscribe } =
    props

  return (
    <Stack
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Button
        sx={{ width: '80px', mr: 3 }}
        onClick={onToggleSubscribe}
        variant={isSubscribed ? 'outlined' : 'contained'}
        disabled={isLoading}
      >
        {isSubscribed ? 'Unfollow' : 'Follow'}
      </Button>
      <IconSvg icon={icon} sx={{ color: 'primary.main', mr: 1.5 }} />
      <ConditionalWrapper
        condition={!name}
        wrapper={Skeleton}
        wrapperProps={{ width: 300, height: 20 }}
      >
        <Link underline={'hover'} href={nameHref} target="_blank">
          {name}
        </Link>
      </ConditionalWrapper>
    </Stack>
  )
}
