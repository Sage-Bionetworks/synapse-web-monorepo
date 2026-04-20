import {
  Box,
  Chip,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import IconSvg from '../IconSvg'

export type ProjectVisibility = 'PRIVATE' | 'DISCOVERABLE' | 'PUBLIC' | 'OPEN'

type VisibilityOption = {
  value: ProjectVisibility
  label: string
  chipText: string
  description: string
  note?: string
  disabled?: boolean
}

const VISIBILITY_OPTIONS: VisibilityOption[] = [
  {
    value: 'PRIVATE',
    label: 'Private',
    chipText: 'Invisible',
    description:
      'Only you and people you invite can see this project exists. Others with the link will see an error.',
  },
  {
    value: 'DISCOVERABLE',
    label: 'Discoverable',
    chipText: 'Visible metadata',
    description:
      'Anyone can find and view this project. Data download is not allowed.',
  },
  {
    value: 'PUBLIC',
    label: 'Public',
    chipText: 'Visible metadata, registered download',
    description:
      'Anyone can find and view this project. Registered Synapse users can download data.',
  },
  {
    value: 'OPEN',
    label: 'Open',
    chipText: 'Fully visible, anonymous download',
    description: 'Anyone can find and view this project and download its data.',
    note: 'Currently available upon request for non-sensitive data.',
    disabled: true,
  },
]

const VISIBILITY_ICONS: Record<
  ProjectVisibility,
  React.ComponentProps<typeof IconSvg>['icon']
> = {
  PRIVATE: 'privateVisibility',
  DISCOVERABLE: 'visibility',
  PUBLIC: 'publicVisibility',
  OPEN: 'openVisibility',
}

export type ProjectVisibilityRadioGroupProps = {
  value: ProjectVisibility
  onChange: (value: ProjectVisibility) => void
}

export function ProjectVisibilityRadioGroup({
  value,
  onChange,
}: ProjectVisibilityRadioGroupProps) {
  return (
    <FormControl component="fieldset">
      <Typography variant="smallText2" component="legend" sx={{ mb: 1, pb: 1 }}>
        Visibility
      </Typography>
      <RadioGroup
        sx={{ mt: 1 }}
        value={value}
        onChange={(_e, val) => onChange(val as ProjectVisibility)}
      >
        {VISIBILITY_OPTIONS.map(option => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            sx={{
              alignItems: 'flex-start',
              mb: 1,
              opacity: option.disabled ? 0.5 : 1,
            }}
            control={<Radio sx={{ pt: '2px' }} />}
            label={
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <IconSvg
                  icon={VISIBILITY_ICONS[option.value]}
                  wrap={false}
                  sx={{ mt: '2px', flexShrink: 0 }}
                />
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      flexWrap: 'wrap',
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="span"
                      fontWeight="bold"
                    >
                      {option.label}
                    </Typography>
                    <Chip
                      label={option.chipText}
                      size="small"
                      sx={{
                        bgcolor: 'grey.200',
                        color: 'text.secondary',
                        height: 20,
                        fontSize: '0.7rem',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 0.25 }}
                  >
                    {option.description}
                    {option.note && (
                      <>
                        {' '}
                        <em>{option.note}</em>
                      </>
                    )}
                  </Typography>
                </Box>
              </Box>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
