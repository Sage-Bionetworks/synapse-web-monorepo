import { useState, useEffect } from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import {
  Box,
  Button,
  Divider,
  Collapse,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useGetEntityTitleBarProperties } from '@/components/entity/page/title_bar/useGetEntityTitleBarProperties'
import styles from './EntitySidebar.module.scss'
import useGetEntityMetadata from '@/utils/hooks/useGetEntityMetadata'
import { entityTypeToFriendlyName } from '@/utils/functions/EntityTypeUtils'
import { ENTITY_SIDEBAR_STATE_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'

type EntitySidebarProps = {
  entityId: string
  versionNumber?: number
}

export default function EntitySidebar(props: EntitySidebarProps) {
  const { entityId, versionNumber } = props

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

  const { entityBundle } = useGetEntityMetadata(entityId, versionNumber)

  const friendlyName = entityBundle
    ? entityTypeToFriendlyName(entityBundle.entityType)
    : ''

  const properties = useGetEntityTitleBarProperties(entityId, versionNumber)

  const [open, setOpen] = useState(() => {
    const savedState = localStorage.getItem(
      ENTITY_SIDEBAR_STATE_LOCALSTORAGE_KEY,
    )
    return savedState !== null ? savedState === 'true' : true
  })

  useEffect(() => {
    localStorage.setItem(ENTITY_SIDEBAR_STATE_LOCALSTORAGE_KEY, String(open))
  }, [open])

  const sidebarContent = (
    <Box className={styles.content}>
      <Typography variant="overline" className={styles.sidebarHeader}>
        About this {friendlyName}
      </Typography>
      <Divider className={styles.divider} />
      <Stack className={styles.propertiesContainer}>
        {properties.map(property => (
          <Stack key={property.key} className={styles.propertyRow}>
            <Typography className={styles.propertyTitle}>
              {property.title}
            </Typography>
            <Typography
              className={styles.propertyValue}
              variant="smallText1"
              component="div"
            >
              {property.value}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  )

  return (
    <Box className={styles.panel}>
      <Button
        onClick={() => setOpen(prev => !prev)}
        className={styles.toggleButton}
      >
        <Typography variant="smallText1" className={styles.toggleButtonText}>
          {open ? 'Collapse' : 'Expand'} Sidebar
        </Typography>
        {open ? (
          <KeyboardDoubleArrowRightIcon className={styles.icon} />
        ) : (
          <KeyboardDoubleArrowLeftIcon className={styles.icon} />
        )}
      </Button>
      <Collapse
        key={isMobile ? 'vertical' : 'horizontal'}
        in={open}
        orientation={isMobile ? 'vertical' : 'horizontal'}
        timeout={{ enter: 200, exit: 200 }}
      >
        {sidebarContent}
      </Collapse>
    </Box>
  )
}
