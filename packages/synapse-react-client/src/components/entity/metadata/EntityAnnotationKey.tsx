import { Box, Tooltip } from '@mui/material'

type EntityAnnotationKeyProps = {
  /** The key of the annotation */
  annotationKey: string
  /** An optional title of the annotation */
  title?: string
  /** An optional */
  description?: string
}

/**
 * A component used to display an Entity annotation key.
 */
export function EntityAnnotationKey(props: EntityAnnotationKeyProps) {
  const { annotationKey, title, description } = props

  if (title == annotationKey && !description) {
    return annotationKey
  }

  return (
    <Tooltip
      placement={'left'}
      title={
        <>
          {title != annotationKey && (
            <p>
              <strong>Annotation Key: {annotationKey}</strong>
            </p>
          )}
          <p>{description}</p>
        </>
      }
    >
      <Box
        component="span"
        sx={theme => ({
          textDecorationLine: 'underline',
          textDecorationStyle: 'dotted',
          textDecorationThickness: '15%',
          textDecorationColor: theme.palette.secondary.main,
          textUnderlineOffset: '4px',
          cursor: 'pointer',
        })}
      >
        {title}
      </Box>
    </Tooltip>
  )
}
