import { useState, useEffect, useId } from 'react'
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
import {
  EntityProperty,
  useGetEntityTitleBarProperties,
} from '@/components/entity/page/title_bar/useGetEntityTitleBarProperties'
import styles from './EntitySidebar.module.scss'
import useGetEntityMetadata from '@/utils/hooks/useGetEntityMetadata'
import { entityTypeToFriendlyName } from '@/utils/functions/EntityTypeUtils'
import { ENTITY_SIDEBAR_STATE_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import AccessAndPermissions from './AccessAndPermissions'

type EntitySidebarProps = {
  entityId: string
  versionNumber?: number
}

/**
 * Renders one property as a term/definition pair. The definition is labelled by its term, so assistive technology
 * (and role-based queries) can find a value by its property name, e.g. `getByRole('definition', { name: 'MD5' })`.
 */
function EntitySidebarProperty(props: { property: EntityProperty }) {
  const { property } = props
  const titleId = useId()
  return (
    <Stack className={styles.propertyRow}>
      <Typography component="dt" id={titleId} className={styles.propertyTitle}>
        {property.title}
      </Typography>
      <Typography
        component="dd"
        aria-labelledby={titleId}
        className={styles.propertyValue}
        variant="smallText1"
        sx={{ m: 0 }}
      >
        {property.value}
      </Typography>
    </Stack>
  )
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
    <Stack className={styles.content}>
      <div>
        <Typography variant="overline" className={styles.sidebarHeader}>
          About this {friendlyName}
        </Typography>
        <Divider />
        <Stack
          component="dl"
          className={styles.propertiesContainer}
          sx={{ m: 0 }}
        >
          {properties.map(property => (
            <EntitySidebarProperty key={property.key} property={property} />
          ))}
        </Stack>
      </div>
      <div>
        <Typography variant="overline" className={styles.sidebarHeader}>
          ACCESS & PERMISSIONS FOR THIS {friendlyName}
        </Typography>
        <Divider />
        <AccessAndPermissions
          entityId={entityId}
          versionNumber={versionNumber}
        />
      </div>
    </Stack>
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
