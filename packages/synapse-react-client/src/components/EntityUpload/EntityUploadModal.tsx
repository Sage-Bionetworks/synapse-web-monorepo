import { Box, Button, Tab, Tabs } from '@mui/material'
import {
  ForwardedRef,
  forwardRef,
  useRef,
  useState,
  KeyboardEvent,
} from 'react'
import { UploaderState } from '../../utils/hooks/useUploadFileEntity/useUploadFileEntities'
import { DialogBase } from '../DialogBase'
import { displayToast } from '../ToastMessage/ToastMessage'
import { EntityUpload, EntityUploadHandle } from './EntityUpload'
import { LinkToURL, LinkToURLHandle } from './LinkToURL'

type EntityUploadModalProps = {
  entityId: string
  open: boolean
  onClose: () => void
}

enum UploadTab {
  UploadFile,
  LinkToURL,
}

export const EntityUploadModal = forwardRef(function EntityUploadModal(
  props: EntityUploadModalProps,
  ref: ForwardedRef<EntityUploadHandle>,
) {
  const { entityId, open, onClose } = props
  const [tabValue, setTabValue] = useState<UploadTab>(UploadTab.UploadFile)

  const [uploadState, setUploadState] = useState<UploaderState>('LOADING')

  const [isLinkFormValid, setIsLinkFormValid] = useState(false)
  const linkToUrlFormRef = useRef<LinkToURLHandle>(null)

  const disableClose =
    uploadState === 'PROMPT_USER' || uploadState === 'UPLOADING'
  const disableCancel = disableClose || uploadState === 'COMPLETE'

  const disableFinish =
    tabValue === UploadTab.UploadFile
      ? uploadState !== 'COMPLETE'
      : !isLinkFormValid

  function onFinish() {
    if (!disableFinish) {
      if (tabValue === UploadTab.UploadFile) {
        onClose()
      } else {
        linkToUrlFormRef.current!.submit()
      }
    }
  }

  return (
    <DialogBase
      DialogProps={{
        onKeyUp: (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            onFinish()
          }
        },
      }}
      title={'Upload or Link to File'}
      open={open}
      maxWidth={'md'}
      fullWidth
      content={
        <>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={tabValue}
            onChange={(_e, newValue) => setTabValue(newValue as number)}
            sx={{ mb: 2 }}
          >
            <Tab label={'Upload File'} value={UploadTab.UploadFile} />
            <Tab label={'Link to URL'} value={UploadTab.LinkToURL} />
          </Tabs>
          <Box display={tabValue === UploadTab.UploadFile ? 'block' : 'none'}>
            <EntityUpload
              ref={ref}
              entityId={entityId}
              onStateChange={setUploadState}
            />
          </Box>
          <Box display={tabValue === UploadTab.LinkToURL ? 'block' : 'none'}>
            <LinkToURL
              ref={linkToUrlFormRef}
              entityId={entityId}
              onIsValidChanged={setIsLinkFormValid}
              onSuccess={entity => {
                displayToast(`Successfully created "${entity.name}"`, 'success')
                onClose()
              }}
            />
          </Box>
        </>
      }
      onCancel={() => {
        if (!disableClose) {
          onClose()
        }
      }}
      hasCloseButton={!disableClose}
      actions={
        <>
          <Button
            variant={'outlined'}
            onClick={() => {
              onClose()
            }}
            disabled={disableCancel}
          >
            Cancel
          </Button>
          <Button
            variant={'contained'}
            onClick={onFinish}
            disabled={disableFinish}
          >
            Finish
          </Button>
        </>
      }
    />
  )
})
