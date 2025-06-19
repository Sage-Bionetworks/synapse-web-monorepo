import { useGetEntity } from '@/synapse-queries/index'
import { useLinkFileEntityToURL } from '@/utils/hooks/useUploadFileEntity/useLinkFileEntityToURL'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import { noop } from 'lodash-es'
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

type LinkToURLProps = {
  /** The ID of the FileEntity that should be updated, or container entity in which a new FileEntity should be created. */
  entityId: string
  /** Invoked when the validity of the form changes (e.g. to disable/activate a submit button) */
  onIsValidChanged?: (isValid: boolean) => void
  /** Invoked when the call to create or update the entity succeeds. */
  onSuccess?: (newOrUpdatedEntity: FileEntity) => void
}

export type LinkToURLHandle = {
  submit: () => void
}

export const LinkToURL = forwardRef(function LinkToURL(
  props: LinkToURLProps,
  ref: ForwardedRef<LinkToURLHandle>,
) {
  const { entityId, onIsValidChanged = noop, onSuccess = noop } = props

  const [url, setUrl] = useState('')
  const [name, setName] = useState('')

  const { data: entity } = useGetEntity(entityId)
  const isFileEntity =
    entity?.concreteType === 'org.sagebionetworks.repo.model.FileEntity'

  const { mutate, error } = useLinkFileEntityToURL({
    onSuccess,
  })

  useEffect(() => {
    const isValid = url.trim().length > 0
    onIsValidChanged(isValid)
  }, [url, onIsValidChanged])

  useImperativeHandle(ref, () => ({
    submit: () => {
      mutate({
        url: url.trim(),
        name: name.trim(),
        entityId,
      })
    },
  }))

  if (!entity) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <SynapseSpinner size={40} />
      </Box>
    )
  }

  return (
    <Stack
      sx={{
        gap: 2,
      }}
    >
      <Typography variant={'body1'}>
        Provide a URL to create a link to a file that is located in external
        storage or hosted on the web. Metadata, provenance, and annotations
        related to the file can be stored in Synapse, but the file data itself
        can only be accessed using the link.
      </Typography>
      <TextField
        label="URL"
        required
        fullWidth
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      {!isFileEntity && (
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
        />
      )}
      {error && (
        <Alert severity={'error'} sx={{ my: 2 }}>
          {error?.message ??
            'An error occurred while attempting to create the link.'}
        </Alert>
      )}
    </Stack>
  )
})
