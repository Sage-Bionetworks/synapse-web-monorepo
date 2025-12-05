import { useListPortalsInfinite } from '@/synapse-queries/portal/useListPortals'
import { Box, Typography, CircularProgress, Alert, Button } from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import PortalCard from './PortalCard'
import CreatePortalModal from './CreatePortalModal'
import styles from './PortalList.module.scss'
import { Add } from '@mui/icons-material'

export function PortalList(): React.ReactNode {
  const { ref, inView } = useInView()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const {
    data,
    status,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useListPortalsInfinite({
    throwOnError: false,
  })

  useEffect(() => {
    if (
      status === 'success' &&
      !isFetchingNextPage &&
      hasNextPage &&
      fetchNextPage &&
      inView
    ) {
      fetchNextPage()
    }
  }, [status, hasNextPage, isFetchingNextPage, fetchNextPage, inView])

  const allPortals = data?.pages.flatMap(page => page.page ?? []) ?? []

  if (error) {
    return (
      <Alert severity="error" className={styles.errorAlert}>
        Error loading portals: {error.message}
      </Alert>
    )
  }

  return (
    <Box className={styles.portalListContainer}>
      <Box className={styles.header}>
        <Typography variant="h4" component="h2" className={styles.title}>
          Portals
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => setIsCreateModalOpen(true)}
        >
          Create New Portal
        </Button>
      </Box>

      {isLoading && (
        <Box className={styles.loadingContainer}>
          <CircularProgress />
        </Box>
      )}

      {!isLoading && allPortals.length === 0 && (
        <Typography variant="body1" color="text.secondary">
          No portals found.
        </Typography>
      )}

      {allPortals.length > 0 && (
        <Box className={styles.portalGrid}>
          {allPortals.map(portal => (
            <Fragment key={portal.id ?? JSON.stringify(portal)}>
              <PortalCard portal={portal} />
            </Fragment>
          ))}
        </Box>
      )}

      {/* Trigger for loading next page */}
      {hasNextPage && <div ref={ref} className={styles.loadMoreTrigger} />}

      {isFetchingNextPage && (
        <Box className={styles.loadingMoreContainer}>
          <CircularProgress size={32} />
        </Box>
      )}

      <CreatePortalModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </Box>
  )
}

export default PortalList
