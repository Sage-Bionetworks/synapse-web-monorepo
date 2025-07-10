import EcosystemLayout from '@/components/Ecosystem/EcosystemLayout'
import { SkeletonParagraph } from '@/components/index'
import { Stack } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'

function EcosystemSkeleton() {
  const skeletonTitle = <Skeleton width={'80%'} />
  const skeletonContent = (
    <Stack gap={2} py={2}>
      <SkeletonParagraph />
      <SkeletonParagraph />
      <SkeletonParagraph />
    </Stack>
  )
  return (
    <EcosystemLayout
      config={[
        { title: skeletonTitle, content: skeletonContent },
        { title: skeletonTitle, content: skeletonContent },
        { title: skeletonTitle, content: skeletonContent },
      ]}
    />
  )
}

export default EcosystemSkeleton
