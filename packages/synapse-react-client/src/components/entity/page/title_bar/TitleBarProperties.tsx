import { useGetEntityBundle, useGetFeatureFlag } from '@/synapse-queries'
import { Box, Divider, Link, Stack, Typography } from '@mui/material'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { ReactNode, useState } from 'react'
import AddConditionsForUseButton from '../../../AccessRequirement/AddConditionsForUseButton/AddConditionsForUseButton'
import { useGetEntityTitleBarProperties } from './useGetEntityTitleBarProperties'

export type TitleBarPropertiesProps = {
  entityId: string
  versionNumber?: number
  /* Callback invoked when an ACT member clicks "Add Conditions for Use". */
  onActMemberClickAddConditionsForUse: () => void
}

type PropertyProps = {
  title: string
  value: ReactNode
}
function Property(props: PropertyProps) {
  const { title, value } = props
  return (
    <tr>
      <td style={{ paddingRight: '1em' }}>
        <Typography
          component={'span'}
          variant={'smallText1'}
          sx={{
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
      </td>
      <td>
        <Typography component={'span'} variant={'smallText1'}>
          {value}
        </Typography>
      </td>
    </tr>
  )
}

/**
 * The TitleBarProperties component displays a tabular view of the entity metadata on the Entity page.
 */
export default function TitleBarProperties(props: TitleBarPropertiesProps) {
  const { entityId, versionNumber, onActMemberClickAddConditionsForUse } = props

  // We don't need the entire bundle, but it's fetched for the rest of the title bar and useGetEntityTitleBarProperties below, so the cache will be hot.
  const { data: bundle } = useGetEntityBundle(entityId, versionNumber)

  const isFeatureEnabled = useGetFeatureFlag(FeatureFlagEnum.DESCRIPTION_FIELD)

  // Actual entity data is fetched and transformed in this custom hook
  const properties = useGetEntityTitleBarProperties(entityId, versionNumber)

  const [showAllProperties, setShowAllProperties] = useState(false)

  return (
    <Box sx={{ padding: '20px 40px' }}>
      <Stack
        direction={'row'}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          sx={{
            alignItems: 'flex-start',
          }}
        >
          {/* Always show the first 4 properties*/}
          <table>
            <tbody>
              {properties.slice(0, 2).map(p => {
                return <Property key={p.key} title={p.title} value={p.value} />
              })}
            </tbody>
          </table>
          {properties.length > 2 && (
            <table>
              <tbody>
                {properties.slice(2, 4).map(p => {
                  return (
                    <Property key={p.key} title={p.title} value={p.value} />
                  )
                })}
              </tbody>
            </table>
          )}
          {/* If there are 5 or 6 properties, show them in the last column */}
          {(properties.length === 5 || properties.length === 6) && (
            <table>
              <tbody>
                {properties.slice(4, 6).map(p => {
                  return (
                    <Property key={p.key} title={p.title} value={p.value} />
                  )
                })}
              </tbody>
            </table>
          )}
          {/* If there are more than 6 properties, then just show a button that toggles showing the rest */}
          {properties.length > 6 && (
            <Link onClick={() => setShowAllProperties(v => !v)}>
              {showAllProperties
                ? 'Hide properties'
                : `${properties.length - 4} more properties`}
            </Link>
          )}
        </Stack>
        <AddConditionsForUseButton
          entityId={entityId}
          onACTMemberClick={onActMemberClickAddConditionsForUse}
        />
      </Stack>
      {showAllProperties && (
        <Box sx={{ pt: '20px' }}>
          <table>
            <tbody>
              {/* Show the remaining properties. */}
              {properties.slice(4, Infinity).map(p => {
                return <Property key={p.key} title={p.title} value={p.value} />
              })}
            </tbody>
          </table>
        </Box>
      )}
      {bundle?.entity?.description && isFeatureEnabled && (
        <Box sx={{ marginTop: '10px', maxWidth: '720px' }}>
          {bundle?.entity?.description}
        </Box>
      )}
    </Box>
  )
}
